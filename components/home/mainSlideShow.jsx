
import Link from 'next/link'
import Image from 'next/image';
import styles from 'styles/Home.module.css';
//MUI
import {Box, Grid, Paper, Typography, Button, Divider, Card, 
    CardActionArea, CardContent, CardActions,CardMedia, Avatar,
   } from '@mui/material';
import { Banners } from './banners';
//Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import { Autoplay, Pagination, Navigation, Lazy } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const items = [
	{
		image: 'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210.png',
		alt: 'Impresion EPSON',
		
	},
	{
		image: 'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/laptops-hp-pavilion-inteli5.png',
		alt: 'Laptops HP',
	},
	
];


function Bannner (props) {
	return  (
		<Box>
			<img 
			src={props.img}
			srcSet="
				https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210-xs.png 800w,
				https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210-l.png 1200w,
				https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210.png 1600w,
				"
			alt={props.img}
			layout="fill"
			objectFit="cover"
			objectPosition="bottom center"

			/>
		</Box>

	);
}

export default function MainSlideShow() {

  return (
			<Swiper
				modules={[Lazy, Pagination, Navigation]}
				navigation
				lazy={true}
				spaceBetween={10}
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
						<img src="https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210.png"
						srcSet="
						https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210-xs.png 800w,
						https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210-l.png 1200w,
						https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210.png 1600w,"
						//sizes="(min-width: 767px) 33vw, (min-width: 568px) 50vw, 100vw "
						layout="fill"
						objectFit="cover"
						objectPosition="bottom center"/>
					</Box>  
                    <Box component="div" >
                        <Box component="div" className={styles.infopbox}>
                            <Grid  spacing={2}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                                <Grid item xs={6} sm={4}>
                                    <Box component="div" >
                                        <Paper elevation={4} p={1} >
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
                                <Grid item xs={6} sm={7}>
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
					2
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