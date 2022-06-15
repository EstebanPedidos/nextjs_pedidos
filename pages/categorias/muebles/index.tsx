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
		label: 'Ofik',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES&m=OFIK',
	},
	{
		label: 'Edar',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES&m=EDAR',
	},
	{
		label: 'Ergo',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES&m=ERGO',
	},
	{
		label: 'Hirsh',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES&m=HIRSH',
	},
	{
		label: 'Línea Italia',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES&m=LINEA%2520ITALIA',
	},
	{
		label: 'Escritorio Ejecutivo',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/ESCRITORIOS-Y-MESAS',
	},
	{
		label: 'Archiveros',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/ARCHIVEROS',
	},
	{
		label: 'Sillas',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES',
	},
	{
		label: 'Escritorio',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/ESCRITORIOS-Y-MESAS',
	},
	{
		label: 'Caja fuerte',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/CAJAS-FUERTES',
	},
];

const chairCategories = [
	{
		label: 'Silla operativa',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-operativa.png',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-OPERATIVA',
	},
	{
		label: 'Silla directiva',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-directiva.png',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-DIRECTIVA',
	},
	{
		label: 'Silla ejecutiva',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-ejecutiva.png',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-EJECUTIVA',
	},
	{
		label: 'Silla ergonómica',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-ergonomica.png',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-ERGONOMICA',
	},
	{
		label: 'Silla visita',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-visita.png',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-VISITA',
	},
	{
		label: 'Silla plegable',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-plegable.png',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-PLEGABLE',
	},
];

const shops = [
	{
		title: 'Todo en <strong>Mesas</strong>',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/mesas.png',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/ESCRITORIOS-Y-MESAS/MESAS',
		cta: 'Ver todo',
	},
	{
		title: 'Todo en <strong>Escritorios</strong>',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/escritorio.png',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/ESCRITORIOS-Y-MESAS/ESCRITORIOS&=true',
		cta: 'Ver todo',
	},
];

const otherSubCategories = [
	{
		title: 'Archiveros',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/archivero.png',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/ARCHIVEROS',
	},
	{
		title: 'Cajas Fuertes',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/caja-fuerte.png',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/CAJAS-FUERTES',
	},
	{
		title: 'Libreros y anaqueles',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/librero.png',
		url: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/ANAQUELES-Y-LIBREROS',
	},
];

const CategoryMuebles = () => {
	return (
		<Layout title='Muebles | Pedidos.com'>
			
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
