
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
    
    <Box component="div" mt={1} pb={2}>
        <Paper elevation={8}  sx={{padding: '1rem',}}>
            <Box component="div" sx={{position:'relative', height:'200px'}}>
                <Grid container justifyContent="space-between" alignItems="center">
					<Grid item xs={8} md={8}>
                        <Box component="div" textAlign="left" sx={{position: 'absolute', top: 0,left: 0,display: 'block',}}>
                        
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
                        {data.text} 
                        </Typography>
                        </Box> 
                    </Grid>
                    <Grid item xs={4} md={4}>
                       
                        <img 
                            src= {data.imgcard}
                            alt= {data.texto4}
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
        <Grid item xs={6} >
            <Link href="/">
                <a>
                <Boxsecondarycard 
                    data={{
                    titulo:'Desde ',
                    precio:'$999', 
                    subtitle: 'Papel Bond PAPERLINE ', 
                    text:'Caja con 10 Resmas de 500 HOJAS c/u',
                    text:'Productos para oficina, papelería, papel, cajas de papel, resma de papel' }}
                />				
                </a>
            </Link>
        </Grid>
        <Grid item xs={6} >
            <Link href="/posts/first-post">
                <a>
                <Boxsecondarycard 
                    data={{
                    titulo:'Encuentra tu computadora ',
                    
                    subtitle: 'variedad de opciones para tu día a día. ', 
                   
                   
                    text:'Productos para oficina, papelería, papel, cajas de papel, resma de papel' }}
                />				
                </a>
            </Link>
        </Grid>
    </Grid>
         

	)
}