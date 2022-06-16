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
		url: '/busquedas.asp?query=Papel+EPSON',
	},
	{
		label: 'Eco Tank',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/ecotank.webp',
		url: '/soluciones-multifuncionales.asp',
	},
	{
		label: 'Proyectores',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/Proyectores.webp',
		url: '/proyectores-epson.asp',
	},
	{
		label: 'Consumibles',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/tintas.webp',
		url: '/busquedas.asp?/TINTAS-Y-TONERS&m=EPSON',
	},
	{
		label: 'Cintas',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/cintas.webp',
		url: '/busquedas.asp?query=cintas&m=EPSON',
	},
	{
		label: 'Escáneres',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/escaner.webp',
		url: '/busquedas.asp?query=ESCANERES+EPSON',
	},
	{
		label: 'Impresoras térmicas',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/tickets.webp',
		url: '/busquedas.asp?query=impresora-termica&m=EPSON',
	},
	{
		label: 'Plotter',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/epson/tienda/plotter.webp',
		url: '/busquedas.asp?/TECNOLOGIA/IMPRESION/PLOTTERS&m=EPSON',
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
