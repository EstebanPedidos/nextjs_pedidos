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
		label: 'Paquetes',
		url: 'https://www.pedidos.com/busquedas.asp?query=paquete+de+hojas+de+papel',
	},
	{
		label: 'Opalina',
		url: 'https://www.pedidos.com/busquedas.asp?query=opalina',
	},
	{
		label: 'Ecológico',
		url: 'https://www.pedidos.com/busquedas.asp?query=ecologico&m=SCRIBE&m=XEROX',
	},
	{
		label: 'Bond',
		url: 'https://www.pedidos.com/busquedas.asp?query=bond',
	},
	{
		label: 'Caja',
		url: 'https://www.pedidos.com/busquedas.asp?query=cajas-de-papel',
	},
	{
		label: 'Color',
		url: 'https://www.pedidos.com/busquedas.asp?query=colores',
	},
	{
		label: 'Papel america',
		url: 'https://www.pedidos.com/busquedas.asp?query=papel-america',
	},
	{
		label: 'Cartulina',
		url: 'https://www.pedidos.com/busquedas.asp?query=cartulina',
	},
	{
		label: 'Fotográficos',
		url: 'https://www.pedidos.com/busquedas.asp?query=papel-fotografico',
	},
];

const subcategories = [
	{
		title: 'Opalina',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papel/opalina.png',
		url: 'https://www.pedidos.com/busquedas.asp?query=opalina',
	},
	{
		title: 'Fotográfico',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papel/fotografia.png',
		url: 'https://www.pedidos.com/busquedas.asp?query=papel%20fotografico',
	},
	{
		title: 'Reciclado',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papel/reciclado.png',
		url: 'https://www.pedidos.com/busquedas.asp?query=reciclado',
	},
	{
		title: 'Rollos',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papel/rollo.png',
		url: 'https://www.pedidos.com/busquedas.asp?query=rollo&m=HP&m=EPSON&m=PINOS-ALTOS&m=TODO-DE-CARTON',
	},
	{
		title: 'Carbón',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papel/carbon.png',
		url: 'https://www.pedidos.com/busquedas.asp?query=papel-carbon',
	},
	{
		title: 'Ecológico',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papel/ecologico.png',
		url: 'https://www.pedidos.com/busquedas.asp?query=papel-eco',
	},
	{
		title: 'Paquetes de papel',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papel/paquetes.png',
		url: 'https://www.pedidos.com/busquedas.asp?query=paquete-de-papel',
	},
	{
		title: 'Block de notas',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papel/block.png',
		url: 'https://www.pedidos.com/busquedas.asp?/PRODUCTOS-PARA-OFICINA/CUADERNOS-Y-BLOCKS/BLOCK',
	},
];

const CategoryPapeleria = () => {
	return (
		<Layout title='Papel | Pedidos.com'>
			<HeroCategory
				title='Papel'
				description='Lo necesario en'
				bgImg='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papel/back.jpg'
				categoryItems={categoryItems}
			/>

			<Box py={3} px={{ xs: 0, md: 5 }}>
				<Container maxWidth='xl'>
					<Grid spacing={3} container>
						<Grid xs={12} md={8} item>
							<FloatingToutCard
								title='<strong>Papel para Impresión</strong>Variedad de productos'
								href='https://www.pedidos.com/busquedas.asp?/PAPEL/PAPEL-PARA-IMPRESION&d=true'
								src='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papel/impresion.jpg'
								floatingTitle
							/>
						</Grid>

						<Grid xs={12} md={4} item>
							<ToutCard
								title='Hojas de color'
								src='https://pedidos.com/myfotos/Pedidos-com/pagina/categorias/papel/color.png'
								href='https://www.pedidos.com/busquedas.asp?query=papel-color&m=COPAMEX&m=FORMATODO'
							/>
						</Grid>

						{subcategories.map((featuredItem) => (
							<Grid key={featuredItem.title} xs={12} md={3} item>
								<ToutCard
									title={featuredItem.title}
									src={featuredItem.img}
									href={featuredItem.url}
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
