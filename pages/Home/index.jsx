import React, {useState, useEffect} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import { Grid, Box, Paper,
	Typography, Button, Modal,
    Card, CardContent, CardActions, CardMedia, CardActionArea, Backdrop,
	Divider, Fade, Chip, InputAdornment,MenuItem, Badge,Drawer,
	List, ListItem, ListIcon, ListItemText,Skeleton } from '@mui/material';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Componentes
import { Layout } from 'layout/Layout';

import Services from '../services/Services'
import Link from 'next/link'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    control: {
      padding: theme.spacing(3),
    },
    breadcrumb:{padding: theme.spacing(2),},
    width_carousel: {
        width: 500,
    },
    titDescription:{
        fontSize: '1.3rem',
    },
    titxt:{
        fontSize: '1.3rem',
    },
   titSuggest:{
    fontSize: '1.3rem',
   },

   media: {
    height: 130,
    width: 130,
    margin: 'auto',
  },

  productCard: {
    maxWidth: 345,
    margin:10,
    padding:5,
  },
/*plussss*/ 
  rootqty: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  }));

export default function Home() {

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = React.useState('');
    const [nombre, setNombre] = React.useState('');
    const [isLogged, setLogged] = React.useState(false);
    const [mostrarEmpresas, setMostrarEmpresas] = React.useState(true);
    const [itemsHome, setItemsHome] = useState([]);
    const [show, setShow] = useState({});

    let Login = '';
    let Cliente= 0;
    let UsuarioNum = 0;

    useEffect(() => {

        Login = localStorage.getItem('Login');
        setNombre(localStorage.getItem('Usu_Nomb'));
        Cliente= localStorage.getItem('Cliente');
        UsuarioNum = localStorage.getItem('Usuario');
        console.log("Cliente"+Cliente)
        console.log("UsuarioNum"+UsuarioNum)
        //Condicionar la ejecucion del metodo si el usuario está loggeado


        const getData = async () => {
            Services('POST','/registrov2/obtieneItemsHome?clienteNum='+Cliente+'&top='+10+'&usuarioNum='+UsuarioNum,{})
            .then( response =>{
                response.data.favoritosFrecuentes.map ((row) => {
                if( row.tipo === 'B'){
                    setShow(values => ({...values, ['Carrito']: true}))
                }else if(row.tipo === 'F'){
                    setShow(values => ({...values, ['Favoritos']: true}))
                }else if(row.tipo === 'V'){
                    setShow(values => ({...values, ['Vistos']: true}))
                }
                })

                console.log(response.data.favoritosFrecuentes)
                setItemsHome(response.data.favoritosFrecuentes)
            }).catch(error => {
                console.log("falló")
                console.log(error.response)
            });
        }
        getData()
    }, []) 

    const validaSesion= () =>{
        if(Login === 'Ok'){
          setLogged(true);
        } else if(Login === 'NO' || Login === null){
          setLogged(false);
        }
    }

    const handleOpen = (event) => {
        const name = event.target.name;
        setModal(name)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Empresas = (
        <span>
            <Grid container  spacing={spacing}>
                <Grid item xs={3}> 
                    <Card className={classes.root}>
                        <CardContent>
                            <Link href="/Membresia/pro">
                                <a>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    ¡Empresas! Envío Gratis CDMX
                                </Typography>
                                </a>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}> 
                    <Card className={classes.root}>
                        <CardContent>
                            <Link href="/MisPedidos">
                                <a>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Mis Pedidos
                                </Typography>
                                </a>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}> 
                    <Card className={classes.root}>
                        <CardContent>
                            <Button onClick={(event) => { event.preventDefault(); window.open('https://api.whatsapp.com/send?phone=5215562947884&text=Pedidos.com%20ayudame%20a%20cotizar%20por%20volumen', '_blank');}}>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Precio por volumen
                                </Typography>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}> 
                    <Card className={classes.root}>
                        <CardContent>
                            <Link href="/MisFacturas">
                                <a>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Mis Facturas
                                </Typography>
                                </a>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </span>
    )

    return(
        <Layout>
        <div>
            {/* <Grid item xs={12}> 
                <Button  onClick={(event) => { event.preventDefault();setMostrarEmpresas(false)}}>Empresas</Button>
            </Grid> */}
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box component="div" px={4} xs={{fontWeight:'600'}}>
                        {validaSesion ? <Typography variant="h4" component="h1" >
                            Hola de nuevo, {nombre}</Typography>: ''}
                    </Box>
                </Grid>
                {/* <Grid item xs={2}>
                    <Button fullWidth variant="outlined" name="Modal1" onClick={handleOpen}>
                        <WhatsAppIcon fontSize="large" />
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button fullWidth variant="outlined" onClick={() => window.open('mailto:info@pedidos.com?subject=Necesito%20apoyo%20con&body=')}>
                        <MailOutlineIcon fontSize="large" /> 
                        </Button>
                </Grid>  */}
            </Grid>
            <Box component="div" py={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4} md={5}>
                            <Box component="div"  m='auto' p={4}>
                                <Box component="div">
                                    <Paper variant="outlined">
                                        <Box component="div" m="auto" p={2}> 
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item>
                                                <Box component="div" sx={{ width: '85px', bottom: 0,right: 0,display: 'block',}} >
                                                    <Box component="div"p={2} sx={{backgroundColor:'#3655a5', borderRadius:'8px', width:'auto',height:'auto', justifyContent:'center', margin:'auto'}}>
                                                        <img sx={{ justifyContent:'center', margin:'auto'}}
                                                        src="https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/pickup.svg"
                                                        alt=""
                                                        layout="responsive"
                                                        />
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h6" component="p">
                                                    Pedidos
                                                </Typography>
                                                <Link
                                                    href={`/MisPedidos`}
                                                    passHref>
                                                    <Button fullWidth component="a" variant="outlined" color="primary">
                                                        Ver todos
                                                    </Button>
                                                </Link>
                                            </Grid>

                                        </Grid>
                                            
                                            
                                        </Box>
                                    </Paper>
                            </Box>
                                <Box component="div" py={2}>
                                    <Link
                                        href={`/MisPedidos`}
                                        passHref>
                                    <Button component="a" variant="outlined" color="primary">
                                            Solicita ayuda
                                        </Button>
                                    </Link>
                                </Box>
                                <Box component="div">
                                    <Paper elevation={12}>
                                        <Box component="div" sx={{ width: '85px', bottom: 0,right: 0,display: 'block',}} >
                                            <Box component="div"p={2} sx={{backgroundColor:'#3655a5', borderRadius:'8px', width:'auto',height:'auto', justifyContent:'center', margin:'auto'}}>
                                                <img sx={{ justifyContent:'center', margin:'auto'}}
                                                src="https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/pickup.svg"
                                                alt=""
                                                layout="responsive"
                                                />
                                            </Box>
                                        </Box>
                                    <Typography variant="h6" component="p">
                                        Soporte tecnico
                                    </Typography>
                                    <Link
                                        href={`/MisPedidos`}
                                        passHref>
                                    <Button component="a" color="primary">
                                            Ver detalles
                                        </Button>
                                    </Link>
                                    <Link
                                        href={`/MisPedidos`}
                                        passHref>
                                    <Button component="a" variant="outlined" color="primary">
                                            Comenzar
                                        </Button>
                                    </Link>
                                    <Link
                                        href={`/MisPedidos`}
                                        passHref>
                                    <Button component="a" variant="outlined" color="primary">
                                        Agenda videollamada
                                        </Button>
                                    </Link>
                                    </Paper>
                                </Box>
                            </Box>
                                {/* <Box component="div" py={4} textAlign="center">
                                    <Typography variant="h6" component="h2">
                                        Todo para tu espacio de trabajo
                                    </Typography>
                                    <Box  p={4}>
                                        <Link href="/MisPedidos">
                                            <a>
                                                <FilterNoneIcon style={{ fontSize: 40 }}/>
                                            
                                                <Typography variant="h6" component="p">
                                                    Ver mis pedidos
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                </Box> */}
                        </Grid>

                        <Grid item xs={12} sm={4} md={7}>
                            <Swiper
                            //modules={[Autoplay]}
                            lazy={true}
                            spaceBetween={10}
                            slidesPerView={3}
                            //centeredSlides={true}
                            //autoplay={{
                            //"delay": 2500,
                            //"disableOnInteraction": false}}
                        
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}>
                    
                                {show.Carrito && 
                                <SwiperSlide  className={classes.swiperBox}>
                                    <Box component="div" >
                                        <Card elevation={12} className={classes.root}>
                                            <CardContent>
                                                {itemsHome.map((row) => (
                                                    row.tipo === 'B' ? 
                                                        <Card className={classes.root}>
                                                            <CardContent>
                                                                <Link href={`/articulos/${row.itemNum}`}>
                                                                    <a>
                                                                    <CardMedia
                                                                    className={classes.cover}
                                                                    component="img"
                                                                    alt={row.itemNum}
                                                                    image={"https://pedidos.com/myfotos/large/(L)" + row.itemNum + ".jpg"}
                                                                    title={row.itemNum}
                                                                    />
                                                                    </a>
                                                                </Link>
                                                            </CardContent>
                                                        </Card>
                                                        
                                                    : ''
                                                    
                                                ))}
                                                <Typography variant="h6" component="h6">
                                                    Carrito
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </SwiperSlide>
                                }
                                
                                {show.Vistos && 
                                <SwiperSlide> 
                                    <Card elevation={10} className={classes.root}>
                                        <CardContent>
                                            <Box sx={{ width: '100%' }}>
                                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                    {itemsHome.map((row) => (
                                                        row.tipo === 'V' ? 
                                                        <Grid item xs={6}>
                                                            <Link href={`/articulos/${row.itemNum}`}>
                                                                <a>
                                                                <CardMedia
                                                                className={classes.cover}
                                                                component="img"
                                                                alt={row.itemNum}
                                                                image={"https://pedidos.com/myfotos/large/(L)" + row.itemNum + ".jpg"}
                                                                title={row.itemNum}
                                                                />
                                                                </a>
                                                            </Link>
                                                        </Grid>
                                                            
                                                        : ''
                                                    
                                                    ))}
                                                </Grid>
                                            </Box>
                                            <Divider light />
                                            <Box component="div"  textAlign="center" py={2}>
                                                <Typography variant="subtitle1" >
                                                    Vistos
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </SwiperSlide>
                                }

                                {show.Favoritos && 
                                <SwiperSlide> 
                                    <Card elevation={10} className={classes.root}>
                                        <CardContent>
                                            <Box sx={{ width: '100%' }}>
                                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                {itemsHome.map((row) => (
                                                    row.tipo === 'F' ? 
                                                    <Grid item xs={6}>
                                                        <Link href={`/articulos/${row.itemNum}`}>
                                                            <a>
                                                            <CardMedia
                                                            className={classes.cover}
                                                            component="img"
                                                            alt={row.itemNum}
                                                            image={"https://pedidos.com/myfotos/large/(L)" + row.itemNum + ".jpg"}
                                                            title={row.itemNum}
                                                            />
                                                            </a>
                                                        </Link>
                                                    </Grid>
                                                    : ''
                                                
                                                ))}
                                                <Typography variant="h6" component="h6">
                                                    Favoritos
                                                </Typography>
                                                </Grid>
                                            </Box>

                                        </CardContent>
                                    </Card>
                                </SwiperSlide>
                                }
                            </Swiper>
                        </Grid>
                    </Grid>
            </Box>
            <Divider/>  
            <Box component="div" py={2}>
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item>
                            <a href={'/Direcciones'}><Chip label="Mis Direcciones"/></a>
                        </Grid>
                        <Grid item>
                            <a href={'/MisFacturas'}>
                                <Chip label="Mis Facturas"/>
                            </a>
                        </Grid>
                        <Grid item>
                            <a href={'/DatosFacturacion'}><Chip label="Datos de Facturación"/></a>
                                {/* <Chip label="Mi Equipo"/> */}
                        </Grid>
                        <Grid item>
                            <Button 
                            onClick={() => window.open('mailto:pagos@pedidos.com.mx?subject=Garantia%20Y%20Devoluciones&body=Completar%20la%20siguiente%20información%0D%0APedido:%20%0D%0AProducto:%20%0D%0ACantidad:%20%0D%0ATelefono%20de%20Contacto:%20%0D%0AAdjuntar%20Fotos.%20%0D%0A%0D%0A%0D%0A%0D%0A')}
                            >
                                <Chip label="Garantias y Devoluciones"/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <a href={'/MisDatos'}><Chip label="Configurar" variant="outlined"/></a>
                        </Grid>
                        
                    </Grid>
            </Box>
            <Box component="div" py={2}>
                <Typography variant="h5" component="h2" sx={{fontWeight:'600'}}>
                    Todo para tu espacio de trabajo
                </Typography>
            </Box>
            {/* Inicio de sugerencias */}
            <Box component="div" py={2}>
                <Grid container spacing={2}>
                    {show.Carrito &&                                
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h3" sx={{fontWeight:'600'}}>
                                Carrito
                            </Typography>
                            <Swiper
                            //modules={[Autoplay]}
                            lazy={true}
                            spaceBetween={10}
                            slidesPerView={3}
                            //centeredSlides={true}
                            //autoplay={{
                            //"delay": 2500,
                            //"disableOnInteraction": false}}
                        
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}>
                    
                               { Object.keys(itemsHome).map((oneKey,i)=>{
                                        return (
                                <SwiperSlide  className={classes.swiperBox} key={i}>
                                    <Box component="div" >
                                        <div>
                                            {itemsHome[oneKey].tipo  === 'B' &&
                                            <Card className={classes.productCard} elevation={3} >
                                            <CardActionArea >
                                                <Link href={`/articulos/${itemsHome[oneKey].url}`}>
                                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                        {itemsHome[oneKey].marca}
                                                    </Typography>
                                                </Link>
                                                <CardMedia
                                                className={classes.media}
                                                image={`https://pedidos.com/myfotos/large/(L)${itemsHome[oneKey].itemNum}.webp`}
                                                onError="this.onerror=null;this.src='https://pedidos.com/myfotos/xLarge/(X)logitinPed.webp'"
                                                alt={itemsHome[oneKey].itemNum}
                                                title={itemsHome[oneKey].itemNum} />
                                                <CardContent>
                                                <Divider />
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    {itemsHome[oneKey].tituloCompuesto} 
                                                </Typography>
                                                <p>${itemsHome[oneKey].precio}</p> 
                                                <p style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>${itemsHome[oneKey].precioDeLista} </p>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button
                                                size="medium"
                                                variant="outlined"
                                                color="primary"
                                                fullWidth
                                                >
                                                    <Link href={`/articulos/${itemsHome[oneKey].url}`}>
                                                        Ver Detalle
                                                    </Link>
                                                </Button>
                                            </CardActions>
                                            </Card>                 
                                            }
                                        </div>
                                    </Box>
                                </SwiperSlide>
                                );
                                    })
                                }
                               
                            </Swiper>
                            <Carousel emulateTouch={true} showStatus={false} showIndicators={false} showThumbs={false} centerMode={true} centerSlidePercentage={20}>
                                { Object.keys(itemsHome).map((oneKey,i)=>{
                                        return (
                                        <div key={i}>
                                            {itemsHome[oneKey].tipo  === 'B' &&
                                            <Card className={classes.productCard} elevation={3} >
                                            <CardActionArea >
                                                <Link href={`/articulos/${itemsHome[oneKey].url}`}>
                                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                        {itemsHome[oneKey].marca}
                                                    </Typography>
                                                </Link>
                                                <CardMedia
                                                className={classes.media}
                                                image={`https://pedidos.com/myfotos/large/(L)${itemsHome[oneKey].itemNum}.webp`}
                                                onError="this.onerror=null;this.src='https://pedidos.com/myfotos/xLarge/(X)logitinPed.webp'"
                                                alt={itemsHome[oneKey].itemNum}
                                                title={itemsHome[oneKey].itemNum} />
                                                <CardContent>
                                                <Divider />
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    {itemsHome[oneKey].tituloCompuesto} 
                                                </Typography>
                                                <p>${itemsHome[oneKey].precio}</p> 
                                                <p style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>${itemsHome[oneKey].precioDeLista} </p>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button
                                                size="medium"
                                                variant="outlined"
                                                color="primary"
                                                fullWidth
                                                >
                                                    <Link href={`/articulos/${itemsHome[oneKey].url}`}>
                                                        Ver Detalle
                                                    </Link>
                                                </Button>
                                            </CardActions>
                                            </Card>                 
                                            }
                                        </div>
                                        );
                                    })
                                }
                            </Carousel>
                        </Grid>                                         
                    }

                    {show.Vistos &&                                
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h3" sx={{fontWeight:'600'}}>
                            Productos Vistos
                            </Typography>
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
                            onSwiper={(swiper) => console.log(swiper)}>
                    
                            { Object.keys(itemsHome).map((oneKey,i)=>{
                                 return (
                                <SwiperSlide  className={classes.swiperBox} key={i}>
                                    <Box component="div" >
                                        {itemsHome[oneKey].tipo  === 'V' &&
                                        <Card className={classes.productCard} >
                                            <CardActionArea  to={`/articulos/${itemsHome[oneKey].url}`} >
                                                <Box component="div" textAlign="center">
                                                    <Typography variant="caption" color="textSecondary" gutterBottom>
                                                        {itemsHome[oneKey].marca}
                                                    </Typography>
                                                </Box>
                                                <CardMedia
                                                className={classes.media}
                                                image={`https://pedidos.com/myfotos/large/(L)${itemsHome[oneKey].itemNum}.webp`}
                                                onError="this.onerror=null;this.src='https://pedidos.com/myfotos/xLarge/(X)logitinPed.webp'"
                                                alt={itemsHome[oneKey].itemNum}
                                                title={itemsHome[oneKey].itemNum}
                                                />
                                                <CardContent>
                                                <Divider light />
                                                <Typography mt={2} sx={{ height:'44px', overflow: 'hidden'}}
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p">
                                                    {itemsHome[oneKey].tituloCompuesto} 
                                                </Typography>
                                                <Box p={1} color="grey.600" sx={ {textDecoration:"line-through", }} >
                                                    <Typography  variant="caption">
                                                    ${itemsHome[oneKey].precioDeLista}
                                                    </Typography> 
                                                </Box>
                                                <Typography variant="subtitle1" display="block" gutterBottom color="textPrimary">
                                                    <Box component="span" fontWeight="fontWeightBold"> ${itemsHome[oneKey].precio}</Box>
                                                </Typography>
                                                
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button
                                                size="medium"
                                                variant="outlined"
                                                color="primary"
                                                fullWidth
                                                >
                                                    <Link href={`/articulos/${itemsHome[oneKey].url}`}>
                                                        Ver Detalle
                                                    </Link>
                                                </Button>
                                            </CardActions>
                                        </Card>                
                                        }
                                    </Box>
                                </SwiperSlide>
                                    );
                                })
                            }
                            </Swiper>
                            
                        </Grid>                                         
                    }

                    {show.Favoritos &&                                
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h5">
                                Productos Favoritos
                            </Typography>
                            <Button
                            size="medium"
                            variant="outlined"
                            color="primary"
                            >
                            <Link href="/misFavoritos">
                            Ver Todo
                            </Link>
                            </Button>
                            <Carousel emulateTouch={true} showStatus={false} showIndicators={false} showThumbs={false} centerMode={true} centerSlidePercentage={20}>
                                { Object.keys(itemsHome).map((oneKey,i)=>{
                                        return (
                                        <div key={i}>
                                            {itemsHome[oneKey].tipo  === 'F' &&
                                            <Card className={classes.productCard} elevation={3} >
                                            <CardActionArea>
                                                <Link href={`/articulos/${itemsHome[oneKey].url}`}>
                                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                        {itemsHome[oneKey].marca}
                                                    </Typography>
                                                </Link>
                                                <CardMedia
                                                className={classes.media}
                                                image={`https://pedidos.com/myfotos/large/(L)${itemsHome[oneKey].itemNum}.webp`}
                                                onError="this.onerror=null;this.src='https://pedidos.com/myfotos/xLarge/(X)logitinPed.webp'"
                                                alt={itemsHome[oneKey].itemNum}
                                                title={itemsHome[oneKey].itemNum} />
                                                <CardContent>
                                                <Divider />
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    {itemsHome[oneKey].tituloCompuesto} 
                                                </Typography>
                                                <p>${itemsHome[oneKey].precio}</p> 
                                                <p style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>${itemsHome[oneKey].precioDeLista} </p>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button
                                                size="medium"
                                                variant="outlined"
                                                color="primary"
                                                fullWidth
                                                >
                                                    <Link href={`/articulos/${itemsHome[oneKey].url}`}>
                                                        Ver Detalle
                                                    </Link>
                                                </Button>
                                            </CardActions>
                                            </Card>                 
                                            }
                                        </div>
                                        );
                                    })
                                }
                            </Carousel>
                        </Grid>                                         
                    }


                </Grid>
            </Box>            
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open && modal === 'Modal1'}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}> 
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Cotiza
                                    </Typography>
                                    <Typography variant="h5" component="h6">
                                        Selecciona la atención que necesites, en WhatsApp estaremos listos para atenderles:
                                    </Typography>
                                    <Grid container justifyContent="center" spacing={spacing}>
                                        <Grid item xs={6}> 
                                            <Button onClick={(event) => { event.preventDefault(); window.open('https://api.whatsapp.com/send?phone=5215562947884&text=Pedidos.com%20ayudame%20a%20cotizar%20por%20volumen', '_blank');}}><WhatsAppIcon fontSize="large" />Personal</Button>
                                        </Grid>
                                        <Grid item xs={6}> 
                                            <Button onClick={(event) => { event.preventDefault(); window.open('https://api.whatsapp.com/send?phone=5215562947884&text=Pedidos.com%20ayudame%20a%20cotizar%20por%20volumen', '_blank');}}><WhatsAppIcon fontSize="large" />Empresa</Button>
                                        </Grid>
                                    </Grid>
                                    <Typography variant="h5" component="h2">
                                        Contáctanos: 55 5015-8100 ó 01 800 8138181
                                    </Typography>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Los tiempos de respuesta pueden variar
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                </Fade>
            </Modal>


            
        </div>
        </Layout>



            
    );

}