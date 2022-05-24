import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import { Layout } from 'layout/Layout';

const products = [
	{
		label: 'Ejecutiva',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/Muebles/ejecutiva.jpg',
		url: '/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-EJECUTIVA',
	},
	{
		label: 'Operativa',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/Muebles/operativa.jpg',
		url: '/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-OPERATIVA',
	},
	{
		label: 'Visita',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/Muebles/visita.jpg',
		url: '/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-VISITA',
	},
	{
		label: 'Archiveros',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/Muebles/archivero.jpg',
		url: '/busquedas.asp?/MUEBLES/ARCHIVEROS',
	},
	{
		label: 'Escritorios',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/Muebles/escritorio.jpg',
		url: '/busquedas.asp?/MUEBLES/ESCRITORIOS-Y-MESAS',
	},
];

const brands = [
	{
		label: 'Ofik',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/muebles/ofik.png',
		url: '/busquedas.asp?query=OFIK',
	},
	{
		label: 'Offiho',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/muebles/offiho.jpg',
		url: 'https://pedidos.com/include/css/responsivo/imagenes/muebles/offiho.jpg',
	},
	{
		label: 'Hirsh',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/muebles/hirsh.jpg',
		url: '/busquedas.asp?/MUEBLES&m=HIRSH',
	},
	{
		label: 'Linea Italia',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/muebles/lineaItalia.png',
		url: '/busquedas.asp?/MUEBLES&m=LINEA%2520ITALIA',
	},
];

const Muebles = () => {
	return (
		<Layout title='Los mejores muebles de oficina | Pedidos.com'>
			<Box
				sx={{
					backgroundImage: {
						xs: 'linear-gradient(90deg,#ffffffcc 0%, #ffffffcc 100%),url(https://pedidos.com/include/css/responsivo/imagenes/muebles/red2.jpg)',
						lg: 'url(https://pedidos.com/include/css/responsivo/imagenes/muebles/red2.jpg)',
					},
					backgroundSize: 'contain',
					backgroundPosition: 'top left',
					minHeight: '45vw',
					backgroundRepeat: 'no-repeat',
					py: 4,
				}}>
				<Box
					display='flex'
					alignItems='center'
					justifyContent='center'
					width='100%'
					height='100%'
					minHeight='45vw'
					color='#333'
					px={{ xs: 2, lg: 10 }}>
					<Box width='100%' textAlign={{ xs: 'left', md: 'right' }}>
						<Typography
							variant='h1'
							fontSize={48}
							fontWeight={700}
							sx={{ '& > span': { color: '#3655a5' } }}
							gutterBottom>
							<span>Mobiliario</span> para Oficina
						</Typography>
						<Typography
							variant='h2'
							fontSize={24}
							fontWeight={500}
							sx={{ '& > span': { color: '#3655a5' } }}
							gutterBottom>
							Embarque inmediato & calidad en las marcas
						</Typography>

						<Typography
							fontSize={18}
							sx={{ '& > span': { color: '#3655a5' } }}
							gutterBottom>
							Miembros{' '}
							<span>
								<strong>PRO</strong>
							</span>
							: Envíos Gratis CDMX a partir de $599(excepto papel).
						</Typography>

						<Button
							sx={{ mt: 4, px: 5 }}
							variant='outlined'
							href='/muebles.asp#about'>
							Comenzar
						</Button>
					</Box>
				</Box>
			</Box>

			<Box
				pt={15}
				pb={20}
				bgcolor='#e4e8f3'
				sx={{
					backgroundImage: {
						xs: 'none',
						lg: 'url(https://pedidos.com/include/css/responsivo/imagenes/muebleria2-min.png)',
					},
					backgroundSize: 'contain',
					backgroundPosition: 'bottom right',
					backgroundRepeat: 'no-repeat',
				}}>
				<Container maxWidth='xl'>
					<Box maxWidth={{ xs: '100%', lg: '65%' }}>
						<Typography
							variant='h3'
							fontSize={48}
							fontWeight={700}
							color='#333'
							sx={{ mb: 6, '& > span': { color: '#3655a5' } }}>
							Estrena oficina con <span>los mejores precios</span> en
							mobiliario.
						</Typography>

						<Typography fontSize={22} fontWeight={500}>
							Paga al recibir con tarjeta CDMX, Valle de México y Guadalajara
							(monto máx.$10,000 MXN)
						</Typography>

						<Box sx={{ mt: 6 }} display='flex' justifyContent='center'>
							<Button
								sx={{ px: 5 }}
								variant='outlined'
								href='/Soho/comentarios/reviews.asp'>
								Comentarios
							</Button>
						</Box>
					</Box>
				</Container>
			</Box>

			<Box py={6}>
				<Container>
					<Typography
						variant='h4'
						fontSize={30}
						textAlign='center'
						fontWeight={500}
						color='#333'
						gutterBottom>
						Productos
					</Typography>
					<Divider
						sx={{
							maxWidth: '47px',
							borderColor: '#3655a5',
							borderWidth: '3px',
							alignContent: 'flex-end',
							mb: 2,
						}}
					/>
					<Grid
						direction='row'
						justifyContent='center'
						alignItems='center'
						spacing={15}
						container>
						{products.map((product) => (
							<Grid xs={6} md={4} lg={2} key={product.label} item>
								<Box
									display='flex'
									alignItems='center'
									justifyContent='center'
									flexDirection='column'
									gap={2}
									component='a'
									href={product.url}>
									<img src={product.img} alt={product.label} width={55} />
									<Typography textAlign='center' color='#333' fontWeight={500}>
										{product.label}
									</Typography>
								</Box>
							</Grid>
						))}
						<Grid xs={6} md={4} lg={2} item>
							<Box
								display='flex'
								alignItems='center'
								justifyContent='center'
								flexDirection='column'
								component='a'
								href='/busquedas.asp?/MUEBLES'
								gap={2}>
								<AddRoundedIcon sx={{ fontSize: '4.5rem!important' }} />
								<Typography textAlign='center' color='#333' fontWeight={500}>
									Y más
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box py={2}>
				<Container maxWidth={false}>
					<Typography
						variant='h4'
						fontSize={30}
						textAlign='center'
						fontWeight={500}
						color='#333'
						gutterBottom>
						Marcas
					</Typography>
					<Divider
						sx={{
							maxWidth: '47px',
							borderColor: '#3655a5',
							borderWidth: '3px',
							alignContent: 'flex-end',
							mb: 2,
						}}
					/>
					<Grid
						direction='row'
						justifyContent='center'
						alignItems='center'
						spacing={3}
						container>
						{brands.map((brand) => (
							<Grid key={brand.label} item>
								<Box
									display='flex'
									alignItems='center'
									justifyContent='center'
									flexDirection='column'
									gap={2}
									component='a'
									href={brand.url}>
									<img src={brand.img} alt={brand.label} />
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box
				pt={4}
				pb={30}
				sx={{
					backgroundImage: {
						xs: 'linear-gradient(90deg,#ffffffbb 0%, #ffffffff 100%),url(https://pedidos.com/include/css/responsivo/imagenes/muebles/silla.jpg)',
						xl: 'url(https://pedidos.com/include/css/responsivo/imagenes/muebles/silla.jpg)',
					},
					backgroundPosition: 'left top',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
				}}>
				<Container maxWidth='md'>
					<Typography color='#333' textAlign='justify' mb={2}>
						Por muchas razones, <strong>Pedidos.com</strong> es la opción
						preferida para comprar online todo lo necesario en Muebles para
						satisfacer las necesidades de profesionales y oficinas en México.
						Amplio stock, precios inmejorables y entrega a domicilio son sólo
						algunas de las razones de porque todos eligen a Pedidos.com para tu
						oficina. La aceleración que la tecnología ha traído a las empresas
						así como la competitividad que existe hoy en todos los ámbitos hace
						que las marcas sean más productivas, más eficientes y esto requiere
						tener un buen abastecimiento en cada producto que se necesita en
						ámbitos laborales.{' '}
					</Typography>
					<Typography color='#333' textAlign='justify' mb={2}>
						<strong>¿Porque elegir Pedidos.com?</strong>
					</Typography>
					<Typography color='#333' textAlign='justify' mb={2}>
						<strong>
							Puedes hacer tus pedidos online sin moverte de tu oficina.
						</strong>{' '}
						Nos encargamos de todo el trabajo para que todo lo que necesites lo
						tengas justo en el momento necesario. Nuestro equipo de trabajo esta
						comprometido en brindar el mejor servicio antes y después de
						realizar tus compras.
					</Typography>
					<Typography color='#333' textAlign='justify' mb={2}>
						<strong>Tenemos los mejores precios del mercado.</strong> Nuestra
						búsqueda constante de mejora nos permite ofrecer los precios más
						competitivos en consumibles, muebles de oficina, accesorios y
						cualquier producto que necesites de una papelería.
					</Typography>
					<Typography color='#333' textAlign='justify' mb={2}>
						<strong>
							Con la membresía de Pedidos.com obtén envíos gratis a partir de
							$599 (a excepción del papel)
						</strong>
						No tienes porque preocuparte de los envíos. Nosotros nos encargamos
						de organizar la logística de entrega en las puertas de tu oficina.
					</Typography>
					<Typography color='#333' textAlign='justify' mb={2}>
						<strong>Pagas al recibir tu producto</strong>
					</Typography>
					<Typography color='#333' textAlign='justify' mb={2}>
						Esto significa entrega garantizada con la satisfacción de la entrega
						de tus productos.
					</Typography>
					<Typography color='#333' textAlign='justify'>
						Recuerda, no salgas, simplemente… ¡Pídelo!
					</Typography>
				</Container>
			</Box>
		</Layout>
	);
};

export default Muebles;
