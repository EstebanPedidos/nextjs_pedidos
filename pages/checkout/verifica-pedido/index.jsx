//Pauquetes
import { useState, useEffect } from 'react';
//Tag Manager
import TagManager from 'react-gtm-module'
//hooks
import {useLocalStorage} from '../../../hooks/useLocalStorage'
//next js
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head'
//Paquetes
import {
	Box,
	Grid,
	Paper,
	Typography,
	Button,
	TextField,
	Divider,
	Alert,
	AlertTitle,
	Skeleton, Hidden
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LoadingButton from '@mui/lab/LoadingButton';
//Componentes MUI4

//Servicos
import Services from '../../services/Services';
//Funciones
import Precios from '../../services/Precios';
import RandomUser from '../../services/RandomUser'
//Componentes
import Alertas from '../Alertas';
import ItemFavorites from './ItemFavorites';
import Cart from './Cart';
import Eliminar from '../modals/Eliminar';
import ModalExecutive from '../modals/ModalExecutive';
import { Layout } from 'layout/Layout';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.primary,
	},
	rootdiscount: {
		padding: '2px 4px',
		display: 'flex',
	},
	emptyCart: {
		padding: theme.spacing(1),
		width: '160px',
	},
}));

export default function Verifica_pedido() {
	const classes = useStyles();
	const ruter = useRouter();
	const [Remove, setRemove] = useState([]);
	const [deleteAll, setDeleteAll] = useState(false);
	const [modificar, setModificar] = useState(0);
	const [ejecutivo, setEjecutivo] = useState({ ejecutivo: '', slmn: 0 });
	const [cupon, setCupon] = useState('');
	const [alerta, setAlerta] = useState({});
	const [carrito, setCarrito] = useState({});
	const [partidas, setPartidas] = useState(0);
	const [partidas2,setPartidas2]  = useLocalStorage('SesPartidas',0)
	const [isEjecutivo, setisEjecutivo] = useState(false);
	const [total, setTotal] = useState(0);
	const [favoritos, setFavoritos] = useState([]);
	const [articulos, setArticulos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [cambioSG, setCambioSG] = useState(0);

	useEffect(() => {
		const getData = async () => {
			let cliente     = await (localStorage.getItem('Cliente') === undefined || localStorage.getItem('Cliente') === null)?201221:localStorage.getItem('Cliente')
            	cliente     = await (parseInt(cliente) === 0)?201221:cliente            
        	let usuario     = await (localStorage.getItem('Usuario') === undefined || localStorage.getItem('Usuario') === null)?RandomUser():localStorage.getItem('Usuario')
            	usuario     = await (parseInt(usuario) === 0)?RandomUser():usuario 
			let afiliado 	= await localStorage.getItem('afiliado');
			let services 	= await Services('GET','/carritoyreservado/getCarrito?clienteNum='+cliente+'&usuarioNum='+usuario +'&top=10&afiliado='+afiliado,{});
			let carritoS 	= await services.data;
			let totalS 		= await carritoS.configCarrito.precarrito
				.map((item) =>
					item.precio * item.cantidad +
					item.precioSeguro * item.cantSeguro +
					item.precioGarant1 * item.cantGarant1+
					item.precioGarant2 * item.cantGarant2
				)
				.reduce((prev, curr) => prev + curr, 0);
			let isEjecutivo = await (carritoS.configCarrito.resenapedidos.length > 0);
			let num_partidas = await carritoS.configCarrito.precarrito.length;
			let pyitemsfavoritos = await carritoS.configCarrito.pyitemsfavoritos;
			let favoritos = await getFavoritos(pyitemsfavoritos);
			async function getFavoritos(pyitemsfavoritos) {
				let f = [];
				pyitemsfavoritos.forEach(function (item) {
					if (num_partidas > 0) {
						if (item.tipo === 'I' && item.disponibilidad > 0) {
							f.push(item);
						}
					} else {
						if (
							pyitemsfavoritos.find((items) => {
								return items.tipo === 'V';
							}) !== undefined
						) {
							if (item.tipo === 'V' && item.disponibilidad > 0) {
								f.push(item);
							}
						} else {
							if (item.tipo === 'I' && item.disponibilidad > 0) {
								f.push(item);
							}
						}
					}
				});
				return f;
			}
			let articulos = await carritoS.configCarrito.precarrito.map(
				(item) => item.item_num
			);
			setCarrito(carritoS);
			setPartidas(num_partidas);
			setisEjecutivo(isEjecutivo);
			setTotal(totalS);
			setFavoritos(favoritos);
			setArticulos(articulos);
			setPartidas2(carritoS.configCarrito.precarrito.length)
		};
		getData();
	}, [partidas,cambioSG]);

	async function add(item_num) {
		setLoading(true);
		let cliente     = await (localStorage.getItem('Cliente') === undefined || localStorage.getItem('Cliente') === null)?201221:localStorage.getItem('Cliente')
            cliente     = await (parseInt(cliente) === 0)?201221:cliente            
		let usuario     = await (localStorage.getItem('Usuario') === undefined || localStorage.getItem('Usuario') === null)?RandomUser():localStorage.getItem('Usuario')
			usuario     = await (parseInt(usuario) === 0)?RandomUser():usuario
		let item_add 	= await favoritos.filter(item => item.itemNum === item_num)
		Services('POST-NOT', '/carritoyreservado/agregaCarrito', {
			cliente_num: cliente,
			usuario_num: usuario,
			cantidad: 1,
			item_num: item_num,
			seguro: '',
			garantia: '',
		}).then((response) => {
			if (response.data > 0) {
				setPartidas(response.data);
				setPartidas2(parseInt(response.data))
				setLoading(false);
				const tagManagerArgs = {
					gtmId: 'GTM-NLQV5KF',
					dataLayer: {
						'event': 'addToCart',
						'ecommerce': {
						  'currencyCode': 'MXN',
						  'add': {                                
							'products': [{                        
							  'name': item_add[0].tituloCompuesto,
							  'id': item_num,
							  'price': item_add[0].precio,
							  'brand': item_add[0].marca,
							  'quantity': 1
							 }]
						  }
						}
					},
				}
				TagManager.initialize(tagManagerArgs)
			}
		});
	}

	async function Delete(item_num) {
		setLoading(true);
		if (deleteAll && Remove.length === 0) {
			setAlerta({
				severity: 'error',
				mensaje: 'Selecciona un articulo',
				vertical: 'bottom',
				horizontal: 'right',
			});
			setLoading(false);
			return;
		}
		let cliente     = await (localStorage.getItem('Cliente') === undefined || localStorage.getItem('Cliente') === null)?201221:localStorage.getItem('Cliente')
            cliente     = await (parseInt(cliente) === 0)?201221:cliente            
		let usuario     = await (localStorage.getItem('Usuario') === undefined || localStorage.getItem('Usuario') === null)?RandomUser():localStorage.getItem('Usuario')
			usuario     = await (parseInt(usuario) === 0)?RandomUser():usuario

		let articulosD = (await (item_num === 'V' || item_num === 'E'))
			? deleteAll
				? Remove.toString()
				: articulos.toString()
			: item_num;
		if(articulosD !== ''){
			let item_rem = await articulosD.split(',')	
			Services(
				'DELETE',
				'/carritoyreservado/deleteCarrito?clienteNum=' +
					cliente +
					'&usuarioNum=' +
					usuario +
					'&items=' +
					articulosD,
				{}
			).then((response) => {
				setLoading(false);
				setPartidas(response.data);
				setPartidas2(parseInt(response.data))	
				try {
					if(item_rem.length > 0){
						item_rem.forEach(function(item_num) {
						   let item_add =  favoritos.filter(item => item.itemNum === item_num)
						    const tagManagerArgs = {
							   gtmId: 'GTM-NLQV5KF',
							   dataLayer: {
								   'event': 'removeFromCart',
								   'ecommerce': {
								   'currencyCode': 'MXN',
								   'add': {                                
									   'products': [{                        
									   'name': item_add[0].tituloCompuesto,
									   'id': item_num,
									   'price': item_add[0].precio,
									   'brand': item_add[0].marca,
									   'quantity': 1
									   }]
								   }
								   }
							   },
						   }
						   TagManager.initialize(tagManagerArgs)
					   });
				   }
				} catch (error) {
					console.log('Error en tag removeFromCart')
				}		
			});
		}
		
	}

	async function UpdateCantidad({ target }) {
		let { name, value, id } =  target;
		let cantidad_ins = await 0;
		 if (parseInt(value) === 0) {
			carrito.configCarrito.precarrito[name].modificar = await true;
			carrito.configCarrito.precarrito[name].cantidad = await 6;
			cantidad_ins = await 6;
		 } else if (id === 'input') {
			cantidad_ins = (await (parseInt(value) > carrito.configCarrito.precarrito[name].existencia))
			? carrito.configCarrito.precarrito[name].existencia
			: value;
			carrito.configCarrito.precarrito[name].cantidad = await cantidad_ins
		 } else {			
			cantidad_ins = await value
			if (id === '' ){
				carrito.configCarrito.precarrito[name].cantidad = await cantidad_ins
			}
		 }
		if(cantidad_ins > 0){
			let item_selec = await carrito.configCarrito.precarrito[name]
			if(item_selec.hasOwnProperty('cantSeguro')){
				if(parseInt(item_selec.cantSeguro) > 0){
					if(id === '' || id === 'Plan'){
						carrito.configCarrito.precarrito[name].cantSeguro = await cantidad_ins
					}
				}
			}
			if(item_selec.hasOwnProperty('cantGarant1')){
				if(parseInt(item_selec.cantGarant1) > 0){
					if(id === '' || id === 'Garantia1'){
						carrito.configCarrito.precarrito[name].cantGarant1 = await cantidad_ins
					}
				}
			}
			if(item_selec.hasOwnProperty('cantGarant2')){
				if(parseInt(item_selec.cantGarant2) > 0){
					if(id === '' || id === 'Garantia2'){
						carrito.configCarrito.precarrito[name].cantGarant2 = await cantidad_ins
					}
				}
			}
		}
		let totalR = await carrito.configCarrito.precarrito
		.map((item) =>
		item.precio * item.cantidad+
		item.precioSeguro * item.cantSeguro +
		item.precioGarant1 * item.cantGarant1+
		item.precioGarant2 * item.cantGarant2)
		.reduce((prev, curr) => prev + curr, 0);
		 setTotal(totalR);
 	}

	async function validaCodigoDescuento() {
		let cliente     = await (localStorage.getItem('Cliente') === undefined || localStorage.getItem('Cliente') === null)?201221:localStorage.getItem('Cliente')
            cliente     = await (parseInt(cliente) === 0)?201221:cliente            
		let usuario     = await (localStorage.getItem('Usuario') === undefined || localStorage.getItem('Usuario') === null)?RandomUser():localStorage.getItem('Usuario')
			usuario     = await (parseInt(usuario) === 0)?RandomUser():usuario
		if(cliente !== 201221){
			if (cupon !== '') {
				Services(
					'GET',
					'/carritoyreservado/validaCodigoDescuento?clienteNum=' +
					cliente+
						'&usuarioNum=' +
						usuario +
						'&cupon=' +
						cupon,
					{}
				).then((response) => {
					if (response.data) {
						setAlerta({
							severity: 'success',
							mensaje: 'Continua para ver el descuento',
							vertical: 'bottom',
							horizontal: 'right',
						});
					} else {
						setAlerta({
							severity: 'error',
							mensaje:
								'Algo salió mal Es posible que el código sea incorrecto o no aplique en tú carrito',
							vertical: 'bottom',
							horizontal: 'right',
						});
					}
				});
			} else {
				setAlerta({
					severity: 'error',
					mensaje: 'Ingresa un código de descuento',
					vertical: 'bottom',
					horizontal: 'right',
				});
			}
		}else{
			setAlerta({
				severity: 'error',
				mensaje:
					'Inicia Session',
				vertical: 'bottom',
				horizontal: 'right',
			});
		}
	}

	async function CambiarPlanes(index,opcion,tipo){
		let item = await carrito.configCarrito.precarrito[index];
		let cliente     = await (localStorage.getItem('Cliente') === undefined || localStorage.getItem('Cliente') === null)?201221:localStorage.getItem('Cliente')
	 		cliente     = await (parseInt(cliente) === 0)?201221:cliente
		let usuario     = await (localStorage.getItem('Usuario') === undefined || localStorage.getItem('Usuario') === null)?RandomUser():localStorage.getItem('Usuario')
			usuario     = await (parseInt(usuario) === 0)?RandomUser():usuario
		let datos       = await '/carritoyreservado/modificaSegGaran?clienteNum='+cliente+'&usuarioNum='+usuario+'&itemNum='+item.item_num+'&idInt='+((opcion===1)?item.cantidad:0)+'&seguro='+((opcion === 2)?(tipo==='S')?1:0:item.cantSeguro)+'&itemGarantia='+((parseInt(item.cantGarant1)> 0)?'ZZZGAEXT1':'ZZZGAEXT2')+'&garantia='+((opcion === 2)?(tipo === 'G')?1:0:((parseInt(item.cantGarant1)> 0)?parseInt(item.cantGarant1):parseInt(item.cantGarant2)))+'&opcion='+opcion
		if(cliente !== 201221){
				Services(
						'PUT',
						datos,
						{}
				).then((response) => {
						setCambioSG(cambioSG+1)
				});
		}
	}

	async function reservaCarrito() {
		setLoading(true);
		let cliente     = await (localStorage.getItem('Cliente') === undefined || localStorage.getItem('Cliente') === null)?201221:localStorage.getItem('Cliente')
            cliente     = await (parseInt(cliente) === 0)?201221:cliente            
		let usuario     = await (localStorage.getItem('Usuario') === undefined || localStorage.getItem('Usuario') === null)?RandomUser():localStorage.getItem('Usuario')
			usuario     = await (parseInt(usuario) === 0)?RandomUser():usuario
		if(cliente !== 201221){
			if (carrito.configCarrito.precarrito.length > 0) {
				var arraySkus = new Array();
				carrito.configCarrito.precarrito.map(function (item) {
					if (item.exis !== 'X') {
						if (item.cantidad > 0) {
							var objeto = new Object();
							objeto.sku = item.item_num.replace(' ', '');
							objeto.cantidad = item.cantidad;
							objeto.seguro = 0;
							objeto.gaex = 0;
							objeto.itemGarant = '';
							objeto.seguro = item.cantSeguro;
							objeto.gaex = (parseInt(item.cantGarant1) > 0)?item.cantGarant1:(parseInt(item.cantGarant2) > 0)?item.cantGarant2:0
							objeto.itemGarant = (parseInt(item.cantGarant1) > 0)?'ZZZGAEXT1':(parseInt(item.cantGarant2) > 0)?'ZZZGAEXT2':'';
							arraySkus.push(objeto);
						} else {
							setLoading(false);
							setAlerta({
								severity: 'error',
								mensaje:
									'El articulo ' +
									item.item_num +
									' no se puede reservar con cantidad 0',
								vertical: 'bottom',
								horizontal: 'right',
							});
							return;
						}
					} else {
						setLoading(false);
						arraySkus = [];
						setAlerta({
							severity: 'error',
							mensaje:
								'El articulo ' +
								item.item_num +
								' no cuenta con existencia',
							vertical: 'bottom',
							horizontal: 'right',
						});
						return;
					}
				});

				if (arraySkus.length > 0) {
					Services(
						'POST',
						'/carritoyreservado/reservaCarrito?clienteNum=' +
							cliente +
							'&usuarioNum=' +
							usuario+
							'&afiliado=' +
							localStorage.getItem('afiliado') +
							'&cupon=' +
							cupon +
							'&ip=192.10.1.166&ejecutivo=' +
							ejecutivo.slmn,
						arraySkus
					).then((response) => {
						if (response.data.pedido > 0) {
							setPartidas2(parseInt(0))
							localStorage.setItem('Pedido', response.data.pedido);
							ruter.push('/checkout/direccion-de-envio');
						} else {
							setAlerta({
								severity: 'error',
								mensaje: 'Error en reservar',
								vertical: 'bottom',
								horizontal: 'right',
							});
							setLoading(false);
						}
					});
				} else {
					setAlerta({
						severity: 'error',
						mensaje: 'No se cuenta con ningun articulo',
						vertical: 'bottom',
						horizontal: 'right',
					});
					setLoading(false);
				}
			}
		}else{
            localStorage.setItem('URL', '/checkout/verfica-pedido');
			ruter.push('/Login')
		}
	}

	return (
		<Layout partidas={partidas2}>
			<Head>
				<title> Carrito de compras | Pedidos.com </title>
  				<meta name="description" content="Pedidos.com, la tienda en línea con amplia variedad de productos. Encuentra ya papelería, tintas y tóners, tecnología, accesorios, muebles, tlapalería, limpieza, cafeteria y ¡Mucho más!. Todo lo que necesitas para tu oficina, negocio, escuela y hogar lo encuentras aquí." />
  				<link rel="canonical" href="/checkout/verifica-pedido" />
			</Head>
		<Box component='div' m={1}>
			<div className={classes.root}>
				<Grid
					container
					justifyContent='space-around'
					alignItems='flex-start'>
					<Grid item xs={12} sm={8}>
						{(carrito.hasOwnProperty('configCarrito'))?
						<ItemFavorites
							favoritos={favoritos}
							add={add}
							loading={loading}
						/>
						:
						<Box sx={{ pt: 0.5 }}>
							<Skeleton width="30%" animation="wave"/>    
							<Skeleton variant="rectangular" width="25%" height={130} animation="wave"/>
							<Skeleton width="25%" animation="wave"/>
						</Box>
						}
						{partidas > 0 ? (
							<Box component='div' m={2}>
								<Box className={classes.root} py={2}>
									<Grid
										container
										direction='row'
										justifyContent='space-between'
										alignItems='center'
										spacing={2}>
										<Grid item xs={6} sm={8}>
											<Typography
												component='h1'
												variant='h5'>
												<Box
													component='span'
													fontWeight='fontWeightBold'>
													Carrito de compra
												</Box>
											</Typography>
										</Grid>
										<Grid
											item
											justifyContent='flex-end'
											xs={6}
											sm={4}>
											{deleteAll ? (
												<Button
													variant='outlined'
													size='large'
													fullWidth
													color='secondary'
													onClick={() => {
														setDeleteAll(false);
													}}>
													Cancelar
												</Button>
											) : (
												<Button
													variant='outlined'
													size='large'
													fullWidth
													sx={{
														borderColor:
															'rgba(166, 173, 185, 0.48)',
														color: '#A6ADB9',
													}}
													onClick={() => {
														setDeleteAll(true);
													}}>
													Varios
												</Button>
											)}
										</Grid>
									</Grid>
								</Box>
								<Divider light />

								{carrito.configCarrito.precarrito.find(
									(items) => {
										return items.exis === 'N';
									}
								) !== undefined && (
									<Box component='div'>
										{' '}
										<Alert severity='warning'>
											<AlertTitle>
												Disponibilidad límitada
											</AlertTitle>
											Es probable que algunos productos{' '}
											<strong>
												No cuenten con suficiente
												disponilidad.
											</strong>
										</Alert>{' '}
										<Alert severity='warning'>
											Uno o varios productos sin
											suficiente disponibilidad.
										</Alert>
									</Box>
								)}
								{carrito.configCarrito.precarrito.find(
									(items) => {
										return items.exis === 'X';
									}
								) !== undefined && (
									<Box component='div'>
										<Alert severity='error'>
											<strong>Sin disponibilidad</strong>{' '}
											de producto
										</Alert>
									</Box>
								)}
								{modificar >= 0 && (
									<Cart
										precarrito={
											carrito.configCarrito.precarrito
										}
										deleteAll={deleteAll}
										Remove={Remove}
										setRemove={setRemove}
										Delete={Delete}
										UpdateCantidad={UpdateCantidad}
										modificar={modificar}
										CambiarPlanes={CambiarPlanes}
									/>
								)}
							</Box>
						) : 
						(carrito.hasOwnProperty('configCarrito'))?
						(
							<Box component='div' py={4}>
								<Divider light variant='middle' />
								<Box className={classes.root} py={2}>
									<Grid
										container
										direction='column'
										justifyContent='center'
										alignItems='center'
										spacing={2}>
										<Grid item xs={12}>
											<Box component='div' m={1} pt={4}>
												<img
													className={
														classes.emptyCart
													}
													src='https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/carrito-v.svg'
													alt='Carrito vacio'
												/>
											</Box>
										</Grid>
										<Grid item xs={12}>
											<Typography
												component='h1'
												variant='h5'>
												<Box
													component='span'
													fontWeight='fontWeightBold'>
													Carrito vacío
												</Box>
											</Typography>
										</Grid>
										<Grid item xs={12}>
											<Link
												variant='contained'
												color='secondary'
												href='/'>
												<a>Comenzar</a>
											</Link>
											{/* <Button component={Link} to={'/home'} variant="contained" color="secondary">Comenzar</Button>      */}
										</Grid>
									</Grid>
								</Box>
							</Box>
						)
						:
						(
						<Box sx={{ pt: 1.5 }}>
							<Skeleton width="40%" variant="rectangular" height={40} sx={{ mb: 1.5 }} animation="wave"/>
							<Skeleton animation="wave" height={5} />
							<Skeleton variant="rectangular" height={150} animation="wave" sx={{ my: 0.5 }}/>
							<Skeleton animation="wave"  height={5} />

						</Box>
							
						)}
					</Grid>
					{(carrito.hasOwnProperty('configCarrito'))?
					<Grid item xs={12} sm={4}>
						<Paper className={classes.paper} elevation={0}>
							<Hidden smDown>
								{isEjecutivo && (
									<div>
										<ModalExecutive
											resenapedidos={
												carrito.configCarrito.resenapedidos
											}
											setEjecutivo={setEjecutivo}
											ejecutivo={ejecutivo.ejecutivo}
										/>
									</div>
								)}
								<div>
									<Box
										component='div'
										m={1}
										className={classes.root}>
										<Grid
											container
											alignItems='center'
											spacing={1}>
											<Grid item xs={6} sm={5} lg={6}>
												<Box textAlign='left'>
													<Typography
														component='h2'
														variant='h6'>
														Resumen
													</Typography>
												</Box>
											</Grid>
											<Grid item xs={6} sm={7} lg={6}>
												{partidas > 0 && (
													<Paper variant='outlined'>
														<Typography variant='body2'>
															<Box
																py={1}
																fontWeight='fontWeightMedium'>
																{partidas}{' '}
																{partidas > 1
																	? `productos`
																	: `producto`}
															</Box>
														</Typography>
													</Paper>
												)}
											</Grid>
										</Grid>
									</Box>
								</div>
							</Hidden>
							<Box component='div'>
								<form
									className={classes.root}
									noValidate
									autoComplete='off'>
									<Divider light />
									<Box
										component='div'
										className={classes.root}
										pt={3}>
										<Grid
											container
											alignItems='center'
											spacing={1}>
											<Grid item xs={6} sm={8} lg={6}>
												<TextField
													label='Código de descuento'
													type='text'
													name='cupon'
													onChange={({ target }) => {
														setCupon(target.value);
													}}
													id='discountcode'
													variant='outlined'
													value={cupon}
												/>
											</Grid>
											<Grid item xs={6} sm={4} lg={6}>
												<Button
													disableElevation
													variant='contained'
													fullWidth
													size='large'
													sx={{
														backgroundColor:
															'#A6ADB9',
													}}
													onClick={
														validaCodigoDescuento
													}>
													Aplicar
												</Button>
											</Grid>
										</Grid>
									</Box>
								</form>
							</Box>
							{partidas > 0 ? (
								<div>
									<Box component='div' m={1} pt={3}>
										<Divider light />
										<Box
											component='div'
											className={classes.root}
											py={3}>
											<Grid
												container
												direction='row'
												justifyContent='space-between'
												alignItems='center'
												spacing={2}>
												<Grid item xs={4}>
													<Box textAlign='left'>
														<Grid
															container
															direction='column'
															justifyContent='center'
															spacing={1}>
															<Grid item>
																<Typography
																	variant='subtitle1'
																	textAlign='left'>
																	Subtotal{' '}
																</Typography>
															</Grid>
															<Grid item>
																<Typography variant='subtitle1'>
																	Envío
																</Typography>
															</Grid>
														</Grid>
													</Box>
												</Grid>
												<Grid item xs={8}>
													<Box textAlign='right'>
														<Grid
															container
															direction='column'
															justifyContent='center'
															spacing={1}>
															<Grid item>
																<Typography variant='subtitle1'>
																	<Box
																		component='span'
																		fontWeight='fontWeightBold'>
																		$
																		{Precios(
																			'formatcurrency',
																			{
																				subtotal:
																					total,
																				fixed: 2,
																			}
																		)}{' '}
																		MXN
																	</Box>
																</Typography>
															</Grid>
															<Grid item>
																<Typography variant='body2'>
																	Calculado
																	adelante
																</Typography>
															</Grid>
														</Grid>
													</Box>
												</Grid>
												<Grid item xs={12}>
													<Grid
														container
														justifyContent='flex-end'
														alignItems='center'
														spacing={1}>
														<Grid item>
															<Typography variant='body2'>
																<Box
																	component='span'
																	fontWeight='fontWeightMedium'>
																	Precios
																	incluyen IVA
																</Box>
															</Typography>
														</Grid>
													</Grid>
												</Grid>
											</Grid>
										</Box>
										<Divider light />
									</Box>
									<Box component='div' py={2}>
										{carrito.configCarrito.precarrito.find(
											(items) => {
												return items.exis === 'X';
											}
										) === undefined && (
											<LoadingButton
												variant='contained'
												fullWidth
												size='large'
												color='primary'
												onClick={reservaCarrito}
												loading={loading}
												loadingIndicator='Cargando...'>
												Continuar compra
											</LoadingButton>
										)}
									</Box>
									{deleteAll ? (
										<Box component='div'>
											<Eliminar
												Delete={Delete}
												object={'E'}
												ms_but={'Eliminar productos'}
												titulo={'Eliminar productos'}
												mensaje={
													'¿Estás seguro de eliminar los productos seleccionados?'
												}
											/>
										</Box>
									) : (
										<Box component='div'>
											<Eliminar
												Delete={Delete}
												object={'V'}
												ms_but={'Vaciar carrito'}
												titulo={'Vaciar carrito'}
												mensaje={
													'¿Estás seguro de eliminar todos los productos?'
												}
											/>
										</Box>
									)}
								</div>
							) : (
								<Box component='div' m={1} pt={3}>
									<Divider light />
									<Box
										component='div'
										className={classes.root}
										py={3}>
										<Typography
											variant='subtitle2'
											color='textSecondary'>
											Aún no tienes productos
										</Typography>
									</Box>
									<Divider light />
								</Box>
							)}
						</Paper>
					</Grid>
					:
					<Skeleton variant="rectangular" height={250} animation="wave"/>
					}
				</Grid>
			</div>
			{alerta.hasOwnProperty('severity') && (
				<Alertas setAlerta={setAlerta} alerta={alerta} />
			)}
		</Box>
		</Layout>
	);
}
