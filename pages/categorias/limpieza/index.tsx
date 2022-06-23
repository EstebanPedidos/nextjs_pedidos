import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
//components
import { Layout } from 'layout/Layout';
import HeroCategory from 'components/HeroCategory';
import ImageCarouselSection from 'components/ImageCarouselSection';
import ToutCard from 'components/ToutCard';

const categoryItems = [
	{
		label: 'Guantes',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/GUANTES-DE-HULE-Y-LATEX',
	},
	{
		label: 'Despachadores',
		url: '/busquedas?/LIMPIEZA/DESPACHADORES',
	},
	{
		label: 'Aromatizantes',
		url: '/busquedas?/LIMPIEZA/QUIMICOS',
	},
	{
		label: 'Esponjas',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/CEPILLOS-Y-FIBRAS',
	},
	{
		label: 'Cloro',
		url: '/busquedas?/LIMPIEZA/QUIMICOS/CLORO',
	},
	{
		label: 'Gel antibacterial',
		url: '/busquedas?/LIMPIEZA/QUIMICOS/GEL-ANTIBACTERIAL',
	},
	{
		label: 'Rollos de papel',
		url: '/busquedas?/LIMPIEZA/HIGIENICOS',
	},
	{
		label: 'Toallas de papel',
		url: '/busquedas?/LIMPIEZA/HIGIENICOS/SERVILLETA-INTERDOBLADA',
	},
	{
		label: 'Pañuelos',
		url: '/busquedas?/LIMPIEZA/HIGIENICOS/PANUELOS-FACIALES',
	},
	{
		label: 'Franelas',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/FRANELAS-Y-JERGAS',
	},
	{
		label: 'Abrillantador',
		url: '/busquedas?/LIMPIEZA/CERAS-Y-ACEITES/ABRILLANTADOR-DE-MUEBLES',
	},
];

const subcategoriesMain = [
	{
		title: 'Químicos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/quimicos.png',
		url: '/busquedas?/LIMPIEZA/QUIMICOS',
	},
	{
		title: 'Higiénicos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/higienicos.png',
		url: '/busquedas?/LIMPIEZA/HIGIENICOS',
	},
];

const jarsCategories = [
	{
		label: 'Cepillos y fibras',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/esponja.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/CEPILLOS-Y-FIBRAS',
	},
	{
		label: 'Cestos de basura',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/cesto.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/CESTOS-DE-BASURA',
	},
	{
		label: 'Exprimidores',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/exprimidor.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/CUBETA-CON-EXPRIMIDOR',
	},
	{
		label: 'Cubetas y jícaras',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/cubeta.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/CUBETAS-Y-JICARAS',
	},
	{
		label: 'Escobas y mechudos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/escoba.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/ESCOBAS-Y-MECHUDOS',
	},
	{
		label: 'Jaladores',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/jalador.jpg',
		url: 'https://busquedas?/LIMPIEZA/JARCIERIA/JALADORES-DE-PISO-Y-VIDRIO',
	},
	{
		label: 'Franelas y jergas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/franela.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/FRANELAS-Y-JERGAS',
	},
	{
		label: 'Guantes',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/guantes.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/GUANTES-DE-HULE-Y-LATEX',
	},
	{
		label: 'Bolsas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/bolsa.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/BOLSA-DE-PLASTICO',
	},
	{
		label: 'Recogedor',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/recogedor.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA',
	},
	{
		label: 'Plumero',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/rollo.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/PLUMERO',
	},
	{
		label: 'Bomba',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/bomba.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/BOMBA-PARA-WC',
	},
	{
		label: 'Rodillo',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/rodillo.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/RODILLO-QUITAPELUSAS',
	},
	{
		label: 'Mop',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/mop.jpg',
		url: '/busquedas?/LIMPIEZA&m=MOPïS',
	},
	{
		label: 'Atomizador',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/atomizador.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/ATOMIZADOR&query=atomizador',
	},
	{
		label: 'Tapetes',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/tapete.jpg',
		url: '/busquedas?/LIMPIEZA/JARCIERIA/REJILLAS-Y-TAPETES-PARA-MINGITORIOS&query=tapetes',
	},
	{
		label: 'Rollos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/rollo.jpg',
		url: '/busquedas?/LIMPIEZA/HIGIENICOS',
	},
	{
		label: 'Cofias',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/cofia.jpg',
		url: '/busquedas?/LIMPIEZA&query=cofias',
	},
	{
		label: 'Telas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/telas.jpg',
		url: '/busquedas?/LIMPIEZA&query=toallitas',
	},
];

const subcategories = [
	{
		title: 'Despachadores',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias//limpieza/despachadores.png',
		url: '/busquedas?/LIMPIEZA/DESPACHADORES',
	},
	{
		title: 'Ceras y aceites',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/aceite-c.png',
		url: '/busquedas?/LIMPIEZA/CERAS-Y-ACEITES',
	},
];

const CategoryLimpieza = () => {
	return (
		<Layout title='Limpieza | Pedidos.com'>
			<Head>
				<meta name="description" content="Lo necesario y mucho más para la limpieza e higiéne dentro de tu espacio de trabajo, productos para oficina, escuela y el hogar. Solo pide y te llegará donde te encuentres."/>
				<link rel="canonical" href="https://pedidos.com/categorias/limpieza"/>
			</Head>
			<HeroCategory
				title='Limpieza'
				description='productos enfocados en'
				bgImg='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/back.jpg'
				categoryItems={categoryItems}
			/>

			<Box py={3} px={6}>
				<Container maxWidth='xl'>
					<Grid spacing={3} container>
						{subcategoriesMain.map((subcategory) => (
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

			<Box py={5}>
				<ImageCarouselSection
					id='jars-list'
					title='Productos Jarciería'
					items={jarsCategories}
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
		</Layout>
	);
};

export default CategoryLimpieza;
