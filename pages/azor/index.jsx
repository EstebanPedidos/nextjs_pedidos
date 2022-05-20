import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

import { Layout } from 'layout/Layout';
import HeroImage from 'components/HeroImage';
import BrandCarouselSection from 'components/BrandCarouselSection/BrandCarouselSection';
import MSIBanner from 'components/MSIBanner';
import ShippingBanner from 'components/ShippingBanner';
import CommentsButton from 'components/CommentsButton';

const brands = [
	{
		label: 'Azor',
		description: 'Escritura',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/azor/azor-products.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Kinera',
		description: 'Clasificación & Organización',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/azor/kinera-products.webp?w=391&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Corty',
		description: 'Recorte, cutters & repuestos',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/azor/corty-products.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Lefort',
		description: 'Registradores / Carpetas',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/azor/lefort-products.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Stafford',
		description: 'Papelería',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/azor/stafford-products.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Pegaso',
		description: 'Engrapadoras y perforadoras',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/azor/pegaso-products.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Sablón',
		description: 'Papelería',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/azor/sablon-products.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '#',
	},
	{
		label: 'Uniball',
		description: 'Escritura',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/azor/uniball-products.webp?w=390&h=490&crop=faces&dpr=2&fit=crop)',
		url: '#',
	},
];

const Azor = () => {
	return (
		<Layout>
			<HeroImage
				src='https://pedidos.com/myfotos/pedidos-com/pagina/azor/back-azor.webp'
				alt='Azor'
				title='Escritura y<br/>mucho más.'
				subtitle='Encuentra artículos de escritura, oficina y escolares.'
				height='43vh'
				gradient
			/>
			<Box>
				<BrandCarouselSection
					id='azor'
					title='Marcas de Azor'
					subtitle='Las marcas y productos de escritura'
					brands={brands}
					ctaLink='/busquedas.asp?m=FORTEC&m=AZOR'
				/>
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
			/>{' '}
		</Layout>
	);
};

export default Azor;
