import Box from '@mui/material/Box';
import HeroCategory from 'components/HeroCategory';
import ImageCarouselSection from 'components/ImageCarouselSection';

import { Layout } from 'layout/Layout';

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
		href: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-OPERATIVA',
	},
	{
		label: 'Silla directiva',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-directiva.png',
		href: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-DIRECTIVA',
	},
	{
		label: 'Silla ejecutiva',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-ejecutiva.png',
		href: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-EJECUTIVA',
	},
	{
		label: 'Silla ergonómica',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-ergonomica.png',
		href: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-ERGONOMICA',
	},
	{
		label: 'Silla visita',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-visita.png',
		href: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-VISITA',
	},
	{
		label: 'Silla plegable',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/muebles/silla-plegable.png',
		href: 'https://www.pedidos.com/busquedas.asp?/MUEBLES/SILLAS-Y-SILLONES/SILLA-PLEGABLE',
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
		</Layout>
	);
};

export default CategoryMuebles;
