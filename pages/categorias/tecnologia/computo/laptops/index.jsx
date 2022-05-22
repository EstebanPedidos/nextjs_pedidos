import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

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
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/laptops/laptop-escolar.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/busquedas.asp?query=laptop&p=INTEL-CELERON&p=AMD-3020E&p=INTEL-PENTIUM&p=ATHLON-3020E&p=AMD-A4&p=INTEL-CELERON-N4020',
		icon: 'fa-graduation-cap',
	},
	{
		label: 'Empresarial',
		description: 'Mejora tu productividad',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/laptops/laptop-empresariales.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/busquedas.asp?query=laptop&p=INTEL-CORE--I5&p=AMD-RYZEN-5&p=INTEL-CORE--I3&p=INTEL-CORE-I5&p=INTEL-CORE-I5-1035G1&p=AMD-RYZEN-3&p=AMD-RYZEN-5-3500U&p=AMD-RYZEN-3-3300U&p=INTEL-CORE-I3-1115G4&p=INTEL-CORE-I5-10210U&p=CHIP-M1',
		icon: 'fa-briefcase',
	},
	{
		label: 'Gaming',
		description: 'Disfruta los juegos',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/laptops/laptop-gamer.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/busquedas.asp?query=gaming',
		icon: 'fa-gamepad',
	},
	{
		label: 'Diseño & Arquitectura ',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/laptops/laptop-profesionales.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/categorias/tecnologia/computo/aio-y-desktops',
		icon: 'fa-pencil-ruler',
	},
];

const brands = [
	{
		label: 'Dell',
		url: '/busquedas.asp?/TECNOLOGIA/COMPUTO&m=DELL',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/dell.webp',
	},
	{
		label: 'Lenovo',
		url: '/busquedas.asp?/TECNOLOGIA/COMPUTO&m=LENOVO',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/lenovo.webp',
	},
	{
		label: 'HP',
		url: '/busquedas.asp?query=laptop+hp',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/hp.webp',
	},
	{
		label: 'Apple',
		url: '/busquedas.asp?/TECNOLOGIA/COMPUTO&m=APPLE',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/apple.webp',
	},
	{
		label: 'Asus',
		url: '/busquedas.asp?/TECNOLOGIA/COMPUTO&m=ASUS',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/asus.webp',
	},
	{
		label: 'Huawei',
		url: '/busquedas.asp?/TECNOLOGIA/COMPUTO&m=HUAWEI',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/huawei.webp',
	},
	{
		label: 'Benq',
		url: '/busquedas.asp?/TECNOLOGIA/COMPUTO&m=BENQ',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/benq.webp',
	},
	{
		label: 'Samsung',
		url: 'https://busquedas.asp/?query=monitor+Samsung',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/samsung.webp',
	},
	{
		label: 'Acteck',
		url: '/busquedas.asp?/TECNOLOGIA/COMPUTO&m=ACTECK',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/marcas/acteck.webp',
	},
];

const CPUbrands = [
	{
		label: 'AMD',
		url: '/busquedas.asp?query=AMD',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/procesadores/amd.webp',
	},
	{
		label: 'Intel',
		url: '/busquedas.asp?query=Intel',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/procesadores/intel.webp',
	},
	{
		label: 'Apple M1',
		url: '/busquedas.asp?query=CHIP-M1&m=APPLE',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/procesadores/chip-m1.webp',
	},
];

const Laptops = () => {
	return (
		<Layout title='Oferta de laptops HP, Dell, Lenovo, Asus y más | Pedidos.com'>
			<HeroImage
				src='https://pedidos.com/myfotos/pedidos-com/pagina/computo/back-computo.webp'
				alt='Computo'
				title='Laptops<span>.</span>'
				height='28vh'
				sx={{
					backgroundPosition: 'center top',
				}}
			/>

			<Container sx={{ px: 0 }}>
				<CardsCarouselSection
					id='computo-laptops'
					title='¿Para qué se utilizará principalmente?'
					items={categories}
					ctaLabel='Ver todo'
					ctaLink='/busquedas.asp?/TECNOLOGIA/COMPUTO'
					centered
				/>
			</Container>

			<Box pt={10} pb={5}>
				<Container>
					<Grid spacing={8} container>
						{CPUbrands.map((CPUBrand) => (
							<Grid xs={12} md={4} key={CPUBrand.label} item>
								{' '}
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

			<Box py={6} sx={{ opacity: 0.8 }}>
				<Container maxWidth={false}>
					<Grid spacing={4} container>
						<Grid xs={12} item>
							<Typography fontWeight={600} gutterBottom>
								Laptops para tu casa u oficina
							</Typography>
							<Typography textAlign='justify' variant='body2'>
								Si estás buscando computadoras laptop para hacer home office o
								equipar una oficina, quizás sientas un poco de desconcierto
								frente a todas las opciones que existen. Después de todo, hay
								una gran selección de modelos en el mercado, y los fabricantes
								de hardware lanzan docenas de opciones cada año. A continuación
								te damos algunos tips para elegir las mejores laptops para tu
								casa u oficina.
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS&amp;m=LENOVO'
									target='_blank'>
									Laptops Lenovo
								</Link>
								, Dell, Asus, HP y todas las mejores marcas. Encuentra{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									Laptops al mejor precio en Pedidos.com
								</Link>
							</Typography>
						</Grid>
						<Grid xs={12} item>
							<Typography fontWeight={600} gutterBottom>
								Tips para elegir computadoras laptop
							</Typography>
							<Typography textAlign='justify' variant='body2'>
								Si buscas{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									laptops baratas
								</Link>{' '}
								lo primero que tienes que revisar son las características que
								necesitas, antes de sólo fijarte en el precio.
							</Typography>
						</Grid>
						<Grid xs={12} lg={4} item>
							<Typography
								variant='body2'
								fontWeight={600}
								textAlign='justify'
								gutterBottom>
								1. El tamaño importa.
							</Typography>
							<Typography variant='body2' textAlign='justify' gutterBottom>
								Una máquina más rápida necesita componentes internos más grandes
								y más espacio para mantenerlos fríos, lo que significa que
								terminará siendo más grande, más pesada y consumirá más batería
								que una computadora menos potente. Actualmente, la potencia
								informática de una{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									computadora portátil
								</Link>{' '}
								ha mejorado. Hoy en día, los procesadores y chips gráficos se
								deslizan en marcos de portátiles esbeltos. Aún así, si deseas
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									computadoras laptop{' '}
								</Link>{' '}
								capaz de realizar tareas más exigentes, principalmente juegos y
								edición de videos, tendrá que ser relativamente voluminosa.
							</Typography>
							<Typography variant='body2' textAlign='justify' gutterBottom>
								<strong>Consejo:</strong> El otro factor obvio que afecta la
								portabilidad es el tamaño de la pantalla, que generalmente
								aparece en primer lugar en las especificaciones de una{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									computadora portátil
								</Link>
								. Elige una pantalla más grande y tendrás más espacio. Opta por
								una más pequeña y será más fácil de transportar en tu mochila o
								bolso de mano. Las pantallas suelen oscilar entre las 11 y las
								17 pulgadas.
							</Typography>
							<Typography
								variant='body2'
								fontWeight={600}
								textAlign='justify'
								gutterBottom>
								2. Elige un sistema operativo.
							</Typography>
							<Typography variant='body2' textAlign='justify' gutterBottom>
								Si ya te has adaptado con un sistema operativo, es posible que
								prefieras seguir con este en lugar de cambiar las cosas.
								Windows, macOS, Chrome OS: Todos son rápidos, estables, seguros
								y confiables. Cada sistema operativo tiene sus pros y sus
								contras, y es difícil clasificarlos definitivamente de una
								manera objetiva. Windows sigue siendo el más popular de los
								tres, lo que también significa que es el principal objetivo de
								malware y virus, así que asegúrate de tener un sistema de
								seguridad sólido (las protecciones integradas estarán bien para
								la mayoría de los usuarios). Como muchos fabricantes diferentes
								fabrican dispositivos con Windows, tendrás una gama más amplia
								de diseños de computadoras portátiles para elegir, un ejemplo
								son las{' '}
								<Link
									underline='none'
									href='busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS&amp;m=DELL'
									target='_blank'>
									Laptops Dell
								</Link>
								.
							</Typography>
						</Grid>
						<Grid xs={12} lg={4} item>
							<Typography variant='body2' textAlign='justify' gutterBottom>
								MacOS de Apple tiene una reputación más sólida en cuanto a
								estabilidad y seguridad, y viene con una gran cantidad de
								software, desde aplicaciones de oficina hasta herramientas para
								crear música. Por otro lado, hay una selección más pequeña de
								diseños de portátiles para elegir y los precios tienden a
								situarse en el extremo superior de la escala. Chrome OS es
								esencialmente el navegador web Chrome. Está limitado a las
								aplicaciones web. Es un sistema operativo liviano y optimizado.
								Necesita poco mantenimiento. Los Chromebook que ejecutan Chrome
								OS están disponibles en una variedad de diseños y, por lo
								general, también tienen un precio competitivo.
							</Typography>
							<Typography variant='body2' textAlign='justify' gutterBottom>
								<strong>Consejo:</strong> A menos que estés comprando tu primera
								computadora portátil, ya estarás familiarizado con al menos uno
								de estos sistemas operativos. Si estás pensando en cambiarte a
								otra cosa, haz una prueba en una laptop propiedad de un amigo o
								familiar para ver cómo te gusta.
							</Typography>
							<Typography
								variant='body2'
								fontWeight={600}
								textAlign='justify'
								gutterBottom>
								3.La importancia del CPU.
							</Typography>
							<Typography variant='body2' textAlign='justify' gutterBottom>
								Al elegir un procesador, asegúrate de saber qué generación es y
								qué significan todos esos números. Examina las{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									computadoras laptop
								</Link>{' '}
								en una tienda local. Para averiguar qué tan capaz es la CPU de
								una computadora para oficina, busca referencias a una velocidad
								de reloj (en gigahercios), que es lo rápido que piensa. También
								presta atención a la cantidad de núcleos, que son básicamente
								mini CPU: más núcleos significa más pensamiento simultáneo.
							</Typography>
							<Typography variant='body2' textAlign='justify' gutterBottom>
								Ten cuidado también con la generación del chip (las CPU de
								décima generación de Intel son las mejores de la línea en 2020):
								una nueva generación significa un mejor rendimiento con menos
								consumo de batería. Por eso, cuando llegan nuevos procesadores,
								a menudo verás los precios de las computadoras portátiles
								actualizados en todos los ámbitos.
							</Typography>
						</Grid>
						<Grid xs={12} lg={4} item>
							<Typography
								variant='body2'
								fontWeight={600}
								textAlign='justify'
								gutterBottom>
								4. RAM ¿es importante?
							</Typography>
							<Typography variant='body2' textAlign='justify' gutterBottom>
								Otra especificación importante es la RAM, que esencialmente
								controla cuánto puede pensar tu computadora portátil en un
								momento dado. Más RAM significa más soporte para muchas pestañas
								del navegador, imágenes más grandes, más aplicaciones abiertas,
								etc. Básicamente, la RAM te permite tener mucho más en marcha
								sin forzar a tu máquina a detenerse por completo. El mínimo
								absoluto en estos días es de 4 GB, aunque tus necesidades son
								incluso algo exigentes, probablemente querrás ir más allá.
							</Typography>
							<Typography variant='body2' textAlign='justify' gutterBottom>
								<strong>Consejo:</strong> el procesador de gráficos, o GPU es
								básicamente una CPU dedicada a los gráficos. Es importante para
								los juegos y la edición de video. Si las imágenes son
								importantes para ti, asegúrate de mirar la resolución, que se
								mide en píxeles. Más píxeles significa una pantalla más nítida.
							</Typography>
							<Typography
								variant='body2'
								fontWeight={600}
								textAlign='justify'
								gutterBottom>
								5. Tamaño del disco duro.
							</Typography>
							<Typography variant='body2' textAlign='justify' gutterBottom>
								Hay algunas otras especificaciones a considerar. El tamaño del
								disco duro indica la cantidad de espacio que ofrece una
								computadora para archivos y aplicaciones. Si planeas mantener
								tus videos, fotos y música en tu máquina (en lugar de
								almacenarlos en la nube), asegúrate de que el disco duro que
								compres pueda manejar todos tus datos con espacio de sobra.
								También presta atención a la cantidad de puertos de entrada y
								salida que tienen las{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									computadoras laptop
								</Link>
								, especialmente si necesitas conectarla a muchos periféricos
								(como discos duros externos o parlantes con cable).
							</Typography>
						</Grid>
						<Grid xs={12} item>
							<Typography
								variant='body2'
								fontWeight={600}
								textAlign='justify'
								gutterBottom>
								Laptops baratas: 4 opciones
							</Typography>
							<Typography variant='body2' textAlign='justify' gutterBottom>
								El precio de un equipo de cómputo es una de las claves para
								decirse por tal o cual modelo. Si tienes un presupuesto
								limitado, esta es otra forma de reducir rápidamente tu elección
								de portátiles. Para ahorrar algo de dinero, busca modelos de{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									laptops baratas
								</Link>
								. Esta es una opción si no necesitas propuestas de vanguardia.
								Las mejores laptops para tu casa u oficina deben tener una
								velocidad óptima. También deben incluir un procesador eficiente:
								según la marca puede ser Intel Core, Intel Celeron, AMD Ryzen
								entre otros. Se aconseja que cuente con 4 puertos usb y con una
								web cam de resolución 640x480. El sistema operativo puede ser
								WINDOWS 10 HOME o WINDOWS 10 PRO entre otros. Finalmente,
								algunas de las laptop al mejor precio en pedidos.com son{' '}
								<Link
									underline='none'
									href='/articulos/laptop-hp-240-g7-1d0f5lt-procesador-intel-celeron-ram-4-gb-dd-500-gb-windows-10'
									target='_blank'>
									Laptops HP
								</Link>{' '}
								y{' '}
								<Link
									underline='none'
									href='/articulos/laptop-lenovo-ideapad-3-14igl05-procesador-intel-celeron-ram-4-gb-dd-1-tb-windows-10-home-'
									target='_blank'>
									Laptops Lenovo
								</Link>{' '}
								se consiguen desde $7,699 pesos, en tanto las{' '}
								<Link
									underline='none'
									href='/articulos/laptop-asus-celeron-f543ma-intel-celeron-n4020-ram-4-gb-dd-500-gb-/articulos/laptop-asus-celeron-f543ma-intel-celeron-n4020-ram-4-gb-dd-500-gb-'
									target='_blank'>
									Laptops Asus
								</Link>{' '}
								y{' '}
								<Link
									underline='none'
									href='/articulos/laptop-dell-vostro-3405-procesador-amd-ryzen-5-ram-8-gb-ssd-256-gb-hd-14-pulgadas-'
									target='_blank'>
									Laptops Dell
								</Link>{' '}
								y desde 9,199 pesos.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default Laptops;
