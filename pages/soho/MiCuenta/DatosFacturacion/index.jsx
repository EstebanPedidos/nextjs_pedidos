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

import AddRFC from './add/Index'
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
  boxCardF:{
    height:'260px',
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
    const [modal, setModal] = React.useState('');
    const [clienteNum, setClienteNum] = useState('');
    const [result, setResult] = useState([]);
    const [rfcNum, setRfcNum] = useState('');
    const [clienteRfc, setClienteRfc] = useState('');
    const [alerta,setAlerta]        = useState({})
    const [loading,setLoading]      = useState(false)
    const [addOpen,setAddOpen]      = useState(false)


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
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    return(
        <Layout title="Mis Datos de Facturaci&oacute;n">
         
        <div>
            <Box sx={{backgroundImage: 'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)'}} component="div">
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
                                alignItems="center" spacing={2}>
                                    <Grid item xs={12} sm={6} lg={8}>   
                                        <Box component="div" py={2}>
                                            <Typography variant="h4" component="h1" sx={{fontWeight:'500'}}>
                                                Datos de Facturación
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} sm={6} lg={2}>   
                                    {(!addOpen)?
                                        <Box component="div" py={2}>
                                            <Button variant="contained" elevation={0} fullWidth color="primary" size="large" onClick={()=>{setAddOpen(true)}}>Agregar RFC</Button>
                                        </Box>
                                        :
                                        ''
                                    }
                                    </Grid>
                                </Grid>
                                <Divider light/>
                                {(!addOpen)?
                                    <Box component="div" m={1} py={4}>
                                        <Grid container 
                                        direction="row"
                                        className={classes.root}
                                        justifyContent="space-around"
                                        alignItems="center" spacing={2}>
                                            <Grid item xs={12}>
                                                <Grid container justifyContent="flex-start" spacing={spacing}>
                                                    {result.map((row) => (
                                                        row.clienteRfc !== 'XAXX010101000' &&
                                                        <Grid item xs={6} sm={6} lg={4} key={row.rfcNum}> 
                                                            <Card variant='auto' className={classes.boxCardF}>
                                                                <CardContent>
                                                                    <Box component="div" pb={2} display="flex" alignItems="center" justifyContent="center" mx="auto">
                                                                        <Avatar sx={{backgroundColor:'#E7ECF3', color:'#002d75'}}>
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
                                                                    <Button size="small" fullWidth color="primary" name="Modal2" onClick={(event) => {event.preventDefault(); handleOpen(event); setRfcNum(row.rfcNum);}}>VER</Button>
                                                                    {row.rfcNum > 0 &&
                                                                    <Button size="small" fullWidth color="primary" name="Modal3" onClick={(event) => {event.preventDefault(); setRfcNum(row.rfcNum); setClienteRfc(row.clienteRfc);}}>ELIMINAR</Button>
                                                                    }
                                                                </CardActions>
                                                            </Card>
                                                        </Grid>
                                                    ))}                      
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                :
                                    <Box component="div" p={2}>
                                        <AddRFC setAddOpen={setAddOpen} setAlerta={setAlerta} alerta={alerta}/>
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
                        {result.map((row) => (
                            row.rfcNum === rfcNum &&
                            <Box component="div" textAlign="left" py={1}>
                                <Typography component="subtitle1"  gutterBottom>
                                    RFC: {row.clienteRfc}
                                </Typography>
                                <br/>
                                <Typography component="subtitle1"  gutterBottom>
                                    RAZÓN SOCIAL:{row.razonSocial}
                                </Typography>
                                <br/>
                                <Typography component="subtitle1"  gutterBottom>
                                    PERSONA: {row.clienteRfc.length === 13 ? 'Fisica' : 'Moral'}  
                                </Typography>
                                <br/>
                                <Typography component="subtitle1"  gutterBottom>
                                    DIRECCIÓN: {row.direccionFiscal+' '+row.colonia+' '}
                                    <br/>
                                    {row.ciudad +' '+row.cp+' '+row.estado}
                                </Typography>
                                <br />
                            </Box>
                        ))}  
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
                                ¿Estás seguro de eliminar el RFC: {clienteRfc}?
                            </Typography>
                        </CardContent>
                        <Divider />
                        <CardActions>
                            <Button size="small" name="Modal3" onClick={handleClose}>Regresar</Button>
                            <Button size="small" color="primary" onClick={eliminaRfc}>Eliminar</Button>
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
