import React, {useState, useEffect} from 'react';
import {Box, Grid, Paper, Typography, Container, Backdrop,
    Button, Select, TextField, Divider, Modal, Fade,
    Card, CardContent, CardActions, Chip,
    MenuList, MenuItem, IconButton,
    InputLabel, InputAdornment, Hidden,Menu} from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import styles from '../../../../styles/account.module.css';
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
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
//Component
import { Layout } from 'layout/Layout';
import {useLocalStorage} from "../../../../hooks/useLocalStorage";
import Alertas from '../../../checkout/Alertas'
//Modales
import  Help  from '../../../../components/modals/Help';
//Nextjs
import Link from 'next/link'
import { useRouter } from 'next/router'

import MiCuentaSiderBar from 'layout/MiCuentaSiderBar'
import Services from '../../../services/Services'

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

  control: {
    padding: theme.spacing(3),
  },

paperBox: {
    padding: theme.spacing(1), 
    boxShadow: '0px 0px 16px rgb(195 203 214 / 16%), 0px 1px 4px rgb(195 203 214 / 16%)',  
    marginBottom: '1rem',
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const [reload, setReaload] = useState(false);

    const router = useRouter();

    let clienteNum = '';
    let fechaPedido = '';

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleOpen = (event) => {
        const name = event.target.name;
        setModal(name)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSnack('')
        setAnchorEl(null);
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

    }, [reload]) 

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
        clienteNum = localStorage.getItem('Cliente');
        Services('POST','/miCuenta/cancelaPedido?clienteNum='+clienteNum+'&pedidoNum='+pedidoNum,{})
        .then( response =>{
            const resultado = response.data; 

            switch(resultado){
                case 1:
                    setAlerta({severity:'success',mensaje:'Exito, pedido cancelado',vertical:'bottom',horizontal:'right',variant:'filled'})
                    setReload(true)
                    break;
                case 2://Cliente incorrecto
                    setAlerta({severity:'error',mensaje:'Cliente incorrecto',vertical:'bottom',horizontal:'right',variant:'filled'})
                break;
                case 3://Error
                    setAlerta({severity:'error',mensaje:'Hubo un error',vertical:'bottom',horizontal:'right',variant:'filled'})
                break;
            }             
        }).catch(error => {
            console.log("falló")
            console.log(error.response)
        });
    }

    const Contenido = (
        result.map((row) => ( 
            <Box component="div" key={row.pedidoNum}>
                <Paper elevation={0} className={classes.paperBox}>
                    <Grid container justifyContent="space-between" alignItems='center' spacing={2} >
                        <Grid item xs={12} sm={3} lg={3}> 
                            <Grid container direction="row" alignItems="center" justifyContent="center">
                                <Grid item xs={6} sm={12} lg={12}>
                                    <Link 
                                        href={{
                                        pathname: '/soho/MiCuenta/pedido',
                                        search: '?pedido='+row.pedidoNum,
                                        state: { pedido: row.pedidoNum }
                                        }}
                                    >
                                        <Button color="primary" size="large" fullWidth endIcon={<ArrowForwardIosIcon />}>
                                           <Typography
                                           variant='h6' component='h3'> #{row.pedidoNum} </Typography>
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={6} sm={12} lg={12}>
                               
                                    <Box component="div" pr={5}>
                                        {row.estatusBoton === 'RESERVADO' &&
                                        <div>
                                            <Button
                                            variant="outlined"
                                            fullWidth size="large"
                                            id="basic-button"
                                            aria-controls={openMenu ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={openMenu ? 'true' : undefined}
                                            onClick={handleClick}
                                            > 
                                                Reservado
                                            </Button>
                                            <Menu variant='outlined' elevation={0}
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={openMenu}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                   
                                                        <MenuItem>
                                                            <Link href={{
                                                            pathname: '/soho/MiCuenta/pedido',
                                                            search: '?pedido='+row.pedidoNum,
                                                            state: { pedido: row.pedidoNum }
                                                            }}>     
                                                            
                                                                Detalle
                                                           
                                                           </Link>
                                                        </MenuItem>
                                                    
                                                    {row.estatusEnvio != "RETURNED" && row.estatusEnvio != "REFUNDED" && 
                                                        <MenuItem>
                                                            <Link href="/checkout/direccion-de-envio" onClick={localStorage.setItem('Pedido', row.pedidoNum)}> 
                                                                <a>
                                                                    Pagar
                                                                </a>
                                                            </Link>
                                                        </MenuItem>
                                                    }
                                                    {row.estatusComprobante != "CARGADO" && 
                                                    <MenuItem 
                                                        onClick={() => window.open('mailto:pagos@pedidos.com.mx?subject=Comprobante%20de%20Pago%20Pedido%20'
                                                        +row.pedidoNum
                                                        +'&body=Adjunta%20tu%20Archivo%20JPG,%20PNG%20o%20PDF.%20%0D%0A%0D%0A%0D%0A%0D%0A')}
                                                    >
                                                        Comprobante de pago
                                                    </MenuItem>
                                                    }
                                                    {row.linkOxxo != "" && 
                                                        <MenuItem
                                                            onClick={(event) => { event.preventDefault(); 
                                                            window.open(row.linkOxxo,'','width=800,height=550,left=300,top=100,toolbar=yes')}}
                                                        >
                                                            Pago OXXO
                                                        </MenuItem>
                                                    }
                                                    <MenuItem onClick={(event) => { event.preventDefault();cancelar(row.pedidoNum);}}>
                                                        Cancelar
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        }
                                        {row.estatusBoton === "PAGADO" &&
                                        <div>
                                            <Button
                                            variant="outlined"
                                            fullWidth size="large"
                                            id="basic-button"
                                            aria-controls={openMenu ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={openMenu ? 'true' : undefined}
                                            onClick={handleClick}
                                            > 
                                                Reservado
                                            </Button>
                                                <Menu
                                                    id="basic-menu"
                                                    anchorEl={anchorEl}
                                                    open={openMenu}
                                                    onClose={handleClose}
                                                    MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                    }}
                                                > 
                                                    <MenuItem 
                                                        onClick={(event) => { event.preventDefault();
                                                        cancelar(row.pedidoNum)}}
                                                    >
                                                        Cancelar
                                                    </MenuItem>
                                                    {row.estatusComprobante != 'CARGADO' && 
                                                        <MenuItem onClick={cargarEvidencia(row.pedidoNum)}>
                                                            Comprobante de pago
                                                        </MenuItem>
                                                    }
                                                </Menu>
                                        </div>
                                        }
                                        {row.estatusBoton !== "RESERVADO" && row.estatusBoton !== "PAGADO" &&
                                            <Button variant="outlined" fullWidth size="large" name="Modal1" disabled>{row.estatusBoton}</Button>
                                        }
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={9} lg={9} direction="row" justifyContent="center"alignItems="center" flexDirection="row"> 
                            
                                <Box component="div" m={1} py={2}>
                                    <Grid container justifyContent="space-evenly" alignItems='center' spacing={spacing}>
                                        <Grid item xs={4} sm={3} lg={2}> 
                                            <Typography variant="body2">{row.fechaEntrega}</Typography>
                                        </Grid>
                                        <Grid item xs={8} sm={6} lg={2}> 
                                            <Typography variant="body2">{row.formaEnvio}</Typography>
                                        </Grid>
                                        <Grid item xs={4} sm={3} lg={2}> 
                                            <Typography variant="body2">{row.horario}</Typography>
                                        </Grid>
                                        <Grid item xs={4} sm={3} lg={2}>
                                            <Typography variant="body2" >
                                                ${(Math.round(row.precioTotal * 100) / 100).toFixed(2)}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} sm={6} lg={3}> 
                                                        {row.estatusEnvio == "Procesando." && 
                                                            <Chip icon={<CachedOutlinedIcon />} label="Procesado..." variant="outlined" />
                                                        }
                                                        {row.estatusEnvio == "Procesando" && 
                                                            <Chip icon={<CachedOutlinedIcon />} label="Procesado..." variant="outlined" />
                                                        }
                                                        {row.estatusEnvio == "Esperando pago" && 
                                                             <Chip icon={<TimerOutlinedIcon />} label="Esperando Pago" variant="outlined" />
                                                        }
                                                        {row.estatusEnvio == "Cancelado" && 
                                                            <Chip icon={<CancelOutlinedIcon />} label="Cancelado" variant="outlined" />
                                                        }
                                                        {row.estatusEnvio == "Entregado" && 
                                                            <Chip icon={<CheckCircleOutlineOutlinedIcon />} label="Entregado" variant="outlined" />          
                                                        }
                                                        {row.estatusEnvio == "Empacado" && 
                                                            <Chip icon={<Inventory2OutlinedIcon />} label="Empacado" variant="outlined" />
                                                         
                                                        }
                                                        {row.estatusEnvio == "Empacando" && 
                                                            <Chip icon={<Inventory2OutlinedIcon />} label="Empacado" variant="outlined" />
                                                        }
                                                        {row.estatusEnvio == "Enviando" && 
                                                            <Chip icon={<LocalShippingOutlinedIcon />} label="Enviando" variant="outlined" />
                                                        }
                                                        {row.estatusEnvio == "RETURNED" && 
                                                            <Chip icon={<AssignmentReturnOutlinedIcon />} label="Regresado" variant="outlined" />
                                                        }
                                                        {row.estatusEnvio == "REFUNDED" && 
                                                            <Chip icon={<PaidOutlinedIcon />} label="Reembolsado" variant="outlined" />
                                                        }
                                                        {row.estatusEnvio == "PARTIAL REFUNDED" && 
                                                            <Chip icon={<PaidOutlinedIcon />} label="Reembolso Parcial" variant="outlined" />
                                                        }
                                        </Grid>
                                        
                                        
                                        <Grid item xs={2} sm={3} lg={1}>
                                            <IconButton onClick={(event) => { event.preventDefault();agregarAlCarrito(row.pedidoNum)}}><ShoppingCartOutlinedIcon/></IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>
                            
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            ))
    )

    const sinResultados = (
        <Container maxWidth="lg">
            <Box component="div" mx="auto" py={8}>
                    <Box component="div" width="20%" mx="auto" py={4}>
                        <img sx={{ opacity:'0.40',}} src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/page-info/notfound.svg" alt="Sin resutado de busquedas" />
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
        <Layout partidas={partidas} title="Mis Pedidos | Pedidos.com">
        <div>
             <Box className={styles.bgcontent} component="div">
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
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                            <Box component="div" m={1}>
                                <Grid 
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center">
                                    <Grid item xs={6} sm={7}>   
                                        <Box component="div" py={2}>
                                            <Typography variant="h4" component="h1" sx={{fontWeight:'500'}}>
                                                Pedidos
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} sm={5}>   
                                        <Box component="div" py={1}>
                                            <LocalizationProvider
                                            dateAdapter={AdapterDateFns}
                                            adapterLocale={esLocale}
                                            >
                                                <DatePicker
                                                    views={['year','month']}
                                                    label='Año / Mes'
                                                    minDate={new Date('2015-01-02')}
                                                    maxDate={new Date()}
                                                    value={valueDate}
                                                    onChange={(newValue) => {
                                                        setValueDate(newValue); 
                                                    }}
                                                    onMonthChange={(newValue) => {
                                                        consultaPorFecha(newValue); 
                                                    }}
                                                    renderInput={(params) => <TextField {...params} helperText='Busca pedido por fecha' />}
                                                />
                                            </LocalizationProvider>
                                        </Box>
                                    </Grid>
                                </Grid>
                                {/* <Divider light/> */}
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
                                                            <Grid item xs={6} sm={7} lg={10}>
                                                                <Typography variant="h6" component="h2" color="textSecondary"gutterBottom>
                                                                    Pedidos recientes
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={6}  sm={5} lg={2}>
                                                                <Help tipo={'4'}/>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <Box>
                                                    <Grid container justifyContent="space-between" alignItems='center'>
                                                        <Grid item xs={3}>
                                                                <Typography variant="subtitle2" color="textSecondary">
                                                                    No.Pedido
                                                                </Typography>
                                                        </Grid>
                                                        <Hidden lgDown>
                                                            <Grid item xs={9}>
                                                            <Grid container justifyContent="space-between" alignItems='center' spacing={1}>
                                                                <Grid item  xs={2}>
                                                                    <Typography variant="subtitle2" color="textSecondary">
                                                                        Fecha
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={3}>
                                                                    <Typography variant="subtitle2" color="textSecondary">
                                                                        Entrega
                                                                    </Typography>
                                                                </Grid>
                                                                
                                                                <Grid item xs={2}>
                                                                    <Typography variant="subtitle2" color="textSecondary">
                                                                        Total
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={2}>
                                                                    <Typography variant="subtitle2" color="textSecondary">
                                                                        Estatus
                                                                    </Typography>
                                                                </Grid>
                                                                
                                                                <Grid item xs={1}>
                                                                
                                                                </Grid>
                                                            </Grid>
                                                            </Grid>
                                                        </Hidden>
                                                    </Grid>
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

            {(alerta.hasOwnProperty('severity'))&&
                <Alertas setAlerta={setAlerta} alerta={alerta}/>
            } 

        </div>
        </Layout>
    );
}
