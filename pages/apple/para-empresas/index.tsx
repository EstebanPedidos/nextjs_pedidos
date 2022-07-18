import Head from 'next/head';
import React from 'react';
import {Container,Box, Grid, Typography, Divider, Button, TextField} from '@mui/material';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
//Components
import { Layout } from 'layout/Layout';
import Link from 'components/Link';
import AppleContentCard from 'components/AppleContentCard';
import MSIBanner from 'components/MSIBanner';

const categories = [
	{
		label: 'Mac',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/familia/mac-family1.png',
		categories: [
			{
				label: 'MacBook Air',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/macbook-air.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052039',
			},
			{
				label: 'MacBook Pro',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/macbookpro-fam.png',
				categories: [
					{
						label: 'MacBook Pro 13',
						img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/macbookpro.png',
						url: 'https://www.pedidos.com/busquedas?query=MAMB23052022',
					},
					{
						label: 'MacBook Pro 14 y 16',
						img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/macbook-pro1416.png',
						url: 'https://www.pedidos.com/busquedas?query=MAMB23052023',
					},
				],
			},
			{
				label: 'iMac',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/imac.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052038',
			},
			{
				label: 'Accesorios',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/macbook-air.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052025',
			},
		],
	},
	{
		label: 'iPad',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/familia/iPad-family.png',
		categories: [
			{
				label: 'iPad mini',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/ipad/ipad-mini.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052030',
			},
			{
				label: 'iPad',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/ipad/ipad-9.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052028',
			},
			{
				label: 'iPad Air',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/ipad/ipad-air.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052027',
			},
			{
				label: 'iPad Pro',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/ipad/ipad-pro.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052032',
			},
			{
				label: 'Accesorios',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/ipad/accesorios.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052026',
			},
		],
	},
	{
		label: 'Watch',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/familia/watch-family.png',
		categories: [
			{
				label: 'Apple Watch Series 7',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/watch/apple-watch-series-7.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052035',
			},
			{
				label: 'Apple Watch Series 3',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/watch/apple-watch-series-3.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052033',
			},
			{
				label: 'Ver todo',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/watch/apple-watch-series-6.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052034',
			},
		],
	},
	{
		label: 'Audio y más',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/familia/HomePod-family1.png',
		categories: [
			{
				label: 'AirPods 2da generación',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/airpods/airpods-2.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052035',
			},
			{
				label: 'AirPods 3da generación',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/airpods/airpods-3.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052033',
			},
			{
				label: 'AirPods Pro',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/airpods/airpods-pro.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052034',
			},
			{
				label: 'AirPods Max',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/airpods/airpods-max.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052035',
			},
			{
				label: 'Apple TV',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/apple-home/appleTV-4k.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052033',
			},
			{
				label: 'HomePod mini',
				img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/productos/apple-home/homepod.png',
				url: 'https://www.pedidos.com/busquedas?query=MAMB23052034',
			},
		],
	},
];

const cards = [
	{
		title: 'Dispositivos diseñados para ser seguros',
		description:
			'Los productos Apple están diseñados para ser sencillos, intuitivos, y versátiles, pero también seguros. Ofrecen un sistema operativo con funcionalidades de seguridad integradas, mantienen la información corporativa encriptada y permiten que puedas decidir qué información suministras o no a las Apps que instalas. Además, Touch ID y Face ID protegen tus dispositivos, tus secretos comerciales y la información de tus clientes.',
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/beneficios/icon-dispositivo.png',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/beneficios/dispositivos.png',
	},
	{
		title: 'Compatibles con las aplicaciones que ya usas',
		description:
			'Compatibles al salir de la caja con servicios empresariales centrales como Exchange, redes Cisco, sistemas de SAP y Salesforce. Trabajan a la perfección con aplicaciones de uso corporativo como Office 365, la suite de Office y G-Suite.',
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/beneficios/icon-compatibility.png',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/beneficios/compatibilidad.png',
	},
	{
		title: 'Empleados más productivos y más felices',
		description:
			'4 de cada 5 empleados elegirían Apple si tuvieran la opción, según una encuesta realizada por JAMF a 580 empresas a nivel global.1 Así mismo, en un estudio reciente de Forrester Consulting, se determinó una mejora de 20% en la retención de los empleados, 5% de incremento en venta y 48 horas de mejora en la productividad en empresas que implementaron Mac.',
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/beneficios/icon-productivity.png',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/beneficios/employers.png',
	},
	{
		title: 'El mejor costo-beneficio, una decisión inteligente',
		description:
			'El precio de compra es un pequeño porcentaje del costo total de propiedad de los dispositivos. Los productos de Apple tienen un costo total más bajo durante el ciclo de vida, con un Hardware más robusto y con mayor valor residual, un menor costo de soporte y opciones de financiamiento flexibles. IBM al implementarlos, descubrió que las PC son 3 veces más costosas que tener Mac, ahorrando entre USD 273 y USD 543 por Mac en comparación con una PC durante una vida útil de cuatro años.',
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/beneficios/icon-smart.png',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/apple-ios3.png',
	},
];

const options = [
	{
		icon: HandymanOutlinedIcon,
		title: '<span>Soporte</span> Técnico<span>.</span>',
		description: 'Encontraremos la mejor solución para tus productos Apple',
	},
	{
		icon: SupportAgentOutlinedIcon,
		title: '<span>Recibe</span> Asesoramiento<span>.</span>',
		description:
			'Obtén un plan personalizado y descubre por que Apple es ideal para tu negocio.',
	},
	{
		icon: InventoryIcon,
		title: '<span>Cotiza</span> y compra Apple<span>.</span>',
		description:
			'Revisa con nuestro equipo especializado de Empresas sobre costos, crédito y financiamiento.',
	},
];

const shipping = [
	{
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/entregas/pickup.png',
		label: 'Pick UP Center',
	},
	{
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/entregas/p-entrega.png',
		label: 'Entrega Programada',
	},
	{
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/entregas/p-recibe.png',
		label: 'Paga al Recibir',
	},
	{
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/apple/entregas/express.png',
		label: 'Entregas Express',
	},
];

const TabButton = (props) => {
	const { data, selectPath, selected, opaque } = props;

	return (
		<Box
			component={data.url ? Link : 'div'}
			onClick={data.url ? undefined : selectPath}
			href={data.url ? data.url : undefined}
			target={data.url ? '_blank' : undefined}
			underline={data.url ? 'none' : undefined}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'end',
				pb: 1.25,
				height: '100%',
				cursor: 'pointer',
				borderRadius: 2,
				boxShadow: '0 5px 16px 0 rgb(51 51 51 / 7%)',
				border: '1px solid',
				borderColor: selected ? '#3655a533' : 'transparent',
				opacity: opaque ? 1 : selected ? 1 : 0.7,

				'&:hover': {
					borderColor: '#3655a533',
				},
			}}>
			<Box
				component='img'
				src={data.img}
				sx={{
					maxWidth: '100%',
					width: '100%',
					p: '10px',
				}}
			/>

			<Typography
				fontSize={18}
				fontWeight={500}
				color='#3c4043'
				textAlign='center'>
				{data.label}
			</Typography>
		</Box>
	);
};

const AppleParaEmpresas = () => {
	const [selectedPath, setSelectedPath] = React.useState([]);

	const [name, setName] = React.useState(null);
	const [email, setEmail] = React.useState(null);
	const [phone, setPhone] = React.useState(null);
	const [company, setCompany] = React.useState(null);

	const onSubmit = () => {};

	return (
		<Layout title='Apple para empresas | Pedidos.com'>
			<Head>
				<meta name="description" content=""/>
				<link rel="canonical" href="https://pedidos.com/apple/para-empresas"/>
			</Head>
			<Container maxWidth='xl'>
				<Box
					component='img'
					src='https://pedidos.com/myfotos/pedidos-com/pagina/apple/mainslide/apple-business.png'
					maxWidth='100%'
				/>
			</Container>

			<Box py={5} bgcolor='#3655a5'>
				<Container maxWidth='lg'>
					<Box display='flex'>
						<Typography color='white'>
							Obtén ayuda para elegir los servicios, accesorios y productos
							Apple que mejor se ajusten a las necesidades de tu empresa,
							nuestros expertos en Apple están listos para encontrar contigo la
							solución perfecta además de brindarte el soporte necesario para
							que sólo te ocupes de tu empresa.
						</Typography>

						<Box px={5}>
							<Link
								href='https://api.whatsapp.com/send?phone=5215610348533&text=Hola,%20me%20interesa%20conocer%20sobre%20Apple%20para%20mi%20empresa%20'
								underline='none'>
								<Button
									variant='outlined'
									sx={{
										borderColor: 'white',
										color: 'white',
										p: '20px 40px',
										fontSize: 16,
										height: '64px',
										borderRadius: 2,

										'&:hover': {
											borderColor: 'white',
										},
									}}>
									Comenzar
								</Button>
							</Link>
						</Box>
					</Box>
				</Container>
			</Box>

			<Box pt={20} pb={10}>
				<Container maxWidth='lg'>
					<Typography variant='h3' fontSize={40} fontWeight={700} gutterBottom>
						Encuentra todo lo que Apple ofrece para tu empresa
					</Typography>
					<Typography fontSize={24} fontWeight={500}>
						Busca por producto Apple
					</Typography>
				</Container>

				<Divider sx={{ mx: 5, my: 5, borderBottom: '2px solid #0000000d' }} />

				<Container maxWidth='lg'>
					<Grid spacing={4} container>
						{categories.map((cat, i) => (
							<Grid key={cat.label} xs={6} md={3} item>
								<TabButton
									data={cat}
									selectPath={() => setSelectedPath([i])}
									selected={selectedPath[0] === i}
								/>
							</Grid>
						))}
					</Grid>
				</Container>

				<Divider sx={{ mx: 5, my: 5, borderBottom: '2px solid #0000000d' }} />

				<Container maxWidth='lg'>
					<Grid spacing={4} justifyContent='center' container>
						{categories[selectedPath[0]]?.categories?.map((cat, i) => (
							<Grid key={cat.label} xs={6} md={2} item>
								<TabButton
									data={cat}
									selectPath={() => setSelectedPath([selectedPath[0], i])}
									selected={selectedPath[1] === i}
									opaque
								/>
							</Grid>
						))}
					</Grid>
				</Container>

				<Container maxWidth='lg' sx={{ mt: 2 }}>
					<Grid spacing={4} justifyContent='center' container>
						{categories[selectedPath[0]]?.categories[
							selectedPath[1]
						]?.categories?.map((cat, i) => (
							<Grid key={cat.label} xs={6} md={2} item>
								<TabButton
									data={cat}
									selectPath={() =>
										setSelectedPath([selectedPath[0], selectedPath[1], i])
									}
									selected={selectedPath[2] === i}
									opaque
								/>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box
				py={10}
				sx={{
					backgroundImage: 'linear-gradient(to bottom,#fafafb,#f6f7f9)',
				}}>
				<Container maxWidth='lg'>
					<Grid spacing={4} container>
						<Grid xs={12} md={6} item>
							<Box
								component='img'
								src='https://pedidos.com/myfotos/pedidos-com/pagina/apple/productivity.png'
								width='100%'
								p={4}
							/>
						</Grid>
						<Grid xs={12} md={6} item>
							<Box
								height='100%'
								display='flex'
								justifyContent='center'
								flexDirection='column'>
								<Typography
									fontSize={40}
									fontWeight={700}
									color='#333'
									gutterBottom>
									Productividad
								</Typography>
								<Typography fontSize={32}>
									El primer paso para mejorar la productividad en cualquier
									empresa es elegir los productos correctos.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box py={8}>
				<Container maxWidth='lg'>
					<Typography
						fontSize={40}
						fontWeight={700}
						color='#333'
						mb={15}
						lineHeight={1.2}>
						Los dispositivos Apple funcionan en conjunto para lograr aún más
						eficiencia.
					</Typography>

					{cards.map((card, i) => (
						<Box key={i} mb={4}>
							<AppleContentCard
								title={card.title}
								description={card.description}
								img={card.img}
								icon={card.icon}
								inverse={(i + 1) % 2 === 0}
							/>
						</Box>
					))}

					<Typography
						fontSize={40}
						fontWeight={700}
						color='#333'
						mt={15}
						textAlign='center'
						lineHeight={1.2}>
						Tus tareas sin dificultad y colaborar con tu equipo como nunca
						antes.
					</Typography>
				</Container>
			</Box>

			<Box>
				<Container maxWidth='lg'>
					<Grid spacing={10} container>
						<Grid xs={12} md={6} item>
							<Box
								sx={{
									p: 5,
									background: 'linear-gradient(to bottom,#fafafb,#f6f7f9)',
								}}>
								<Typography
									fontSize={40}
									fontWeight={700}
									color='#333'
									textAlign='center'
									lineHeight={1.2}
									gutterBottom>
									iPad OS | Mac OS
								</Typography>
								<Typography fontSize={32} color='#333' textAlign='center'>
									Sus funcionalidades te permitirán hacer grandes cosas sin gran
									esfuerzo.
								</Typography>
							</Box>
						</Grid>
						<Grid xs={12} md={6} item>
							<Box
								component='img'
								src='https://pedidos.com/myfotos/pedidos-com/pagina/apple/beneficios/iPad-family.png'
								width='100%'
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box
				py={10}
				sx={{
					background: 'linear-gradient(to bottom,#fafafb,#f6f7f9)',
				}}>
				<Container maxWidth='lg'>
					<Typography
						fontSize={40}
						fontWeight={700}
						color='#333'
						mb={15}
						lineHeight={1.2}>
						¿Necesitas ayuda? Conoce nuestras opciones:
					</Typography>

					<Grid spacing={4} container>
						<Grid xs={12} md={6} item>
							<Box bgcolor='white' pt={5} borderRadius={2} overflow='hidden'>
								<Typography
									textAlign='center'
									fontSize={32}
									fontWeight={500}
									mx={8}
									sx={{
										color: '#333',

										'& > span': {
											color: '#3655a5',
										},
									}}>
									<span>Elige</span> el tipo de soporte según{' '}
									<span>lo que necesites</span>.
								</Typography>
								<Box
									component='img'
									display='block'
									src='https://pedidos.com/myfotos/pedidos-com/pagina/apple/apple-help.png'
									width='100%'
								/>
							</Box>
						</Grid>

						<Grid xs={12} md={6} item>
							<Box pt={4} display='flex' flexDirection='column' gap={3}>
								{options.map((option) => (
									<Box key={option.title} display='flex'>
										<Box
											display='flex'
											gap={5}
											bgcolor='white'
											width='100%'
											borderRadius={2}
											p={3}
											sx={{
												transition: '.5s',

												'&:hover': {
													transform: 'translateY(-2px)',
													boxShadow: '0 8px 16px 0 rgb(51 51 51 / 8%)',
												},
											}}>
											<Box
												sx={{
													background:
														'linear-gradient(167.19deg, #365CBC 13.02%, #12285F 100.58%)',
													borderRadius: 2,
													boxShadow: '5px 7px 16px 0px #1d377b6b',
													p: 2,
													height: 90,
													width: 90,
												}}>
												<Box
													component={option.icon}
													sx={{ fontSize: '56px!important', color: 'white' }}
												/>
											</Box>

											<Box>
												<Typography
													sx={{
														fontWeight: 700,
														fontSize: 24,
														color: '#333',

														'& > span': {
															color: '#3655a5',
														},
													}}
													dangerouslySetInnerHTML={{
														__html: option.title,
													}}
													gutterBottom
												/>
												<Typography>{option.description}</Typography>
											</Box>
										</Box>
									</Box>
								))}
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box py={10}>
				<Container>
					<MSIBanner />
				</Container>
			</Box>

			<Box
				py={8}
				sx={{
					background: 'linear-gradient(to bottom,#fafafb,#f6f7f9)',
				}}>
				<Container maxWidth='lg'>
					<Typography
						fontSize={40}
						fontWeight={700}
						color='#333'
						lineHeight={1.2}
						gutterBottom>
						El trabajo en conjunto es mejor
					</Typography>
					<Typography fontSize={32} fontWeight={500} color='#333'>
						Los dispositivos Apple funcionan en conjunto para lograr aún más
						eficiencia.
					</Typography>
				</Container>
			</Box>

			<Box py={8}>
				<Container maxWidth='lg'>
					<Typography
						fontSize={40}
						fontWeight={700}
						color='#333'
						lineHeight={1.2}
						mb={10}>
						Entregas
					</Typography>

					<Grid spacing={4} container>
						{shipping.map((ship) => (
							<Grid xs={6} md={3} key={ship.label} item>
								<Box
									display='flex'
									alignItems='center'
									justifyContent='center'
									flexDirection='column'
									gap={4}>
									<Box component='img' src={ship.icon} width={64} />
									<Typography fontWeight={500}>{ship.label}</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box py={10} bgcolor='#3655a5'>
				<Container>
					<Grid spacing={4} container>
						<Grid xs={12} md={6} item>
							<Typography color='white' fontSize={32} fontWeight={700} mb={3}>
								Cuéntanos sobre ti y tu empresa nuestro equipo se comunicará
								contigo.
							</Typography>
							<Typography color='white' fontSize={24}>
								También puedes escribirnos a <br />
								apple@pedidos.com.mx
							</Typography>
						</Grid>
						<Grid xs={12} md={6} item>
							<Box
								component='form'
								display='flex'
								flexDirection='column'
								gap={1.5}
								onSubmit={onSubmit}>
								<TextField
									label='Nombre'
									variant='filled'
									value={name}
									onChange={(event) => setName(event.target.value)}
									size='small'
									sx={{ border: '0!important' }}
									InputProps={{
										sx: {
											borderRadius: 16,
											bgcolor: 'white!important',
											border: '0!important',

											'&::before, &::after': {
												border: '0!important',
											},
										},
									}}
									required
								/>
								<TextField
									label='Correo'
									variant='filled'
									type='email'
									value={email}
									onChange={(event) => setEmail(event.target.value)}
									size='small'
									InputProps={{
										sx: {
											borderRadius: 16,
											bgcolor: 'white!important',
											border: '0!important',

											'&::before, &::after': {
												border: '0!important',
											},
										},
									}}
									required
								/>
								<TextField
									label='Teléfono'
									variant='filled'
									type='tel'
									value={phone}
									onChange={(event) => setPhone(event.target.value)}
									size='small'
									InputProps={{
										sx: {
											borderRadius: 16,
											bgcolor: 'white!important',
											border: '0!important',

											'&::before, &::after': {
												border: '0!important',
											},
										},
									}}
									required
								/>
								<TextField
									label='Empresa'
									variant='filled'
									type='text'
									value={company}
									onChange={(event) => setCompany(event.target.value)}
									size='small'
									InputProps={{
										sx: {
											borderRadius: 16,
											bgcolor: 'white!important',
											border: '0!important',

											'&::before, &::after': {
												border: '0!important',
											},
										},
									}}
									required
								/>

								<Box textAlign='center' mt={3}>
									<Button
										variant='outlined'
										type='submit'
										size='large'
										sx={{ borderColor: 'white!important', color: 'white' }}
										fullWidth>
										Solicitar
									</Button>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box py={10}>
				<Container maxWidth='lg'>
					<Typography
						textAlign='center'
						fontSize={32}
						fontWeight={500}
						gutterBottom>
						LLamános al 55 5015-8100 ó 55 5015-8100
						<br />o Contáctanos por WhatsApp
					</Typography>
					<Typography fontSize={18} textAlign='center' color='#555' mb={2}>
						Lunes a Sábado en un horario de 10:00 a 18:30, excepto días
						feriados.
					</Typography>

					<Box display='flex' justifyContent='center'>
						<Link
							underline='none'
							href='https://api.whatsapp.com/send?phone=5215562947884&text=Pedidos.com%20necesito%20ayuda'
							target='_blank'>
							<Box
								display='flex'
								justifyContent='center'
								alignItems='center'
								gap={2}
								width={290}
								px={4}
								py={3}
								borderRadius={2}
								border='1px solid #f1f1f1'
								sx={{
									transition: '.3s',

									'&:hover': {
										boxShadow: '0 8px 16px 0 rgb(51 51 51 / 8%)',
										border: '1px solid #f5f5f5',
									},
								}}>
								<Box
									component='img'
									src='https://pedidos.com/myfotos/pedidos-com/pagina/header/ayuda/whatsapp.svg'
									width={48}
								/>
								<Box>
									<Typography
										textAlign='center'
										color='#3c4043'
										fontSize={18}
										fontWeight={500}>
										WhatsApp
									</Typography>
									<Typography textAlign='center' fontWeight={500} color='#777'>
										Envía un mensaje
									</Typography>
								</Box>
							</Box>
						</Link>
					</Box>
				</Container>
			</Box>

			<Divider sx={{ mx: 5, my: 5, borderBottom: '2px solid #0000000d' }} />

			<Box py={5}>
				<Container maxWidth='xl'>
					<Grid spacing={4} container>
						<Grid xs={12} item>
							<Typography variant='h6' fontSize={15} color='#333' mb={1}>
								Pedidos.com, Apple Authorised Reseller
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								fontWeight={500}
								textAlign='justify'
								mb={1}>
								Apple es una empresa que desde mediados de los años 80´s, de la
								mano de Steve Jobs, cambió por completo el paradigma que existía
								hasta ese momento con respecto a la computación.
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Aún en la década de los 80´s las computadoras eran objetos
								prácticamente reservados a las empresas o a las universidades,
								no estaban diseñadas para ser amigables con un usuario casero.
								Por supuesto, claro que existían computadoras personales para su
								uso en un hogar, pero eran complicadas, teniendo que utilizar
								comandos específicos para realizar cualquier acción y siendo
								poco estéticas en sus interfaces. Fue justamente en 1984 cuando
								Steve Jobs presentó la Macintosh 128k, esta era una computadora
								de escritorio, pero era realmente sencillo transportarla de un
								lugar a otro gracias a su tamaño reducido, además, fue la
								primera con una pantalla completamente a color. No solamente
								eso, también fue la primera en agregar distintos tipos de
								tipografías y en general una interfaz más sencilla e intuitiva.
								Este fue el punto de inflexión y a partir de aquí las demás
								empresas de tecnología comenzaron a modificar sus productos con
								el fin de enfocarse, ahora sí, en un usuario casero, fue el
								nacimiento de las computadoras personales (PC). Durante los años
								90´s los avances continuaron, mejorando cada vez más sus equipos
								PC, fue en 1999 cuando de nuevo, Mac lo cambió todo. Justo antes
								del inicio del nuevo milenio Steve Jobs presentaba la iBook G3,
								una laptop con diseños coloridos y un tamaño muy reducido,
								además de una batería mejorada, pero lo mejor fue la
								introducción de la conexión Wi-Fi. Este tipo de tecnología ya
								existía, pero solo para dispositivos de alta especialidad como
								máquinas de la NASA, por ejemplo, no había computadoras
								personales con Wi- Fi, esta libertad de movimiento cambió de
								nuevo y para siempre la historia de la computación. Finalmente,
								en el año 2007 Apple y Steve Jobs presentó el primer iPhone, un
								teléfono celular con conexión a Wi-Fi y cámara fotográfica, pero
								lo más importante, una gran pantalla táctil carente de teclado
								físico. Hasta ese momento ya existían teléfonos celulares con
								conexión a internet y pantallas táctiles, pero estas eran
								resistivas, es decir, necesitabas utilizar un pequeño bolígrafo
								llamado stylus y ejercer una pequeña presión sobre el panel para
								que este realizara la acción que necesitabas. El primer iPhone
								cambió ahora la historia de las telecomunicaciones ya que su
								pantalla era capacitiva, es decir, solo con el toque del dedo la
								pantalla reaccionaba, sin necesidad de stylus ni de una presión
								extra.
							</Typography>
						</Grid>
						<Grid xs={12} md={4} item>
							<Typography variant='h6' fontSize={15} color='#333' mb={1}>
								MacBook Air y MacBook Pro para tu oficina
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Después de esta muy breve semblanza de la historia de Apple,
								toca hablar sobre los dispositivos actuales, todos ellos con la
								garantía de calidad que ha caracterizado a esta marca desde hace
								décadas. La familia{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS&amp;m=APPLE'
									target='_blank'>
									Mac de Apple
								</Link>{' '}
								tienen diseños minimalistas, también utilizan materiales premium
								como el aluminio, esto tiene dos razones principales de ser. La
								primera: El aluminio es uno de los elementos que pueden conducir
								y disipar más efectivamente el calor, así se evita que las
								laptops Mac sufran de sobrecalentamiento por el uso. La segunda:
								Las conexiones inalámbricas como Wi-Fi y Bluetooth son mucho más
								estables con esta clase de materiales, además, resulta más
								resistente y sobre todo, estético. La{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS&amp;m=APPLE'
									target='_blank'>
									Macbook Pro
								</Link>{' '}
								tiene el poderoso chipset M1, desarrollado por Apple, pantalla
								para ver contenido Full HD y 13 pulgadas de tamaño, siendo una
								de las más compactas de la marca. Sinónimo de potencia, la
								Macbook PRO 2021 tiene 16 GB de memoria RAM, 1 TB de memoria SSD
								y retina display de 16 pulgadas, su delgado diseño en aluminio
								permite, a pesar de su tamaño, ser sumamente portátil. En
								cualquier tipo de oficina, esta clase de computadoras atrae
								poderosamente la atención y le brindan un estilo mucho más
								moderno. Pedidos.com cuenta con un amplio catálogo en su tienda
								Apple Store, con productos completamente nuevos y originales de
								esta emblemática marca.
							</Typography>
						</Grid>
						<Grid xs={12} md={4} item>
							<Typography variant='h6' fontSize={15} color='#333' mb={1}>
								Otros productos de Apple ideales para la oficina y hogar
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Por supuesto, Apple México no solamente hace computadoras, el
								potencial de esta empresa se ha ampliado para ofrecer desde
								audífonos, celulares, tabletas hasta relojes inteligentes.
								Pedidos.com es un vendedor autorizado de la marca Apple, por
								ello podrás encontrar prácticamente todo el catálogo de esta
								marca, incluidos los últimos lanzamientos. Las{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/DESKTOPS&amp;m=APPLE'
									target='_blank'>
									iMac de escritorio
								</Link>{' '}
								son las más poderosas del mercado, destinadas a empresas
								dedicadas labores de diseño como arquitectura o ingenierías,
								pero también para artistas visuales. Las tabletas iPad son las
								mejores tabletas del mercado y también puedes adquirirlas en
								pedidos.com, el iPad clásico, mini, air y la poderosa iPad Pro,
								además de accesorios como fundas con teclado. Contar con esta
								clase de dispositivos aumenta la productividad pues puedes
								realizar un sinfín de actividades gracias a su sistema operativo
								y enviarlo directamente a tu computadora Mac, aquí radica la
								importancia de contar con el ecosistema completo de la marca.
								Mantente siempre comunicado con los Airpods, los audífonos más
								dinámicos del mercado, con cancelación de ruido activa y un
								tiempo de uso extenso gracias a sus baterías mejoradas. También
								mantén completamente monitoreado tu estado de salud con el Apple
								Watch, el complemento ideal para medir tu frecuencia cardiaca,
								tu ciclo de sueño, conectarse a tu teléfono para ver
								notificaciones y, por supuesto, poder ver la hora actual.
							</Typography>
						</Grid>
						<Grid xs={12} md={4} item>
							<Typography variant='h6' fontSize={15} color='#333' mb={1}>
								Encuentra productos Apple para tu oficina en Pedidos.com al
								mejor precio
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								textAlign='justify'
								mb={1}>
								Como puedes ver, la mejor opción para adquirir en México todos
								los productos Apple es mediante pedidos.com, desde las{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS&amp;m=APPLE'
									target='_blank'>
									MacBook Pro y MacBook Air
								</Link>{' '}
								de Apple hasta accesorios y audífonos para hacer tu experiencia
								más cómoda. Los precios de los productos son los más accesibles,
								además, podrás optar con beneficios extras como pagos a meses
								sin intereses con una gran variedad de tarjetas de crédito.
								Consigue tu siguiente{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/LAPTOPS&amp;m=APPLE'
									target='_blank'>
									computadora Apple
								</Link>
								, ya sea para uso en el hogar, oficina o ambos, estos
								dispositivos nunca te dejarán abandonado gracias a su potencia
								reconocida mundialmente. Finalmente, pero no menos importante,{' '}
								<Link
									underline='none'
									href='/busquedas?/TECNOLOGIA/COMPUTO/TABLETS&amp;m=APPLE'
									target='_blank'>
									iPad
								</Link>{' '}
								son las mejores para realizar actividades escolares y de trabajo
								de oficina, pero también para que los niños puedan tener sus
								primeros acercamientos con la tecnología. Obtén todo el
								equipamiento que podrías imaginar en un solo lugar, recibe
								directamente en casa sin cargos extras y disfruta lo mejor de la
								tecnología de Apple México en{' '}
								<Link
									underline='none'
									href='/apple/para-empresas'
									target='_blank'>
									Pedidos.com
								</Link>
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default AppleParaEmpresas;
