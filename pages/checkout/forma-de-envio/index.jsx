import {useEffect, useState} from 'react';
//Next js
import { useRouter } from 'next/router'
//Material UI
import makeStyles from '@mui/styles/makeStyles';
import {Radio,RadioGroup,FormControlLabel,CardContent,
       FormControl,Box,Grid,Button,Avatar,Divider,
       Typography,Card,List,ListItem,ListItemText,
       ListItemSecondaryAction,ListItemAvatar, Alert, AlertTitle,Stack } from '@mui/material';
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
//Componentes
import Resumen from '../Resumen';
import Process from '../Process';
import Alertas from '../Alertas';
//Servicios
import Services from '../../services/Services'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
    MethodType: {
        width:'30px',
        height:'30px',
        marginLeft: theme.spacing(2),
    },
    rightText: {
        textAlign: "right"
    },
    SDayRadio: {
        margin: theme.spacing(1),
    },
    CardSDay: {
    minWidth:"100px",
   
    height:'8rem',
    "&:hover": {
        backgroundColor: 'rgb(54 85 165 / 7%)',
        boxShadow: '0px 0px 16px rgb(54 85 166 / 8%), 0px 1px 4px rgb(54 85 166 / 8%)',
      },
    },
    w300: {maxWidth: '300px',},
    shippingDay:{
        padding:'0px',
        textAlign: 'center',
        padding: theme.spacing(1),
        justifyContent:'center',
        
    },
    titleTypeS: {
        fontWeight:'500'
    },
    shippingType: {
        width:'100px',
    },
    shippingTypeimg: {
        width:'80%',
        padding: theme.spacing(1),
    },


}));
export default function Forma_de_envio(props){
    const classes                           = useStyles();
    const router                            = useRouter()
    const [data,setData]                    = useState({})
    const [ejecutivo,setEjecutivo]          = useState({ejecutivo:'', slmn:0})
    const [forma_envio,setFormaEnvio]       = useState('2')
    const [fecha_envio,setFechaEnvio]       = useState('-')
    const [horarios,setHorarios]            = useState([])
    const [horario_envio,setHorarioEnvio]   = useState('-')
    const [precio_envio,setPrecioEnvio]     = useState(0)
    const [tipo_hora,setTipoHora]           = useState('Abierto')
    const [paqueteria,setPaqueteria]        = useState('-')
    const [alerta,setAlerta]                = useState({})
    const [open, setOpen]                   = useState(false);
    const cliente                           = 839494
    const usuario                           = 168020
    const afiliado                          = 'S'
    
    useEffect(()=>{
        const getData = async ()=>{
            let pedido       = await localStorage.getItem('Pedido')
            let services     = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+pedido+'&afiliado='+afiliado+'&paso=3',{})
            let json         = await services.data 
            let fe           = await (json.formasEnvio !== undefined)?(json.formasEnvio.pactado.fechas.length > 0)?'Programada':'2':'2'
            let fhe          = await (json.formasEnvio !== undefined)?(json.formasEnvio.pactado.fechas.length > 0)?json.formasEnvio.pactado.fechas[0].fecha.replace(' de ','-').replace(' ','-'):'-':'-'
            let h            = await (json.formasEnvio !== undefined)?(json.formasEnvio.pactado.fechas.length > 0)?json.formasEnvio.pactado.fechas[0].horarios:[]:[]
            setData({jsonResumen:json,pedido:pedido})
            setEjecutivo((json.resumen.nombreEjecutivo !== '')?{ejecutivo:json.resumen.nombreEjecutivo, slmn:parseInt(json.resumen.ejecutivo)}:{ejecutivo:'', slmn:0})
            setFormaEnvio(fe)
            setFechaEnvio(fhe)
            setHorarios(h)
        }
        getData()
    },[])

    async function continuarCompra(){
        if(forma_envio === '2' && paqueteria === '-'){
            setAlerta({severity:'error',mensaje:'Selecciona una paqueteria',vertical:'bottom',horizontal:'right'})
            return
        }
        let json = await {
            clienteNum:cliente,
            pedidoNum:localStorage.getItem('Pedido'),
            paq:paqueteria,
            paqPrecio:precio_envio,
            tipoHora:tipo_hora,
            fecha:horario_envio,
            hora:fecha_envio,
            tipoHoraPrecio:precio_envio,
            ejecutivo:ejecutivo.slmn,
            shipVia:data.jsonResumen.resumen.shipVia
        }
        Services('PUT-NOT','/carritoyreservado/actualizaPagos',json)        
        .then( response =>{
            let mensaje = response.data
            if (mensaje.indexOf("Error") == -1) {
                router.push('/checkout/forma-de-pago')
            }else {
                if(mensaje == "Error PvsE"){
                    setAlerta({severity:'error',mensaje:'Tu pedido es pago al recibir: No puede modificarse',vertical:'bottom',horizontal:'right'})
                    router.push('/Soho/Micuenta/misPedidos')
                }else if (mensaje == "Error factura"){
                    setAlerta({severity:'error',mensaje:'Tu pedido esta facturado: No puede modificarse',vertical:'bottom',horizontal:'right'})
                    router.push('/Soho/Micuenta/misPedidos')
                }else {
                    setAlerta({severity:'error',mensaje:'Algo salió mal: Intenta de nuevo',vertical:'bottom',horizontal:'right'})
                }
            }
        })
    }

    function salectOption({target}){
        const {value,name,id} = target;
        if(name === 'forma_envio'){                   
            if(value === 'Programada'){
                setTipoHora('Abierto')
                setFechaEnvio((data.jsonResumen.formasEnvio !== undefined)?(data.jsonResumen.formasEnvio.pactado.fechas.length > 0)?data.jsonResumen.formasEnvio.pactado.fechas[0].fecha.replace(' de ','-').replace(' ','-'):'-':'-')
                setHorarios((data.jsonResumen.formasEnvio !== undefined)?(data.jsonResumen.formasEnvio.pactado.fechas.length > 0)?data.jsonResumen.formasEnvio.pactado.fechas[0].horarios:[]:[])
                setHorarioEnvio('-')
                setPrecioEnvio((data.jsonResumen.formasEnvio !== undefined)?(data.jsonResumen.formasEnvio.pactado.fechas.length > 0)?data.jsonResumen.formasEnvio.pactado.abierto:0:0)
            }else if(value === 'Express'){
                setTipoHora('Express')
                setPrecioEnvio(data.jsonResumen.formasEnvio.express.costo)
            }else if(value === '3'){
                setTipoHora('PickUP')
                setPrecioEnvio(0)
            }            
            setFormaEnvio(value)
            setPaqueteria('-')            
        }else if(name === 'fecha_envio'){
            setFechaEnvio(value)
            setHorarios(data.jsonResumen.formasEnvio.pactado.fechas[id].horarios)
            setHorarioEnvio('-')
            setTipoHora('Abierto')
            setPrecioEnvio((data.jsonResumen.formasEnvio !== undefined)?(data.jsonResumen.formasEnvio.pactado.fechas.length > 0)?data.jsonResumen.formasEnvio.pactado.abierto:0:0)
        }else if(name === 'horario_envio'){
            setHorarioEnvio(value)
            setTipoHora((value === '-')?'Abierto':'Pactado')
            setPrecioEnvio(id)
        }else if(name === 'paqueteria'){
            setPaqueteria(value)
            setPrecioEnvio(id)
        }
    }
    return (
    <Box component="div" m={2} className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <div>
                    <Box component="div" py={4}>
                        <Process paso={2}/>
                    </Box>
                    <Box component="div" p={2}>
                        <Divider light/> 
                        <Box component="div" pt={3}  mb={1}>
                            <Typography variant="h6" component="h1" sx={{ fontWeight:'600'}}>3. Selecciona la forma de envío</Typography>
                        </Box>
                        <Box component="div">
                            {(data.hasOwnProperty('jsonResumen'))&&                    
                            (data.jsonResumen.resumen.bodegaDif === 'S')&&
                                <Box>
                                    <Stack sx={{ width: '100%' }} spacing={2}>
                                        <Alert severity="warning">
                                        <AlertTitle> Envío Express y Programado no  disponibles </AlertTitle>
                                            Posiblemente esten en bodegas distintas algunos productos .
                                        </Alert>                            
                                    </Stack>
                                </Box>
                            }
                        </Box>
                        <Box component="div" py={2} >
                            <FormControl component="fieldset" fullWidth>
                                <RadioGroup aria-label="gender" name="forma_envio" value={forma_envio} onChange={salectOption}>   
                                    <List dense>
                                        <div className={classes.root}>
                                            <Grid container spacing={2}>
                                                {(data.hasOwnProperty('jsonResumen'))&&
                                                (data.jsonResumen.resumen.shipVia !== 5 && data.jsonResumen.formasEnvio.pactado.fechas.length > 0)&&
                                                    <Grid item xs={12}>
                                                        <Card variant="outlined" >
                                                            <ListItem variant="outlined" button >
                                                                <FormControlLabel value="Programada" label={ 
                                                                    <Box component="div" py={2}>
                                                                        <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                                                            <Grid item xs={7} sm={3}>
                                                                            <ListItemAvatar>
                                                                                <Avatar variant="rounded" className={classes.MethodType} alt="Shipping date" src="https://pedidos.com/myfotos/pedidos-com/pagina/home19/pp/proe.svg" />
                                                                            </ListItemAvatar>
                                                                            </Grid>
                                                                            <Grid item xs={5} sm={4}>
                                                                                {/* <Typography component="subtitle1"> Programada </Typography> */}
                                                                                <ListItemText id="list-label-horario-programad" ml={8} sx={{width:'150px'}} primary={
                                                                                <Typography  className={classes.titleTypeS} variant="subtitle1">
                                                                                    Programada </Typography> 
                                                                                }/>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={5}>
                                                                                <ListItemSecondaryAction className={classes.rightText}>
                                                                                    <ListItemText id="list-label-horario-programad" secondary="Elige tu horario"/>
                                                                                </ListItemSecondaryAction>
                                                                            </Grid>                                
                                                                        </Grid>   
                                                                    </Box>
                                                                    } 
                                                                    control={<Radio />}/>
                                                            </ListItem>
                                                        </Card>
                                                    </Grid>
                                                }
                                                {(data.hasOwnProperty('jsonResumen'))&&
                                                (data.jsonResumen.resumen.bodegaDif === 'N' && data.jsonResumen.formasEnvio.express.aplicaExpress === 'S')&&
                                                    <Grid item xs={12}>
                                                        <Card variant="outlined">
                                                            <ListItem variant="outlined" button >
                                                                <FormControlLabel value="Express"  label={ 
                                                                    <Box component="div" py={2}>
                                                                        <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                                                            <Grid item xs={7} sm={3}>
                                                                                <ListItemAvatar>
                                                                                    <Avatar variant="rounded" className={classes.MethodType} alt="Express Shipping" src="https://pedidos.com/myfotos/pedidos-com/pagina/home19/pp/pe.svg" />
                                                                                </ListItemAvatar>
                                                                            </Grid>
                                                                            <Grid item xs={5} sm={4}>                 
                                                                                <ListItemText id="list-label-horario-programad" ml={8} sx={{width:'150px'}} primary={
                                                                                <Typography  className={classes.titleTypeS} variant="subtitle1">
                                                                                    Express 3hrs. </Typography> 
                                                                                } />
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={5}>
                                                                                <ListItemSecondaryAction className={classes.rightText}>
                                                                                    <ListItemText  id="list-label-horario-programad" secondary= {
                                                                                    <Typography  variant="body2" color="textSecondary" sx={{marginTop:'1.5rem'}} >
                                                                                        +45.00MXN
                                                                                    </Typography> }/>
                                                                                    <Typography  variant="caption" display="block">
                                                                                        {(data.jsonResumen.formasEnvio.express.aplicaMismoDia=== 'S')?
                                                                                        `Menos de 3 hrs`:`Lun-Vier 9:00 a 16:30 hrs.`
                                                                                        }
                                                                                    </Typography>
                                                                                    {/* <Typography> {data.jsonResumen.formasEnvio.express.costo}</Typography> */}
                                                                                </ListItemSecondaryAction>
                                                                            </Grid>                                
                                                                        </Grid>   
                                                                    </Box>
                                                                    } 
                                                                    control={<Radio />}/>
                                                            </ListItem>
                                                        </Card>
                                                    </Grid>
                                                }
                                                    <Grid item xs={12}>       
                                                        <Card variant="outlined">
                                                            <ListItem variant="outlined" button > 
                                                                <FormControlLabel value="2" label={
                                                                    <Box component="div" py={2}>
                                                                        <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                                                            <Grid item xs={7} sm={3}>
                                                                                <ListItemAvatar>
                                                                                    <Avatar variant="rounded" className={classes.MethodType} alt="Shipping" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/envio/paqueteria.svg" />
                                                                                </ListItemAvatar>
                                                                            </Grid>
                                                                            <Grid item xs={5} sm={4}>    
                                                                                <ListItemText id="list-label-horario-programad" ml={8} sx={{width:'150px'}} primary={
                                                                                <Typography  className={classes.titleTypeS} variant="subtitle1">
                                                                                   Paquetería </Typography> 
                                                                                } />             
                                                                                
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={5}>
                                                                                <ListItemSecondaryAction className={classes.rightText}>
                                                                                    <ListItemText id="list-label-horario-programad" secondary={
                                                                                    <Typography  variant="body2" color="textSecondary" sx={{marginTop:'1.5rem'}} >
                                                                                        1 a 2 días hábiles
                                                                                    </Typography> }/>
                                                                                    <Typography  variant="caption" display="block">
                                                                                    Demoras en Zonas extendidas
                                                                                    </Typography> 
                                                                                </ListItemSecondaryAction>
                                                                            </Grid>                                
                                                                        </Grid>  
                                                                    </Box>
                                                                } control={<Radio />}/>
                                                            </ListItem>
                                                        </Card>
                                                    </Grid>
                                                {(data.hasOwnProperty('jsonResumen'))&&
                                                (data.jsonResumen.resumen.entregaPickup !== '')&&                   
                                                    <Grid item xs={12}>
                                                        <Card variant="outlined">
                                                            <ListItem variant="outlined" button > 
                                                                <FormControlLabel value="3"  label={ 
                                                                    <Box component="div" py={2}>                                   
                                                                        <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                                                            <Grid item xs={7} sm={3}>
                                                                                <ListItemAvatar>
                                                                                    <Avatar variant="rounded" className={classes.MethodType} sx={{ padding:'0.05rem'}} alt="PickUP" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/envio/pickup.svg" />
                                                                                </ListItemAvatar>
                                                                            </Grid>
                                                                            <Grid item xs={5} sm={4}>                 
                                                                                {/* <Typography component="caption">PickUp </Typography> */}
                                                                                <ListItemText id="list-label-horario-programad" ml={8} sx={{width:'150px'}}  primary={
                                                                                <Typography  className={classes.titleTypeS} variant="subtitle1">
                                                                                    PickUp Center </Typography> 
                                                                                }/>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={5}>
                                                                                <ListItemSecondaryAction className={classes.rightText}>
                                                                                    <ListItemText id="list-label-horario-programad" secondary=
                                                                                    {
                                                                                        <Typography  variant="body2" color="textSecondary" sx={{marginTop:'1.5rem'}} >
                                                                                             {data.jsonResumen.resumen.entregaPickup}
                                                                                        </Typography> }
                                                                                   />
                                                                                    <Typography  variant="caption" display="block">
                                                                                     Polanco, CDMX
                                                                                    </Typography> 
                                                                                </ListItemSecondaryAction>
                                                                            </Grid>                                
                                                                        </Grid>   
                                                                    </Box>
                                                                } control={<Radio />}/>
                                                            </ListItem>
                                                        </Card>
                                                    </Grid>
                                                }
                                            </Grid>
                                        </div>
                                    </List>
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        {(forma_envio === 'Programada')?
                        <div>
                            <Box component="div" py={2}  className={classes.root}>
                                <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" component="h2" >Entrega programada</Typography>
                                        <Typography variant="subtitle1" component="subtitle2" >Selecciona el día y el horario de entrega.</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component="div">
                                <FormControl component="fieldset" fullWidth>
                                    <Box pb={1}  className={classes.root}>
                                        <RadioGroup aria-label="gender" name="fecha_envio" value={fecha_envio} onChange={salectOption} row fullWidth>  
                                            <Swiper
                                                spaceBetween={10}
                                                slidesPerView={3}
                                                onSlideChange={() => console.log("slide change")}
                                                onSwiper={swiper => console.log(swiper)}
                                                className="mySwiper"
                                                breakpoints={{
                                                    410: {
                                                        slidesPerView: 2.5,
                                                        
                                                        },
                                                    640: {
                                                    slidesPerView: 2.5,
                                                    
                                                    },
                                                    768: {
                                                    slidesPerView: 3,
                                                    
                                                    },
                                                    1024: {
                                                    slidesPerView: 3,
                                                    
                                                    },
                                                }}
                                               
                                                >
                                                {(data.hasOwnProperty('jsonResumen'))&&
                                                    data.jsonResumen.formasEnvio.pactado.fechas.map((fecha, index) => (
                                                     
                                                       <SwiperSlide className={classes.swiperBox}>
                                                            <Box component="div" key={index}>  
                                                                <Card className={classes.CardSDay} variant="outlined">
                                                                    <Box component="div" m={1}>
                                                                        <FormControlLabel fullWidth value={fecha.fecha.replace(' de ','-').replace(' ','-')} label={
                                                                            <CardContent className={classes.shippingDay}>
                                                                                <Typography className={classes.titleTypeS} variant="subtitle1" component="h3">
                                                                                {fecha.fecha_letra}
                                                                                </Typography>
                                                                                <Typography variant="body2" color="textSecondary">
                                                                                {fecha.fecha}
                                                                                </Typography>
                                                                            </CardContent>   
                                                                        } control={<Radio className={classes.SDayRadio} id={index}/>}/>
                                                                    </Box>
                                                                </Card>
                                                            </Box>
                                                        </SwiperSlide>
                                                    
                                                    ))
                                                }
                                            </Swiper>
                                        </RadioGroup>
                                    </Box>
                                </FormControl>
                                {/* <Box py={2}>
                                    <Divider light />
                                </Box> */}
                                <FormControl component="fieldset" fullWidth>
                                    <RadioGroup aria-label="gender" name="horario_envio" value={horario_envio} onChange={salectOption}>
                                        <List dense fullWidth>
                                            <div className={classes.root}>
                                                <Grid container spacing={2}>
                                                    
                                                    {
                                                    horarios.map((horario, index) => (
                                                    <Grid item xs={12}>
                                                        <Box component="div" key={index}>   
                                                            <Card variant="outlined"> 
                                                                <ListItem button>                                      
                                                                        {(data.hasOwnProperty('jsonResumen'))&&
                                                                        (horario.horario !== '10hrs a 18hrs')&&
                                                                        (data.jsonResumen.resumen.bodegaDif === 'N' || horario.horario !== '10hrs a 19hrs')&&
                                                                                
                                                                            <FormControlLabel fullWidth disabled={(horario.disponible === 'N')?(horario.horario === '10hrs a 19hrs')?true:(data.jsonResumen.resumen.bodegaDif !== 'S')?true:false:false}
                                                                            value={(horario.horario === '10hrs a 19hrs')?'-':horario.horario.replace('hrs a ','-').replace('hrs','')} label={
                                                                                <Box component="div" py={2}>
                                                                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                                                                        <Grid item xs={12} sm={10}>
                                                                                            <Box component="div" className={classes.w300}>
                                                                                                <Typography component="subtitle1"> {(horario.horario === '10hrs a 19hrs')?`Horario abierto de`:`Horario de`} {horario.horario} </Typography>
                                                                                            </Box>
                                                                                        </Grid>
                                                                                        <Grid item xs={12} sm={2} >
                                                                                            <ListItemSecondaryAction>
                                                                                                <ListItemText id="list-label-horarios" secondary={(horario.horario === '10hrs a 19hrs')?(data.jsonResumen.formasEnvio.pactado.abierto===0)?`GRATIS`:`$${data.jsonResumen.formasEnvio.pactado.abierto} MXN`:`+$${data.jsonResumen.formasEnvio.pactado.costo} MXN`}/>
                                                                                            </ListItemSecondaryAction>
                                                                                        </Grid>                                
                                                                                    </Grid>   
                                                                                </Box>
                                                                                
                                                                            } control={<Radio id={(horario.horario === '10hrs a 19hrs')?data.jsonResumen.formasEnvio.pactado.abierto:data.jsonResumen.formasEnvio.pactado.costo}/>}/>
                                                                        
                                                                        }
                                                                
                                                                </ListItem>
                                                            </Card>
                                                        </Box>
                                                    </Grid>
                                                        ))
                                                    }
                                                    
                                                </Grid>
                                            </div>
                                        </List>
                                    </RadioGroup>
                                </FormControl>

                            </Box>
                        </div>
                        :
                        (forma_envio === '2')&&
                        <Box m={1}>
                            <Box component="div" py={2}  className={classes.root}>
                                <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" component="h2" >Entrega por paquetería</Typography>
                                        <Typography variant="subtitle1" component="subtitle2" >Selecciona la paquetería de tu agrado:</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box m={1}>
                                {(data.hasOwnProperty('jsonResumen'))&&
                                (data.jsonResumen.resumen.peso > 199 || data.jsonResumen.resumen.pesoVolumetrico > 199 || 
                                data.jsonResumen.resumen.costoEnvio === -1 || data.jsonResumen.resumen.costoEnvio === -2)?
                                <div>
                                    <p>
                                    {(data.jsonResumen.resumen.costoEnvio === -2)?
                                    `Dirección fuera de cobertura`:`¡Pedido demasiado pesado!`
                                    }
                                    </p>
                                    <p>Llámanos para cotizar el precio de tu envío</p>
                                    <p>5015-8100 | 018008138181</p> 
                                    <a>Llamar</a>
                                </div>
                                :
                                <FormControl fullWidth component="fieldset">
                                    <RadioGroup aria-label="gender" name="paqueteria" value={paqueteria} onChange={salectOption}>  
                                        <List dense fullWidth>
                                            <div className={classes.root}>
                                                <Grid container spacing={2}>                                                 
                                                    {(data.hasOwnProperty('jsonResumen'))&&
                                                        Object.entries(data.jsonResumen.formasEnvio.paqueteria).reverse().map(([key, value]) => (
                                                            <Grid item xs={12}> 
                                                            <Box component="Div" key={key}>                                                          
                                                                <Card variant="outlined">
                                                                    <ListItem variant="outlined" button> 
                                                                        <FormControlLabel value={key} label={                                                                    
                                                                            <Box component="div" py={2}>
                                                                                <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={8}>
                                                                                    <Grid item xs={3}>
                                                                                        <ListItemAvatar className={classes.shippingType} >
                                                                                            <Avatar className={classes.shippingTypeimg} variant="rounded"  alt="Shippingt" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/paqueterias/ivoy.png" />
                                                                                        </ListItemAvatar>                                                                                    
                                                                                    </Grid>
                                                                                    <Grid item xs={4}>                 
                                                                                        {/* <Typography component="caption">Paquetería</Typography> */}
                                                                                        <ListItemText id="list-label-horario-programad" primary={key}/>
                                                                                    </Grid>
                                                                                    <Grid item xs={5}>
                                                                                        <ListItemSecondaryAction className={classes.rightText}>
                                                                                            <ListItemText id="list-label-horario-programad" secondary={(value === 0)?'GRATIS':'+$'+value}/>
                                                                                            <Typography  variant="caption" display="block">
                                                                                            {(key === 'IVOYDCM')?'2 a 5 días hábiles':''}
                                                                                            </Typography> 
                                                                                        </ListItemSecondaryAction>
                                                                                    </Grid>                                
                                                                                </Grid>  
                                                                            </Box>

                                                                        } control={<Radio id={value}/>}/>
                                                                    </ListItem>
                                                                </Card>
                                                            </Box>
                                                            </Grid>

                                                        ))
                                                    }
                                                </Grid>
                                            </div>
                                        </List>
                                    </RadioGroup>
                                </FormControl>
                                }
                            </Box>
                        </Box>
                        }
                        {(alerta.hasOwnProperty('severity'))&&
                            <Alertas setAlerta={setAlerta} alerta={alerta}/>
                        }
                    </Box>
                </div>
            </Grid>  
            <Grid item xs={12} sm={4}>
                <Resumen data={data} setEjecutivo={setEjecutivo} ejecutivo={ejecutivo} /> 
                {(!alerta.hasOwnProperty('severity'))&&
                    <Button variant="contained" fullWidth  size="large" color="primary" type="button" onClick={continuarCompra}>
                        Continuar 
                    </Button>
                }
            </Grid>                 
        </Grid>        
    </Box>
    )
}
