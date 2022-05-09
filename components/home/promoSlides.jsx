
import Link from 'next/link'
import Image from 'next/image';
//MUI
import {Box, Typography, } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import { Autoplay, Lazy } from 'swiper';
import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';

export default function promoSlides() {

  return (
    <Box textAlign="center" py={1} >
        <Swiper
        modules={[Autoplay]}
        lazy={true}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        /* autoplay={{
        "delay": 2500,
        "disableOnInteraction": false}} */
       
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide> 
          <Typography variant="subtitle1">
            Hasta 18 MESES SIN INTERESES con tarjetas participantes.
          </Typography>
        </SwiperSlide>
        <SwiperSlide> 
          <Typography variant="subtitle1">
            {/* Meses Sin Intereses en compras mayores a $500 MXN. <a class="t-underline c-white" href="/meses-sin-intereses.asp" target="_blank">Consulta tarjetas participantes.</a> */}
          </Typography>
        </SwiperSlide>
        <SwiperSlide> 
          <Typography variant="subtitle1">
            HASTA 24 MSI con tarjetas de crédito Citibanamex participantes en tus compras.
          </Typography>
        </SwiperSlide>

        </Swiper>
    </Box>
	)
}