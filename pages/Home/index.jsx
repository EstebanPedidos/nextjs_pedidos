import React, {useState, useEffect} from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Container, Grid, Box, Paper,
	Typography, Button, Modal,
    Card, CardContent, CardActions, CardMedia, CardActionArea, Backdrop,
	Divider, Fade, Chip, InputAdornment,MenuItem, Badge,Drawer,
	List, ListItem, ListIcon, ListItemText,Skeleton } from '@mui/material';
import styles from 'styles/Home.module.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Lazy } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Componentes
import { Layout } from 'layout/Layout';
import PromoSlides from 'components/home/promoSlides';
import Services from '../services/Services';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ServiceSlides from 'components/home/serviceSlides';
import ForBusiness from 'components/home/forBusiness';
import Brands from 'components/home/Brands';

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
    boxShadow: '0px 0px 16px rgb(54 85 166 / 8%), 0px 1px 4px rgb(54 85 166 / 8%)',
    padding:5,
    margin:5,
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
    const [vistos, setVistos] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [show, setShow] = useState({});

    let Login = '';
    let Cliente= 0;
    let UsuarioNum = 0;
    let z = 0;

    useEffect(() => {

        
        Login = localStorage.getItem('Login');
        setNombre(localStorage.getItem('Usu_Nomb'));
        Cliente= localStorage.getItem('Cliente');
        UsuarioNum = localStorage.getItem('Usuario');
        console.log("Cliente"+Cliente)
        console.log("UsuarioNum"+UsuarioNum)
        let afiliado =  localStorage.getItem('afiliado')

        if(Cliente !== undefined && Cliente !== null && afiliado !== undefined && afiliado !== null){
            if(parseInt(Cliente) !== 201221){

                const getData = async () => {
                    Services('POST','/registrov2/obtieneItemsHome?clienteNum='+Cliente+'&top='+10+'&usuarioNum='+UsuarioNum,{})
                    .then( response =>{
                        response.data.favoritosFrecuentes.map ((row, index) => {
                            if( row.tipo === 'B'){
                                setShow(values => ({...values, ['Carrito']: true}))
                            }else if(row.tipo === 'F' || row.tipo === 'C'){
                                setShow(values => ({...values, ['Favoritos']: true}))
                            }else if(row.tipo === 'V'){
                                setShow(values => ({...values, ['Vistos']: true}))
                            }
                            
                        })

                        setCarrito(response.data.favoritosFrecuentes.filter(
                            (favoritosFrec) => favoritosFrec.tipo === "B"
                        )) 
                        setFavoritos(response.data.favoritosFrecuentes.filter(
                            (favoritosFrec) => favoritosFrec.tipo === "F" || favoritosFrec.tipo === "C"
                        ))
                        setVistos(response.data.favoritosFrecuentes.filter(
                            (favoritosFrec) => favoritosFrec.tipo === "V"
                        ));
                    }).catch(error => {
                        console.log("falló")
                        console.log(error.response)
                    });
                }
                getData()
        
            }else{
                router.push('/')
            } 
        }else{
            router.push('/')
        } 
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
                <Grid item xs={12}>
                    <Box component="div" py={2} px={4} >
                        {validaSesion ? <Typography variant="h4" component="h1" xs={{fontWeight:'600'}}>
                            Hola de nuevo, {nombre}</Typography>: ''}
                    </Box>
                </Grid>
                
            </Grid>
            <Box component="div" py={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={5}>
                            <Box component="div" px={6}>
                                <Box component="div">
                                <Grid container spacing={2}>
                                   <Grid item xs={6}>
                                        <Button fullWidth variant="outlined" name="Modal1" onClick={handleOpen}>
                                            <WhatsAppIcon fontSize="large" />
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button fullWidth variant="outlined" onClick={() => window.open('mailto:info@pedidos.com?subject=Necesito%20apoyo%20con&body=')}>
                                            <MailOutlineIcon fontSize="large" /> 
                                            </Button>
                                    </Grid> 
                                    {/* <Grid item xs={12}>
                                        <Link
                                        href={`/MisPedidos`}
                                        passHref>
                                            <Button component="a" variant="outlined" color="primary">
                                                Solicita ayuda
                                            </Button>
                                    </Link>
                                    </Grid>   */}
                                </Grid>
                                    
                                </Box>
                                <Box component="div"  py={2}>
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
                                                         Mis Pedidos
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
                                <Box component="div">
                                    <Box component="div">
                                        <Paper variant="outlined">
                                            <Box component="div" m="auto" p={2}> 
                                                <Grid container alignItems="center" spacing={2}>
                                                    <Grid item>
                                                        <Box component="div" sx={{ width: '85px', bottom: 0,right: 0,display: 'block',}} >
                                                            <Box component="div"p={2} sx={{backgroundColor:'#3655a5', borderRadius:'8px', width:'auto',height:'auto', justifyContent:'center', margin:'auto'}}>
                                                                <img width={53} sx={{ justifyContent:'center', margin:'auto' }}
                                                                src="https://pedidos.com/myfotos/pedidos-com/pagina/home22/servicios/tech.png"
                                                                alt="Soporte Técnico"
                                                                layout="responsive"
                                                                />
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item>
                                                        <Link href={`/`} passHref>
                                                            <a>
                                                                <Typography variant="h6" component="p">
                                                                    Soporte técnico
                                                                </Typography>
                                                            </a>
                                                        </Link>
                                                        <Typography variant="subtitle2" component="p" color="textSecondary">
                                                        De Lun a Vier de 9:00 a 18:30
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} lg={6}>
                                                        <Link href={`/MisPedidos`} passHref>
                                                            <Button fullWidth component="a" variant="outlined" color="primary">
                                                                Ayuda
                                                            </Button>
                                                        </Link>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} lg={6}>
                                                            <Link
                                                                href={`/MisPedidos`}
                                                                passHref>
                                                            <Button fullWidth component="a" variant="outlined" color="primary">
                                                                Agenda videollamada
                                                                </Button>
                                                            </Link>
                                                    </Grid>
                                                    

                                                </Grid>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md={7}>
                            <Box component="div" sx={{ position:'relative'}}>
                                <Box component="div" sx={{ position: 'absolute', top: 0,right: 0,display: 'block',}} >
                                    <Box component="div" p={2} sx={{backgroundColor:'#3655a5', borderRadius:'10px 0 0 10px', width:'55vw',height:'350px', justifyContent:'center', margin:'auto'}}> </Box>
                                </Box>
                                <Box component="div" p={2}>
                                    <Swiper
                                    //modules={[Autoplay]}
                                    lazy={true}
                                    spaceBetween={20}
                                    slidesPerView={3}
                                    //centeredSlides={true}
                                    //autoplay={{
                                    //"delay": 2500,
                                    //"disableOnInteraction": false}}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    breakpoints={{
                                        640: {
                                          slidesPerView: 1.5,
                                          
                                        },
                                        768: {
                                          slidesPerView: 2.5,
                                          
                                        },
                                        1024: {
                                          slidesPerView: 3,
                                         
                                        },
                                    }}
                                    >
                            
                                        {show.Carrito && 
                                        <SwiperSlide >
                                            <Card elevation={12} className={classes.root}>
                                                <CardContent>
                                                    <Box sx={{ width: '100%'}}>
                                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
                                                            {carrito.map((row, index) => (
                                                                row.tipo === 'B' && index < 4 &&
                                                                <Grid item xs={6}>
                                                                    <Link href={`/articulos/${row.itemNum}`}>
                                                                        <a>
                                                                            <CardActionArea>
                                                                                <Card variant="outlined" >
                                                                                    <CardMedia
                                                                                    className={classes.cover}
                                                                                    component="img"
                                                                                    alt={row.itemNum}
                                                                                    image={"https://pedidos.com/myfotos/large/(L)" + row.itemNum + ".jpg"}
                                                                                    title={row.itemNum}
                                                                                    />
                                                                                </Card>
                                                                            </CardActionArea>  
                                                                        </a>
                                                                    </Link>
                                                                </Grid>
                                                            ))}
                                                        </Grid>
                                                </Box>
                                                <Box component="div"  textAlign="center" py={2}>
                                                    <Divider light />
                                                </Box>
                                                <Box component="div"  textAlign="center">
                                                    <Typography variant="subtitle1" >
                                                        Carrito
                                                    </Typography>
                                                </Box>
                                                </CardContent>
                                            </Card>
                                        </SwiperSlide>
                                        }
                                        
                                        {show.Vistos && 
                                        <SwiperSlide> 
                                            <Card elevation={10} className={classes.root}>    
                                                    <CardContent>
                                                        <Box sx={{ width: '100%'}}>
                                                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
                                                                {vistos.map((row, index) => (
                                                                    row.tipo === 'V' && index < 4 &&
                                                                    <Grid item xs={6}>
                                                                        <Link href={`/articulos/${row.itemNum}`}>
                                                                            <a>
                                                                            <CardActionArea>
                                                                                <Card variant="outlined" >
                                                                                    <CardMedia
                                                                                    className={classes.cover}
                                                                                    component="img"
                                                                                    alt={row.itemNum}
                                                                                    image={"https://pedidos.com/myfotos/large/(L)" + row.itemNum + ".jpg"}
                                                                                    title={row.itemNum}
                                                                                    />
                                                                                </Card>
                                                                            </CardActionArea>
                                                                            </a>
                                                                        </Link>
                                                                    </Grid>
                                                                    
                                                                ))}
                                                            </Grid>
                                                        </Box>
                                                        <Box component="div"  textAlign="center" py={1}>
                                                            <Divider light />
                                                        </Box>
                                                        <Box component="div"  textAlign="center">
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
                                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                                        {favoritos.map((row, index ) => (
                                                            row.tipo === 'F' || row.tipo === 'C' && index < 4 &&
                                                            <Grid item xs={6}>
                                                                <Link href={`/articulos/${row.itemNum}`}>
                                                                    <a>
                                                                    <CardActionArea>
                                                                        <Card variant="outlined" >
                                                                            <CardMedia
                                                                            className={classes.cover}
                                                                            component="img"
                                                                            alt={row.itemNum}
                                                                            image={"https://pedidos.com/myfotos/large/(L)" + row.itemNum + ".jpg"}
                                                                            title={row.itemNum}
                                                                            />
                                                                        </Card>
                                                                    </CardActionArea>
                                                                    </a>
                                                                </Link>
                                                            </Grid>
                                                        ))}
                                                        <Grid item xs={12}>
                                                            <Box component="div"  textAlign="center" py={1}>
                                                                <Divider light />
                                                            </Box>
                                                            <Box component="div"  textAlign="center">
                                                                <Typography variant="subtitle1" >
                                                                    Favoritos
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                        </Grid>
                                                    </Box>

                                                </CardContent>
                                            </Card>
                                        </SwiperSlide>
                                        }
                                    </Swiper>
                                </Box>
                            </Box>
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
            <Box component="div" className={styles.promoContainer}>
 				<PromoSlides />
 			</Box>
             <Box component="div" py={6} textAlign="center">
                <Typography variant="h4" component="h2" sx={{fontWeight:'600'}}>
                    Todo para tu espacio de trabajo.
                </Typography>
            </Box>
		    <Divider />
            <Box component="div" py={2} textAlign="left">
                <Box> 
                    <Container maxWidth="xl">
                        <Typography variant="h6" component="h2" sx={{fontWeight:'600'}}>
                            Conoce nuestros servicios
                        </Typography>
                        <Box component="div" py={2}>
                            <ServiceSlides />
                        </Box>
                    </Container>
                </Box>
		    </Box>
            <Box component="div" py={2} textAlign="left">
				<Box component="div" py={4}>
					<ForBusiness />
				</Box>
			</Box>
            <Box component="div" py={2} textAlign="left">
				<Box component="div" py={2}>
					<Brands/>
				</Box>
			</Box>
            {/* Inicio de sugerencias */}
            <Box component="div" py={2}>
                {show.Vistos &&                                
                    <Box component="div" py={2}> 
                        <Box component="div" pb={2}>   
                            <Typography variant="h6" component="h3" sx={{fontWeight:'600'}}>
                            Productos Vistos
                            </Typography>
                        </Box>
                        <Swiper
                        modules={[Lazy, Navigation]}
                        navigation
                        lazy={true}
                        spaceBetween={15}
                        slidesPerView={4}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        //centeredSlides={true}
                        //autoplay={{
                        //"delay": 2500,
                        //"disableOnInteraction": false}}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.9,
                                
                            },
                            768: {
                                slidesPerView: 3.8,
                                
                            },
                            1024: {
                                slidesPerView: 4,
                                
                            },
                        }}
                        >
                
                        { Object.keys(vistos).map((oneKey,i)=>{
                                return (
                            <SwiperSlide  className={classes.swiperBox} key={i}>
                                <Box component="div" >
                                    <Card className={classes.productCard} >
                                        <CardActionArea  to={`/articulos/${vistos[oneKey].url}`} >
                                            <Box component="div" textAlign="center">
                                                <Typography variant="caption" color="textSecondary" gutterBottom>
                                                    {vistos[oneKey].marca}
                                                </Typography>
                                            </Box>
                                            <CardMedia
                                            className={classes.media}
                                            image={`https://pedidos.com/myfotos/large/(L)${vistos[oneKey].itemNum}.webp`}
                                            onError="this.onerror=null;this.src='https://pedidos.com/myfotos/xLarge/(X)logitinPed.webp'"
                                            alt={vistos[oneKey].itemNum}
                                            title={vistos[oneKey].itemNum}
                                            />
                                            <CardContent>
                                            <Divider light />
                                            <Typography mt={2} sx={{ height:'44px', overflow: 'hidden'}}
                                                variant="body2"
                                                color="textSecondary"
                                                component="p">
                                                {vistos[oneKey].tituloCompuesto} 
                                            </Typography>
                                            <Box p={1} color="grey.600" sx={ {textDecoration:"line-through", }} >
                                                <Typography  variant="caption">
                                                ${(Math.round((vistos[oneKey].precioDeLista) * 100) / 100).toFixed(2)}
                                                </Typography> 
                                            </Box>
                                            <Typography variant="subtitle1" display="block" gutterBottom color="textPrimary">
                                                <Box component="span" fontWeight="fontWeightBold"> ${(Math.round((vistos[oneKey].precio) * 100) / 100).toFixed(2)}</Box>
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
                                                <Link href={`/articulos/${vistos[oneKey].url}`}>
                                                    Ver Detalle
                                                </Link>
                                            </Button>
                                        </CardActions>
                                    </Card>                
                                </Box>
                            </SwiperSlide>
                                );
                            })
                        }
                        </Swiper>
                    </Box>                                      
                }
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