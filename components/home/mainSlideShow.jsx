
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
		<Box component="div">
			<Box>
				<img className={styles.imgfban}
				src={props.img}
				alt={props.img}
				layout="responsive"
				/>
			</Box>
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
				loop={true}
				pagination={{
					"clickable": true
				  }}

                className="mySwiper"
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}>
					
				<SwiperSlide> 
					<Box component="div" sx={{position:'relative'}}>
						<Link href='/articulos/imac-2017-apple-mhk03ea-intel-core-i5-8-gb-ssd-256-gb-led-21-5-pulgadas-mac-os'>
							<a>	
								<Box component="div">
									<Hidden mdDown>
										<Banner xs={{width:'100%'}} props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/imac-aar.webp',
										alt:'Apple, iMac',
										
										}}
										/>
									</Hidden>
									<Hidden mdUp>
										<Banner props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/imac-xs-june.png',
										alt:'',
										}}
										/>
									</Hidden>
								</Box>	
							</a>
						</Link>
					</Box>
				</SwiperSlide>
				<SwiperSlide> 
					<Box component="div" sx={{position:'relative'}}>
						<Link href='/busquedas?query=HTP200520211'>
							<a>
								<Box component="div">
									<Hidden mdDown>
										<Banner xs={{width:'100%'}} props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/laptop-ideapad-lenovo-june-1.png',
										alt:'Lenovo',
										
										}}
										/>
									</Hidden>
									<Hidden mdUp>
										<Banner props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/laptop-ideapad-lenovo-june.png',
										alt:'Lenovo',
										}}
										/>
									</Hidden>
								</Box>	
								<Box component="div" className={styles.infopbox}>
									<Grid spacing={1}
									container
									direction="row"
									justifyContent="space-between"
									alignItems="center">
										<Grid item xs={4} sm={4}>
											<Box component="div" sx={{position:'relative'}} >
												<Paper variant='auto' px={1}  className={styles.boxmsi } >
													<Box component="div" textAlign="center" py={1} px={3}> 
														<Typography variant="overline" display="block">Hasta</Typography>
															<Typography  variant="h4" component="body1" sx={{fontWeight:'600'}}>
															<Box component="span" sx={{color:'#3655a5'}}>24</Box></Typography>
															<Typography variant="caption" display="block" gutterBottom color="textSecondary">Tarjetas Citibanamex*</Typography>
															
													</Box>
												</Paper>
											</Box>
										</Grid>
										<Divider orientation="vertical" flexItem />
										<Grid item xs={7} sm={7}>
											<Box component="div" >
												<div>
													<Typography className={styles.title} variant="h4" component="body1" > 
													Desde <Box component="span" sx={{color:'#3655a5'}}>$16,999</Box>
													</Typography>

													<Typography variant="Subtitle1" component="p" >
														Lenovo IdeaPad 3 15ALC6
													</Typography> 
													<Typography variant="Subtitle1" component="p" color="textSecondary" >								
														Ryzen 7, 16 GB, SSD 512 GB
													</Typography>  
												</div>
											</Box>
										</Grid>
									</Grid>
								</Box>
							</a>
						</Link>
					</Box>
				</SwiperSlide>
				<SwiperSlide> 
					<Link href='/apple/para-empresas'>
						<a>
							<Box component="div" sx={{position:'relative'}}>
								<Box component="div">
									<Hidden mdDown>
										<Banner xs={{width:'100%'}} props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/apple-at-work-may.webp',
										alt:'Apple',
										}}
										/>
									</Hidden>
									<Hidden mdUp>
										<Banner props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/apple-at-work-june-xs.webp',
										alt:'',
										}}
										/>
									</Hidden>
								</Box>	
							</Box>
						</a>
					</Link>
				</SwiperSlide>
				<SwiperSlide> 
					<Link href='/busquedas?query=carpetas+acco'>
						<a>
							<Box component="div" sx={{position:'relative'}}>
								<Box component="div">
									<Hidden mdDown>
										<Box component="div">
											<Banner xs={{width:'100%'}} props={{
											img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/acco-carpetas-june.webp',
											alt:'Papelería, acco',
											
											}}
											/>
										</Box>
									</Hidden>
									<Hidden mdUp>
										<Box component="div">
											<Banner props={{
											img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/acco-carpetas-june-xs.webp',
											alt:'Papelería, acco',
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
											<Box component="div" sx={{position:'relative'}} >
												<Paper variant='auto' px={1}  className={styles.boxmsi } >
													<Box component="div" textAlign="center" py={1} px={2}> 
														<Typography variant="overline" display="block"></Typography>
															<Typography  variant="h4" component="body1" sx={{fontWeight:'600'}}>
															<Box component="span" sx={{color:'#3655a5'}}></Box></Typography>
															<Typography variant="caption" display="block" mt={10} gutterBottom color="textSecondary">Pagos mayores a $500 MXN</Typography>
															
													</Box>
												</Paper>
											</Box>
										</Grid>
										<Divider orientation="vertical" flexItem />
										<Grid item xs={7} sm={7}>
											<Box component="div" >
												<div>
													<Typography className={styles.title} variant="h4" component="body1" > 
													Desde <Box component="span" sx={{color:'#3655a5'}}>$52</Box>
													</Typography>

													<Typography variant="Subtitle1" component="p" >
													Carpetas ACCO
													</Typography> 
													<Typography variant="Subtitle1" component="p" color="textSecondary" >								
													Wilson Jones PO101 - 1 Pieza
													</Typography>  
												</div>
											</Box>
										</Grid>
									</Grid>
								</Box>
							</Box>
						</a>
					</Link>
				</SwiperSlide>
				<SwiperSlide> 
					<Link href='/busquedas?query=SSD'>
						<a>
							<Box component="div" sx={{position:'relative'}}>
								<Box component="div">
									<Hidden mdDown>
										<Box component="div">
											<Banner xs={{width:'100%'}} props={{
											img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/ssd-june.webp',
											alt:'SSD , HP',
											
											}}
											/>
										</Box>
									</Hidden>
									<Hidden mdUp>
										<Box component="div">
											<Banner props={{
											img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/ssd-june-xs.webp',
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
											<Box component="div" sx={{position:'relative'}} >
												<Paper variant='auto' px={1}  className={styles.boxmsi } >
													<Box component="div" textAlign="center" py={1} px={3}> 
														<Typography variant="overline" display="block">Hasta</Typography>
															<Typography  variant="h4" component="body1" sx={{fontWeight:'600'}}>
															<Box component="span" sx={{color:'#3655a5'}}>18</Box></Typography>
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
													Desde <Box component="span" sx={{color:'#3655a5'}}>$1,749</Box>
													</Typography>

													<Typography variant="Subtitle1" component="p" >
													SSD EXTERNO HP P700
													</Typography> 
													<Typography variant="Subtitle1" component="p" color="textSecondary" >								
													512GB USB NEGRO 
													</Typography>  
												</div>
											</Box>
										</Grid>
									</Grid>
								</Box>
							</Box>
						</a>
					</Link>
				</SwiperSlide>
				
			</Swiper>
	)
}