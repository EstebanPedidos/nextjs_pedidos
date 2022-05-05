
import Link from 'next/link'
import Image from 'next/image';
//MUI
import {Box, Grid, Paper, Typography, Button, Divider, Card, 
    CardActionArea, CardContent, CardActions,CardMedia, Avatar,
   } from '@mui/material';
import { Banners } from './banners';
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import { Autoplay, Pagination, Navigation, Lazy } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const items = [
	{
		image: 'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210.png',
		alt: 'Impresion EPSON',
		
	},
	{
		image: 'https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/laptops-hp-pavilion-inteli5.png',
		alt: 'Laptops HP',
	},
	
];


function Bannner (props) {
	return  (
		<Box>
			<img 
			src={props.img}
			srcSet="
				https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210-xs.png 800w,
				https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210-l.png 1200w,
				https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210.png 1600w,
				"
			alt={props.img}
			layout="fill"
			objectFit="cover"
			objectPosition="bottom center"

			/>
		</Box>

	);
}

export default function MainSlideShow() {

  return (
			<Swiper
				modules={[Lazy, Pagination, Navigation]}
				navigation
				lazy={true}
				spaceBetween={10}
				slidesPerView={1}
				centeredSlides={true}
				pagination={{
					"clickable": true
				  }}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}>
				<SwiperSlide> 

                    <a class="bannerlin" href="/busquedas.asp?query=impresora+epson" aria-label="impresion">
					<Box component="div">
						<img src="https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210.png"
						srcSet="
						https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210-xs.png 800w,
						https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210-l.png 1200w,
						https://pedidos.com/myfotos/pedidos-com/pagina/home22/banners/impresion-epson-ecotank-l3210.png 1600w,"
						//sizes="(min-width: 767px) 33vw, (min-width: 568px) 50vw, 100vw "
						layout="fill"
						objectFit="cover"
						objectPosition="bottom center"/>
					</Box>   
					<Box component="div">
						<div class="content">
							<p class="titleb l-spacen1"><span class="c-blue">$4,175</span></p>
							<p class="caption2 l-spacen1 opacity-80">
								<span data-swiper-parallax="-20%">Multifuncional EPSON EcoTank L3210</span>
								<br/>
								<span class="opacity-70 f500 c-grayxs"> Inyección de tinta Heat Free </span>
							</p> 
							<p class="caption2 l-spacen1 pt-12 hidden" >
								<span class="msibluesquare" data-swiper-parallax="-20%"> <span class="f500 fs15"><span></span></span></span>
							</p>  
						</div>
					</Box>
						</a>
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
			</Swiper>
	)
}