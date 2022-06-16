import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import HeroCategory from 'components/HeroCategory';
import ImageCarouselSection from 'components/ImageCarouselSection';
import ToutCard from 'components/ToutCard';

import { Layout } from 'layout/Layout';
import FloatingToutCard from 'components/FloatingToutCard';

const categoryItems = [
	{
		label: 'Agua',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/BEBIDAS/AGUA-EMBOTELLADA',
	},
	{
		label: 'Chocolates',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/COMIDA-Y-SNACKS/SNACKS',
	},
	{
		label: 'Azúcar',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/AZUCAR-Y-SUSTITUTOS/AZUCAR',
	},
	{
		label: 'Cremas',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA&query=sustituto%20de%20crema',
	},
	{
		label: 'Galletas',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/COMIDA-Y-SNACKS/GALLETAS',
	},
	{
		label: 'Dispensadores',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/DISPENSADOR-DE-AGUA',
	},
	{
		label: 'Desechables',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/DESECHABLES',
	},
	{
		label: 'Desechables',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/DESECHABLES',
	},
	{
		label: 'Nescafé',
		url: 'https://www.pedidos.com/busquedas.asp?/busquedas.asp?/CAFETERIA&query=nescafe',
	},
	{
		label: 'Dolce Gusto',
		url: 'https://www.pedidos.com/busquedas.asp?/busquedas.asp?/CAFETERIA&query=dolce%20gusto',
	},
];

const subcategoriesPrice = [
	{
		title: 'Café desde <span>$43.00</span>',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/cafeteria/coffee.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/CAFE-Y-TE/CAFE',
	},
	{
		title: 'Agua desde <span>$52.00</span>',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/cafeteria/agua2.png',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/BEBIDAS/AGUA-EMBOTELLADA',
	},
	{
		title: 'Té desde <span>$49.20</span>',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/cafeteria/tea.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/CAFE-Y-TE/TE',
	},
];

const subcategories = [
	{
		title: 'Azúcar y sustitutos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/cafeteria/azucar.png',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/AZUCAR-Y-SUSTITUTOS',
	},
	{
		title: 'Cremas y sustitutos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/cafeteria/sustituto.png',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/CREMA-Y-SUSTITUTOS',
	},
];

const otherSubCategories = [
	{
		title: 'Dispensadores',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/cafeteria/dispensadores.png',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/DISPENSADOR-DE-AGUA',
	},
	{
		title: 'Cafeteras',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/cafeteria/cafeteras.png',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/CAFETERAS',
	},
	{
		title: 'Desechables',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/cafeteria/desechables.png',
		url: 'https://www.pedidos.com/busquedas.asp?/CAFETERIA/DESECHABLES',
	},
];

const CategoryCafeteria = () => {
	return (
		<Layout title='Cafetería | Pedidos.com'>
			<HeroCategory
				title='Cafetería'
				description='Tecnología / Electrónica'
				bgImg='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/cafeteria/back.jpg'
				categoryItems={categoryItems}
			/>

			<Box py={3} px={6}>
				<Container maxWidth='xl'>
					<Grid spacing={6} container>
						{subcategoriesPrice.map((subcategory) => (
							<Grid key={subcategory.title} xs={12} md={4} item>
								<FloatingToutCard
									title={subcategory.title}
									src={subcategory.img}
									href={subcategory.url}
								/>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box py={3} px={5}>
				<Container maxWidth='xl'>
					<Grid spacing={3} container>
						{subcategories.map((subcategory) => (
							<Grid key={subcategory.title} xs={12} md={6} item>
								<ToutCard
									title={subcategory.title}
									src={subcategory.img}
									href={subcategory.url}
								/>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box py={3} px={6}>
				<Container maxWidth='xl'>
					<FloatingToutCard
						title='<center><strong>Comida y snacks</strong><br/>Perfectos para la junta</center>'
						src='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/cafeteria/snack1.jpg'
						href='https://www.pedidos.com/busquedas.asp?/CAFETERIA/COMIDA-Y-SNACKS'
						cta='Ver todo opción'
						floatingTitle
					/>
				</Container>
			</Box>

			<Box py={3} px={6}>
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						{otherSubCategories.map((subcategory) => (
							<Grid key={subcategory.title} xs={12} md={4} item>
								<ToutCard
									title={subcategory.title}
									src={subcategory.img}
									href={subcategory.url}
								/>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default CategoryCafeteria;