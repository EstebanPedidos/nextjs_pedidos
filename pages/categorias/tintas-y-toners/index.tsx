import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import HeroCategory from 'components/HeroCategory';
import BrandCard from 'components/BrandCard';
import { Layout } from 'layout/Layout';

const categoryItems = [
	{
		label: 'HP 664',
		url: 'https://www.pedidos.com/busquedas.asp?query=hp-664',
	},
	{
		label: 'HP 974XL',
		url: 'https://www.pedidos.com/busquedas.asp?query=hp-974',
	},
	{
		label: 'HP 950',
		url: 'https://www.pedidos.com/busquedas.asp?query=hp-950',
	},
	{
		label: 'EPSON T664120-AL',
		url: 'https://www.pedidos.com/busquedas.asp?query=epson-T664120-AL',
	},
	{
		label: 'HP 662',
		url: 'https://www.pedidos.com/busquedas.asp?query=hp-662',
	},
	{
		label: 'EPSON T774120-AL',
		url: 'https://www.pedidos.com/busquedas.asp?query=Epson+T774120',
	},
	{
		label: 'EPSON T544',
		url: 'https://www.pedidos.com/busquedas.asp?query=Epson+t544',
	},
	{
		label: 'CANON 107MBK',
		url: 'https://www.pedidos.com/busquedas.asp?query=107MBK',
	},
	{
		label: 'CANON 145',
		url: 'https://www.pedidos.com/busquedas.asp?query=canon-145',
	},
];

const brands = [
	{
		logo: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/HP.jpg',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/hp-tintas-originales.jpg',
		title: 'HP',
		links: [
			{
				label: 'Tintas originales',
				href: 'https://www.pedidos.com/busquedas.asp?/TINTAS-Y-TONERS/TINTAS&m=HP',
			},
			{
				label: 'Tóners originales',
				href: 'https://www.pedidos.com/busquedas.asp?/TINTAS-Y-TONERS/TONERS&m=HP',
			},
			{
				label: 'Botellas de tintas originales',
				href: 'https://www.pedidos.com/busquedas.asp?query=CARTUCHO-DE-TINTA-HP-GT52&m=HP',
			},
		],
	},
	{
		logo: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/epson.jpg',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/epson-tintas-originales.jpg',
		title: 'Epson',
		links: [
			{
				label: 'Tintas originales',
				href: 'https://www.pedidos.com/busquedas.asp?/TINTAS-Y-TONERS/TINTAS&m=EPSON',
			},
			{
				label: 'Tóners originales',
				href: 'https://www.pedidos.com/busquedas.asp?/TINTAS-Y-TONERS/TONERS&m=EPSON',
			},
			{
				label: 'Botellas de tintas originales',
				href: 'https://www.pedidos.com/busquedas.asp?query=botella+de+tinta+epson',
			},
		],
	},
	{
		logo: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/brother.jpg',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/brother-tintas-originales.jpg',
		title: 'HP',
		links: [
			{
				label: 'Tintas originales',
				href: 'https://www.pedidos.com/busquedas.asp?/TINTAS-Y-TONERS/TINTAS&m=BROTHER',
			},
			{
				label: 'Tóners originales',
				href: 'https://www.pedidos.com/busquedas.asp?/TINTAS-Y-TONERS/TONERS&m=BROTHER',
			},
			{
				label: 'Botellas de tintas originales',
				href: 'https://www.pedidos.com/busquedas.asp?query=botella+de+tinta+brother',
			},
		],
	},
	{
		logo: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/canon.jpg',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/canon-tintas-originales.jpg',
		title: 'Canon',
		links: [
			{
				label: 'Tintas originales',
				href: 'https://www.pedidos.com/busquedas.asp?/TINTAS-Y-TONERS/TINTAS&m=CANON',
			},
			{
				label: 'Tóners originales',
				href: 'https://www.pedidos.com/busquedas.asp?/TINTAS-Y-TONERS/TONERS&m=CANON',
			},
		],
	},
	{
		logo: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/xerox.jpg',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/xerox-tintas-originales.jpg',
		title: 'Xerox',
		links: [
			{
				label: 'Tintas originales',
				href: 'https://www.pedidos.com/busquedas.asp?/TINTAS-Y-TONERS/TINTAS&m=XEROX',
			},
			{
				label: 'Tóners originales',
				href: 'https://www.pedidos.com/busquedas.asp?/TINTAS-Y-TONERS/TONERS&m=XEROX',
			},
		],
	},
	{
		logo: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/lexmark.jpg',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/lexmark-tintas-originales.jpg',
		title: 'Lexmark',
		links: [
			{
				label: 'Tóners originales',
				href: 'https://www.pedidos.com/busquedas.asp?/TINTAS-Y-TONERS/TONERS/TONERS-DE-CAPACIDAD-ESTANDAR',
			},
			{
				label: 'Ver todo LEXMARK',
				href: 'https://www.pedidos.com/busquedas.asp?query=LEXMARK',
			},
		],
	},
];

const CategoryTintasToners = () => {
	return (
		<Layout title='Tintas y tóners | Pedidos.com'>
			<HeroCategory
				title='Tintas y tóners'
				description='Consumibles'
				bgImg='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/consumibles/back.jpg'
				categoryItems={categoryItems}
			/>

			<Box py={10}>
				<Container maxWidth='xl'>
					<Grid justifyContent='center' spacing={4} container>
						{brands.map((brand) => (
							<Grid key={brand.title} xs={12} sm={6} md={4} lg={3} item>
								<BrandCard brand={brand} />
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default CategoryTintasToners;