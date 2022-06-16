
import Head from 'next/head';
import {Box, Container, Typography, Grid,  Button } from '@mui/material';
import { styled } from '@mui/material/styles';
//components
import { Layout } from '/layout/Layout';
import ArrendamientoUniclickForm from 'components/ArrendamientoUniclickForm';
import Link from 'components/Link';

const benefits = [
	'<span>Rentas 100% deducibles</span><br/> de impuestos.',
	'<span>Puedes comprar, renovar o regresar el activo</span><br/> al finalizar el contrato.',
	'<span>Sin penalizaciones<span><br/> Tu decides cuando terminar de pagar.',
];

const leasingCategories = [
	{
		label: 'Electrónicos',
		description: 'Plazo a 24 meses',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/arrendamiento/electronica.png',
		background:
			'linear-gradient(to bottom,#3655a5,#344b9e,#344297,#34378f,#342d87)',
	},
	{
		label: 'Mobiliario',
		description: 'Plazo a 24 - 36 meses',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/arrendamiento/mobiliario.png',
		background:
			'linear-gradient(to bottom,#757575,#666,#575757,#494949,#3b3b3b)',
	},
];

const requirements = [
	{
		label: 'Ser persona moral o física con actividad Empresarial',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/arrendamiento/persona.png',
	},
	{
		label: '1 año mínimo de operaciones',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/arrendamiento/operacion.png',
	},
	{
		label: 'Contar con tu clave CIEC y e.firma (FIEL) del SAT',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/arrendamiento/firma.png',
	},
];

const experience = [
	{
		label: 'Reputación',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/Arrendamiento/reputacion.png',
	},
	{
		label: 'Solidez',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/arrendamiento/solidez.png',
	},
	{
		label: 'Expertise',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/arrendamiento/expertise.png',
	},
	{
		label: 'Comercial',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/arrendamiento/comercial.png',
	},
];

const CustomButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	padding: '40px 80px',
	border: 0,
	lineHeight: 1.5,
	backgroundColor: '#33C1FF',
	fontSize: 20,
	fontWeight: 400,
	borderColor: '#33C1FF',
	'&:hover': {
		backgroundColor: '#00b2ff',
		boxShadow: '3px 3px 9px 1px #7e93eb6b',
		borderColor: '#00b2ff',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#00b2ff',
		borderColor: '#00b2ff',
	},
	'&:focus': {
		boxShadow: '3px 3px 9px 1px #7e93eb6b',
	},
});

const UniclickCredito = () => {
	return (
		<Layout title='Uniclick arrendamiento, todo lo que necesitas | Pedidos.com'>
			<Head>
				<meta name="description" content="Si necesitas equipo electrónico o equipo mobiliario para tu negocio, Uniclick arrendamiento es la mejor opción para ti. Conoce todos los beneficios que puedes obtener."/>
				<link rel="canonical" href="https://pedidos.com/uniclick/arrendamiento"/>
			</Head>
			<Box pt={12} pb={8}>
				<Container maxWidth='xl'>
					<Grid container>
						<Grid xs={12} md={6} item>
							<Box
								width='100%'
								height='100%'
								display='flex'
								flexDirection='column'
								justifyContent='center'>
								<Typography
									variant='h1'
									fontWeight={700}
									fontSize={40}
									color='#333'
									sx={{
										mb: 4,
									}}
									gutterBottom>
									Arrendamiento de equipos
								</Typography>
								<Typography color='#555' fontSize={24}>
									Ya sea equipos electrónicos en un plazo de 24 meses o equipo
									mobiliario a un plazo de hasta 36 meses.¡Solicitalo desde 200
									mil hasta 2 millones!
								</Typography>
							</Box>
						</Grid>
						<Grid xs={12} md={6} item>
							<ArrendamientoUniclickForm />
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box bgcolor='#F6FAFF' py={10}>
				<Typography
					variant='h3'
					textAlign='center'
					fontSize={40}
					color='#333'
					sx={{
						mb: 10,
					}}
					fontWeight={700}>
					Beneficios de arrendamiento
				</Typography>

				<Container>
					<Grid container>
						<Grid xs={12} lg={6} item textAlign='center'>
							<img
								src='https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/arrendamiento/beneficios.png'
								dataSrc='https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/arrendamiento/beneficios.png'
								alt='Uniclick, beneficios, arrendamiento'
							/>
						</Grid>
						<Grid xs={12} lg={6} item>
							<Box py={3}>
								{benefits.map((benefit) => (
									<Typography
										key={benefit}
										sx={{
											mb: 5,

											'& > span': {
												color: '#3655a5',
												fontWeight: 500,
											},
										}}
										dangerouslySetInnerHTML={{
											__html: benefit,
										}}
									/>
								))}
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box py={10}>
				<Container>
					<Grid
						gap={{
							xs: 4,
							md: 0,
						}}
						sx={{
							boxShadow: { xs: 'none', md: '-1px 3px 16px 6px #d6d6d6' },
							borderRadius: '30px',
						}}
						container>
						{leasingCategories.map((leasing, i) => (
							<Grid xs={12} md={6} key={leasing.label} item>
								<Box
									width='100%'
									height='100%'
									py={12}
									px={7}
									display='flex'
									flexDirection='column'
									alignItems='center'
									justifyContent='center'
									sx={{
										backgroundImage: leasing.background,
										borderRadius: {
											xs: '30px',
											md: i === 0 ? '30px 0 0 30px' : '0 30px 30px 0',
										},
										boxShadow: {
											xs: '-1px 3px 16px 6px #d6d6d6',
											md: 'none',
										},
									}}>
									<Box
										component='img'
										src={leasing.img}
										alt='Electrónicos'
										mb={1}
									/>
									<Typography fontSize={40} fontWeight={800} color='white'>
										{leasing.label}
									</Typography>
									<Typography
										color='white'
										letterSpacing={4}
										textTransform='uppercase'>
										{leasing.description}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box
				py={15}
				sx={{
					backgroundImage:
						'url(https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/arrendamiento/back-requisitos.jpg)',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
				}}>
				<Typography
					variant='h3'
					textAlign='center'
					fontSize={40}
					color='#333'
					sx={{
						mb: 10,
					}}
					fontWeight={700}>
					¿Cuáles son los requisitos?
				</Typography>

				<Container>
					<Grid spacing={4} container>
						{requirements.map((requirement) => (
							<Grid xs={12} md={4} key={requirement.label} item>
								<Box
									bgcolor='white'
									width='100%'
									height='100%'
									display='flex'
									gap={2}
									flexDirection={{
										xs: 'row',
										md: 'column',
									}}
									alignItems='center'
									justifyContent={{ xs: 'start', md: 'center' }}
									sx={{
										p: 2,
										pb: 4,
										borderRadius: '5px',
										boxShadow: '1px 1px 5px 0px rgb(0 0 0 / 8%)',
									}}>
									<Box
										component='img'
										width='70px'
										mx={{ xs: 'inherit', md: 'auto' }}
										p={1}
										src={requirement.img}
										data-src={requirement.img}
									/>
									<Typography textAlign={{ xs: 'left', md: 'center' }}>
										{requirement.label}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box py={15} bgcolor='#F6FAFF'>
				<Container>
					<Typography
						variant='h3'
						textAlign='center'
						fontSize={40}
						color='#333'
						sx={{
							mb: 3,
						}}
						fontWeight={700}>
						¿Por qué Uniclick?
					</Typography>

					<Typography
						textAlign='center'
						fontSize={24}
						fontWeight={500}
						color='#555'
						mb={6}>
						Experiencia de + 25 años trabajando con PYMES, presencia y cobertura
						nacional
					</Typography>

					<Box display='flex' justifyContent='center'>
						<Link href='https://uniclick.com.mx/3104' underline='none'>
							<CustomButton size='large' variant='contained'>
								Conocer más
							</CustomButton>
						</Link>
					</Box>
				</Container>
			</Box>

			<Box py={15}>
				<Grid spacing={2} container>
					<Grid xs={12} lg={6} item>
						<Box px={4}>
							<Box
								component='img'
								maxWidth='100%'
								src='https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/arrendamiento/experiencia.jpg'
							/>
						</Box>
					</Grid>
					<Grid xs={12} lg={6} item>
						<Container maxWidth='lg'>
							<Grid xs={12} xl={6} item>
								<Grid spacing={4} container>
									{experience.map((exp) => (
										<Grid xs={6} key={exp.label} item>
											<Box
												height='200px'
												bgcolor='white'
												display='flex'
												flexDirection='column'
												alignItems='center'
												justifyContent='center'
												sx={{
													boxShadow: '1px 1px 5px 0px rgb(0 0 0 / 8%)',
													borderRadius: '5px',
												}}>
												<Box
													component='img'
													p={1}
													mb={2}
													width='70px'
													data-src={exp.img}
													alt='experiencia, solidez,arrendamiento, uniclick'
													src={exp.img}
												/>

												<Typography>{exp.label}</Typography>
											</Box>
										</Grid>
									))}
								</Grid>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</Box>
		</Layout>
	);
};

export default UniclickCredito;
