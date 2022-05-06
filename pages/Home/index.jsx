import React, {useState, useEffect} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import { Grid, Box, Paper,
	Typography, Button, Modal,
    Card, CardContent, CardActions, CardMedia, CardActionArea, Backdrop,
	Divider, Fade, Chip, InputAdornment,MenuItem, Badge,Drawer,
	List, ListItem, ListIcon, ListItemText, } from '@mui/material';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
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
            <Grid item xs={12}> 
                <Button  onClick={(event) => { event.preventDefault();setMostrarEmpresas(false)}}>Empresas</Button>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    {validaSesion ? <Typography variant="h5" component="h1" xs={{fontWeight:'600'}}>
                        Hola de nuevo, {nombre}</Typography>: ''}
                </Grid>
                <Grid item xs={2}>
                    <Button fullWidth variant="outlined" name="Modal1" onClick={handleOpen}>
                        <WhatsAppIcon fontSize="large" />
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button fullWidth variant="outlined" onClick={() => window.open('mailto:info@pedidos.com?subject=Necesito%20apoyo%20con&body=')}>
                        <MailOutlineIcon fontSize="large" /> 
                        </Button>
                </Grid> 
            </Grid>
           
            <Grid item xs={12}> 
                <a href={'/Direcciones'}><Chip label="Mis Direcciones"/></a>
                <a href={'/MisFacturas'}><Chip label="Mis Facturas"/></a>
                <a href={'/DatosFacturacion'}><Chip label="Datos de Facturación"/></a>
                {/* <Chip label="Mi Equipo"/> */}
                <Button 
                onClick={() => window.open('mailto:pagos@pedidos.com.mx?subject=Garantia%20Y%20Devoluciones&body=Completar%20la%20siguiente%20información%0D%0APedido:%20%0D%0AProducto:%20%0D%0ACantidad:%20%0D%0ATelefono%20de%20Contacto:%20%0D%0AAdjuntar%20Fotos.%20%0D%0A%0D%0A%0D%0A%0D%0A')}
                >
                    <Chip label="Garantias y Devoluciones"/>
                </Button>
                <a href={'/MisDatos'}><Chip label="Configurar" variant="outlined"/></a>
            </Grid>
            <Divider/>
            <Box component="div" py={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Box component="div" py={4} textAlign="center">
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
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>

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
       
        

        </Swiper>
                </Grid> 
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