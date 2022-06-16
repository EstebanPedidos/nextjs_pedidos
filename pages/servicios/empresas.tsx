import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { Layout } from 'layout/Layout';
import Link from 'components/Link';
import IconCardCarousel from 'components/IconCardCarousel/IconCardCarousel';

const advantages = [
	{
		icon: 'fas fa-truck',
		title: 'Envíos Gratuitos en la CDMX',
		description:
			'<strong>En Envíos Foráneos hay costo a partir de $599.</strong><br/> Con vol. arriba de 25kg tiene costo extra.',
	},
	{
		icon: 'fas fa-dollar-sign',
		title: 'Precios Preferenciales ',
		description: 'Según el volumen de compra',
	},
	{
		icon: 'far fa-comment',
		title: 'Recordatorios de compra ',
		description: 'Para que no se te olvide',
	},
	{
		icon: 'fas fa-user-check',
		title: 'Ejecutivo de Asignado ',
		description: 'Tendrás asistencia en todos tus pedidos ',
	},
	{
		icon: 'far fa-credit-card',
		title: 'Pagos contra entrega con',
		description: 'Montos mayores a $50,000 <br/>con tarjeta',
	},
	{
		icon: 'fas fa-shield-alt',
		title: 'Entrega Aseguradas',
		description:
			'Si no te entregamos a tiempo en CDMX, se bonificará el costo de tu envío en tu cuenta.',
	},
	{
		icon: 'fas fa-file-signature',
		title: 'Eficiencia en Trámites ',
		description: 'Garantías, devoluciones, Refacturaciones ',
	},
];

const benefits = [
	{
		benefit: 'Precios Deals',
		personal: 'Hasta <strong>20%</strong> más barato',
		business: 'Hasta <strong>30%</strong> más barato',
	},
	{
		benefit: 'Envíos Asegurados',
		personal: true,
		business: true,
	},
	{
		benefit: 'Ejecutivo Asignado',
		personal: true,
		business: true,
	},
	{
		benefit: 'Eficiencia en Trámites',
		personal: true,
		business: true,
	},
	{
		benefit: 'Entregas de Horarios Programados y Express',
		personal: true,
		business: true,
	},
	{
		benefit: 'Pedidos Favoritos y Recordatorios de compra',
		personal: true,
		business: true,
	},
	{
		benefit: 'Pago contra entrega en montos de hasta $50,000 MXN',
		personal: false,
		business: true,
	},
	{
		benefit:
			'Envíos Gratis CDMX y para Envíos Foráneos hay un costo a partir de $599. Costo extra en Vol. arriba de 25kg.',
		personal: false,
		business: true,
	},
];

export const Empresas = () => {
	return (
		<Layout>
			<Box
				sx={{
					background:
						'linear-gradient(to top, rgba(140, 164, 255, 0.14901960784313725), rgba(251, 251, 251, 0.3803921568627451))',
				}}
				pt={3}>
				<Container maxWidth={false} sx={{ px: { md: '0!important' } }}>
					<Grid spacing={4} container>
						<Grid xs={12} lg={6} item>
							<Box
								height='100%'
								display='flex'
								justifyContent='center'
								alignItems={{ xs: 'start', lg: 'center' }}
								flexDirection='column'>
								<Box
									display='flex'
									flexDirection='column'
									gap={3}
									px={{ xs: 4, lg: 0 }}>
									<Typography fontSize={20} fontWeight={500} color='#555'>
										Conviértete en miembro.
									</Typography>
									<Typography
										variant='h1'
										color='#333'
										fontSize={36}
										fontWeight={700}
										sx={{
											'& > span': {
												color: '#3655a5',
											},
										}}>
										La solución para las <br />
										<span>empresas</span>.
									</Typography>

									<Typography fontSize={18} color='#333' maxWidth={510}>
										Te ayudamos a conseguir el espacio de trabajo para tu equipo
										de trabajo. Disfruta de los beneficios que traemos para ti
										al registrarte como empresa.
									</Typography>

									<Box display='flex' gap={2}>
										<Box flex={1}>
											<Button
												sx={{
													borderWidth: '2px',
													color: '#3655a5',
													borderColor: '#3655a5',
													backgroundColor: '#e4e8f3',
													px: 5,
													'&:hover': {
														borderWidth: '2px',
														backgroundColor: '#dee5fb',
													},
												}}
												variant='outlined'
												size='large'>
												Ayuda
											</Button>
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>

						<Grid xs={12} lg={6} item>
							<Box textAlign={{ xs: 'center', md: 'right' }}>
								<Box component='picture'>
									<Box
										component='source'
										data-srcset='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/servicios-pedidos-empresa2.webp'
										media='(max-width: 855px)'
										sizes='457px'
										srcSet='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/servicios-pedidos-empresa2.webp'
									/>
									<Box
										component='source'
										data-srcset='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/servicios-pedidos-empresa2.webp'
										media='(max-width: 1200px)'
										sizes='457px'
										srcSet='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/servicios-pedidos-empresa2.webp'
									/>
									<Box
										component='img'
										data-sizes='auto'
										src='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/servicios-pedidos-empresa2.webp'
										data-src='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/servicios-pedidos-empresa2.webp'
										alt='Pedidos.com, servicio, soporte'
										sizes='457px'
										sx={{
											height: ' 100%',
											maxWidth: '100%',
											display: 'block',
											mx: 'auto',
										}}
									/>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box pt={6}>
				<Container maxWidth='lg'>
					<Typography
						component='h4'
						variant='h4'
						fontSize={28}
						fontWeight={700}>
						La manera de facilitar tus compras online
					</Typography>
				</Container>

				<IconCardCarousel items={advantages} navigation />
			</Box>

			<Box
				sx={{
					py: 6,
					background:
						'linear-gradient(to top, rgba(140, 164, 255, 0.14901960784313725), rgba(251, 251, 251, 0.3803921568627451))',
					bgcolor: '#f8f8f8',
				}}>
				<Container maxWidth='lg'>
					<Box
						sx={{
							position: 'relative',
							boxShadow: '0px 6px 13px 0px rgb(101 114 154 / 38%)',
							px: 2,
							pt: 5,
							pb: 8,
							borderRadius: 2.5,
							bgcolor: 'white',
							overflow: 'hidden',

							'&::before': {
								content: '"Miembros PRO"',
								position: 'absolute',
								bottom: '-5%',
								left: '7%',
								lineHeight: 1,
								fontSize: 120,
								fontFamily: '"Poppins",sans-serif',
								zIndex: 1,
								fontWeight: 500,
								textTransform: 'uppercase',
								opacity: 0.2,
								color: '#dcdef7',
								whiteSpace: 'nowrap',
							},
						}}>
						<Grid
							spacing={3}
							sx={{ position: 'relative', zIndex: 2 }}
							container>
							<Grid display={{ xs: 'none', md: 'block' }} md={6} item>
								<Box
									display='flex'
									alignItems='center'
									justifyContent='start'
									height={48}>
									<Typography color='#555' fontWeight={700} fontSize={18}>
										Beneficios
									</Typography>
								</Box>
							</Grid>
							<Grid className='personal-cell' xs={6} md={3} item>
								<Box
									display='flex'
									alignItems='center'
									justifyContent='center'
									borderRadius={15}
									border='2px solid #e5e5e5'
									boxShadow='0 5px 7.5px 0 rgb(0 0 0 / 5%)'
									bgcolor='white'
									mr={3}
									height={48}>
									<Typography color='#555' fontWeight={700}>
										Hogar | Personal
									</Typography>
								</Box>
							</Grid>
							<Grid
								className='business-cell'
								xs={6}
								md={3}
								sx={{
									backgroundColor: '#325ac317',
									borderTopRightRadius: 8,
									borderTopLeftRadius: 8,
								}}
								item>
								<Box
									display='flex'
									alignItems='center'
									justifyContent='center'
									borderRadius={15}
									border='2px solid #e5e5e5'
									boxShadow='0 5px 7.5px 0 rgb(0 0 0 / 5%)'
									bgcolor='white'
									mr={3}
									height={48}>
									<Typography color='#555' fontWeight={700}>
										Empresarial
									</Typography>
								</Box>
							</Grid>

							{benefits.map((item, i) => (
								<>
									<Grid
										display={{ xs: 'none', md: 'block' }}
										md={6}
										sx={{ pt: '0!important' }}
										item>
										<Box
											display='flex'
											alignItems='center'
											justifyContent='start'
											height={64}
											py={1}>
											<Typography
												color='#777'
												fontWeight={500}
												fontSize={15}
												pl={2}>
												{item.benefit}
											</Typography>
										</Box>
									</Grid>
									<Grid
										className='personal-cell'
										xs={6}
										md={3}
										sx={{ pt: '0!important' }}
										item>
										<Box
											display='flex'
											alignItems='center'
											justifyContent='center'
											py={1.5}
											pr={3}
											height={56}>
											{typeof item.personal === 'boolean' &&
												item.personal === true && (
													<CheckCircleOutlineIcon
														sx={{ color: '#3655a588', fontSize: 32 }}
													/>
												)}
											{typeof item.personal === 'string' && (
												<Typography
													textAlign='center'
													dangerouslySetInnerHTML={{
														__html: item.personal,
													}}
												/>
											)}
										</Box>
									</Grid>
									<Grid
										className='business-cell'
										xs={6}
										md={3}
										sx={{
											pt: '0!important',
											backgroundColor: '#325ac317',
											borderBottomRightRadius:
												benefits.length === i + 1 ? 8 : 0,
											borderBottomLeftRadius: benefits.length === i + 1 ? 8 : 0,
										}}
										item>
										<Box
											display='flex'
											alignItems='center'
											justifyContent='center'
											py={1.5}
											pr={3}
											height={56}>
											{typeof item.business === 'boolean' &&
												item.business === true && (
													<CheckCircleOutlineIcon
														sx={{ color: '#3655a588', fontSize: 32 }}
													/>
												)}
											{typeof item.business === 'string' && (
												<Typography
													textAlign='center'
													dangerouslySetInnerHTML={{
														__html: item.business,
													}}
												/>
											)}
										</Box>
									</Grid>
								</>
							))}
						</Grid>

						<Box mt={6} sx={{ position: 'relative', zIndex: 2 }}>
							<Typography textAlign='center' fontSize={15}>
								Al iniciar tu sesión los Precios Deals los encontrarás ya
								aplicados en la ficha del producto.
							</Typography>
							<Typography textAlign='center' fontWeight={600} fontSize={18}>
								Totalmente gratuito solo ¡Regístrate y añade tu RFC!
							</Typography>

							<Box display='flex' justifyContent='center' mt={4}>
								<Button
									variant='contained'
									color='secondary'
									sx={{
										color: 'white',
										height: 40,
										transition: 'all 0.4s',
										background: 'linear-gradient(to right,#ED8F03,#FFB75E)',
										borderRadius: 2,
										px: 4,
										gap: 1,
										fontWeight: 600,

										'&:hover': {
											gap: 2,
										},
									}}>
									Registrarme <ArrowRightAltIcon />
								</Button>
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>

			<Box
				py={5}
				sx={{
					background:
						'linear-gradient(to top, rgba(140, 164, 255, 0.14901960784313725), rgba(251, 251, 251, 0.3803921568627451))',
				}}>
				<Box pb={10} position='relative'>
					<Container>
						<Typography
							component='h1'
							variant='h1'
							fontSize={32}
							fontWeight={700}
							textAlign='center'
							gutterBottom>
							Envío Gratis para empresas**
						</Typography>
						<Typography variant='body2' textAlign='center' color='#777'>
							Sólo Ciudad de México, excepto papel
						</Typography>

						<Grid spacing={4} sx={{ pt: 5, pb: 15, mt: 8 }} container>
							<Grid xs={12} md item>
								<Box display='flex' gap={4}>
									<ReceiptLongOutlinedIcon
										sx={{ color: '#3655a5', fontSize: 64 }}
									/>

									<Box>
										<Typography
											component='h4'
											variant='h4'
											fontSize={24}
											fontWeight={700}>
											Continuidad de Trámites
										</Typography>

										<Typography
											component='h4'
											variant='h4'
											fontSize={24}
											fontWeight={300}
											color='#909090'
											gutterBottom>
											Garantías y Devoluciones
										</Typography>
									</Box>
								</Box>
							</Grid>

							<Divider orientation='vertical' flexItem />

							<Grid xs={12} md item>
								<Box display='flex' gap={4}>
									<CheckCircleOutlineOutlinedIcon
										sx={{ color: '#3655a5', fontSize: 64 }}
									/>
									<Box>
										<Typography
											component='h4'
											variant='h4'
											fontSize={24}
											fontWeight={700}>
											Escoge tu RFC
										</Typography>

										<Typography
											component='h4'
											variant='h4'
											fontSize={24}
											fontWeight={300}
											color='#909090'
											gutterBottom>
											al momento de tu compra
										</Typography>
									</Box>
								</Box>
							</Grid>
						</Grid>

						<Box
							zIndex={2}
							borderRadius={2}
							component='iframe'
							width='100%'
							height={500}
							src='https://www.youtube.com/embed/ki4BvOAHsG0'
							title='YouTube video player'
							frameBorder='0'
							sx={{
								mb: -50,
							}}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</Container>
				</Box>
			</Box>

			<Box pt={40} pb={6}>
				<Typography
					component='h1'
					variant='h1'
					fontSize={32}
					fontWeight={700}
					textAlign='center'
					gutterBottom>
					Notarás los cambios{' '}
					<CircleIcon sx={{ color: '#f1861c', verticalAlign: 'middle' }} />
				</Typography>
				<Typography
					variant='body2'
					textAlign='center'
					fontSize={18}
					fontWeight={500}
					color='#333'>
					Recuerda que al registarte como empresa y añadiendo tu RFC ya eres
					miembro.
				</Typography>
			</Box>

			<Box
				sx={{
					background:
						'linear-gradient(to top, rgba(140, 164, 255, 0.14901960784313725), rgba(251, 251, 251, 0.3803921568627451))',
					backgroundColor: '#f8f8f8',
				}}
				py={10}>
				<Box mb={10}>
					<Typography
						variant='h3'
						fontSize={28}
						fontWeight={500}
						textAlign='center'
						gutterBottom>
						Términos y condiciones
					</Typography>
					<Typography variant='body2' textAlign='center'>
						Los siguientes términos y condiciones regulan el servicio a todos
						aquellos que tienen los beneficios.
					</Typography>

					<Container sx={{ mt: 10, mb: 5, px: { xs: 1, md: 6 } }} maxWidth='lg'>
						<Box
							border='1px solid #f3f3f3'
							bgcolor='white'
							py={3}
							px={{ xs: 2, md: 6 }}
							borderRadius={4}>
							<Accordion elevation={0}>
								<AccordionSummary
									expandIcon={<AddIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'>
									<Typography fontWeight={500} color='#333'>
										Sobre el Envío Gratis
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant='body2' textAlign='justify' mb={4}>
										- El envío gratis sin mínimo de compra en CDMX puede cambiar
										en caso de que un cliente haga mal uso de este beneficio.
									</Typography>
									<Typography variant='body2' textAlign='justify'>
										- Si un cliente abusa solicitudes de pedidos menores a
										$1,000MXN se dará de baja este beneficio. El abuso es
										considerado a más de 15 pedidos mensuales.
									</Typography>
								</AccordionDetails>
							</Accordion>

							<Accordion
								elevation={0}
								sx={{ '&:before': { opacity: '1!important' } }}>
								<AccordionSummary
									expandIcon={<AddIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'>
									<Typography fontWeight={500} color='#333'>
										Sobre el Envío Gratis
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant='body2' textAlign='justify' mb={4}>
										- Los precios preferenciales deberán de ser solicitados al
										ejecutivo y estos dependerán del nivel de compra.
									</Typography>
									<Typography variant='body2' textAlign='justify' mb={4}>
										- Los miembros de PedidosPro, tendrán una distinción en el
										color de la página a la hora de hacer el Log In, en caso de
										que la página no cambie de color, el cliente deberá de
										contactar a su ejecutivo para que aplique la membresía.
									</Typography>
									<Typography variant='body2' textAlign='justify'>
										- Agilidad en trámites serán en Garantías, Reembolsos,
										Devoluciones y Refacturaciones
									</Typography>
								</AccordionDetails>
							</Accordion>

							<Accordion
								elevation={0}
								sx={{ '&:before': { opacity: '1!important' } }}>
								<AccordionSummary
									expandIcon={<AddIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'>
									<Typography fontWeight={500} color='#333'>
										Forma de Pagos y Métodos de Envío
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant='body2' textAlign='justify' mb={4}>
										- La penalización por no llegar a tiempo en servicio express
										u horario pactado, será el reembolso del costo dichos
										servicios, siempre y cuando el cliente haya pagado el pedido
										en no más de 10 minutos después de realizar la compra. El
										servicio de envío retornado serán un saldo a favor que el
										cliente podrá usar en su cuenta, este saldo a favor se
										deberá de solicitar a su ejecutivo de ventas en el pedido
										que el cliente desee
									</Typography>
									<Typography variant='body2' textAlign='justify' mb={4}>
										- Para pedidos de Paypal, ya se podrán entregar con ruta
										local, por lo cual, el tiempo de entrega será mucho más
										rápido.
									</Typography>
									<Typography variant='body2' textAlign='justify'>
										- El servicio express y horario pactado el costo será de 35
										pesos a contrario de los 45 pesos que se cobra a los no
										miembros.
									</Typography>
								</AccordionDetails>
							</Accordion>
						</Box>
					</Container>
				</Box>

				<Container maxWidth='lg'>
					<Divider
						sx={{ borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.05)', my: 5 }}
					/>

					<Typography variant='h6' fontSize={15} color='#333' mb={2}>
						Equipo de computo y oficina para tu empresa al mejor precio
					</Typography>
					<Typography variant='body2' fontSize={13} textAlign='justify' mb={2}>
						No siempre es fácil encontrar los mejores{' '}
						<Link underline='none' href='https://pedidos.com/' target='_blank'>
							proveedores de equipo de computo
						</Link>{' '}
						que ofrezcan el mejor equipo de oficina para empresas. Es importante
						buscar al mejor y que de el mejor precio, sobre todo a largo plazo.
						Los equipos de cómputo están siempre en constante actualización y es
						crucial estar a la cabeza de los mejores y más nuevos equipos para
						asegurar el mayor rendimiento.
					</Typography>
					<Typography variant='body2' fontSize={13} textAlign='justify' mb={2}>
						Hoy en día se busca como empresa obtener los mejores precios y
						ofertas al momento de comprar el equipo de oficina. El trabajo ya
						resulta multidisciplinario y a veces incluso híbrido, por lo que no
						siempre se hace directamente en la oficina. Para cada tipo de
						trabajo se requiere algo diferente y es importante encontrarlo en el
						mismo lugar.
					</Typography>

					<Typography variant='h6' fontSize={15} color='#333' mb={2}>
						Pedidos.com: tu aliado en tecnología para tu oficina.
					</Typography>
					<Typography variant='body2' fontSize={13} textAlign='justify' mb={2}>
						Ya sea para una oficina grande, pequeña o simplemente un espacio de
						trabajo individual, en Pedidos.com se puede encontrar el mejor
						equipo de oficina para empresas y para cualquier tipo de trabajo. Ya
						sea que se requiera una nueva oficina o actualizar el equipo que se
						tiene para un trabajo híbrido. De los proveedores de equipo de
						cómputo es el mejor, sobre todo por los beneficios que se obtienen
						al registrar su RFC.
					</Typography>
					<Typography variant='body2' fontSize={13} textAlign='justify' mb={2}>
						Al registrar el RFC empresarial en la página de Pedidos.com se
						obtienen los mejores precios, además de excelentes beneficios. Se
						puede obtener hasta un 30% más barato el equipo de oficina para
						empresas, con envíos asegurados y atención personalizada con un
						ejecutivo asignado. Las entregas son con horarios programados y lo
						más rápido posible, además de contar con descuentos en Envío
						Express, en los horarios que sean más convenientes. También se puede
						hacer el pago contra entrega si se prefiere en montos de hasta
						$50,000 MXN, y muchos envíos gratis.
					</Typography>
					<Typography variant='body2' fontSize={13} textAlign='justify' mb={2}>
						Es importante recalcar la importancia del servicio y la atención al
						cliente en Pedidos.com. se busca satisfacer las necesidades de cada
						tipo de trabajo, que pueden ser muy diferentes para cada empresa. Es
						por lo mismo que el servicio es personalizado al cien por ciento y
						con la mejor experiencia de compra para tener exactamente lo que se
						necesita y se está buscando.
					</Typography>

					<Typography variant='h6' fontSize={15} color='#333' mb={2}>
						El mejor equipo de oficina para empresas
					</Typography>
					<Typography variant='body2' fontSize={13} textAlign='justify' mb={2}>
						Al armar una nueva oficina o actualizar la que se tiene,
						primeramente es importante entender si se tendrá una modalidad de
						trabajo híbrido. Muchas veces será diferente para cada trabajador, y
						es importante personalizar cada estación de trabajo con lo que se
						necesitará. En el caso de una empresa muy grande, hay que encontrar
						los proveedores de equipo de computo con las mejores{' '}
						<Link
							underline='none'
							href='https://pedidos.com/categorias/tecnologia/computo/laptops.asp'
							target='_blank'>
							laptops baratas
						</Link>{' '}
						que se ajusten al bolsillo de cada empresa. Si la persona no
						requiere hacer trabajo fuera de su espacio de trabajo, se puede
						entonces considerar{' '}
						<Link
							underline='none'
							href='https://pedidos.com/busquedas.asp?/TECNOLOGIA/COMPUTO/DESKTOPS'
							target='_blank'>
							desktops para oficina
						</Link>{' '}
						que sean más adecuadas a su trabajo.
					</Typography>
					<Typography variant='body2' fontSize={13} textAlign='justify' mb={2}>
						Cuando se hace trabajo fuera de la oficina o algunos días se trabaja
						en casa, lo mejor es una laptop que se pueda transportar fácilmente.
						Se tienen laptops con los mejores precios y de todos los
						requerimientos técnicos, desde espacio en disco duro y los mejores
						procesadores para cualquier tipo de trabajo, incluso suficiente para
						arquitectos, diseñadores, e ingenieros con los mejores procesadores.
					</Typography>
					<Typography variant='body2' fontSize={13} textAlign='justify' mb={2}>
						Para completar la estación de trabajo en el caso de trabajar en casa
						y en la oficina, no puede faltar un monitorio y accesorios. Los{' '}
						<Link
							underline='none'
							href='https://pedidos.com/busquedas.asp?/TECNOLOGIA/COMPUTO/MONITORES'
							target='_blank'>
							monitores para PC
						</Link>{' '}
						tienen mucha utilidad para cualquier trabajo. Ya sea para tener una
						pantalla más grande en caso de tener una laptop muy pequeña, o
						simplemente para trabajar sobre dos monitores. Desde gigantescas
						hojas de cálculo, más espacio para planos arquitectónicos, o
						simplemente mejor visualización del espacio de trabajo digital, un
						monitor es siempre una excelente adición al espacio de trabajo. De
						igual forma, un teclado o un ratón a veces resulta más cómodo para
						trabajar y tener una estación completa en casa y en la oficina.
					</Typography>
					<Typography variant='body2' fontSize={13} textAlign='justify' mb={2}>
						Si lo que se requiere es ahorrar espacio, la mejor opción es una
						computadora{' '}
						<Link
							underline='none'
							href='https://pedidos.com/busquedas.asp?/TECNOLOGIA/COMPUTO/ALL-IN-ONE'
							target='_blank'>
							All in One
						</Link>
						. Estos equipos de cómputo cuentan con todos los componentes
						integrados, en una sola pieza, por lo que cuenta con muchas
						ventajas. Ya que sólo se cuenta con el monitor con todo integrado,
						se reduce exponencialmente la cantidad de cables, ya que no se
						cuenta ni con bocinas ni la unidad central, y muchos de los equipos
						conectan el mouse y el teclado por medio de WiFi o Bluetooth, por lo
						que también reducen el uso de cables sobre la mesa. También tienen a
						tener diseños más elegantes y al ser como una laptop con todo en la
						misma pieza —fuera del teclado y el mouse—, gastan menos energía, ya
						que cuentan con elementos dentro de su funcionamiento que se los
						permiten.
					</Typography>

					<Typography variant='h6' fontSize={15} color='#333' mb={2}>
						La mejor{' '}
						<Link
							underline='none'
							href='https://pedidos.com/tienda-oficial-hp.asp'
							target='_blank'>
							tienda HP
						</Link>{' '}
						en México
					</Typography>
					<Typography variant='body2' fontSize={13} textAlign='justify' mb={2}>
						De los proveedores de equipo de computo de México, Pedidos.com tiene
						la mejor tienda HP en México. Además de poder contar con un asesor
						asignado al ser miembro registrando el RFC empresarial, cuenta con
						un asistente virtual para poder encontrar el equipo de oficina para
						empresas que se requiere. El asistente es muy fácil de usar y cuenta
						con preguntas muy sencillas con acompañamiento paso a paso para
						descubrir cuál es el mejor equipo para el trabajo que se realiza,
						incluso si se es estudiante.
					</Typography>
					<Typography variant='body2' fontSize={13} textAlign='justify' mb={2}>
						Además de contar con la mejor asesoría, la variedad que hay en
						precio y especificaciones es muy grande y fácil de encontrar. La
						tienda HP además tiene los mejores complementos para la oficina,
						como son las impresoras y multifuncionales. De igual forma según lo
						que se necesite para imprimir se puede contar con una multifuncional
						con la que también se puede escanear y sacar copias. Las hay a color
						o sólo en blanco y negro, además de poder elegir entre láser e
						inyección de tinta, según lo que se necesite en la oficina o en
						casa.
					</Typography>
					<Typography variant='body2' fontSize={13} textAlign='justify' mb={2}>
						Laptops (empresariales, para estudiantes, o incluso gamers), All in
						One, desktops, impresoras, multifuncionales, y accesorios son
						algunos de los elementos de equipo de oficina que se pueden
						encontrar en la tienda HP de Pedidos.com, con la mejor experiencia y
						servicio personalizado al cien por ciento.
					</Typography>
				</Container>
			</Box>
		</Layout>
	);
};

export default Empresas;
