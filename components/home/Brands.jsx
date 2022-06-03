
import Link from 'next/link'
import Image from 'next/image';
//MUI
import {Box, Typography, Card ,CardActionArea, CardContent, 
    CardActions,CardMedia, Avatar,} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import styles from 'styles/Home.module.css';
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
    
  }));

  const BrandBox = ({data})=>{
    return(
    <>  
      <Box component="div"  p={1}>
        <Card variant="none" className={styles.brandcard} >
            <CardActionArea>
                <CardMedia 
                    component="img"
                    sx={{ width: 'auto', height:400,margin:'auto' }}
                    layout="cover"
                    image={data.cover}
                    alt={data.alt}  
                />
            </CardActionArea>
            <Avatar sx={{ 
                width: 100,
                height: 100,
                border: '4px solid #fff',
                margin: '-90px 1rem auto',
                '& > img': {
                    margin: 0,}} } 
                alt={data.avataralt} src={data.imgavatar} />
            
            <CardContent>
                <Box component="div" textAlign="left" ml={2}>
                    <Typography  variant="h6" component="caption" color="textSecondary">{data.introbrand} </Typography>
                    <Typography variant="h4" component="h6" sx={{fontWeight:'600'}}>{data.brandname}</Typography>
                </Box>
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
        loop={true}
        loopFillGroupWithBlank={true}
        slidesPerView={4}
        spaceBetween={20}
        className="mySwiper4"
        breakpoints={{
            320: {
                slidesPerView: 1.5,
                
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
                slidesPerView: 4,
               
            },
        }}
        >
        <SwiperSlide>
             <Link href="/apple/para-empresas">
                <a>
                    <BrandBox 
                        data={{
                            cover: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/aar.png',
                            alt: 'Apple at Work, Pedidos.com',
                            imgavatar: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home22/brands/applear.png',
                            avataraalt: 'Apple Authorized Reseller',
                            introbrand:'Diseñadospara',
                            brandname:'Las empresas',

                            link:'',
                        }} />
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="/busquedas.asp?/TECNOLOGIA/COMPUTO&p=INTEL-CORE-I5&p=INTEL-CORE-I3&p=INTEL-CORE-I7&p=INTEL-CELERON&p=INTEL-PENTIUM&p=INTEL-CORE--I3&p=INTEL-CORE-I3-1115G4">
                    <a>
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
                    </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="/tienda-oficial-hp">
                <a> 
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
                </a>
             </Link>
        </SwiperSlide>
        <SwiperSlide> 
            <Link href="/tienda-epson.asp">
                <a>
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
                 </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide> 
            <Link href="/uniclick">
                <a>
                    <BrandBox 
                        data={{
                            cover:'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/uniclick.png',
                            alt: 'Crédito Uniclick',
                            imgavatar: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home22/brands/uniclick.png',
                            avataraalt: 'uniclick', 
                            introbrand:'Crédito',
                            brandname:'Uniclick',
                            link:'',
                    }} />
                </a>
             </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="/newell.asp">
                <a> 
                    <BrandBox 
                        data={{
                            cover: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/newell.png',
                            alt: 'Tienda Oficial newell',
                            imgavatar: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home22/brands/newell.png',
                            avataraalt: 'Newell brands ', 
                            introbrand:'Papelería',
                            brandname:'Newell',
                        
                    }} />
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide> 
            <Link href="/3m.asp">
                <a> 
                    <BrandBox 
                        data={{
                            cover:'https://pedidos.com/myfotos/Pedidos-com/pagina/home19/tiendas/3m-brand.png',
                            alt: '3m ciencua aplicada a tu vida',
                            imgavatar: 'https://pedidos.com/myfotos/Pedidos-com/pagina/home22/brands/3m.png',
                            avataraalt: '3m ', 
                            introbrand:'Soluciones',
                            brandname:'3M',
                            
                    }} />
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="/azor.asp">
                <a> 
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
                </a>
            </Link>
        </SwiperSlide>
    
        </Swiper>
	)
}