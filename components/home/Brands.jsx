
import Link from 'next/link'
import Image from 'next/image';
//MUI

import {Box, Grid, Paper, Typography, IconButton, Divider, Card, 
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
    content: {
      padding: 24,
    },
    avatar: {
      width: 250,
      height: 250,
      border: '2px solid #fff',
      margin: '-150px 32px 0 auto',
      '& > img': {
        margin: 0,
      },
    },
  }));
export default function TrendSlides() {
    const cardStyles = useStyles();

  return (
        <Swiper
        //modules={[Autoplay]}
        lazy={true}
        spaceBetween={10}
        slidesPerView={4}
        //centeredSlides={true}
        //autoplay={{
        //"delay": 2500,
        //"disableOnInteraction": false}}
       
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide> 
            <Card>
                <CardActionArea>
                    <CardMedia sx={{height: 220}}
                        
                        image={
                        'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/intel.webp'
                        }
                    />
                </CardActionArea>
                <Avatar sx={{ 
                    width: 70,
                    height: 70,
                    border: '2px solid #fff',
                    margin: '-50px 1rem auto',
                    '& > img': {
                        margin: 0,}} } 
                    alt="Intel" src="https://pedidos.com/myfotos/Pedidos-com/pagina/home22/brands/intel.png" />
                
                <CardContent>
                    <Grid container>
                        <Grid item xs={9} >
                            <Box component="div">
                                <Typography variant="caption" color="textSecondary">Procesadores</Typography>
                                <Typography variant="subtitle1" component="h6" sx={{fontWeight:'600'}}>Intel®</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                        <CardActions>
                            <IconButton>
                                <NavigateNextOutlinedIcon />
                            </IconButton>
                        </CardActions>
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
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
        <SwiperSlide> 
        4
        </SwiperSlide>
        <SwiperSlide> 
        4
        </SwiperSlide>
        </Swiper>
	)
}