import {useState,useEffect} from 'react'
//Material
import { Radio,RadioGroup,FormControlLabel,FormControl,
    ListItemText,Box,Grid,LinearProgress ,Avatar,Typography,Card, CardActions, Divider,
    InputLabel, MenuItem,  Select} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
//Componentes
import Fields from './Fields';
import Eliminar from '../modals/Eliminar';

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

    function pagoTarjetaGuardada(){
        if(tajetaSave !== 'nueva'){
            setLoading(true)
            alert('evento '+evento+' id '+tajetaSave+' term '+idMeses[mes-1].term+' interval_duration '+idMeses[mes-1].interval_duration)
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
                                <Grid item xs={6} sm={12}>
                                {clientTokenC.getPaymentTokens.map((tarjeta, index) => (  
                                <Box key={index} component="div">
                                    <Card variant="outlined">
                                        <Box component="div" m={2}>
                                            <FormControlLabel  value={tarjeta.id} fullWidth label={                                                            
                                                <Box component="div">
                                                    <Grid container direction="row-reverse"  justifyContent="space-evenly"  alignItems="center" spacing={4}>
                                                        <Grid item xs={4}>
                                                            <img src={brand[tarjeta.brand]} alt={"Paga en linea con "+tarjeta.brand} />
                                                        </Grid>
                                                        <Grid item xs={8}>  
                                                            <Box component="div" ml={1}>                                 
                                                                <ListItemText id="list-label-payment-method" primary={
                                                                    <Typography component="subtitle2" sx={{ fontWeight:'500',}} >
                                                                        XXX..{tarjeta.last_digits} 
                                                                    </Typography>
                                                                }/>
                                                            </Box> 
                                                        </Grid>
                                                    </Grid>   
                                                </Box>  
                                            } control={<Radio />}/>
                                        </Box>
                                        {(tajetaSave === tarjeta.id && idMeses.length > 0)&&                                        
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
                                                    <MenuItem key={index} value={index+1} >${mes.value} MXN x {mes.term} MESES</MenuItem>
                                                ))
                                                }                                                
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        }
                                        <Divider variant="middle" light />
                                        <CardActions>
                                            <Eliminar
                                            Delete={Delete}
                                            object={{id:tarjeta.id,posicion:index}}
                                            ms_but={'Eliminar'}
                                            titilo={'Eliminar'}
                                            mensaje={'Estás seguro de eliminar la tarjeta '+tarjeta.brand+' con terminacion '+tarjeta.last_digits+'?'}
                                            />
                                        </CardActions>     
                                    </Card>
                                </Box>
                                ))
                                }
                            
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </>
                    </div>
            </FormControl>
            <LoadingButton variant="contained" fullWidth  size="large" color="secondary" type="button"
            onClick={pagoTarjetaGuardada}
            loading={loading}
            loadingIndicator="Pagando..."
            >
                Pagar
            </LoadingButton>
            </Box>           
        :        
        <Fields clientToken={clientTokenC.clienteToken} evento={evento} total={total}/>
        }
        </>
        
    );
}