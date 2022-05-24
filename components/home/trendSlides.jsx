import React,{useState,useEffect} from 'react';
//next js
import { useRouter } from 'next/router';
import Link from 'next/link';
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
//MUI
import {Box, Grid, Paper, Typography, Button, Card, 
    CardActionArea, CardContent, CardActions,CardMedia, Divider, 
   } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
const Productcard = ({data})=>{
    return(
    <>
     <Box>
        <Card>
            <CardActionArea  to={data.productlink} >
                <Box component="div" textAlign="center">
                    <Typography variant="caption" color="textSecondary" gutterBottom >
                    {data.productBrand}
                    </Typography>
                </Box>
                <CardMedia  sx={{height:'180px', margin:'auto', padding: '0.8rem',}}
                image= {data.productImg}
                onError="this.onerror=null;this.src='https://pedidos.com/myfotos/xLarge/(X)logitinPed.webp'"
                alt={data.keyw}
                title={data.keyw1}
                />
                <CardContent>
                <Divider light />
                <Typography mt={2} sx={{ height:'44px', overflow: 'hidden'}}
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    {data.title}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                size="medium"
                variant="outlined"
                color="primary"
                fullWidth
                >
                    <Link href="{data.ctalink}" >
                        <a>
                        Ver Detalle
                        </a>
                    </Link>
                </Button>
            </CardActions>
        </Card>   
        
	</Box>
    </> 
    )
  }

export default function TrendSlides({favoritos,add}) {
    const classes                   = useStyles();
    const ruter                     = useRouter()
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
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper3"
        breakpoints={{
            320: {
                slidesPerView: 2.2,
                
              },
            640: {
              slidesPerView: 2.5,
              
            },
            768: {
              slidesPerView: 3.3,
              
            },
            1024: {
              slidesPerView: 4.3,
             
            },
        }}
        >
        
        <SwiperSlide  className={classes.swiperBox}>
            <Box component="div">
                <Productcard data={{
                    productBrand: 'AZOR', 
                        productImg:'https://pedidos.com/myfotos/large/(L)AZO-PRH-360.jpg',
                        keyw:'Azor, papelería',
                        keyw1:'Azor, papelería',
                        title:'PROTECTOR DE HOJAS KINERA TAMANO CARTA TRASLUCIDO 1 PAQUETE CON 100 PZAS',
                        ctalink:'https://pedidos.com/articulos/protector-de-hojas-kinera-tamano-carta-traslucido-1-paquete-con-100-pzas',
                    }}
                />
            </Box>
        </SwiperSlide>
        
        <SwiperSlide> 
            <Box component="div">
                <Productcard data={{
                    productBrand: 'AZOR', 
                        productImg:'https://pedidos.com/myfotos/large/(L)AZO-PRH-360.jpg',
                        keyw:'Azor, papelería',
                        keyw1:'Azor, papelería',
                        title:'PROTECTOR DE HOJAS KINERA TAMANO CARTA TRASLUCIDO 1 PAQUETE CON 100 PZAS',
                        ctalink:'https://pedidos.com/articulos/protector-de-hojas-kinera-tamano-carta-traslucido-1-paquete-con-100-pzas',
                    }}
                />
            </Box>
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