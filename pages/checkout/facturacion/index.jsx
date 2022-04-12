import { useState } from 'react';
//next js
import { useRouter } from 'next/router'
//Material UI
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

//Componentes 
import Process from "../Process"
import NotasCredito from './NotasCredito';
import Resumen from '../Resumen';

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
      cardv2:{ margin: theme.spacing(1),width:"100%", margin:"auto",},
      rootcardi: {
        margin: theme.spacing(1), 
        height:'13rem', 
      },
      mleftib: {
        marginLeft: theme.spacing(2),
      },
      mxauto: {
          margin: 'auto',
      },
  
}));



export default function Facturacion(props){
    const classes           = useStyles()
    const ruter             = useRouter() 
    const data              = props.data
    const pagos             = props.pagos
    const rfc_ini           = props.rfc_ini
    const total             = props.total

    const [ejecutivo,setEjecutivo]  = useState((data.jsonResumen.resumen.nombreEjecutivo !== '')?{ejecutivo:data.jsonResumen.resumen.nombreEjecutivo, slmn:0}:{ejecutivo:'', slmn:0})
    const [rfc,setRfc]              = useState({rfc_num:rfc_ini.rfcNum,rfc:rfc_ini.rfc})
    const [cfdis,setCfdis]          = useState(props.cfdis)
    const [cfdi,setCfdi]            = useState((props.cfdis.length > 0)?props.cfdis[0].idUsu:'')
    const [pago,setPago]            = useState((pagos.length > 0)?pagos[0].mpago:'')
    const [notas,setNotas]          = useState(props.notas)
    const [aplicar,setAplicar]      = useState([])


    async function salectOption({target}){
        const {value,name,id} = target;
        if(name === 'rfc'){
            let tipoPersona = (id.length === 13)?'fisica':'moral';
            Services('GET','/carritoyreservado/obtieneNotas?clienteNum='+839494+'&rfc='+id+'&total='+total,{})
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
                alert('No se puede')
            }
        } 
    }

    async function continuarCompra(){
        let nota_aplicar = await (aplicar.length > 0)?aplicar.toString():'N'
        Services('PUT','/carritoyreservado/actualizaRFC?clienteNum='+839494+'&pedidoNum='+2795111+'&rfcNum='+rfc.rfc_num+'&ejecutivo=0&cfdi='+cfdi+'&pago='+pago+'&notas='+nota_aplicar,{})
        .then( response =>{
            let mensaje = response.data
            if (mensaje.indexOf("Error") == -1) {
                ruter.push('/checkout/forma-de-envio')
            } else {
                if (mensaje == "Error PvsE"){
                    alert('No puede modificarse', 'Tu pedido es pago al recibir');
                } else if (mensaje == "Error factura"){
                    alert('No puede modificarse', 'Tu pedido esta facturado');
                } else {
                    alert('Intenta de nuevo','Algo salió mal');
                }
            }
        })
        
    }

    return (
        <Box component="div" m={2} className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <div>
                        <Button variant="contained" fullWidth  size="large"
                            color="primary" type="button" onClick={continuarCompra}>Continuar</Button>
                        <Process paso={1}/>
                        <Box component="div" pt={2}  className={classes.root}>
                            <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="h1" >2. Selecciona y/o añade los datos de facturación.</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box component="div" py={2}>
                            <div className={classes.root}>
                                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <Card className={classes.root} variant="outlined">
                                            <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={0}>
                                                <Grid item xs={8} sm={8}>                 
                                                    <CardContent>
                                                        <Grid container alignItems="center" spacing={1}>
                                                            <Grid item xs={4} sm={4}>
                                                                <Box component="div" ml={6}>
                                                                    <Avatar>
                                                                        <AddOutlinedIcon />
                                                                    </Avatar>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={4} sm={4}>  
                                                                <Box component="div" ml={4} textAlign="left">
                                                                    <Typography variant="h6" component="h2">
                                                                        Nueva
                                                                    </Typography>
                                                                </Box>
                                                            </Grid>
                                                        </Grid> 
                                                    </CardContent>
                                                </Grid> 
                                                <Grid item xs={4} sm={4}>
                                                    <CardActions>
                                                        <Button size="Large" color="primary">Añadir Datos</Button>
                                                    </CardActions>
                                                </Grid>   
                                            </Grid>                      
                                        </Card>
                                    </Grid> 
                                    <Grid item xs={12} sm={12}>
                                    <Box component="div">
                                        <FormControl component="fieldset" fullWidth>
                                            <div className={classes.root}>
                                                <RadioGroup name='rfc' value={rfc.rfc_num+''}  onChange={salectOption}>                                                     
                                                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
                                                            {
                                                                data.jsonResumen.facturas.map((rfc, index) => (  
                                                                    <Grid item xs={12} sm={6}>
                                                                        <Box component="div" key={index}> 
                                                                            <Card className={classes.rootcardi} variant="outlined">  
                                                                                <Box component="div" m={3}>
                                                                                    
                                                                                    {(rfc.cantNotas > 0)&&
                                                                                        <Box component="div" m={1} display="flex" justifyContent="flex-end"> 
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
                                                                                            
                                                                                                <Box component="div" m={1}> 
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
                                                                                                    <Typography variant="h6" component="h2">
                                                                                                        {rfc.razon.substring(0,27)}
                                                                                                    </Typography>
                                                                                                    <Typography  color="textSecondary">
                                                                                                        RFC: {rfc.rfc}
                                                                                                    </Typography>
                                                                                                    <Typography  color="textSecondary">
                                                                                                        {(rfc.rfc.trim().length === 13)?`Física`:`Moral`}
                                                                                                    </Typography>
                                                                                                </CardContent> 
                                                                                                <CardActions>
                                                                                                    <Button size="small" fullWidth color="primary">
                                                                                                    Detalles
                                                                                                    </Button>
                                                                                                    <Button size="small" fullWidth color="primary">
                                                                                                    Eliminar
                                                                                                    </Button>
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
                                    </Grid>
                                </Grid>
                            </div>
                        </Box>
                        <Box component="div" pt={4} className={classes.root}>
                            <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="h2" >Selecciona el uso y forma de pago de tu factura</Typography>
                                </Grid>
                            </Grid>
                        </Box>
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
                        {(notas.length > 0 )&&
                            <NotasCredito notas={notas} salectOption={salectOption} aplicar={aplicar}/>
                        }            
                    </div>
                </Grid>  
                <Grid item xs={12} sm={4}>
                    <Resumen data={data} setEjecutivo={setEjecutivo} ejecutivo={ejecutivo} /> 
                </Grid>                 
            </Grid>
        </Box>
    )
}

export async function getServerSideProps(context) {    
    let services     = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+2795111+'&afiliado=S&paso=2',{})
    let data         = await services.data  
    let total        = await ((data.resumen.subtotal+data.resumen.costoEnvio)-data.nc.montoNc)
        services     = await Services('POST','/miCuenta/obtieneMPago',{})
    let pagos        = await services.data 
    let rfc_ini      = await (data.facturas.length > 0)?data.facturas[1]:{}
    let tipoPersona  = await (data.facturas.length > 0)?(rfc_ini.rfc.length === 13)?'fisica':'moral':'moral';
        services     = await Services('POST','/miCuenta/obtieneCfdi?tipoPersona='+tipoPersona,{})
    let cfdis        = await services.data 
    let notas        = []   
    if(data.facturas.length > 0){
        services     = await Services('GET','/carritoyreservado/obtieneNotas?clienteNum='+839494+'&rfc='+rfc_ini.rfc+'&total='+total,{})
        notas        = await services.data 
        
    }
        
    
    return {
        props: {
            data :      {jsonResumen:data},
            total:      total,
            pagos:      pagos,
            cfdis:      cfdis,
            rfc_ini:    rfc_ini,
            notas:      notas
        },
      }
}