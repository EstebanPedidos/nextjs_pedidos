import { useState,useEffect } from 'react';
//next js
import { useRouter } from 'next/router'
//Material UI
import {Box, Grid, Paper, Typography, Button, Select, Badge,
    Card, CardActions, CardContent, CardActionArea, FormControl,
    Avatar, Divider, Radio, RadioGroup, FormHelperText, FormControlLabel, InputLabel, Skeleton} from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';


//Componentes 
import Process from "../Process"
import NotasCredito from './NotasCredito';
import Resumen from '../Resumen';
import Eliminar from '../modals/Eliminar';
import Alertas from '../Alertas';

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
      cardv2:{ width:"100%", margin:"auto",},
      rootcardi: {
        margin: theme.spacing(1), 
        height:'14rem', 
      },
      mleftib: {
        marginLeft: theme.spacing(2),
      },
      mxauto: {
          margin: 'auto',
      },
  
}));



export default function Facturacion(props){
    const classes                   = useStyles()
    const ruter                     = useRouter() 

    const [data,setData]            = useState({})
    const [pagos,setPagos]          = useState([])
    const [cfdis,setCfdis]          = useState([])
    const [rfc_ini,setRfcIni]       = useState({})
    const [total,setTotal]          = useState(0)
    const [notas,setNotas]          = useState([])
    const [ejecutivo,setEjecutivo]  = useState({ejecutivo:'', slmn:0})
    const [rfc,setRfc]              = useState({rfc_num:0,rfc:''})
    const [cfdi,setCfdi]            = useState('')
    const [pago,setPago]            = useState('')
    const [rfcs,setRfcs]            = useState([])
    const [aplicar,setAplicar]      = useState([])
    const [alerta,setAlerta]        = useState({})
    const cliente                   = 839494
    const usuario                   = 168020
    const afiliado                  = 'S'

    useEffect(()=>{
        const getData = async () => {
            let services     = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+localStorage.getItem('Pedido')+'&afiliado='+afiliado+'&paso=2',{})
            let json         = await services.data  
            let total        = await ((json.resumen.subtotal+json.resumen.costoEnvio)-json.nc.montoNc)
            let jsonP        = await Services('POST','/miCuenta/obtieneMPago',{})
            let pagos        = await jsonP.data 
            let rfc_ini      = ((await json.facturas.length) > 0)?json.facturas[1]:{}
            let tipoPersona  = ((await json.facturas.length) > 0)?(rfc_ini.rfc.length === 13)?'fisica':'moral':'moral';
            let jsonC        = await Services('POST','/miCuenta/obtieneCfdi?tipoPersona='+tipoPersona,{})
            let cfdis        = await jsonC.data 
            let notas        = []   
            if(json.facturas.length > 0){
                let jsonN    = await Services('GET','/carritoyreservado/obtieneNotas?clienteNum='+cliente+'&rfc='+rfc_ini.rfc+'&total='+total,{})
                    notas    = await jsonN.data                 
            }
            setData({jsonResumen:json})  
            setTotal(total)
            setPagos(pagos) 
            setCfdis(cfdis) 
            setRfcIni(rfc_ini)
            setNotas(notas)
            setEjecutivo((json.resumen.nombreEjecutivo !== '')?{ejecutivo:json.resumen.nombreEjecutivo, slmn:0}:{ejecutivo:'', slmn:0})
            setRfc({rfc_num:rfc_ini.rfcNum,rfc:rfc_ini.rfc})
            setCfdi((cfdis.length > 0)?cfdis[0].idUsu:'')
            setPago((pagos.length > 0)?pagos[0].mpago:'')
            setRfcs(json.facturas)
        }
        getData()
    },[])

    async function salectOption({target}){
        const {value,name,id} = target;
        if(name === 'rfc'){
            let tipoPersona = (id.length === 13)?'fisica':'moral';
            Services('GET','/carritoyreservado/obtieneNotas?clienteNum='+cliente+'&rfc='+id+'&total='+total,{})
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
                    setAplicar([...aplicar,value])
                }                
            }else{
                setAlerta({severity:'error',mensaje:'La NC es mayor que el monto del pedido',vertical:'bottom',horizontal:'right'})
            }
        } 
    }

    async function continuarCompra(){
        let nota_aplicar = ((await aplicar.length) > 0)?aplicar.toString():'N'
        Services('PUT','/carritoyreservado/actualizaRFC?clienteNum='+cliente+'&pedidoNum='+localStorage.getItem('Pedido')+'&rfcNum='+rfc.rfc_num+'&ejecutivo=0&cfdi='+cfdi+'&pago='+pago+'&notas='+nota_aplicar,{})
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
                } else if (mensaje == "Error factura"){
                    setAlerta({severity:'error',mensaje:'Tu pedido esta facturado: No puede modificarse',vertical:'bottom',horizontal:'right'})
                } else {
                    setAlerta({severity:'error',mensaje:'Algo salió mal: Intenta de nuevo',vertical:'bottom',horizontal:'right'})
                }
            }
        })
        
    }

    function Delete({rfc,rfcNum}){
        Services('POST','/miCuenta/eliminaRfc?rfcNum='+rfcNum+'&rfc='+rfc+'&clienteNum='+cliente,{})
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
        <Box component="div" m={2} className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <div>
                        <Box component="div" py={4} px={8}>
                            {(data.hasOwnProperty('jsonResumen'))?                  
                                <Process paso={1}/>:<Skeleton variant="text" animation="wave"/>
                            }
                        </Box>
                        <Box component="div" p={2}>
                            <Divider light/> 
                            <Box component="div" pt={3}  mb={1}> 
                                <Typography variant="h6" component="h1" sx={{ fontWeight:'600'}}>{(data.hasOwnProperty('jsonResumen'))?'2. Selecciona y/o añade los datos de facturación.':<Skeleton variant="text" animation="wave"/>}</Typography>
                            </Box>
                            <Box component="div" py={2} >
                                <div className={classes.root}>
                                    <Grid container direction="row" justifyContent="center" alignItems="center"  spacing={2}>
                                        <Grid item xs={12} >
                                            <Card className={classes.root} variant="outlined">
                                                <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                    <Grid item xs={8} sm={8}> 
                                                        {(data.hasOwnProperty('jsonResumen'))? 
                                                        <CardContent>
                                                            <Grid container alignItems="center" direction="row" justifyContent="flex-start" spacing={1}>
                                                                <Grid item xs={4} sm={4}>
                                                                    <Box component="div" ml={4}>
                                                                        <Avatar>
                                                                            <AddOutlinedIcon />
                                                                        </Avatar>
                                                                    </Box>
                                                                </Grid>
                                                                <Grid item xs={4} sm={4}>  
                                                                    <Box component="div"textAlign="left">
                                                                        <Typography variant="h6" component="h2">
                                                                            Nueva
                                                                        </Typography>
                                                                    </Box>
                                                                </Grid>
                                                            </Grid> 
                                                        </CardContent>
                                                        :
                                                        <Skeleton variant="rectangular" height={80} animation="wave"/>
                                                        }
                                                    </Grid> 
                                                    <Grid item xs={4} sm={4}>
                                                        {(data.hasOwnProperty('jsonResumen'))? 
                                                        <CardActions>
                                                            <Button size="Large" fullWidth color="primary">Añadir Datos</Button>
                                                        </CardActions>
                                                        :
                                                        <Skeleton variant="rectangular" height={80} animation="wave"/>
                                                        }
                                                    </Grid>   
                                                </Grid>                      
                                            </Card>
                                        </Grid> 
                                        <Grid item xs={12} sm={12}>
                                            {(data.hasOwnProperty('jsonResumen'))? 
                                            <Box component="div">
                                                <FormControl component="fieldset" fullWidth>
                                                    <div className={classes.root}>
                                                        <RadioGroup name='rfc' value={rfc.rfc_num+''}  onChange={salectOption}>                                                     
                                                            <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
                                                                    {
                                                                        rfcs.map((rfc, index) => (  
                                                                            <Grid item xs={12} sm={6}>
                                                                                <Box component="div" key={index}> 
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
                                                                                            <FormControlLabel fullWidth className={classes.cardv2} value={rfc.rfcNum+''} label={
                                                                                                <Box component="div">
                                                                                                    {(rfc.rfc === 'XAXX010101000')?  

                                                                                                        <Box component="div"> 
                                                                                                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>        
                                                                                                                <Grid item xs={12}>
                                                                                                                    <Box mx="auto" py={1}>
                                                                                                                        <Avatar className={classes.mxauto}>
                                                                                                                            <RemoveOutlinedIcon />
                                                                                                                        </Avatar>
                                                                                                                    </Box>
                                                                                                                </Grid>
                                                                                                                <Grid item xs={12}>
                                                                                                                    <Box textAlign="center">
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
                                                                                                        {/* <Box component="div" >
                                                                                                            <Divider variant="middle" light />
                                                                                                        </Box> */}
                                                                                                        <CardActions>
                                                                                                            <Button size="small" fullWidth color="primary">
                                                                                                            Detalles
                                                                                                            </Button>
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
                                <Typography variant="h6" component="h2" >{(data.hasOwnProperty('jsonResumen'))?'Selecciona el uso y forma de pago de tu factura':<Skeleton animation="wave" />}</Typography>
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
                                            <option value={cfdi.idUsu}>{cfdi.descripcion}</option>
                                        ))
                                    }                    
                                    </Select>
                                    <FormHelperText>Requerido</FormHelperText>
                                </FormControl>
                            </Box>
                            :
                            <Skeleton variant="rectangular"  height={80} animation="wave"/>
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
                                            <option value={pago.mpago}>{pago.descripcion}</option>
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
                        </Box>          
                    </div>
                </Grid>  
                <Grid item xs={12} sm={4}>
                    {(data.hasOwnProperty('jsonResumen'))?
                    (!alerta.hasOwnProperty('severity'))&&
                    <>
                    <Resumen data={data} setEjecutivo={setEjecutivo} ejecutivo={ejecutivo} /> 
                    <Button variant="contained" fullWidth  size="large" color="primary" type="button" onClick={continuarCompra}>Continuar</Button>
                    </>
                    :
                    <Skeleton variant="rectangular" height={400} animation="wave"/>
                    }
                </Grid>                 
            </Grid>
            {(alerta.hasOwnProperty('severity'))&&
                <Alertas setAlerta={setAlerta} alerta={alerta}/>
            }
        </Box>
    )
}