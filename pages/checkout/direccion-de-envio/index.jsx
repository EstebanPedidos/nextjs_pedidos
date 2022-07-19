import { useEffect, useState } from 'react';
//next js
import { useRouter } from 'next/router';
import Head from 'next/head'
//Tag Manager
import TagManager from 'react-gtm-module'
//Material UI
import { Container, Box, Grid, Paper, Typography, Button, Link, Skeleton,
        Card, CardActions, CardContent, CardActionArea,
        Avatar, Divider, Radio, RadioGroup, FormControlLabel} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import makeStyles from '@mui/styles/makeStyles';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//Componentes 
import Resumen from '../Resumen';
import Process from "../Process";
import Header  from '../Header';
import ConFactura from '../modals/ConFactura';
import Eliminar from '../modals/Eliminar';
import Alertas from '../Alertas';
import AddDir from '../../soho/MiCuenta/Direcciones/add/Index'
//Servicos
import Services from '../../services/Services'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    label:{width:'100%'},
    rootCardA: {
        flexGrow: 1,
        height: "13rem",
      },
    textCardA: {
    height: "9rem",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.primary,
    },
    blue: {
        fontSize: '1.45rem',
        width: '55px',
        height: '55px',
        backgroundColor:theme.palette.primary.main ,
      },
}));

export default function Direccion_de_envio(props){
    const classes                       = useStyles();
    const ruter                         = useRouter() 
    const [peso,setPeso]                = useState(0)
    const [data,setData]                = useState({})
    const [direcciones,setDirecciones]  = useState([])
    const [direccion,setDireccion]      = useState({dir_num:'0',observacion:'PickUP'});
    const [ejecutivo,setEjecutivo]      = useState({ejecutivo:'', slmn:0})
    const [alerta,setAlerta]            = useState({inputError:''})
    const [loading,setLoading]          = useState(false) 
    const [addOpen,setAddOpen]          = useState(false);     

    useEffect(()=>{
        const getData = async () => {
            let cliente           = await localStorage.getItem('Cliente')
            let afiliado          = await localStorage.getItem('afiliado') 
            if(cliente !== undefined && cliente !== null && afiliado !== undefined && afiliado !== null){
                if(parseInt(cliente) !== 201221){
                    let pedido       = await localStorage.getItem('Pedido')
                    let Usu_Nomb     = await localStorage.getItem('Usu_Nomb')
                    if(pedido !== undefined && pedido !== null){
                        let services     = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+pedido+'&afiliado='+afiliado+'&paso=1',{})
                        let json         = await {jsonResumen:services.data,pedido:pedido,Usu_Nomb:Usu_Nomb}
                        let servicesM    = await Services('POST','/miCuenta/detallePedido?clienteNum='+cliente+'&pedidoNum='+pedido,{})
                        let miPedido     = await servicesM.data
                        if(json.jsonResumen.resumen.estatus === 'R' && json.jsonResumen.resumen.pvse === 'N'){
                            let Ldirecciones = await json.jsonResumen.direcciones.sort(SortArray)
                            /*if(json.jsonResumen.resumen.envio.tipo !== ''){
                                if(json.jsonResumen.resumen.facturas.idMetodo !== 0  || json.jsonResumen.resumen.direccion.nombreDireccion === 'PickUP'){
                                    ruter.push('/checkout/forma-de-pago')
                                }else{
                                    ruter.push('/checkout/forma-de-envio')
                                }   
                            }else{
                                if(resumen.facturas.rfc !== ''){
                                    ruter.push('/checkout/forma-de-envio')
                                }else{*/
                                    setDirecciones(Ldirecciones)
                                    setEjecutivo((json.jsonResumen.resumen.nombreEjecutivo !== '')?{ejecutivo:json.jsonResumen.resumen.nombreEjecutivo, slmn:0}:{ejecutivo:'', slmn:0})
                                    setPeso((json.jsonResumen.resumen.peso >= json.jsonResumen.resumen.pesoVolumetrico)?json.jsonResumen.resumen.peso:json.jsonResumen.resumen.pesoVolumetrico)
                                    setData(json) 
                                    console.log(JSON.stringify(Ldirecciones))
                                    if(Ldirecciones.length > 0){
                                        setDireccion({dir_num:Ldirecciones[0].dirNum,observacion:Ldirecciones[0].observacion})
                                    } 
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
                                                        'actionField': {'step': 1, 'option': 'Entrega'},
                                                        'products': JSON.parse('['+products+']')
                                                    }
                                                }
                                                },
                                            }
                                            TagManager.initialize(tagManagerArgs)   
                                        }                                        
                                    }                                   
                               /* }                
                            } */                 
                        } else{
                            ruter.push('/misPedidos')
                        }   
                    }else{
                        ruter.push('/')
                    } 
                }else{
                    ruter.push('/')
                } 
            }else{
                ruter.push('/')
            }      
        }

        if(!addOpen){
            getData()
        }        
    },[addOpen])

    function SortArray(x, y){
        if (x.dirNum < y.dirNum) {return 1;}
        if (x.dirNum > y.dirNum) {return -1;}
        return 0;
    }

    async function Delete({dirNum,nombreDireccion}){
        Services('PUT','/registrov2/inhabilitadireccion?clienteNum='+localStorage.getItem('Cliente')+'&dirNum='+dirNum,{})
        .then( response =>{
            if (response.data === "Ok") { 
                direcciones.splice((direcciones.findIndex(direccion => direccion.dirNum === dirNum)), 1);
                (parseInt(direccion.dir_num) === dirNum)?setDireccion({dir_num:'0',observacion:'PickUP'}):setDirecciones([...direcciones])
                setAlerta({severity:'error',mensaje:'Tu dirección '+nombreDireccion+' se ha eliminado',vertical:'bottom',horizontal:'right'})
            } else {
                setAlerta({severity:'error',mensaje:'La dirección no se ha eliminado: Intenta de nuevo',vertical:'bottom',horizontal:'right'})
            }
        })
    }

    function salectOption({target}){
        const {value,id} = target;
        setDireccion({dir_num:value,observacion:id})
    }

    function continuarCompra(op){  
        setLoading(true)
        if(parseInt(direccion.dir_num) >= 0){
            Services('PUT','/carritoyreservado/actualizaDireccion?clienteNum='+localStorage.getItem('Cliente')+'&pedidoNum='+data.pedido+'&dirNum='+parseInt(direccion.dir_num)+'&ejecutivo='+ejecutivo.slmn+'&observaciones='+direccion.observacion+'&op='+op+'&peso='+peso+'&afiliado='+localStorage.getItem('afiliado') ,{})
            .then( response =>{
                    let mensaje = response.data              
                    if (mensaje.indexOf("Error") == -1) {
                        if(op === 1){
                            if(direccion.dir_num === '0'){
                                ruter.push("/checkout/forma-de-pago") 
                            }else{
                                ruter.push("/checkout/forma-de-envio")  
                            }
                        } else if(op == 2){
                            ruter.push("/checkout/facturacion")                    
                        }
                    } else {
                        if (mensaje == "Error PvsE" || mensaje == "Error factura"){
                            ruter.push("/misPedidos")
                        } else {
                            setAlerta({severity:'error',mensaje:'Intenta de nuevo: Algo salió mal',vertical:'bottom',horizontal:'right'})
                            setLoading(false)
                        }
                    }
            })
        }else{
            setLoading(false)
        }       
    }

    return ( 
       
        <Box className={classes.root}>
            <Head>
                <link href="https://pedidos.com/checkout/direccion-de-envio" rel="canonical" />
                <title>Dirección de envío | Pedidos.com</title>
                <meta name="description" content="Pedidos.com, la tienda en línea con amplia variedad de productos. Todo lo que necesitas para tu oficina, negocio, escuela y hogar lo encuentras aquí, solo selecciona y/o añade tu dirección de envío para la entrega de tu pedido. " />
            </Head>
            <Header/>            
            <Container maxWidth="lg">
                <Box component="div" py={3} m={1}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <div>
                                <Box component="div" pt={1}>
                                {(data.hasOwnProperty('jsonResumen'))?                  
                                    <Process paso={0}/>:<Skeleton variant="text" height={150} animation="wave"/>
                                }
                                </Box>
                                <Box component="div" p={1}>
                                    {(data.hasOwnProperty('jsonResumen'))?  
                                    <Box component="div" >
                                        <Paper elevation={0} className={classes.paper}>
                                            <Box component="div"className={classes.root}>
                                                <Divider light />
                                                <Box component="div" pt={3} >
                                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                                       {/*  <Grid item xs={1}>
                                                            <Box component="div" mx="auto">
                                                                <Avatar className={classes.blue}>Ini</Avatar>
                                                            </Box>
                                                        </Grid> */}
                                                        <Grid item xs={11}>
                                                            <Typography variant="h6" component="p"sx={{ fontWeight:'600'}} >
                                                               {/*  <Box  px={6} > */}
                                                                    {data.Usu_Nomb},
                                                                {/* </Box> */}
                                                            </Typography> 
                                                        </Grid>
                                                    </Grid>
                                                </Box> 
                                                {/* <Divider light/>  */}
                                                <Box component="div" pb={1}>                                           
                                                    <Typography variant="h6" component="h1" sx={{ fontWeight:'600'}} >1. Selecciona la forma de entrega:</Typography>
                                                </Box>   
                                            </Box>
                                        </Paper>
                                    </Box>
                                    :
                                    <Box sx={{ px: 1.5 }}>
                                        <Skeleton width="40%" animation="wave"/>
                                        <Skeleton animation="wave" />
                                    </Box>
                                    }
                                    {(!addOpen)?
                                    <Box component="div" px={2}>                                        
                                        <Box component="div" py={2}>
                                            <RadioGroup name='direccion_envio' value={direccion.dir_num}  onChange={salectOption}>
                                            {(data.hasOwnProperty('jsonResumen'))&&
                                            (data.jsonResumen.resumen.entregaPickup !== '')&&
                                                <div className={classes.root}>
                                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                                        <Grid item xs={12} >
                                                            <Card className={classes.root} variant="outlined">
                                                                <Box component="div" ml={1}>
                                                                    <CardActionArea>
                                                                        <FormControlLabel fullWidth sx={{ padding:"0px"}} value="0" label={
                                                                            <Box sx={{width:'100%'}}>
                                                                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                                                                    <CardContent>
                                                                                            <Grid container alignItems="center" direction="row" justifyContent="flex-start">
                                                                                                <Grid item xs={4} sm={2}>
                                                                                                    <Box justifyContent="center" py={1}>
                                                                                                        <Avatar>
                                                                                                            <StorefrontOutlinedIcon />
                                                                                                        </Avatar>
                                                                                                    </Box> 
                                                                                                </Grid>
                                                                                                <Grid item xs={8} sm={10}>  
                                                                                                    <Box component="div">
                                                                                                        {(data.hasOwnProperty('jsonResumen'))&&
                                                                                                        <Typography variant="h6" component="h2">
                                                                                                            {data.jsonResumen.resumen.entregaPickup} en PickUp Center
                                                                                                        </Typography>
                                                                                                        }
                                                                                                        <Typography variant="body1" gutterBottom color="textSecondary" sx={{width:'100%'}}>
                                                                                                            Alejandro Dumas 135, Polanco, 11550 CDMX.
                                                                                                        </Typography>
                                                                                                    </Box>
                                                                                                </Grid>
                                                                                            </Grid> 
                                                                                    </CardContent>
                                                                                </Grid>
                                                                            </Box>
                                                                        }
                                                                        labelPlacement="end"
                                                                        control={<Radio row id="PickUP"/>}/>                 
                                                                    </CardActionArea>
                                                                </Box>                         
                                                            </Card> 
                                                        </Grid>
                                                    </Grid>                      
                                                </div>
                                            }
                                            <Box pt={3}>
                                            {(data.hasOwnProperty('jsonResumen'))?  
                                        <Box component="div">
                                            <Box component="div">
                                                <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
                                                    <Grid item xs={12} sm={6}>
                                                        <Button onClick={()=>{setAddOpen(true)}} disableElevation variant="outlined" startIcon={<AddCircleOutlineIcon />} fullWidth>
                                                         Añadir Nueva
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Box>
                                        :
                                        <Box sx={{ pt: 1.5 }}>
                                            <Skeleton variant="rectangle" height={200} animation="wave"/>
                                        </Box>
                                        }
                                        </Box>
                                            <Box component="div" py={3}>
                                                <Typography variant="h6" component="h2">{(data.hasOwnProperty('jsonResumen'))?'Direcciones de envío:':<Skeleton animation="wave"/>}</Typography>
                                            </Box>
                                            {(data.hasOwnProperty('jsonResumen'))?
                                            <div className={classes.root}>
                                                <Grid container spacing={2}>
                                                    {
                                                        direcciones.map((direccion, index) => (
                                                            (direccion.nombreDireccion !== 'PickUP')&&
                                                            <Grid item xs={12} sm={12} lg={6} key={index}>
                                                                <Card className={classes.rootCardA} variant="outlined">
                                                                <Box component="div" mx={2}>
                                                                    <FormControlLabel value={direccion.dirNum+''} 
                                                                    label={
                                                                        <>
                                                                            <CardContent className={classes.textCardA} >                                        
                                                                                <Typography variant="subtitle1" component="h3" sx={{fontWeight:'500'}}>
                                                                                    {direccion.nombreDireccion.substring(0, 30)} 
                                                                                </Typography>
                                                                                <Typography variant="body1" gutterBottom color="textSecondary">
                                                                                    {direccion.direccion.substring(0, 57)}
                                                                                </Typography>
                                                                            </CardContent>                                            
                                                                        </>                                        
                                                                        
                                                                    }
                                                                    labelPlacement="end"
                                                                    control={<Radio id={(direccion.observacion.trim() === '')?'':direccion.observacion.replace('Á','A').replace('É','E').replace('Í','I').replace('Ó','O').replace('Ú','U').replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('Ñ','N').replace('ñ','n').replace(/ /g, "%20")}/>} />
                                                                
                                                                </Box>
                                                                <Box component="div">
                                                                        <Divider variant="middle" light />
                                                                </Box>
                                                                <Box component="div" px={2}>
                                                                    {/* <Button size="small" fullWidth color="primary">
                                                                        Detalles
                                                                    </Button> */}
                                                                    {direccion.reservado === 0 &&
                                                                        <Eliminar fullWidth
                                                                        Delete={Delete}
                                                                        object={{dirNum:direccion.dirNum,nombreDireccion:direccion.nombreDireccion}}
                                                                        ms_but={'Eliminar'}
                                                                        titulo={'Eliminar Dirección'}
                                                                        mensaje={'¿Estás seguro de eliminar la dirección?'}
                                                                        />
                                                                    }
                                                                </Box>
                                                                </Card>
                                                            </Grid>
                                                    ))                    
                                                    }
                                                </Grid>
                                            </div>
                                            :
                                            <Skeleton variant="rectangular" height={300} animation="wave"/>
                                            }
                                            </RadioGroup>
                                        </Box>
                                    </Box>
                                    :
                                    <Box component="div" p={2} width="100%">
                                        <AddDir  setAddOpen={setAddOpen} setAlerta={setAlerta} alerta={alerta}/>
                                    </Box>
                                    } 
                                </Box>
                            </div>
                        </Grid>     
                        <Grid item xs={12} sm={4}>
                            {(data.hasOwnProperty('jsonResumen'))?
                                (!addOpen)&&
                                <>
                                    <Resumen data={data} setEjecutivo={setEjecutivo} ejecutivo={ejecutivo} paso={0}/> 
                                    <ConFactura continuarCompra={continuarCompra} loading={loading}/>
                                </>
                                :
                                <Skeleton variant="rectangular"  height={600} animation="wave"/>
                            }                    
                        </Grid> 
                    </Grid>
                    {(alerta.hasOwnProperty('severity'))&&
                        <Alertas setAlerta={setAlerta} alerta={alerta}/>
                    } 
                </Box> 
            </Container>   
        </Box>
    );
}