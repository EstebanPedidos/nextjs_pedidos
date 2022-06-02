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
import Services from '../services/Services'

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

    function guardarFactura(){}

    const formulario = (
        <div>
            <Grid item xs={12}>
                <h3>Agrega Nueva Dirección</h3>
            </Grid>
            <Grid item xs={12}>
                <h4>Quien recibe:</h4>
            </Grid>
            <Grid item xs={4}>
                <TextField id="outlined-basic" label="Nombre..." variant="outlined" name="contact" onChange={handleChange}/>
            </Grid>
            <Grid item xs={4}>
                <TextField id="outlined-basic" label="Telefono..." variant="outlined" name="phone" onChange={handleChange}/>
            </Grid>
            <Grid item xs={4}>
                <TextField id="outlined-basic" label="Ext." variant="outlined" name="extension" onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
                <h4>Tipo de Dirección</h4>
            </Grid>
            <Grid item xs={12}>
                <TextField id="outlined-basic" label="Ej. Oficina, Casa, Torre" variant="outlined" name="nombre" onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
                <h4>Dirección</h4>
            </Grid>
            <Grid item xs={6}>
                <TextField id="outlined-basic" label="Calle" variant="outlined" name="address1" onChange={handleChange}/>
            </Grid>
            <Grid item xs={6}>
                <TextField id="outlined-basic" label="Colonia" variant="outlined" name="colonia" onChange={handleChange}/>
            </Grid>
            <Grid item xs={3}>
                <TextField id="outlined-basic" label="Num. Exterior" variant="outlined" name="exterior" onChange={handleChange}/>
            </Grid>
            <Grid item xs={3}>
                <TextField id="outlined-basic" label="Núm. Interior" variant="outlined" name="interior" onChange={handleChange}/>
            </Grid>
            <Grid item xs={3}>
                <TextField id="outlined-basic" label="C.P." variant="outlined" name="postalCode" onChange={handleChange}/>
            <CheckCircleOutlineIcon/>
            </Grid>
            <Grid item xs={12}>
            <FormControl className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                Estado | Delegación(requerido)
                </InputLabel>
                <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value=""
                name="province"
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                >
                    <MenuItem value="">
                        <em>Selecciona</em>
                    </MenuItem>
                    <MenuItem value={10}>CUAUHTEMOC</MenuItem>
                    <MenuItem value={20}>ALVARO OBREGON</MenuItem>
                    <MenuItem value={30}>BENITO JUAREZ</MenuItem>
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField id="outlined-basic" label="Entre calle" variant="outlined" name="entreCalle1" onChange={handleChange}/>
            </Grid>
            <Grid item xs={6}>
                <TextField id="outlined-basic" label="y calle" variant="outlined" name="entreCalle2" onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
                <h4>Observaciones de entrega</h4>
                <TextField id="outlined-basic" label="Fachada, colores, etc" variant="outlined" name="instrEntrega" onChange={handleChange}/>
            </Grid>

            <div>
                <Button variant="contained" color="primary" onClick={guardarFactura}>Guardar</Button>
            </div>
        </div>
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

        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            open={openSnack && snack === 'uno'}
            autoHideDuration={6000}
            onClose={handleCloseSnack}>
            <Alert onClose={handleCloseSnack} severity="success">
            La estructura de la clave de RFC es valida
            </Alert>
        </Snackbar>

        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            open={openSnack && snack === 'dos'}
            autoHideDuration={6000}
            onClose={handleCloseSnack}>
            <Alert onClose={handleCloseSnack} severity="warning">
            Por favor ingrese un RFC
            </Alert>
        </Snackbar>

        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            open={openSnack && snack === 'tres'}
            autoHideDuration={6000}
            onClose={handleCloseSnack}>
            <Alert onClose={handleCloseSnack} severity="error">
            Lo sentimos, el RFC no es valido.
            </Alert>
        </Snackbar>
        </div>
        </Layout>
    );
}
