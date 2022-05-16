
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
import { Autoplay, Lazy } from 'swiper';
import 'swiper/css';
//import 'swiper/css/navigation';
//
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
        spaceBetween={10}
        slidesPerView={1}
        //centeredSlides={true}
        //autoplay={{
        //"delay": 2500,
        //"disableOnInteraction": false}}
       
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide> 
            <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia component="img"
                    sx={{ width: 150 }}
                    /* image={
                    'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/intel.webp'
                    } */
                />
                <CardContent sx={{ flex: '1 0 auto' }}>                       
                        <Box component="div">
                            <Typography variant="caption" color="textSecondary">Planes</Typography>
                            <Typography variant="h5" component="h6" sx={{fontWeight:'600'}}>Protecciones para tus dispositivos</Typography>
                        </Box>
                        <CardActions>
                            <Button variant="contained">
                                Ver Detalles
                            </Button>
                        </CardActions>
                        
                </CardContent>
            </Box>
            </Card>
        </SwiperSlide>
        <SwiperSlide> 
         
        </SwiperSlide>
        <SwiperSlide> 
        3
        </SwiperSlide>
        <SwiperSlide> 
        4
        </SwiperSlide>
        <SwiperSlide> 
        4
        </SwiperSlide>
        <SwiperSlide> 
        4
        </SwiperSlide>
        </Swiper>
	)
}