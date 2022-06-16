import React, { useState, useEffect } from 'react';

//MUI
import {Box, Grid, Avatar, Paper, Typography, Hidden,
    Button, Divider, Modal, Backdrop,
    Fade, FadeCard, } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { makeStyles } from '@material-ui/core/styles';
//Modales
import  Help  from '../components/modals/Help';
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Lazy, Pagination } from 'swiper';
import 'swiper/css';

//Nextjs
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		position: 'absolute',
		backgroundColor: theme.palette.background.paper,
		borderRadius: '8px',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		margin: theme.spacing(2),
	},
	bgcontent: {
		backgroundImage:
			'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)',
		// background: '#F7F7F9',
	},
	opacityBox: {
		opacity: '0.40',
	},
}));
const Accountsection = ({data})=>{
    return(
    <>  
      {/* <Box component="div" mt={1} p={2}> */}
          
      <Button variant="text" fullWidth>
          {data.name} 
      </Button>
          
      {/* </Box> */}
          
    </> 
    )
  }
export default function MiCuentaSiderBar() {
	const classes = useStyles();

	const [nombre, setNombre] = React.useState('');
	const [open, setOpen] = React.useState(false);
	const [modal, setModal] = React.useState('');

	useEffect(() => {
		setNombre(localStorage.getItem('Usu_Nomb'));
	}, [nombre]);

	const handleOpen = (event) => {
		const name = event.target.name;
		setModal(name);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Box component="div"  m={1} px={1}>
                <Hidden mdDown>
                    <Box component="div" py={2} >
                    <Box component="div" textAlign="center" m="auto" p={2}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                            
                            >
                            <Grid item>
                                <Avatar>
                                    <AccountCircleOutlinedIcon />
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Typography component="h2" variant="h6">{nombre}</Typography>
                            </Grid>
                        </Grid>
                    </Box>   
                    <Divider light/>
                        <Grid
                        container
                        //direction="row"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={2}
                    
                        >
                            <Grid item xs={12} >
                                <Box component="div" textAlign="left" m="auto" p={2}>
                                    <Typography variant="caption" color="textSecondary">MI CUENTA</Typography>
                                </Box>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                    <Link href="/soho/MiCuenta/MisDatos">
                                        <a>
                                            <Grid
                                            container
                                            direction="row"
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            spacing={1}
                                            >
                                                <Grid item>
                                                    <SettingsOutlinedIcon/>
                                                </Grid> 
                                                <Grid item>
                                                    <Box component="span">Mis datos</Box>
                                                </Grid>
                                            </Grid>
                                        </a>
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                    <Link href="/soho/MiCuenta/MisPedidos">
                                        <a>
                                            <Grid
                                            container
                                            direction="row"
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            spacing={1}
                                            >
                                                <Grid item>
                                                    <Inventory2OutlinedIcon/>
                                                </Grid> 
                                                <Grid item>
                                                    <Box component="span">Pedidos</Box>
                                                </Grid>
                                            </Grid>
                                        </a>
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                    <Link href="/soho/MiCuenta/Direcciones">
                                        <a>
                                            <Grid
                                            container
                                            direction="row"
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            spacing={1}
                                            >
                                                <Grid item>
                                                    <FmdGoodOutlinedIcon/>
                                                </Grid> 
                                                <Grid item>
                                                    <Box component="span">Direcciones</Box>
                                                </Grid>
                                            </Grid>
                                        </a>
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                    <Link href="/soho/MiCuenta/misFacturas">
                                        <a>
                                            <Grid
                                            container
                                            direction="row"
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            spacing={1}
                                            >
                                                <Grid item>
                                                    <DescriptionOutlinedIcon/>
                                                </Grid> 
                                                <Grid item>
                                                    <Box component="span">Facturas</Box>
                                                </Grid>
                                            </Grid>
                                        </a>
                                    </Link>
                                </Typography>
                            </Grid>
                            {/* <Grid item sm={12}>
                                <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                    <Link href="/MisFacturas">
                                        <a>
                                            <Grid
                                            container
                                            direction="row"
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            spacing={1}
                                            >
                                                <Grid item>
                                                    <DescriptionOutlinedIcon/>
                                                </Grid> 
                                                <Grid item>
                                                    <Box component="span">Garantías y Devoluciones</Box>
                                                </Grid>
                                            </Grid>
                                        </a>
                                    </Link>
                                </Typography>
                            </Grid> */}
                            <Grid item sm={12}>
                                <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                    <Link href="/soho/MiCuenta/misFavoritos">
                                        <a>
                                            <Grid
                                            container
                                            direction="row"
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            spacing={1}
                                            >
                                                <Grid item>
                                                    <FavoriteBorderIcon/>
                                                </Grid> 
                                                <Grid item>
                                                    <Box component="span">Favoritos</Box>
                                                </Grid>
                                            </Grid>
                                        </a>
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                    <Link href="/soho/MiCuenta/misNotasCredito">
                                        <a>
                                            <Grid
                                            container
                                            direction="row"
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            spacing={1}
                                            >
                                                <Grid item>
                                                    <ReceiptOutlinedIcon/>
                                                </Grid> 
                                                <Grid item>
                                                    <Box component="span">Notas de crédito</Box>
                                                </Grid>
                                            </Grid>
                                        </a>
                                    </Link>
                                </Typography>
                            </Grid>
                        
                        </Grid>
                    </Box>
                    <Divider />
                        <Box component="divider" py={2}>
                        <Box component="div" py={1}>
                            <Button startIcon={<ShuffleIcon />} onClick={() => window.open('mailto:pagos@pedidos.com.mx?subject=Garantia%20Y%20Devoluciones'
                                                +'&body=Completar%20la%20siguiente%20información%0D%0A'+
                                                'Pedido:%20%0D%0AProducto:%20%0D%0ACantidad:%20%0D%0ATelefono%20de%20Contacto:%20%0D%0AAdjuntar%20Fotos.%20%0D%0A%0D%0A%0D%0A%0D%0A')}>
                                Garantías & Devoluciones
                            </Button>
                            <br/>
                            <Button startIcon={<FeedbackOutlinedIcon />}
                                onClick={() => window.open('mailto:quejas@pedidos.com.mx?subject=Queja%20sobre')}
                            >
                                Levantar queja
                            </Button>
                        </Box>   
                        <Divider />
                        <Box component="div" pt={3} >
                            <Box component="div" pb={2}>
                                <Help tipo={'3'}/>
                            </Box>
                            <Box component="div" >
                                <Link href="/soho/MiCuenta/MisNotasCredito">
                                    <a>
                                        <Button startIcon={<LogoutOutlinedIcon />} variant="outlined" color="primary" fullWidth size="large" name="editarDatos" >Cerrar sesión</Button>
                                    </a>
                                </Link>
                            </Box>
                            
                        </Box>
                        </Box>
                </Hidden> 
                <Hidden mdUp>
                    <Swiper
                //modules={[Autoplay]}
                lazy={true}
                slidesPerView={6}
                className="mySwiperacc"
                //centeredSlides={true}
                //autoplay={{
                //"delay": 2500,
                //"disableOnInteraction": false}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                320: {
                        slidesPerView:2.1,
                        
                    },
                    640: {
                    slidesPerView: 3.5,
                    
                    },
                    768: {
                    slidesPerView:3.5,
                    
                    },
                    1100: {
                    slidesPerView:3.8,
                    
                    },
                }}
                >
                <SwiperSlide>
                    <Link href="/soho/MiCuenta/MisDatos">
                        <a>
                            <Accountsection
                            data={{
                            name:'Mis Datos',
                            icon: '<PinDropOutlinedIcon />', 
                            }} />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="soho/MiCuenta/Direcciones">
                        <a>
                            <Accountsection
                            data={{
                            name:'Mis Direcciones',
                            icon: '<PinDropOutlinedIcon />', 
                            }} />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="soho/MiCuenta/misFacturas">
                        <a>
                            <Accountsection
                            data={{
                            name:'Mis Facturas',
                            icon: '<PinDropOutlinedIcon />', 
                            }} />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="soho/MiCuenta/DatosFacturacion">
                        <a>
                            <Accountsection
                            data={{
                            name:'Mis RFC',
                            icon: '<PinDropOutlinedIcon />', 
                            }} />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="soho/MiCuenta/DatosFacturacion"  passHref>
                        
                        <Button component="a" onClick={() => window.open('mailto:pagos@pedidos.com.mx?subject=Garantia%20Y%20Devoluciones&body=Completar%20la%20siguiente%20información%0D%0APedido:%20%0D%0AProducto:%20%0D%0ACantidad:%20%0D%0ATelefono%20de%20Contacto:%20%0D%0AAdjuntar%20Fotos.%20%0D%0A%0D%0A%0D%0A%0D%0A')}
                        >
                            Garantías y Devoluciones
                        </Button>
                        
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/soho/MiCuenta/misFavoritos">
                        <a>
                            <Accountsection
                            data={{
                            name:'Mis Favoritos',
                            icon: '<PinDropOutlinedIcon />', 
                            }} />
                        </a>
                    </Link>
                </SwiperSlide>
               
                <SwiperSlide>
                    <Button startIcon={<FeedbackOutlinedIcon />}
                                onClick={() => window.open('mailto:quejas@pedidos.com.mx?subject=Queja%20sobre')}
                            >
                                Levantar queja
                    </Button>
                </SwiperSlide>
                <SwiperSlide>
                    <Help tipo={'3'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/soho/MiCuenta/MisNotasCredito">
                        <Button component="a" startIcon={<LogoutOutlinedIcon />} variant="outlined" color="primary" fullWidth size="large" name="editarDatos" >Cerrar sesión</Button>
                    </Link>
                </SwiperSlide>
                    </Swiper>
                    <Box py={2}>
                        <Divider light />
                    </Box>
                </Hidden>                   
            </Box>
		</>
	);
}
