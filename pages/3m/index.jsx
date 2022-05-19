import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { Layout } from 'layout/Layout';
import HeroImage from 'components/HeroImage';
import BrandCarouselSection from 'components/BrandCarouselSection/BrandCarouselSection';
import MSIBanner from 'components/MSIBanner';
import ShippingBanner from 'components/ShippingBanner';
import CommentsButton from 'components/CommentsButton';

const productCategories = [
	{
		label: 'Plumas',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/papermate.png',
		url: '/busquedas.asp?/PRODUCTOS-PARA-OFICINA/ESCRITURA/BOLIGRAFO&m=BEROL',
	},
	{
		label: 'Colores',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/prismacolor.png',
		url: '/busquedas.asp?/PRODUCTOS-PARA-OFICINA/ESCRITURA/LAPICES-DE-COLOR&m=BEROL',
	},
	{
		label: 'Marcadores',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/sharpie.png',
		url: '/busquedas.asp?/PRODUCTOS-PARA-OFICINA/ESCRITURA/MARCADORES-Y-MARCATEXTOS&m=BEROL',
	},
	{
		label: 'Pegamento',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/elmers.png',
		url: '/busquedas.asp?/PRODUCTOS-PARA-OFICINA/ADHESIVOS&m=BEROL',
	},
	{
		label: 'Lapices',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/lapices.png',
		url: '/busquedas.asp?query=lapiz&m=BEROL',
	},
	{
		label: 'Cintas',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/dymo.png',
		url: '/busquedas.asp?query=DYMO&m=BEROL',
	},
	{
		label: 'Marcatextos',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/marcas/marcatextos.png',
		url: '/busquedas.asp?query=marcatextos&m=BEROL',
	},
	{
		label: 'Corrector',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/berol.png',
		url: '/busquedas.asp?/PRODUCTOS-PARA-OFICINA/ESCRITURA/CORRECTORES&m=BEROL',
	},
];

const brands = [
	{
		label: 'Post-It®',
		description: 'Libera tus ideas',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/3m/post-it-products.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Scotch-Brite™',
		description: 'Limpieza profunda',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/3m/scotch-brite-products.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Scotch®',
		description: 'Para cada proyecto existe',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/3m/scotch-products.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
];

const brandLogos = [
	{
		label: 'Post-It®',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/3m/post-it-brand.webp',
		width: '100',
	},
	{
		label: 'Scotch-Brite™',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/3m/scotch-brite-brand.webp',
		width: '100',
	},
	{
		label: 'Scotch®',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/3m/scotch-brand.webp',
		width: '140',
	},
];

const ThreeM = () => {
	return (
		<Layout>
			<HeroImage
				src='https://pedidos.com/myfotos/pedidos-com/pagina/3m/3m-back.png'
				alt='3M'
				title='Ciencia.<br/>Aplicada a la vida.™'
				subtitle='3M busca iniciar el progreso e inspirar la innovación en las vidas y comunidades del mundo.'
				height='272px'
				gradient
			/>
			<Box>
				<BrandCarouselSection
					id='3m'
					title='Marcas de 3M'
					subtitle='Las marcas más importantes para todos los días.'
					brands={brands}
					ctaLink='/busquedas.asp?query=3m&m=3M'
					centered
				/>
			</Box>
			<Box
				py={7}
				sx={{ backgroundImage: 'linear-gradient(to bottom,#fafafb,#f6f7f9);' }}>
				<Grid
					direction='row'
					justifyContent='center'
					alignItems='center'
					spacing={6}
					container>
					{brandLogos.map((brand) => (
						<Grid key={brand.label} item>
							<img src={brand.img} alt={brand.label} width={brand.width} />
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
		</Layout>
	);
};

export default ThreeM;
