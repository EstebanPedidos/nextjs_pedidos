import React, {useState, useEffect} from 'react';

//MUI
import {Box, Grid, Paper, Typography, Container, Backdrop,
    Button, Select, TextField, Divider, Modal, Fade,
    Card, CardContent, CardActions, CardMedia, CardActionArea, TextareaAutosize,
    FormHelperText, FormControl, MenuItem, IconButton,
    Input, InputLabel, InputAdornment, Chip, Snackbar, 
    Alert, Rating } from '@mui/material';

import esLocale from 'date-fns/locale/es'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';

import { makeStyles } from '@material-ui/core/styles';


import { Layout } from 'layout/Layout';
import MiCuentaSiderBar from 'layout/MiCuentaSiderBar'
import Services from '../services/Services'




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
  opacityBox: {
    opacity:'0.40',
},
  opacity20:{ opacity:'0.20'},
  bgcontent: {
    backgroundImage: 'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)',
    // background: '#F7F7F9',
},
paperBox: {
    padding: theme.spacing(1), 
    boxShadow: '0px 0px 16px rgb(195 203 214 / 16%), 0px 1px 4px rgb(195 203 214 / 16%)',
    height: '100%',
    marginBottom: theme.spacing(1), 
    
},
}));

export default function MisNotasCredito() {

    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
    // const [selectedDate, handleDateChange] = useState(null);
    const [valueDate, setValueDate] = React.useState(null);

    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = React.useState('');
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState([]);
    const [resultado, setResultado] = useState(true);
    const [titulo, setTitulo] = useState('');

    const localeMap = {
        es: esLocale,
    };

    let clienteNum = '';
    let fechaNotas = '';

    const handleOpen = (event) => {
        const name = event.target.name;
        setModal(name)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const valueDate = event.target.value;
        setInputs(valueDate => ({...values, [name]: valueDate}))
    }

    useEffect(() => {

        clienteNum = localStorage.getItem('Cliente');
        fechaNotas = localStorage.getItem('fechaNotas');
        let afiliado =  localStorage.getItem('afiliado')

        if(clienteNum !== undefined && clienteNum !== null && afiliado !== undefined && afiliado !== null){
            if(parseInt(clienteNum) !== 201221){
                
                if(fechaNotas === null || fechaNotas ===''){
                    setTitulo('Notas recientes')
                    Services('POST','/miCuenta/consultaNotasFecha?clienteNum='+clienteNum+'&fechaNotas=',{})
                    .then( response =>{
                            console.log("Service consultaNotasFecha ")
                            console.log("sin mes")
                            console.log(response.data)
                            setResult(response.data)
                            if(result.length = 1 && response.data[0].invoiceNum > 0){
                                setResultado(true)
                                console.log('Con resultados')
                            }else{
                                setResultado(false)
                                
                                console.log(response.data)
                            }
                    }).catch(error => {
                        console.log("fall??")
                        console.log(error.response)
                    });
                }else{
                    Services('POST','/miCuenta/consultaNotasFecha?clienteNum='+clienteNum+'&fechaNotas='+fechaNotas,{})
                    .then( response =>{
                        setTitulo('Mis Notas del '+fechaNotas)
                        console.log("por mes")
                        setResult(response.data)
                        if(result.length = 1 && response.data[0].invoiceNum > 0){
                            setResultado(true)
                            console.log('Con resultados')
                            localStorage.setItem('fechaNotas', '')
                        }else{
                            setResultado(false)
                            console.log('Sin resultados')
                        }
                        localStorage.setItem('fechaNotas', '')
                        
                    }).catch(error => {
                        console.log("fall??")
                        console.log(error.response)
                    });
                }
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
        localStorage.setItem('fechaNotas', rangoFecha)
        refreshPage();

    }

    function refreshPage() {
        window.location.reload(false);
    }

    const Contenido = (
        result.map((row) => (
            <Card className={classes.paperBox} key={row.invoice}>
                <CardContent>
                    <Grid container justifyContent="space-between" alignItems='center' spacing={2} >
                        <Grid item xs={12} sm={12} lg={4}> 
                            <Grid container direction="row" alignItems="center" justifyContent="center">
                                <Grid item xs={12} sm={12} lg={8}>
                                    <Typography variant="h6" component="subtitle2" color="textPrimary" gutterBottom>
                                        #{row.invoice}
                                    </Typography>
                                    <Typography variant="body2" >
                                        Creada: {row.fechaFactura}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container justifyContent="center" alignItems='center' spacing={2}>
                                <Grid item xs={3} sm={2}> 
                                    <Typography variant="body2">${row.monto}</Typography>
                                </Grid>
                                <Grid item xs={3} sm={4}> 
                                    <Typography variant="body2">{row.rfc}</Typography>
                                </Grid>
                                <Grid item xs={3} sm={3}> 
                                    <Typography variant="body2">
                                    {row.aplicada && row.pedidoNc > 0 && row.pedidoNc }
                                        
                                    {!(row.aplicada) && row.pedidoNc === 0 && 'Pendiente'}    
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} sm={3}> 
                                    <Typography variant="body2">
                                        {row.aplicada ?
                                        'Procesando'
                                        :'Sin aplicar'
                                        }
                                    </Typography>
                                </Grid> 
                            </Grid>
                        </Grid>    
                        
                    </Grid>
                </CardContent>
           </Card>
            ))
    )

    const sinResultados = (
        <Container maxWidth="lg">
            <Box component="div" mx="auto" py={8}>
                    <Box component="div" width="20%" mx="auto" py={4}>
                        <img className={classes.opacityBox} src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/page-info/notfound.svg" alt="Sin resutado de busquedas" />
                    </Box>
                    <Box component="div" textAlign="center">
                        <Typography component="h3" variant="h6">No encontramos ningun registro</Typography>
                        <Typography component="p" variant="subtitle1">Intenta alguna otra</Typography>
                    </Box>
            </Box>
        </Container>
        
    )

    return(
        <Layout>
        
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
                                <Grid item xs={12} sm={6}>   
                                    <Box component="div" py={2}>
                                        <Typography variant="h4" component="h1" sx={{fontWeight:'500'}}>
                                         Notas de cr??dito
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>   
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
                                                        label='Consulta notas pasadas'
                                                        minDate={new Date('2015-01-02')}
                                                        maxDate={new Date()}
                                                        value={valueDate}
                                                        onChange={(newValue) => {
                                                            consultaPorFecha(newValue); 
                                                        }}
                                                        renderInput={(params) => <TextField {...params} helperText='Mes / A??o' />}
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
                                                        <Grid item >
                                                            <Typography variant="h6" component="h2" color="textSecondary"gutterBottom>
                                                            {titulo}
                                                            </Typography>
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
                                    Inicia una conversaci??n
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
                                    Env??a un mensaje
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
        
        </div>
        </Layout>
    );
}
