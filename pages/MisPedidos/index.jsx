import React, {useState, useEffect} from 'react';


import {Box, Grid, Paper, Typography, Container, Backdrop,
    Button, Select, TextField, Divider, Modal, Fade,
    Card, CardContent, CardActions, CardMedia, CardActionArea, TextareaAutosize,
    FormHelperText, FormControl, MenuItem, IconButton,
    Input, InputLabel, InputAdornment, Chip, 
    Stack, Rating } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import esLocale from 'date-fns/locale/es'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//Component
import { Layout } from 'layout/Layout';
import {useLocalStorage} from "../../hooks/useLocalStorage";
import Alertas from '../checkout/Alertas'

//Nextjs
import Link from 'next/link'
import { useRouter } from 'next/router'

import MiCuentaSiderBar from 'layout/MiCuentaSiderBar'
import Services from '../services/Services'

import axios from 'axios'


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
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  control: {
    padding: theme.spacing(3),
  },
  opacityBox: {
    opacity:'0.40',
},
paperBox: {
    padding: theme.spacing(1), 
    boxShadow: '0px 0px 16px rgb(195 203 214 / 16%), 0px 1px 4px rgb(195 203 214 / 16%)',
},
}));

export default function MisPedidos() {

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = React.useState('');
    const [result, setResult] = useState([]);
    const [resultado, setResultado] = useState(true);
    const [snack, setSnack] = React.useState('');
    const [file, setFile] = useState();
    const [pedido, setPedido] = useState(0);
    const [valueDate, setValueDate] = React.useState(null);
    const [alerta,setAlerta] = useState({})
    const [partidas,setPartidas] = useLocalStorage('SesPartidas',0)

    let clienteNum = '';
    let fechaPedido = '';

    const handleOpen = (event) => {
        const name = event.target.name;
        setModal(name)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSnack('')
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const saveFile = (e) => {
        setFile(e.target.files[0]);
    };

    useEffect(() => {

        clienteNum = localStorage.getItem('Cliente');
        fechaPedido = localStorage.getItem('fechaPedido');
        let afiliado =  localStorage.getItem('afiliado')

        if(clienteNum !== undefined && clienteNum !== null && afiliado !== undefined && afiliado !== null){
            if(parseInt(clienteNum) !== 201221){
                
                const getData= async ()=>{
                    if(fechaPedido === null || fechaPedido ===''){
                        console.log("if falso fechaPedido: "+fechaPedido)
                        Services('POST','/miCuenta/consultaPedidos?clienteNum='+clienteNum,{})
                        .then( response =>{
                                console.log("sin mes")
                                console.log(response.data)
                                setResult(response.data)
                                if(result.length = 1 && response.data[0].pedidoNum > 0){
                                    setResultado(true)
                                    console.log('Con resultados')
                                }else{
                                    setResultado(false)
                                    
                                    console.log(response.data)
                                }
                                localStorage.setItem('fechaPedido', '')
                            
                        }).catch(error => {
                            console.log("falló")
                            console.log(error.response)
                        });
                    }else{
                        console.log("if positivo fechaPedido: "+fechaPedido)
                        Services('POST','/miCuenta/consultaPedidosFecha?clienteNum='+clienteNum+'&fechaPedidos='+fechaPedido,{})
                        .then( response =>{
                            console.log("por mes")
                            setResult(response.data)
                            if(result.length = 1 && response.data[0].pedidoNum > 0){
                                setResultado(true)
                                console.log('Con resultados')
                            }else{
                                setResultado(false)
                                console.log('Sin resultados')
                            }
                            localStorage.setItem('fechaPedido', '')
                            
                        }).catch(error => {
                            console.log("falló")
                            console.log(error.response)
                        });
                    }
                }
        
                getData();        
            }else{
                router.push('/')
            } 
        }else{
            router.push('/')
        } 

    }, []) 

    function consultaPorFecha(date){
        let rangoFecha = new Date()
        if(date !== null || date !== '')
        rangoFecha = (date.getMonth()+1)+'/'+date.getFullYear();
        localStorage.setItem('fechaPedido', rangoFecha)
        refreshPage();
    }

    function refreshPage() {
        window.location.reload(false);
    }

    function agregarAlCarrito(pedidoNum){

        Services('PUT','/carritoyreservado/agregarAlCarrito?pedidoNum='+pedidoNum,{})
        .then( response =>{

            let partidas =  response.data
            if(partidas > 0){
                setPartidas(parseInt(partidas))
                setAlerta({severity:'success',mensaje:'Añadido con exito al Carrito',vertical:'bottom',horizontal:'right',variant:'filled'})              
            }else{
                setAlerta({severity:'error',mensaje:'Error al agregar',vertical:'bottom',horizontal:'right',variant:'filled'})
            }
            
        }).catch(error => {
            setAlerta({severity:'error',mensaje:'Hubo un error',vertical:'bottom',horizontal:'right',variant:'filled'})
        });
    }

    function cargarEvidencia(pedidoNum){
        const formData = new FormData();
        formData.append("file", file);

        axios
        .post("https://pedidos.com/Soho/MiCuenta/cargaEvidencia.asp", formData)
        .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
        
    
    }

    function cancelar(pedidoNum){
        Services('POST','/miCuenta/cancelaPedido?clienteNum='+clienteNum+'&pedidoNum='+pedidoNum,{})
        .then( response =>{
            const resultado = response.data; 
            console.log("resultado: "+resultado)
            switch(resultado){
                case '1':
                    setOpen(true);
                    setSnack('dos')
                    setTimeout(function(){
                        window.location.reload(); 
                    }, 100);
                    break;
                case '2'://Cliente incorrecto
                    setOpen(true);
                    setSnack('tres')
                    setTimeout(function(){
                       
                    }, 1000);
                break;
                case '3'://Error
                    setOpen(true);
                    setSnack('cuatro')
                    setTimeout(function(){
                       
                    }, 1000);
                break;
            }             
        }).catch(error => {
            console.log("falló")
            console.log(error.response)
        });
    }

    const Contenido = (
        result.map((row) => (
            <Grid container justifyContent="space-between" alignItems='center' spacing={2} key={row.pedidoNum}>
                <Grid item xs={12} sm={4}> 
                    <Card className={classes.paperBox}>
                        <CardContent>
                            <Grid container direction="row" alignItems="center" justifyContent="center">
                            <Grid item xs={10}>
                           
                                <Typography variant="h6" component="subtitle2" color="textPrimary" gutterBottom>
                                #{row.pedidoNum}
                                </Typography>
                           
                            <Typography variant="body2" >
                                 Total: ${(Math.round(row.precioTotal * 100) / 100).toFixed(2)}
                            </Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <IconButton aria-label="info" color='primary'>
                                <Link 
                                href={{
                                pathname: '/pedido-mayoristas',
                                search: '?pedido='+row.pedidoNum,
                                state: { pedido: row.pedidoNum }
                                }}>
                                <ArrowForwardIosIcon/>
                                </Link>
                            </IconButton>
                            </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            {row.estatusBoton === 'RESERVADO' &&
                                <FormControl fullWidth className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Reservado</InputLabel>
                                    <Select variant='outlined'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={handleChange}
                                    >
                                        <Button fullWidth color='primary' size="small">
                                            <MenuItem>
                                                <Link href={{
                                                pathname: '/pedido',
                                                search: '?pedido-mayoristas='+row.pedidoNum,
                                                state: { pedido: row.pedidoNum }
                                                }}>     
                                                    Detalle
                                                </Link>
                                            </MenuItem>
                                        </Button>
                                        {row.estatusEnvio != "RETURNED" && row.estatusEnvio != "REFUNDED" && 
                                            <Button fullWidth color='primary' size="small" onClick={(event) =>{event.preventDefault();localStorage.setItem('pedido', row.pedidoNum); window.location='https://pedidos.com/checkout/pedidoMiCuenta.asp?pedidoNum=' +row.pedidoNum}}>
                                                <Link href="/checkout/direccion-de-envio"> 
                                                    <a>
                                                        <MenuItem>
                                                            Pagar
                                                        </MenuItem>
                                                    </a>
                                                </Link>
                                            </Button>
                                        }
                                        {row.estatusComprobante != "CARGADO" && 
                                            <Button fullWidth size="small" 
                                            onClick={() => window.open('mailto:pagos@pedidos.com.mx?subject=Comprobante%20de%20Pago%20Pedido%20'
                                            +row.pedidoNum
                                            +'&body=Adjunta%20tu%20Archivo%20JPG,%20PNG%20o%20PDF.%20%0D%0A%0D%0A%0D%0A%0D%0A')}
                                            >   
                                                <MenuItem>
                                                    Comprobante de pago
                                                </MenuItem>
                                            </Button> 
                                        }
                                        {row.linkOxxo != "" && 
                                            <Button  fullWidth size="small" onClick={(event) => { event.preventDefault(); window.open(row.linkOxxo,'','width=800,height=550,left=300,top=100,toolbar=yes')}}>
                                                <MenuItem>Pago OXXO</MenuItem>
                                            </Button>
                                        }
                                        <Button  fullWidth size="small" onClick={(event) => { event.preventDefault();cancelar(row.pedidoNum)}}>
                                            <MenuItem>Cancelar</MenuItem>
                                        </Button>
                                    </Select>
                                </FormControl>
                            }
                            {row.estatusBoton === "PAGADO" &&
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">{row.estatusBoton}</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    
                                    onChange={handleChange}
                                    >
                                        <Button onClick={(event) => { event.preventDefault();cancelar(row.pedidoNum)}}>
                                            <MenuItem>Cancelar</MenuItem>
                                        </Button>
                                        {row.estatusComprobante != 'CARGADO' && 
                                            <Button onClick={cargarEvidencia(row.pedidoNum)}>
                                                <MenuItem>Comprobante de pago</MenuItem>
                                            </Button>
                                        }
                                    </Select>
                                </FormControl>
                            }
                            {row.estatusBoton !== "RESERVADO" && row.estatusBoton !== "PAGADO" &&
                                <Button variant="outlined" fullWidth size="large" name="Modal1" disabled>{row.estatusBoton}</Button>
                            }
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} direction="row" justifyContent="center"alignItems="center" flexDirection="row"> 
                    <Paper className={classes.paperBox}>
                        <Box component="div" m={1} py={2}>
                            <Grid container justifyContent="space-evenly" alignItems='center' spacing={spacing}>
                                <Grid item xs={8} sm={6} lg={3}> 
                                    <Typography variant="body2">{row.formaEnvio}</Typography>
                                </Grid>
                                <Grid item xs={4} sm={3} lg={2}> 
                                    <Typography variant="body2">{row.fechaEntrega}</Typography>
                                </Grid>
                                <Grid item xs={4} sm={3} lg={2}> 
                                    <Typography variant="body2">{row.horario}</Typography>
                                </Grid>
                                <Grid item xs={4} sm={8} lg={3}> 
                                    {row.estatusEnvio == "Procesando." && 
                                        <Typography variant="body2">Procesando.</Typography>
                                    }
                                    {row.estatusEnvio == "Procesando" && 
                                        <Typography variant="body2">Procesando</Typography>
                                    }
                                    {row.estatusEnvio == "Esperando pago" && 
                                        <Typography variant="body2">{row.estatusEnvio}</Typography>
                                    }
                                    {row.estatusEnvio == "Cancelado" && 
                                        <Typography variant="body2">Cancelado</Typography>
                                    }
                                    {row.estatusEnvio == "Entregado" && 
                                        <Typography variant="body2">Entregado</Typography>
                                    }
                                    {row.estatusEnvio == "Empacado" && 
                                        <Typography variant="body2">Empacado</Typography>
                                    }
                                    {row.estatusEnvio == "Empacando" && 
                                        <Typography variant="body2">Empacando</Typography>
                                    }
                                    {row.estatusEnvio == "Enviando" && 
                                        <Typography variant="body2">Enviando</Typography>
                                    }
                                    {row.estatusEnvio == "RETURNED" && 
                                        <Typography variant="body2">Regresado</Typography>
                                    }
                                    {row.estatusEnvio == "REFUNDED" && 
                                        <Typography variant="body2">Reembolsado</Typography>
                                    }
                                    {row.estatusEnvio == "PARTIAL REFUNDED" && 
                                        <Typography variant="body2">Reembolso Parcial</Typography>
                                    }
                                </Grid>
                                <Grid item xs={2} sm={4} lg={2}>
                                    <IconButton onClick={(event) => { event.preventDefault();agregarAlCarrito(row.pedidoNum)}}><ShoppingCartOutlinedIcon/></IconButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            ))
    )

    const sinResultados = (
        <Container maxWidth="lg">
            <Box component="div" mx="auto" py={8}>
                    <Box component="div" width="20%" mx="auto" py={4}>
                        <img className={classes.opacityBox} src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/page-info/notfound.svg" alt="Sin resutado de busquedas" />
                    </Box>
                    <Box component="div" textAlign="center">
                        <Typography component="h2" variant="h6">No ha realizado ningun pedido </Typography>
                        <Box component="div" py={2}>
                            <Typography component="p" variant="subtitle1">
                                <Link href="/Home">
                                    <Button variant="contained" color="primary" size="large" >Empezar a comprar</Button>
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
            </Box>
        </Container>
    )

    return(
        <Layout partidas={partidas}>
        <div>
             <Box className={classes.bgcontent} component="div">
                <Box component="div" m={1}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Grid item xs={12} sm={4} lg={3}>
                        <MiCuentaSiderBar/> 
                    </Grid>
                    <Grid item xs={12} sm={8} lg={9}>
                        <Box component="div">
                            <Grid 
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center">
                                <Grid item xs={12} sm={4}>   
                                    <Box component="div" py={2}>
                                        <Typography variant="h4" component="h1" sx={{fontWeight:'500'}}>
                                        Pedidos
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8}>   
                                    <Box component="div" py={1}>
                                    <Grid 
                                        container
                                        direction="row"
                                        justifyContent="flex-end"
                                        alignItems="center" spacing={1}>
                                            <Grid item xs={12} sm={6}>
                                                <LocalizationProvider
                                                dateAdapter={AdapterDateFns}
                                                adapterLocale={esLocale}
                                                >
                                                    <DatePicker
                                                    views={['month','year']}
                                                    label='Consulta pedidos pasados'
                                                    minDate={new Date('2015-01-02')}
                                                    maxDate={new Date()}
                                                    value={valueDate}
                                                    onChange={(newValue) => {
                                                        consultaPorFecha(newValue); 
                                                    }}
                                                    renderInput={(params) => <TextField {...params} helperText='Consultar por mes/año' />}
                                                    />
                                                </LocalizationProvider>  
                                            </Grid>
                                            
                                    </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Divider light/>
                            <Box component="div" m={1}>
                                <Grid container className={classes.root} spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container direction="row" justifyContent="center" spacing={2}>
                                            
                                            <Grid item xs={12}> 
                                            <Box component="div" py={2}>
                                            <Grid 
                                                container
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="center">
                                                <Grid item xs={8}>
                                                    <Typography variant="h6" component="h2" color="textSecondary"gutterBottom>
                                                        Pedidos recientes
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                <Button variant="outlined" color="primary" fullWidth size="large" name="Modal1" onClick={handleOpen}><HelpOutlineOutlinedIcon color="primary"/>&nbsp; Ayuda</Button>
                                                </Grid>
                                            </Grid>
                                            </Box>
                                            <Box>
                                                 {resultado ? Contenido : sinResultados}
                                            </Box>

                                            </Grid>
                                        
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                </Box> 
            </Box>

            {(alerta.hasOwnProperty('severity'))&&
                <Alertas setAlerta={setAlerta} alerta={alerta}/>
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
                    <Grid container spacing={2}>
                        <Grid item xs={12}> 
                            <Card className={classes.root}>
                                <CardContent>
                                    <ChatBubbleOutlineIcon fontSize="large" /> 
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Chat
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    Inicia una conversación
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12}> 
                            <Card className={classes.root}>
                                <CardContent>
                                    <WhatsAppIcon fontSize="large" /> 
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    WhatsApp
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    Envía un mensaje
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12}> 
                            <Card className={classes.root}>
                                <CardContent>
                                    <MailOutlineIcon fontSize="large" /> 
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Correo
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    En breve responderemos
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </div>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open && modal === 'Modal2'}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}> 
                            <Card className={classes.root}>
                                <CardContent>
                                    <ChatBubbleOutlineIcon fontSize="large" /> 
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Cargar Comprobante
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    Subiendo comprobante de pago {pedido}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <input type="file" onChange={saveFile} /> 
                                    <Divider/>
                                    <Button onClose={handleClose}>Regresar</Button>
                                    <Divider/>
                                    <Button onClose={cargarEvidencia}>Cargar comprobante de pago</Button>
                                </CardActions>
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
