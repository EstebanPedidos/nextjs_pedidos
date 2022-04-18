
//Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Alert, AlertTitle } from '@mui/material';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
//Componentes 
import ResumeConfirmation from '../ResumenConfirmacion';
import Transferencia from './Transferencia';
//Servicios
import Services from '../../services/Services'
const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
}));
export default function Confirmacion_de_pago(props){
    const classes   = useStyles();
    const data = props.data
    
    return (
    <Box component="div" m={2} className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
            <div>
                <Container maxWidth="sm">
                    <Box component="div" mx="auto" py={4}>
                            <Box component="div" width="20%" mx="auto" pt={4}>
                                <img src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/confirmacion/confirm.svg" alt="Confirmación" />
                            </Box>
                            <Box component="div" textAlign="center">
                                <Typography component="h1" variant="h6">Gracias por tu compra</Typography>
                                <Typography component="p" variant="h6">
                                        Pago: "---------------"
                                </Typography>
                                <Typography component="p" variant="subtitle1">
                                        No. de pedido: <b>{data.pedido_num}</b>
                                </Typography>                     
                                <Box component="div" py={2}>
                                {(data.jsonResumen.resumen.formaPago === "3" || data.jsonResumen.resumen.formaPago === "4")&&
                                <div>
                                    <Box component="div" textAlign="left">
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Alert severity="warning" fullWidth>
                                                    <AlertTitle>Importante</AlertTitle>
                                                    Realiza el pago en 1hra m&aacute;x. para respetar el horario de entrega y
                                                    <strong> envía tu comprobante a  
                                                        <Link disable typography href="mailto:pagos@pedidos.com.mx" target="_blank">
                                                            &nbsp;  pagos@pedidos.com.mx 
                                                        </Link>
                                                    </strong>
                                                </Alert>
                                            </Grid>
                                            {/* <Grid item  xs={12}>
                                                <Alert severity="info" fullWidth>No olvides colocar el No. de referencia de tu pedido</Alert>
                                            </Grid>
                                            <Grid item>
                                                Puedes cargar tu evidencia de pago dentro de tu cuenta en la sección de Pedidos.com
                                            </Grid> */}
                                        </Grid>
                                    </Box>
                                    <Transfer/>
                                </div>
                                }
                                {(data.jsonResumen.resumen.shipVia === 24)&&
                                    <div>
                                        <div>
                                            {(data.jsonResumen.resumen.formaPago !== 3 && data.jsonResumen.resumen.formaPago !== 4)&&
                                                <i></i>
                                            }
                                        </div>
                                        <div>
                                        <p>Una vez facturado el pedido, la cuenta de los 180 min. empezará</p>
                                        </div>
                                    </div>
                                } 
                                <Button variant="outlined">
                                    Ir a página principal
                                </Button>	 
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </div>
            </Grid>  
            <Grid item xs={12} sm={4}>
                <ResumeConfirmation data={data} /> 
            </Grid>                 
        </Grid>
    </Box>
    )
}

export async function getServerSideProps(context) {    
    let services     = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+2795111+'&afiliado=S&paso=4',{})
    let data         = await services.data 
        services     = await Services('POST','/registrov2/obtieneCliente?cliente='+839494,{})
    let JsonCliente  = await services.data  
        services     = await Services('POST','/miCuenta/detallePedido?clienteNum='+839494+'&pedidoNum='+2795111,{})
    let miPedido        = await services.data  
    return {
        props: {
            data :          {jsonResumen:data},
            JsonCliente:    JsonCliente,
            miPedido:       miPedido
        },
      }
}