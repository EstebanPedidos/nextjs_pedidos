import {useState} from 'react'
//next js
import { useRouter } from 'next/router'
//Pauquetes
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
//Data Display
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
//Inputs
import TextField from '@material-ui/core/TextField';
//Lab
import { Alert, AlertTitle } from '@material-ui/lab';
//Navigation
import Link from '@material-ui/core/Link';
//Componentes MUI4

//Servicos
import Services from '../../services/Services'
//Funciones
import Precios from '../../services/Precios'
//Componentes
import DataContext from './Context/DataContext'
import ItemFavorites from './ItemFavorites'
import Cart from './Cart'
import RemoveCart from '../modals/RemoveCart'
import ModalExecutive   from '../modals/ModalExecutive'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    rootdiscount:{
        padding: '2px 4px',
        display: 'flex',
    },
    buttonDiscount: {
        width: "95%",
      },
    rootdivider: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    },
    emptyCart: {
        padding: theme.spacing(1),
        width: '160px',
    }
}));

export default function Verifica_pedido(props){
    const classes                               = useStyles();
    const ruter                                 = useRouter() 
    const [Remove,setRemove]                    = useState([])
    const [deleteAll,setDeleteAll]              = useState(false)
    const [modificar,setModificar]              = useState(0)
    const [ejecutivo,setEjecutivo]              = useState({ejecutivo:'', slmn:0})
    const [cupon,setCupon]                      = useState('')

    const [data,setData]                    = useState({ejecutivo:'',slmn:0})
    
    let carrito     = props.carrito
    let partidas    = props.num_partidas
    let isEjecutivo = props.isEjecutivo
    let total       = props.total
    let favoritos   = props.favoritos
    let articulos   = props.articulos

    async function Delete(item_num){
        if(deleteAll && Remove.length===0){
            alert('sin item')
            return 
        }
        let articulosD   = await (item_num === '')?(deleteAll)?Remove.toString():articulos.toString():item_num
        Services('DELETE','/carritoyreservado/deleteCarrito?clienteNum='+839494+'&usuarioNum='+168020+'&items='+articulosD,{})
        .then( response =>{
            setRemove([])
            ruter.push('/checkout/verifica-pedido')
        }) 
        
    }

    async function UpdateCantidad({target}){
        const {name, value , id} = target
        if(value === 0){
            carrito.configCarrito.precarrito[name].modificar = await true 
            setModificar(modificar+1)
        }else if(id === 'input'){
            carrito.configCarrito.precarrito[name].cantidad = await value
            setModificar(modificar+1) 
        }else{
            carrito.configCarrito.precarrito[name].cantidad = await value 
            setModificar(modificar+1)
        }
        total  =  await carrito.configCarrito.precarrito.map(item => ((Precios('formatcurrency',{subtotal:item.precio,fixed:2})*item.cantidad)+(Precios('formatcurrency',{subtotal:item.precioSeguro,fixed:2})*item.cantSeguro)+(Precios('formatcurrency',{subtotal:item.precioGarant1,fixed:2})*item.cantGarant1)+(Precios('formatcurrency',{subtotal:item.precioGarant2,fixed:2})*item.cantGarant2))).reduce((prev, curr) => prev + curr, 0)
    }

 
    function validaCodigoDescuento(){
        if(cupon !== ''){
            Services('GET','/carritoyreservado/validaCodigoDescuento?clienteNum='+839494+'&usuarioNum='+168020+'&cupon='+cupon,{})
            .then( response =>{
                if(response.data)  {
                    alert("Continua para ver el descuento")
                }else{
                    alert('Algo salió mal Es posible que el código sea incorrecto o no aplique en tú carrito')
                } 
            }) 
        }else{
            alert('Ingresa un código de descuento')
        }

    }

    function reservaCarrito(){
        if(carrito.configCarrito.precarrito.length > 0){
            var arraySkus = new Array();
            carrito.configCarrito.precarrito.map(function(item) {                
                if(item.cantidad > 0){
                    var objeto      = new Object()
                    objeto.sku        = item.item_num.replace(' ', '');
                    objeto.cantidad   = item.cantidad;
                    objeto.seguro     = 0;
                    objeto.gaex       = 0 ;
                    objeto.itemGarant = "";
                    arraySkus.push(objeto)
                }else{
                    alert("El articulo "+item.item_num+' no se puede reservar con cantidad 0')
                    return false;
                }
                
            })

            if(arraySkus.length > 0){
                Services('POST','/carritoyreservado/reservaCarrito?clienteNum='+839494+'&usuarioNum='+168020+'&afiliado=S&cupon='+cupon+'&ip=192.10.1.166&ejecutivo='+ejecutivo.slmn,arraySkus)
                .then( response =>{
                    if(response.data.pedido > 0){
                        ruter.push('/checkout/direccion-de-envio')
                    }
                    
                }) 
            }

            
        }
    }

    return (
        <DataContext.Provider value={data}> 
            <Box component="div">
                <div className={classes.root}>
                    <Grid container justifyContent="space-around" alignItems="flex-start">
                        <ItemFavorites 
                        favoritos={favoritos}
                        />
                        {partidas > 0 ? (
                            <Box component="div" m={2} >                        
                                <Box className={classes.root} py={2}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                        <Grid item xs={6} sm={8}>
                                            <Typography component="h1" variant="h5">
                                                <Box component="span" fontWeight="fontWeightBold">
                                                    Carrito de compra
                                                </Box>
                                            </Typography>
                                        </Grid>
                                        <Grid item justifyContent="flex-end" xs={6} sm={4}>
                                        {deleteAll ? (
                                            <Button variant="outlined" size="large"color="secondary" 
                                                onClick={() => {
                                                    setDeleteAll(false);
                                                }}
                                                >
                                                Cancelar
                                            </Button>
                                        ) : (
                                            <Button variant="outlined" size="large"  justifyContent="flex-end"
                                                onClick={() => {
                                                    setDeleteAll(true);
                                                }}
                                                >
                                                Varios
                                            </Button>
                                        )}
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Divider light />                
                            
                            {carrito.configCarrito.precarrito.find((items) => {
                                return items.exis === "N";
                            }) !== undefined && (
                                <Box component="div">
                                    {" "}
                                    <Alert severity="warning">
                                        <AlertTitle>Disponibilidad límitada</AlertTitle>
                                            Es probable que algunos productos <strong>No cuenten con suficiente disponilidad.</strong>
                                    </Alert>
                                    {" "}
                                    <Alert severity="warning">Uno o varios productos sin suficiente disponibilidad.</Alert>  
                                </Box>
                            )}
                            {carrito.configCarrito.precarrito.find((items) => {
                                return items.exis === "N";
                            }) !== undefined && (
                                <Box component="div">
                                    <Alert severity="error"><strong>Sin disponibilidad</strong> de producto</Alert>
                                </Box>
                            )}
                            {(modificar >= 0)&&
                                    <Cart
                                    precarrito={carrito.configCarrito.precarrito}
                                    deleteAll={deleteAll}
                                    Remove={Remove}
                                    setRemove={setRemove}
                                    Delete={Delete}
                                    UpdateCantidad={UpdateCantidad}
                                    modificar={modificar}
                                />
                            }
                            </Box>
                        ) : (
                            <Box component="div" py={4}>
                                <Divider light variant="middle" />
                                <Box className={classes.root} py={2}>
                                    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                                        <Grid item xs={12}>
                                            <Box component="div" m={1} pt={4} >
                                                <img className={classes.emptyCart} src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/carrito-v.svg" alt="Carrito vacio" />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography component="h1" variant="h5">
                                                <Box component="span" fontWeight="fontWeightBold">
                                                    Carrito vacío
                                                </Box>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button component={Link} to={'/home'} variant="contained" color="secondary">Comenzar</Button>     
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        )}

                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper}  elevation={0}>
                                {isEjecutivo && (
                                <div>
                                    <ModalExecutive
                                    resenapedidos={carrito.configCarrito.resenapedidos}
                                    setEjecutivo={setEjecutivo}
                                    ejecutivo={ejecutivo.ejecutivo}
                                    />
                                </div>
                                )}
                                <div>
                                    <Box component="div" m={1} className={classes.root}>
                                        <Grid container  alignItems="center" spacing={1}>
                                            <Grid item xs={6} sm={12} lg={6}>
                                                <Box textAlign="left">  
                                                    <Typography component="h2" variant="h6">
                                                        Resumen
                                                    </Typography>
                                                </Box>  
                                            </Grid>
                                            <Grid item xs={6} sm={12} lg={6}>
                                                {partidas > 0 && (
                                                    <Paper variant="outlined">
                                                    <Typography variant="body2">   
                                                        <Box py={1} fontWeight="fontWeightMedium">    
                                                            {partidas} {partidas > 1 ? `productos` : `producto`}
                                                        </Box>
                                                    </Typography>
                                                    </Paper>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </div>       
                                <Box component="div">
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <Divider light /> 
                                            <Box component="div" className={classes.root} pt={3}>
                                                <Grid container  alignItems="center" spacing={1}> 
                                                    <Grid item xs={6} sm={12} lg={6}>
                                                        <TextField label="Código de descuento" type="text" name="cupon" onChange={({target})=>{setCupon(target.value)}} id="discountcode"  variant="outlined" value={cupon}/>
                                                    </Grid>
                                                    <Grid item xs={6} sm={12} lg={6}>
                                                        <Button disableElevation
                                                            variant="contained"
                                                            fullWidth
                                                            size="large"
                                                            className={classes.buttonDiscount} 
                                                            onClick={validaCodigoDescuento}
                                                            >
                                                            Aplicar
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                    </form>
                                </Box>               
                                {partidas > 0 ? (
                                    <div>
                                        <Box component="div" m={1} pt={3}>
                                            <Divider light /> 
                                                <Box component="div" className={classes.root} py={3}>
                                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                                        <Grid item xs={4}>
                                                            <Box textAlign="left">  
                                                                <Grid container direction="column" justifyContent="center" spacing={1}>
                                                                    <Grid item>
                                                                        <Typography variant="subtitle1" textAlign="left">
                                                                            Subtotal{" "}
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Typography variant="subtitle1" >
                                                                            Envío
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Box textAlign="right"> 
                                                                <Grid container direction="column" justifyContent="center" spacing={1}>
                                                                    
                                                                    <Grid item>
                                                                        <Typography variant="subtitle1"  >
                                                                            <Box component="span" fontWeight="fontWeightBold">
                                                                                ${Precios('formatcurrency',{subtotal:total,fixed:2})} MXN
                                                                            </Box>
                                                                        </Typography>
                                                                    </Grid>                                                                
                                                                    <Grid item>
                                                                        <Typography variant="body2">
                                                                            Calculado adelante
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Grid container justifyContent="flex-end" alignItems="center" spacing={1}>
                                                                <Grid item>
                                                                    <Typography variant="body2">
                                                                        <Box component="span" fontWeight="fontWeightMedium">
                                                                            Precios incluyen IVA
                                                                        </Box>
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            <Divider light />
                                        </Box>
                                        <Box component="div" py={2} >
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            size="large"
                                            color="primary"
                                            onClick={reservaCarrito}
                                        >
                                            Continuar compra
                                        </Button>
                                        </Box>
                                        {(deleteAll)  ? (
                                            <Box component="div">
                                                <RemoveCart
                                                Delete={Delete}
                                                tipo={"E"}
                                                />
                                            </Box>
                                        ) : (
                                            <Box component="div">
                                                <RemoveCart
                                                Delete={Delete}
                                                tipo={"V"}
                                                />
                                            </Box>
                                        )}
                                    </div>
                                ) : (
                                    <Box component="div" m={1} pt={3}>
                                        <Divider light /> 
                                            <Box component="div" className={classes.root} py={3}>
                                                <Typography variant="subtitle2" color="textSecondary">Aún no tienes productos</Typography>
                                            </Box>
                                        <Divider light /> 
                                    </Box>
                                )}
                            </Paper>
                        </Grid>

                    </Grid>
                </div>
            </Box>
        </DataContext.Provider>
    )
}

export async function getServerSideProps(context) {
    
    let services        = await Services('GET','/carritoyreservado/getCarrito?clienteNum='+839494+'&usuarioNum='+168020+'&top=10&afiliado=S',{})
    let carrito         = await services.data
    let total           = await carrito.configCarrito.precarrito.map(item => ((Precios('formatcurrency',{subtotal:item.precio,fixed:2})*item.cantidad)+(Precios('formatcurrency',{subtotal:item.precioSeguro,fixed:2})*item.cantSeguro)+(Precios('formatcurrency',{subtotal:item.precioGarant1,fixed:2})*item.cantGarant1)+(Precios('formatcurrency',{subtotal:item.precioGarant2,fixed:2})*item.cantGarant2))).reduce((prev, curr) => prev + curr, 0)
    let isEjecutivo     = await (carrito.configCarrito.resenapedidos.length > 0)
    let num_partidas    = await carrito.configCarrito.precarrito.length
    let pyitemsfavoritos= await carrito.configCarrito.pyitemsfavoritos 
    let favoritos       = await getFavoritos(pyitemsfavoritos)
    async function getFavoritos(pyitemsfavoritos) {
        let f = []
        pyitemsfavoritos.forEach(function(item) {
            if(num_partidas > 0){
                if(item.tipo === 'I' && item.disponibilidad > 0){
                    f.push(item)  
                }
            }else{
                if((pyitemsfavoritos.find((items) =>{return items.tipo === 'V'}) !== undefined)){
                  
                    if(item.tipo === 'V' && item.disponibilidad > 0 ){
                        f.push(item) 
                    }
                }else{
                    if(item.tipo === 'I' && item.disponibilidad > 0 ){
                        f.push(item) 
                    }
                }
            }            
        })
        return f
    }
    let articulos =  await carrito.configCarrito.precarrito.map((item) => item.item_num);

    return {
        props: {
            carrito:        carrito,
            total:          total,
            isEjecutivo:    isEjecutivo,
            num_partidas:   num_partidas,
            favoritos:      favoritos,
            articulos:      articulos
        },
      }
}