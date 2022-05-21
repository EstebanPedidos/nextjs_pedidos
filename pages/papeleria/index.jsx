import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

import { Layout } from 'layout/Layout';
import HeroImage from 'components/HeroImage';
import BrandCarouselSection from 'components/BrandCarouselSection/BrandCarouselSection';
import MSIBanner from 'components/MSIBanner';
import ShippingBanner from 'components/ShippingBanner';
import TipsBanner from 'components/TipsBanner';
import CommentsButton from 'components/CommentsButton';

const brands = [
	{
		label: 'Papelería',
		description: 'Encuentra todo en',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/papeleria/subcategorias/supplies.jpg?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Cuadernos',
		description: 'Anota en Blocks & ',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/papeleria/subcategorias/cuadernos.jpg?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Escritura',
		description: 'Escribe tus ideas',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/papeleria/subcategorias/escritura.jpg?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Engargola',
		description: 'Todo para Encuadernar &',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/papeleria/subcategorias/engargolado.jpg?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Accesorios',
		description: 'Para tu escritorio',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/papeleria/subcategorias/accesorios-de-escritorio.jpg?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Organización',
		description: 'Archiva y clasifica,',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/papeleria/subcategorias/clasificacion.jpg?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
];

const brandLogos = [
	{
		label: 'ACCO',
		img: 'https://pedidos.com/images/micrositios/acco/ACCO.png',
		width: '100',
		url: '/busquedas.asp?/PRODUCTOS-PARA-OFICINA&m=ACCO',
	},
	{
		label: 'BACO',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/papeleria/baco.png',
		width: '100',
		url: '/busquedas.asp?/PRODUCTOS-PARA-OFICINA&m=BACO',
	},
	{
		label: 'AZOR',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/papeleria/azor.png',
		width: '100',
		url: '/busquedas.asp?/PRODUCTOS-PARA-OFICINA&m=AZOR',
	},
	{
		label: 'Pilot',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/papeleria/pilot.png',
		width: '100',
		url: '/busquedas.asp?/PRODUCTOS-PARA-OFICINA&m=PILOT',
	},
	{
		label: 'Maped',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/papeleria/maped.png',
		width: '100',
		url: '/busquedas.asp?/PRODUCTOS-PARA-OFICINA&m=MAPED',
	},
	{
		label: 'Casio',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/papeleria/casio.png',
		width: '100',
		url: '/busquedas.asp?/PRODUCTOS-PARA-OFICINA&m=CASIO',
	},
];

const tips = [
	{
		label: 'Multiples formas de pago.',
		description: 'Selecciona la que se adapte a ti.',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/papeleria/payments.png',
	},
	{
		label: 'Con Pedidos <span>PRO</span> envíos Gratis',
		description: 'montos mayores a $599.00*.',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/papeleria/membership-2.png',
	},
	{
		label: 'Envíos reforzados',
		description: 'para el interior de la República.',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/papeleria/shipping.png',
	},
];

const Papeleria = () => {
	return (
		<Layout title='Todos los artículos de papelería que necesitas | Pedidos.com'>
			<HeroImage
				src='https://pedidos.com/myfotos/pedidos-com/pagina/papeleria/back-papeleria.jpg'
				alt='Papeleria'
				title='<span>Papelería</span> para tu<br/>espacio de trabajo <span>.</span>'
				subtitle='Una papelería donde todo es más barato que en las tiendas.'
				height='43vh'
				gradient
			/>

			<Box py={8}>
				<TipsBanner items={tips} />
			</Box>

			<Divider
				variant='middle'
				sx={{ borderColor: 'rgba(0, 0, 0, 0.075)', borderBottomWidth: '2px' }}
			/>

			<Box>
				<Container>
					<BrandCarouselSection
						id='3m'
						title='Productos para oficina'
						brands={brands}
						ctaLabel='Ver'
						ctaLink='/busquedas.asp?/PRODUCTOS-PARA-OFICINA'
						centered
					/>
				</Container>
			</Box>

			<Box py={7}>
				<Grid
					direction='row'
					justifyContent='center'
					alignItems='center'
					spacing={6}
					wrap
					container>
					{brandLogos.map((brand) => (
						<Grid key={brand.label} item>
							<Link href={brand.url}>
								<img src={brand.img} alt={brand.label} width={brand.width} />
							</Link>
						</Grid>
					))}
				</Grid>
			</Box>

			<Container sx={{ mt: 5 }}>
				<MSIBanner />
			</Container>

			<Box py={15}>
				<Container>
					<ShippingBanner />
				</Container>
			</Box>

			<Divider
				variant='middle'
				sx={{ borderColor: 'rgba(0, 0, 0, 0.075)', borderBottomWidth: '2px' }}
			/>

			<Box py={6}>
				<CommentsButton />
			</Box>

			<Divider
				variant='middle'
				sx={{ borderColor: 'rgba(0, 0, 0, 0.075)', borderBottomWidth: '2px' }}
			/>

			<Box py={5} sx={{ opacity: 0.8 }}>
				<Container maxWidth='md'>
					<Typography variant='h6' fontSize={16} fontWeight={500} gutterBottom>
						Por muchas razones, <strong>Pedidos.com</strong> es la opción
						preferida para comprar online todo lo necesario en Papelería para
						satisfacer las necesidades de profesionales y oficinas en México.
					</Typography>
					<Typography variant='body2' gutterBottom>
						Amplio stock, precios inmejorables y entrega a domicilio son sólo
						algunas de las razones de porque todos eligen a Pedidos.com para
						abastecer los artículos y consumibles que una oficina requiere hoy.
						La aceleración que la tecnología ha traído a las empresas así como
						la competitividad que existe hoy en todos los ámbitos hace que las
						marcas sean más productivas, más eficientes y esto requiere tener un
						buen abastecimiento en cada producto que se necesita en ámbitos
						laborales.
					</Typography>
					<Typography variant='h6' fontSize={16} fontWeight={700} gutterBottom>
						¿Porque elegir Pedidos.com?
					</Typography>
					<Box
						component='ul'
						sx={{
							listStyle: 'none',
							pl: 0,
							'& > li': {
								marginBottom: '1rem',
							},
						}}>
						<li>
							<Typography variant='body2' gutterBottom>
								<strong>
									Puedes hacer tus pedidos online sin moverte de tu oficina.
								</strong>{' '}
								Nos encargamos de todo el trabajo para que todo lo que necesites
								lo tengas justo en el momento necesario. Nuestro equipo de
								trabajo esta comprometido en brindar el mejor servicio antes y
								después de realizar tus compras.
							</Typography>
						</li>
						<li>
							<Typography variant='body2' gutterBottom>
								<strong>Tenemos los mejores precios del mercado.</strong>{' '}
								Nuestra búsqueda constante de mejora nos permite ofrecer los
								precios más competitivos en consumibles, muebles de oficina,
								accesorios y cualquier producto que necesites de una papelería.{' '}
							</Typography>
						</li>
						<li>
							<Typography variant='body2' gutterBottom>
								<strong>
									Envío gratis a partir de $599 (a excepción del papel) siendo{' '}
									<Link href='/membresia/pro.asp'> miembro PRO</Link>
								</strong>
								No tienes porque preocuparte de los envíos. Nosotros nos
								encargamos de organizar la logística de entrega en las puertas
								de tu oficina.
							</Typography>
						</li>
						<li>
							<Typography variant='body2' gutterBottom>
								<h>Pagas al recibir tu producto</h>
								Esto significa entrega garantizada con la satisfacción de la
								entrega de tus productos.
							</Typography>
						</li>
					</Box>
					<Typography variant='h6' fontSize={16}>
						Recuerda, no salgas, simplemente… ¡Pídelo!
					</Typography>
				</Container>
			</Box>
		</Layout>
	);
};

export default Papeleria;
