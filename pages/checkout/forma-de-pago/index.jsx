import {useEffect, useState} from 'react';
//next js
import { useRouter } from 'next/router'
//Tag Manager
import TagManager from 'react-gtm-module'
//Material
import {Container, Radio,RadioGroup,FormControlLabel,FormControl, Hidden,
        List,ListItem,ListItemText,ListItemAvatar, ListItemSecondaryAction,
        Box,Grid,Avatar,Typography,Card, Divider,Skeleton} from '@mui/material'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import LoadingButton from '@mui/lab/LoadingButton';
import makeStyles from '@mui/styles/makeStyles' 
//Componentes 
import Header  from '../Header';
import Resumen from '../Resumen';
import Process from '../Process';
import SDKPayPalBotones from './SDKPayPalBotones'
import Hostedfields from './Hostedfields';
import Alertas from '../Alertas';

//Servicios
import Services from '../../services/Services'
//Funciones
import Precios from '../../services/Precios' 
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    MethodType:  { 
        width:'40px',
        height:'40px',
        padding:'0.20rem',
        marginLeft: theme.spacing(2),
    },

    ppMethod: {
        height: "28px",
        paddingLeft: theme.spacing(1),
        marginTop:"5px"
    },
    boximgpayments: {
        marginRight:'0.5rem',
        justifyContent:'flex-end',
    },
    payonlineop: {
        width:"100%",
    },
    txtPMethod: {
        marginRight: "3rem",
        paddingRight: "10rem",
    },
    titleTypeS: {
        fontWeight:'500'
    },
    rightText: {
        textAlign: "right"
    },
}));

export default function Forma_de_pago(){
    const classes                           = useStyles()
    const router                            = useRouter()
    const [data,setData]                    = useState({})    
    const [ejecutivo,setEjecutivo]          = useState({ejecutivo:'', slmn:0})
    const [forma_pago,setFormaPago]         = useState('linea')
    const [sub_forma_pago,setSubFormaPago]  = useState('1')
    const [clientToken,setClientToken]      = useState({clienteToken:'',getPaymentTokens:[]})
    const [tajetaSave,setTarjetaSave]       = useState('nueva')
    const [max_cont_ent,setMaxCE]           = useState(1000)
    const [loading,setLoading]              = useState(false) 
    const [alerta,setAlerta]                = useState({})
    const [idMeses,setIdMeses]              = useState([])

    function salectOption({target}){
        const {value,name} = target;
        if(name === 'forma_pago'){
            setFormaPago(value)
            setSubFormaPago('')
        }else if(name === 'sub_forma_pago'){
            setSubFormaPago(value)
        }else if(name === 'tarjeta_guardada'){
            setTarjetaSave(value) 
            if(value !== 'nueva'){
                isMeses(value,((data.jsonResumen.resumen.subtotal+data.jsonResumen.resumen.costoEnvio)-data.jsonResumen.nc.montoNc))      
            }            
         }
    }

    function cambioNueva(tipo){
        if(tipo === 1){
            setTarjetaSave('nueva') 
        }else if(tipo === 2){
            if(clientToken.getPaymentTokens.length > 0){
                setTarjetaSave(clientToken.getPaymentTokens[0].id)
                isMeses(clientToken.getPaymentTokens[0].id,((data.jsonResumen.resumen.subtotal+data.jsonResumen.resumen.costoEnvio)-data.jsonResumen.nc.montoNc))      
            }           
        }        
    }

    function continuarCompra(){
        setLoading(true)
        if(sub_forma_pago !== ''){
            (sub_forma_pago === '5')?
            Services('PUT-NOT','/registrov2/getOrderPayPalOXXO',{
                evento:data.jsonResumen.resumen.eventoNum
            })
            .then( response =>{
                let linkOxxo = response.data
                if(linkOxxo !== ''){
                    guardaFormaDePago(linkOxxo) 
                } else{
                    setLoading(false)
                }                         
            }): guardaFormaDePago(''); 
        }
        
    }

    function guardaFormaDePago(linkOxxo){        
        Services('PUT-NOT','/registrov2/registraFormaPagoTv',{
            pedido_num:localStorage.getItem('Pedido'),
            cliente_num:localStorage.getItem('Cliente'),
            fp_num:sub_forma_pago
        }).then( response =>{            
            let mensaje = response.data
            if( mensaje === "Agregado" || mensaje === "Actualizado"){
                if(sub_forma_pago === '3' || sub_forma_pago === '4' ){
                    router.push('/checkout/confirmacion-de-pago')
                }else if(sub_forma_pago === '2'){                
                    Services('PUT-NOT','/registrov2/guardaPagoAlRecibir',{
                        pedido_num:localStorage.getItem('Pedido'),
                        cliente_num:localStorage.getItem('Cliente'),
                        shipVia:data.jsonResumen.resumen.shipVia,
                        formaPago:sub_forma_pago
                    })
                    .then( response =>{
                        let mensajeRecibir = response.data
                        if(mensajeRecibir === 'ok'){
                            router.push('/checkout/confirmacion-de-pago')
                        }else{
                            setLoading(false)
                        }
                    })
                }else if(sub_forma_pago === '5'){
                    window.open(linkOxxo,'','width=800,height=550,left=300,top=100,toolbar=yes')
                    setTimeout(router.push('/checkout/confirmacion-de-pago'),5000000)
                }
            }
        })
    }

    async function Delete({id,posicion}){
        let services    = await Services('POST','/registrov2/datelePaymentTokens?id='+id,{})
        let isEliminado = await services.data      
        if(isEliminado){            
            let getPaymentTokensNuevo = clientToken.getPaymentTokens
            getPaymentTokensNuevo.splice(posicion,1)
            setClientToken({...clientToken,getPaymentTokens:getPaymentTokensNuevo})
            if(getPaymentTokensNuevo.length > 0 ){
                setTarjetaSave(getPaymentTokensNuevo[0].id)
            }else{
                setTarjetaSave('nueva')
            }
            setAlerta({severity:'success',mensaje:'Se ha eliminado la tarjeta',vertical:'bottom',horizontal:'right'})
        }else{
            setAlerta({severity:'error',mensaje:'No se elimino la tarjeta',vertical:'bottom',horizontal:'right'})
        }
    }

    async function isMeses(id,total){
        if(id !== 'nueva'){
            setIdMeses([])
            setLoading(true)
            console.log('/registrov2/CalculatedFinancingOptions?value='+total+'&id='+id)
            let services    = await Services('POST','/registrov2/CalculatedFinancingOptions?value='+total+'&id='+id,{})
            let meses       = await services.data
            setIdMeses(meses)
            setLoading(false)
        }        
    }

    useEffect(()=>{
        const getData = async () =>{
            let cliente           = await localStorage.getItem('Cliente')
            let afiliado          = await localStorage.getItem('afiliado') 
            if(cliente !== undefined && cliente !== null && afiliado !== undefined && afiliado !== null){
                if(parseInt(cliente) !== 201221){
                    let pedido       = await localStorage.getItem('Pedido')
                    if(pedido !== undefined && pedido !== null){                        
                        let services     = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+pedido+'&afiliado='+afiliado+'&paso=4',{})
                        let json         = await services.data  
                        if(json.resumen.estatus === 'R' && json.resumen.pvse === 'N'){
                            if(json.resumen.costoEnvio > 0 || json.resumen.envio.tipo !== ''){
                                let total        = await ((json.resumen.subtotal+json.resumen.costoEnvio)-json.nc.montoNc)
                                let cust_num     = await (cliente-(parseInt(json.resumen.direccion.dirNum)))
                                let upc          = await json.upc
                                localStorage.setItem('upc', upc);
                                let token        = await Services('POST','/registrov2/clientetoken?cust_num='+cust_num,{})
                                let cliente_l    = await token.data 
                                let servicesM    = await Services('POST','/miCuenta/detallePedido?clienteNum='+cliente+'&pedidoNum='+pedido,{})
                                let miPedido     = await servicesM.data
                                setData({jsonResumen:json,pedido:pedido})
                                setEjecutivo((json.resumen.nombreEjecutivo !== '')?{ejecutivo:json.resumen.nombreEjecutivo, slmn:0}:{ejecutivo:'', slmn:0})
                                let tarjetas         = await cliente_l.getPaymentTokens
                                let getPaymentTokens = await JSON.parse(tarjetas)
                                let meses            = null;
                                if(getPaymentTokens.length > 0){
                                    let id      = await getPaymentTokens[0].id;                                  
                                    isMeses(id,total)
                                    setTarjetaSave(id)                                    
                                }
                                setClientToken({clienteToken:cliente_l.clienteToken,getPaymentTokens:getPaymentTokens,meses:meses})
                                setMaxCE((afiliado === 'S')?5000:1000)
                                if(miPedido.pedido.listPyPedidoDet.length > 0){
                                    let products = await miPedido.pedido.listPyPedidoDet.map((item) =>
                                        JSON.stringify({
                                            'name': item.tituloCompuesto,
                                            'id': item.itemNum,
                                            'price': item.precio,
                                            'quantity': item.cantidad
                                        })
                                    )
                                    
                                    if(products != ''){
                                        const tagManagerArgs = {
                                            gtmId: 'GTM-NLQV5KF',
                                            dataLayer: {
                                                'event': 'checkout',
                                                'ecommerce': {
                                                'checkout': {
                                                    'actionField': {'step': 2, 'option': 'Pago'},
                                                    'products': JSON.parse('['+products+']')
                                                }
                                            }
                                            },
                                        }
                                        TagManager.initialize(tagManagerArgs)   
                                    }                                        
                                }
                            }else{
                                router.push('/checkout/forma-de-envio')
                            }
                        }else{
                            router.push('/misPedidos')
                        }
                    }else{
                        router.push('/')
                    } 
                }else{
                    router.push('/')
                } 
            }else{
                router.push('/')
            } 
        }
        getData()
    },[])

    return (
    <Box className={classes.root}>
        <Header/>
        <Container maxWidth="lg">
            <Box component="div" py={3} m={1}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <div> 
                            <Box component="div" pt={1}> 
                                {(data.hasOwnProperty('jsonResumen'))?                  
                                    <Process paso={3}/>:<Skeleton variant="text" height={150} animation="wave"/>
                                }
                            </Box>
                            <Box component="div" p={2}>
                                <Divider light/> 
                                <Box component="div" pt={3}  mb={1}>
                                    <Typography variant="h6" component="h1" sx={{ fontWeight:'600'}}>{(data.hasOwnProperty('jsonResumen'))?'4. Selecciona la forma de pago':<Skeleton width="80%" animation="wave"/>}</Typography>
                                </Box>                   
                                <Box component="div" py={2} >    
                                {(data.hasOwnProperty('jsonResumen'))?                   
                                    <FormControl component="fieldset" fullWidth>
                                        <RadioGroup aria-label="gender" name="forma_pago" value={forma_pago} onChange={salectOption}>                           
                                            <List dense>
                                                <div className={classes.root}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12}>
                                                            <Card variant="outlined">
                                                                <ListItem variant="outlined" button>
                                                                    <FormControlLabel value="linea" fullWidth label={                                                            
                                                                        <Box component="div" py={2}>
                                                                            <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                                                                <Grid item xs={4} sm={3}>
                                                                                    <ListItemAvatar>
                                                                                        <Avatar variant="rounded" className={classes.MethodType} alt="Online Payment" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/online.svg" />
                                                                                    </ListItemAvatar>
                                                                                </Grid>
                                                                                <Grid item xs={8} sm={4}>
                                                                                    <ListItemText id="list-label-payment-method" ml={8} sx={{width:'150px'}}  primary={
                                                                                        <Typography className={classes.titleTypeS} variant="subtitle1">
                                                                                        Paga en línea 
                                                                                        </Typography> 
                                                                                        }/>
                                                                                </Grid>
                                                                                <Hidden smDown>
                                                                                <Grid item xs={12} sm={5}>
                                                                                        <ListItemSecondaryAction className={classes.rightText}>
                                                                                            <ListItemText id="list-label-payment-method" secondary="Tarjetas de crédito o débito"/>
                                                                                        </ListItemSecondaryAction>
                                                                                </Grid>  
                                                                                </Hidden>
                                                                            </Grid>   
                                                                        </Box>
                                                                    } control={<Radio />}/>
                                                                </ListItem>
                                                            </Card>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                        {(data.hasOwnProperty('jsonResumen'))&&
                                                        ((data.jsonResumen.resumen.shipVia !== 5 || data.jsonResumen.resumen.envio.tipo === 'Abierto' || data.jsonResumen.resumen.envio.tipo === 'Pactado')
                                                        && data.jsonResumen.resumen.subtotal + data.jsonResumen.resumen.costoEnvio <= max_cont_ent
                                                        )&&  
                                                        <Card variant="outlined">
                                                            <ListItem variant="outlined" button fullWidth>                 
                                                                <FormControlLabel value="recibir" fullWidth label={
                                                                    <Box component="div" fullWidth py={2}>
                                                                            <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                                                                <Grid item xs={4} sm={3}>
                                                                                    <ListItemAvatar>
                                                                                        <Avatar variant="rounded" className={classes.MethodType} alt="Online Payment" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/recibe3.svg" />
                                                                                    </ListItemAvatar>
                                                                                </Grid>
                                                                                <Grid item xs={8} sm={4}>
                                                                                    <ListItemText id="list-label-payment-method" ml={8} sx={{width:'150px'}}  primary={
                                                                                        <Typography className={classes.titleTypeS} variant="subtitle1">
                                                                                        Paga al recibir
                                                                                        </Typography> 
                                                                                        }/>
                                                                                </Grid>
                                                                                <Hidden smDown>
                                                                                <Grid item xs={12} sm={5}>
                                                                                        <ListItemSecondaryAction className={classes.rightText}>
                                                                                            <ListItemText id="list-label-payment-method" secondary="Tarjetas de crédito o débito"/>
                                                                                        </ListItemSecondaryAction>
                                                                                </Grid>  
                                                                                </Hidden>
                                                                            </Grid>   
                                                                    </Box>  
                                                                } control={<Radio />}/> 
                                                            </ListItem>
                                                        </Card>                   
                                                        }
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Card variant="outlined">
                                                                <ListItem variant="outlined" button>              
                                                                    <FormControlLabel value="transfer" fullWidth label={
                                                                        <Box component="div" fullWidth py={2}>
                                                                            <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                                                                <Grid item xs={4} sm={3}>
                                                                                    <ListItemAvatar>
                                                                                        <Avatar variant="rounded" className={classes.MethodType} alt="Online Payment" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/transfer.svg" />
                                                                                    </ListItemAvatar>
                                                                                </Grid>
                                                                                <Grid item xs={8} sm={4}>
                                                                                    <ListItemText id="list-label-payment-method" ml={8} sx={{width:'150px'}}  primary={
                                                                                        <Typography className={classes.titleTypeS} variant="subtitle1">
                                                                                        Transferencia o depósito
                                                                                        </Typography> 
                                                                                        }/>
                                                                                </Grid>
                                                                                <Hidden smDown>
                                                                                <Grid item xs={12} sm={5}>
                                                                                        <ListItemSecondaryAction className={classes.rightText}>
                                                                                            <ListItemText id="list-label-payment-method" secondary="Envía tu comprobante"/>
                                                                                        </ListItemSecondaryAction>
                                                                                </Grid>
                                                                                </Hidden>
                                                                            </Grid>   
                                                                        </Box>    
                                                                    } control={<Radio />}/>
                                                                </ListItem>
                                                            </Card> 
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </List>                  
                                        </RadioGroup>
                                    </FormControl> 
                                    :
                                    <Skeleton variant="rectangular" height={250} animation="wave"/>
                                    }
                                </Box>
                            
                                {(forma_pago === 'linea') &&
                                    <Box component="div" m={1}>
                                        <Box component="div" py={2} >
                                            <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                                <Grid item xs={12}>
                                                    <Typography variant="h6" component="h2">{(data.hasOwnProperty('jsonResumen'))?'Pago en línea':<Skeleton width="40%" animation="wave"/>}</Typography>
                                                    <Typography variant="subtitle1" component="subtitle2">{(data.hasOwnProperty('jsonResumen'))?'Selecciona la opción:':<Skeleton width="50%" animation="wave"/>}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box component="div" >
                                            {(data.hasOwnProperty('jsonResumen'))? 
                                            <FormControl component="fieldset" fullWidth>
                                                <RadioGroup aria-label="gender" name="sub_forma_pago" value={sub_forma_pago} onChange={salectOption}> 
                                                    <List dense>
                                                        <div className={classes.root}>
                                                            <Grid container spacing={1}>
                                                                <Grid item xs={12}>
                                                                    <Card variant="outlined">
                                                                        <ListItem variant="outlined"  fullWidth button>
                                                                            <Box component="div" py={2}>
                                                                            <FormControlLabel value="1" fullWidth label={                                                            
                                                                                    <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={2}>
                                                                                        <Grid item xs={6} sm={2}>
                                                                                            <ListItemAvatar>
                                                                                                <Avatar>
                                                                                                    <CreditCardOutlinedIcon />
                                                                                                </Avatar>
                                                                                            </ListItemAvatar>
                                                                                        </Grid>
                                                                                        <Grid item xs={6} sm={5}>
                                                                                            {/* <Typography component="subtitle1">Tarjeta</Typography> */}
                                                                                            <ListItemText className={classes.txtPMethod} id="list-label-payment-online" primary="Tarjeta"/>
                                                                                        </Grid>
                                                                                        <Hidden smDown>
                                                                                        <Grid item xs={5}>
                                                                                            <ListItemSecondaryAction>
                                                                                                <ListItemText  id="list-label-payment-online" secondary= {
                                                                                                <Box sx={{ display: 'flex',
                                                                                                justifyContent: 'flex-end',
                                                                                                }}>
                                                                                                    <Box component="div" className={classes.boximgpayments}>
                                                                                                    <img className={classes.payonlineop} src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/Brand/VISA.svg" alt="visa" />
                                                                                                    </Box>
                                                                                                    <Box component="div" className={classes.boximgpayments}>
                                                                                                    <img className={classes.payonlineop} src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/Brand/mastercard.svg" alt="masterCard" />
                                                                                                    </Box>
                                                                                                    <Box component="div" className={classes.boximgpayments}>
                                                                                                    <img className={classes.payonlineop} src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/Brand/AMEX.svg" alt="AMEX" />
                                                                                                    </Box>
                                                                                                    <ListItemText className={classes.payonlineop}  secondary="   y más..."/>
                                                                                                </Box>
                                                                                                }/>      
                                                                                        </ListItemSecondaryAction>
                                                                                        </Grid>
                                                                                        </Hidden>
                                                                                    </Grid>   
                                                                                
                                                                            
                                                                            } control={<Radio />}/>
                                                                            </Box> 
                                                                        </ListItem>
                                                                    </Card>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <Card variant="outlined">
                                                                        <ListItem variant="outlined" button>
                                                                            <FormControlLabel value="7" label={
                                                                                <Box component="div" py={2}>
                                                                                    <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                                                                        {/* <Grid item xs={4} sm={4}>
                                                                                            <ListItemAvatar>
                                                                                                    imagen
                                                                                            </ListItemAvatar>
                                                                                        </Grid> */}
                                                                                        <Grid item xs={6} sm={8}>
                                                                                            {/* <Typography component="subtitle1">PayPal</Typography> */}
                                                                                            {/* <ListItemText id="list-label-payment-online" primary="PayPal"/> */}
                                                                                            <img className={classes.ppMethod} src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/paypal.png" alt="PayPal" />
                                                                                        </Grid>
                                                                                        
                                                                                        <Grid item xs={6} sm={4}>
                                                                                            <ListItemSecondaryAction className={classes.rightText}>
                                                                                                <ListItemText id="list-label-horario-programad" secondary="Tarjetas"/>
                                                                                            </ListItemSecondaryAction>
                                                                                        </Grid>  
                                                                                    </Grid>   
                                                                                </Box> 
                                                                            
                                                                            } control={<Radio />}/>
                                                                        </ListItem>
                                                                    </Card>
                                                                </Grid>

                                                        </Grid>
                                                        </div>
                                                    </List>
                                                </RadioGroup>
                                            </FormControl> 
                                            :
                                            <Skeleton variant="rectangular" height={250} animation="wave"/>
                                            }
                                        </Box>
                                    </Box>
                                }
                                {(forma_pago === 'recibir') &&
                                    <Box m={1}>
                                        <Box component="div" py={2} >
                                            <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                                <Grid item xs={12}>
                                                    <Typography variant="h6" component="h2">Paga al recibir </Typography>
                                                    <Typography variant="subtitle1" component="subtitle2">Selecciona la opción:</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box component="div">
                                            <FormControl component="fieldset" fullWidth>
                                                <RadioGroup aria-label="gender" name="sub_forma_pago" value={sub_forma_pago} onChange={salectOption}> 
                                                    <List dense>
                                                        <div className={classes.root}>
                                                            <Grid container spacing={1}>
                                                                <Grid item xs={12}>
                                                                    <Card variant="outlined">
                                                                        <ListItem variant="outlined" button>
                                                                            <FormControlLabel value="2" fullWidth label={
                                                                                <Box component="div" py={2}>
                                                                                    <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                                                                        <Grid item xs={4} sm={4}>
                                                                                            <ListItemAvatar>
                                                                                                <Avatar>
                                                                                                    <CreditCardOutlinedIcon />
                                                                                                </Avatar>
                                                                                            </ListItemAvatar>
                                                                                        </Grid>
                                                                                        <Grid item xs={4} sm={4}>
                                                                                            {/* <Typography component="subtitle1">Tarjeta</Typography> */}
                                                                                            <ListItemText id="list-label-payment-onreceipt" primary="Tarjeta"/>
                                                                                        </Grid>
                                                                                        <Grid item xs={4} sm={4}>
                                                                                            <ListItemSecondaryAction className={classes.rightText}>
                                                                                                <ListItemText id="list-label-horario-programad" secondary="Tarjetas de crédito o débito"/>
                                                                                            </ListItemSecondaryAction>
                                                                                        </Grid> 
                                                                                    </Grid>   
                                                                                </Box>
                                                                            
                                                                            } control={<Radio />}/>
                                                                        </ListItem>
                                                                    </Card>
                                                                </Grid>                                            
                                                            </Grid>
                                                        </div>
                                                    </List>                      
                                                </RadioGroup>
                                            </FormControl> 
                                        </Box>
                                    </Box>
                                }                    
                                {(forma_pago === 'transfer') &&
                                    <Box m={1}>
                                        <Box component="div" py={2} >
                                            <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                                <Grid item xs={12}>
                                                    <Typography variant="h6" component="h2">Pago con transferencias </Typography>
                                                    <Typography variant="subtitle1" component="subtitle2">Selecciona la opción:</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box component="div">
                                            <FormControl component="fieldset" fullWidth>
                                                <RadioGroup aria-label="gender" name="sub_forma_pago" value={sub_forma_pago} onChange={salectOption}> 
                                                    <List dense>
                                                        <div className={classes.root}>
                                                            <Grid container spacing={1}>
                                                                <Grid item xs={12}>
                                                                    <Card variant="outlined">
                                                                        <ListItem variant="outlined" button>
                                                                            <FormControlLabel value="4" fullWidth label={
                                                                                <Box component="div" py={2}>
                                                                                    <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                                                                        <Grid item xs={4} sm={4}>
                                                                                            <ListItemAvatar>
                                                                                                <Avatar>
                                                                                                    <CreditCardOutlinedIcon />
                                                                                                </Avatar>
                                                                                            </ListItemAvatar>
                                                                                        </Grid>
                                                                                        <Grid item xs={8} sm={8}>
                                                                                            {/* <Typography component="subtitle1">Déposito</Typography> */}
                                                                                            <ListItemText id="list-label-payment-transfer" primary="Déposito"/>
                                                                                        </Grid>
                                                                                    </Grid>   
                                                                                </Box>
                                                                                
                                                                            } control={<Radio />}/>
                                                                        </ListItem>
                                                                    </Card> 
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <Card variant="outlined">
                                                                        <ListItem variant="outlined" button>
                                                                            <FormControlLabel value="3" label={
                                                                                <Box component="div" py={2}>
                                                                                    <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={2}>
                                                                                        <Grid item xs={4} sm={4}>
                                                                                            <ListItemAvatar>
                                                                                                <Avatar>
                                                                                                    <CompareArrowsIcon />
                                                                                                </Avatar>
                                                                                            </ListItemAvatar>
                                                                                        </Grid>
                                                                                        <Grid item xs={8} sm={8}>
                                                                                            {/* <Typography component="subtitle1">Transferencia</Typography> */}
                                                                                            <ListItemText id="list-label-payment-transfer" primary="Transferencia"/>
                                                                                        </Grid>
                                                                                    </Grid>   
                                                                                </Box>
                                                                                
                                                                            } control={<Radio />}/> 
                                                                        </ListItem> 
                                                                    </Card>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    {(data.hasOwnProperty('jsonResumen'))&&
                                                                    (data.jsonResumen.resumen.envio.tipo !== "Express" && data.jsonResumen.resumen.subtotal + data.jsonResumen.resumen.costoEnvio <= 10000)&&
                                                                    <Card variant="outlined">
                                                                        <ListItem variant="outlined" button>
                                                                            <FormControlLabel value="5" label={
                                                                                    <Box component="div" py={2}>
                                                                                    <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                                                                        <Grid item xs={8} sm={8}>
                                                                                            <img className={classes.ppMethod} src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/oxxo.svg" alt="Oxxo" />
                                                                                        </Grid>
                                                                                        <Hidden smDown>
                                                                                            <Grid item xs={4} sm={4}>
                                                                                                <ListItemSecondaryAction className={classes.rightText}>
                                                                                                    <ListItemText id="list-label-horario-programad" secondary="Pago en Efectivo"/>
                                                                                                </ListItemSecondaryAction>
                                                                                            </Grid> 
                                                                                        </Hidden>
                                                                                    </Grid>   
                                                                                </Box>
                                                                                
                                                                            } control={<Radio />}/>
                                                                        </ListItem>
                                                                    </Card>
                                                                    }
                                                                </Grid>
                                                            </Grid> 
                                                        </div>
                                                    </List>                      
                                                </RadioGroup>
                                            </FormControl> 
                                        </Box>
                                    </Box>
                                }  

                                {(data.hasOwnProperty('jsonResumen'))&&
                                (sub_forma_pago !== '')?
                                    (sub_forma_pago === '7')?
                                        <SDKPayPalBotones evento={data.jsonResumen.resumen.eventoNum}/>
                                        :
                                        (sub_forma_pago === '1')?
                                        
                                        <Box component="div" m={1} >
                                            <Divider light/>
                                        <Box component="div"  p={2}>
                                            <Hostedfields clientToken={clientToken} salectOption={salectOption} tajetaSave={tajetaSave} evento={data.jsonResumen.resumen.eventoNum} Delete={Delete} total={Precios('formatcurrency',{subtotal:((data.jsonResumen.resumen.subtotal+data.jsonResumen.resumen.costoEnvio)-data.jsonResumen.nc.montoNc),fixed:2})} idMeses={idMeses} loading={loading} setLoading={setLoading} cambioNueva={cambioNueva}/>
                                        </Box>
                                        </Box>
                                        :
                                        <LoadingButton variant="contained" fullWidth  size="large" color="secondary" type="button"
                                        onClick={continuarCompra}
                                        loading={loading}
                                        loadingIndicator="Cargando..."
                                        >
                                            Finalizar
                                        </LoadingButton>
                                    :
                                    null
                                } 
                            </Box>
                        </div>
                    </Grid>  
                    <Grid item xs={12} sm={4}>
                        {(data.hasOwnProperty('jsonResumen'))?
                        <Resumen data={data} setEjecutivo={setEjecutivo} ejecutivo={ejecutivo} /> 
                        :
                        <Skeleton variant="rectangular" height={600} animation="wave"/>
                        }                
                    </Grid>                 
                </Grid>
            </Box>
        </Container>
        {(alerta.hasOwnProperty('severity'))&&
            <Alertas setAlerta={setAlerta} alerta={alerta}/>
        } 
    </Box>
    )
}