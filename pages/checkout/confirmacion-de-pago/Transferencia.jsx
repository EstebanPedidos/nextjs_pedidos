//Material
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
    media: {
        height: 60,
        width: 60,
        margin: "auto"
      },
  }));
  

export default function Transferencia({data}){
    const classes = useStyles();
    return (
        <div>
        {(data.jsonResumen.resumen.formaPago === "3" )?
            <Box component="div" pt={4}>
                <Box component="div">
                    <Typography component="p" variant="h6">
                        Datos para Transferencia
                    </Typography>                    
                </Box>
                <Box component="div" pt={2}>
                    <Grid container>
                        <Grid item>
                        <Card elevation={3} className={classes.root}>
                                <CardMedia
                                className={classes.media}
                                image="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/confirmacion/bbva1.png"
                                title="BBVA"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h2">
                                        Beneficiario: Operadora de Soluciones para Oficina S.A de C.V.
                                    </Typography> 
                                    <Box mx={2} py={2}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Convenio: 862886
                                            
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Clabe interbancaria: 012180001540573179  
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Sucursal: 1824 
                                        </Typography>
                                        <Typography variant="subtitle2" color="textPrimary" component="p">
                                            Referencia: {data.jsonResumen.referencia} 
                                        </Typography>
                                    </Box>
                                    <Typography variant="caption" color="textPrimary" component="p">
                                        Realiza tu pago seguro con cheque en l&iacute;nea BBVA.
                                    </Typography>
                                </CardContent>
                                <CardActions >
                                    <Button size="small" color="primary" fullWidth>
                                    Imprimir
                                    </Button>                     
                                </CardActions>
                        </Card>
                       
                        </Grid>
                    </Grid>
                </Box>						
                <Box component="div" pt={4} textAlign="left">
                    <Divider variant="middle" />
                    <Box component="div" m={1}  py={2}>
                        <Typography variant="subtitle2" color="textPrimary" component="p">
                        Ayúdanos con los pasos siguientes:
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textPrimary" component="p">
                            1. Coloca el n&uacute;mero de referencia para identificar tu pago.
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p">
                            2. Env&iacute;a tu comprobante de pago a 
                            <Link disable typography href="mailto:pagos@pedidos.com.mx" target="_blank">
                                &nbsp;  pagos@pedidos.com.mx
                            </Link> 
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p">
                            3. Puedes cargar tu evidencia de pago en la sección de tus pedidos*
                        </Typography>
                        <br/>
                        <Typography component="p" variant="subtitle2">
                            Realiza el pago del pedido antes de 3 d&iacute;as h&aacute;biles, para garantizar
                            existencias.
                        </Typography>
                    </Box>
                </Box> 
            </Box>
            :
            ( data.jsonResumen.resumen.formaPago === "4")&&
            <Box component="div" pt={4}>
                <Box component="div">
                    <Typography component="p" variant="h6">
                        Datos para Dep&oacute;sito en practicaja
                    </Typography>
                    <Box component="div" pt={2} textAlign="left">
                        <Typography variant="caption" color="textPrimary" component="p">
                            <Alert severity="info">
                            Pago en practicajas con cheque o efectivo en pesos por la cantidad exacta.
                            </Alert>
                        </Typography>
                    </Box>
                </Box>
                <Box component="div" py={2}>
                    <Grid container>
                    <Grid item>
                    <Card elevation={3} className={classes.root}>
                            <CardMedia
                            className={classes.media}
                            image="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/confirmacion/bbva1.png"
                            title="BBVA"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Beneficiario: Operadora de Soluciones para Oficina S.A de C.V.
                                </Typography> 
                                <Box mx={2} py={2}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Convenio: 862886
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Cuenta: 0154057317
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Sucursal: 1824 
                                    </Typography>
                                    <Typography variant="subtitle2" color="textPrimary" component="p">
                                        Referencia: {data.jsonResumenreferencia}
                                    </Typography>
                                </Box>
                                <Box component="div" textAlign="left">
                                    <Typography variant="caption" color="textPrimary" component="p">
                                        <Alert severity="info">
                                            Coloca el n&uacute;mero de referencia para identificar tu pago y
                                            env&iacute;a tu comprobante de pago a 
                                            <b><Link disable typography href="mailto:pagos@pedidos.com.mx" target="_blank">
												&nbsp;  pagos@pedidos.com.mx 
											</Link></b>
                                        </Alert>
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions >
                                <Button size="small" color="primary" fullWidth>
                                Imprimir
                                </Button>                     
                            </CardActions>
                    </Card>
                    <Box component="div" py={2}>
                        <Typography component="p" variant="subtitle2">
                            Los pagos salvo buen cobro demoran 72 hrs h&aacute;biles. Realiza el pago del pedido antes de 3 d&iacute;as h&aacute;biles, para garantizar
                            existencias.
                        </Typography>
                    </Box>
                    </Grid>
                    </Grid>
                </Box>	
                <Box component="div" pt={4} textAlign="left">
                    <Divider variant="middle" />
                    <Box component="div" m={1}  py={2}>
                        <Typography variant="subtitle2" color="textPrimary" component="p">
                        Ayúdanos con los pasos siguientes:
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textPrimary" component="p">
                            1. Coloca el n&uacute;mero de referencia para identificar tu pago.
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p">
                            2. Env&iacute;a tu comprobante de pago a 
                            <Link disable typography href="mailto:pagos@pedidos.com.mx" target="_blank">
                                &nbsp;  pagos@pedidos.com.mx
                            </Link> 
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p">
                            3. Puedes cargar tu evidencia de pago en la sección de tus pedidos*
                        </Typography>
                        <br/>
                        <Typography component="p" variant="subtitle2">
                            Realiza el pago del pedido antes de 3 d&iacute;as h&aacute;biles, para garantizar
                            existencias.
                        </Typography>
                    </Box>
                </Box>             
            </Box> 
            
        }
        </div>
    )
}