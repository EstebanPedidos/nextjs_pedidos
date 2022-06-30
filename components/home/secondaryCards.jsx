
import Link from 'next/link'
import Image from 'next/image';
//MUI
import {Box, Grid, Paper, Typography, Button, Card, 
  CardActionArea, CardContent, CardActions,CardMedia
 } from '@mui/material';
 import styles from 'styles/Home.module.css';
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

const Boxsecondarycard = ({data})=>{
  return(
  <>
    <Box component="div" py={2}>
        <Box component="div" px={1}>
            <Card variant={0}  className={styles.sbox} sx={{ display: 'flex', justifyContent:'space-between'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Box component="div" mt={4} ml={2} textAlign="left" >
                            <Typography variant="h4"  component="h2" sx={{fontWeight:'600'}}>
                                    {data.titulo}
                                <Box component="span" sx={{color:'#f1861c'}}>
                                    {data.precio}
                                </Box>
                            </Typography>  
                            <Typography variant="h6" component="p" sx={{fontWeight:'500'}}>
                                {data.subtitle}
                            </Typography>
                            <Typography variant="subtitle1" component="p" color="textSecondary">
                                {data.text1} 
                            </Typography>
                        </Box>
                    </CardContent>
                
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 'auto', height:250 }}
                    image= {data.imgcard}
                    alt= {data.keyw}
                    objectPosition="right"   
                />
            </Card>
        </Box>
    </Box>
        
  </> 
  )
}
export default function SecondaryCards() {

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={6} >
            <Link href="/busquedas?/PAPEL/PAPEL-PARA-IMPRESION&d=true">
                <a>
                <Boxsecondarycard 
                    data={{
                    titulo:'Desde ',
                    precio:'$1,159', 
                    subtitle: 'Papel Bond PAPERLINE ', 
                    text1:'Caja con 10 Resmas de 500 HOJAS c/u',
                    imgcard:'https://pedidos.com/myfotos/pedidos-com/pagina/home21/principales/SAJ-PAP-REPROG.png',
                    keyw:'Productos para oficina, papelería, papel, cajas de papel, resma de papel' }}
                />				
                </a>
            </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} >
            <Link href="/categorias/tecnologia/computo">
                <a>
                <Boxsecondarycard 
                    data={{
                    titulo:'Todo en Cómputo',
                    subtitle: 'Encuentra el equipo perfecto para ti. ', 
                    imgcard:'https://pedidos.com/myfotos/pedidos-com/pagina/home21/principales/computo-pedidos-xs.png',
                   keyw:'cómputo, hardware, laptops, all in one, aio, tablets' }}
                />				
                </a>
            </Link>
        </Grid>
    </Grid>
         

	)
}