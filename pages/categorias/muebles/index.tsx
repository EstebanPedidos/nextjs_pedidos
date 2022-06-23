import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
//components
import HeroCategory from 'components/HeroCategory';
import ImageCarouselSection from 'components/ImageCarouselSection';
import ToutCard from 'components/ToutCard';

import { Layout } from 'layout/Layout';
import FloatingToutCard from 'components/FloatingToutCard';

const categoryItems = [
	{
		label: 'Ofik',
		url: '/busquedas?/MUEBLES&m=OFIK',
	},
	{
		label: 'Edar',
		url: '/busquedas?/MUEBLES&m=EDAR',
	},
	{
		label: 'Ergo',
		url: '/busquedas?/MUEBLES&m=ERGO',
	},
	{
		label: 'Hirsh',
		url: '/busquedas?/MUEBLES&m=HIRSH',
	},
	{
		label: 'Línea Italia',
		url: '/busquedas?/MUEBLES&m=LINEA%2520ITALIA',
	},
	{
		label: 'Escritorio Ejecutivo',
		url: '/busquedas?/MUEBLES/ESCRITORIOS-Y-MESAS',
	},
	{
		label: 'Archiveros',
		url: '/busquedas?/MUEBLES/ARCHIVEROS',
	},
	{
		label: 'Sillas',
		url: '/busquedas?/MUEBLES/SILLAS-Y-SILLONES',
	},
	{
		label: 'Escritorio',
		url: '/busquedas?/MUEBLES/ESCRITORIOS-Y-MESAS',
	},
	{
		label: 'Caja fuerte',
		url: '/busquedas?/MUEBLES/CAJAS-FUERTES',
	},
];

const chairCategories = [
	{
		label: 'Silla operativa',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-operativa.png',
		url: '/busquedas?/MUEBLES/SILLAS-Y-SILLONES/SILLA-OPERATIVA',
	},
	{
		label: 'Silla directiva',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-directiva.png',
		url: '/busquedas?/MUEBLES/SILLAS-Y-SILLONES/SILLA-DIRECTIVA',
	},
	{
		label: 'Silla ejecutiva',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-ejecutiva.png',
		url: '/busquedas?/MUEBLES/SILLAS-Y-SILLONES/SILLA-EJECUTIVA',
	},
	{
		label: 'Silla ergonómica',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-ergonomica.png',
		url: '/busquedas?/MUEBLES/SILLAS-Y-SILLONES/SILLA-ERGONOMICA',
	},
	{
		label: 'Silla visita',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-visita.png',
		url: '/busquedas?/MUEBLES/SILLAS-Y-SILLONES/SILLA-VISITA',
	},
	{
		label: 'Silla plegable',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-plegable.png',
		url: '/busquedas?/MUEBLES/SILLAS-Y-SILLONES/SILLA-PLEGABLE',
	},
];

const shops = [
	{
		title: 'Todo en <strong>Mesas</strong>',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/mesas.png',
		url: '/busquedas?/MUEBLES/ESCRITORIOS-Y-MESAS/MESAS',
		cta: 'Ver todo',
	},
	{
		title: 'Todo en <strong>Escritorios</strong>',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/escritorio.png',
		url: '/busquedas?/MUEBLES/ESCRITORIOS-Y-MESAS/ESCRITORIOS&=true',
		cta: 'Ver todo',
	},
];

const otherSubCategories = [
	{
		title: 'Archiveros',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/archivero.png',
		url: '/busquedas?/MUEBLES/ARCHIVEROS',
	},
	{
		title: 'Cajas Fuertes',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/caja-fuerte.png',
		url: '/busquedas?/MUEBLES/CAJAS-FUERTES',
	},
	{
		title: 'Libreros y anaqueles',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/librero.png',
		url: '/busquedas?/MUEBLES/ANAQUELES-Y-LIBREROS',
	},
];

const CategoryMuebles = () => {
	return (
		<Layout title='Muebles | Pedidos.com'>
			<Head>
				<meta name="description" content="El mobiliario para tu espacio de trabajo, solo pide los muebles que necesites y te llegarán donde te encuentres."/>
				<link rel="canonical" href="https://pedidos.com/categorias/muebles"/>
			</Head>
			<HeroCategory
				title='Muebles'
				description='Lo escencial'
				bgImg='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/back.jpg'
				categoryItems={categoryItems}
			/>

			<Box py={5}>
				<ImageCarouselSection
					id='chair-list'
					title='Sillones y Sillas'
					items={chairCategories}
					slidesPerView={4}
					breakpoints={{
						768: {
							slidesPerView: 4,
							spaceBetween: 25,
						},
						1024: {
							slidesPerView: 5.9,
							spaceBetween: 25,
						},
					}}
				/>
			</Box>

			<Box py={3} px={6}>
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						{shops.map((shop) => (
							<Grid key={shop.title} xs={12} md={6} item>
								<FloatingToutCard
									title={shop.title}
									src={shop.img}
									href={shop.url}
									floatingTitle
								/>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box py={3} px={8}>
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

export default CategoryMuebles;
