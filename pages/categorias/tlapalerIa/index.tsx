import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
//components
import { Layout } from 'layout/Layout';
import HeroCategory from 'components/HeroCategory';
import ImageCarouselSection from 'components/ImageCarouselSection';
import ToutCard from 'components/ToutCard';
import FloatingToutCard from 'components/FloatingToutCard';

const categoryItems = [
	{
		label: 'Pinzas',
		url: 'https://www.pedidos.com/busquedas?query=Pinzas',
	},
	{
		label: 'Extensión',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/ELECTRICIDAD/EXTENSION-DE-USO-RUDO',
	},
	{
		label: 'Desarmadores',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/HERRAMIENTAS/JUEGO-DE-DESARMADORES',
	},
	{
		label: 'Foco',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/ILUMINACION/FOCOS',
	},
	{
		label: 'Guantes',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/GUANTES-DE-SEGURIDAD',
	},
	{
		label: 'Flexómetros',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/FLEXOMETROS',
	},
	{
		label: 'Botiquín',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/BOTIQUIN-PRIMEROS-AUXILIOS',
	},
	{
		label: 'Candado',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/CANDADOS/CANDADO-CORTINA',
	},
];

const subcategoriesMain = [
	{
		title: 'Todo en <strong>Herramientas</strong>',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/herramientas.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/HERRAMIENTAS',
	},
	{
		title: 'Todo en<strong>Electricidad</strong>',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/electricidad.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/ELECTRICIDAD',
	},
];

const industrialCategories = [
	{
		label: 'Cascos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/casco.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/CASCOS-DE-SEGURIDAD',
	},
	{
		label: 'Lentes',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/lentes.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/LENTES-DE-SEGURIDAD',
	},
	{
		label: 'Guantes',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/guantes.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/GUANTES-DE-SEGURIDAD',
	},
	{
		label: 'Flexómetros',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/flexometro.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/FLEXOMETROS',
	},
	{
		label: 'Chalecos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/chaleco.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/CHALECOS-DE-SEGURIDAD',
	},
	{
		label: 'Diablito',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/diablito.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/DIABLITO',
	},
	{
		label: 'Chinchos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/chincho.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/CINCHO-SUJETACABLES',
	},
	{
		label: 'Faja elástica',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/faja.jpg',
		url: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/faja.jpg',
	},
	{
		label: 'Cubrebocas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/cubrebocas.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/CUBREBOCAS',
	},
	{
		label: 'Rollos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/rollo.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/ROLLOS-DE-BUBUJA',
	},
	{
		label: 'Cinta',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/cinta.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/CINTA-DE-AISLAR',
	},
	{
		label: 'Botiquín',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/botiquin.jpg',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/INDUSTRIAL/BOTIQUIN-PRIMEROS-AUXILIOS',
	},
];

const subcategories = [
	{
		title: 'Iluminación',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/iluminacion.png',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/ILUMINACION/FOCOS',
	},
	{
		title: 'Señalización',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/senalamiento.png',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/SENALIZACION',
	},
	{
		title: 'Pinturas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/pintura.png',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/PINTURAS',
	},
];

const homeLinks = [
	{
		label: 'Mangueras',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/HOGAR/MANGUERAS',
	},
	{
		label: 'Identificador de llaves',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/HOGAR/IDENTIFICADOR-PARA-LLAVES',
	},
	{
		label: 'Chapas y perillas',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/HOGAR/CHAPAS-Y-PERILLAS',
	},
	{
		label: 'Basculas',
		url: 'https://www.pedidos.com/busquedas?/TLAPALERIA/HOGAR/BASCULAS',
	},
];

const CategoryTlapaleria = () => {
	return (
		<Layout title='Tlapalería | Pedidos.com'>
			<Head>
				<meta name="description" content="Encuentra todo lo que necesitas de Tlapalería para el mantenimiento de las instalaciones. Adquiere tus productos de tlapalería en Pedidos.com herramientas, focos, cables, y más. Envío rápido y seguro."/>
				<link rel="canonical" href="https://pedidos.com/categorias/tlapaleria"/>
			</Head>
			<HeroCategory
				title='Tlapalería'
				description='Encuentra lo necesario'
				bgImg='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/Tlapaleria/back.jpg'
				categoryItems={categoryItems}
			/>

			<Box py={3} px={6}>
				<Container maxWidth='xl'>
					<Grid spacing={3} container>
						{subcategoriesMain.map((subcategory) => (
							<Grid key={subcategory.title} xs={12} md={6} item>
								<FloatingToutCard
									title={subcategory.title}
									src={subcategory.img}
									href={subcategory.url}
									cta='Ver productos'
									floatingTitle
								/>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box py={5}>
				<ImageCarouselSection
					id='jars-list'
					title='Productos Industriales'
					items={industrialCategories}
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

			<Box py={3} px={5}>
				<Container maxWidth='xl'>
					<Grid spacing={3} container>
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

			<Box py={3} px={6}>
				<Container maxWidth='xl'>
					<FloatingToutCard
						title='<center>Todo en <br/><strong>Hogar</strong></center>'
						src='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/tlapaleria/hogar.jpg'
						cta='Selecciona una opción'
						links={homeLinks}
						floatingTitle
					/>
				</Container>
			</Box>
		</Layout>
	);
};

export default CategoryTlapaleria;
