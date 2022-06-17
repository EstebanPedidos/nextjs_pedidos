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
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/GUANTES-DE-HULE-Y-LATEX',
	},
	{
		label: 'Despachadores',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/DESPACHADORES',
	},
	{
		label: 'Aromatizantes',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/QUIMICOS',
	},
	{
		label: 'Esponjas',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/CEPILLOS-Y-FIBRAS',
	},
	{
		label: 'Cloro',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/QUIMICOS/CLORO',
	},
	{
		label: 'Gel antibacterial',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/QUIMICOS/GEL-ANTIBACTERIAL',
	},
	{
		label: 'Rollos de papel',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/HIGIENICOS',
	},
	{
		label: 'Toallas de papel',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/HIGIENICOS/SERVILLETA-INTERDOBLADA',
	},
	{
		label: 'Pañuelos',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/HIGIENICOS/PANUELOS-FACIALES',
	},
	{
		label: 'Franelas',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/FRANELAS-Y-JERGAS',
	},
	{
		label: 'Abrillantador',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/CERAS-Y-ACEITES/ABRILLANTADOR-DE-MUEBLES',
	},
];

const subcategoriesMain = [
	{
		title: 'Químicos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/quimicos.png',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/QUIMICOS',
	},
	{
		title: 'Higiénicos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/higienicos.png',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/HIGIENICOS',
	},
];

const jarsCategories = [
	{
		label: 'Cepillos y fibras',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/esponja.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/CEPILLOS-Y-FIBRAS',
	},
	{
		label: 'Cestos de basura',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/cesto.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/CESTOS-DE-BASURA',
	},
	{
		label: 'Exprimidores',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/exprimidor.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/CUBETA-CON-EXPRIMIDOR',
	},
	{
		label: 'Cubetas y jícaras',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/cubeta.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/CUBETAS-Y-JICARAS',
	},
	{
		label: 'Escobas y mechudos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/escoba.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/ESCOBAS-Y-MECHUDOS',
	},
	{
		label: 'Jaladores',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/jalador.jpg',
		url: 'https://busquedas.asp/?/LIMPIEZA/JARCIERIA/JALADORES-DE-PISO-Y-VIDRIO',
	},
	{
		label: 'Franelas y jergas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/franela.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/FRANELAS-Y-JERGAS',
	},
	{
		label: 'Guantes',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/guantes.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/GUANTES-DE-HULE-Y-LATEX',
	},
	{
		label: 'Bolsas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/bolsa.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/BOLSA-DE-PLASTICO',
	},
	{
		label: 'Recogedor',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/cubrebocas.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA',
	},
	{
		label: 'Plumero',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/rollo.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/PLUMERO',
	},
	{
		label: 'Bomba',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/bomba.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/BOMBA-PARA-WC',
	},
	{
		label: 'Rodillo',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/botiquin.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/RODILLO-QUITAPELUSAS',
	},
	{
		label: 'Mop',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/mop.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA&m=MOP%C3%AFS',
	},
	{
		label: 'Atomizador',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/atomizador.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/ATOMIZADOR&query=atomizador',
	},
	{
		label: 'Tapetes',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/tapete.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/JARCIERIA/REJILLAS-Y-TAPETES-PARA-MINGITORIOS&query=tapetes',
	},
	{
		label: 'Rollos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/rollo.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/HIGIENICOS',
	},
	{
		label: 'Cofias',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/cofia.jpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA&query=cofias',
	},
	{
		label: 'Telas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/telajpg',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA&query=toallitas',
	},
];

const subcategories = [
	{
		title: 'Despachadores',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias//limpieza/despachadores.png',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/DESPACHADORES',
	},
	{
		title: 'Ceras y aceites',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/limpieza/aceite-c.png',
		url: 'https://www.pedidos.com/busquedas.asp?/LIMPIEZA/CERAS-Y-ACEITES',
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
