
import Link from 'next/link'
import Image from 'next/image';
import styles from 'styles/Home.module.css';
//MUI
import {Box, Grid, Paper, Typography, Button, Divider, Card, Hidden,
    CardActionArea, CardContent, CardActions,CardMedia, Avatar,} from '@mui/material';
import { Banners } from './principalBanners';
//Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import { Autoplay, Pagination, Navigation, Lazy } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* export const items = [
	{
		image: 'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210.png',
		alt: 'Impresion EPSON',
		
	},
	{
		image: 'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210-xs.png',
		alt: 'Impresion EPSON',
		
	},
]; */


const Banner = ({props})=> {
	return  (
		<Box>
			<img className={styles.imgfban}
			src={props.img}
			alt={props.img}
			layout="responsive"
			/>
		</Box>

	)
}

export default function MainSlideShow() {

  return (
			<Swiper
				modules={[Lazy, Pagination, Navigation]}
				navigation
				lazy={true}
				spaceBetween={0}
				slidesPerView={1}
				centeredSlides={true}
				pagination={{
					"clickable": true
				  }}

                className="mySwiper"
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}>
					
				<SwiperSlide> 
					<Box component="div" sx={{position:'relative'}}>
						<Box component="div">
							<Hidden mdDown>
								<Box component="div">
									<Banner xs={{width:'100%'}} props={{
									img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210.png',
									alt:'EPSON, impresión',
									
									}}
									/>
								</Box>
							</Hidden>
							<Hidden mdUp>
								<Box component="div">
									<Banner props={{
									img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/laptop-ideapad-lenovo-xs.png',
									alt:'',
									}}
									/>
								</Box>
							</Hidden>
						</Box>	
						<Box component="div" className={styles.infopbox}>
							<Grid spacing={1}
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center">
								<Grid item xs={4} sm={4}>
									<Box component="div" >
										<Paper elevation={5} p={1} >
											<Box component="div" textAlign="center" py={2} px={3}> 
												<Typography variant="overline" display="block">Hasta</Typography>
													<Typography  component="body1" variant="h5" sx={{fontWeight:'600'}}>
													<Box component="span" sx={{color:'#3655a5'}}>18</Box> MSI</Typography>
													<Typography variant="caption" display="block" gutterBottom color="textSecondary">Tarjetas participantes*</Typography>
													
											</Box>
										</Paper>
									</Box>
								</Grid>
								<Divider orientation="vertical" flexItem />
								<Grid item xs={7} sm={7}>
									<Box component="div" >
										<div>
											<Typography className={styles.title} variant="h4" component="body1" > 
											Desde <Box component="span" sx={{color:'#3655a5'}}>$4,175</Box>
											</Typography>

											<Typography variant="Subtitle1" component="p" >
											EPSON EcoTank L3210
											</Typography> 
											<Typography variant="Subtitle1" component="p" color="textSecondary" >								
												Inyección de tinta Heat Free 
											</Typography>  
										</div>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</SwiperSlide>
				<SwiperSlide> 
					3
				</SwiperSlide>
				<SwiperSlide> 
					4
				</SwiperSlide>
			</Swiper>
	)
}