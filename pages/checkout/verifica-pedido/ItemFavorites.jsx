import React,{useState,useEffect} from 'react';
//next js
import { useRouter } from 'next/router'
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

//Paquetes Material
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
//Funciones
import Precios from '../../services/Precios'
//Servicos
import Services from '../../services/Services'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    media: {
        width:'90px',
        height: '90px',
        margin:'auto',
       
    },
    productCardC: {  
         boxShadow: '0px 0px 16px rgb(54 85 166 / 8%), 0px 1px 4px rgb(54 85 166 / 8%)',          
        },
    swiperBox: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1), 
        paddingLeft: "0.3rem",         
        },
    boxTitleIF:{
        height: "20px",
        overflow: "hidden",
    }
}));


export  default function ItemFavorites({favoritos,add}){
    const classes                   = useStyles();
    const ruter                     = useRouter()       

    return (
        <Box m={1}>
            <Box component="div" pt={2}  className={classes.root}>
                <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                    <Typography  component="subtitle1" color="textSecondary">
                        <Box component="span" fontWeight="fontWeightMedium">
                            Podría interesarte
                        </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box component="div" m={1}>
            {(favoritos.length > 0)&&
                <Swiper
                    spaceBetween={15}
                    slidesPerView={4}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={swiper => console.log(swiper)}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                          slidesPerView: 2.2,
                          
                        },
                        768: {
                          slidesPerView: 3.3,
                          
                        },
                        1024: {
                          slidesPerView: 4,
                         
                        },
                    }}
                    >
                 {
                favoritos.map((item, index) => (
                    <SwiperSlide className={classes.swiperBox}>
                        <Box component="div" key={index}>
                            <Card className={classes.productCardC}>
                                <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`https://pedidos.com/myfotos/${item.itemNum}.jpg`}
                                    title={item.tituloCompuesto}
                                    alt={item.tituloCompuesto}
                                />
                                <CardContent>
                                    <Typography className={classes.boxTitleIF} variant="caption" display="block" gutterBottom color="textPrimary">
                                    {(item.tituloCompuesto !== '')&&(item.tituloCompuesto.length > 20)?item.tituloCompuesto.substring(0,20)+' ...':item.tituloCompuesto.length}
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom color="textPrimary">
                                        <Box component="span" fontWeight="fontWeightBold">{Precios('formatcurrency',{subtotal:item.precio,fixed:2})}</Box>
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            <Box component="div" m={1}>
                                {                                    
                                (item.estatus==='A')?
                                    <Button variant="outlined" fullWidth size="large"  onClick={()=>add(item.itemNum)}>
                                        <AddIcon/>
                                    </Button>
                                    :
                                    <Button variant="outlined" color="secondary" fullWidth size="large">
                                        <DoneIcon/>
                                    </Button>
                                }
                            </Box>
                            </Card>
                        </Box>
                    </SwiperSlide>
                    ))
                }
                </Swiper>
                
            } 
            </Box>
        </Box>
    )
}