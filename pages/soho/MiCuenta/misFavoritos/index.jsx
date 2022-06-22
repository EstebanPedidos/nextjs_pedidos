import React, {useState, useEffect} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import { Grid, Box, Paper,
	Typography, Button, Modal,
    Card, CardHeader, CardContent, CardActions, CardMedia, CardActionArea, Backdrop,
	Divider, Fade, Chip, LinearProgress,
	Skeleton, IconButton, Container, InputBase} from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Componentes
import { Layout } from 'layout/Layout';
import MiCuentaSiderBar from 'layout/MiCuentaSiderBar'
import Alertas from '../../../checkout/Alertas'
import {useLocalStorage} from "../../../../hooks/useLocalStorage";

import Services from '../../../services/Services'
import Link from 'next/link'
import { useRouter } from 'next/router'


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  media: {
    height: 130,
    width: 130,
    margin: 'auto',
  },
  root: {
    flexGrow: 1,
  },

  control: {
    padding: theme.spacing(3),
  },
  opacity20:{ opacity:'0.20'},
  cover: {
    width: 180,
    margin: 'auto',
    justifyContent: 'center',
  },
  pCardDetail: { flexGrow: 1, height: '31rem', boxShadow: '0px 0px 16px rgb(195 203 214 / 16%), 0px 1px 4px rgb(195 203 214 / 16%)', },
  bgcontent: {
    backgroundImage: 'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)',
    // background: '#F7F7F9',
    
 },
 barColor: {
    "& .MuiLinearProgress-barColorPrimary": {
        backgroundColor: 'blue',
    },
 },
}));

export default function MisFavoritos() {

    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = React.useState('');
    const [inputs, setInputs] = useState({});
    const [itemsFavoritosC, setItemsFavoritosC] = useState([]);
    const [itemsFavoritosF, setItemsFavoritosF] = useState([]);
    const [favoritosEliminados, setFavoritosEliminados] = useState([]);
    const [resultado, setResultado] = useState(false);
    const [itemNum, setItemNum] = useState('');
    const [alerta,setAlerta] = useState({})
    const [partidas,setPartidas]  = useLocalStorage('SesPartidas',0)
    const [favoritos,setFavoritos] = useLocalStorage('Favoritos',0)
    const [color, setColor] = useState('blue');
    
    

    let clienteNum =  0;
    let fechaPedido = '';

    useEffect(() => {

        clienteNum = localStorage.getItem('Cliente');
        fechaPedido = localStorage.getItem('fechaPedido');
        let afiliado =  localStorage.getItem('afiliado')

        const getData = async () => {

            
            Services('POST','/miCuenta/obtieneFavoritosFrecuentes?clienteNum='+clienteNum,{})
            .then( response =>{
                    
                    if(response.data.length = 1 && response.data.favoritosFrecuentes === "VACIO"){
                        setResultado(false)
                    }else{
                        setResultado(true)
                                               
                        setItemsFavoritosC(response.data.favoritosFrecuentes.filter(
                            (favoritosFrec) => favoritosFrec.tipo === "C"
                                              
                        ));

                        setItemsFavoritosF(response.data.favoritosFrecuentes.filter(
                            (favoritosFrec) => favoritosFrec.tipo === "F"
                        ));
                    }        
                    console.log('array stringy')
                    console.log(itemsFavoritos)
            }).catch(error => {
                console.log("falló")
                console.log(error.data)
            });
        }
        getData();
    }, []) 

    const handleOpen = (event) => {
        console.log("presiono boton logo")
        const name = event.target.name;
        const value = event.target.value;
        setModal(name)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    function eliminaFavorito(){
        Services('POST','/miCuenta/eliminaFavorito?cliente='+parseInt(clienteNum)+'&itemNum='+itemNum,{})
        .then( response =>{
                if(response.data === "OK"){
                    setOpen(false);
                    setAlerta({severity:'success',mensaje:'Elimnado de Favoritos',vertical:'bottom',horizontal:'right',variant:'filled'})
                    //setFavoritosEliminados(itemNum);
                    setFavoritos(favoritos--);
                    refreshPage();
                }
                else{
                    setAlerta({severity:'error',mensaje:'Hubo un error',vertical:'bottom',horizontal:'right',variant:'filled'})
                }  

        }).catch(error => {
            setAlerta({severity:'error',mensaje:'Hubo un error',vertical:'bottom',horizontal:'right',variant:'filled'})
        });

    }

    function refreshPage() {
        window.location.reload(false);
    }

    function colorLinearProgress(porcentaje) {
        if(porcentaje <= 25){
            setColor('#7BA4FF')
        }else if(porcentaje > 25){
            setColor('#accb37')
        }else if(porcentaje > 80){
            setColor('#FF8A77')
        }
        return color;
     }


    const Contenido = (
        
        <Grid container justifyContent="flex-start" spacing={spacing}>
            {itemsFavoritosC.map((row) => (
                <Grid item xs={6} sm={6} lg={4} key={row.itemNum}> 
                    <Card className={classes.pCardDetail}>
                        <CardHeader sx={{height:'65px'}}                            
                            action={ row.tipo !== "C" &&
                            <IconButton aria-label="delete" name="Modal1" onClick={(event) => { handleOpen(event); setItemNum(row.itemNum);}}>
                                <HighlightOffIcon/>
                            </IconButton>
                            }
                        />
                        <Link href={`/articulos/${row.itemNum}`}>
                            <CardMedia
                            className={classes.media}
                            component="img"
                            alt={row.itemNum}
                            image={"https://pedidos.com/myfotos/large/(L)" + row.itemNum + ".jpg"}
                            title={row.itemNum}
                            />
                        </Link>
                        <CardContent>
                            <Divider/>
                            <Box component="div" pt={2}>
                                <Typography mt={2}variant="subtitle1"  textAlign="left"  gutterBottom>{row.marca}</Typography>
                                <Typography sx={{ height:'45px', overflow: 'hidden'}} variant="body2" color="textSecondary"  component="p">
                                     {row.tituloCompuesto} 
                                </Typography>
                                <Grid container direction="row" justifyContent="flex-start" alignItems='center'>
                                    <Grid item>
                                     <Typography variant="h6" component="body1">${row.precio.toFixed(2)}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box p={1} color="grey.600" sx={ {textDecoration:"line-through", }} >
                                            <Typography variant="subtitle1">${row.precioDeLista.toFixed(2)}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                 <Box component="div">
                                    {row.tipo === "C" && row.diasRestantes < 1 ? 
                                    <Box component="div" justifyContent="center" m="auto" sx={{justifyContent: "center", display: "flex" }}>
                                        <Chip icon={<NotificationsNoneIcon />} label="Puedes necesitarlo" variant="outlined" />
                                    </Box>       
                                    :
                                    row.diasPromedio > 0 &&
                                    <Box component="div" sx={{ width: '100%' }}  >
                                        <Typography variant="subtitle1">Próxima compra en {row.diasRestantes} días</Typography>
                                        <LinearProgress 
                                            variant="determinate" value={(100 - (row.diasRestantes * 100)/row.diasPromedio)}
                                            // Se comenta esto por que si no aparece el error Too many re-renders. React limits the number of renders to prevent an infinite loop
                                            // sx={{
                                            //     '& .MuiLinearProgress-bar1Determinate': {
                                            //         backgroundColor: colorLinearProgress(100 - (row.diasRestantes * 100)/row.diasPromedio),
                                            //     }
                                            // }}
                                        />
                                    </Box>
                                    }
                                </Box>
                            </Box>
                        </CardContent>
                        {row.disponibilidad > 0 ?
                        <CardActions>
                            <Button><RemoveIcon/></Button>
                            <InputBase
                                className={classes.input}
                                placeholder="1"
                                inputProps={'aria-label'}
                                name="cantidad"
                                disabled
                            />
                            <Button color="primary"><AddIcon/></Button>
                            <Button color='secondary' variant="contained" fullWidth size="large" >
                                <ShoppingCartOutlinedIcon/>
                            </Button>
                        </CardActions>
                        : 
                        <Box component="div" justifyContent="center" m="auto" sx={{justifyContent: "center", display: "flex" }}>
                            <Chip icon={<RunningWithErrorsIcon />} label="Sin Existencia" variant="outlined" />
                        </Box>
                    }
                    </Card>
                </Grid>
            ))}
            {itemsFavoritosF.map((row) => (
                <Grid item xs={6} sm={6} lg={4} key={row.itemNum}> 
                    <Card className={classes.pCardDetail}>
                        <CardHeader 
                            action={ row.tipo !== "C" &&
                            <IconButton aria-label="delete" name="Modal1" onClick={(event) => { handleOpen(event); setItemNum(row.itemNum);}}>
                                <HighlightOffIcon/>
                            </IconButton>
                            }
                        />
                        <Link href={`/articulos/${row.itemNum}`}>
                            <CardMedia
                            className={classes.media}
                            component="img"
                            alt={row.itemNum}
                            image={"https://pedidos.com/myfotos/large/(L)" + row.itemNum + ".jpg"}
                            title={row.itemNum}
                            />
                        </Link>
                        <CardContent>
                            <Divider/>
                            <Box component="div" pt={2}>
                                <Typography mt={2}variant="subtitle1"  textAlign="left"  gutterBottom>{row.marca}</Typography>
                                <Typography sx={{ height:'45px', overflow: 'hidden'}} variant="body2" color="textSecondary"  component="p">
                                     {row.tituloCompuesto} 
                                </Typography>
                                
                                <Grid container direction="row" justifyContent="flex-start" alignItems='center'>
                                    <Grid item>
                                     <Typography variant="h6" component="body1">${row.precio.toFixed(2)}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box p={1} color="grey.600" sx={ {textDecoration:"line-through", }} >
                                            <Typography variant="subtitle1">${row.precioDeLista.toFixed(2)}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box component="div">
                                    {row.tipo === "C" && row.diasRestantes < 1 ? 
                                    <Box component="div" justifyContent="center" m="auto" sx={{justifyContent: "center", display: "flex" }}>
                                        <Chip icon={<NotificationsNoneIcon />} label="Puedes necesitarlo" variant="outlined" />
                                    </Box> 
                                    :
                                    row.diasPromedio > 0 &&
                                    <Box sx={{ width: '100%' }}  >
                                        <Typography variant="subtitle1">Proxima compra en {row.diasRestantes} días</Typography>
                                        <LinearProgress 
                                            variant="determinate" value={(100 - (row.diasRestantes * 100)/row.diasPromedio)}
                                            sx={{
                                                '& .MuiLinearProgress-bar1Determinate': {
                                                    backgroundColor: colorLinearProgress(100 - (row.diasRestantes * 100)/row.diasPromedio),
                                                }
                                            }}
                                        />
                                    </Box>
                                    }
                                </Box>
                            </Box>
                        </CardContent>
                        {row.disponibilidad > 0 ?
                        <CardActions>
                           
                            <Button><RemoveIcon/></Button>
                            <InputBase
                                className={classes.input}
                                placeholder="1"
                                inputProps={'aria-label'}
                                name="cantidad"
                                disabled
                            />
                            <Button color="primary"><AddIcon/></Button>
                            <Button variant="contained" color='secondary' fullWidth size="large" >
                                <ShoppingCartOutlinedIcon/>
                            </Button>
                        </CardActions>
                        : 
                        <Box component="div" justifyContent="center" m="auto" sx={{justifyContent: "center", display: "flex" }}>
                            <Chip icon={<RunningWithErrorsIcon />} label="Sin Existencia" variant="outlined" />
                        </Box> 
                       
                    }
                    </Card>
                </Grid>
            ))}
        </Grid>
            
            
    )

    const sinResultados = (
        
        <Container maxWidth="lg">
            <Box component="div" mx="auto" py={8}>
                    <Box component="div" width="20%" mx="auto" py={4}>
                        <img className={classes.opacity20} src="https://pedidos.com/myfotos/pedidos-com/pagina/modal/nofav/heart.svg" alt="Sin resutado de busquedas" />
                    </Box>
                    <Box component="div" textAlign="center">
                        <Typography component="h2" variant="h6">Aún no hay favoritos </Typography>
                        <Typography component="p" variant="subtitle1">Los artículos que compras y los que le pones un corazón aparecerán aquí.</Typography>
                        <Box component="div" py={2}>
                            <Typography component="p" variant="subtitle1">
                                <Link href="/"><Button variant="contained" color="primary" size="large" >Comenzar </Button></Link>
                            </Typography>
                        </Box>
                    </Box>
            </Box>
        </Container>
        
    )

    return(
        <Layout favoritos={favoritos} partidas={partidas} title="Mis Favoritos | Pedidos.com">
        <div>
            <Box className={classes.bgcontent} component="div">
                <Box component="div" mx={1}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <MiCuentaSiderBar/> 
                        </Grid>
                        <Grid item xs={12} sm={12} md={9}lg={9}>
                            <Box component="div" m={1}>
                                <Grid 
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center">
                                    <Grid item xs={12}> 
                                        <Box component="div" py={2}>
                                            <Typography variant="h4" component="h1" sx={{fontWeight:'500'}}>
                                                Mis favoritos
                                            </Typography>
                                        </Box>  
                                    </Grid>
                                </Grid>
                                <Divider light/>
                                <Box component="div" m={1} py={4}>
                                    {resultado ? Contenido : sinResultados}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box> 
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
                    <Box component="div" sx={{
                        position: 'absolute',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        
                        padding: '2rem',
                    }}>
                        <Box component="div" textAlign="center" m={1} py={2}>
                        <Typography component="h3" variant="h5">
                            <Box component="span" fontWeight="fontWeightMedium">
                                Eliminar de Favoritos
                            </Box>
                        </Typography>
                        <Box component="div" py={1}>
                            <Divider/>
                        </Box>
                        <Typography component="subtitle1"  gutterBottom>¿Estás seguro de eliminar este producto de tus favoritos?</Typography>                
                        </Box>
                        <Box component="div" justifyContet="center">
                            <Grid container direction="row"justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Button type="button" variant="outlined" fullWidth size="large" onClick={handleClose}>Regresar</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button  type="button" variant="contained" fullWidth size="large" disableElevation color="primary" onClick={eliminaFavorito}>Eliminar</Button>
                            </Grid>
                            </Grid>
                        </Box>
                        {(alerta.hasOwnProperty('severity'))&&
                            <Alertas setAlerta={setAlerta} alerta={alerta}/>
                        } 
                    </Box>
                </Fade>
            </Modal>
        </div>
        </Layout>
    );
}
