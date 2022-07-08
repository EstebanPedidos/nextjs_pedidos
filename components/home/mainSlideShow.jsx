
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
										img:'https://drscdn.500px.org/photo/1050715289/m%3D900/v2?sig=e120daf514fdd29a359d32b866605e96a98bfa92f082ec0f8650d2f56832a838',
										alt:'hp, tecnologia, computo',
										
										}}
										/>
									</Box>
								</Hidden>
								<Hidden mdUp>
									<Box component="div">
										<Banner props={{
										img:'https://drscdn.500px.org/photo/1050715279/m%3D900/v2?sig=469ecd29d7e282a708c7b92de6250b7c4cc39be1ec456114e298adc5b41b238a',
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
				<Link href='/busquedas?query=HTP200520221'>
					<a>
						<Box component="div" sx={{position:'relative'}}>
							<Box component="div">
								<Hidden mdDown>
									<Box component="div">
										<Banner xs={{width:'100%'}} props={{
										img:'https://drscdn.500px.org/photo/1050715957/m%3D900/v2?sig=4fac68519852ff69ee9b225c0570e637e4ef2b7d0697ceb802be95cb5b4d0ec3',
										alt:'Canon, tecnologia, impresion',
										
										}}
										/>
									</Box>
								</Hidden>
								<Hidden mdUp>
									<Box component="div">
										<Banner props={{
										img:'https://drscdn.500px.org/photo/1050715958/m%3D900/v2?sig=da2fbd4f082db67ae8417a315e2780bcf55681f887f89976dd7d729a61e686cd',
										alt:'Canon, tecnologia, impresion',
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
												<Typography variant="Subtitle1" component="p" color="textSecondary" >	
												Impresión | Canon
												</Typography>  
												<Typography className={styles.title} variant="h4" component="body1" > 
												Desde <Box component="span" sx={{color:'#3655a5'}}>$3,899</Box>
												</Typography>

												<Typography variant="Subtitle1" component="p" >
												Canon G3160
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
										alt:'epson, tecnologia, impresion',
										
										}}
										/>
									</Box>
								</Hidden>
								<Hidden mdUp>
									<Box component="div">
										<Banner props={{
										img:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/epson-1-sm-xs.webp',
										alt:'epson, tecnologia, impresion',
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
										img:'https://drscdn.500px.org/photo/1050668180/m%3D900/v2?sig=a92aae522fdb8c82da4ca97dd47c8feeaf7b166f2b6f10eba14f1dae9a9faac3',
										alt:'epson, tecnologia, impresion',
										
										}}
										/>
									</Box>
								</Hidden>
								<Hidden mdUp>
									<Box component="div">
										<Banner props={{
										img:'https://drscdn.500px.org/photo/1050668181/m%3D900/v2?sig=58cf6e343778f89f403f9d2e802ca9d7c1a44184fa841e96e2fbe38b2c164d6c',
										alt:'epson, tecnologia, impresion',
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