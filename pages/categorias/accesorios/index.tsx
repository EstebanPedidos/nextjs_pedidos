import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import HeroCategory from 'components/HeroCategory';
import ImageCarouselSection from 'components/ImageCarouselSection';
import ToutCard from 'components/ToutCard';

import { Layout } from 'layout/Layout';

const categoryItems = [
	{
		label: 'Memorias',
		url: 'https://www.pedidos.com/busquedas.asp?query=memoria',
	},
	{
		label: 'Bases',
		url: 'https://www.pedidos.com/busquedas.asp?query=base',
	},
	{
		label: 'Presentadores',
		url: 'https://www.pedidos.com/busquedas.asp?query=presentador',
	},
	{
		label: 'Limpiador',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/LIMPIEZA-Y-MANTENIMIENTO/LIMPIADOR',
	},
	{
		label: 'Funda',
		url: 'https://www.pedidos.com/busquedas.asp?query=funda',
	},
	{
		label: 'Toalla',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/LIMPIEZA-Y-MANTENIMIENTO/TOALLA',
	},
	{
		label: 'Adaptador',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/CONEXIONES/ADAPTADOR',
	},
	{
		label: 'Cables',
		url: 'https://www.pedidos.com/busquedas.asp?query=cable',
	},
	{
		label: 'Disco duro',
		url: 'https://www.pedidos.com/busquedas.asp?query=disco%20duro',
	},
	{
		label: 'Lector de tarjetas',
		url: 'https://www.pedidos.com/busquedas.asp?query=lector%20de%20tarjetas',
	},
];

const subcategoryGrid = [
	{
		label: 'Componentes de cómputo',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/categorias/accesorios/componente.png',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/COMPONENTES-DE-COMPUTO',
	},
	{
		label: 'Memorias',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/memorias.png',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/MEMORIAS=',
	},
	{
		label: 'Pantallas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/pantallas.png',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/PANTALLAS',
	},
	{
		label: 'Ergonomía',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/ergonomia.png',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/ERGONOMIA',
	},
	{
		label: 'Bases',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/bases.png',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/BASES/BASES-PARA-LAPTOP',
	},
];

const subcategories = [
	{
		title: 'CD y DVD’s',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/cd.png',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/CDS-Y-DVDS',
	},
	{
		title: 'Presentadores',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/presentadores.png',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/PRESENTADORES/PRESENTADOR-LASER',
	},
	{
		title: 'Equipamiento',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/equipamiento.png',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/EQUIPAMIENTO-ELECTRONICO',
	},
	{
		title: 'Protección',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/proteccion.png',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/PROTECCION/CANDADOS-PARA-LAPTOPS',
	},
];

const otherSubCategories = [
	{
		title: 'Limpieza y mantenimiento',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/limpieza.png',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/LIMPIEZA-Y-MANTENIMIENTO',
	},
	{
		title: 'Estuche y fundas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/fundas.png',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/ESTUCHE-Y-FUNDAS',
	},
	{
		title: 'Conexión',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/accesorios/conexion.png',
		url: 'https://www.pedidos.com/busquedas.asp?/ACCESORIOS/CONEXIONES',
	},
];

const CategoryAccesorios = () => {
	return (
		<Layout title='Accesorios | Pedidos.com'>
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
