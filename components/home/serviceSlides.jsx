
import Link from 'next/link'
import Image from 'next/image';
//MUI
import {Box, Grid, Paper, Typography, Button, Card, 
  CardActionArea, CardContent, CardActions,CardMedia
 } from '@mui/material';
 import makeStyles from '@mui/styles/makeStyles';
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import { Autoplay, Lazy } from 'swiper';
import 'swiper/css';
//import 'swiper/css/navigation';
//
import 'swiper/css/pagination';
import { margin } from '@mui/system';

const Boxservice = ({data})=>{
  return(
  <>
  <Paper variant='outlined' elevation={12} m={2} sx={{padding: '1rem',}}>
  <Link href="/posts/first-post">
  <a>
    <Box component="div" sx={{position:'relative', height:'200px'}}>
      <Box component="div" textAlign="left" sx={{position: 'absolute', top: 0,left: 0,display: 'block',}}>
        <Typography variant="caption" color="textSecondary">
          {data.texto1}
        </Typography>
        <Typography variant="h5" component="h2" sx={{fontWeight:'600'}}>
          {data.texto2}
        </Typography>
        <Typography variant="subtitle2">
          {data.texto3}
        </Typography>
      </Box>
      <Box component="div" sx={{position: 'absolute', width: '85px', bottom: 0,right: 0,display: 'block',}} >
        <Box component="div"p={2} sx={{backgroundColor:'#3655a5', borderRadius:'8px', width:'auto',height:'auto', justifyContent:'center', margin:'auto'}}>
          <img sx={{ justifyContent:'center', margin:'auto'}}
            src="https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/pickup.svg"
            alt=""
            layout="responsive"
          />
        </Box>
        
      </Box>
    </Box>
  </a>
  </Link>
  </Paper>
  </> 
  )
}
export default function serviceSlides() {

  return (
        <Swiper
        //modules={[Autoplay]}
        lazy={true}
        spaceBetween={15}
        slidesPerView={4}
        //centeredSlides={true}
        //autoplay={{
        //"delay": 2500,
        //"disableOnInteraction": false}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
            
          },
          768: {
            slidesPerView: 3.3,
            
          },
          1024: {
            slidesPerView: 3.5,
           
          },
      }}
      >
        <SwiperSlide> 
        <Box component="div">
          <Boxservice 
          data={{texto1:'Forma de entrega2', texto2:'Pick Up Center', texto3: 'Solo pide en línea y recoge' }}
          />
        </Box>
        </SwiperSlide>
        <SwiperSlide> 
        <Boxservice 
          data={{texto1:'Forma de entrega3', texto2:'Pick Up Center', texto3: 'Solo pide en línea y recoge' }}
          />
        </SwiperSlide>
        <SwiperSlide> 
        3
        </SwiperSlide>
        <SwiperSlide> 
        4
        </SwiperSlide>
        <SwiperSlide> 
        5
        </SwiperSlide>
        </Swiper>
	)
}