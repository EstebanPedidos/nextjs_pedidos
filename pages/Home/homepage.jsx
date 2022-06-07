 import Link from 'next/link'
 import Head from 'next/head';
 import Image from 'next/image';
 import styles from 'styles/Home.module.css';
 //MUI
	import {Container,Box, Grid, Paper, Typography, Button, Divider, Card, 
    CardActionArea, CardContent, CardActions,CardMedia
   } from '@mui/material';
//Components
import MainSlideShow from 'components/home/mainSlideShow';
import PromoSlides from 'components/home/promoSlides';
import ServiceSlides from 'components/home/serviceSlides';
import SecondaryCard from 'components/home/secondaryCards';
import Trends from 'components/home/trendSlides';
import ThreeCards from 'components/home/tertiaryCards';
import Brands from 'components/home/Brands';
import CarouselBrands from 'components/home/CarouselBrands';
import ForBusiness from 'components/home/forBusiness';

export const HomeSite = () => {
	return (
	<Box component="div">
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
			<Box> 
				<Container maxWidth="xl">
					<Typography variant="h6" component="h2" sx={{fontWeight:'600'}}>
						Conoce nuestros servicios
					</Typography>
					<Box component="div" py={2}>
						<ServiceSlides />
					</Box>
				</Container>
			</Box>
		</Box>
		<Box component="div" p={2} textAlign="left">
			<SecondaryCard />	
		</Box>
			<Box component="div" mt={4} py={4} textAlign="left" sx={{position:'relative'}}>
				<Box component="div" className={styles.boxbbc}>
					<Container maxWidth="xl">
						<Typography variant="h6" component="h2" sx={{fontWeight:'600'}}>
							Productos Destacados
						</Typography>
						<Box component="div" py={2}>
							<Trends />
						</Box>
					</Container>
				</Box>
			</Box>
			<Box component="div" p={2}>
				<ThreeCards />
			</Box>
			<Box component="div" py={2} textAlign="left">
				{/* <Typography variant="h6" component="h2" sx={{fontWeight:'600'}}>
					Conoce las soluciones para las empresas
				</Typography> */}
				<Box component="div" py={4}>
					<ForBusiness />
				</Box>
			</Box>
			<Box component="div" py={2} textAlign="left">
				<Box component="div" py={2}>
					<Brands/>
				</Box>
			</Box>
			{/* <Box component="div" py={2} textAlign="left">
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
			</Box> */}
			
			<Box component="div" pt={6} textAlign="center">
				<Box py={6} sx={{ background:'#f6f7f9' }}>
					<Container maxWidth="xl">
						<Box component="div" pt={6} textAlign="center">
							<Typography variant="h4" component="h5" sx={{fontWeight:'600'}}>
							Servicio personalizado enfocado a tus necesidades
							</Typography>
						</Box>
						<Box component="div" pt={4} pb={6}>
							<Button variant="contained">
									Centro de Ayuda
							</Button>
						</Box>
					</Container>
				</Box>
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
	</Box>	
	);	
	
};

export default HomeSite;