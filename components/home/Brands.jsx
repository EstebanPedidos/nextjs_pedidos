
import Link from 'next/link'
import Image from 'next/image';
//MUI

import {Box, Grid, Paper, Typography, IconButton, Divider, Card, 
    CardActionArea, CardContent, CardActions,CardMedia, Avatar,
   } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
   // Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import { Autoplay, Lazy } from 'swiper';
import 'swiper/css';
//import 'swiper/css/navigation';
//
import 'swiper/css/pagination';
import { style } from '@mui/system';

const useStyles = makeStyles(() => ({
    root: {
      maxWidth: '100%',
      margin: 'auto',
    },
    content: {
      padding: 24,
    },
    avatar: {
      width: 250,
      height: 250,
      border: '2px solid #fff',
      margin: '-150px 32px 0 auto',
      '& > img': {
        margin: 0,
      },
    },
  }));

  const BrandBox = ({data})=>{
    return(
    <>  
      <Box component="div">
        <Card variant="outlined" >
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="325"
                    image={data.cover}
                    alt={data.alt}  
                />
            </CardActionArea>
            <Avatar sx={{ 
                width: 70,
                height: 70,
                border: '3px solid #fff',
                margin: '-90px 1rem auto',
                '& > img': {
                    margin: 0,}} } 
                alt={data.avataralt} src={data.imgavatar} />
            
            <CardContent>
                <Grid container alignItems="center">
                    <Grid item xs={9} >
                        <Box component="div">
                        <Typography  variant="subtitle1" component="caption" color="textSecondary">{data.introbrand} </Typography>
                            <Typography variant="h4" component="h6" sx={{fontWeight:'600'}}>{data.brandname}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <CardActions>
                        {/* <IconButton sx={{fontSize:'100px'}} size="large"> */}
                            <NavigateNextOutlinedIcon sx={{fontSize:'50px',}}/>
                        {/* </IconButton> */}
                    </CardActions> 
                    </Grid>
                </Grid>
                
            </CardContent>
        </Card>
      </Box>
          
    </> 
    )
  }
export default function TrendSlides() {
    const cardStyles = useStyles();

  return (
        <Swiper
        pagination={{
            clickable: true,
        }}
        slidesPerView={4}
        spaceBetween={15}
        className="mySwiper4"
        breakpoints={{
            320: {
                slidesPerView: 1.9,
                
              },
            630:{
                slidesPerView:2.2,
                
            },
            768: {
                slidesPerView: 3.2,
               
            },
            1024: {
                slidesPerView: 4.2,
               
            },
        }}
        >
        <SwiperSlide>
            <BrandBox 
                data={{
                    cover: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/intel.webp',
                    alt: 'Procesadores Intel',
                    imgavatar: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home22/brands/intel.png',
                    avataraalt: 'intel',
                    introbrand:'Procesadores',
                    brandname:'Intel®',

                    link:'',
                }} />
        </SwiperSlide>
        <SwiperSlide> 
            <BrandBox 
                data={{
                    cover: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/tf-hp2.jpg',
                    alt: 'Tienda Oficial HP',
                    imgavatar: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home22/brands/hp.png',
                    avataraalt: 'HP, computadora, impresión ', 
                    introbrand:'Innovación',
                    brandname:'HP',
                    link:'',
             }} />
        </SwiperSlide>
        <SwiperSlide> 
            <BrandBox 
                data={{
                    cover: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/epson-tienda.webp',
                    alt: 'Tienda Oficial Epson',
                    imgavatar: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home22/brands/epson.png',
                    avataraalt: 'Epson ', 
                    introbrand:'Impresión',
                    brandname:'EPSON',
                    link:'',
             }} />
        </SwiperSlide>
        <SwiperSlide> 
            <BrandBox 
                data={{
                    cover:'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/uniclick.png',
                    alt: 'Crédito Uniclick',
                    imgavatar: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home22/brands/uniclick.png',
                    avataraalt: 'Epson ', 
                    introbrand:'Créditoenlínea',
                    brandname:'Uniclick',
                    link:'',
             }} />
        </SwiperSlide>
        <SwiperSlide> 
            <BrandBox 
                data={{
                    cover: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/newell.png',
                    alt: 'Tienda Oficial Epson',
                    imgavatar: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home22/brands/newell.png',
                    avataraalt: 'Epson ', 
                    introbrand:'Papelería',
                    brandname:'Newell',
                    link:'',
             }} />
        </SwiperSlide>
        <SwiperSlide> 
            <BrandBox 
                data={{
                    cover:'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/3m-brand.png',
                    alt: 'Tienda Oficial Epson',
                    imgavatar: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home22/brands/3m.png',
                    avataraalt: 'Epson ', 
                    introbrand:'Soluciones',
                    brandname:'3M',
                    link:'',
             }} />
        </SwiperSlide>
        <SwiperSlide> 
            <BrandBox 
                data={{
                    cover:'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/azor-brand.png',
                    alt: 'Tienda Oficial AZOR',
                    imgavatar: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home22/brands/azor.png',
                    avataraalt: 'Productos Azor', 
                    introbrand:'Escritura',
                    brandname:'AZOR',
                    link:'',
             }} />
        </SwiperSlide>
    
        </Swiper>
	)
}