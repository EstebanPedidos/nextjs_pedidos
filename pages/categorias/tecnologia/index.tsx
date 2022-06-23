import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
//components
import HeroCategory from 'components/HeroCategory';
import ToutCard from 'components/ToutCard';

import { Layout } from 'layout/Layout';
import FloatingToutCard from 'components/FloatingToutCard';

const categoryItems = [
	{
		label: 'Laptops',
		url: 'https://www.pedidos.com/busquedas?query=laptop',
	},
	{
		label: 'All In One',
		url: 'https://www.pedidos.com/busquedas?query=all-in-one',
	},
	{
		label: 'Tablets',
		url: 'https://www.pedidos.com/busquedas?query=tablet',
	},
	{
		label: 'Multifuncionales',
		url: 'https://www.pedidos.com/busquedas?query=multifuncional',
	},
	{
		label: 'Monitores',
		url: 'https://www.pedidos.com/busquedas?query=monitor',
	},
	{
		label: 'Desktop',
		url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/COMPUTO/DESKTOPS',
	},
	{
		label: 'Impresora',
		url: 'https://www.pedidos.com/busquedas?query=impresora',
	},
	{
		label: 'Huawei',
		url: 'https://www.pedidos.com/busquedas?query=huawei',
	},
];

const shops = [
	{
		title: 'Todo en <strong>Cómputo</strong>',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/computo.jpg',
		cta: 'Ver todo',
		links: [
			{
				label: 'Laptops',
				url: 'https://www.pedidos.com/busquedas?query=laptop',
			},
			{
				label: 'All In One',
				url: 'https://www.pedidos.com/busquedas?query=all-in-one',
			},
			{
				label: 'Desktops',
				url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/COMPUTO/DESKTOPS',
			},
			{
				label: 'Tablet',
				url: 'https://www.pedidos.com/busquedas?query=tablet',
			},
			{
				label: 'Monitores',
				url: 'https://www.pedidos.com/busquedas?query=monitor',
			},
		],
	},
	{
		title: 'Todo en <strong>Impresión</strong>',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/impresion.jpg',
		cta: 'Ver todo',
		links: [
			{
				label: 'Multifuncionales',
				url: 'https://www.pedidos.com/busquedas?query=multifuncional',
			},
			{
				label: 'Impresoras',
				url: 'https://www.pedidos.com/busquedas?query=impresora',
			},
			{
				label: 'Escáneres',
				url: 'https://www.pedidos.com/busquedas?query=Escaner',
			},
			{
				label: 'Plotters',
				url: 'https://www.pedidos.com/busquedas?query=plotter',
			},
			{
				label: 'Rotuladores',
				url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/CINTAS--ETIQUETAS-Y-ROTULADORES/ROTULADOR',
			},
		],
	},
];

const subcategories = [
	{
		title: 'Pantallas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/smart.png',
		url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/TELEVISIONES',
	},
	{
		title: 'Software',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/software.png',
		url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/SOFTWARE',
	},
	{
		title: 'Telefonía',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/telefonos.png',
		url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/TELEFONIA',
	},
	{
		title: 'Línea blanca',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/linea-blanca.png',
		url: '/busquedas?/TECNOLOGIA/LINEA-BLANCA',
	},
	{
		title: 'Controles',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/videojuegos.png',
		url: '/busquedas?/TECNOLOGIA/VIDEOJUEGOS/CONTROLES',
	},
	{
		title: 'Punto de venta',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/punto-venta.png',
		url: '/busquedas?/TECNOLOGIA/PUNTO-DE-VENTA',
	},
];

const otherSubCategories = [
	{
		title: 'Teclado y Mouse',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/teclado-mouse.png',
		url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/TECLADO-Y-MOUSE',
	},
	{
		title: 'Proyectores',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/Proyectores.png',
		url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/PROYECTORES',
	},
	{
		title: 'Audio',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/Audio.png',
		url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/AUDIO',
	},
	{
		title: 'Cámara y video',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/camaras.png',
		url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/CAMARA-Y-VIDEO',
	},
];

const otherSubCategories2 = [
	{
		title: 'Salud y Belleza',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/salud.png',
		url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/SALUD-Y-BELLEZA',
	},
	{
		title: 'Seguridad',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/seguridad.png',
		url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/SEGURIDAD',
	},
	{
		title: 'Energía',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/energia.png',
		url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/ENERGIA',
	},
	{
		title: 'Pilas y baterías',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/pilas.png',
		url: 'https://www.pedidos.com/busquedas?/TECNOLOGIA/PILAS-Y-BATERIAS',
	},
];

const CategoryTecnologia = () => {
	return (
		<Layout title='Tecnología | Pedidos.com'>
			<Head>
				<meta name="description" content="Los productos tecnológicos que necesitas para tu oficina, escuela o/y hogar los encuentras en Pedidos.com, solo pide y te llegará donde te encuentres."/>
				<link rel="canonical" href="https://pedidos.com/categorias/tecnologia"/>
			</Head>
			<HeroCategory
				title='Tecnología'
				description='Lo mejor en'
				bgImg='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tecnologia/back.jpg'
				categoryItems={categoryItems}
			/>

			<Box py={3} px={4}>
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						{shops.map((shop) => (
							<Grid key={shop.title} xs={12} md={6} item>
								<FloatingToutCard
									title={shop.title}
									src={shop.img}
									links={shop.links}
									sx={{
										backgroundSize: '86%',
									}}
									floatingTitle
								/>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box py={3} px={3}>
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						{otherSubCategories.map((subcategory) => (
							<Grid key={subcategory.title} xs={12} md={3} item>
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

			<Box py={3} px={8}>
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						{subcategories.map((subcategory) => (
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

			<Box py={3} px={8}>
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						{otherSubCategories2.map((subcategory) => (
							<Grid key={subcategory.title} xs={12} md={3} item>
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

export default CategoryTecnologia;
