import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {Box, Grid, Paper, Typography, Container, Backdrop,
    Button, Select, TextField, Divider, Modal, Fade,
    Card, CardContent, CardActions, CardMedia, CardActionArea, TextareaAutosize,
    FormHelperText, FormControl, MenuItem, IconButton,
    Input, InputLabel, InputAdornment, Chip, Snackbar, 
    Alert, Stack, Rating, Avatar, Hidden, collapseClasses} from '@mui/material';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';


import { Layout } from 'layout/Layout';
import MiCuentaSiderBar from 'layout/MiCuentaSiderBar'
import Services from '../../../services/Services' 

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
    margin: theme.spacing(2),
    padding: theme.spacing(2, 4, 3),
  },
  control: {
    padding: theme.spacing(2),
  },
  bgcontent:{backgroundImage: 'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)'},
  boxCardF:{
    height:'245px',
    boxShadow: '0px 0px 16px rgb(195 203 214 / 16%), 0px 1px 4px rgb(195 203 214 / 16%)',
  },
  boxContentF: {height: '6.6rem'},
  adressBox: {
    marginTop: theme.spacing(2),
  },
}));

export default function DatosFacturacion() {

    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);

    const [open, setOpen] = React.useState(false);
    const [openSnack, setOpenSnack] = React.useState(false);
    const [modal, setModal] = React.useState('');
    const [snack, setSnack] = React.useState('');
    const [clienteNum, setClienteNum] = useState('');
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState([]);
    const [statusRFC, setStatusRFC] = React.useState(false);
    const [cfdi, setCfdi] = React.useState('');

    let params = '?clienteNum=&'+clienteNum;

    useEffect(() => {

        let afiliado = localStorage.getItem('afiliado') 
        setClienteNum(localStorage.getItem('Cliente'));

        if(clienteNum !== undefined && clienteNum !== null && afiliado !== undefined && afiliado !== null){
            if(parseInt(clienteNum) !== 201221){

                Services('POST','/miCuenta/obtieneDatosFacturacion?clienteNum='+clienteNum,{})
                    .then( response =>{
                            console.log("Funcionó")
                            console.log(response.data)
                            setResult(response.data)
                        
                    }).catch(error => {
                        console.log("falló")
                        console.log(error.response)
                    });

            }else{
                router.push('/')
            } 
        }else{
            router.push('/')
        } 

    }, [clienteNum]) 


    const handleOpen = (event) => {
        const name = event.target.name;
        setModal(name)
        setOpen(true);
        setOpenSnack(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSnack('')
        setStatusRFC(false);
    };

    const handleCloseSnack = () => {
        setOpenSnack(false);
        setSnack('')
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        if(event.target.name === "cfdi"){
            setCfdi(event.target.value);
        }
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function validarRFC(){
        console.log('Entro al metodo')
        let rfc = '';
        rfc = inputs.rfc;
        console.log('rfc: '+rfc)
        let validacionExpresion = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
        if(rfc === null || rfc === ''){
            setOpenSnack(true);
            setSnack('dos')
        }else{
            if(rfc.match(validacionExpresion)){
                setStatusRFC(true);
                console.log(statusRFC)
                setOpenSnack(true);
                setSnack('uno')
            }else{
                setOpenSnack(true);
                setSnack('tres')
            }
        }     
    }

    function eliminaRfc(rfcNum, rfc){
        Services('POST','/miCuenta/eliminaRfc?rfcNum='+rfcNum+'&rfc='+rfc+'&clienteNum='+clienteNum,{})
        .then( response =>{
            refreshPage();
    }).catch(error => {
        console.log("falló")
        console.log(error.response)
    });

    }

    function refreshPage() {
        window.location.reload(false);
    }

    function guardarFactura(){
        Services('POST-NOT','/miCuenta/guardaDatoFactNuevo',{
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
		    delegacion:inputs.estadoDelegacion.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
		    mpago:parseInt(inputs.metodoPago)
        })
        .then( response =>{  
        })
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
                    <Button variant="contained" color="primary" onClick={guardarFactura}>Guardar</Button>
                </Grid>
            </Grid>
        </Box>
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
                        <Grid item xs={12} sm={12} lg={3}>
                            <MiCuentaSiderBar/>
                        </Grid>
                        <Grid item xs={12} sm={8} lg={9}>
                            <Box component="div">
                                <Grid 
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center" spacing={2}>
                                    <Grid item xs={12} sm={8}>   
                                        <Box component="div" py={2}>
                                            <Typography variant="h4" component="h1" sx={{fontWeight:'500'}}>
                                                Datos de Facturación
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} sm={2}>   
                                        <Box component="div" py={2}>
                                        <Link href="/misFacturas">
                                            <Button component="a" variant="outlined" fullWidth color="primary" size="large"  >Regresar</Button>
                                        </Link>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} sm={2}>   
                                        <Box component="div" py={2}>
                                            <Button variant="contained" elevation={0} fullWidth color="primary" size="large" name="Modal1" onClick={handleOpen}>Agregar RFC</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Divider light/>
                                <Box component="div" m={1} py={4}>
                                    <Grid container 
                                    direction="row"
                                    className={classes.root}
                                    justifyContent="space-around"
                                    alignItems="center" spacing={2}>
                                        <Grid item xs={12}>
                                            <Grid container justifyContent="flex-start" spacing={spacing}>
                                                {result.map((row) => (
                                                    <Grid item xs={6} sm={6} lg={4} key={row.rfcNum}> 
                                                        <Card className={classes.boxCardF}>
                                                            <CardContent>
                                                                <Box component="div" pb={2} display="flex" alignItems="center" justifyContent="center" mx="auto">
                                                                    <Avatar>
                                                                    <DescriptionOutlinedIcon />
                                                                    </Avatar>
                                                                </Box>
                                                                <Box component="div" className={classes.boxContentF}>
                                                                <Typography variant="h6" component="h2" key={row.rfcNum}>
                                                                    {row.clienteRfc}
                                                                </Typography> 
                                                                <Typography color="textSecondary" component="body2" gutterBottom>
                                                                    <Box component="div" className={classes.adressBox}>
                                                                        {row.direccionFiscal} 
                                                                    </Box>
                                                                </Typography>
                                                                </Box>
                                                            </CardContent>
                                                            <Divider variant="middle" light/>
                                                            <CardActions>
                                                                <Button size="small" fullWidth color="primary" name="Modal2" onClick={handleOpen}>VER</Button>
                                                                {row.rfcNum > 0 &&
                                                                <Button size="small" fullWidth color="primary" name="Modal3" onClick={eliminaRfc(row.rfcNum, row.clienteRfc)}>ELIMINAR</Button>
                                                                }
                                                            </CardActions>
                                                        </Card>
                                                    </Grid>
                                                ))}                      
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
                    <Box component="div" textAlign="center" m={1} py={2}>
                      <Typography component="h3" variant="h5">
                          <Box component="span" fontWeight="fontWeightMedium">
                          Ingresa Datos de Factura
                          </Box>
                      </Typography>
                      <Box component="div" py={1}>
                        <Divider/>
                      </Box>
                      <Typography component="subtitle1"  gutterBottom>Proporcionanos la siguiente información</Typography>                
                     </Box>

                    <Grid item xs={12}>
                        <TextField 
                            id="outlined-basic" 
                            label="RFC" 
                            variant="outlined" 
                            name="rfc"
                            placeholder="Ingresa un un RFC" 
                            onChange={handleChange}/>
                        <Button onClick={validarRFC}>
                            <ArrowDropDownCircleOutlinedIcon/>
                        </Button>
                        {statusRFC ? formulario : ''}
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
                    <Typography component="h3" variant="h5">
                        <Box component="span" fontWeight="fontWeightMedium">
                        Datos de Facturación
                        </Box>
                    </Typography>
                    <Box component="div" py={1}>
                    <Divider/>
                    </Box>
                    <Box component="div" textAlign="left" py={1}>
                    <Typography component="subtitle1"  gutterBottom>
                        RFC: XAXX010101000RAZÓN
                    </Typography>
                    <br/>
                    <Typography component="subtitle1"  gutterBottom>
                        RAZÓN SOCIAL: PEDIDOS SA DE CV
                    </Typography>
                    <br/>
                    <Typography component="subtitle1"  gutterBottom>
                        PERSONA:
                    </Typography>
                    <br/><br/>
                    <Typography component="subtitle1"  gutterBottom>
                        Dirección:
                    </Typography>
                    <br />
                    <Typography component="body2"  gutterBottom>
                    LAGO SILVERIO 258 ANAHUAC II MIGUEL HIDALGO
                    11320 CIUDAD DE MEXICO
                    </Typography>
                    </Box>
            </Box>  
            <Box component="div" justifyContet="center">
                    <Grid container direction="row"justifyContent="center" alignItems="center" spacing={2}>
                      <Grid item xs={12}>
                        <Button fullWidth color="primary" onClick={handleClose}>Cerrar</Button>
                      </Grid>
                    </Grid>
                </Box>          
        </div>
        </Fade>
        </Modal>

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open && modal === 'Modal3'}
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
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            ELIMINAR RFC
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {/* ¿Estás seguro de eliminar el RFC: {row.clienteRfc}? */}
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Button size="small" name="Modal3" onClick={handleClose}>Regresar</Button>
                        <Button size="small" color="primary" onClick={handleOpen}>Eliminar</Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
        </Fade>
        </Modal>


        </div>
        </Layout>
    );
}
