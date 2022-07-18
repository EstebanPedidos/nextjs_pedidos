
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
import WhatsAppIcon from '@material-ui/icons/WhatsApp';





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

			{/* <SwiperSlide> 

						<Box component="div" sx={{position:'relative'}}>	
							<Box component="div">
								<Hidden mdDown>
									<Box component="div">
										<Banner xs={{width:'100%'}} props={{
										img:'https://imgur.com/Dp1okQD.jpg',
										alt:'sin servicio',
										
										}}
										/>
									</Box>
								</Hidden>
								<Hidden mdUp>
									<Box component="div">
										<Banner props={{
										img:'https://imgur.com/XD9mBwu.jpg',
										alt:'sin servicio',
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
									
									<Grid item xs={12} sm={9}>
										<Box component="div" >
											<div>
												<Typography className={styles.title} variant="h4" component="body1" > 
												Estamos trabajando para ti
												</Typography>

												<Typography variant="Subtitle1" component="p" >
												Si necesitas ayuda con tu pedido nos puedes contactar vía whatsapp al siguiente número
												</Typography>

												<Box component="div" pt={3} pb={6}>
													<Button 
														variant="outlined"
														size="large" 
														aria-label="Help" 
														startIcon={<WhatsAppIcon/>}  
														onClick={(event) => { event.preventDefault(); window.open('https://api.whatsapp.com/send?phone=5215610348533&amp;text=Hola,%20Pedidos.com%20me%20ayudas%20a...%20', '_blank')}}>
															+5215610348533
													</Button>
												</Box>
											</div>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Box>
			</SwiperSlide> */}
			<SwiperSlide> 
				<Box component="div" sx={{position:'relative'}}>
					<Link href='/busquedas?query=HTP200520211'>
						<a>
							<Box component="div">
								<Hidden mdDown>
									<Banner xs={{width:'100%'}} props={{
									img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/len-30-desktop.webp',
									alt:'Lenovo',
									
									}}
									/>
								</Hidden>
								<Hidden mdUp>
									<Banner props={{
									img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/len-30-sm-xs.webp',
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
														<Box component="span" sx={{color:'#3655a5'}}>18</Box></Typography>
														<Typography variant="caption" display="block" gutterBottom color="textSecondary">Tarjetas Citibanamex*</Typography>
														
												</Box>
											</Paper>
										</Box>
									</Grid>
									<Divider orientation="vertical" flexItem />
									<Grid item xs={7} sm={7}>
										<Box component="div" >
											<div>
												<Typography variant="Subtitle1" component="p" color="textSecondary" >	
												Cómputo | Lenovo
												</Typography>  
												<Typography className={styles.title} variant="h4" component="body1" > 
												Desde <Box component="span" sx={{color:'#3655a5'}}>$15,899</Box>
												</Typography>

												<Typography variant="Subtitle1" component="p" >
													Lenovo Think Pad E14
												</Typography> 
												<Typography variant="Subtitle1" component="p" color="textSecondary" >								
													Ryzen 5, 8 GB, SSD 256 GB
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
				<Link href='/busquedas?query=HTP200520210'>
					<a>
						<Box component="div" sx={{position:'relative'}}>
							<Box component="div">
								<Hidden mdDown>
									<Box component="div">
										<Banner xs={{width:'100%'}} props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/hp-desktop.webp',
										alt:'hp, tecnologia, computo',
										
										}}
										/>
									</Box>
								</Hidden>
								<Hidden mdUp>
									<Box component="div">
										<Banner props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/hp-sm-xs.webp',
										alt:'hp, tecnologia, computo',
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
												<Typography variant="Subtitle1" component="p" color="textSecondary" >	
												Cómputo | HP
												</Typography>  
												<Typography className={styles.title} variant="h4" component="body1" > 
												Desde <Box component="span" sx={{color:'#3655a5'}}>$14,399</Box>
												</Typography>

												<Typography variant="Subtitle1" component="p" >
												Laptop HP PAVILION 15 EH0002LA
												</Typography> 
												<Typography variant="Subtitle1" component="p" color="textSecondary" >	
												AMD RYZEN 5, 8GB, 512GB
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
				<Link href='/busquedas?query=HTP200520213'>
					<a>
						<Box component="div" sx={{position:'relative'}}>
							<Box component="div">
								<Hidden mdDown>
									<Box component="div">
										<Banner xs={{width:'100%'}} props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/bro-30-desktop.webp',
										alt:'brother, tecnologia',
										
										}}
										/>
									</Box>
								</Hidden>
								<Hidden mdUp>
									<Box component="div">
										<Banner props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/bro-30-sm-xs.webp',
										alt:'brother, tecnologia',
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
														<Box component="span" sx={{color:'#3655a5'}}>24</Box></Typography>
														<Typography variant="caption" display="block" gutterBottom color="textSecondary">Tarjetas participantes*</Typography>
														
												</Box>
											</Paper>
										</Box>
									</Grid>
									<Divider orientation="vertical" flexItem />
									<Grid item xs={7} sm={7}>
										<Box component="div" >
											<div>
												<Typography variant="Subtitle1" component="p" color="textSecondary" >	
												Impresión | Brother
												</Typography>  
												<Typography className={styles.title} variant="h4" component="body1" > 
												Desde <Box component="span" sx={{color:'#3655a5'}}>$4,299</Box>
												</Typography>

												<Typography variant="Subtitle1" component="p" >
												Multifuncional brother DCPT520W
												</Typography> 
												<Typography variant="Subtitle1" component="p" color="textSecondary" >	
												Tinta continua color
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
				<Link href='/busquedas?query=proyector+epson'>
					<a>
						<Box component="div" sx={{position:'relative'}}>
							<Box component="div">
								<Hidden mdDown>
									<Box component="div">
										<Banner xs={{width:'100%'}} props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/e20-desktop.webp',
										alt:'epson, tecnologia, proyeccion',
										
										}}
										/>
									</Box>
								</Hidden>
								<Hidden mdUp>
									<Box component="div">
										<Banner props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/e20-sm-xs.webp',
										alt:'epson, tecnologia, proyeccion',
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
												<Typography variant="Subtitle1" component="p" color="textSecondary" >	
												Proyección | Epson
												</Typography>  
												<Typography className={styles.title} variant="h4" component="body1" > 
												Desde <Box component="span" sx={{color:'#3655a5'}}>$10,699</Box>
												</Typography>

												<Typography variant="Subtitle1" component="p" >
												Proyector Epson 
												</Typography> 
												<Typography variant="Subtitle1" component="p" color="textSecondary" >	
												POWERLITE E20
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
				<Link href='/articulos/papel-ecobond-carta-70g-blancura-95'>
					<a>
						<Box component="div" sx={{position:'relative'}}>
							<Box component="div">
								<Hidden mdDown>
									<Box component="div">
										<Banner xs={{width:'100%'}} props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/ecobond-30-desktop.webp',
										alt:'ecobond, papeleria, papel',
										
										}}
										/>
									</Box>
								</Hidden>
								<Hidden mdUp>
									<Box component="div">
										<Banner props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/epson-1-sm-xs.webp',
										alt:'ecobond, papeleria, papel',
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
												<Typography variant="Subtitle1" component="p" color="textSecondary" >	
												Copamex | Papel
												</Typography>  
												<Typography className={styles.title} variant="h4" component="body1" > 
												Desde <Box component="span" sx={{color:'#3655a5'}}>$1,079</Box>
												</Typography>

												<Typography variant="Subtitle1" component="p" >
												Papel ECOBOND
												</Typography> 
												<Typography variant="Subtitle1" component="p" color="textSecondary" >		
												Tamaño Carta, Blancura 95%
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
				<Link href='/busquedas?query=faber+castell'>
					<a>
						<Box component="div" sx={{position:'relative'}}>
							<Box component="div">
								<Hidden mdDown>
									<Box component="div">
										<Banner xs={{width:'100%'}} props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/Faber-desktop.webp',
										alt:'faber, papeleria, lapiz',
										
										}}
										/>
									</Box>
								</Hidden>
								<Hidden mdUp>
									<Box component="div">
										<Banner props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/Faber-sm-xs.webp',
										alt:'faber, papeleria, lapiz',
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
												<Typography variant="Subtitle1" component="p" color="textSecondary" >	
												Papelería | Faber castell
												</Typography>  
												<Typography className={styles.title} variant="h4" component="body1" > 
												Desde <Box component="span" sx={{color:'#3655a5'}}>$45</Box>
												</Typography>

												<Typography variant="Subtitle1" component="p" >
												Crayones Jumbo grip borrables
												</Typography> 
												<Typography variant="Subtitle1" component="p" color="textSecondary" >		
												Caja con 12 piezas
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