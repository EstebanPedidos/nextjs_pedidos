import Head from 'next/head';
import {Container,Box, Grid, Typography, Divider, Button} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
//Components
import { Layout } from 'layout/Layout';
import Link from 'components/Link';
import MSIBanner from 'components/MSIBanner';

const whyUsItems = [
	{
		icon: CreditCardIcon,
		title: 'Formas de Pago',
		description:
			'Pensando en ti, contamos con varios métodos de pago, usa el que vaya de acuerdo a tus necesidades.',
	},
	{
		icon: LocalShippingOutlinedIcon,
		title: 'Formas de Envío',
		description:
			'No lo olvidamos, las entregas también son importantes, por ello las hacemos lo más pronto posible.',
	},
	{
		icon: SupportAgentOutlinedIcon,
		title: 'Servicio Personalizado',
		description:
			'Nuestros ejecutivos de ventas podrán ayudarte en lo que necesites de Lunes a Viernes de 9:00 am a 6p.m',
	},
];

const howToSteps = [
	'Selecciona tus productos para tu oficina',
	'Solicita una cotización de tu lista de productos y específica la cantidad que necesitas por producto',
	'Agrega tu dirección, código postal, correo electrónico y teléfono a tu solicitud',
	'Una vez que envíes la información, te responderemos con una cotización en máximo 24hrs.',
	'Chatea con nosotros si es necesario. Y recuerda que los precios de la cotización tienen una validez de 48hrs.',
	'Puedes solicitar apoyo si requieres un asesoramiento o guía para apoyarte escoger que es mejor para tu empresa/negocio de todo nuestro catálogo de productos',
];

const PedidosMayorista = () => {
	return (
		<Layout title='Mayorístas de computo y equipo de oficina | Pedidos.com'>
			<Head>
				<meta name="description" content="Obtén el mejor precio Precio por volumen en productos de cómputo y oficina. Precio especial y la mejor atención en productos tecnológicos para tu empresa."/>
				<link rel="canonical" href="https://pedidos.com/pedidosmayoreo/pedidos-mayorista"/>
			</Head>
			<Box
				sx={{
					py: 3,
					position: 'relative',
					backgroundImage:
						'url(https://pedidos.com/include/css/responsivo/imagenes/PedidosMayoreo/back-min.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
				<Container>
					<Grid spacing={4} container>
						<Grid xs={12} md={7} item>
							<Box pt={15}>
								<Typography
									fontWeight={700}
									fontSize={55}
									color='#333'
									lineHeight={1.125}
									sx={{
										'& > span': {
											color: '#3655a5',
										},
									}}
									gutterBottom>
									Precio{' '}
									<span>
										por <br />
										volumen
									</span>{' '}
									en <br />
									productos de oficina<span>.</span>
								</Typography>
								<Typography fontSize={25} color='#555' mb={3}>
									Precio especial en productos tecnológicos para tu empresa.
								</Typography>
								<Button
									variant='contained'
									color='secondary'
									size='large'
									sx={{ fontSize: 18 }}>
									Solicita una cotización
								</Button>
							</Box>
						</Grid>
						<Grid xs={12} md={5} item>
							<Box
								component='img'
								src='https://pedidos.com/myfotos/pedidos-com/pagina/ppv/precio-pV.png'
								sx={{
									position: {
										xs: 'relative',
										lg: 'absolute',
									},
									width: { xs: '100%', lg: 'auto' },
									height: { xs: 'auto', lg: '90%' },
									right: 0,
									bottom: 0,
								}}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box py={10} bgcolor='#f8f8f8'>
				<Container>
					<Typography
						textAlign='center'
						fontSize={30}
						fontWeight={500}
						gutterBottom>
						¿Por qué escoger a Pedidos.com?
					</Typography>

					<Box display='flex' justifyContent='center' mb={5}>
						<Box width={100} height={3} bgcolor='#3655a5' />
					</Box>

					<Grid justifyContent='center' spacing={4} container>
						{whyUsItems.map((step, i) => (
							<Grid key={step.title} xs={12} sm={6} md={4} item>
								<Box
									bgcolor='white'
									display='flex'
									alignItems='center'
									justifyContent='center'
									flexDirection='column'
									height='100%'
									width='100%'
									pt={4}
									sx={{
										boxShadow: '5px 7px 8px rgb(0 0 0 / 5%)',
										borderRadius: 2,
									}}>
									<Typography
										color='#555'
										textAlign='center'
										fontSize={18}
										fontWeight={500}>
										{step.title}
									</Typography>
									<Box
										display='flex'
										alignItems='center'
										justifyContent='center'
										my={3}>
										<Box
											component={step.icon}
											sx={{ fontSize: 48, color: '#555' }}
										/>
									</Box>

									<Divider sx={{ width: '100%' }} />

									<Typography
										color='#555'
										textAlign='center'
										fontWeight={500}
										py={2.5}
										px={3}
										mb={5}>
										{step.description}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box py={10}>
				<Container>
					<MSIBanner />
				</Container>
			</Box>

			<Box py={10}>
				<Container>
					<Typography
						textAlign='center'
						fontSize={30}
						fontWeight={500}
						gutterBottom>
						¿Cómo hacer una solicitud?
					</Typography>

					<Box display='flex' justifyContent='center' mb={5}>
						<Box width={100} height={3} bgcolor='#3655a5' />
					</Box>

					<Grid spacing={4} container>
						{howToSteps.map((step, i) => (
							<Grid key={step} xs={12} sm={6} md={4} item>
								<Box
									display='flex'
									alignItems='center'
									justifyContent='center'
									flexDirection='column'
									height='100%'
									width='100%'
									sx={{
										boxShadow: '5px 7px 8px rgb(0 0 0 / 5%)',
										borderRadius: 1,
									}}>
									<Box
										display='flex'
										alignItems='center'
										justifyContent='center'
										width={50}
										height={50}
										borderRadius='50%'
										mt={5}
										mb={3}
										border='3px solid #424242'>
										<Typography fontSize={20} fontWeight={600}>
											{i + 1}
										</Typography>
									</Box>

									<Typography
										color='#555'
										textAlign='center'
										py={2.5}
										px={3}
										mb={5}>
										{step}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>

					<Typography fontSize={14} fontWeight={500} textAlign='center' mt={6}>
						Los precios y stock están sujetos a disponibilidad y cambio sin
						previo aviso, una vez enviada la cotización tiene una vigencia de 48
						hrs, posterior a este tiempo será cancelada.
					</Typography>
				</Container>
			</Box>

			<Box py={10} bgcolor='#f9f9fa'>
				<Container maxWidth='lg'>
					<Grid container>
						<Grid xs={12} md={6} item>
							<Box
								sx={{
									display: 'inline',
									float: 'left',
									width: { xs: '100%', md: '130%' },
								}}>
								<Box component='picture'>
									<Box
										component='source'
										data-srcset='https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/sp-day-xs.webp'
										media='(max-width: 855px)'
										sizes='457px'
										srcSet='https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/sp-day-xs.webp'
									/>
									<Box
										component='source'
										data-srcset='https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/sp-day.webp'
										media='(max-width: 1200px)'
										sizes='457px'
										srcSet='https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/sp-day.webp'
									/>
									<Box
										component='img'
										data-sizes='auto'
										src='https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/sp-day.webp'
										data-src='https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/sp-day.webp'
										alt='Pedidos.com, servicio, soporte'
										sizes='457px'
										sx={{
											height: ' 100%',
											maxWidth: '100%',
											display: 'block',
											mx: 'auto',
											borderRadius: 4,
										}}
									/>
								</Box>
							</Box>
						</Grid>
						<Grid xs={12} md={6} item>
							<Box
								sx={{
									borderRadius: 1.25,
									boxShadow: '5px 7px 8px rgb(0 0 0 / 5%)',
									bgcolor: 'white',
									py: 5,
									px: 2.5,
								}}>
								<Typography
									fontWeight={700}
									fontSize={50}
									color='#333'
									sx={{
										'& > span': {
											color: '#3655a5',
										},
									}}>
									<span>Servicio</span> al Cliente
								</Typography>
								<Divider sx={{ mb: 2 }} />
								<Box p={2.5}>
									<Typography fontSize={18}>
										Pedidos.com cuenta con más del 94% de clientes satisfechos,
										esto se debe a que estamos 100% comprometidos contigo.
									</Typography>
									<Typography fontSize={18} fontWeight={500}>
										¡Queremos brindarte la atención que te mereces!
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Divider
				sx={{
					borderBottom: '2px solid rgba(0, 0, 0, 0.05)',
				}}
			/>

			<Box py={10}>
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						<Grid item xs={12}>
							<Typography variant='h6' fontSize={15} color='#333' mb={1}>
								Venta de equipo de cómputo al mayoreo
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}
								fontWeight={500}>
								Ya sea para iniciar una nueva empresa, para renovar tus equipos
								actuales o mejorar el servicio en alguna instancia
								gubernamental, la mejor opción es optar por la compra al
								mayoreo.
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Una de las grandes ventajas de comprar{' '}
								<Link
									underline='none'
									href='/categorias/tecnologia/computo'
									target='_blank'>
									equipo de computo
								</Link>{' '}
								por mayoreo es, por supuesto, que el precio puede reducir
								significativamente ya que se está comprando a un volumen mucho
								mayor que sólo adquirir uno o dos equipos.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Adicionalmente se crea un entorno mucho más amigable y práctico
								para cuando se hacen necesarias reparaciones especiales o
								actualizaciones de software ya que, al ser todos los equipos
								iguales, a nivel de hardware como de programación hace más
								sencillo el mantenimiento.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Claro está, es necesario analizar las opciones disponibles para
								tomar la mejor decisión por tu dinero. Para lograr esto debes
								pensar en las necesidades específicas de tu equipo y conocer
								cuál es el{' '}
								<Link
									underline='none'
									href='/categorias/tecnologia/computo'
									target='_blank'>
									hardware
								</Link>{' '}
								ideal para tu oficina, home office para tus empleados o incluso
								de diseño.
							</Typography>
							<Typography variant='h6' fontSize={13} color='#333' mb={1}>
								Laptops baratas de mayoreo
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								La{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									computadora portátil
								</Link>{' '}
								es una solución que ha ayudado tanto a estudiantes como a
								profesionales, su versatilidad sigue en aumento y hoy día se
								pueden conseguir equipos de este tipo con características de
								hardware elevadas a un precio accesible.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Optar por{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									laptops baratas
								</Link>{' '}
								no está en conflicto con obtener un buen dispositivo, marcas de
								renombre tienen opciones interesantes a bajos precios, por
								ejemplo, Acer, HP, Dell o Lenovo, todas ellas famosas por
								ofrecer dispositivos con una alta relación calidad/precio.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								La mayoría de estos equipos cuenta con memorias RAM de 4 GB,
								algunas opciones pueden subir incluso hasta los 8 GB
								permaneciendo dentro del presupuesto considerado como económico,
								así, este tipo de computadoras son ideales para escuelas u
								oficinas, cumplen con las características de velocidad
								necesarias para estos entornos.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								El procesador Intel Core I5 pertenece a una familia de
								procesadores que garantiza varias mejoras, entre las que
								destacan una mejor conectividad WiFi, mucho más estable, así
								como adaptarse a las características del hardware disponible
								para sacarle el mayor provecho posible.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Además de esto, si la computadora lo permite, puede reproducir
								contenido en 4K HDR para tener una experiencia gaming sin
								precedentes.
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography variant='h6' fontSize={15} color='#333' mb={1}>
								Computadoras de escritorio al mayoreo
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								El abanico de{' '}
								<Link
									underline='none'
									href='/categorias/tecnologia/computo'
									target='_blank'>
									equipo de cómputo
								</Link>{' '}
								económico no se cierra solamente con las laptops, estas pueden
								ser útiles cuando se necesita que los trabajadores estén en
								constante movimiento de ciudad en ciudad, pero las computadoras
								de escritorio están lejos de quedar obsoletas.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Especialmente para escuelas u oficinas, las computadoras de
								escritorio aún son una opción económica y práctica para dotar
								del equipamiento necesario a todo un equipo o salón de clases.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Las ventajas de este tipo de computadoras pueden ir desde el
								hecho de que, si llega a estropearse el mouse o el teclado se
								puede solucionar fácilmente sólo comprando uno nuevo y
								conectándolo a la computadora hasta que se puede actualizar el
								hardware cuando sea necesario.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Las computadoras de escritorio All in One proveen de un estilo
								minimalista con características de hardware ideales para
								estudiantes y trabajadores de oficina, por ejemplo, la HP All in
								One 200 G8 AIO, con 4 GB de memoria RAM y 128 GB de memoria
								interna, por supuesto, a un precio accesible.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Si por el contrario quieres optar por alguna de las{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS'
									target='_blank'>
									computadoras baratas
								</Link>{' '}
								de escritorio más tradicional, o mejor aún, armar tu propio
								equipo a tu gusto, también puedes hacerlo eligiendo el CPU y el
								monitor por separado.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Apple es una de las marcas más importantes en telefonía y
								computación, por ello sus equipos son tan cotizados y de buena
								calidad, por ejemplo, la{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/ALL-IN-ONE'
									target='_blank'>
									All in One
								</Link>{' '}
								IMac MGP J3EA además de ser hermosa estéticamente hablando,
								también es poderosa y gracias al sistema operativo Mac Os
								aprovecha al máximo todos los elementos como memoria RAM y
								procesador.
							</Typography>

							<Typography variant='h6' fontSize={15} color='#333' mb={1}>
								Impresoras y cartuchos para oficina de mayoreo
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Por supuesto, cualquier oficina necesita de más elementos además
								de las computadoras, por ejemplo, impresoras y demás consumibles
								como hojas de papel y tintas.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Una{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/IMPRESION/MULTIFUNCIONALES'
									target='_blank'>
									impresora multifuncional
								</Link>{' '}
								es de gran ayuda, especialmente para oficinas ya que se tienen
								que digitalizar muchos documentos y gracias a que cuentan con un
								sistema de recarga de tinta, misma que se almacena en tanques
								internos, se genera un gran ahorro de tinta.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								La multifuncional HP M428DW es una impresora laser que imprime
								en blanco y negro, pero tiene una gran capacidad para hasta 350
								hojas, la{' '}
								<Link
									underline='none'
									href='/hp/consumibles-originales'
									target='_blank'>
									tinta para impresora
								</Link>{' '}
								en este tipo de dispositivos no es recargable, sino que se
								utiliza un tóner, aún así la vida útil de este es muy elevada.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Si necesitas una impresora laser a color, la opción es la HP
								Laserjet Pro MFP M182NW con capacidad de hasta 150 hojas,
								también puedes cotizar estos equipos al mayoreo.
							</Typography>
						</Grid>

						<Grid item xs={12}>
							<Typography variant='h6' fontSize={15} color='#333' mb={1}>
								Las mejores marcas de equipo de cómputo de mayoreo en
								Pedidos.com{' '}
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								No todas las tiendas ofrecen mejoras de precio por volumen
								significativas al solicitar al mayoreo , las principales cadenas
								de venta de este tipo de equipamiento manejan solamente las
								ventas al menudeo, mejoras de precio mínimas o enfocado al
								mercado de consumo, por ello se complica un poco el hecho de
								buscar una tienda que brinde beneficios en precios por compras
								de volúmenes elevados.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								<Link
									underline='none'
									href='https://pedidos.com/'
									target='_blank'>
									Pedidos.com
								</Link>{' '}
								es una página de venta de equipamiento para oficina de todo
								tipo, desde lápices, engrapadoras, gomas de borrar, hasta
								computadoras de todas las marcas en el mercado,
								multifuncionales, monitores, etc.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Esta tienda en línea tiene las opciones de venta al menudeo,
								pero también es un mayorista de tecnología, basta con entrar a
								la página del producto que necesites, debajo del precio se
								encuentra un botón que dice “Cotizar precio por volumen”, en
								esta opción un asesor se comunicará contigo vía whatsapp para
								atenderte y buscar el mejor precio para tu compra al mayoreo. Si
								tienes un negocio o empresa igual puedes usar esta opción para
								apoyarte a obtener mejoras de precio y beneficios.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								No sólo eso, esta página también cuenta con facilidades de pago
								a meses sin intereses y envío sin costo adicional, así que, si
								necesitas comprar al mayoreo, pedidos.com es la mejor opción.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default PedidosMayorista;
