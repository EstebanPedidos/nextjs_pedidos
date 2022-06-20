import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { SxProps, Theme } from '@mui/material';
//components
import { ElementType } from 'react';
import HeroCategory from 'components/HeroCategory';
import ImageCarouselSection from 'components/ImageCarouselSection';
import ToutCard from 'components/ToutCard';

import { Layout } from 'layout/Layout';
import FloatingToutCard from 'components/FloatingToutCard';

const categoryItems = [
	{
		label: 'Bolígrafos',
		url: 'https://www.pedidos.com/busquedas?query=boligrafo',
	},
	{
		label: 'Cintas adhesivas',
		url: 'https://www.pedidos.com/busquedas?query=cinta&m=BEROL&m=JANEL&m=3M&m=AZOR&m=KORES&m=BARRILITO',
	},
	{
		label: 'Notas adhesivas',
		url: 'https://www.pedidos.com/busquedas?query=nota%20adhesiva',
	},
	{
		label: 'Folders',
		url: 'https://www.pedidos.com/busquedas?query=Folder',
	},
	{
		label: 'Cutters',
		url: 'https://www.pedidos.com/busquedas?query=cutter',
	},
	{
		label: 'Colores',
		url: 'https://www.pedidos.com/busquedas?query=colores',
	},
	{
		label: 'Separadores',
		url: 'https://www.pedidos.com/busquedas?query=separadores',
	},
	{
		label: 'Lapiceros',
		url: 'https://www.pedidos.com/busquedas?query=lapiceros',
	},
	{
		label: 'Tableros',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/PIZARRONES-Y-ROTAFOLIOS/TABLEROS',
	},
	{
		label: 'Rotuladores',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/CINTAS--ETIQUETAS-Y-ROTULADORES/ROTULADOR',
	},
];

const featured: Array<{
	title: string;
	subtitle?: string;
	img: string;
	cta: string;
	url?: string;
	floatingTitle?: boolean;
	centeredTitle?: boolean;
	children?: {
		component: ElementType<any>;
		src: string;
		sx?: SxProps<Theme>;
	};
}> = [
	{
		title: 'Productos para oficina',
		subtitle: 'Pide tus esenciales para el trabajo',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/oficina.jpg',
		cta: 'Ver más',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA',
	},
	{
		title: '<strong>Esenciales</strong> desde <span>$1.70</span>',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/esenciales1.jpg',
		cta: 'Ver más',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/ESCRITURA',
		floatingTitle: true,
		centeredTitle: true,
		children: {
			component: 'img',
			src: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/esencial-1.png',
			sx: {
				position: 'absolute',
				right: -5,
				zIndex: 2,
				bottom: '1.75rem',
			},
		},
	},
	{
		title: 'Productos escolares',
		subtitle: 'Pide y prepara tu regreso a clases',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/escolar.jpg',
		cta: 'Ver más',
		url: 'https://busquedas/?query=newell',
	},
];

const subcategoryGrid = [
	{
		label: 'Estilo único',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/categorias/papeleria/newelll.jpg',
		url: 'https://www.pedidos.com/newell',
	},
	{
		label: 'Cuadernos y Blocks',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/cuadernos.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/CUADERNOS-Y-BLOCKS',
	},
	{
		label: 'Escritura',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/escritura.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/ESCRITURA',
	},
	{
		label: 'Recorte',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/recorte.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/RECORTE',
	},
	{
		label: 'Adhesivos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/adhesivos.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/ADHESIVOS',
	},
];

const subcategories = [
	{
		title: 'Accesorios',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/accesorios.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/ACCESORIOS-DE-ESCRITORIO',
	},
	{
		title: 'Destructoras',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/destructoras1.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/DESTRUCTORAS',
	},
	{
		title: 'Organización y clasificación',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/organizacion1.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/CLASIFICACION-Y-ORGANIZACION',
	},
];

const otherSubCategories = [
	{
		title: 'Formatos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/formatos.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/FORMATOS',
	},
	{
		title: 'Sellos y tintas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/sellotintas.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/SELLOS-Y-TINTAS',
	},
	{
		title: 'Encuadernado',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/encuadernado.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/ENCUADERNADO-Y-ENGARGOLADO',
	},
	{
		title: 'Geometria',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/geometria1.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/GEOMETRIA',
	},
];

const otherSubCategories2 = [
	{
		title: 'Cintas, etiquetas y rotuladores',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/rotuladores.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/CINTAS--ETIQUETAS-Y-ROTULADORES',
	},
	{
		title: 'Pizarrones y rotafolios',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/pizza.png',
		url: 'https://www.pedidos.com/busquedas?/PRODUCTOS-PARA-OFICINA/PIZARRONES-Y-ROTAFOLIOS',
	},
];

const CategoryPapeleria = () => {
	return (
		<Layout title='Papelería | Pedidos.com'>
			<Head>
				<meta name="description" content="El papel que necesitas para tu oficina, escuela y el hogar está en Pedidos.com, solo pide y te llegará donde te encuentres."/>
				<link rel="canonical" href="https://pedidos.com/categorias/papeleria"/>
			</Head>
			<HeroCategory
				title='Productos para la oficina, escuela y hogar'
				description='Papelería'
				bgImg='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papeleria/back.jpg'
				categoryItems={categoryItems}
				sx={{
					backgroundPosition: 'center -2rem',
				}}
			/>

			<Box py={3} px={{ xs: 0, md: 4 }}>
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						{featured.map((featuredItem) => (
							<Grid key={featuredItem.title} xs={12} md={4} item>
								<FloatingToutCard
									title={featuredItem.title}
									subtitle={featuredItem.subtitle}
									src={featuredItem.img}
									href={featuredItem.url}
									floatingTitle={featuredItem.floatingTitle}
									centeredTitle={featuredItem.centeredTitle}>
                                    {/* Se comentó por que falló en la compilación */}
									{/* {featuredItem.children && <Box {...featuredItem.children} />} */}
								</FloatingToutCard>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box py={3} px={{ xs: 0, md: 8 }}>
				<Container maxWidth='xl'>
					<Box
						display={{ xs: 'block', md: 'grid' }}
						gap={3}
						gridTemplateAreas={{
							md: `"grid-area-1 grid-area-1 grid-area-2 grid-area-3" "grid-area-1 grid-area-1 grid-area-4 grid-area-5"`,
						}}>
						{subcategoryGrid.map((subcategory, index) => (
							<Box gridArea={`grid-area-${index + 1}`} key={subcategory.label}>
								<ToutCard
									title={subcategory.label}
									src={subcategory.img}
									href={subcategory.url}
									sx={{
										mb: {
											xs: 6,
											md: 0,
										},
									}}
									mediaSx={{
										height: index === 0 ? 485 : 200,
									}}
									floating
								/>
							</Box>
						))}
					</Box>
				</Container>
			</Box>

			<Box py={3} px={{ xs: 0, md: 8 }}>
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

			<Box py={3} px={{ xs: 0, md: 4 }}>
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

			<Box py={3} px={{ xs: 0, md: 4 }}>
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						{otherSubCategories2.map((subcategory) => (
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

export default CategoryPapeleria;
