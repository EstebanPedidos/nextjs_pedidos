
import Link from 'next/link'
import Head from 'next/head';
import { Layout } from 'layout/Layout';
import Image from 'next/image';
//MUI
import {Container,Box, Grid, Paper, Typography, Button, Divider, Card, 
    CardActionArea, CardContent, CardActions,CardMedia
   } from '@mui/material';
import styles from '../styles/Home.module.css';
//Components
import MainSlideShow from 'components/home/mainSlideShow';
import PromoSlides from 'components/home/promoSlides';
import ServiceSlides from 'components/home/serviceSlides';
import Trends from 'components/home/trendSlides';
import Brands from 'components/home/Brands';
import ForBusiness from 'components/home/ForBusiness';
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import { Autoplay, Pagination, Navigation, Lazy } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {

  return (
	<Layout>	
		<Head>
			<title>Pedidos.com | Todo para tu espacio de trabajo</title>
			<meta name="description" content="Paga a Meses Sin Intereses, 18 MSI con tarjetas participantes y hasta 24 MSI con Citibanamex. Gran variedad de productos + Entregas EXPRESS CDMX." />
			<script src="https://www.paypal.com/sdk/js?currency=MXN&debug=true&components=hosted-fields,buttons&locale=es_MX&client-id=ARuJiaAFKxs8vJtK5KxLz0wHlC3Tdgz-XRbMSNwHC2GY0Ip0JIxMgxfgB6oqbGDwh8CFRhUS-vpcGfv_" data-service-stage="paypal.com" data-stage="paypal.com" data-api-stage-host="api.paypal.com" data-client-token="eyJicmFpbnRyZWUiOnsiYXV0aG9yaXphdGlvbkZpbmdlcnByaW50IjoiNjI0YmJkOTc1MjkyMDc0M2M2ZDcyNzRiNTU0MmJhN2RkMjUzMWJhNTE2YjdkMjIxZWRhNzQzOWJkMTUxZjQ2YnxtZXJjaGFudF9pZD1yd3dua3FnMnhnNTZobTJuJnB1YmxpY19rZXk9ajJmYzJqcHhkZzZ2cDg0ZiZjcmVhdGVkX2F0PTIwMjItMDQtMTlUMTM6MTE6NTIuMDM0WiZjdXN0b21lcl9pZD04Mzk0OTMiLCJ2ZXJzaW9uIjoiMy1wYXlwYWwifSwicGF5cGFsIjp7ImlkVG9rZW4iOm51bGwsImFjY2Vzc1Rva2VuIjoiQTIxQUFQbjRUNFh0V3hTR3FVODQ1SzJZMlJRenlGcVVDNURKZHoySXNaTnV2d0lSN1ZBcWdjaDBGeHF0aWtYOW9YbFlKdERBNmpiQTdQRDNoTFB5WHg3LTkwNjRDSDEwdyJ9fQ=="></script>
		</Head>
		<div className={styles.container}>
		
			<MainSlideShow />
			<Box component="div" className={styles.promoContainer}>
				<PromoSlides />
			</Box>
			<Box component="div" py={6} textAlign="center">
				<Typography variant="h4" component="h1" sx={{fontWeight:'600'}}>
					Todo para tu espacio de trabajo.
				</Typography>
			</Box>
			<Divider />
			<Box component="div" py={2} textAlign="left">
				<Typography variant="h6" component="h2" sx={{fontWeight:'600'}}>
					Conoce nuestros servicios
				</Typography>
				<Box component="div" py={2}>
					<ServiceSlides />
				</Box>
			</Box>
			<Box component="div" py={2} textAlign="left">
				{/* <Typography variant="h6" component="h2" sx={{fontWeight:'600'}}>
					Conoce nuestros servicios
				</Typography> */}
				<Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
					<Grid item xs={6} >
						<Link href="/posts/first-post">
           					<a>
						<Paper variant="outlined">							
								<Grid container justifyContent="space-between" alignItems="center">
									<Grid item xs={8} md={8}>
										<Box component="div" textAlign="left">
											<Typography variant="h5" component="h2" sx={{fontWeight:'600'}}>
												Desde 
											</Typography>
											<Typography variant="subtitle2">
											Papel Bond PAPERLINE 
											</Typography>
											<Typography variant="subtitle2" color="textSecondary">
											Caja con 10 Resmas de 500 HOJAS c/u
											</Typography>
										</Box>
									</Grid>
									<Grid item xs={4} md={4}>
									<Box >
										<Box >
											<img 
												src="https://pedidos.com/myfotos/pedidos-com/pagina/home21/principales/paperline.png"
												alt=""
												layout="responsive"
												objectFit="cover"
												objectPosition="bottom center"											
											/>
										</Box>
									</Box>	
									</Grid>
								</Grid>
						</Paper>
						</a>
						</Link>
					</Grid>
					<Grid item xs={6} >
						<Link href="/posts/first-post">
           					<a>
						<Paper variant="outlined">							
								<Grid container justifyContent="space-between" alignItems="center">
									<Grid item xs={8} md={8}>
										<Box component="div" textAlign="left" sx={{ top: 0,left: 0,display: 'block',}}>
											<Typography variant="h5" component="h2" sx={{fontWeight:'600'}}>
												Desde 
											</Typography>
											<Typography variant="subtitle2">
											Papel Bond PAPERLINE 
											</Typography>
											<Typography variant="subtitle2" color="textSecondary">
											Caja con 10 Resmas de 500 HOJAS c/u
											</Typography>
										</Box>
									</Grid>
									<Grid item xs={4} md={4}>
										<img 
											src="https://pedidos.com/myfotos/pedidos-com/pagina/home21/principales/paperline.png"
											alt=""
											layout="responsive"
											objectFit="cover"
											objectPosition="bottom center"											
										/>
									</Grid>
								</Grid>
						</Paper>
						</a>
						</Link>
					</Grid>
				</Grid>
			</Box>
			<Box component="div" py={2} textAlign="left">
				<Typography variant="h6" component="h2" sx={{fontWeight:'600'}}>
					Productos Destacados
				</Typography>
				<Box component="div" py={2}>
					<Trends />
				</Box>
			</Box>
			<Box component="div" py={2}>
				<Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={4}>
						<Grid item sm={4}>
							<Card sx={{ display: 'flex', width:'100%' }}>
								<Box sx={{ display: 'flex', flexDirection: 'column' }}>
									
									<CardContent sx={{ flex: '1 0 auto' }}>                       
											<Box component="div">
												<Typography variant="caption" color="textSecondary">Limpieza</Typography><br/>
												<Typography variant="h5" component="subtitle1" sx={{fontWeight:'600'}}>Higiene & Salud</Typography>
											</Box>
											
											
									</CardContent>
									<CardMedia component="img"
										sx={{ width: 150 }}
										image={
										'https://pedidos.com/myfotos/pedidos-com/pagina/home20/principales/salud.webp'
										}
									/>
									
								</Box>
							</Card>
						</Grid>
						<Grid item>2</Grid>
						<Grid item>3</Grid>
				</Grid>
			</Box>
			<Box component="div" py={2} textAlign="left">
				<Typography variant="h6" component="h2" sx={{fontWeight:'600'}}>
					Conoce las soluciones para las empresas
				</Typography>
				<Box component="div" py={2}>
					<ForBusiness />
				</Box>
				<Box component="div" py={2}>
					<Card>
						Apple
					</Card>
				</Box>
			</Box>
			<Box component="div" py={2} textAlign="left">
				{/* <Typography variant="h6" component="h2" sx={{fontWeight:'600'}}>
					Marcas
				</Typography> */}
				<Box component="div" py={2}>
					<Brands />
				</Box>
			</Box>
			<Box component="div" py={2} textAlign="left">
				<Typography variant="h6" component="h2" sx={{fontWeight:'600'}}>
					Populares
				</Typography>
				<Box component="div" py={2}>
					Cómputo
					impresión
					Tintas & tóners
					Papelería
					Papel

				

					
				</Box>
			</Box>
			<Box component="div" py={2} textAlign="center">
				<Typography variant="h4" component="h5" sx={{fontWeight:'600'}}>
				Servicio personalizado enfocado a tus necesidades
				</Typography>
				<Button variant="contained">
						Comenzar
				</Button>
			</Box>
			{/* <Box component="div" py={2} textAlign="center">
				<Paper elevation={3} >
				<Box component="div" p={2}>
					<Grid container direction="row" justifyContent="center" alignItems="center">
						<Grid item  xs={12} sm={6}>
							<Typography variant="h4" component="h6" sx={{fontWeight:'600'}}>
							Servicio personalizado enfocado a tus necesidades
							</Typography>
							<Typography variant="h4" component="h6" sx={{fontWeight:'600'}}>
							Servicio personalizado enfocado a tus necesidades
							</Typography>
							<Button variant="outlined">
								Comenzar
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant="h4" component="h6" sx={{fontWeight:'600'}}>
							Servicio personalizado enfocado a tus necesidades
							</Typography>
							<Button variant="outlined">
								Comenzar
							</Button>
						</Grid>		
					</Grid>
				</Box>
				</Paper>
			</Box> */}
			

			

			
		

			{/* <main className={styles.main}>

				<h1 className={styles.title}>
				<Link href="/Home">
					<a>
					HOME logeado
					</a>
				</Link>
				</h1>
			</main> */}
		</div>
	</Layout>
	);
}
