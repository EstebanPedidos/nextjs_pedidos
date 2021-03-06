
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
  <Box component="div" mt={1} pb={2}>
    <Paper  elevation={8}  sx={{padding: '1rem',}}>
      <Link href="/">
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
                <img width='52px' sx={{ justifyContent:'center', margin:'auto',}}
                  src= {data.img1}
                  alt= {data.texto4}
                  layout="responsive"
                />
              </Box>
              
            </Box>
          </Box>
        </a>
      </Link>
    </Paper>
  </Box>
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
        className="mySwiper2"
        breakpoints={{
          320: {
            slidesPerView: 2.2,
            
          },
          768: {
            slidesPerView: 3.2,
            
          },
          1024: {
            slidesPerView: 3.1,
           
          },
      }}
      >
        <SwiperSlide> 
         
          <Boxservice 
            data={{
            texto1:'FORMA DE ENTREGA', 
            texto2:'Pick Up Center', 
            texto3: 'Solo pide en l??nea y recoge', 
            img1:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/pickup.svg',
            texto4:'PickUp' }}
          />
          
        </SwiperSlide>
        <SwiperSlide> 
          <Boxservice 
            data={{texto1:'ATENCI??N A CLIENTES',
            texto2:'Soporte T??cnico', 
            texto3: 'Asesor??a para ti y tus equipos.',
            img1:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/tech.png',
            texto4:'Soporte T??cnico'
          }}
            />
        </SwiperSlide>
        <SwiperSlide> 
          <Boxservice 
              data={{texto1:'Forma de pago',
              texto2:'Paga al recibir', 
              texto3:'Solo pide y paga con tarjeta al momento. CDMX  Guadalajara',
              img1:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/paga-recibe.svg',
              texto4:'Paga al recibir, pago contra entrega'
            }}
              />
        </SwiperSlide>
        <SwiperSlide> 
          <Boxservice 
                data={{texto1:'Forma de Entrega',
                texto2:'Express CDMX', 
                texto3:'3 hrs o menos ??Solo pide!',
                img1:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/pickup.svg',
                texto4:'Servicio, entregas, express'
              }}
          />
        </SwiperSlide>
        </Swiper>
	)
}