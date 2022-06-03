import React,{useState,useEffect} from 'react';
//next js
import { useRouter } from 'next/router';
import Link from 'next/link';
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
//MUI
import { Box, Typography, Button, Card, 
    CardActionArea, CardContent, CardActions,CardMedia, Divider, 
   } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import styles from 'styles/Home.module.css';

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
    },
    
}));
const Productcard = ({data})=>{
    return(
    <>
  
        <Box>
            <Card variant='transparent' className={styles.productbox}>
                <CardActionArea  to={data.productlink} >
                    <CardMedia sx={{height:'180px', width:'180px', margin:'auto', padding: '0.8rem',}}
                    image= {data.productImg}
                    onError="this.onerror=null;this.src='https://pedidos.com/myfotos/xLarge/(X)logitinPed.webp'"
                    alt={data.keyw}
                    title={data.keyw1}
                    />
                    <CardContent>
                    <Divider light />
                    <Box  mt={2}  component="div" >
                        <Typography variant="subtitle1"  textAlign="left"  gutterBottom > {data.productBrand} </Typography>
                        <Typography sx={{ height:'35px', overflow: 'hidden'}}
                            variant="body2"
                            color="textSecondary"
                            component="p">
                            {data.title}
                        </Typography>
                    </Box>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    
                    <Button
                    size="medium"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    >
                        
                            Ver Detalle
                            
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
        spaceBetween={20}
        slidesPerView={4.2}
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
              slidesPerView: 4,
             
            },
        }}
        >
        
        <SwiperSlide className={classes.swiperBox}>
            <Link href="/articulos/boligrafo-bic-cristal-color-negro-punto-mediano-12-piezas" >
                <a>
                    <Box component="div">
                        <Productcard data={{
                            productBrand: 'BIC', 
                                productImg:'https://pedidos.com/myfotos/large/(L)BIC-BOL-M250CN.jpg',
                                keyw:'BIC, papelería',
                                keyw1:'Bic, papelería',
                                title:'BOLIGRAFO BIC CRISTAL COLOR NEGRO PUNTO MEDIANO 12 PIEZAS',
                                
                            }}
                        />
                    </Box>
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperBox}>
            <Link href="/articulos/protector-de-hojas-kinera-tamano-carta-traslucido-1-paquete-con-100-pzas" >
                <a>
                    <Box component="div">
                        <Productcard data={{
                            productBrand: 'AZOR', 
                                productImg:'https://pedidos.com/myfotos/large/(L)AZO-PRH-360.jpg',
                                keyw:'Azor, papelería',
                                keyw1:'Azor, papelería',
                                title:'PROTECTOR DE HOJAS KINERA TAMANO CARTA TRASLUCIDO 1 PAQUETE CON 100 PZAS',
                            }}
                        />
                    </Box>
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperBox}>
            <Link href="/articulos/papel-ecobond-carta-70g-blancura-9" >
                <a>
                    <Box component="div">
                        <Productcard data={{
                            productBrand: 'COPAMEX', 
                                productImg:'https://pedidos.com/myfotos/large/(L)COP-PAP-ECOBN70.jpg',
                                keyw:'Compamex, papel',
                                keyw1:'Copamex, papel',
                                title:'PAPEL ECOBOND CARTA 70G BLANCURA 95',
                            }}
                        />
                    </Box>
                </a>
            </Link>
        </SwiperSlide> 
        <SwiperSlide  className={classes.swiperBox}>
            <Link href="/articulos/multifuncional-epson-ecotank-l3250-inyeccion-de-tinta-heat-free-conectividad-usb--wifi-">
                <a>
                    <Box component="div">
                        <Productcard data={{
                            productBrand: 'EPSON', 
                                productImg:'https://pedidos.com/myfotos/large/(L)EPS-MFC-L3250.jpg',
                                keyw:'EPSON, Impresión',
                                keyw1:'EPSON, Impresión',
                                title:'MULTIFUNCIONAL EPSON ECOTANK L3250 INYECCION DE TINTA HEAT FREE CONECTIVIDAD USB WIFI',
                            }}
                        />
                    </Box>
                </a>
            </Link>
        </SwiperSlide>   
        <SwiperSlide  className={classes.swiperBox}>
            <Link href="/articulos/tinta-epson-t664120-al-t664120-al-color-negro" >
                <a>
                    <Box component="div">
                        <Productcard data={{
                            productBrand: 'EPSON', 
                                productImg:'https://pedidos.com/myfotos/large/(L)EPS-TIN-T664120.jpg',
                                keyw:'EPSON, tintas',
                                keyw1:'EPSON, tintas',
                                title:'TINTA EPSON T664120 AL T664120 AL COLOR NEGRO',
                            }}
                        />
                    </Box>
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide  className={classes.swiperBox}>
            <Link href="/articulos/tinta-hp-954-xl-alto-rendimiento-cyan">
                <a>
                    <Box component="div">
                        <Productcard data={{
                            productBrand: 'HP', 
                                productImg:'https://pedidos.com/myfotos/large/(L)HP-TIN-L0S62AL.jpg',
                                keyw:'HP, tintas',
                                keyw1:'HP, tintas',
                                title:'TINTA HP 954 XL ALTO RENDIMIENTO CYAN',
                            }}
                        />
                    </Box>
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide  className={classes.swiperBox}>
            <Link href="/articulos/memoria-usb-3-2-kingston-data-traveler-exodia-de-32-gb-color-negro">
                <a>
                    <Box component="div">
                        <Productcard data={{
                            productBrand: 'KINGSTON', 
                                productImg:'https://pedidos.com/myfotos/large/(L)ME-KIN-DTX32GB.jpg',
                                keyw:'KINGSTON, Accesorios',
                                keyw1:'KINGSTON, Accesorios',
                                title:'MEMORIA USB 3 2 KINGSTON DATA TRAVELER EXODIA DE 32 GB COLOR NEGRO',
                            }}
                        />
                    </Box>
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide  className={classes.swiperBox}>
            <Link href="/articulos/laptop-hp-245-g8-procesador-amd-athlon-3050u-ram-4-gb-dd-500-gb-14-pulgadas-windows-10-home">
                <a>
                    <Box component="div">
                        <Productcard data={{
                            productBrand: 'HP', 
                                productImg:'https://pedidos.com/myfotos/large/(L)HP-LAP-4D231LT.jpg',
                                keyw:'HP, Laptop',
                                keyw1:'HP, Laptop',
                                title:'LAPTOP HP 245 G8 PROCESADOR AMD ATHLON 3050U RAM 4 GB DD 500 GB 14 PULGADAS WINDOWS 10 HOME',
                            }}
                        />
                    </Box>
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide  className={classes.swiperBox}>
            <Link href="/articulos/toalla-interdoblada-sanitas-92231-de-100-hojas-dobles-20-paquetes">
                <a>
                    <Box component="div">
                        <Productcard data={{
                            productBrand: 'SANITAS', 
                                productImg:'https://pedidos.com/myfotos/large/(L)LKC-TOAI-92231.jpg',
                                keyw:'SANITAS, Limpieza',
                                keyw1:'SANITAS, Limpieza',
                                title:'TOALLA INTERDOBLADA SANITAS 92231 DE 100 HOJAS DOBLES 20 PAQUETES',
                            }}
                        />
                    </Box>
                </a>
            </Link>
        </SwiperSlide>
         
        </Swiper>
    
	)
}