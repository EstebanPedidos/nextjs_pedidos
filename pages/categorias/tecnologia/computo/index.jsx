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
		label: 'Laptops',
		description: '¡Llévala a donde quieras!',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/laptop.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/categorias/tecnologia/computo/laptops',
	},
	{
		label: 'Monitores',
		description: 'Complementa tu espacio ',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/monitores.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/categorias/tecnologia/computo/monitores',
	},
	{
		label: 'AIO & Desktops',
		description: 'Listas para trabajar',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/aio-desktops.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/categorias/tecnologia/computo/aio-y-desktops',
	},
];

const brands = [
	{
		label: 'Dell',
		url: '/busquedas?/TECNOLOGIA/COMPUTO&m=DELL',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/dell.webp',
	},
	{
		label: 'Lenovo',
		url: '/busquedas?/TECNOLOGIA/COMPUTO&m=LENOVO',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/lenovo.webp',
	},
	{
		label: 'HP',
		url: '/busquedas?query=laptop+hp',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/hp.webp',
	},
	{
		label: 'Apple',
		url: '/busquedas?/TECNOLOGIA/COMPUTO&m=APPLE',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/apple.webp',
	},
	{
		label: 'Asus',
		url: '/busquedas?/TECNOLOGIA/COMPUTO&m=ASUS',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/asus.webp',
	},
	{
		label: 'Huawei',
		url: '/busquedas?/TECNOLOGIA/COMPUTO&m=HUAWEI',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/huawei.webp',
	},
	{
		label: 'Benq',
		url: '/busquedas?/TECNOLOGIA/COMPUTO&m=BENQ',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/benq.webp',
	},
	{
		label: 'Samsung',
		url: 'https://busquedas/?query=monitor+Samsung',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/samsung.webp',
	},
	{
		label: 'Acteck',
		url: '/busquedas?/TECNOLOGIA/COMPUTO&m=ACTECK',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/acteck.webp',
	},
];

const CPUbrands = [
	{
		label: 'AMD',
		url: '/busquedas?query=AMD',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/procesadores/amd.webp',
	},
	{
		label: 'Intel',
		url: '/busquedas?query=Intel',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/procesadores/intel.webp',
	},
	{
		label: 'Apple M1',
		url: '/busquedas?query=CHIP-M1&m=APPLE',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/procesadores/chip-m1.webp',
	},
];

const Computer = () => {
	return (
		<Layout title='Equipo de cómputo y hardware para tu oficina | Pedidos.com'>
			<Head>
				<meta name="description" content="Compra en línea equipo de cómputo y hardware para casa u oficina. Mejor calidad y precio en tu tienda en línea pedidos.com. Envío gratis en CDMX."/>
				<link rel="canonical" href="https://pedidos.com/tecnologia/computo"/>
			</Head>
			<HeroImage
				src='https://pedidos.com/myfotos/pedidos-com/pagina/computo/back-computo.webp'
				alt='Computo'
				title='Encuentra tu<br/>equipo de <span>cómputo</span>.'
				subtitle='Productos de computo para tu oficina'
				height='28vh'
				sx={{
					backgroundPosition: 'center top',
				}}
			/>

			<Container sx={{ px: 0 }}>
				<CardsCarouselSection
					id='computo'
					title='¿Qué tipo de producto estas buscando?'
					subtitle='Gran variedad de opciones para tu día a día.'
					items={categories}
					ctaLabel='Ver todo'
					ctaLink='/busquedas?/TECNOLOGIA/COMPUTO'
					breakpoints={{
						768: {
							slidesPerView: 3,
							spaceBetween: 25,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 25,
						},
					}}
					centered
					ctaNewLine
				/>
			</Container>

			<Box py={4} bgcolor='#f8f9fa'>
				<BrandCarousel
					id='computer-brands'
					brands={brands}
					imgHeight={102}
					itemSx={{ py: 0 }}
				/>
			</Box>

			<Container sx={{ mt: 5 }}>
				<MSIBanner shadow />
			</Container>

			<Box pt={10} pb={5}>
				<Container>
					<Grid spacing={8} container>
						{CPUbrands.map((CPUBrand) => (
							<Grid xs={12} md={4} key={CPUBrand.label} item>
								{' '}
								<Link href={CPUBrand.url}>
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

			<Box py={15}>
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

			<Box py={4} sx={{ opacity: 0.7 }}>
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						<Grid xs={12} item>
							<Typography fontSize={15} fontWeight={500} gutterBottom>
								Productos de computo para tu oficina
							</Typography>
							<Typography
								textAlign='justify'
								fontSize={12}
								variant='body2'
								gutterBottom>
								¿Estás buscando{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									{' '}
									laptops baratas
								</Link>{' '}
								o monitores para PC? Si quieres armar una oficina en casa o
								planeas renovar el equipo de tu empresa, tendrás que pensar en
								cuáles son los mejores productos de cómputo y qué hardware es
								más conveniente. Para tu hogar, PYME u oficina encuentra{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO'
									target='_blank'>
									las mejores marcas de cómputo en Pedidos.com
								</Link>{' '}
								. A continuación, conoce opciones, características, ventajas y
								más.
							</Typography>
						</Grid>
						<Grid xs={12} lg={4} item>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								Desktops para oficina vs All in One: Las mejores marcas de
								computo en Pedidos.com
							</Typography>
							<Typography
								variant='body2'
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								Comencemos por lo básico: ¿existen grandes diferencias entre las{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/DESKTOPS'
									target='_blank'>
									{' '}
									desktops para oficina
								</Link>{' '}
								y las conocidas como{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/ALL-IN-ONE'
									target='_blank'>
									{' '}
									“All in One”
								</Link>{' '}
								? Las primeras incluyen monitores para PC,{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/TECLADO-Y-MOUSE/TECLADOS'
									target='_blank'>
									{' '}
									teclados
								</Link>{' '}
								y ratones separados. Vienen en varias formas y tamaños, desde
								grandes bloques voluminosos que deben colocarse debajo de tu
								escritorio, hasta modelos más discretos y elegantes. El gran
								punto a favor de estos productos de cómputo es que los modelos
								grandes, de estilo torre, se pueden adaptar fácilmente para
								satisfacer tus necesidades. Puedes elegir el monitor que desees
								y realizar cambios más significativos internamente, como agregar
								más Ram, una nueva tarjeta gráfica o un procesador más potente.
								Además pueden ser más económicos: si ya tienes un monitor, un
								teclado y un mouse. También son un poco más rápidos. Esto se
								debe a que sus componentes internos tienen más espacio para
								expulsar el calor, lo que significa que pueden funcionar más
								veloces durante más tiempo. En un All in One no hay una torre
								separada con la que lidiar y son fáciles de instalar. Vienen con
								un teclado y un mouse, y los parlantes generalmente están
								integrados en el dispositivo. La configuración es sencilla:
								requiere muy poco, sólo que se la saque de la caja, la coloques
								donde desees y la enciendas. Es una buena opción si no quieres
								atascarte con cables y quieres empezar a trabajar rápidamente.
								Si el espacio es escaso, puede ser una gran alternativa, ya que
								solo tendrás que considerar dónde colocar la pantalla.
							</Typography>
						</Grid>
						<Grid xs={12} lg={4} item>
							<Typography
								variant='body2'
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								Si bien no querrás llevarlo en el avión contigo, es mucho más
								fácil de transportar.
							</Typography>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								Laptops baratas y tablets
							</Typography>
							<Typography
								variant='body2'
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								Para los nómadas, que no buscan productos de cómputos muy
								complejos, los equipos portátiles, sin duda, son los más
								apropiados. Por ejemplo, si estás de viaje con regularidad es
								posible que desees adquirir laptops baratas. Podrás escoger de
								acuerdo a tus necesidades entre variedad de marcas como{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS&amp;m=HP'
									target='_blank'>
									{' '}
									laptops HP
								</Link>
								,{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS&amp;m=MAC'
									target='_blank'>
									{' '}
									Mac
								</Link>
								,{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS&amp;m=Dell'
									target='_blank'>
									{' '}
									Dell
								</Link>
								,{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS&amp;m=ACER'
									target='_blank'>
									{' '}
									Acer
								</Link>
								,{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS&amp;m=Asus'
									target='_blank'>
									{' '}
									Asus
								</Link>{' '}
								o{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS&amp;m=Lenovo'
									target='_blank'>
									{' '}
									Lenovo
								</Link>{' '}
								y muchas más... cuyo rango de precios varia en relación a las
								características, procesadores y memoria que sea requerido. Si
								deseas mayor comodidad y simpleza, también puedes elegir{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/TABLETS'
									target='_blank'>
									{' '}
									tablets
								</Link>{' '}
								baratas como las de la marca Huawei, que rondan los $3,200 pesos
								aproximadamente, u opciones más avanzadas como Samsung o{' '}
								<Link
									underline='none'
									href='/busquedas?query=Tablet+ipad'
									target='_blank'>
									{' '}
									Apple
								</Link>{' '}
								, cuyo precio aproximado supera los $10,000 pesos.
							</Typography>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								Monitores: una de las claves
							</Typography>
							<Typography
								variant='body2'
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								Si va a comprar desktops para oficina, también tendrás que
								comprar un monitor para acompañarlo. Los monitores modernos
								tienden a ser delgados, eficientes en el consumo de energía y
								con detalles nítidos. Varían enormemente en precio, y los
								modelos de gama alta tienen un costo elevado, debido a sus
								pantallas súper detalladas. Y si de{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/MONITORES'
									target='_blank'>
									{' '}
									monitores para PC
								</Link>{' '}
								se trata y buscas alternativas económicas, equipa tu casa u
								oficina con marcas reconocidas como Acer, Benq o Acteck, que se
								consiguen en rangos de precios que van desde los $2,500 pesos en
								adelante.
							</Typography>
						</Grid>
						<Grid xs={12} lg={4} item>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								¿Cómo elegir un monitor?
							</Typography>
							<Typography
								variant='body2'
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								La resolución de la pantalla es clave al comprar un monitor y
								debe ser tu principal preocupación. Si estás utilizando tu
								desktop para la mayoría de las tareas de oficina, Full HD será
								más que suficiente. Sin embargo, si estás haciendo mucho trabajo
								gráfico o jugando juegos, notarás una gran diferencia al pasar a
								una pantalla ultra HD. La distancia a la que te sientas del
								monitor también es clave, ya que cuanto más cerca estés, más
								probabilidades tendrás de detectar una resolución más baja.
							</Typography>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								Hardware: los esenciales{' '}
							</Typography>
							<Typography
								variant='body2'
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								Al momento de elegir tipos de{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO'
									target='_blank'>
									hardware
								</Link>{' '}
								, las opciones elegidas se deberán adaptar a tus necesidades.
								Quizás algunos precisan gran velocidad en su procesador, otros
								una mejor resolución en pantalla o una mayor capacidad de
								almacenamiento. Pero ¿cuáles son los diferentes tipos de
								hardware? Empecemos por el hardware interno, que se refiere a
								los dispositivos que están instalados en la computadora.
								Ejemplos hay muchos:{' '}
								<Link
									underline='none'
									href='/busquedas?/ACCESORIOS/COMPONENTES-DE-COMPUTO/DISCOS-DUROS-EXTERNOS'
									target='_blank'>
									{' '}
									procesadores
								</Link>{' '}
								,{' '}
								<Link
									underline='none'
									href='/busquedas?/ACCESORIOS/COMPONENTES-DE-COMPUTO/DISCOS-DUROS-EXTERNOS'
									target='_blank'>
									{' '}
									tarjetas madres
								</Link>{' '}
								y tarjetas de video. Por otro lado, si nos referimos a
								dispositivos externos encontraremos ruteadores, bocinas,
								auriculares, webcams, ratones y teclado. En cuanto a hardware de
								almacenamiento hay Discos Duros Externos e Internos, tarjetas de
								memoria.
							</Typography>
						</Grid>
						<Grid xs={12} item>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								Equipa tu casa u oficina
							</Typography>
							<Typography
								variant='body2'
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								Trabajar desde casa ya es un hábito común para muchos. Pero qué
								productos de cómputo son imprescindibles. Probablemente pienses
								en un buen monitor. Si es sí, vas bien encaminado. También
								desearás que tu máquina sea un poco rápida. Entonces necesitarás
								un procesador que se adecue a tus tiempos. En definitiva, un
								home office perfecto deberá incluir distintos tipos de hardware:
								interno, externo, de procesamiento, almacenamiento y periféricos
								mixtos. Y recuerda: cada producto de cómputo lo deberás
								seleccionar de acuerdo a tus necesidades. Ya sea que se trate de
								una desktop, All in One o un equipo portátil, conoce cuáles son
								los hardware más útiles, que no pueden faltar en tu hogar.
							</Typography>
						</Grid>
						<Grid xs={12} item>
							<Typography
								variant='body2'
								fontWeight={500}
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								¿Cómo mejorar un home office?
							</Typography>
							<Typography
								variant='body2'
								textAlign='justify'
								fontSize={12}
								gutterBottom>
								Los tipos de hardware que mencionamos mejoran el funcionamiento
								de tu equipo y lo hacen más eficiente. Pensemos en cómo mejorar
								un home office: si usas mucho las llamadas y videoconferencias,
								vas a necesitar de una webcam, micrófonos, bocinas y auriculares
								para mantener una buena calidad de audio y de video. Algunos
								equipos ya tienen hardware integrados (webcam, mics, bocinas),
								como sucede en las laptops o tablets. Pero su calidad y
								rendimiento dependerá de qué tan sofisticado sea el equipo. Si
								te trabajas en red, un ruteador es indispensable. Pues mejorará
								la gestión del tráfico de datos. Además obtendrás mayor
								velocidad y te permitirá conectar varios dispositivos a la vez:
								ahorras tiempo y tu trabajo llegará a ser más productivo.
								Finalmente, a pesar de que, actualmente, el cloud triunfa en
								materia de almacenamiento es probable que , según el tipo de
								trabajo que realices, desees algo físico y tradicional como los{' '}
								<Link
									underline='none'
									href='/busquedas?/ACCESORIOS/COMPONENTES-DE-COMPUTO/DISCOS-DUROS-EXTERNOS'
									target='_blank'>
									{' '}
									Discos Duros Externos
								</Link>{' '}
								e Internos. Los hay en variedad de tamaño: con capacidad de 1TB
								desde los $850 pesos. Algunas marcas populares son A-DATA,
								Toshiba, Seagate entre otras.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default Computer;
