import Head from 'next/head';
import Box from '@mui/material/Box';
//components
import { Layout } from 'layout/Layout';
import HeroImage from 'components/HeroImage';
import CategoryGrid from 'components/CategoryGrid';

const productCategories = [
	{
		label: 'Papel',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/papel.webp',
		url: '/busquedas?query=Papel+EPSON',
	},
	{
		label: 'Eco Tank',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/ecotank.webp',
		url: '/busquedas?query=ecotank',
	},
	{
		label: 'Proyectores',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/Proyectores.webp',
		url: '/busquedas?/TECNOLOGIA/PROYECTORES',
	},
	{
		label: 'Consumibles',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/tintas.webp',
		url: '/busquedas?/TINTAS-Y-TONERS&m=EPSON',
	},
	{
		label: 'Cintas',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/cintas.webp',
		url: '/busquedas?query=cintas&m=EPSON',
	},
	{
		label: 'Escáneres',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/escaner.webp',
		url: '/busquedas?query=ESCANERES+EPSON',
	},
	{
		label: 'Impresoras térmicas',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/tickets.webp',
		url: '/busquedas?query=impresora-termica&m=EPSON',
	},
	{
		label: 'Plotter',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/plotter.webp',
		url: '/busquedas?/TECNOLOGIA/IMPRESION/PLOTTERS&m=EPSON',
	},
];

const TiendaEpson = () => {
	return (
		<Layout title='Gran variedad de productos Epson | Pedidos.com '>
			<Head>
				<meta name="description" content="Encuentra gran variedad de productos Epson. Los mejores productos de impresion estan en Pedidos.com"/>
				<link rel="canonical" href="https://pedidos.com/tienda-epson"/>
			</Head>
			<HeroImage
				src='https://pedidos.com/myfotos/pedidos-com/pagina/epson/tiendaepson.jpg'
				alt='Tienda Epson'
			/>

			<Box pt={3} px={8} pb={6}>
				<CategoryGrid categories={productCategories} />
			</Box>
		</Layout>
	);
};

export default TiendaEpson;
