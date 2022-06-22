import React, {useState, useEffect} from 'react';
import fileDownload from 'js-file-download';
//hooks
import {useLocalStorage} from "../../../../hooks/useLocalStorage";
//MUI
import {Box, Grid, Paper, Typography, Container, Backdrop,
    Button, Select, TextField, Divider, Modal, Fade,
    MenuItem, IconButton, Input, InputLabel, InputAdornment, Chip, Snackbar, 
    Alert, Stack, Rating  } from '@mui/material';

import esLocale from 'date-fns/locale/es'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import SearchIcon from '@mui/icons-material/Search';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';

import makeStyles from '@mui/styles/makeStyles';

import Link from 'next/link';
//components
import { Layout } from 'layout/Layout';
import  Help  from '../../../../components/modals/Help';
import MiCuentaSiderBar from 'layout/MiCuentaSiderBar'
import Alertas from '../../../checkout/Alertas';
import Refactura from './Refactura/Index'
import Services from '../../../services/Services'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    flexGrow: 1,
  },
/*   paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: theme.shadows[5],
    margin: theme.spacing(2),
    padding: theme.spacing(2, 4, 3),
  }, */
  
bgcontent: {
    width:'100%',
    backgroundImage: 'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)',
    // background: '#F7F7F9',
},
paperBox: {
    padding: theme.spacing(2), 
    boxShadow: '0px 0px 16px rgb(195 203 214 / 16%), 0px 1px 4px rgb(195 203 214 / 16%)',
},
}));

export default function MisFacturas() {

    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
    const [valueDate, setValueDate] = React.useState(null);

    const [open, setOpen] = React.useState(false);
    const [openSnack, setOpenSnack] = React.useState(false);
    const [modal, setModal] = React.useState('');
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState([]);
    const [resultado, setResultado] = useState(true);
    const [titulo, setTitulo] = useState('');
    const [clienteNum,setClienteNum]     = useLocalStorage('Cliente',201221)
    const [afiliado,setAfiliado]         = useLocalStorage('afiliado','N')
    const [usu_nombre,seUsu_nombre]      = useLocalStorage('Usu_Nomb','')
    const [fechaFacturas,seFechaFacturas]= useLocalStorage('fechaFacturas','')
    const [snack, setSnack] = React.useState('');
    const [statusRFC, setStatusRFC] = React.useState(false);
    const [cfdiSelect, setCfdiSelect] = React.useState([]);
    const [resultCP, setResultCP] = React.useState([]);
    const [estadoDelegacion, setEstadoDelegacion] = React.useState('');
    const [metodoPago, setMetodoPago] = React.useState('');
    const [cfdi, setCfdi] = React.useState('');
    const [alerta, setAlerta] = React.useState({});
    const [addOpen, setAddOpen] = React.useState(false);
    const [invoicePedido, setInvoicePedido] = React.useState({invoice_num:'',pedido_num:0});

    const localeMap = {
        es: esLocale,
    };

    const handleOpen = (event) => {
        const name = event.target.name;
        if(name==='Modal2'){
            setAddOpen(true)
        }else{
            setModal(name)
            setOpen(true);
        }
       
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = (event.target.name=== 'rfc')?event.target.value.toUpperCase():event.target.value;
        setInputs(values => ({...values, [name]: value}))
        if(event.target.name === "cfdi"){
            setCfdi(event.target.value);
        }
        if(event.target.name === "estadoDelegacion"){
            setEstadoDelegacion(event.target.value);
        }
        if(event.target.name === "metodoPago"){
            setMetodoPago(event.target.value);
        }
    }

    useEffect(() => {   
        if(clienteNum !== undefined && clienteNum !== null && afiliado !== undefined && afiliado !== null){
            if(parseInt(clienteNum) !== 201221){                
                const getData= async ()=>{        
                    if(fechaFacturas === null || fechaFacturas ===''){
                        setTitulo('Facturas recientes')
                        Services('POST','/miCuenta/consultaFacturas?clienteNum='+clienteNum+'&fechaFacturas=',{})
                        .then( response =>{
                            console.log('sin fecha ')
                            setResult(response.data)
                            console.log(response.data)
                            if(result.length = 1 && response.data[0].pedidoNum > 0){
                                setResultado(true)
                            }else{
                                setResultado(false)
                            }
                        }).catch(error => {
                            console.log("falló sin")
                            console.log(error.response)
                        });
                    }else{ 
                        Services('POST','/miCuenta/consultaFacturas?clienteNum='+clienteNum+'&fechaFacturas='+fechaFacturas,{})
                        .then( response =>{
                            setTitulo('Mis Facturas del '+fechaFacturas)
                            setResult(response.data)
                            if(result.length = 1 && response.data[0].pedidoNum > 0){
                                setResultado(true)
                            }else{
                                setResultado(false)
                            }
        
                            localStorage.setItem('fechaFacturas', '')
                        }).catch(error => {
                            console.log("falló con")
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

    async function validarRFC(){
        let rfc = await inputs.rfc
        let validacionExpresion = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
        if(rfc === null || rfc === '' || rfc == undefined){
            setAlerta({severity:'error',mensaje:'Ingresa un RFC.',vertical:'bottom',horizontal:'right',variant:'filled'})
        }else{
            if(rfc.match(validacionExpresion)){
                let tipoPersona = await (rfc == 13) ? 'fisica' : 'moral'
                if(tipoPersona !== ''){
                    Services('POST','/miCuenta/obtieneCfdi?tipoPersona='+tipoPersona,{})
                    .then( response =>{
                        setStatusRFC(true);
                        setCfdiSelect(response.data)
                    }).catch(error => {
                        setAlerta({severity:'error',mensaje:'Error al validar CFDI',vertical:'bottom',horizontal:'right',variant:'filled'})
                    });
                }else{
                    setAlerta({severity:'error',mensaje:'Tipo de persona vacia',vertical:'bottom',horizontal:'right',variant:'filled'})
                }                
            }else{
                setAlerta({severity:'error',mensaje:'El RFC no es valido',vertical:'bottom',horizontal:'right',variant:'filled'})
            }            
        }     
    }

    function descargaPdf(factura){
        console.log('Entro a descarga')
        window.open("/Soho/MiCuenta/factura.asp?factura="+factura+".pdf", "_blank");
    }

    function descargaXml(factura){
        console.log("Descarga XML");
        Services('POST','/miCuenta/consultaArchivo?clienteNum='+clienteNum+'&invoice='+factura+'&extension=xml',{})
        .then( response =>{
            if(response.data === "CLIENTE INVALIDO")
            {
                console.log("El cliente no corresponde con el XML a descargar","Error");
            }
            else
            {
            const linkSource = `data:application/XML;base64,${response.data}`;
            const downloadLink = document.createElement("a");
            const fileName = (factura.replace(/ /g, ""))+".xml";

            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
            }
        })
    }

    function consultarCp(){
        console.log("consultar CP");
        Services('POST','/miCuenta/consultaCp?cp='+inputs.cp,{})
        .then( response =>{
            console.log("Consultar CP service");
            console.log(response.data);
            setResultCP(response.data);
        })
    }

    function consultaPorFecha(date){
        let rangoFecha = new Date()
        if(date !== null || date !== '')
        rangoFecha = (date.getMonth()+1)+'/'+date.getFullYear();
        localStorage.setItem('fechaFacturas', rangoFecha)
        refreshPage();
    }

    function getRefacturacion(){
        Services('POST-NOT','/miCuenta/getRefacturacion',{
            clienteNum:parseInt(clienteNum),
		    clienteRfc:inputs.rfc.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
            usoCfdi: inputs.cfdi,
		    razonSocial:inputs.razonSocial.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
		    telefono:inputs.telefono,
		    contact:inputs.contacto.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
		    direccion:inputs.direccion.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
		    cp:inputs.cp,
		    colonia:inputs.colonia.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
		    estado:inputs.estadoDelegacion.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
            invoice_num:invoicePedido.invoice_num,
            pedido_num:invoicePedido.pedido_num,
		    delegacion:inputs.estadoDelegacion.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
		    mpago:parseInt(inputs.metodoPago)
        })
        .then( response =>{  
        })
    }

    function refreshPage() {
        window.location.reload(false);
    } 


    const formulario = (
        <Box component="div" pt={4}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InputLabel required id="demo-simple-select-outlined-label">
                        Uso de CDFI
                    </InputLabel>
                    <Select fullWidth variant="outlined"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={cfdi}
                    name="cfdi"
                    onChange={handleChange}
                    label="Uso de CDFI"
                    >
                        {cfdiSelect.map((select) => (
                            <MenuItem key={select.idUsu} value={select.idUsu}>{select.descripcion}</MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth
                        id="filled-textarea"
                        label="Razón Social" 
                        placeholder="Ingresa tu razón social"
                        multiline
                        variant="outlined"
                        name="razonSocial" 
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth
                        id="filled-textarea"
                        label="Teléfono" 
                        placeholder="Ingresa un teléfono"
                        multiline
                        variant="outlined"
                        name="telefono" 
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth
                        id="filled-textarea"
                        label="Contacto" 
                        placeholder="Ingresa un nombre"
                        multiline
                        variant="outlined"
                        name="contacto" 
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth
                        id="filled-textarea"
                        label="Dirección" 
                        placeholder="Ingresa la calle y número"
                        multiline
                        variant="outlined"
                        name="direccion" 
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Box display="flex" justifyContent="flex-start" m={1} p={1} >
                        <TextField fullWidth
                            id="filled-textarea"
                            label="Código Postal" 
                            placeholder="Ingresa un C.P."
                            multiline
                            variant="outlined"
                            name="cp" 
                            onChange={handleChange}
                        />
                        <IconButton color="primary" aria-label="add CP" onClick={consultarCp}>
                            <CheckCircleOutlineIcon/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth
                        id="filled-textarea"
                        label="Colonia" 
                        placeholder="Ingresa una colonia"
                        multiline
                        variant="outlined"
                        name="colonia" 
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel id="demo-simple-select-outlined-label">
                        Estado | Delegación
                    </InputLabel>
                    <Select fullWidth variant="outlined"
                    label="Estado | Delegación"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={estadoDelegacion}
                    name="estadoDelegacion"
                    onChange={handleChange}
                    onFocus={consultarCp}
                    >
                        <MenuItem value="-">Selecciona</MenuItem>
                        {resultCP.map((select) => (
                            <MenuItem key={select.delegacion} value={select.estado.replace("MEXICO","MÉXICO").toLowerCase()+'-'+select.delegacion.toLowerCase()}>{select.estado.replace("MEXICO","MÉXICO")+' - '+select.delegacion}</MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <InputLabel id="demo-simple-select-outlined-label">
                        Método de Pago (requerido)
                    </InputLabel>
                    <Select fullWidth variant='outlined'
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={metodoPago}
                    name="metodoPago"
                    onChange={handleChange}
                    label="Selecciona"
                    >
                            <MenuItem value="99">NO IDENTIFICADO</MenuItem>
                            <MenuItem value="1">EFECTIVO</MenuItem>
                            <MenuItem value="2">CHEQUE NOMINATIVO </MenuItem>
                            <MenuItem value="3">TRANSFERENCIA ELECTRONICA DE FONDOS</MenuItem>
                            <MenuItem value="4">TARJETA DE CREDITO</MenuItem>
                            <MenuItem value="28">TARJETA DE DEBITO</MenuItem>
                            <MenuItem value="29">TARJETA DE SERVICIOS</MenuItem>
                            <MenuItem value="99">PAYPAL</MenuItem>
                            <MenuItem value="5">MONEDERO ELECTRONICO</MenuItem>
                            <MenuItem value="6">DINERO ELECTRONICO</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <Button color="primary" fullWidth onClick={getRefacturacion}>Generar</Button>
                </Grid>
            </Grid>
        </Box>
    )

    return(
        <Layout title="Mis Facturas | Pedidos.com">
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
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <Box component="div" m={1}>
                            <Grid 
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center">
                                <Grid item xs={12} sm={4}>   
                                    <Box component="div" py={2}>
                                        <Typography variant="h4" component="h1" sx={{fontWeight:'500'}}>
                                        Facturas
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
                                                <Box component="div" mt={3}>
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
                                                            renderInput={(params) => <TextField {...params} helperText='Consulta facturas pasadas' />}
                                                        />
                                                    </LocalizationProvider>
                                                </Box>  
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Link href="/soho/MiCuenta/DatosFacturacion">
                                                    <Button variant="contained" color="primary" fullWidth size="large">Datos de Facturación</Button>
                                                    </Link>
                                            </Grid>
                                    </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Divider light/>
                            {(addOpen)?
                            <Refactura setAddOpen={setAddOpen} setAlerta={setAlerta} alerta={alerta}  invoicePedido={invoicePedido}/>
                            :
                            <Box component="div" m={1}>
                                <Grid container className={classes.root} spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container direction="row" justifyContent="center" spacing={2}>
                                            <Grid item>
                                                <Grid container direction="row" justifyContent="flex-end" >
                                                    
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}> 
                                            <Box component="div" py={2}>
                                            <Grid 
                                                container
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="center">
                                                <Grid item xs={8}>
                                                    <Typography variant="h6" component="h2" color="textSecondary"gutterBottom>
                                                        {titulo}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Help tipo={'4'}/>
                                                </Grid>
                                            </Grid>
                                            </Box>
                                            <Box>
                                            {resultado ? 
                                                result.map((row) => (
                                                    <Grid
                                                    container
                                                    direction="row"
                                                    justifyContent="center"
                                                    alignItems="center" key={row.pedidoNum}>
                                                        <Grid item xs={12}>
                                                            <Box component="div" py={2}>
                                                                <Paper variant='auto' className={classes.paperBox}>
                                                                    <Grid
                                                                    container
                                                                    direction="row"
                                                                    justifyContent="space-around"
                                                                    alignItems="center">
                                                                        <Grid item xs={12} sm={12} lg={2}>
                                                                            <Typography variant="h6"component="subtitle2" gutterBottom>
                                                                            #{row.pedidoNum}
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item xs={4} sm={2}> 
                                                                            <Typography variant="h6" component="subtitle2" gutterBottom>
                                                                                {row.invoice}
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item xs={4} sm={2}>
                                                                            <Typography variant="subtitle1" gutterBottom>
                                                                                {row.fechaFactura}
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item xs={4} sm={2}>
                                                                            <Typography variant="subtitle1" gutterBottom>
                                                                                {row.horaFactura}
                                                                            </Typography>
                                                                        </Grid>
                                                                            
                                                                        <Grid item xs={12} sm={2}>
                                                                            <Box component="div">
                                                                                {row.tienePdf ? 
                                                                                    <IconButton aria-label="openPDF" onClick={(event) => { event.preventDefault(); descargaPdf(row.invoice);} }>
                                                                                        <PictureAsPdfIcon/>
                                                                                    </IconButton>
                                                                                    :
                                                                                    <IconButton aria-label="noAvailable" disabled>
                                                                                        <BlockOutlinedIcon/>
                                                                                    </IconButton>
                                                                                    }
                                        
                                                                                    {row.tieneXml ? 
                                                                                    <IconButton aria-label="Download" onClick={(event) => { event.preventDefault(); descargaXml(row.invoice)}} download={row.invoice+".pdf"}>
                                                                                    <DescriptionIcon/>
                                                                                    </IconButton>
                                                                                    
                                                                                    :
                                                                                    <IconButton aria-label="noAvailable" disabled>
                                                                                    <BlockOutlinedIcon/>
                                                                                    </IconButton>
                                                                                }
                                                                            </Box>
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={2} >
                                                                            <Button variant="contained" fullWidth size="large" color="primary" name="Modal2" 
                                                                                onClick={(event) => { handleOpen(event); setInvoicePedido({invoice_num:row.invoice, pedido_num:row.pedidoNum});} }>
                                                                                    Editar
                                                                            </Button>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Paper>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                ))
                                                : 
                                                <Container maxWidth="lg">
                                                    <Box component="div" mx="auto" py={8} >
                                                            <Box component="div" width="20%" mx="auto" py={4}>
                                                                <img className={classes.opacityBox} src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/page-info/notfound.svg" alt="Sin resutado de busquedas" />
                                                            </Box>
                                                            <Box component="div" textAlign="center">
                                                                <Typography component="h3" variant="h6">No encontramos facturas</Typography>
                                                            </Box>
                                                    </Box>
                                                </Container>
                                                }
                                            </Box>
                                            </Grid>
                                        
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                            }
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
                                <h2>{usu_nombre}, ¿Necesitas Refacturar?</h2> 
                            </Grid>

                            <Grid item xs={12}> 
                                <div className="video-responsive">
                                    <iframe
                                    width="360"
                                    height="420"
                                    src={`https://www.youtube.com/embed/MGuOo1_xpBI`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                    />
                                </div>
                            </Grid>

                            <Grid item xs={12}> 
                                <Button onClick={handleClose}>
                                    <Chip label="Después" variant="outlined"/>
                                </Button>
                                <Button onClick={handleClose}>
                                    <Chip label="Entendido" color="primary"/>
                                </Button>
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
                        <Box component="div" textAlign="center" m={1} py={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography component="h3" variant="h5">
                                        <Box component="span" fontWeight="fontWeightMedium">
                                            Edita para Refacturar
                                        </Box>
                                    </Typography>
                                    <Box component="div" py={1}>
                                        <Divider variant="middle" light/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Chip label=" Este proceso solo se podrá 1 vez. Contáctanos para otro cambio." color="primary" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item>
                                        <TextField fullWidth
                                            id="outlined-basic" 
                                            label="RFC" 
                                            variant="outlined" 
                                            name="rfc"
                                            placeholder="Ingresa un un RFC" 
                                            onChange={handleChange}
                                            value={(inputs)?(inputs.hasOwnProperty('rfc'))?inputs.rfc:'':''}/>
                                        </Grid>
                                        <Grid item>
                                        <IconButton color="primary" aria-label="startProcess" onClick={validarRFC}>
                                            <ArrowDropDownCircleOutlinedIcon/>
                                        </IconButton>   
                                        {statusRFC ? formulario : ''}
                                        </Grid>
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </Fade>
            </Modal>

            
        </div>
        {/* <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            open={openSnack && snack === 'uno'}
            autoHideDuration={6000}
            onClose={handleCloseSnack}>
                <div>
            <Alert onClose={handleCloseSnack} severity="success">
            La estructura de la clave de RFC es valida
            </Alert>
            </div>
        </Snackbar>

        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            open={openSnack && snack === 'dos'}
            autoHideDuration={6000}
            onClose={handleCloseSnack}>
                <div>
            <Alert onClose={handleCloseSnack} severity="warning">
            Por favor ingrese un RFC
            </Alert>
            </div>
        </Snackbar>

        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            open={openSnack && snack === 'tres'}
            autoHideDuration={6000}
            onClose={handleCloseSnack}>
                <div>
            <Alert onClose={handleCloseSnack} severity="error">
            Lo sentimos, el RFC no es valido.
            </Alert>
            </div>
        </Snackbar>   */}
        {(alerta.hasOwnProperty('severity'))&&
            <Alertas setAlerta={setAlerta} alerta={alerta}/>
        } 
        </Layout>
    );
}
