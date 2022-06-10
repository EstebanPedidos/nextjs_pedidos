import {useState,useEffect} from 'react'
//next js
import { useRouter } from 'next/router'
import Link from 'next/link'
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
//MUI
import {Box, Grid, Typography, Button, Card, 
    CardActionArea, CardContent, CardMedia
   } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import LoadingButton from '@mui/lab/LoadingButton';
//Funciones
import Precios from '../../services/Precios'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    media: {
        width:'90px',
        height: '90px',
        margin:'auto',
        padding: '0.8rem',
       
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
    }
}));


export  default function ItemFavorites({favoritos,add,loading}){
    const classes                   = useStyles();
    const ruter                     = useRouter()   
    const [favoritosF,setFavoritosF] = useState([])

    useEffect(()=>{
        setFavoritosF(favoritos) 
    },[favoritos])    

    return (
        <Box m={1}>
            <Box component="div" pt={2}  className={classes.root}>
                <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                    <Typography variant="h6"  component="subtitle1" color="textSecondary">
                        <Box component="span" fontWeight="fontWeightMedium">
                            Podría interesarte
                        </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box component="div" my={1}>
            {(favoritosF.length > 0)&&
                <Swiper
                   //modules={[Autoplay]}
                    lazy={true}
                    spaceBetween={10}
                    slidesPerView={4.2}
                    //centeredSlides={true}
                    //autoplay={{
                    //"delay": 2500,
                    //"disableOnInteraction": false}}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="mySwiper13"
                    breakpoints={{
                        320: {
                            slidesPerView: 2.5,
                            
                        },
                        640: {
                        slidesPerView: 3.3,
                        
                        },
                        768: {
                        slidesPerView: 3.8,
                        
                        },
                        1024: {
                        slidesPerView: 4,
                        
                        },
                    }}
                >
                 {
                favoritosF.map((item, index) => (                    
                    <SwiperSlide  key={index} className={classes.swiperBox}>
                        <Box component="div">
                            <Card className={classes.productCardC}>
                                <Link href={`/articulos/${item.url.toLowerCase()}`}>
                                <a>
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
                                        <Box component="span" fontWeight="fontWeightBold">${Precios('formatcurrency',{subtotal:item.precio,fixed:2})}</Box>
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                </a>
                                </Link>
                            <Box component="div" m={1}>
                                {                                    
                                (item.estatus==='A')?
                                    <LoadingButton sx={{borderColor:'#A6ADB9', color:'#A6ADB9'}} variant="outlined" fullWidth size="large"
                                    onClick={()=>add(item.itemNum)}
                                    loading={loading}
                                    loadingIndicator="Espera..."
                                    >
                                        <AddIcon/>
                                    </LoadingButton>
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