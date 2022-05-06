
import {useState} from 'react'
//next js
import { useRouter } from 'next/router'
//Material UI
import {Box, Grid, Paper, Typography, Button,
    Avatar, Divider, Link} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import CircularProgress from '@mui/material/CircularProgress';
//import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
//Componenetes
import ModalExecutive from './modals/ModalExecutive';
import Precios from '../services/Precios';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    blueD: { backgroundColor: theme.palette.primary.dark,},
    blueL: {  backgroundColor: theme.palette.primary.light, },
    orangeL: {  backgroundColor: theme.palette.secondary.light,},
  }));

export default function Resumen(props){
    const classes   = useStyles();
    const enviosF   = ['DHL','FEDEX','ESTAFETA','REDPACK'];
    let   router    = useRouter();
    let   data      = props.data
    const [iscambio,setIsCambio] = useState(false)
    
    function cambio(index){
        setIsCambio(true)
        router.push(
        (index == 0)?'/checkout/direccion-de-envio':
        (index == 1)?'/checkout/facturacion':
        (index == 2)?'/checkout/forma-de-envio':
        (index == 3)&&'/checkout/forma-de-pago'
        ) 
    }

    return (
        <div>
            <Box component="div" pt={1}>
                <div>
                    {(data.hasOwnProperty('jsonResumen'))&&
                    <ModalExecutive resenapedidos={data.jsonResumen.resumen.resenaPedidos} setEjecutivo={props.setEjecutivo} ejecutivo={props.ejecutivo.ejecutivo}/>
                    }
                </div>
                <Box component="div">
                    <div className={classes.root}>
                        <Grid container  alignItems="center" spacing={1}>
                            <Grid item xs={6} sm={12} lg={6}>
                                <Box textAlign="left">  
                                    <Typography component="h2" variant="h6">Pedido #{data.pedido} </Typography>
                                </Box>  
                            </Grid>
                            <Grid item xs={6} sm={12} lg={6}>
                                {(data.hasOwnProperty('jsonResumen'))&&
                                <Paper variant="outlined"> 
                                    <Typography variant="body2">   
                                        <Box py={1} fontWeight="fontWeightMedium" textAlign="center">    
                                            {data.jsonResumen.resumen.partidas} {(data.jsonResumen.resumen.partidas > 1)?`productos`:`producto`}
                                        </Box>
                                    </Typography>
                                </Paper>
                                }
                            </Grid>
                        </Grid>
                    </div>              
                </Box>
                <Box component="div" py={2}>    
                    <div className={classes.root}>
                        <Grid container spacing={1}>
                            {(data.hasOwnProperty('jsonResumen'))&&
                            (data.jsonResumen.resumen.direccion.dirNum > 0 && data.jsonResumen.resumen.direccion.nombreDireccion !== '')&&
                            <Grid item xs={12}>
                                <Paper variant="outlined">
                                    <Box component="div" m={1}>
                                        <div className={classes.root}>
                                            <Grid container justifyContent="space-around" alignItems="center">
                                                <Grid item xs={2} sm={3} md={2} lg={2} >
                                                    {(data.jsonResumen.resumen.direccion.nombreDireccion !== 'PickUP')?
                                                    <Avatar className={classes.orangeL}>
                                                        <LocalShippingOutlinedIcon/>
                                                    </Avatar>
                                                    :
                                                    <Avatar className={classes.orangeL}>
                                                        <StorefrontOutlinedIcon/>
                                                    </Avatar>
                                                    }
                                                </Grid>
                                                <Grid item xs={6} sm={9} md={7} lg={8}>
                                                    <Box component="div">
                                                        {
                                                            (data.jsonResumen.resumen.direccion.nombreDireccion !== 'PickUP')?
                                                                <Box component="div">
                                                                    <Typography variant="body2" sx={{fontWeight:'600',}}>
                                                                        Entregar en {/*  {data.jsonResumen.resumen.direccion.dirNum}. */}
                                                                        {data.jsonResumen.resumen.direccion.nombreDireccion}
                                                                    </Typography>  
                                                                    <Typography variant="body2">
                                                                        
                                                                        {data.jsonResumen.resumen.direccion.direccion.substring(0, 38)}...
                                                                    </Typography> 
                                                                </Box> 
                                                            :
                                                            <Box component="div">
                                                                <Typography variant="body2" sx={{fontWeight:'600',}}>
                                                                    {data.jsonResumen.resumen.entregaPickup} en PickUp Center
                                                                </Typography>
                                                                <Typography variant="body2">
                                                                    Alejandro Dumas 135, C.P 11550, CDMX, Polanco.
                                                                </Typography> 
                                                            </Box>
                                                        }

                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4} sm={12} md={3} lg={2}>
                                                {(iscambio)?
                                                    <CircularProgress />
                                                    :
                                                    <Button color="primary" fullWidth size="small" onClick={()=>{cambio(0)}}>Cambiar</Button>
                                                }
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Box>
                                </Paper>
                            </Grid>
                            }           
                            {(data.hasOwnProperty('jsonResumen'))&&
                            (data.jsonResumen.resumen.facturas.rfc !== '' && data.jsonResumen.resumen.facturas.rfc !== 'XAXX010101000')&&
                                <Grid item xs={12}>
                                    <Paper variant="outlined">
                                        <Box component="div" m={1}>
                                            <div className={classes.root}>
                                                <Grid container justifyContent="space-around" alignItems="center">
                                                    <Grid item xs={2} sm={3} md={2} lg={2} >
                                                    <Avatar className={classes.blueL}>
                                                        <StickyNote2OutlinedIcon/> 
                                                    </Avatar>
                                                    </Grid>
                                                    <Grid item xs={6} sm={9} md={7} lg={8}>
                                                        <Box component="div">
                                                            <Typography variant="body2" sx={{fontWeight:'600',}}>
                                                                Facturar a RFC 
                                                            </Typography>
                                                            <Typography variant="body2" >
                                                                {data.jsonResumen.resumen.facturas.rfc}
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={4} sm={12} md={3} lg={2}>
                                                        {(iscambio)?
                                                        <CircularProgress />
                                                        :
                                                        <Button color="primary" fullWidth size="small" onClick={()=>{cambio(1)}}>Cambiar</Button>
                                                        }
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </Box>
                                    </Paper>
                                </Grid>
                            }
                            {(data.hasOwnProperty('jsonResumen'))&&
                            (data.jsonResumen.resumen.envio.tipo.trim() !== '') &&
                                <Grid item xs={12}>
                                    <Paper variant="outlined">
                                        <Box component="div" m={1}>
                                            <div className={classes.root}>
                                                <Grid container justifyContent="space-around" alignItems="center">                            
                                                    {
                                                    (enviosF.includes(data.jsonResumen.resumen.envio.tipo))?
                                                        <Grid container justifyContent="space-around" alignItems="center">
                                                            <Grid item xs={2} sm={3} md={2} lg={2} >
                                                                <Avatar className={classes.blueD}>
                                                                    <LocalShippingOutlinedIcon/>
                                                                </Avatar>
                                                            </Grid>
                                                            <Grid item xs={6} sm={9} md={7} lg={8}>
                                                                <Box component="div">
                                                                    <Typography variant="body2">
                                                                        <b>Paquetería {data.jsonResumen.resumen.envio.tipo}</b><br/>
                                                                        Demoras por COVID-19
                                                                    </Typography>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={4} sm={12} md={3} lg={2}>
                                                                <Button color="primary" fullWidth size="small" onClick={()=>{cambio(2)}}>Cambiar</Button>
                                                            </Grid>
                                                        </Grid>
                                                            :
                                                        <Grid container justifyContent="space-around" alignItems="center">
                                                            <Grid item xs={2} sm={3} md={2} lg={2} >
                                                                {(data.hasOwnProperty('jsonResumen'))&&
                                                                (data.jsonResumen.resumen.direccion.nombreDireccion === 'PickUP')?
                                                                <Avatar className={classes.blueD}>
                                                                    <MarkEmailUnreadOutlinedIcon/> 
                                                                </Avatar>
                                                                :
                                                                (data.jsonResumen.resumen.envio.tipo === 'Express')?                                                                
                                                                    <Avatar className={classes.blueD}>
                                                                        <MopedOutlinedIcon />
                                                                    </Avatar>
                                                                    :
                                                                    <Avatar className={classes.blueD}>
                                                                        <EventOutlinedIcon/>
                                                                    </Avatar>                                                                
                                                                }                    
                                                                
                                                            </Grid>
                                                            <Grid item xs={6} sm={9} md={7} lg={8}>
                                                                <Box component="div">
                                                                    {(data.jsonResumen.resumen.direccion.nombreDireccion !== 'PickUP')?
                                                                    <Box component="div">
                                                                        <Typography variant="body2" sx={{fontWeight:'600',}}>
                                                                            Día de envío {data.jsonResumen.resumen.envio.fecha}
                                                                        </Typography>
                                                                        <Typography variant="body2">
                                                                            Horario {data.jsonResumen.resumen.envio.tipo} de {data.jsonResumen.resumen.envio.horario}
                                                                        </Typography>
                                                                    </Box>
                                                                    :
                                                                    <Box component="div">
                                                                        <Typography variant="body2" sx={{fontWeight:'600',}}>
                                                                            Entrega:  {data.jsonResumen.resumen.entregaPickup}
                                                                        </Typography>
                                                                        <Typography variant="body2">
                                                                            Notificación vía e-mail para poder recoger
                                                                        </Typography>
                                                                    </Box>
                                                                    }
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={4} sm={12} md={3} lg={2}>
                                                            {(iscambio)?
                                                                <CircularProgress />
                                                                :
                                                                <Button color="primary" fullWidth size="small" onClick={()=>{cambio(2)}}>Cambiar</Button>
                                                            }
                                                            </Grid>
                                                        </Grid>  
                                                    }
                                                </Grid>
                                            </div>
                                        </Box>
                                    </Paper>
                                </Grid>                 
                            } 
                        </Grid>
                    </div>
                </Box>
            </Box>
            <Box component="div" m={1} pt={1}>
                <Divider light /> 
                    <Box component="div" className={classes.root} py={3}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                            <Grid item xs={4}>
                                <Box textAlign="left">  
                                    <Grid container direction="column" justifyContent="center" spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle1" textAlign="left">
                                                Subtotal
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" >
                                                Envío
                                            </Typography>
                                        </Grid>
                                        {(data.hasOwnProperty('jsonResumen'))&&
                                        (data.jsonResumen.nc.tieneNc !== 'false')&&
                                            <Typography variant="subtitle1" >
                                               Descuento
                                            </Typography>
                                        }
                                        <Grid item>
                                            <Typography variant="subtitle1" >
                                                Total
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Box textAlign="right"> 
                                    <Grid container direction="column" justifyContent="center" spacing={1}>
                                        <Grid item>
                                            {(data.hasOwnProperty('jsonResumen'))&&
                                            <Typography variant="subtitle1"  >
                                                <Box component="span" >
                                                ${(data.jsonResumen.resumen.descuento > 0)?Precios('formatcurrency',{subtotal:data.jsonResumen.resumen.subtotal+data.jsonResumen.resumen.descuento,fixed:2}):Precios('formatcurrency',{subtotal:data.jsonResumen.resumen.subtotal,fixed:2})}
                                                </Box>
                                            </Typography>
                                            }
                                        </Grid>
                                        <Grid item>
                                            {(data.hasOwnProperty('jsonResumen'))&&
                                            <Typography variant="body2">
                                                    {(data.jsonResumen.resumen.costoEnvio <  0)?`Cotiza con nosotros`:(data.jsonResumen.resumen.costoEnvio === 0)?`Gratis`:Precios('formatcurrency',{subtotal:data.jsonResumen.resumen.costoEnvio,fixed:2})}
                                            </Typography>
                                            }
                                            {(data.hasOwnProperty('jsonResumen'))&&
                                            (data.jsonResumen.resumen.descuento > 0)&&
                                            <Typography variant="body2">
                                                {Precios('formatcurrency',{subtotal:data.jsonResumen.resumen.descuento,fixed:2})}
                                            </Typography>
                                            }
                                            {(data.hasOwnProperty('jsonResumen'))&&
                                            (data.jsonResumen.nc.tieneNc !== 'false')&&
                                            <Typography variant="body2">
                                                ${Precios('formatcurrency',{subtotal:data.jsonResumen.nc.montoNc,fixed:2})}
                                            </Typography>
                                            }
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1"  >
                                                    <Box component="span" fontWeight="fontWeightBold">
                                                        ${(data.hasOwnProperty('jsonResumen'))&&
                                                            Precios('formatcurrency',{subtotal:((data.jsonResumen.resumen.subtotal+data.jsonResumen.resumen.costoEnvio)-data.jsonResumen.nc.montoNc),fixed:2})
                                                        }
                                                    </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container justifyContent="flex-end" alignItems="center" spacing={1}>
                                    <Grid item>
                                        <Typography variant="body2">
                                            <Box component="span" fontWeight="fontWeightMedium">
                                                Precios incluyen IVA
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                <Divider light />
            </Box>    
        </div>
    )
}