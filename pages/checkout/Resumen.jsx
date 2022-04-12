
//next js
import { useRouter } from 'next/router'
//Material UI
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
//Componenetes
import ModalExecutive from './modals/ModalExecutive';


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
    
    function cambio(index){
        router.push(
        (index == 0)?'/checkout/direccion-de-envio':
        (index == 1)?'/checkout/facturacion':
        (index == 2)?'/checkout/forma-de-envio':
        (index == 3)&&'/checkout/forma-de-pago'
        )  
    }

    return (
        <div>
            <div>
                <ModalExecutive resenapedidos={data.jsonResumen.resumen.resenaPedidos} setEjecutivo={props.setEjecutivo} ejecutivo={props.ejecutivo.ejecutivo}/>
            </div>
            <Box component="div">
                <div className={classes.root}>
                    <Grid container  alignItems="center" spacing={1}>
                        <Grid item xs={6} sm={12} lg={6}>
                            <Box textAlign="left">  
                                <Typography component="h2" variant="h6">Pedido #{data.pedido_num}</Typography>
                            </Box>  
                        </Grid>
                        <Grid item xs={6} sm={12} lg={6}>
                            <Paper variant="outlined"> 
                                <Typography variant="body2">   
                                    <Box py={1} fontWeight="fontWeightMedium" textAlign="center">    
                                        {data.jsonResumen.resumen.partidas} {(data.jsonResumen.resumen.partidas > 1)?`productos`:`producto`}
                                    </Box>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>              
            </Box>
            <Box component="div" py={2}>    
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        {(data.jsonResumen.resumen.direccion.dirNum > 0 && data.jsonResumen.resumen.direccion.nombreDireccion !== '')&&
                        <Grid item xs={12}>
                            <Paper variant="outlined">
                                <Box component="div" m={1}>
                                    <div className={classes.root}>
                                        <Grid container justifyContent="space-around" alignItems="center">
                                            <Grid item xs={2} sm={3} md={2} lg={2} >
                                                {(data.jsonResumen.resumen.direccion.nombreDireccion !== 'PickUP')?
                                                <Avatar className={classes.orangeL}>
                                                    <LocalShippingOutlinedIcon />
                                                </Avatar>
                                                :
                                                <Avatar className={classes.orangeL}>
                                                    <StorefrontOutlinedIcon />
                                                </Avatar>
                                                }
                                            </Grid>
                                            <Grid item xs={6} sm={9} md={7} lg={8}>
                                                <Box component="div">
                                                    {
                                                        (data.jsonResumen.resumen.direccion.nombreDireccion !== 'PickUP')?
                                                            <Typography variant="body2">
                                                                <b> Entrega {data.jsonResumen.resumen.direccion.dirNum}.{data.jsonResumen.resumen.direccion.nombreDireccion}</b><br/>
                                                                {data.jsonResumen.resumen.direccion.direccion.substring(0, 30)}..
                                                            </Typography>  
                                                        :
                                                            <Typography variant="body2">
                                                                <b>PickUp Center Polanco en {data.jsonResumen.resumen.entregaPickup}<br/></b> 
                                                                Alejandro Dumas 135, C.P 11550, CDMX
                                                            </Typography> 
                                                    }

                                                </Box>
                                            </Grid>
                                            <Grid item xs={4} sm={12} md={3} lg={2}>
                                                <Button color="primary" fullWidth size="small" onClick={()=>{cambio(0)}}>Cambiar</Button>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Box>
                            </Paper>
                        </Grid>
                        }           
                        {(data.jsonResumen.resumen.facturas.rfc !== '' && data.jsonResumen.resumen.facturas.rfc !== 'XAXX010101000')&&
                            <Grid item xs={12}>
                                <Paper variant="outlined">
                                    <Box component="div" m={1}>
                                        <div className={classes.root}>
                                            <Grid container justifyContent="space-around" alignItems="center">
                                                <Grid item xs={2} sm={3} md={2} lg={2} >
                                                <Avatar className={classes.blueL}>
                                                    <InsertDriveFileOutlinedIcon />
                                                </Avatar>
                                                </Grid>
                                                <Grid item xs={6} sm={9} md={7} lg={8}>
                                                    <Box component="div">
                                                    <Typography variant="body2">
                                                        <b>Facturar a RFC</b><br/>{data.jsonResumen.resumen.facturas.rfc}
                                                    </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4} sm={12} md={3} lg={2}>
                                                    <Button color="primary" fullWidth size="small" onClick={()=>{cambio(1)}}>Cambiar</Button>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Box>
                                </Paper>
                            </Grid>
                        }
                        {(data.jsonResumen.resumen.envio.tipo.trim() !== '') &&
                        <Grid item xs={12}>
                                <Paper variant="outlined">
                                    <Box component="div" m={1}>
                                        <div className={classes.root}>
                                            <Grid container justifyContent="space-around" alignItems="center">                            
                                                <Box component="div">  
                                                {
                                                (enviosF.includes(data.jsonResumen.resumen.envio.tipo))?
                                                    <Grid container justifyContent="space-around" alignItems="center">
                                                        <Grid item xs={2} sm={3} md={2} lg={2} >
                                                            <Avatar className={classes.blueD}>
                                                                <LocalShippingOutlinedIcon />
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
                                                            {(data.jsonResumen.resumen.direccion.nombreDireccion === 'PickUP')?
                                                            <Avatar className={classes.blueD}>
                                                                <StorefrontOutlinedIcon />
                                                            </Avatar>
                                                            :
                                                            (data.jsonResumen.resumen.envio.tipo === 'Express')?                                                                
                                                                <Avatar className={classes.blueD}>
                                                                    <MotorcycleOutlinedIcon />
                                                                </Avatar>
                                                                :
                                                                <Avatar className={classes.blueD}>
                                                                    <LocalShippingOutlinedIcon />
                                                                </Avatar>                                                                
                                                            }                    
                                                            
                                                        </Grid>
                                                        <Grid item xs={6} sm={9} md={7} lg={8}>
                                                            <Box component="div">
                                                                {(data.jsonResumen.resumen.direccion.nombreDireccion !== 'PickUP')?
                                                                 <Typography variant="body2"><b>Día de envío {data.jsonResumen.resumen.envio.fecha}</b><br/>
                                                                Horario '{data.jsonResumen.resumen.envio.tipo}' de {data.jsonResumen.resumen.envio.horario}
                                                                </Typography>
                                                                :
                                                                <Typography variant="body2">
                                                                    <b>Día de entrega</b><br/>
                                                                     Notificación vía e-mail <br/>cuando este disponible
                                                                </Typography>
                                                                }
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={4} sm={12} md={3} lg={2}>
                                                            <Button color="primary" fullWidth size="small" onClick={()=>{cambio(2)}}>Cambiar</Button>
                                                        </Grid>
                                                    </Grid>  
                                                }

                                                </Box>
                                            </Grid>
                                        </div>
                                    </Box>
                                </Paper>
                        </Grid>                 
                        } 
                    </Grid>
                </div>
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
                                                <Typography variant="subtitle1"  >
                                                    <Box component="span" >
                                                    {(data.jsonResumen.resumen.descuento > 0)?data.jsonResumen.resumen.subtotal+data.jsonResumen.resumen.descuento:data.jsonResumen.resumen.subtotal}
                                                    </Box>
                                                </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2">
                                                    {(data.jsonResumen.resumen.costoEnvio <  0)?`Cotiza con nosotros`:(data.jsonResumen.resumen.costoEnvio === 0)?`Gratis`:data.jsonResumen.resumen.costoEnvio}
                                            </Typography>
                                            {(data.jsonResumen.resumen.descuento > 0)&&
                                            <Typography>
                                                {data.jsonResumen.resumen.descuento}
                                            </Typography>
                                                }
                                                {(data.jsonResumen.nc.tieneNc !== 'false')&&
                                            <Typography>
                                                <p>{data.jsonResumen.nc.montoNc}</p>
                                            </Typography>
                                                }
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1"  >
                                                    <Box component="span" fontWeight="fontWeightBold">
                                                        {data.total}
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