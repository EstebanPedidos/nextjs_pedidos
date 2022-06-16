import Head from 'next/head';
import {Box, Container, Typography, Grid, Divider, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
//components
import { Layout } from '/layout/Layout';
import ArrowsContainer from 'components/ArrowsContainer';
import AnimatedFigures from 'components/AnimatedFigures';
import NumberedList from 'components/NumberedList';
import CreditoUniclickForm from 'components/CreditoUniclickForm';

const benefits = [
	{
		label: 'Utiliza el dinero conforme a las necesidades de tu empresa.',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/ventajas-1.svg',
		color: '#4116C4',
	},
	{
		label: 'Un crédito transparente y sin letras chicas.',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/ventajas-2.svg',
		color: '#33C1FF',
	},
	{
		label: 'Tiene mayor flexibilidad y es más rapido.',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/ventajas-3.svg',
		color: '#00f7d2',
	},
];

const requeriments = [
	{
		label: 'Contar con 12 meses de operación.',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/12m.svg',
	},
	{
		label: 'Contar con tu e.Firma (Fiel)',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/firma.svg',
	},
	{
		label: 'Contar con CIEC',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/ventajas-1.svg',
	},
	{
		label: 'Ser persona moral o persona física con actividad empresarial.',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/mf.svg',
	},
];

const list = [
	{
		label: 'Completa la solicitud en línea',
		tooltip:
			'Realiza tu solicitud y obtén una autorización en línea en tan sólo 5 minutos.',
	},
	{
		label: 'Completa tu expediente',
		tooltip:
			'Se valuará tu solicitud y a la brevedad recibirás una llamada para corroborar los datos.',
	},
	{
		label: 'Firma tu contrato',
		tooltip:
			'Una ves comprobadas las credenciales y validada la solicitud, firmaremos el contrato.',
	},
	{
		label: 'Recibe el dinero para tu negocio',
		tooltip: 'Depositaremos el dinero a la cuenta bancaria de tu negocio.',
	},
];

const CustomButton = styled(Button)({
	position: "absolute",
	boxShadow: 'none',
	textTransform: 'none',
	padding: '0 80px',
	border: 0,
	height: "80px",
	fontWeight: 400,
	lineHeight: 1.5,
	color: "white",
	backgroundColor: '#33C1FF',
	fontSize: 20,
	bottom: 0,
	transform: "translateY(50%)",
	'&:hover': {
		backgroundColor: '#00b2ff',
		boxShadow: '3px 3px 9px 1px #7e93eb6b',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#00b2ff',
	},
	'&:focus': {
		boxShadow: '3px 3px 9px 1px #7e93eb6b',
	},
});

const UniclickCredito = () => {
	return (
		<Layout title='Uniclick credito para empresas | Pedidos.com'>
			<Head>
				<meta name="description" content="Uniclick credito es lo que necesitas para poder impulsar tu negocio de manera rápida. Descubre la mejor opción de acuerdo a tus necesidades."/>
				<link rel="canonical" href="https://pedidos.com/uniclick/credito"/>
			</Head>
			<Box
				pt={15}
				pb={10}
				sx={{
					bgcolor: '#F6F7F9',
					backgroundImage:
						'url(https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/triangle.svg)',
					backgroundPosition: 'bottom right',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '53%',
					position: 'relative',
				}}>
				<Box width='90%' mx='auto'>
					<Grid spacing={6} container>
						<Grid xs={12} lg={6} item>
							<Box display="flex" flexDirection="column" justifyContent="center" height="100%" width="100%">
								<Typography variant="h1" fontSize={45} fontWeight={400} color="#333" gutterBottom>
									<strong>Pedidos.com y Uniclick,</strong> La alianza ideal para impulsar tu negocio
								</Typography>
								<Typography fontSize={18} fontWeight={400} color="#333" sx={{ opacity: .6 }} lineHeight={1.929}>
									Este es tu momento de crecer, somos tus aliados de negocio. Consigue hasta 3 millones de forma rápida, sencilla y sin sorpresas.
								</Typography>
							</Box>
						</Grid>

						<Grid xs={12} lg={6} item>
							<CreditoUniclickForm />
						</Grid>
					</Grid>
				</Box>

				<Box display={{ xs: "none", lg: "block" }}>
					<CustomButton href="https://uniclick.com.mx/3104">
						Conocer más
					</CustomButton>
				</Box>
				<AnimatedFigures extended />
			</Box>

			<Box py={10}>
				<Container>
					<Typography
						variant='h3'
						fontSize={40}
						fontWeight={700}
						textAlign='center'
						color='#333'
						gutterBottom>
						Ventajas del Crédito Simple
					</Typography>

					<Typography textAlign='center' color='#333'>
						Descubre la opción que mejor se acomode a tus necesidades
					</Typography>

					<Box mt={14}>
						<Grid spacing={4} container>
							{benefits.map((benefit, i) => (
								<Grid xs={12} sm={4} key={benefit.label} item>
									<Box
										display='flex'
										flexDirection={{ sm: 'column', md: 'row' }}
										gap={2}
										px={2}
										py={{ sm: 2, md: 0 }}
										alignItems='center'
										height='100%'
										mt={{ lg: i === 1 ? 4 : 0 }}
										sx={{
											borderRadius: '5px',
											border: '1px solid #f5f5f5',
											borderTop: `5px solid ${benefit.color}`,
											boxShadow: '1px 1px 5px 0px rgb(0 0 0 / 8%)',
										}}>
										<Box
											component='img'
											src={benefit.img}
											alt={benefit.label}
											width={70}
										/>
										<Typography
											variant='body2'
											color='#333'
											textAlign={{ sm: 'center', md: 'left' }}>
											{benefit.label}
										</Typography>
									</Box>
								</Grid>
							))}
						</Grid>
					</Box>
				</Container>
			</Box>

			<ArrowsContainer>
				<Container>
					<Grid spacing={6} container>
						<Grid xs={12} md={5} item>
							<Typography
								variant='h3'
								fontSize={40}
								fontWeight={700}
								color='#333'
								gutterBottom>
								Pasos a seguir
							</Typography>

							<Divider
								sx={{
									my: 3,
									borderColor: '#eee',
									display: { xs: 'none', md: 'block' },
								}}
							/>

							<Typography
								variant='h3'
								fontSize={28}
								fontWeight={500}
								color='#333'
								gutterBottom>
								Conseguir tu crédito online con Uniclick es muy fácil
							</Typography>

							<Divider
								sx={{
									my: 3,
									borderColor: '#eee',
									display: { xs: 'none', md: 'block' },
								}}
							/>

							<Typography fontSize={18} color='#555' gutterBottom>
								Solo tienes que seguir cuatro sencillos pasos y en muy poco
								tiempo estarás disfrutando del bien solicitado.
							</Typography>
						</Grid>

						<Grid xs={12} md={7} item>
							<Box pl={{ xs: 0, md: 5 }}>
								<NumberedList items={list} />
							</Box>
						</Grid>
					</Grid>
				</Container>
				<AnimatedFigures />
			</ArrowsContainer>

			<Box py={10}>
				<Container>
					<Typography
						variant='h3'
						fontSize={40}
						fontWeight={700}
						textAlign='center'
						color='#333'>
						Requisitos del servicio
					</Typography>

					<Box mt={14}>
						<Grid spacing={4} container>
							{requeriments.map((requeriment) => (
								<Grid xs={12} sm={6} lg={3} key={requeriment.label} item>
									<Box
										display='flex'
										flexDirection='column'
										gap={4}
										padding={2}
										alignItems='center'
										height='100%'
										width='100%'
										sx={{
											borderRadius: '5px',
											border: '1px solid #f5f5f5',
											borderTop: '5px solid #000A50',
											boxShadow: '1px 1px 5px 0px rgb(0 0 0 / 8%)',
										}}>
										<Box
											component='img'
											p={1}
											src={requeriment.img}
											alt={requeriment.label}
											width={70}
											sx={{
												border: '1px solid #e4e4e4',
												borderRadius: '50%',
											}}
										/>
										<Typography textAlign='center' color='#333'>
											{requeriment.label}
										</Typography>
									</Box>
								</Grid>
							))}
						</Grid>
					</Box>
				</Container>
			</Box>
		</Layout >
	);
};

export default UniclickCredito;
