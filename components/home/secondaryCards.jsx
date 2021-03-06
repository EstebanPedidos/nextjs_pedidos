
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

const Boxsecondarycard = ({data})=>{
  return(
  <>
    
    <Box component="div" mt={1} p={2}>
        <Paper elevation={8}>
            <Box component="div" sx={{position:'relative'}}>
                <Grid container justifyContent="space-between" alignItems="center">
					<Grid item xs={12} sm={6} md={6} lg={7}>
                        <Box component="div" textAlign="left" p={4} >
                        
                        <Typography variant="h5" component="h2" sx={{fontWeight:'600'}}>
                            {data.titulo}
                        <Box component="span" sx={{color:'#f1861c'}}>
                            {data.precio}
                        </Box>
                        </Typography>
                        
                        <Typography variant="subtitle1" sx={{fontWeight:'500'}}>
                        {data.subtitle}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                        {data.text1} 
                        </Typography>
                        </Box> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={5}>
                        <img 
                            src= {data.imgcard}
                            alt= {data.keyw}
                            layout="fill"
                        />
                    </Grid>
                </Grid>                    
            </Box>
        </Paper>
    </Box>
        
  </> 
  )
}
export default function SecondaryCards() {

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={6} >
            <Link href="/">
                <a>
                <Boxsecondarycard 
                    data={{
                    titulo:'Desde ',
                    precio:'$999', 
                    subtitle: 'Papel Bond PAPERLINE ', 
                    text1:'Caja con 10 Resmas de 500 HOJAS c/u',
                    imgcard:'https://pedidos.com/myfotos/pedidos-com/pagina/home21/principales/paperline-xs.png',
                    keyw:'Productos para oficina, papeler??a, papel, cajas de papel, resma de papel' }}
                />				
                </a>
            </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} >
            <Link href="/">
                <a>
                <Boxsecondarycard 
                    data={{
                    titulo:'Encuentra tu computadora ',
                    subtitle: 'variedad de opciones para tu d??a a d??a. ', 
                    imgcard:'https://pedidos.com/myfotos/pedidos-com/pagina/home21/principales/computo-pedidos-xs.png',
                   keyw:'c??mputo, hardware, laptops, all in one, aio, tablets' }}
                />				
                </a>
            </Link>
        </Grid>
    </Grid>
         

	)
}