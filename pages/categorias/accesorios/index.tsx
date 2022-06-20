import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
//components
import { Layout } from 'layout/Layout';
import HeroCategory from 'components/HeroCategory';
import ToutCard from 'components/ToutCard';

const categoryItems = [
	{
		label: 'Memorias',
		url: 'https://www.pedidos.com/busquedas?query=memoria',
	},
	{
		label: 'Bases',
		url: 'https://www.pedidos.com/busquedas?query=base',
	},
	{
		label: 'Presentadores',
		url: 'https://www.pedidos.com/busquedas?query=presentador',
	},
	{
		label: 'Limpiador',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/LIMPIEZA-Y-MANTENIMIENTO/LIMPIADOR',
	},
	{
		label: 'Funda',
		url: 'https://www.pedidos.com/busquedas?query=funda',
	},
	{
		label: 'Toalla',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/LIMPIEZA-Y-MANTENIMIENTO/TOALLA',
	},
	{
		label: 'Adaptador',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/CONEXIONES/ADAPTADOR',
	},
	{
		label: 'Cables',
		url: 'https://www.pedidos.com/busquedas?query=cable',
	},
	{
		label: 'Disco duro',
		url: 'https://www.pedidos.com/busquedas?query=disco%20duro',
	},
	{
		label: 'Lector de tarjetas',
		url: 'https://www.pedidos.com/busquedas?query=lector%20de%20tarjetas',
	},
];

const subcategoryGrid = [
	{
		label: 'Componentes de cómputo',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/categorias/accesorios/componente.png',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/COMPONENTES-DE-COMPUTO',
	},
	{
		label: 'Memorias',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/memorias.png',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/MEMORIAS=',
	},
	{
		label: 'Pantallas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/pantallas.png',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/PANTALLAS',
	},
	{
		label: 'Ergonomía',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/ergonomia.png',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/ERGONOMIA',
	},
	{
		label: 'Bases',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/bases.png',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/BASES/BASES-PARA-LAPTOP',
	},
];

const subcategories = [
	{
		title: 'CD y DVD’s',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/cd.png',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/CDS-Y-DVDS',
	},
	{
		title: 'Presentadores',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/presentadores.png',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/PRESENTADORES/PRESENTADOR-LASER',
	},
	{
		title: 'Equipamiento',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/equipamiento.png',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/EQUIPAMIENTO-ELECTRONICO',
	},
	{
		title: 'Protección',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/proteccion.png',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/PROTECCION/CANDADOS-PARA-LAPTOPS',
	},
];

const otherSubCategories = [
	{
		title: 'Limpieza y mantenimiento',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/limpieza.png',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/LIMPIEZA-Y-MANTENIMIENTO',
	},
	{
		title: 'Estuche y fundas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/fundas.png',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/ESTUCHE-Y-FUNDAS',
	},
	{
		title: 'Conexión',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/conexion.png',
		url: 'https://www.pedidos.com/busquedas?/ACCESORIOS/CONEXIONES',
	},
];

const CategoryAccesorios = () => {
	return (
		<Layout title='Accesorios | Pedidos.com'>
			<Head>
				<meta name="description" content="Lo necesario y mucho más para tu espacio de trabajo, productos de papelería para oficina, escuela y el hogar. Tu solo pide y te llegará donde te encuentres."/>
				<link rel="canonical" href="https://pedidos.com/categorias/accesorios"/>
			</Head>
			<HeroCategory
				title='Accesorios'
				description='Tecnología / Electrónica'
				bgImg='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/back.jpg'
				categoryItems={categoryItems}
			/>

			<Box py={3} px={3}>
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

			<Box py={3} px={3}>
				<Container maxWidth='xl'>
					<Grid spacing={2} container>
						{subcategories.map((subcategory) => (
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

export default CategoryAccesorios;
