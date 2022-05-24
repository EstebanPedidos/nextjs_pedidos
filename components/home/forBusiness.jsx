
import Link from 'next/link'
import Image from 'next/image';
//MUI

import {Box, Grid, Paper, Typography, Button, Divider, Card, 
    CardActionArea, CardContent, CardActions,CardMedia, Avatar,
   } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
   // Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import { Autoplay, Lazy, FreeMode } from 'swiper';
import 'swiper/css';
//import 'swiper/css/navigation';
//
import "swiper/css/free-mode";
import 'swiper/css/pagination';
import { style } from '@mui/system';

const useStyles = makeStyles(() => ({
    root: {
      maxWidth: '100%',
      margin: 'auto',
    },
   
  }));
export default function TrendSlides() {
    const cardStyles = useStyles();

  return (
        <Swiper
        //modules={[Autoplay]}
        lazy={true}
        freeMode={true}
        spaceBetween={20}
        slidesPerView={1.2}
        
        //centeredSlides={true}
        //autoplay={{
        //"delay": 2500,
        //"disableOnInteraction": false}}
        className="mySwiper5"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        
        >
         <SwiperSlide> 
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia component="img"
                    sx={{ width: 150 }}
                    /* image={
                    'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/intel.webp'
                    } */
                />
                <CardContent sx={{ flex: '1 0 auto', backgroundColor:'#757575', borderRadius:'30px', }}>                       
                        <Box component="div" py={6} px={9} sx={{ color:'#ffffff' }}>
                            <Typography variant="h6" component="subtitle1" >Apple at Work</Typography>
                            <Typography variant="h3" component="h6" sx={{fontWeight:'600'}}>Una experiencia  como ninguna otra</Typography>
                            <Box component="div" pt={4}>
                                <CardActions>
                                    <Button variant="outlined" sx={{color:'#ffffff', borderColor: '#ffffff'}} size="large">
                                        Ver Detalles
                                    </Button>
                                </CardActions>
                            </Box>
                        </Box>  
                </CardContent>
            </Box>
        </SwiperSlide>
        <SwiperSlide> 
            <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia component="img"
                    sx={{ width: 150 }}
                    /* image={
                    'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/intel.webp'
                    } */
                />
                <CardContent sx={{ flex: '1 0 auto', backgroundColor:'#3655a5', borderRadius:'30px', }}>                       
                        <Box component="div" py={6} px={9} sx={{ color:'#ffffff' }}>
                            <Typography variant="h6" component="subtitle1" >Planes</Typography>
                            <Typography variant="h3" component="h6" sx={{fontWeight:'600'}}>Protecciones para tus dispositivos</Typography>
                            <Box component="div" pt={4}>
                                <CardActions>
                                    <Button variant="outlined" sx={{color:'#ffffff', borderColor: '#ffffff'}} size="large">
                                        Ver Detalles
                                    </Button>
                                </CardActions>
                            </Box>
                        </Box>  
                </CardContent>
            </Box>
            </Card>
        </SwiperSlide>
        <SwiperSlide> 
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia component="img"
                    sx={{ width: 150 }}
                    /* image={
                    'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/intel.webp'
                    } */
                />
                <CardContent sx={{ flex: '1 0 auto', backgroundColor:'#757575', borderRadius:'30px', }}>                       
                        <Box component="div" py={6} px={9} sx={{ color:'#ffffff' }}>
                            <Typography variant="h6" component="subtitle1" >Empresas</Typography>
                            <Typography variant="h3" component="h6" sx={{fontWeight:'600'}}>Mejoramos precio por Volumen</Typography>
                            <Box component="div" pt={4}>
                                <CardActions>
                                    <Button variant="outlined" sx={{color:'#ffffff', borderColor: '#ffffff'}} size="large">
                                        Ver Detalles
                                    </Button>
                                </CardActions>
                            </Box>
                        </Box>  
                </CardContent>
            </Box>
        </SwiperSlide>
       
        </Swiper>
	)
}