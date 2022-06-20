
import Link from 'next/link';
import Image from 'next/image';
//MUI
import {Box, Grid, Paper, Typography, Button, Card, 
  CardActionArea, CardContent, CardActions,CardMedia
 } from '@mui/material';
 import makeStyles from '@mui/styles/makeStyles';
 import styles from 'styles/Home.module.css';

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import { Autoplay, Lazy } from 'swiper';
import 'swiper/css';
//import 'swiper/css/navigation';
//
import 'swiper/css/pagination';
import { margin } from '@mui/system';

const Boxcard = ({data})=>{
  return(
  <>  
    {/* <Box component="div" mt={1} p={2}> */}
        <Box component="div" py={2}>
            <Box component="div" px={1}>
                <Card variant={0}  className={styles.sbox} sx={{ display: 'flex', position:'relative' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
                        <CardContent className={styles.sboxcontent} sx={{ flex: '1 0 auto' }}>
                            <Box component="div" textAlign="left" >                                
                                <Typography variant="h4" component="h3" sx={{fontWeight:'600'}}>
                                        {data.titulo}
                                    <Box component="span" sx={{color:'#f1861c'}}>
                                        {data.precio}
                                    </Box>
                                </Typography>  
                                <Typography variant="h6" component="p" sx={{fontWeight:'500'}}>
                                    {data.subtitle}
                                </Typography>
                                <Typography variant="subtitle1" component="p" color="textSecondary">
                                    {data.text1} 
                                </Typography>
                            </Box>
                        </CardContent>
                    
                    </Box>
                    <CardMedia
                        component="img" className={styles.sboximg}
                        sx={{ width: 'auto', position:'absolute', top:'0rem', right:'0rem' }}
                        image= {data.imgcard}
                        alt= {data.keyw}
                        objectPosition="right"   
                    />
                </Card>
            </Box>
        </Box>
    {/* </Box> */}
        
  </> 
  )
}
export default function SecondaryCards() {

  return (

    <Swiper
        //modules={[Autoplay]}
        lazy={true}
        spaceBetween={20}
        slidesPerView={3}
        //centeredSlides={true}
        //autoplay={{
        //"delay": 2500,
        //"disableOnInteraction": false}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper6"
        breakpoints={{
            320: {
                slidesPerView: 1.1,
                
              },
            640: {
              slidesPerView: 1.2,
              
            },
            768: {
              slidesPerView:2.1,
              
            },
            1024: {
              slidesPerView: 2,
             
            },
            1200: {
                slidesPerView: 3,
               
              },
        }}
        >
        
        <SwiperSlide>
            <Link href="/busquedas?/TLAPALERIA/INDUSTRIAL/CUBREBOCAS">
                <a>
                    <Boxcard 
                        data={{
                        titulo:'Salud y Cuidado',
                        subtitle: 'Productos clave:', 
                        text1:'Gel antibacterial, Cubrebocas y más...',
                        imgcard:'https://pedidos.com/myfotos/pedidos-com/pagina/home20/principales/salud-150.webp',
                        keyw:'Productos para oficina, papelería, papel, cajas de papel, resma de papel' }}
                    />				
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="/busquedas?d=true&g=true">
                <a>
                <Boxcard 
                    data={{
                    titulo:'Productos con Envío Gratis',
                    subtitle: 'Descubre cientos de productos', 
                    imgcard:'https://pedidos.com/myfotos/pedidos-com/pagina/home20/principales/envio-150.webp',
                   keyw:'cómputo, hardware, laptops, all in one, aio, tablets' }}
                />				
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="/outlet-caja-abierta">
                <a>
                    <Boxcard 
                        data={{
                        titulo:'Ahorra en la Outlet',
                        subtitle: 'Productos Reacondicionados o de caja abierta.', 
                        imgcard:'https://pedidos.com/myfotos/pedidos-com/pagina/home20/principales/caja-150.webp',
                        keyw:'cómputo, hardware, laptops, all in one, aio, tablets' }}
                    />				
                </a>
            </Link>
        </SwiperSlide>
    </Swiper>
    
         

	)
}