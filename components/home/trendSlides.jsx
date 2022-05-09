import React,{useState,useEffect} from 'react';
//next js
import { useRouter } from 'next/router'
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
//MUI
import {Box, Grid, Paper, Typography, Button, Card, 
    CardActionArea, CardContent, CardActions,CardMedia
   } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    media: {
        width:'90px',
        height: '90px',
        margin:'auto',
        padding: '0.8rem',
       
    },
    productCardC: {  
         boxShadow: '0px 0px 16px rgb(54 85 166 / 8%), 0px 1px 4px rgb(54 85 166 / 8%)',          
        },
    swiperBox: {
        padding: theme.spacing(1),     
        },
    boxTitleIF:{
        height: "20px",
        overflow: "hidden",
    }
}));
export default function TrendSlides({favoritos,add}) {
    const classes                   = useStyles();
    const ruter                     = useRouter()
  return (
        <Swiper
        //modules={[Autoplay]}
        lazy={true}
        spaceBetween={10}
        slidesPerView={4.2}
        //centeredSlides={true}
        //autoplay={{
        //"delay": 2500,
        //"disableOnInteraction": false}}
       
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        
        <SwiperSlide  className={classes.swiperBox}>
        <Box component="div">
       
          <Card className={classes.productCardC}>
              <CardActionArea>
              <CardMedia
                  className={classes.media}
                  image={`https://pedidos.com/myfotos/large/(L)AZO-PRH-360.jpg`}
                  title="SKU-"
                  alt="TITULO"
              />
              <CardContent>
                  <Typography className={classes.boxTitleIF} variant="body1" display="block" gutterBottom color="textPrimary">
                  TITULO
                  </Typography>
                 
              </CardContent>
              </CardActionArea>
          <Box component="div" m={1}>
             
                  <Button variant="outlined" color="primary" fullWidth size="large">
                      Ver detalles
                  </Button>
             
          </Box>
          </Card>
        
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
        <SwiperSlide> 
        4
        </SwiperSlide>
        <SwiperSlide> 
        4
        </SwiperSlide>
        </Swiper>
	)
}