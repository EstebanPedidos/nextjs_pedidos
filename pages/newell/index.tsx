import Box from '@mui/material/Box';

import { Layout } from 'layout/Layout';
import HeroImage from 'components/HeroImage';
import CategoryGrid from 'components/CategoryGrid';
import BrandCarousel from 'components/BrandCarousel';

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
		label: 'Berol',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/marcas/berol-1.png',
		url: '/busquedas.asp?query=Berol',
	},
	{
		label: 'Sharpie',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/marcas/sharpie.png',
		url: '/busquedas.asp?query=Sharpie',
	},
	{
		label: 'Prismacolor',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/marcas/prismacolor.png',
		url: '/busquedas.asp?query=Prismacolor',
	},
	{
		label: 'Paper-mate',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/marcas/paper-mate.png',
		url: '/busquedas.asp?query=Paper-mate',
	},
	{
		label: 'Uniball',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/marcas/uniball.png',
		url: '/busquedas.asp?query=Uniball',
	},
	{
		label: 'Dymo',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/marcas/dymo.png',
		url: '#',
	},
	{
		label: 'Elmers',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/marcas/elmers.png',
		url: '/busquedas.asp?query=Elmers',
	},
	{
		label: 'Expo',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/newell/marcas/expo.png',
		url: '/busquedas.asp?query=EXPO',
	},
];

const Newell = () => {
	return (
		<Layout title='Explora todos los productos Newell | Pedidos.com'>
			<HeroImage
				src='https://pedidos.com/myfotos/pedidos-com/pagina/newell/newellback1.png'
				alt='Newell'
			/>

			<Box>
				<BrandCarousel brands={brands} id='newell-landing' />
			</Box>

			<Box pt={3} px={8} pb={6}>
				<CategoryGrid categories={productCategories} />
			</Box>
		</Layout>
	);
};

export default Newell;
