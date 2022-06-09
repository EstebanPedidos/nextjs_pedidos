import { useState,useEffect } from 'react';
//next js
import { useRouter } from 'next/router'
//Tag Manager
import TagManager from 'react-gtm-module'
//Material UI
import {Container, Box, Grid, Paper, Typography, Button, Select, Badge,
    Card, CardActions, CardContent, CardActionArea, FormControl,
    Avatar, Divider, Radio, RadioGroup, FormHelperText, FormControlLabel, InputLabel, Skeleton} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import LoadingButton from '@mui/lab/LoadingButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

//Componentes 
import Header  from '../Header';
import Process from "../Process";
import NotasCredito from './NotasCredito';
import Resumen from '../Resumen';
import Eliminar from '../modals/Eliminar';
import Alertas from '../Alertas';
import AddRFC from '../../DatosFacturacion/add/Index';

//Servicios
import Services from '../../services/Services'


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      rootcard: {
        margin: theme.spacing(1),  
      },
      cardv2:{ width:"95%", margin:"auto",},
      rootcardi: {
        margin: theme.spacing(1), 
        height:'14.5rem', 
      },
      mleftib: {
        marginLeft: theme.spacing(2),
      },
      mxauto: {
          margin: 'auto',
      },
  
}));



export default function Facturacion(){
    const classes                   = useStyles()
    const ruter                     = useRouter() 

    const [data,setData]            = useState({})
    const [pagos,setPagos]          = useState([])
    const [cfdis,setCfdis]          = useState([])
    const [total,setTotal]          = useState(0)
    const [notas,setNotas]          = useState([])
    const [ejecutivo,setEjecutivo]  = useState({ejecutivo:'', slmn:0})
    const [rfc,setRfc]              = useState({rfc_num:0,rfc:''})
    const [cfdi,setCfdi]            = useState('')
    const [pago,setPago]            = useState('')
    const [rfcs,setRfcs]            = useState([])
    const [aplicar,setAplicar]      = useState([])
    const [alerta,setAlerta]        = useState({})
    const [loading,setLoading]      = useState(false)
    const [addOpen,setAddOpen]      = useState(false)

    useEffect(()=>{
        const getData = async () => {
            let cliente           = await localStorage.getItem('Cliente')
            let afiliado          = await localStorage.getItem('afiliado') 
            if(cliente !== undefined && cliente !== null && afiliado !== undefined && afiliado !== null){
                if(parseInt(cliente) !== 201221){
                    let pedido       = await localStorage.getItem('Pedido')
                    if(pedido !== undefined && pedido !== null){
                        let services     = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+localStorage.getItem('Pedido')+'&afiliado='+afiliado+'&paso=2',{})
                        let json         = await services.data  
                        if(json.resumen.estatus === 'R' && json.resumen.pvse === 'N'){
                            let total        = await ((json.resumen.subtotal+json.resumen.costoEnvio)-json.nc.montoNc)
                            let jsonP        = await Services('POST','/miCuenta/obtieneMPago',{})
                            let pagos        = await jsonP.data 
                            let Lrfcs        = await json.facturas
                            let rfc_ini      = await ((Lrfcs.length) > 0)?Lrfcs[Lrfcs.length-1]:rfc
                            let tipoPersona  = await (rfc_ini.rfc.length === 13)?'fisica':'moral';
                            let jsonC        = await Services('POST','/miCuenta/obtieneCfdi?tipoPersona='+tipoPersona,{})
                            let cfdis        = await jsonC.data 
                            let notas        = []   
                            if(Lrfcs.length > 0){
                                let jsonN    = await Services('GET','/carritoyreservado/obtieneNotas?clienteNum='+cliente+'&rfc='+rfc_ini.rfc+'&total='+total,{})
                                    notas    = await jsonN.data                 
                            }
                            let servicesM    = await Services('POST','/miCuenta/detallePedido?clienteNum='+cliente+'&pedidoNum='+pedido,{})
                            let miPedido     = await servicesM.data

                            setData({jsonResumen:json,pedido:pedido})  
                            setTotal(total)
                            setPagos(pagos) 
                            setCfdis(cfdis) 
                            setNotas(notas)
                            setEjecutivo((json.resumen.nombreEjecutivo !== '')?{ejecutivo:json.resumen.nombreEjecutivo, slmn:0}:{ejecutivo:'', slmn:0})
                            setRfc({rfc_num:rfc_ini.rfcNum,rfc:rfc_ini.rfc})
                            setCfdi((cfdis.length > 0)?cfdis[0].idUsu:'')
                            setPago((pagos.length > 0)?pagos[0].mpago:'')
                            setRfcs(Lrfcs)

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
                                                'actionField': {'step': 2, 'option': 'Factura'},
                                                'products': JSON.parse('['+products+']')
                                            }
                                        }
                                        },
                                    }
                                    TagManager.initialize(tagManagerArgs)   
                                }                                        
                            } 
                        }else{
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
            setRfcs([])
            getData()
        }
    },[addOpen])

    async function salectOption({target}){
        const {value,name,id} = target;
        if(name === 'rfc'){
            let tipoPersona = (id.length === 13)?'fisica':'moral';
            Services('GET','/carritoyreservado/obtieneNotas?clienteNum='+localStorage.getItem('Cliente')+'&rfc='+id+'&total='+total,{})
            .then( response =>{
                let notas = response.data               
                Services('POST','/miCuenta/obtieneCfdi?tipoPersona='+tipoPersona,{})
                .then( response =>{
                    setCfdis(response.data)
                    setNotas(notas)
                    setRfc({rfc_num:value,rfc:id})
                })             
            })
        }else if(name === 'cfdi'){
            setCfdi(value)
        }else if(name === 'pago'){
            setPago(value)
        }else if(name === 'nota'){
            if(id !== 'No'){
                let existe = aplicar.indexOf(value)
                if( existe>= 0){ 
                    await aplicar.splice(existe, 1 )                                   
                    setAplicar([...aplicar]) 
                }else{
                    let totalNc = await notas.map(nota => (nota.invoiceNum+''=== value || aplicar.indexOf(nota.invoiceNum+'') >= 0)?nota.monto:0).reduce((prev, curr) => prev + curr, 0) 
                    if(parseFloat(totalNc) < total){
                        setAplicar([...aplicar,value])
                    }else{
                        setAplicar([...aplicar]) 
                        setAlerta({severity:'error',mensaje:'La suma de la NC seleccionadas, es mayor que el monto del pedido',vertical:'bottom',horizontal:'right'})
                    }                   
                }                
            }else{
                setAlerta({severity:'error',mensaje:'La NC es mayor que el monto del pedido',vertical:'bottom',horizontal:'right'})
            }
        } 
    }

    async function continuarCompra(){
        setLoading(true)
        if(rfc.rfc !== ''){
            if(cfdi !== ''){
                if(pago !== ''){
                    let nota_aplicar = ((await aplicar.length) > 0)?aplicar.toString():'N'
                    if(nota_aplicar !== ''){
                        Services('PUT','/carritoyreservado/actualizaRFC?clienteNum='+localStorage.getItem('Cliente')+'&pedidoNum='+localStorage.getItem('Pedido')+'&rfcNum='+rfc.rfc_num+'&ejecutivo=0&cfdi='+cfdi+'&pago='+pago+'&notas='+nota_aplicar,{})
                        .then( response =>{                            
                            let mensaje = response.data
                            if (mensaje.indexOf("Error") == -1) {
                                if(data.jsonResumen.resumen.direccion.nombreDireccion === 'PickUP'){
                                    ruter.push("/checkout/forma-de-pago")
                                }else{
                                    ruter.push('/checkout/forma-de-envio')
                                }
                            } else {
                                if (mensaje == "Error PvsE"){
                                    setAlerta({severity:'error',mensaje:'Tu pedido es pago al recibir: No puede modificarse',vertical:'bottom',horizontal:'right'})
                                    setLoading(false)
                                } else if (mensaje == "Error factura"){
                                    setAlerta({severity:'error',mensaje:'Tu pedido esta facturado: No puede modificarse',vertical:'bottom',horizontal:'right'})
                                    setLoading(false)
                                } else {
                                    setAlerta({severity:'error',mensaje:'Algo salió mal: Intenta de nuevo',vertical:'bottom',horizontal:'right'})
                                    setLoading(false)
                                }
                            }
                        })
                    }else{
                        setAlerta({severity:'error',mensaje:'Error al seleccionar NC',vertical:'bottom',horizontal:'right'})
                        setLoading(false)
                    }                    
                }else{
                    setAlerta({severity:'error',mensaje:'Se requiere seleccionar un meto de Pago',vertical:'bottom',horizontal:'right'})
                    setLoading(false)
                }
            }else{
                setAlerta({severity:'error',mensaje:'Se requiere seleccionar un CFDI',vertical:'bottom',horizontal:'right'})
            }           
        }else{
            setAlerta({severity:'error',mensaje:'Se requiere seleccionar un RFC',vertical:'bottom',horizontal:'right'})
            setLoading(false)
        }       
    }

    function Delete({rfc,rfcNum}){
        Services('POST','/miCuenta/eliminaRfc?rfcNum='+rfcNum+'&rfc='+rfc+'&clienteNum='+localStorage.getItem('Cliente'),{})
        .then( response =>{
            let eliminaRfc = response.data
            if(eliminaRfc.indexOf('error') !== -1) {
                setAlerta({severity:'error',mensaje:eliminaRfc.replace('error',''),vertical:'bottom',horizontal:'right'})
            } else {
                rfcs.splice((rfcs.findIndex(rfc => rfc.rfcNum === rfcNum)), 1);
                (parseInt(rfc.rfcNum) === rfcNum)?setRfc((rfcs.length > 0)?{rfc_num:rfcs[0].rfcNum,rfc:rfcs[0].rfc}:{rfc_num:'',rfc:''}):setRfcs([...rfcs])
                setAlerta({severity:'error',mensaje:eliminaRfc.replace('correcto',''),vertical:'bottom',horizontal:'right'})
            }
        })
    }

    return (
        <Box component="div">
            <Header/>
            <Container maxWidth="lg">
            <Box component="div" py={3} m={1}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <div>
                            <Box component="div" pt={1}>
                                {(data.hasOwnProperty('jsonResumen'))?                  
                                    <Process paso={1}/>:<Skeleton variant="text" height={150} animation="wave"/>
                                }
                            </Box>
                            <Box component="div" p={1}>
                                <Divider light/> 
                                <Box component="div" pt={3}  mb={1}> 
                                    <Typography variant="h6" component="h1" sx={{ fontWeight:'600'}}>{(data.hasOwnProperty('jsonResumen'))?'2. Selecciona y/o añade los datos de facturación.':<Skeleton variant="text" width="70%" animation="wave"/>}</Typography>
                                </Box>
                                
                            {(!addOpen)?                              
                            <>
                                <Box component="div" py={2} >                          
                                    <div className={classes.root}>
                                        <Grid container direction="row" justifyContent="center" alignItems="center"  spacing={2}>
                                            <Grid item xs={12}>
                                                <Box component="div">
                                                    <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
                                                        <Grid item xs={12} sm={6}>
                                                        {(data.hasOwnProperty('jsonResumen'))?
                                                            <Button onClick={()=>{setAddOpen(true)}} disableElevation variant="outlined" startIcon={<AddCircleOutlineIcon />} fullWidth>
                                                            Añadir Nuevo
                                                           </Button>
                                                        :
                                                        <Box component="div">
                                                            <Skeleton variant="rectangular" width="60%" height={80} animation="wave"/>
                                                        </Box>
                                                        }
                                                        </Grid>
                                                    </Grid>
                                                </Box>                                               
                                            </Grid> 
                                            <Grid item xs={12} sm={12}>
                                                {(data.hasOwnProperty('jsonResumen'))? 
                                                <Box component="div">
                                                    <FormControl component="fieldset" fullWidth>
                                                        <div className={classes.root}>
                                                            <RadioGroup name='rfc' value={rfc.rfc_num+''}  onChange={salectOption}>                                                     
                                                                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
                                                                        {(rfcs.length > 0)?
                                                                            rfcs.map((rfc, index) => (  
                                                                                <Grid item xs={6} key={index}>
                                                                                    <Box component="div">
                                                                                        <Card className={classes.rootcardi} variant="outlined">  
                                                                                            <Box component="div" >
                                                                                                {(rfc.cantNotas > 0)&&
                                                                                                    <Box component="div" m={2} display="flex" justifyContent="flex-end"> 
                                                                                                        <Typography variant="caption" display="block" color="primary" gutterBottom>
                                                                                                            Notas de crédito
                                                                                                        </Typography>
                                                                                                        <Badge  className={classes.mleftib} badgeContent={rfc.cantNotas+''} color="primary">
                                                                                                            <ReceiptOutlinedIcon color="textSecondary" />
                                                                                                        </Badge>
                                                                                                    </Box>
                                                                                                }
                                                                                                <FormControlLabel fullWidth className={classes.cardv2} value={rfc.rfcNum+''} labelPlacement="end"  label={
                                                                                                    <Box component="div">
                                                                                                        {(rfc.rfc === 'XAXX010101000')?  
                                                                                                        <Box component="div" py={2} > 
                                                                                                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>        
                                                                                                                <Grid item xs={12} >
                                                                                                                    <Box mx="auto" px={1}>
                                                                                                                        <Avatar className={classes.mxauto}>
                                                                                                                            <RemoveOutlinedIcon />
                                                                                                                        </Avatar>
                                                                                                                    </Box>
                                                                                                                </Grid>
                                                                                                                <Grid item xs={12}>
                                                                                                                    <Box textAlign="center" p={1}>
                                                                                                                        <Typography variant="h6" component="h2">
                                                                                                                            Sin factura
                                                                                                                        </Typography>  
                                                                                                                    </Box>                         
                                                                                                                </Grid>
                                                                                                            </Grid>
                                                                                                        </Box>  
                                                                                                        :                       
                                                                                                        <Box component="div">   
                                                                                                            <CardContent> 
                                                                                                                <Box component="div" mb={2} sx={{height:'60px'}}>
                                                                                                                    <Typography variant="subtitle1" component="h3" sx={{fontWeight:'500'}}>
                                                                                                                        {rfc.razon.substring(0,27)}
                                                                                                                    </Typography>
                                                                                                                </Box> 
                                                                                                                <Typography variant="body1" color="textSecondary" gutterBottom>
                                                                                                                    Persona {(rfc.rfc.trim().length === 13)?`Física`:`Moral`}
                                                                                                                </Typography>
                                                                                                                <Typography variant="body1" color="textSecondary">
                                                                                                                    RFC: {rfc.rfc}
                                                                                                                </Typography>
                                                                                                            </CardContent> 
                                                                                                            <CardActions>
                                                                                                                <Eliminar
                                                                                                                Delete={Delete}
                                                                                                                object={{rfc:rfc.rfc,rfcNum:rfc.rfcNum}}
                                                                                                                ms_but={'Eliminar'}
                                                                                                                titilo={'Eliminar RFC'}
                                                                                                                mensaje={'Estás seguro de eliminar el RFC: '+rfc.rfc+'?'}
                                                                                                                />
                                                                                                            </CardActions>
                                                                                                            
                                                                                                        </Box>
                                                                                                        }
                                                                                                    </Box>
                                                                                                }                                                                                            
                                                                                                control={<Radio id={rfc.rfc}/>} /> 
                                                                                            </Box>
                                                                                        </Card>   
                                                                                    </Box>
                                                                                </Grid>
                                                                            )) 
                                                                            :
                                                                            <h1>Cargando..</h1>                
                                                                        }                                                   
                                                                </Grid>
                                                            </RadioGroup>
                                                        </div>
                                                    </FormControl>
                                                </Box>
                                                :
                                                <Skeleton variant="rectangular"  height={150} animation="wave"/>
                                                }    
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Box>
                                <Box component="div" py={1}>
                                    <Typography variant="h6" component="h2" >{(data.hasOwnProperty('jsonResumen'))?'Selecciona el uso y forma de pago de tu factura':<Skeleton width="50%" animation="wave" />}</Typography>
                                </Box>
                                {(data.hasOwnProperty('jsonResumen'))?
                                <Box component="div" py={2}>
                                    <FormControl variant="outlined" className={classes.formControl} focused required fullWidth>
                                        <InputLabel htmlFor="age-native-simple">Uso de CFDI </InputLabel>
                                        <Select
                                        native
                                        value={cfdi}
                                        onChange={salectOption}
                                        label="Uso de CFDI"
                                        inputProps={{
                                            name: 'cfdi'
                                        }}
                                        >
                                        {(cfdis.length > 0)&&
                                            cfdis.map((cfdi, index) => (
                                                <option key={index} value={cfdi.idUsu}>{cfdi.descripcion}</option>
                                            ))
                                        }                    
                                        </Select>
                                        <FormHelperText>Requerido</FormHelperText>
                                    </FormControl>
                                </Box>
                                :
                                <Skeleton variant="rectangular"  height={200} animation="wave"/>
                                }
                                <Divider light/>
                                {(data.hasOwnProperty('jsonResumen'))? 
                                <Box component="div">
                                    <FormControl variant="outlined" className={classes.formControl} focused required fullWidth>
                                        <InputLabel htmlFor="age-native-simple">Forma de pago</InputLabel>
                                        <Select
                                        native
                                        value={pago}
                                        onChange={salectOption}
                                        label="Forma de pago"
                                        inputProps={{
                                            name: 'pago',
                                        }}
                                        >
                                        {(pagos.length > 0)&&
                                            pagos.map((pago, index) => (
                                                <option key={index} value={pago.mpago}>{pago.descripcion}</option>
                                            ))
                                        }                    
                                        </Select>
                                        <FormHelperText>Requerido</FormHelperText>
                                    </FormControl>
                                </Box>
                                :
                                <Skeleton variant="rectangular"  height={80} animation="wave"/>
                                }
                                {(notas.length > 0 )&&
                                    <NotasCredito notas={notas} salectOption={salectOption} aplicar={aplicar}/>
                                } 
                            </>                              
                            :
                            <Box component="div" p={2}>
                                <AddRFC setAddOpen={setAddOpen} setAlerta={setAlerta} alerta={alerta}/>
                            </Box>
                            }  
                            </Box>      
                        </div>
                    </Grid>  
                    <Grid item xs={12} sm={4}>
                        {(data.hasOwnProperty('jsonResumen'))?                        
                        <>
                        <Resumen data={data} setEjecutivo={setEjecutivo} ejecutivo={ejecutivo} /> 
                        {(!alerta.hasOwnProperty('severity'))&&
                        (!addOpen)&&
                        <LoadingButton variant="contained" fullWidth  size="large" color="primary" type="button"
                        onClick={continuarCompra}
                        loading={loading}
                        loadingIndicator="Cargando..."
                        >
                            Continuar
                        </LoadingButton>
                        }
                        </>
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