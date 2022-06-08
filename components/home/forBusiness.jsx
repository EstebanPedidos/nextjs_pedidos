
import Link from 'next/link'
import Image from 'next/image';
//MUI
import {Container, Box, Typography, Button,Card,CardActionArea, 
CardContent, CardActions,CardMedia, Hidden} from '@mui/material';
import styles from 'styles/Home.module.css';
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import { Autoplay, Lazy, FreeMode } from 'swiper';
import 'swiper/css';
//import 'swiper/css/navigation';
import "swiper/css/free-mode";
import 'swiper/css/pagination';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
const Businessoption = ({data})=>{
    return(
    <>
        <Box component="div" my={4} p={2}>
                <Card variant={0} className={styles.forbusinessbox} sx={{ display: 'flex', position:'relative', height:425, borderRadius:'30px', }}>
                    <CardActionArea>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
                            <CardContent>                       
                                    <Box component="div" px={3} py={2} className={styles.businessboxcontent}>
                                        <Typography variant="h6" component="subtitle1" > {data.intro}</Typography>
                                        <Typography variant="h3" mt={3} component="h6" className={styles.btitle} sx={{fontWeight:'600'}}> {data.title}</Typography>
                                        <Hidden smDown>
                                            <Box component="div" pt={4}>
                                                <CardActions>
                                                    <Button variant="outlined" size="large">
                                                        {data.cta}
                                                    </Button>
                                                </CardActions>
                                            </Box>
                                        </Hidden>
                                    </Box>  
                            </CardContent>
                        </Box>
                        <CardMedia component="img" className={styles.businessimg} 
                                sx={{ width: 'auto', position:'absolute', bottom:'2rem', right:'2rem'}}
                                image={data.imgb}
                                alt={data.kw} 
                        />
                    </CardActionArea>
                </Card>
        </Box>
    </> 
    )
  }
export default function TrendSlides() {
  return (
    <Box py={4} sx={{ background:'#f6f7f9' }}>
        <Container maxWidth="xl">
            <Swiper
            //modules={[Autoplay]}
            lazy={true}
            freeMode={true}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={true}
            //autoplay={{
            //"delay": 2500,
            //"disableOnInteraction": false}}
            className="mySwiper5"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide> 
                <Link href="/apple/para-empresas">
                    <a>
                    <Businessoption 
                        data={{
                        intro:'Apple at Work ',
                        title: 'Una experiencia como ninguna otra.', 
                        cta:'Conocer',
                        imgb:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/empresas/aar-business.png',
                        keyw:'Apple at Work, Pedidos.com' }}
                    />				
                    </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="/Soho/cliente/planes-de-proteccion">
                    <a>
                    <Businessoption sx={{ backgroundColor:'#3655a5',}}
                        data={{
                        intro:'Planes Pedidos.com ',
                        title: 'Protecciones para dispositivos', 
                        cta:'Ver Detalles',
                        imgb:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/empresas/planes-proteccion2.png',
                        keyw:'Protecciones y garantías' }}
                    />				
                    </a>
                </Link> 
            </SwiperSlide>
            <SwiperSlide> 
                <Link href="/Soho/cliente/planes-de-proteccion">
                        <a>
                        <Businessoption sx={{ backgroundColor:'#757575',}}
                            data={{
                            intro:'Mejoras de precio ',
                            title: 'Precios por volumen', 
                            cta:'Ver Detalles',
                            imgb:'https://pedidos.com/myfotos/pedidos-com/pagina/home22/empresas/precios-volumen.png',
                            keyw:'Precios por volumen' }}
                        />				
                        </a>
                </Link>
            </SwiperSlide>
            </Swiper>
        </Container>
    </Box>
	)
}