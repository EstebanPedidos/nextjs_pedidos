import {useState,useEffect} from 'react'
//next js
import { useRouter } from 'next/router'
//Material
import { Radio,RadioGroup,FormControlLabel,FormControl,
    ListItemText,Box,Grid,LinearProgress ,Avatar,Typography,Card, CardContent, CardActions, Divider,
    InputLabel, MenuItem, Button ,Select} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LoadingButton from '@mui/lab/LoadingButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
//Componentes
import Fields from './Fields';
import Eliminar from '../modals/Eliminar';
import Alertas from "../Alertas";
//SERVICIOS
import Services from '../../services/Services'
import makeStyles from '@mui/styles/makeStyles';
const useStyles = makeStyles((theme) => ({
    rootcardi: {
        margin: theme.spacing(1), 
        height:'14.5rem', 
    },
}));

export default function Hostedfields({clientToken,salectOption,tajetaSave,evento,Delete,total,idMeses,loading,setLoading}) {
    const classes  = useStyles()
    const [clientTokenC,setClientTokenC] = useState({})
    const [mes,setMes]                   = useState(0)
    const [alerta,setAlerta]    	     = useState({})
    const router    			         = useRouter()
    useEffect(()=>{
        setClientTokenC(clientToken) 
    },[clientToken])

    const brand ={
    VISA:       'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/visa.svg',
    MASTERCARD: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/mastercard.svg',
    DISCOVER: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/DISCOVER.svg',
    AMEX: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/AMEX.svg',
    SOLO: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/solo.svg',
    JCB: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/JBC.svg',
    STAR: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/Military-star.svg',
    DELTA: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/Delta.svg',
    SWITCH: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/Switch.svg',
    MAESTRO: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/maestro.svg',
    CB_NATIONALE: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/cb.svg',
    CONFIGOGA: '',
    CONFIDIS: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/confidis.svg',
    ELECTRON: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/electron.svg',
    CETELEM: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/cetelem.svg',
    CHINA_UNION_PAY: 'https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/brand/unionpay.svg',
    }

    async function pagoTarjetaGuardada(){
        if(tajetaSave !== 'nueva'){
            setLoading(true)
            let term                = await (mes > 0 )?idMeses[mes-1].term:''
            let interval_duration   = await (mes > 0 )?idMeses[mes-1].interval_duration:''
            let services            = await Services('POST-NOT','/registrov2/createOrderPayPal',{evento:evento,isSTC:'S'})
            let orderId             = await services.data
            if(orderId !== '' && orderId !== 'null' && orderId !== null){
                let services    = await Services('POST-NOT','/registrov2/getOrderPayPal',{evento:evento,orderID:orderId,address:'192.10.2.166',isSTC:'S',id_PayTok:tajetaSave, term:term,interval_duration:interval_duration})
                let dataResp    = await services.data
                if(dataResp.estatus == "COMPLETED" || dataResp.estatus == "completed"){
                    router.push('/checkout/confirmacion-de-pago')
                }else{
                    setAlerta({severity:'error',mensaje:'Error '+dataResp.estatus,vertical:'bottom',horizontal:'right'})
                    setLoading(false)
                }               
            } else{
                setAlerta({severity:'error',mensaje:'Error al crear la orden',vertical:'bottom',horizontal:'right'})
                setLoading(false)
            }               
        }else{
            setAlerta({severity:'error',mensaje:'Selecciona una Tarjeta',vertical:'bottom',horizontal:'right'})
            setLoading(false)
        }        
    }

    return (    
        <>
        {(clientTokenC.hasOwnProperty('getPaymentTokens'))&&
        (clientTokenC.getPaymentTokens.length > 0 && tajetaSave !== 'nueva')?           
           <Box component="div">
            <FormControl component="fieldset" fullWidth>
                <div className={classes.root}>                    <>
                        <RadioGroup aria-label="gender" name="tarjeta_guardada" value={tajetaSave} onChange={salectOption}>
                            <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                                <Grid item xs={12}>
                                    <FormControlLabel key="nueva" value="nueva" fullWidth label={                                                            
                                        <Box component="div" py={2}>
                                                <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={8}>
                                                    <Grid item xs={3} >
                                                        <Box component="div" ml={1}>
                                                            <Avatar sx={{ backgroundColor:'#3655a6',}}>
                                                                <AddOutlinedIcon />
                                                            </Avatar>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={9}>                                    
                                                        <ListItemText id="list-label-payment-method" color="primary" primary={  
                                                        <Typography component="subtitle2" sx={{ fontWeight:'500',}} color="primary">Agregar nueva</Typography>
                                                            }/>
                                                       
                                                    </Grid>
                                                   
                                                </Grid>
                                        </Box>
                                    } control={<Radio />}/> 
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <Box component="div">
                                        <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
                                            <Grid item xs={12} sm={6}>
                                                <Button disableElevation variant="outlined" startIcon={<AddCircleOutlineIcon />} fullWidth>
                                                   Añadir Nueva
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box component="div" pb={4}>
                                    <div className={classes.root}>
                                        <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
                                            {clientTokenC.getPaymentTokens.map((tarjeta, index) => (                             
                                            <Grid item xs={12} sm={6} key={index}>     
                                                <Box component="div" py={1}>  
                                                    <Card variant="outlined">
                                                    <Box component="div" m={2}>
                                                    <FormControlLabel  value={tarjeta.id} fullWidth label={                                                            
                                                    <Box component="div">
                                                    <Grid container direction="row-reverse"  justifyContent="space-between"  alignItems="center" spacing={2}>
                                                        <Grid item xs={4}>
                                                            <img src={brand[tarjeta.brand]} alt={"Paga en linea con "+tarjeta.brand} />
                                                        </Grid>
                                                    <Grid item xs={8}>  
                                                    <Box component="div" ml={1}>                                 
                                                        <ListItemText id="list-label-payment-method" primary={
                                                            <Typography component="subtitle2" sx={{ fontWeight:'500',}} >
                                                                <MoreHorizIcon />  {tarjeta.last_digits} 
                                                            </Typography>
                                                        }/>
                                                    </Box> 
                                                    </Grid>
                                                    </Grid>   
                                                    </Box>  
                                                    } control={<Radio />}/>
                                                    </Box>
                                                    {(tajetaSave === tarjeta.id && idMeses.length > 1)&&                                        
                                                    <Box component="div" m={2}>
                                                    <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Meses</InputLabel>
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={mes}
                                                    label="mes"
                                                    onChange={({target})=>{setMes(target.value)}}
                                                    >
                                                    <MenuItem value={0}>Selecciona un plan</MenuItem>
                                                    {(idMeses.length > 0 )&&
                                                    idMeses.map((mes, index) => ( 
                                                    (parseInt(mes.term) > 1)&&
                                                    <MenuItem key={index} value={index+1} >${mes.value} MXN x {mes.term} MESES</MenuItem>
                                                    ))
                                                    }                                                
                                                    </Select>
                                                    </FormControl>
                                                    </Box>
                                                    }
                                                    <Divider variant="middle" light />

                                                    <Eliminar
                                                    Delete={Delete}
                                                    object={{id:tarjeta.id,posicion:index}}
                                                    ms_but={'Eliminar'}
                                                    titilo={'Eliminar'}
                                                    mensaje={'Estás seguro de eliminar la tarjeta '+tarjeta.brand+' con terminacion '+tarjeta.last_digits+'?'}
                                                    />

                                                    </Card>  
                                                </Box>
                                            </Grid>
                                            ))
                                            }   
                                           
                                        </Grid>
                                    </div>                                
                                    </Box>
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </>
                    </div>
            </FormControl>
            <LoadingButton variant="contained" fullWidth  size="large" color="secondary" type="button"
            onClick={pagoTarjetaGuardada}
            loading={loading}
            loadingIndicator="Espera..."
            >
                Pagar
            </LoadingButton>
            {(alerta.hasOwnProperty('severity'))&&
				<Alertas setAlerta={setAlerta} alerta={alerta}/>
			}
            </Box>           
        :        
        <Fields clientToken={clientTokenC.clienteToken} evento={evento} total={total}/>
        }
        </>
        
    );
}