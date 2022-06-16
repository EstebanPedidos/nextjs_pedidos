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
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/aio-desktops/aio-escolar.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/busquedas.asp?%20query=AIO&p=INTEL-CELERON&p=AMD-ATHLON&p=INTEL-CELERON-J3060&p=INTEL-CELERON-J4025&p=AMD-ATHLON-SILVER-3050U&d=true',
		icon: 'fa-graduation-cap',
	},
	{
		label: 'Empresarial',
		description: 'Mejora tu productividad',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/aio-desktops/aio-empresa.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/busquedas.asp?%20query=AIO&p=AMD-RYZEN-3&p=INTEL-CORE-I3&p=INTEL-CORE-I5&p=AMD-RYZEN-5&p=AMD-A4&p=AMD-A6&p=INTEL-CORE-I5-10500&p=CORE-I5&p=AMD-A6-9225&p=AMD-A6-9230&p=CHIP-M1&d=true',
		icon: 'fa-briefcase',
	},
	{
		label: 'Gaming',
		description: 'Disfruta los juegos',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/aio-desktops/aio-gamer.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/busquedas.asp?%20query=desktop-gaming&d=true',
		icon: 'fa-gamepad',
	},
	{
		label: 'Diseño & Arquitectura ',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/aio-desktops/aio-profesional.webp?w=390&h=490&crop=faces&dpr=2&fit=crop',
		url: '/busquedas.asp?%20query=all-in-one&p=AMD-A9&p=INTEL-CORE-I7&p=AMD-A12-9730P&p=CHIP-M1&d=true',
		icon: 'fa-pencil-ruler',
	},
];

const CPUbrands = [
	{
		label: 'AMD',
		url: '/busquedas.asp?%20query=All-in-one&p=AMD-A9&p=AMD-A6&p=AMD-RYZEN-3&p=AMD-RYZEN-5&p=AMD-A4&p=AMD-ATHLON&p=AMD-A12-9730P&p=AMD-A6-9225&p=AMD-A6-9230&p=AMD-ATHLON-SILVER-3050U&p=AMD-E2-9000&p=AMD-RYZEN-3-4300U&d=true',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/procesadores/amd.webp',
	},
	{
		label: 'Intel',
		url: '/busquedas.asp?%20query=All-in-one&p=INTEL-CORE-I3&p=INTEL-CORE-I5&p=INTEL-CORE-I7&p=INTEL-CELERON&p=INTEL-CELERON-J3060&p=INTEL-CELERON-J4025&p=INTEL-PENTIUM-SILVER-J5005&p=CORE-I5&d=true',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/procesadores/intel.webp',
	},
	{
		label: 'Apple M1',
		url: '/busquedas.asp?query=all-in-one&p=CHIP-M1',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/computo/procesadores/chip-m1.webp',
	},
];

const AIOAndDesktops = () => {
	return (
		<Layout title='Computadoras de escritorio al mejor precio | Pedidos.com'>
			<Head>
				<meta name="description" content="Compra en línea computadoras de escritorio para casa u oficina. Mejor calidad y precio en desktops en tu tienda en línea pedidos.com. Envío gratis en CDMX."/>
				<link rel="canonical" href="https://pedidos.com/tecnologia/computo/aio-y-desktops"/>
			</Head>
			<HeroImage
				src='https://pedidos.com/myfotos/pedidos-com/pagina/computo/back-computo.webp'
				alt='Computo'
				title='AIO &<br/>Desktops<span>.</span>'
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
					ctaLink='/busquedas.asp?/TECNOLOGIA/COMPUTO/MONITORES'
					centered
					ctaNewLine
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
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						<Grid xs={12} item>
							<Typography fontWeight={500} fontSize={15} gutterBottom>
								Las mejores computadoras de escritorio para tu casa u oficina
							</Typography>
							<Typography
								textAlign='justify'
								fontSize={12}
								variant='body2'
								fontWeight={500}>
								Las mejores{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/DESKTOPS'
									target='_blank'>
									computadoras de escritorio
								</Link>{' '}
								y{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/ALL-IN-ONE'
									target='_blank'>
									All in One
								</Link>{' '}
								para oficina u hogar deben ser cómodas y muy prácticas. Lo ideal
								es que cuenten con una velocidad óptima y se puedan conseguir
								modelos novedosos y modernos. A continuación, incluimos las{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/DESKTOPS'
									target='_blank'>
									mejores desktops
								</Link>{' '}
								para tu casa u oficina. Descubre las desktops al mejor precio en{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/DESKTOPS'
									target='_blank'>
									Pedidos.com.
								</Link>
							</Typography>
						</Grid>
						<Grid xs={12} item>
							<Typography fontWeight={500} fontSize={14} gutterBottom>
								Ventajas de las desktops
							</Typography>
							<Typography textAlign='justify' fontSize={12} variant='body2'>
								Dependiendo del trabajo que realices y las demandas que imponga
								al{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/DESKTOPS'
									target='_blank'>
									hardware de tu computadora
								</Link>
								, puedes elegir entre dispositivos de escritorio,{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									computadoras portátiles
								</Link>{' '}
								y tabletas cuando seleccione los sistemas para tu negocio. Cada
								uno de estos tipos de equipo ofrece sus pros y sus contras, pero
								en algunas situaciones, las computadoras de escritorio o mejor
								conocidas como “desktops” tienen algunas ventajas. Por ejemplo:
								tienen más potencia y funciones. Son más fáciles y menos
								costosas de actualizar. Además son más fáciles y menos costosas
								de reparar.
							</Typography>
						</Grid>
						<Grid xs={12} item>
							<Typography fontWeight={500} fontSize={14} gutterBottom>
								Conoce la categoría All in One
							</Typography>
							<Typography textAlign='justify' fontSize={12} variant='body2'>
								Esta categoría representa una práctica manera para gozar de
								todos los beneficios de una desktop, más los componentes
								adicionales. Las All in One además del monitor, incluyen sistema
								operativo, hardware y accesorios. En pedidos.com podrás
								encontrar un amplio catálogo.
							</Typography>
						</Grid>
						<Grid xs={12} lg={4} item>
							<Typography
								variant='body2'
								fontSize={12}
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								¿Qué se debe tener en cuenta al comprar Desktops para oficina?{' '}
							</Typography>
							<Typography
								variant='body2'
								fontSize={12}
								textAlign='justify'
								gutterBottom>
								Antes de comprar{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/DESKTOPS'
									target='_blank'>
									desktops para oficina
								</Link>{' '}
								es importante comprender factores como el CPU y la RAM afectan
								el rendimiento del sistema. También debes tener en cuenta los
								periféricos que necesitarás, como puertos de conector y unidades
								ópticas. Pero ¿cómo elegir la más conveniente? Evalúa tus
								necesidades. Las especificaciones ideales de la
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/DESKTOPS'
									target='_blank'>
									computadora
								</Link>{' '}
								están determinadas por su caso de uso específico. Por ejemplo,
								qué tan rápido debe ser tu PC dependerá de lo que planees hacer
								con ella. Para una PC de juegos, un procesador rápido y
								suficiente RAM, así como una potente tarjeta gráfica, resultan
								importantes. Si planeas usar tu{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/DESKTOPS'
									target='_blank'>
									computadora de escritorio
								</Link>
								para navegar por la web y realizar tareas de productividad
								simples, como es el procesamiento de textos, entonces una
								desktops para oficina de menor presupuesto debería ser
								suficiente. Si bien hay muchos{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/DESKTOPS'
									target='_blank'>
									procesadores de escritorio
								</Link>{' '}
								o CPU diferentes, la mayoría provienen de sólo dos fabricantes:
								AMD e Intel. Los procesadores Intel generalmente ofrecen gran
								rendimiento, pero son más caros que los procesadores AMD. Sin
								embargo, la principal diferencia entre los procesadores se
								relaciona con la cantidad de núcleos que ofrecen y su velocidad
								relativa. La mayoría de los fabricantes presentan un sistema de
								clasificación de rendimiento para sus PC de escritorio, pero
								comparar entre marcas no siempre es fácil. Tu mejor opción es
								buscar PC en su rango de precios y luego investigar los
								procesadores para asegurarse de que sean lo suficientemente
								potentes para tus necesidades. Una buena opción es una{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/DESKTOPS&amp;m=HP'
									target='_blank'>
									computadora HP
								</Link>
								.
							</Typography>
						</Grid>
						<Grid xs={12} lg={4} item>
							<Typography
								variant='body2'
								fontSize={12}
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								Opciones de almacenamiento{' '}
							</Typography>
							<Typography
								variant='body2'
								fontSize={12}
								textAlign='justify'
								gutterBottom>
								Memoria. La memoria, o RAM, juega un papel importante en la
								velocidad y el rendimiento de una PC. Los expertos recomiendan
								al menos 8 gigabytes de memoria, pero 16 GB ofrecen un
								rendimiento eficiente.Para juegos y otros usos, 16 GB es el
								mínimo que se debe considerar.Aunque la memoria DDR3 fue el
								estándar para las <strong>desktops para oficina</strong>, ahora
								se prefiere DDR4. Al comprar memoria, intenta comprar la menor
								cantidad posible de DIMM para permitir futuras actualizaciones
								de memoria. Si bien algunas{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/DESKTOPS'
									target='_blank'>
									computadoras de escritorio
								</Link>{' '}
								todavía dependen de unidades de disco duro, la mayoría de las
								computadoras más nuevas se fabrican con unidades de estado
								sólido para almacenar y almacenar datos en caché. Las SSD son
								preferibles porque son más rápidas, más eficientes y más
								duraderas que las HDD. Hay dos elementos principales a
								considerar al comprar discos duros: tamaño y velocidad. Un disco
								duro debe tener al menos 1 TB de espacio de almacenamiento. En
								términos de velocidad, la mayoría funcionan a 7200 rpm, pero
								algunas unidades verdes o de velocidad variable consumen menos
								energía.
							</Typography>
							<Typography
								variant='body2'
								fontSize={12}
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								La importancia del CPU.
							</Typography>
							<Typography
								variant='body2'
								fontSize={12}
								textAlign='justify'
								gutterBottom>
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
								de reloj (en gigahercios), que es lo rápido que piensa.
							</Typography>
						</Grid>
						<Grid xs={12} lg={4} item>
							<Typography
								variant='body2'
								fontSize={12}
								textAlign='justify'
								gutterBottom>
								También presta atención a la cantidad de núcleos, que son
								básicamente mini CPU: más núcleos significa más pensamiento
								simultáneo. Ten cuidado también con la generación del chip (las
								CPU de décima generación de Intel son las mejores de la línea en
								2020): una nueva generación significa un mejor rendimiento con
								menos consumo de batería. Por eso, cuando llegan nuevos
								procesadores, a menudo verás los precios de las computadoras
								portátiles actualizados en todos los ámbitos.
							</Typography>
							<Typography
								variant='body2'
								fontSize={12}
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								Claves de los complementos multimedia
							</Typography>
							<Typography
								variant='body2'
								fontSize={12}
								textAlign='justify'
								gutterBottom>
								Unidades ópticas{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/ACCESORIOS/CDS-Y-DVDS'
									target='_blank'>
									(CD / DVD / Blu-Ray)
								</Link>
								. La mayoría de las computadoras de escritorio todavía vienen
								equipadas con una grabadora de DVD, pero algunas PC de factor de
								forma pequeño están eliminando las unidades ópticas. Para ver
								películas nuevas en HD, tu computadora de escritorio necesita
								una unidad de Blu-ray. Si la computadora que deseas no tiene
								unidades ópticas, compra un reproductor de CD, DVD y Blu-ray
								externo. Tarjetas de video / gráficas. Si no juegas juegos de PC
								con gráficos 3D, entonces no tienes que preocuparte por una
								tarjeta gráfica. Elige una tarjeta de video económica si solo
								estás interesado en acelerar las tareas que no son 3D. Los
								factores a considerar incluyen el rendimiento, la cantidad de
								memoria en la tarjeta, los conectores de salida y la versión de
								Direct X compatible.
							</Typography>
						</Grid>
						<Grid xs={12} item>
							<Typography
								variant='body2'
								fontSize={12}
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								Otros complementos para tu computadora de escritorio
							</Typography>
							<Typography
								variant='body2'
								fontSize={12}
								textAlign='justify'
								gutterBottom>
								Conectores periféricos externos. Verifica cuántos y qué tipo de
								puertos externos están disponibles en la computadora para
								usarlos con futuros periféricos. Hay una variedad de conectores
								periféricos de alta velocidad disponibles. Es mejor tener una PC
								con al menos cuatro puertos USB. Muchos equipos también incluyen
								lectores de tarjetas SD. Monitores de escritorio. Si bien hay
								computadoras de escritorio para oficina todo en uno con
								monitores integrados, aún debes considerar la calidad de la
								pantalla. La mayoría de los monitores actuales se basan en la
								tecnología LCD y la única diferencia importante entre ellos es
								el tamaño y el costo. Algunos otros factores, como la precisión
								del color, pueden ser importantes si planeas usar desktops para
								oficina para trabajos gráficos. Las pantallas LCD de 24 pulgadas
								son las más comunes, gracias a su asequibilidad y compatibilidad
								con video completo de alta definición de 1080p.
							</Typography>
						</Grid>
						<Grid xs={12} item>
							<Typography
								variant='body2'
								fontSize={12}
								fontWeight={500}
								textAlign='justify'
								gutterBottom>
								Desktops al mejor precio en Pedidos.com
							</Typography>
							<Typography
								variant='body2'
								fontSize={12}
								textAlign='justify'
								gutterBottom>
								Si te preguntas cuáles son{' '}
								<Link
									underline='none'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/DESKTOPS'
									target='_blank'>
									las mejores desktops
								</Link>{' '}
								que puedes incorporar en tu hogar u oficina, listamos algunas
								propuestas muy útiles:
								<Link
									underline='none'
									href='/articulos/desktop-airos-airos-intel-atom-ram-512-mb-dd-512-mb#more'
									target='_blank'>
									DESKTOP AIROS INTEL ATOM RAM 512 MB DD 512 MB. PROCESADOR
									INTEL ATOM N270.
								</Link>{' '}
								Cuenta con 3 puertos USB y memoria RAM de 512MB DDR2.
								<Link
									underline='none'
									href='/articulos/desktop-hp-280-g5-procesador-intel-core-i3-ram-4-gb-dd-1-tb'
									target='_blank'>
									DESKTOP HP 280 G5 PROCESADOR INTEL CORE I3 RAM 4 GB DD 1 TB
								</Link>
								. Tiene un procesador INTEL CORE I3-10100. El sistema operativo
								es WINDOWS 10 PRO 64. 4 puertos USB. Disco Duro de 1 TB Y 7200
								RPM. Memoria RAM de 4 GB, 1 combinación de auriculares y
								micrófono.
								<Link
									underline='none'
									href='/articulos/desktop-huawei-matestation-s-b515-procesador-amd-r5-4600g-ram-8-gb-dd-256-gb-ssd'
									target='_blank'>
									DESKTOP HUAWEI MATESTATION S B515 PROCESADOR AMD R5 4600G RAM
									8 GB DD 256 GB SSD
								</Link>
								. Cuenta con un procesador AMD RYZEN 5 4600G y sistema operativo
								WINDOWS 10 HOME. Su disco duro es de 256 GB SSD. Memoria RAM de
								8 GB DDR4 3200 MHZ.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default AIOAndDesktops;
