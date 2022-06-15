import {useState} from 'react';
import {Container,Box, Grid} from '@mui/material';
import styles from '../../../styles/pdpgallery.module.css'
//Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Thumbs, FreeMode, Lazy, } from 'swiper'
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/thumbs";
import YouTube from 'react-youtube';
import { ClassNames } from '@emotion/react';

export default function Carrusel({item_num,indice,links}){
    const [thumbsSwiper, setThumbsSwiper]   = useState(null);
    const opts          = {height: '450px',width: '100%', margin:'auto',playerVars: {autoplay: 1,},}

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }
    return (
        <>
        <Container maxWidth="lg">
            <Box  px={2} sx={{width:'95%', margin:'auto'}} justifyContent='center' alignContent='center'>
                <Swiper 
                style={{
                "--swiper-navigation-color": "#507EF2",
                "--swiper-pagination-color": "#507EF2",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                centeredSlides={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
                initialSlide={(indice)?indice:0}
                >
                    <SwiperSlide>
                        <Box component="div" pt={8} justifyContent="center" m="auto" sx={{justifyContent: "center", display: "flex" }}>
                            <img className={styles.imgC}  src={`https://pedidos.com/myfotos/xLarge/(X)${item_num}.webp`}  alt={item_num} />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>  
                        <Box component="div" pt={8} justifyContent="center" m="auto" sx={{justifyContent: "center", display: "flex" }}>                  
                            <img className={styles.imgC}  layout="responsive" src={`https://pedidos.com/myfotos/xLarge_v2/(v2)(X)${item_num}.webp`}  alt={item_num} />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>  
                        <Box component="div" pt={8} justifyContent="center" m="auto" sx={{justifyContent: "center", display: "flex" }}>                  
                            <img className={styles.imgC}  layout="responsive" src={`https://pedidos.com/myfotos/xLarge_v3/(v3)(X)${item_num}.webp`}  alt={item_num} />
                        </Box>
                    </SwiperSlide>  
                    {(links)&&
                    (links !== '')&&
                        links.split(',').map((link, index) => (
                            <SwiperSlide key={index}>  
                                <Box component="div" p={6} alignItems="center" sx={{backgroundColor:'#000000',borderRadius:'8px'}}>
                                    <YouTube videoId={(link.includes('='))?link.substring(link.lastIndexOf('=')+1,link.length):link.substring(link.lastIndexOf('/')+1,link.length)} opts={opts} onReady={onPlayerReady}/> 
                                </Box>
                            </SwiperSlide>
                        ))
                    }                                                                                                        
                </Swiper>
                <Swiper style={{margin:'10px' }}
                    onSwiper={setThumbsSwiper}                                                        
                    spaceBetween={0}
                    slidesPerView={6}
                    watchSlidesProgress={true}
                    modules={[ Navigation, Thumbs]}
                    className="mySwiper3"
                    initialSlide={(indice)?indice:0}
                    breakpoints={{
                        320: {
                            slidesPerView: 2.9,
                            
                        },
                        640: {
                        slidesPerView: 3.1,
                        
                        },
                        768: {
                        slidesPerView: 4.3,
                        
                        },
                        1024: {
                        slidesPerView: 4.8,
                        
                        },
                    }}
                >
                    <SwiperSlide>
                        <img width={'90px'}  height={'90px'} layout="responsive" src={`https://pedidos.com/myfotos/${item_num}.webp`}  alt={item_num} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width={'90px'}  height={'90px'} layout="responsive" src={`https://pedidos.com/myfotos/v2/(v2)${item_num}.webp`} alt={item_num}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width={'90px'}  height={'90px'} layout="responsive" src={`https://pedidos.com/myfotos/v3/(v3)${item_num}.webp`} alt={item_num}/>
                    </SwiperSlide>  
                    {(links)&&
                    (links !== '')&&
                        links.split(',').map((link, index) => (
                            <SwiperSlide key={index}>  
                                <img width={'90px'}  height={'100%'} layout="responsive" src={`https://img.youtube.com/vi${(link.includes('='))?link.substring(link.lastIndexOf('='),link.length):link.substring(link.lastIndexOf('/'),link.length)}/0.jpg`} alt={item_num}/>
                            </SwiperSlide>
                        ))
                    }                                                      
                </Swiper>
            </Box>
            </Container>
        </>
    )
}