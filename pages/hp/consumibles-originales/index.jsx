import Script from 'next/script';
import Head from 'next/head';
import { Box, Container, Divider,Typography, Grid, Button } from '@mui/material';
//components
import Link from '@mui/material/Link';

import { Layout } from 'layout/Layout';
import PaymentMethods from 'components/PaymentMethods';
import SlideShow from 'components/SlideShow';
import OriginalSuppliesBanner from 'components/OriginalSuppliesBanner';

const OriginalSuppliesAdvantagesSlides = [
	{
		title:
			'Debemos tener en cuenta que los cartuchos de tinta tienen gran relevancia en nuestro proceso de impresión, por lo que debemos prestar debida atención y cuidado al momento de remplazarlos.',
		content:
			'Puede que estemos tentados en adquirir cartuchos que no sean originales debido al factor precio, pero no hacemos la comparativa calidad - precio. De hecho, a la hora de cambiar el cartucho de tinta por uno no original, estás cambiando el 70% del sistema de impresión, es decir, que la mayor parte de la utilidad de su impresora depende de los cartuchos de tinta. Alguno de los beneficios que los cartuchos originales nos brindan son: Máximo aprovechamiento del consumible, lo que nos indica que imprime correctamente desde el principio hasta el fin del producto, algo que no suele ocurrir con los no originales, que empiezan a imprimir mal cuando tienen poca tinta, entre un 30 y un 15%.',
		img: '/imagenes/hp/fam.png',
	},
	{
		content: `<ul>
			<li>Nos indica exactamente cuanta tinta nos queda, mientras que en los cartuchos no originales no transmiten siempre la información de forma correcta.</li>
			<li>Las tintas de los cartuchos no originales son de una calidad mucho menor. A diferencia de los cartuchos originales que dan una mayor viveza de colores, con negros más profundos y colores más vivos.</li>
			<li>La rapidez de secado de las tintas en los cartuchos originales nos garantiza que no nos vamos a manchar las manos de tinta al manipularlo.</li>
			<li>No dejemos de lado que los cartuchos de tinta originales preservan la garantía de la impresora, y generan menores gastos de mantenimiento.</li>
			</ul>`,
		img: '/imagenes/hp/fam.png',
	},
	{
		title:
			'¿Y todo esto en qué se traduce? <strong>En fiabilidad, calidad de impresión</strong> y <strong>ahorro</strong>.',
		content:
			'Nuestros cartuchos garantizan un 99% de fiabilidad, mientras que cartuchos no originales pueden fallar a menudo. Los cartuchos originales nos brindan calidad de impresión porque evitan goteos y obstrucciones, obteniendo documentos impresos que duran 50 veces más que cualquier otro; y contribuyen al ahorro porque un cartucho original de le ofrece un 50% más de páginas, por lo que no tendrá que cambiar tan a menudo de cartucho. Como podemos ver, el uso de cartuchos originales para su impresora brinda beneficios tanto para sus impresiones como para su bolsillo. ¡¡Así que no dudes en comprar cartuchos Originales HP!!',
		img: '/imagenes/hp/fam.png',
	},
];

const OriginalSuppliesPerformanceSlides = [
	{
		title:
			'Los cartuchos HP están diseñados para ofrecerte un alto rendimiento. Pero algunos factores pueden influir en la cantidad y calidad de impresión que puedes lograr. Aquí te presentamos 4 de ellos.',
		content: `Una de las dificultades más frecuentes que encontramos cuando estamos decidiendo entre una marca de impresora y otra, es comparar el rendimiento. Usualmente, los productos tecnológicos suelen usar nombres extraños para describir las propiedades de un equipo, como UltraColor, o CrystalHD, etc. que no nos ofrecen una información exacta. Para contrarrestar esta confusión, las impresoras y cartuchos <strong>HP</strong>, vienen con la promesa de un rendimiento certificado por normas como la <strong>ISO/IEC</strong>. Estas normas funcionan como un estándar de comparación, y pueden ser usadas para comparar un equipo de impresión con otro, de manera unificada. Pero, debido a que cada persona compra la impresora para usos y aplicaciones distintas, en algunas ocasiones la información ofrecida en el empaque de las impresoras o en los manuales, no es tan exacta. Es decir, si una impresora HP ofrece 1,000 impresiones por cartucho, puede ocurrir que un usuario sólo pueda imprimir 800, mientras que posiblemente otro imprimirá 1,200 hojas.`,
		img: '/imagenes/hp/factores1.png',
	},
	{
		title: `<strong>¿Cómo garantizar un rendimiento de impresión más cercano a lo ofrecido?</strong>`,
		content: `Aunque normalmente no llevamos un conteo estricto del número de hojas impresas, todos tenemos un estimado ideal de lo que un cartucho debería tardar. Ya sea que lo midas en hojas impresas o, más subjetivamente, en tiempo. Pero una de las formas en que puedes asegurarte de obtener una cantidad de hojas impresas igual o superior a lo que se declara en el empaque de tu impresora, es comprar cartuchos originales. Los cartuchos HP no sólo contienen el tóner sino son sistemas complejos que están formados de varios componentes específicamente diseñados para las aplicaciones para las cuales fueron diseñadas las impresoras. Lee también: Cartuchos de toner HP ¿Por qué son mejores que los genéricos? Por ejemplo, algunas impresoras HP están diseñadas para imprimir fotografías, mientras que otras están diseñadas para darte un alto volumen de impresión con tinta negra. Así que, una buena forma de garantizar un rendimiento óptimo y garantizar el buen estado de tu equipo de impresión, es comprando cartuchos originales HP.`,
		img: '/imagenes/hp/factores1.png',
	},
	{
		title:
			'Pero además de comprar cartuchos originales, existen otros factores que pueden influir en el rendimiento de tu impresora. A continuación te presentamos 4 de ellos:',
		content: `<strong>Lugar de ubicación de la impresora</strong>: HP fabrica sus impresoras para que funcionen correctamente en una amplia gama de entornos, pero algunos lugares pueden hacer que la impresora consuma más tóner, lo que influye en el rendimiento. Por ejemplo, las oficinas donde se acumula mucha humedad pueden hacer que el rendimiento del cartucho de impresión disminuya.<br/><br/>
		<strong>Tóner para lubricar el cartucho</strong>: durante la impresión, algunas impresoras HP utilizan una cantidad mínima de tóner como lubricante. Algunos componentes de la impresora requieren una pequeña cantidad de tóner para reducir la fricción y aumentar la vida útil tanto de la impresora como del cartucho. Este tóner que no se usa para imprimir sino para lubricar el sistema se toma en cuenta en las pruebas de rendimiento ISO. Lo bueno de los cartuchos HP es que son fabricados con ese porcentaje de “tóner extra”.`,
		img: '/imagenes/hp/factores1.png',
	},
	{
		title:
			'¿Y todo esto en que se traduce? <strong>En fiabilidad, calidad de impresión</strong> y <strong>ahorro</strong>.',
		content: `<strong>Uso de tintas de color para alcanzar saturación:</strong> En algunos casos es necesario imprimir áreas grandes de color negro, puede darse el caso de que HP utilice una combinación de los otros colores junto con el tóner negro para generar ciertas áreas en negro de la página. Esto se ha configurado así para ofrecer una saturación de tonos oscuros satisfactoria.<br/><br/>
		<strong>Parar y reiniciar la impresora constantemente:</strong> cada vez que se activa el comando de impresión, el sistema de impresión lleva a cabo varias rotaciones antes y después de finalizar la impresión. Cuando este movimiento es muy frecuente, puede desgastar todos los componentes del sistema de impresión, incluido el tóner HP. Estos son algunos de los factores que más inciden en el rendimiento de los cartuchos de tóner.`,
		img: '/imagenes/hp/factores1.png',
		extra: `Te invitamos a tomarlos en cuenta para garantizar que tanto tu impresora como tus suministros, tengan una vida prolongada.<br/><br/>
		¡¡Sin duda la Tienda en Línea más confiable para comprar tus cartuchos originales HP, es pedidos.com!!`,
	},
];

const OriginalSupplies = () => {
	return (
		<Layout title='Busca tus Cartuchos de tinta y tóner laser HP en Pedidos.com'>
			<Head>
				<meta name="description" content="Buscador de cartuchos de tinta y Tóner láser, nuevos y originales HP, con entrega a domicilio en todo México al mejor precio."/>
				<link rel="canonical" href="https://pedidos.com/hp/consumibles-originales"/>
			</Head>
			<Box pt={8} position='relative'>
				<Box
					bgcolor='#f6f7f9'
					position='absolute'
					top='0'
					left='0'
					right='0'
					bottom='60%'
					zIndex={-1}
					sx={{
						backgroundImage:
							'url(/imagenes/HP/principal.jpg)',
						backgroundSize: 'cover',
					}}
				/>
				<Box width={{ xs: '95%', lg: '60%' }} mx='auto'>
					<img
						src='https://pedidos.com/myfotos/pedidos-com/pagina/hp/toner-hp/HP_Q421.webp'
						alt='Toner original HP'
						width='100%'
						style={{
							boxShadow: '0 10px 20px rgb(0 0 0 / 20%)',
							borderRadius: '.5rem',
							margin: 'auto',
							display: 'block',
						}}
					/>
				</Box>
			</Box>

			<Container maxWidth='lg' sx={{ py: 8 }}>
				<Grid spacing={2} container>
					<Grid xs={12} md={6} item>
						<Button
							variant='outlined'
							sx={{
								height: 45,
								bgcolor: 'transparent',
								borderColor: '#d7dded',
								color: '#9ea3a9',
								fontSize: 14,
								fontWeight: 400,
								'&:hover': {
									borderColor: '#707e8c',
									color: '#707e8c',
								},
							}}
							fullWidth>
							Tintas originales HP
						</Button>
					</Grid>
					<Grid xs={12} md={6} item>
						<Button
							variant='outlined'
							sx={{
								height: 45,
								bgcolor: 'transparent',
								borderColor: '#d7dded',
								color: '#9ea3a9',
								fontWeight: 400,
								fontSize: 14,
								'&:hover': {
									borderColor: '#707e8c',
									color: '#707e8c',
								},
							}}
							fullWidth>
							Tóners originales HP
						</Button>
					</Grid>
				</Grid>
			</Container>

			<Box sx={{ bgcolor: '#eee' }}>
				<Container>
					<Grid container>
						<Grid xs={12} md={6} item>
							<Box pt={2} pb={1}>
								<Typography
									variant='h4'
									textAlign='center'
									fontSize={24}
									color='#333'
									fontWeight={500}
									gutterBottom>
									ENTREGA EXPRESS <strong> CDMX</strong>
								</Typography>
								<Box textAlign='center'>
									<Typography component='span' variant='body2' mr={0.5}>
										*Consulta restricciones.
									</Typography>
									<Typography component='span'>
										Tiempo de entrega máximo 3hrs
									</Typography>
								</Box>
							</Box>
						</Grid>
						<Grid xs={12} md={6} item>
							<Box
								pt={2}
								pb={1}
								sx={{
									borderTop: { xs: '1px solid #999', md: 0 },
									borderLeft: { xs: 0, md: '1px solid #999' },
								}}>
								<Typography
									variant='h4'
									textAlign='center'
									fontSize={24}
									color='#333'
									gutterBottom>
									ENTREGA <strong>EL MISMO DÍA</strong>
								</Typography>
								<Box textAlign='center'>
									<Typography component='span' variant='body2' mr={0.5}>
										Sólo CDMX.
									</Typography>
									<Typography component='span'>
										Horario abierto de 9am a 6pm.{' '}
										<Link
											underline='none'
											color='#777'
											href='/soho/politicas'>
											*Más info.
										</Link>
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box>
				<PaymentMethods />
			</Box>

			<SlideShow
				id='original-supplies-advantages'
				title='Beneficios de utilizar cartuchos originales'
				slides={OriginalSuppliesAdvantagesSlides}
			/>

			<Box py={8}>
				<Container maxWidth='xl'>
					<OriginalSuppliesBanner />
				</Container>
			</Box>

			<SlideShow
				id='original-supplies-performance'
				title='<strong>4 factores</strong> que influyen en el rendimiento de los cartuchos hp'
				slides={OriginalSuppliesPerformanceSlides}
			/>
		</Layout>
	);
};

export default OriginalSupplies;
