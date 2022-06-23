import Head from 'next/head';
import {Container,Box, Grid, Typography, Divider,} from '@mui/material';
//Components
import { Layout } from 'layout/Layout';
import HeroImage from 'components/HeroImage';
import CardsCarouselSection from 'components/CardsCarouselSection';
import BrandCarousel from 'components/BrandCarousel';
import MSIBanner from 'components/MSIBanner';
import ShippingBanner from 'components/ShippingBanner';
import CommentsButton from 'components/CommentsButton';
import Link from 'components/Link';

const categories = [
	{
		label: 'Escolar',
		description: 'Para cada etapa',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/monitores/monitor-escolar.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/busquedas?query=monitor-21.5&d=true',
		icon: 'fa-graduation-cap',
	},
	{
		label: 'Empresarial',
		description: 'Mejora tu productividad',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/monitores/monitor-empresa.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/busquedas?query=monitor',
		icon: 'fa-briefcase',
	},
	{
		label: 'Gaming',
		description: 'Disfruta los juegos',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/monitores/monitor-gamer.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/busquedas?query=monitor+gaming',
		icon: 'fa-gamepad',
	},
	{
		label: 'Diseño & Arquitectura ',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/monitores/monitor-profesionales.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/busquedas?query=monitor-27&d=true',
		icon: 'fa-pencil-ruler',
	},
];

const CPUbrands = [
	{
		label: 'Intel',
		url: '/busquedas?query=Laptop&p=INTEL-CORE--I7&p=INTEL-CORE--I5&p=INTEL-CORE--I3&p=INTEL-CELERON-N4020&p=INTEL-CORE-I5&p=INTEL-CELERON&p=INTEL-CORE-I7&p=INTEL-CORE-I3-1115G4&p=INTEL-CORE-I5-10210U&p=INTEL-PENTIUM&p=INTEL-CORE-I5-1035G1%22',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/procesadores/intel.webp',
	},
	{
		label: 'AMD',
		url: '/busquedas?query=Laptop&p=AMD-RYZEN-7&p=AMD-A4&p=AMD-RYZEN-3&p=AMD-RYZEN-3-3300U&p=AMD-3020E&p=AMD-RYZEN-5-3500U&p=AMD-RYZEN-7-4700U&p=AMD-RYZEN-5https://pedidos.com/busquedas?query=Laptop&p=AMD-RYZEN-7&p=AMD-A4&p=AMD-RYZEN-3&p=AMD-RYZEN-3-3300U&p=AMD-3020E&p=AMD-RYZEN-5-3500U&p=AMD-RYZEN-7-4700U&p=AMD-RYZEN-5',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/procesadores/amd.webp',
	},
];

const Monitores = () => {
	return (
		<Layout title='Monitores y equipo de computo para oficina | Pedidos.com'>
			<Head>
				<meta name="description" content="Compra en línea monitores para oficina y hogar. Marcas como HP, Acer, Samsung y más en tu tienda en línea pedidos.com. Envío gratis en CDMX."/>
				<link rel="canonical" href="https://pedidos.com/tecnologia/computo/monitores"/>
			</Head>
			<HeroImage
				src='https://pedidos.com/myfotos/pedidos-com/pagina/computo/back-computo.webp'
				alt='Computo'
				title='Monitores<span>.</span>'
				height='28vh'
				sx={{
					backgroundPosition: 'center top',
				}}
			/>

			<Container sx={{ px: 0 }}>
				<CardsCarouselSection
					id='computo-monitores'
					title='¿Para qué se utilizará principalmente?'
					items={categories}
					ctaLabel='Ver todo'
					ctaLink='/busquedas?/TECNOLOGIA/COMPUTO/MONITORES'
					centered
					ctaNewLine
				/>
			</Container>

			<Box pt={10} pb={5}>
				<Container maxWidth='md'>
					<Grid spacing={8} container>
						{CPUbrands.map((CPUBrand) => (
							<Grid xs={12} md={6} key={CPUBrand.label} item>
								<Link underline='none' href={CPUBrand.url}>
									<Box
										component='img'
										alt={CPUBrand.label}
										sx={{
											width: '100%',
											borderRadius: 2,
											transition: 'all .5s',

											'&:hover': {
												boxShadow: '0 8px 16px 0 #46464640',
												transform: 'translateY(-5px)',
											},
										}}
										src={CPUBrand.img}
									/>
								</Link>{' '}
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Container sx={{ mt: 5, mb: -10, zIndex: 10, position: 'relative' }}>
				<MSIBanner shadow />
			</Container>

			<Box pt={20} pb={5} mb={15} bgcolor='#f7f8fa'>
				<Container>
					<ShippingBanner />
				</Container>
			</Box>

			<Divider
				variant='middle'
				sx={{ borderColor: 'rgba(0, 0, 0, 0.075)', borderBottomWidth: '2px' }}
			/>
			<Box py={6}>
				<CommentsButton />
			</Box>

			<Divider
				variant='middle'
				sx={{ borderColor: 'rgba(0, 0, 0, 0.075)', borderBottomWidth: '2px' }}
			/>

			<Box py={6} sx={{ opacity: 0.7 }}>
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						<Grid xs={12} item>
							<Typography fontSize={15} fontWeight={500} gutterBottom>
								Los mejores monitores de computadora para tu casa u oficina
							</Typography>
							<Typography
								fontSize={12}
								textAlign='justify'
								variant='body2'
								fontWeight={500}
								mb={2}>
								Ya sea que se utilicen para trabajar, para estudiar e incluso,
								para jugar, tener{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/MONITORES'
									target='_blank'>
									monitores para computadora
								</Link>
								, que se adapten a tus necesidades es crucial. Si estás pensando
								en comprar uno nuevo ya sea porque tu monitor de computadora no
								sirva o necesites actualizarlo para aprovechar el software más
								reciente, comprar{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/MONITORES'
									target='_blank'>
									monitores para PC
								</Link>{' '}
								es una gran decisión. Sigue algunos de estos tips para elegir un
								monitor para computadora y descubre los mejores precios en{' '}
								<Link
									underline='none'
									href='https://pedidos.com/'
									target='_blank'>
									Pedidos.com.
								</Link>
							</Typography>
						</Grid>
						<Grid xs={12} item>
							<Typography fontSize={15} fontWeight={500}>
								10 tips para elegir un monitor de computadora
							</Typography>
						</Grid>
						<Grid xs={12} lg={4} item>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								1. Tamaño.
							</Typography>
							<Typography
								fontSize={12}
								textAlign='justify'
								variant='body2'
								gutterBottom>
								¿Qué tan grande es lo suficientemente grande? Cuando se trata de{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/MONITORES'
									target='_blank'>
									monitores para computadora
								</Link>
								, deseas algo que pueda caber cómodamente en tu escritorio de
								casa u oficina y que tenga una pantalla de buen tamaño pues es
								probable que pases varias horas viéndolo. Si bien en el pasado
								los monitores para PC de 20 pulgadas eran algo común, hoy en
								día, a menos que tengas realmente limitaciones de espacio, no
								hay necesidad real de comprar nada de menos de 22 pulgadas. Sin
								embargo, para aquellos que quieren más que eso, hay muchos
								tamaños de{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/MONITORES'
									target='_blank'>
									monitor de computadora
								</Link>{' '}
								para elegir.
							</Typography>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								2. Resolución y tipo de pantalla.{' '}
							</Typography>
							<Typography
								fontSize={12}
								textAlign='justify'
								variant='body2'
								gutterBottom>
								Si buscas eficiencia los monitores para PC de LCD utilizan
								tecnología LED. Son un producto delgado que ahorra energía al
								tiempo que proporciona una iluminación de fondo ideal. En cuánto
								la resolución, si bien 1080p fue una vez el estándar de oro, hoy
								es solo la línea de base. Pero la resolución no es la única
								característica del monitor. De hecho, demasiada resolución en
								una pantalla pequeña puede ser molesta porque reduce todas las
								imágenes y te obliga a ampliar todo lo que ves.
							</Typography>

							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								3. Contraste, frecuencias de actualización y más.{' '}
							</Typography>
							<Typography
								fontSize={12}
								variant='body2'
								textAlign='justify'
								gutterBottom>
								Otras características de los monitores para computadora se
								relacionan con la imagen que pueden producir. Por ejemplo: la
								relación de aspecto en el que la pantalla muestra las imágenes
								(longitud en comparación con la altura). Un estándar común es
								16: 9. Funciona con una gran cantidad de contenido y es ideal
								para películas o juegos. Otro formato común, 16:10, proporciona
								un poco más de espacio vertical para ver varios documentos o
								imágenes abiertas.
							</Typography>
						</Grid>
						<Grid xs={12} lg={4} item>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								4. Brillo.
							</Typography>
							<Typography
								fontSize={12}
								textAlign='justify'
								variant='body2'
								gutterBottom>
								Los monitores para computadoras de gama alta tienen un brillo de
								alrededor de 300 a 350 cd / m2. El brillo adicional puede ser
								útil si trabajas en una habitación bien iluminada o junto a
								ventanas grandes. Sin embargo, demasiado brillo puede ocasionar
								fatiga visual. Siempre que las opciones de brillo alcancen los
								250 cd / m2, tu monitor estará listo para funcionar. Dicho esto,
								si deseas uno con soporte HDR, cuanto más brillo máximo, mejor
								aprovecharás esa tecnología.
							</Typography>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								5. Frecuencia de actualización.
							</Typography>
							<Typography
								fontSize={12}
								variant='body2'
								textAlign='justify'
								gutterBottom>
								Clasificada en hercios (Hz), la frecuencia de actualización de
								un monitor es la frecuencia con la que se actualiza la imagen en
								una pantalla. Si bien la mayoría admite hasta 60 Hz, algunas
								pantallas ahora ofrecen frecuencias de actualización mucho más
								altas. 120Hz a 144Hz es un gran rango para apuntar, pero puedes
								optar por las pantallas más rápidas que existen con soporte de
								hasta 240Hz. Solo asegúrate de tener una tarjeta gráfica de alta
								potencia para respaldarlo.
							</Typography>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								6. Tiempo de respuesta.
							</Typography>
							<Typography
								fontSize={12}
								variant='body2'
								textAlign='justify'
								gutterBottom>
								El tiempo de respuesta indica la rapidez con la que los{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/MONITORES'
									target='_blank'>
									monitores
								</Link>{' '}
								de PC muestran las transiciones de la imagen. Un tiempo de
								respuesta bajo es bueno para videos de acción de ritmo rápido, y
								actividades similares.
							</Typography>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								7. Ángulo de visión.
							</Typography>
							<Typography
								fontSize={12}
								variant='body2'
								textAlign='justify'
								gutterBottom>
								El ángulo de visión no es tan importante para un monitor como lo
								es para una pantalla de TV, pero si trabajas en grupo en tu
								computadora, apunta a un ángulo de visión más grande para que
								las personas a los lados puedan ver fácilmente. Cualquier cosa
								por encima de los 170 grados es una buena alternativa.
							</Typography>
						</Grid>
						<Grid xs={12} lg={4} item>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								8. Tipo de panel.{' '}
							</Typography>
							<Typography
								fontSize={12}
								variant='body2'
								textAlign='justify'
								gutterBottom>
								El tipo de panel utilizado puede tener un gran impacto en su
								apariencia y rendimiento. Todos tienen sus puntos fuertes y sus
								debilidades, lo que los hace más adecuados para diferentes
								usuarios de PC. Las pantallas con paneles TN, por ejemplo,
								tienden a ser las más asequibles. En tanto, los paneles VA
								tienen colores ligeramente mejores y buenos ángulos de visión.
							</Typography>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								9. Diseño y montaje
							</Typography>
							<Typography
								fontSize={12}
								variant='body2'
								textAlign='justify'
								gutterBottom>
								Recuerda: elige un monitor que sea fácil de usar, especialmente
								si estás creando una configuración compleja con más de un
								monitor para tu oficina. Piensa en agregar un soporte que puedas
								inclinar o girar para lograr el ángulo de monitor perfecto.
								Algunos monitores incluso permiten ajustar la inclinación y la
								rotación con una mano. Presta atención a la ubicación de los
								puertos y las funciones de administración de cables para
								conectar tu nuevo monitor de manera ordenada. Los{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/MONITORES'
									target='_blank'>
									monitores de computadora
								</Link>{' '}
								más comunes son lo suficientemente compactos como para colocarse
								en una mesa, escritorio o soporte. Sin embargo, si estás
								buscando un monitor enorme, la opción más eficiente en cuanto al
								espacio es montar el monitor en una pared, liberando así un
								valioso espacio en el piso. En este caso, busca monitores que
								vengan con alternativas de montaje estándar o que sean
								compatibles con ellas.
							</Typography>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								10. Cámara web.
							</Typography>
							<Typography
								fontSize={12}
								variant='body2'
								textAlign='justify'
								gutterBottom>
								Puedes usar{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/MONITORES'
									target='_blank'>
									monitores de PC
								</Link>{' '}
								para mantener videoconferencias con amigos o para conferencias
								de negocios. Tienes dos opciones: una webcam incorporada o una
								cámara independiente. Muchos monitores, especialmente los
								modelos de alta calidad vienen con una cámara web integrada.
							</Typography>
						</Grid>
						<Grid xs={12} item>
							<Typography
								variant='body2'
								fontWeight={600}
								textAlign='justify'
								gutterBottom>
								Monitores al mejor precio en Pedidos.com{' '}
							</Typography>
							<Typography
								fontSize={12}
								variant='body2'
								textAlign='justify'
								gutterBottom>
								Los monitores para computadora se consiguen en un amplio rango
								de precios: desde $2,500 a más de $7,000 pesos. Todo depende de
								la marca, diseño y las características de cada modelo. Un
								monitor para computadora económico es el{' '}
								<Link
									underline='none'
									href='/articulos/monitor-acer-v206hql-abi-19-5-pulg--acer-v206hql-abi-hd-1600-x-900-1-vga;-1-hdmi-v1-4-19-5-pulgadas#more'
									target='_blank'>
									monitor Acer de 19, 5 pulgadas
								</Link>
								. Se consigue en color negro, sus dimensiones son 462 MM X 363
								MM X 191 MM y tiene una resolución de 1600 X 900. Su precio está
								alrededor de los $3,000 pesos. Otros modelos más económicos y
								mayor tamaño, son el{' '}
								<Link
									underline='none'
									href='/articulos/monitor-benq-gw2480-led-23-8-pulgadas'
									target='_blank'>
									monitor BENQ
								</Link>{' '}
								de 23.8 pulgadas o el{' '}
								<Link
									underline='none'
									href='/articulos/monitor-huawei-ad80hw-1920-x-1080-vga--hdmi-23-8-pulg-h'
									target='_blank'>
									monitor Huawei
								</Link>
								, también de 23.8 pulgadas. Finalmente, si buscas algo más
								sofisticado puedes inclinarte por los{' '}
								<Link
									underline='none'
									href='/articulos/monitor-hp-pantalla-hp-z24n-g3-24-pulgadas-resolucion-1920-x-1200#more'
									target='_blank'>
									monitores para computadora HP de 24 pulgadas.
								</Link>{' '}
								Tienen una resolución de 1920 X 1200.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default Monitores;
