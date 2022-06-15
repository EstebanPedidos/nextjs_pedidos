
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
import styles from 'styles/Home.module.css';
const Boxservice = ({data})=>{
  return(
  <>
  <Box component="div" px={1} mt={1} pb={2}>
    <Paper variant={0} className={styles.servicebox} sx={{padding: '1rem',}}>
          <Box component="div" sx={{position:'relative', height:'200px'}}>
            <Box component="div" textAlign="left" sx={{position: 'absolute', top: 0,left: 10,display: 'block',}}>
              <Typography variant="subtitle1" my={1} color="textSecondary">
                {data.texto1}
              </Typography>
              <Typography variant="h5" component="h2" sx={{fontWeight:'600'}}>
                {data.texto2}
              </Typography>
              <Typography variant="subtitle1" width='91%'>
                {data.texto3}
              </Typography>
              <Typography variant="subtitle1" sx={{fontWeight:'600'}} >
                {data.texto5}
              </Typography>
            </Box>
            <Box component="div"  sx={{position: 'absolute', width: '85px', bottom: 5,right:5,display: 'block',}} >
              <Box component="div" className={styles.blueboxs} p={2}>
                <img width='52px' sx={{ justifyContent:'center', margin:'auto',}}
                  src= {data.img1}
                  alt= {data.texto4}
                  layout="responsive"
                />
              </Box>
            </Box>
          </Box>
    </Paper>
  </Box>
  </> 
  )
}
export default function serviceSlides() {

  return (
    <Box component="div" pl={1}>
        <Swiper
          //modules={[Autoplay]}
          lazy={true}
          spaceBetween={20}
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
              slidesPerView: 1.2,
              
            },
            630:{
                slidesPerView:2.1,
                
            },
            768: {
                slidesPerView: 2,
              
            },
            991: {
                slidesPerView: 2.8,
              
            },
            1200: {
                slidesPerView: 3.6,
              
            },
          }}
        >
          <SwiperSlide> 
            <Link href="/servicios/pickup" passHref>
              <a>
              <Boxservice 
                data={{
                texto1:'FORMA DE ENTREGA', 
                texto2:'Pick Up Center', 
                texto3: 'Solo pide en línea y recoge', 
                img1:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/pickup.svg',
                texto4:'PickUp' }}
              />
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/soporte-tecnico" passHref>
              <a> 
                <Boxservice 
                  data={{texto1:'ATENCIÓN A CLIENTES',
                  texto2:'Soporte Técnico', 
                  texto3: 'Asesoría para ti y tus equipos.',
                  img1:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/tech.png',
                  texto4:'Soporte Técnico'
                }}
                />
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide> 
            <Link href="/soho/politicas/forma-de-pago" passHref>
              <a>
              <Boxservice 
                  data={{texto1:'FORMA DE PAGO',
                  texto2:'Paga al recibir', 
                  texto3:'Paga con tarjeta al momento.',
                  texto5:'CDMX  Guadalajara',
                  img1:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/paga-recibe.svg',
                  texto4:'Paga al recibir, pago contra entrega'
                }}
                  />
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/servicios/pickup" passHref>
              <a> 
              <Boxservice 
                    data={{texto1:'FORMA DE ENTREGA',
                    texto2:'Express CDMX', 
                    texto3:'3 hrs o menos ¡Solo pide!',
                    img1:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/express.svg',
                    texto4:'Servicio, entregas, express'
                  }}
              />
              </a>
            </Link>  
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/pedidosmayoreo/pedidos-mayorista" passHref>
              <a> 
                <Boxservice 
                      data={{texto1:'EMPRESAS',
                      texto2:'Precio por Volumen', 
                      texto3:'Cotiza y obtén mejoras para tu empresa',
                      img1:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/pvolumen.svg',
                      texto4:'Servicio, entregas, express'
                    }}
                />
              </a>
            </Link>
          </SwiperSlide>
        </Swiper>
    </Box>
	)
}