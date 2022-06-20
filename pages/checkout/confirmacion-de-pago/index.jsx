import { useEffect, useState } from 'react';
//next js
import { useRouter } from 'next/router'
import Script from 'next/script'
import Head from 'next/head'
//hooks
import {useLocalStorage} from "../../../hooks/useLocalStorage";
//Tag Manager
import TagManager from 'react-gtm-module'
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
    const classes                   = useStyles();
    const router                    = useRouter()
    const [data,setData]            = useState({})
    const [jsonCli,setJsonCli]      = useState({})
    const [pedido,setPedido]        = useLocalStorage('Pedido',0)
    const [afiliado,setAfiliado]    = useLocalStorage('afiliado','N')
    const [cliente,setCliente]      = useLocalStorage('Cliente',201221)
    const [upc,setUpc]              = useLocalStorage('upc','')
    const [Usu_Nomb,setUsu_Nomb]    = useLocalStorage('Usu_Nomb','')

    useEffect(()=>{
        const getData = async ()=>{
            if(cliente !== 201221){
                if(pedido  > 0){
                    let services        = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+pedido+'&afiliado='+afiliado+'&paso=5',{})
                    let json            = await {jsonResumen:services.data,pedido:pedido}
                    let jsonc           = await Services('POST','/registrov2/obtieneCliente?cliente='+cliente,{})
                    let JsonCliente     = await jsonc.data 
                    let servicesM       = await Services('POST','/miCuenta/detallePedido?clienteNum='+cliente+'&pedidoNum='+pedido,{})
                    let miPedido        = await servicesM.data
                    let fecha           = await new Date();
                    let ano             = await fecha.getFullYear()
                    let mes             = await (((fecha.getMonth()+1)<10)?'0'+(fecha.getMonth()+1):(fecha.getMonth()+1))
                    let dia             = await ((fecha.getDate() <10)?'0'+fecha.getDate():fecha.getDate())
                    JsonCliente.fecha   = await ano+'-'+mes+'-'+dia
                    let upcs            = await (upc !== null && upc !== undefined && upc !== '')?upc.split(',').map((upc) =>  JSON.stringify({'gtin':upc})):''
                    JsonCliente.upcs    = await JSON.parse('['+upcs+']')
                    setData(json)
                    setJsonCli(JsonCliente)
                    if(miPedido.pedido.listPyPedidoDet.length > 0){                       
                        let products = await 
                        miPedido.pedido.listPyPedidoDet.map((item) =>
                            JSON.stringify({
                                'name': miPedido.listaSearch.find( sku => sku.itemNum === item.itemNum ).tituloCompuesto,
                                'id': item.itemNum,
                                'price': item.precio,
                                'quantity': item.cantidad
                            })
                        )
                        if(products != '' && products !== null && products !== undefined){                            
                            let totalTag     = await ((services.data.resumen.subtotal + services.data.resumen.costoEnvio)-services.data.nc.montoNc)
                            let envioTag     = await services.data.resumen.costoEnvio
                            let isEmpresa    = await (services.data.resumen.facturas.rfc !== 'XAXX010101000')?true:false;
                            const tagManagerArgs = {
                                gtmId: 'GTM-NLQV5KF',
                                dataLayer: {
                                    'event': 'checkout',
                                    'ecommerce': {
                                        'purchase': {
                                        'actionField': {
                                            'id': pedido,
                                            'affiliation': Usu_Nomb,
                                            'revenue': totalTag,
                                            'shipping': envioTag,
                                            'empresa': isEmpresa
                                        },
                                        'products': JSON.parse('['+products+']')
                                        }
                                    }
                                }
                            }

                        }
                    }     
                } 
            }    
        }
        getData()
    },[])
    
    return (
    <Box component="div" className={classes.root}>
        {(data)&&
        (data.hasOwnProperty('jsonResumen'))&&
            <Head>    
                <link href="https://pedidos.com/checkout/confirmacion-de-pago" rel="canonical" />
	            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
	            <title>Confirmación de Pago | Pedidos.com {data.jsonResumen.resumen.formaPago}</title>
	            <meta name="description" content="¡Gracias por tu compra! Aquí encontrarás el resumen de compra de tu pedido. Para cualquier duda o aclaración comunícate a nuestros teléfonos: 5015-8100 ó al 018008138181 en un horario de Lunes a Viernes de 9:00hras a 19:00hras. " />
            </Head>
        }
        <Header/>        
        {(data)&&
        (jsonCli)&&
        <Script type="text/javascript"  src="https://apis.google.com/js/platform.js?onload=renderOptIn" id="google" strategy="lazyOnload">
            {
                `window.renderOptIn = function() {
                    window.gapi.load('surveyoptin', function() {
                      window.gapi.surveyoptin.render(
                        {
                          "merchant_id": "9336139",
                          "order_id": "${data.pedido}",
                          "email": "${jsonCli.email}",
                          "delivery_country": "MX",
                          "estimated_delivery_date": "${jsonCli.fecha}",
                          "products": ${jsonCli.upcs}
                        });
                     });
                  }`
            }
        </Script> 
        }       
        <Container maxWidth="lg">
            <Box component="div" py={2} m={1}>
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
        </Container>
    </Box>
    )
}

