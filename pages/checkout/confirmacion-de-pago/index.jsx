import { useEffect, useState } from 'react';
//next js
import { useRouter } from 'next/router'
//Material UI
import {Box,Grid,Button,Container,Alert,AlertTitle,Typography,Link,Skeleton} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
//Componentes 
import Header  from '../Header';
import ResumeConfirmation from '../ResumenConfirmacion';
import Transferencia from './Transferencia';
//Servicios
import Services from '../../services/Services'

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
}));
export default function Confirmacion_de_pago(){
    const classes           = useStyles();
    const router            = useRouter()
    const [data,setData]    = useState({})
    

    useEffect(()=>{
        const getData = async ()=>{
            let pedido       = await localStorage.getItem('Pedido')
            const afiliado   = await localStorage.getItem('afiliado') 
            let services     = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+pedido+'&afiliado='+afiliado+'&paso=5',{})
            let json         = await {jsonResumen:services.data,pedido:pedido}
            /*let jsonc        = await Services('POST','/registrov2/obtieneCliente?cliente='+839494,{})
            let JsonCliente  = await jsonc.data  
                jsonp        = await Services('POST','/miCuenta/detallePedido?clienteNum='+839494+'&pedidoNum='+2795111,{})
            let miPedido     = await jsonp.data */
            setData(json)
        }
        getData()
    },[])
    
    return (
    <Box component="div" m={2} className={classes.root}>
        <Header/>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
            <div>
                <Container maxWidth="sm">
                    <Box component="div" mx="auto" py={4}>                           
                            <Box component="div" width="20%" mx="auto" pt={4}>
                            {(data.hasOwnProperty('jsonResumen'))?
                                <img src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/confirmacion/confirm.svg" alt="Confirmación" />
                                :<Skeleton variant="circular" width={100} height={120} animation="wave"/>
                            }
                            </Box>
                            <Box component="div" textAlign="center">
                                <Typography component="h1" variant="h6">{(data.hasOwnProperty('jsonResumen'))?'Gracias por tu compra':<Skeleton animation="wave"/>}</Typography>
                                <Typography component="p" variant="subtitle1">
                                    {(data.hasOwnProperty('jsonResumen'))?<>No. de pedido:<b>{data.pedido}</b></>:<Skeleton animation="wave"/>} 
                                </Typography>                     
                                <Box component="div" py={2}>
                                {(data.hasOwnProperty('jsonResumen'))&&
                                (data.jsonResumen.resumen.formaPago === "3" || data.jsonResumen.resumen.formaPago === "4")&&
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
                                        </Grid>
                                    </Box>
                                    <Transferencia data={data}/>
                                </div>
                                }
                                {(data.hasOwnProperty('jsonResumen'))&&
                                (data.jsonResumen.resumen.shipVia === 24)&&
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
                                {(data.hasOwnProperty('jsonResumen'))?                       
                                <Button variant="outlined" onClick={()=>{router.push('/')}}>
                                    Ir a página principal                             
                                </Button>:<Skeleton variant="rectangular" height={300} animation="wave"/>
                                }                                
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </div>
            </Grid>  
            <Grid item xs={12} sm={4}>
                {(data.hasOwnProperty('jsonResumen'))?
                    <ResumeConfirmation data={data} />:<Skeleton variant="rectangular" height={500} animation="wave"/>
                }
            </Grid>                 
        </Grid>
    </Box>
    )
}

