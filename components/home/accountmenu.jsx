
import Link from 'next/link'
import Image from 'next/image';
//MUI
import {Box,Chip, Typography, Button, } from '@mui/material';

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import { Autoplay, Lazy } from 'swiper';
import 'swiper/css';
//import 'swiper/css/navigation';
//
import 'swiper/css/pagination';
import { margin } from '@mui/system';

const Accountsection = ({data})=>{
  return(
  <>  
    {/* <Box component="div" mt={1} p={2}> */}
        
    <Button variant="text" fullWidth>
        {data.name} 
    </Button>
        
    {/* </Box> */}
        
  </> 
  )
}
export default function Menuoptions() {

  return (

    <Box component="div" pl={1} mb={1}>
        <Swiper
            //modules={[Autoplay]}
            lazy={true}
            spaceBetween={3}
            slidesPerView={6}
            className="mySwiperacc"
            //centeredSlides={true}
            //autoplay={{
            //"delay": 2500,
            //"disableOnInteraction": false}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
            320: {
                    slidesPerView:2.1,
                    
                },
                640: {
                slidesPerView: 4.5,
                
                },
                768: {
                slidesPerView:5.8,
                
                },
                1100: {
                slidesPerView: 6,
                
                },
            }}
            >
            <SwiperSlide>
                <Link href="soho/MiCuenta/Direcciones">
                    <a>
                        <Accountsection
                        data={{
                        name:'Mis Direcciones',
                        icon: '<PinDropOutlinedIcon />', 
                        }} />
                    </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="soho/MiCuenta/misFacturas">
                    <a>
                        <Accountsection
                        data={{
                        name:'Mis Facturas',
                        icon: '<PinDropOutlinedIcon />', 
                        }} />
                    </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="soho/MiCuenta/DatosFacturacion">
                    <a>
                        <Accountsection
                        data={{
                        name:'Mis RFC',
                        icon: '<PinDropOutlinedIcon />', 
                        }} />
                    </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="soho/MiCuenta/DatosFacturacion"  passHref>
                    
                    <Button component="a" onClick={() => window.open('mailto:pagos@pedidos.com.mx?subject=Garantia%20Y%20Devoluciones&body=Completar%20la%20siguiente%20información%0D%0APedido:%20%0D%0AProducto:%20%0D%0ACantidad:%20%0D%0ATelefono%20de%20Contacto:%20%0D%0AAdjuntar%20Fotos.%20%0D%0A%0D%0A%0D%0A%0D%0A')}
                     >
                         Garantías y Devoluciones
                     </Button>
                    
                </Link>
            </SwiperSlide>
            
            <SwiperSlide>
                <Link href="/soho/MiCuenta/misFavoritos">
                    <a>
                        <Accountsection
                        data={{
                        name:'Mis Favoritos',
                        icon: '<PinDropOutlinedIcon />', 
                        }} />
                    </a>
                </Link>
            </SwiperSlide>
            
            <SwiperSlide>
                <Link href="/soho/MiCuenta/MisDatos">
                    <a>
                        <Accountsection
                        data={{
                        name:'Mis Datos',
                        icon: '<PinDropOutlinedIcon />', 
                        }} />
                    </a>
                </Link>
            </SwiperSlide>

        </Swiper>
    </Box>
    
         

	)
}