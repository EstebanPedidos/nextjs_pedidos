import React from 'react';
import Head from 'next/head';
import {Container,Box, Grid, Typography, Divider, Button, Chip, Tooltip, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
//Components
import { Layout } from '/layout/Layout';
import Link from 'components/Link';

const planBenefits = [
	{
		label: 'Accidentes',
		description: 'Si se te cae o algo llegará a derramarse sobre él.',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/broken.svg',
	},
	{
		label: 'Cambios',
		description:
			'Sustitición de las partes + la mano de obra incluidas sin costo',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/change.svg',
	},
	{
		label: 'Daños',
		description: 'Cubrimos tu dispositivo por daños		',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/warning.svg',
	},
	{
		label: 'Reparaciones',
		description: 'Si hay fallas se hará una revisión y reparación a domicilio.',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/repair.svg',
	},
];

const devices = {
	tab1: [
		{
			label: 'Computadoras de escritorio',
			img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/compu-escritorio.svg',
		},
		{
			label: 'Laptops',
			img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/laptop.svg',
		},
		{
			label: 'Aio',
			img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/aio.svg',
		},
		{
			label: 'Servidor',
			img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/impresion.svg',
		},
		{
			label: 'Impresoras',
			img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/compu-escritorio.svg',
		},
		{
			label: 'Periféricos',
			img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/teclado.svg',
			width: '45%',
		},
	],
	tab2: [
		{
			label: 'Cómputo',
			img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/aio.svg',
		},
		{
			label: 'Tablets',
			img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/tablets.svg',
		},
		{
			label: 'Impresión',
			img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/impresion.svg',
		},
		{
			label: 'Servidor',
			img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/servidor.svg',
		},
		{
			label: 'Proyectores',
			img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/proyector.svg',
			width: '70%',
		},
	],
};

const plans = [
	{
		title: 'Contra daños',
		subtitle: 'Protecciones contra daños',
		duration: '1 año',
		description:
			'Amparan daños que sufran en forma súbita e imprevista, que hagan necesaria su reparación o reemplazo a fin de dejarlos en condiciones similares a las existentes.',
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/seguro1.png',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/seguro-1.png',
	},
	{
		title: 'Garantía extendida',
		subtitle: 'Garantía para equipos de Cómputo y eléctricos',
		duration: '1 año | 2 años',
		description:
			'Inician a partir del vencimiento de la garantía original del fabricante y hasta la vigencia de la garantía extendida adquirida los dispositivos tendrán reparación a domicilio o sustitución del producto.',
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/garantia1.png',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/planes/garantia-1.png',
	},
];

const PlanesDeProteccion = () => {
	const [selectedDeviceTab, setSelectedDeviceTab] = React.useState('tab1');

	return (
		<Layout title='Planes de Protección | Pedidos.com'>
			<Head>
				<meta name="description" content="Mantén protegido tus dispositivos tecnológicos por mucho más tiempo  con estos planes de protección que Pedidos.com ha creado planes de protección para tus dispositivos desde el momento de tu compra."/>
				<link rel="canonical" href="https://pedidos.com/soho/cliente/planes-de-proteccion"/>
			</Head>
			<Box pt={4} pb={2} position='relative'>
				<Container>
					<Box
						sx={{
							position: 'absolute',
							width: '45%',
							height: '100%',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'top right',
							backgroundSize: 'contain',
							top: 0,
							right: 0,
							zIndex: -1,
							backgroundImage:
								'url(https://pedidos.com/myfotos/pedidos-com/pagina/planes/curve.png)',
						}}
					/>
					<Box
						sx={{
							position: 'absolute',
							width: '50%',
							height: { xs: 'calc(100% - 70px)', md: 'calc(100% - 49px)' },
							backgroundRepeat: 'no-repeat',
							backgroundSize: { xs: 'contain', md: '83%' },
							backgroundPosition: 'center right',
							bottom: 0,
							right: 0,
							zIndex: 3,
							backgroundImage:
								'url(https://pedidos.com/myfotos/pedidos-com/pagina/planes/op2.png)',
						}}
					/>

					<Tooltip
						title={
							<Typography fontSize={12}>
								<Box componet='i' mr={1} className='fa-solid fa-phone' />
								5015-8100 | 01800-8138181
							</Typography>
						}
						placement='right'>
						<Chip
							label='AYUDA'
							sx={{ bgcolor: '#2b5aff', color: 'white', px: 2, mb: 4 }}
							size='small'
						/>
					</Tooltip>

					<Typography
						variant='h1'
						fontSize={{ xs: 36, md: 65 }}
						color='#232323'
						fontWeight={500}
						lineHeight={{ xs: 0.9, md: '58.5px' }}
						sx={{ width: '49%' }}
						gutterBottom>
						Protección desde su compra
					</Typography>

					<Typography sx={{ width: '50%', my: 4 }}>
						Manten protegido tus dispositivos tecnológicos con los planes
						creados exclusivamente para ti.
					</Typography>

					<Typography
						textTransform='uppercase'
						fontSize={18}
						color='#b1b1b1'
						letterSpacing='2px'
						fontWeight={500}>
						Planes de protección:
					</Typography>

					<Box
						py={1.5}
						px={4}
						display='flex'
						gap={4}
						bgcolor='white'
						boxShadow='0 4px 14px 0 #e7e7e7'
						borderRadius={30}
						width={{
							xs: '100%',
							md: '45%',
						}}
						sx={{
							transform: {
								xs: 'translateY(2.5rem)',
								md: 'translateY(2.5rem) translateX(-2rem)',
							},
						}}>
						<Link href='#beneficios' underline='none'>
							<Typography
								fontWeight={700}
								fontSize={14}
								color='#2b5aff'
								textTransform='uppercase'
								letterSpacing='2px'>
								¿Por qué?
							</Typography>
						</Link>
						<Link href='#coberturas' underline='none'>
							<Typography
								fontWeight={700}
								fontSize={14}
								color='#2b5aff'
								textTransform='uppercase'
								letterSpacing='2px'>
								Dispositivos
							</Typography>
						</Link>
						<Link href='#planes' underline='none'>
							<Typography
								fontWeight={700}
								fontSize={14}
								color='#2b5aff'
								textTransform='uppercase'
								letterSpacing='2px'>
								Planes
							</Typography>
						</Link>
					</Box>
				</Container>

				<Box
					sx={{
						position: 'absolute',
						right: '4%',
						top: '49%',
						zIndex: 3,
						backfaceVisibility: 'hidden',
						animation: 'jumping 9s ease-in-out 2s infinite alternate',
						animationDelay: '1s',
						transition: 'all .9s ease 5s',
						userSelect: 'none',
					}}>
					<img
						src='https://pedidos.com/myfotos/pedidos-com/pagina/planes/icon_1.png'
						alt='Mantén tu dispositivo siempre protegido'
					/>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						left: '50%',
						top: '1%',
						zIndex: 3,
						backfaceVisibility: 'hidden',
						animation: 'jumping2 9s ease-in-out 2s infinite alternate',
						animationDelay: '1s',
						transition: 'all .9s ease 5s',
						userSelect: 'none',
					}}>
					{' '}
					<img
						src='https://pedidos.com/myfotos/pedidos-com/pagina/planes/icon_1.png'
						alt='Mantén tu dispositivo siempre protegido'
					/>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						left: '40%',
						bottom: '10%',
						zIndex: 3,
						backfaceVisibility: 'hidden',
						animation: 'jumping4 9s ease-in-out 2s infinite alternate',
						animationDelay: '1s',
						transition: 'all .9s ease 5s',
						userSelect: 'none',
					}}>
					{' '}
					<img
						src='https://pedidos.com/myfotos/pedidos-com/pagina/planes/icon_2.png'
						alt='Mantén tu dispositivo siempre protegido'
					/>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						left: '40%',
						top: '13%',
						zIndex: 3,
						backfaceVisibility: 'hidden',
						animation: 'jumping2 9s ease-in-out 2s infinite alternate',
						animationDelay: '1s',
						transition: 'all .9s ease 5s',
						userSelect: 'none',
					}}>
					{' '}
					<img
						src='https://pedidos.com/myfotos/pedidos-com/pagina/planes/icon_7.png'
						alt='Mantén tu dispositivo siempre protegido'
					/>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						left: '68%',
						bottom: '-10%',
						zIndex: 3,
						backfaceVisibility: 'hidden',
						animation: 'jumping 9s ease-in-out 2s infinite alternate',
						animationDelay: '1s',
						transition: 'all .9s ease 5s',
						userSelect: 'none',
					}}>
					<img
						src='https://pedidos.com/myfotos/pedidos-com/pagina/planes/icon_1.png'
						alt='Mantén tu dispositivo siempre protegido'
					/>
				</Box>
			</Box>

			<Box id='beneficios' py={15} bgcolor='#f9f9ff'>
				<Container>
					<Grid spacing={4} container>
						<Grid xs={12} md={5} item>
							<Box position='relative'>
								<Box
									position='absolute'
									top={0}
									left='6rem'
									zIndex={1}
									width={200}
									height={200}
									bgcolor='#0075f6'
									borderRadius='50%'
								/>
								<Box
									component='img'
									position='relative'
									zIndex={2}
									mt={4}
									width='100%'
									src='https://pedidos.com/myfotos/pedidos-com/pagina/planes/comp.png'
									alt='Planes de protección que Pedidos.com trae para ti'
								/>
							</Box>
						</Grid>
						<Grid xs={12} md={7} item>
							<Typography
								fontSize={18}
								color='#a6a6a6'
								textTransform='uppercase'
								letterSpacing='2px'
								gutterBottom>
								Por que pensamos en ti
							</Typography>
							<Typography
								variant='h2'
								fontSize={41}
								fontWeight={700}
								color='#333'
								gutterBottom>
								Nuestros Planes
							</Typography>
							<Typography mb={6}>
								Los planes de protección se encargan de proteger cualquier
								producto de tecnología que Pedidos.com te ofrece. Estos son
								algunos de los muchos beneficios que te ofrecemos:
							</Typography>

							<Grid spacing={4} container>
								{planBenefits.map((benefit) => (
									<Grid xs={6} key={benefit.label} item>
										<Box
											component='img'
											src={benefit.img}
											width={40}
											height={40}
											mb={2.5}
										/>
										<Typography
											variant='h3'
											fontSize={24}
											fontWeight={500}
											mb={1.25}>
											{benefit.label}
										</Typography>
										<Typography>{benefit.description}</Typography>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>

					<Typography variant='body2' my={2}>
						<Box className='fa-solid fa-circle-info' /> Conoce más detalles
						sobre los planes en <strong>Términos y condiciones</strong>
					</Typography>
				</Container>
			</Box>

			<Box
				id='coberturas'
				pt={15}
				pb={5}
				sx={{
					position: 'relative',
					'&:before': {
						content: '"Tecnología"',
						position: 'absolute',
						bottom: '6rem',
						fontFamily: '"Poppins",sans-serif',
						right: '-0.1em',
						lineHeight: 0,
						fontSize: 200,
						zIndex: 0,
						opacity: 0.1,
						color: '#bdbdbd',
						fontWeight: 700,
					},
				}}>
				<Container>
					<Typography
						fontSize={18}
						color='#a6a6a6'
						textTransform='uppercase'
						letterSpacing='2px'
						gutterBottom>
						Planes de protección
					</Typography>

					<Typography fontSize='50px' fontWeight={700} color='#333'>
						Coberturas para tus dispositivos
					</Typography>

					<Typography sx={{ mb: 4 }}>
						Descúbre el plan que se adapta a tu negocio. Es fácil solo adquiere
						el plan al momento des escoger tu producto.
					</Typography>

					<Box display='flex' justifyContent='center'>
						<Button
							variant='contained'
							onClick={() => setSelectedDeviceTab('tab1')}
							sx={{
								borderRadius: '2rem',
								px: 5,
								color: '#333',
								bgcolor: 'white',
								fontWeight: selectedDeviceTab === 'tab1' ? 700 : 500,
								boxShadow: '0 4px 14px 0 #e7e7e7',

								'&:hover': {
									color: '#3655a5',
									bgcolor: 'white',
								},
							}}>
							Contra Daños
						</Button>
						<Divider
							orientation='vertical'
							variant='middle'
							sx={{ mx: 2 }}
							flexItem
						/>
						<Button
							variant='contained'
							onClick={() => setSelectedDeviceTab('tab2')}
							sx={{
								borderRadius: '2rem',
								px: 5,
								color: '#333',
								bgcolor: 'white',
								fontWeight: selectedDeviceTab === 'tab2' ? 700 : 500,
								boxShadow: '0 4px 14px 0 #e7e7e7',

								'&:hover': {
									color: '#3655a5',
									bgcolor: 'white',
								},
							}}>
							Garantía Extendida
						</Button>
					</Box>

					<Grid spacing={3} justifyContent='center' sx={{ my: 5 }} container>
						{devices[selectedDeviceTab].map((device) => (
							<Grid
								key={device.label}
								xs={6}
								md={4}
								lg={selectedDeviceTab === 'tab2' ? 2 : 3}
								item>
								<Box
									display='flex'
									flexDirection='column'
									alignItems='center'
									justifyContent='centstarter'
									px={3}
									gap={5}
									position='relative'>
									<Box
										sx={{
											width: 80,
											height: 80,
											borderRadius: '50%',
											bgcolor: '#dfe7ff',
											position: 'absolute',
											top: '.5rem',
											right: '45%',
											zIndex: -1,
										}}
									/>
									<Box
										component='img'
										width={device.width ?? 60}
										height={60}
										maxWidth='100%'
										src={device.img}
										alt={device.label}
										sx={{
											'&:after': {},
										}}
									/>
									<Typography fontSize={17} fontWeight={700} textAlign='center'>
										{device.label}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box
				id='planes'
				py={15}
				bgcolor='#f9f9ff'
				sx={{
					position: 'relative',
					'&:before': {
						content: '"Protección"',
						position: 'absolute',
						bottom: '6rem',
						fontFamily: '"Poppins",sans-serif',
						right: '-0.1em',
						lineHeight: 0,
						fontSize: 200,
						zIndex: 0,
						opacity: 0.1,
						color: '#bdbdbd',
						fontWeight: 600,
					},
				}}>
				<Container>
					<Grid spacing={4} sx={{ position: 'relative', zIndex: 1 }} container>
						<Grid xs={12} md={4} item>
							<Typography
								fontSize={18}
								color='#a6a6a6'
								textTransform='uppercase'
								letterSpacing='2px'
								gutterBottom>
								Escoge el plan
							</Typography>
							<Typography
								variant='h2'
								fontSize={41}
								fontWeight={700}
								color='#333'
								gutterBottom>
								Seguro para ti
							</Typography>
							<Typography mb={6}>
								Cuando las garantías del fabricante términan, los planes te
								extienden la protección por mucho más tiempo.
							</Typography>
						</Grid>
						<Grid xs={12} md={8} item>
							<Grid spacing={4} container>
								{plans.map((plan) => (
									<Grid key={plan.title} xs={12} sm={6} item>
										<Box
											height='32rem'
											width='100%'
											bgcolor='white'
											sx={{
												backgroundImage: `url(${plan.img})`,
												backgroundSize: 'cover',
												backgroundPosition: 'bottom',
												backgroundRepeat: 'no-repeat',
												boxShadow: '0 4px 14px 0 #e7e7e7',
												borderRadius: '5px',
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center',
												py: 4,
												px: 8,
											}}>
											<Box
												component='img'
												src={plan.icon}
												width='150px'
												mb={2}
												alt='Contra daños y accidentess'
											/>
											<Typography
												color='#707070'
												textTransform='uppercase'
												letterSpacing='2px'
												gutterBottom>
												{plan.title}
											</Typography>

											<Box
												width='100%'
												borderRadius={10}
												py={0.5}
												mb={2}
												border='1px solid #ccc'>
												<Typography
													fontSize={12}
													textAlign='center'
													color='#707070'
													textTransform='uppercase'
													letterSpacing='2px'>
													{plan.duration}
												</Typography>
											</Box>

											<Typography
												textAlign='center'
												fontSize={14}
												color='#555'
												fontWeight={700}
												mb={4}>
												{plan.subtitle}
											</Typography>

											<Typography
												textAlign='center'
												fontSize={14}
												color='#555'
												mb={4}>
												{plan.description}
											</Typography>
										</Box>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>

					<Typography
						variant='body2'
						my={2}
						sx={{ transform: { xs: 'none', md: 'translateY(-5rem)' } }}>
						<Box className='fa-solid fa-circle-info' color='#588eff' /> Consulta
						Términos y Condiciones de cada plan.
					</Typography>
				</Container>
			</Box>

			<Box py={10}>
				<Typography
					variant='body2'
					fontWeight={500}
					textAlign='center'
					gutterBottom>
					Términos y condiciones
				</Typography>
				<Typography variant='body2' textAlign='center'>
					Los siguientes términos y condiciones son correspondientes a cada plan
					y regulan el servicio de los mismos.
				</Typography>

				<Container sx={{ mt: 10, mb: 5, px: { xs: 1, md: 6 } }} maxWidth='lg'>
					<Box
						border='1px solid #f3f3f3'
						py={3}
						px={{ xs: 2, md: 6 }}
						borderRadius={4}>
						<Accordion elevation={0}>
							<AccordionSummary
								expandIcon={<AddIcon />}
								aria-controls='panel1a-content'
								id='panel1a-header'>
								<Typography fontWeight={700} color='#337ab7'>
									Protecciones contra daños
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography
									variant='body2'
									fontWeight={500}
									textAlign='center'
									gutterBottom>
									Condiciones generales
								</Typography>
								<Typography variant='body2' textAlign='justify' mb={4}>
									Contra daños y accidentess pagará la suma asegurada de acuerdo
									a las coberturas básicas y adicionales contratadas, de
									conformidad con los derechos y obligaciones entre el asegurado
									y HDI Seguros que se determinan en las siguientes condiciones
									de esta póliza.
								</Typography>

								<Box display='flex' justifyContent='center'>
									<Box
										component={Link}
										href='https://www.hdi.com.mx/wp-content/uploads/2018/03/equipo-electronico-o-electromagnetico-cgdee1215.pdf'
										underline='none'
										sx={{
											background:
												'linear-gradient(to top,#58A6FF,#4364F7,#5150F6)',
											padding: '.75em 3em',
											color: 'white',
											fontWeight: 500,
											borderRadius: '50px',
											display: 'flex',
											alignItems: 'center',
											gap: 2,
										}}>
										Ver Términos <ChevronRightIcon />
									</Box>
								</Box>
							</AccordionDetails>
						</Accordion>
						<Accordion
							elevation={0}
							sx={{ '&:before': { opacity: '1!important' } }}>
							<AccordionSummary
								expandIcon={<AddIcon />}
								aria-controls='panel2a-content'
								id='panel2a-header'>
								<Typography fontWeight={700} color='#337ab7'>
									Garantía extendida
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Box>
									<Typography
										variant='body2'
										fontWeight={500}
										textAlign='center'
										gutterBottom>
										Condiciones generales
									</Typography>
									<Typography variant='body2' textAlign='justify'>
										Garantías Extendidas Mapfre únicamente para la gama de{' '}
										<b>COMPUTO, TABLETAS Y DISPOSITIVOS RELACIONADOS</b>{' '}
										(escáner, impresora, multifuncional, plotter, proyector,
										servidor).
									</Typography>
									<Typography variant='body2' textAlign='justify'>
										El SERVICIO es a partir del vencimiento de la garantía
										original del fabricante y hasta la vigencia de la garantía
										extendida adquirida tanto para equipos de cómputo como para
										equipos electrónicos, que incluye:
									</Typography>
									<ul>
										<li>
											<Typography variant='body2'>
												Reparación del producto.
											</Typography>
										</li>
										<li>
											<Typography variant='body2'>
												Sustitución definitiva del producto.
											</Typography>
										</li>
									</ul>
									<br />
									<Box px={{ xs: 2, md: 6 }}>
										<Typography
											variant='body2'
											textTransform='uppercase'
											fontWeight={500}
											gutterBottom>
											Reparación del producto.
										</Typography>
										<Typography
											variant='body2'
											textAlign='justify'
											gutterBottom>
											En el caso de avería, desperfecto, falla eléctrica o
											electrónica, la central de llamadas designará un personal
											calificado para realizar la correspondiente revisión y
											reparación a domicilio del cliente final, dependiendo del
											tipo de fallas que presente el producto. El cliente final
											deberá prever la presencia de un adulto a la hora
											programada para la visita, en el lugar donde se encuentre
											el producto. La reparación incluye el costo de la mano de
											obra para la reparación y en su caso la sustitución de
											la(s) pieza(s) averiada(s), así como su costo. Los
											componentes mecánicos o electrónicos que se utilicen para
											la reposición de los componentes averiados serán de
											iguales o similares características a los originales.
										</Typography>
										<Typography
											variant='body2'
											textTransform='uppercase'
											fontWeight={500}
											gutterBottom>
											Sustitución definitiva del producto.
										</Typography>
										<Typography
											variant='body2'
											textAlign='justify'
											gutterBottom>
											Durante la vigencia del presente programa y por una sola
											vez, siempre y cuando el producto haya sido reparado en
											dos (2) oportunidades consecutivas por la misma falla y la
											misma se presenta una tercera vez comprobada, o en su
											caso, si a juicio del equipo especializado de MAPFRE
											Asistencia, el producto no es susceptible de ser reparado,
											MAPFRE Asistencia podrá sustituirlo por otro de iguales
											similares o superiores características y funciones de la
											misma marca. Para los casos en que el fabricante ofrezca
											tiempos de entrega superiores a los 30 días, el cliente
											final aceptará la fecha que el fabricante designe, o en su
											caso, la propuesta de cambio de marca con equipos
											existentes que tengan iguales o superiores
											características, con el fin de mantener el nivel de
											atención al cliente. EN TODOS LOS CASOS DE REEMPLAZO el
											cliente final DEBERÁ ENTREGAR EL PRODUCTO ORIGINAL a
											MAPFRE Asistencia en el momento de recibir el producto de
											reemplazo. Durante la vigencia del presente programa, en
											el supuesto que a MAPFRE Asistencia no le sea posible
											reemplazar el producto dentro de un período de trein ta
											(30) días hábiles contados a partir e la revisión del
											referido producto, de acuerdo a las condiciones
											establecidas en el ítem anterior, MAPFRE Asistencia podrá
											devolver al cliente final el 100% del valor original de
											compra del producto, sin incluir impuestos o incremento
											alguno, siempre y cuando el cliente final haga entrega del
											ticket de compra original, la tarjeta del presente
											programa, el producto y presentar una identificación
											oficial que lo acredite como titular del producto
											adquirido.
										</Typography>
										<Typography
											variant='body2'
											textTransform='uppercase'
											fontWeight={500}
											gutterBottom>
											Exclusiones generales/prestaciones no incluidas
										</Typography>
										<Typography
											variant='body2'
											textAlign='justify'
											gutterBottom>
											No es objeto de este programa y por lo tanto no habrá
											lugar a la prestación de ningún servicio en los siguientes
											casos:
										</Typography>
										<ol>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Los servicios que el cliente final haya concertado por
													su cuenta sin el previo consentimiento de MAPFRE
													Asistencia.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Los servicios adicionales que el cliente final haya
													contratado directamente con el centro de servicio bajo
													su cuenta y riesgo.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													El mantenimiento, reparación o reemplazo necesario por
													pérdida o daño que resulte de cualquier otra causa
													diferente al uso y operación normal del producto de
													acuerdo con las especificaciones del fabricante,
													incluyendo, pero no limitado el hurto, derrame de
													líquidos, exposición a condiciones climáticas,
													negligencia, accidente, mal uso, abuso, corriente
													eléctrica, reparaciones no autorizadas, instalación o
													accesorios incorrectos, daños ocasionados durante el
													transporte (exceptuando daños sufridos durante el
													traslado autorizado del producto), daños a gabinetes,
													falta del mantenimiento indicado por el fabricante,
													modificaciones indebidas al producto, vandalismo,
													plagas de animales o insectos, oxidación, polvo,
													corrosión, baterías defectuosas, derrame de baterías,
													fósforo quemado (incluye imagen con espectros),
													píxeles fundidos por causas diferentes a las
													especificadas por el fabricante, o cualquier otro
													evento externo al producto.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Los elementos de apariencia o estructurales, tales
													como la envoltura, carcasas, la caja o sus partes
													decorativas, etc.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Los artículos adicionales como accesorios,
													interruptores, adaptadores y cargadores de baterías en
													general, las líneas y cables externos, botones,
													antenas, terminales, conectores, enchufes y partes
													desechables.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Los daños causados por exposición a condiciones
													lumínicas, climáticas o ambientales, arena, golpes,
													caídas, maltratos, conexión inadecuada en general a
													tomacorrientes, adaptador, regulador, estabilizador,
													supresor de picos, a la(s) red(es) en general y/o a
													otro equipo, o por causa mayor o caso fortuito.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Los artículos que aún se encuentren cubiertos por la
													garantía del fabricante.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Condiciones preexistentes, que hubieran ocurrido antes
													de la fecha de iniciación de la vigencia de este
													programa; incluyendo la inadecuada reparación del
													fabricante en virtud de la garantía original, durante
													la vigencia de la misma y aún cuando este hecho se
													hubiese descubierto por MAPFRE Asistencia durante la
													vigencia del presente programa.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Deterioro, demérito, depreciación y/o desgaste por el
													natural o normal uso o funcionamiento del producto.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Desperfectos causados por fallas en unidades
													transformadoras o generadoras, servidores, etc.,
													colocadas en forma externa al producto, excepto cuando
													ellas hayan sido provistas directamente por el
													fabricante del producto y junto con éste.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Mantenimiento normal, limpieza, lubricación, ajuste y
													lineamiento y/o regulación.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Los problemas de transmisión o recepción en general.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Cualquier problema o defecto no cubierto por la
													garantía original y por escrito del fabricante.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Los desperfectos, daños o pérdida producidos a causa o
													como consecuencia de:
													<br />
													a. Arreglos, reparaciones, modificaciones o desarme de
													la instalación o cualquier parte del producto, por un
													técnico no autorizado por el fabricante o MAPFRE
													Asistencia, o del incumplimiento o errores al seguir
													las instrucciones del fabricante para su instalación,
													operación o mantenimiento.
													<br />
													b. Los causados por mala fe de cliente final.
													<br />
													c. Los causados por incendio, inundaciones, terremoto,
													maremoto, granizo, vientos fuertes, erupciones
													volcánicas , tempestades ciclónicas, caídas de cuerpos
													siderales y aerolitos, o cualquier otro fenómeno de la
													naturaleza de carácter catastrófico.
													<br />
													d. Los que tuviesen origen o fueran una consecuencia
													directa o indirecta de guerra, guerra civil,
													conflictos armados, sublevación, rebelión, sedición,
													actos mal intencionados de terceros, motín, huelga,
													desorden popular y otros hechos que alteren la
													seguridad interior del estado o el orden público,
													secuestro, confiscación, incautación o decomiso.
													<br />
													e. El presente programa no cubre los programas de
													aplicación así como el software de operación o
													cualquier otro software, por lo que el MAPFRE
													Asistencia no será responsable por la pérdida de datos
													o restauraciones de programas.
												</Typography>
											</li>
										</ol>
										<Typography variant='body2' fontWeight={500} gutterBottom>
											No serán cubiertos los siguientes servicios:
										</Typography>
										<ol>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Soporte a software utilizado para el control
													financiero de sistemas u operacional de la empresa,
													mismo que haya sido implementado para uso específico.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Soporte a Hardware y software conectados dentro de la
													red.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Soporte de configuración de redes LAN, servidores y
													Hubs o switches.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Soporte a productos de modelos inferiores a Pentium IV
													o equivalentes.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Soporte a productos con Sistema operativo anterior a
													Windows 2000.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Recuperación de información por mal uso, fallas en el
													hardware o por daños causados por virus o spyware.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Soporte a la instalación de programas no originales.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													La reparación de averías de la red de telefonía o de
													la red de Internet.
												</Typography>
											</li>
											<li>
												{' '}
												<Typography variant='body2' textAlign='justify'>
													Administración de servidores y su software.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													El software, materiales o accesorios que fuesen
													necesarios para solucionar alguna avería. En tal
													sentido, el cliente final deberá proporcionarlos y
													deberá contar con las autorizaciones, licencias y
													demás permisos que fuesen necesarios para su
													utilización.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Cualquier otro procedimiento al margen de los
													servicios incluidos.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Quedan excluidos los beneficios previstos en éste
													programa para todo acto practicado por el cliente
													final por acción u omisión causados por mala fe.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Adicionalmente a las exclusiones arriba mencionadas,
													no será cubierta la atención en establecimientos
													comerciales.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Respaldo de información
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Formateo de discos, en caso que el usuario lo
													solicite, deberá ser presencial, así como deberá
													quedar constancia que exime de cualquier
													responsabilidad a Pedidos.com y a MAPFRE Asistencia.
												</Typography>
											</li>
											<li>
												<Typography variant='body2' textAlign='justify'>
													Equipos de cómputo de uso profesional.
												</Typography>
											</li>
										</ol>
									</Box>
								</Box>
							</AccordionDetails>
						</Accordion>
					</Box>
				</Container>
			</Box>
		</Layout>
	);
};

export default PlanesDeProteccion;
