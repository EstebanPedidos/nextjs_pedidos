import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles} from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Chip from '@material-ui/core/Chip';
import FilterNoneIcon from '@material-ui/icons/FilterNone';

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
    const [isLogged, setLogged] = React.useState(false);
    const [mostrarEmpresas, setMostrarEmpresas] = React.useState(true);
    const [itemsHome, setItemsHome] = useState([]);
    const [show, setShow] = useState({});

    let Login = '';
    let nombre = '';
    let Cliente= 0;
    let UsuarioNum = 0;

    useEffect(() => {

        Login = localStorage.getItem('Login');
        nombre = localStorage.getItem('Usu_nomb');
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
        // getData()
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
            <Divider/>
                {mostrarEmpresas && Empresas}
            <Divider/>
            <Grid item xs={12}> 
                <Card className={classes.root}>
                    <CardContent>
                        {validaSesion ? <h2>Hola de nuevo, {nombre}</h2> : ''}
                        <Button variant="outlined" name="Modal1" onClick={handleOpen}><WhatsAppIcon fontSize="large" /></Button>
                        <Button variant="outlined" onClick={() => window.open('mailto:info@pedidos.com?subject=Necesito%20apoyo%20con&body=')}><MailOutlineIcon fontSize="large" /> </Button>
                    </CardContent>
                </Card>
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
            <Grid container justifyContent="center" spacing={0}> 
                <Grid item xs={6} container justifyContent="center"> 
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h4" component="h4">
                                Todo para tu espacio de trabajo
                            </Typography>
                            <Link href="/MisPedidos">
                                <a>
                                <FilterNoneIcon style={{ fontSize: 50 }}/>
                                </a>
                            </Link>
                            <Link href="/MisPedidos">
                                <a>
                                <Typography variant="h6" component="h6">
                                    Ver mis pedidos
                                </Typography>
                                </a>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} container justifyContent="center">
                        <Card className={classes.root} style={{backgroundColor:'#343F95'}}>
                            <CardContent> 
                                <Grid item xs={4}> 
                                    <Card className={classes.root}>
                                        <CardContent>
                                            {itemsHome.map((row) => (
                                                row.tipo === 'B' ? 
                                                    <Card className={classes.root}>
                                                        <CardContent>
                                                            <Link href={`/articulos/${row.url}`}>
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
                                </Grid> 

                                <Grid item xs={4}> 
                                    <Card className={classes.root}>
                                        <CardContent>
                                            {itemsHome.map((row) => (
                                                row.tipo === 'V' ? 
                                                    <Card className={classes.root}>
                                                        <CardContent>
                                                            <Link href={`/articulos/${row.url}`}>
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
                                                Vistos
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid> 

                                <Grid item xs={4}> 
                                    <Card className={classes.root}>
                                        <CardContent>
                                            {itemsHome.map((row) => (
                                                row.tipo === 'F' ? 
                                                    <Card className={classes.root}>
                                                        <CardContent>
                                                            <Link href={`/articulos/${row.url}`}>}
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
                                                Favoritos
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid> 
                            </CardContent>
                        </Card>
                </Grid>
            </Grid>

            {show.Carrito &&                                
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h5">
                            Carrito
                        </Typography>
                        <Carousel emulateTouch={true} showStatus={false} showIndicators={false} showThumbs={false} centerMode={true} centerSlidePercentage={20}>
                            { Object.keys(itemsHome).map((oneKey,i)=>{
                                    return (
                                    <div key={i}>
                                        {itemsHome[oneKey].tipo  === 'B' &&
                                        <Card className={classes.productCard} elevation={3} >
                                        <CardActionArea component={Link} to={`/articulos/${itemsHome[oneKey].url}`} >
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                {itemsHome[oneKey].marca}
                                            </Typography>
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
                                            Ver Detalle
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
                    <Typography variant="h5" component="h5">
                        Vistos
                    </Typography>
                    <Carousel emulateTouch={true} showStatus={false} showIndicators={false} showThumbs={false} centerMode={true} centerSlidePercentage={20}>
                        { Object.keys(itemsHome).map((oneKey,i)=>{
                                return (
                                <div key={i}>
                                    {itemsHome[oneKey].tipo  === 'V' &&
                                    <Card className={classes.productCard} elevation={3} >
                                    <CardActionArea component={Link} to={`/articulos/${itemsHome[oneKey].url}`} >
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {itemsHome[oneKey].marca}
                                        </Typography>
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
                                        Ver Detalle
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

            {show.Favoritos &&                                
                <Grid item xs={12}>
                    <Typography variant="h5" component="h5">
                        Favoritos
                    </Typography>
                    <Carousel emulateTouch={true} showStatus={false} showIndicators={false} showThumbs={false} centerMode={true} centerSlidePercentage={20}>
                        { Object.keys(itemsHome).map((oneKey,i)=>{
                                return (
                                <div key={i}>
                                    {itemsHome[oneKey].tipo  === 'F' &&
                                    <Card className={classes.productCard} elevation={3} >
                                    <CardActionArea component={Link} to={`/articulos/${itemsHome[oneKey].url}`} >
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {itemsHome[oneKey].marca}
                                        </Typography>
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
                                        Ver Detalle
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