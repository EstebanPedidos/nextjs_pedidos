import {useState} from 'react';
//next js
import { useRouter } from 'next/router'
//Material
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


//Componentes 
import Resumen from '../Resumen';
import Process from '../Process';
import SDKPayPalBotones from './SDKPayPalBotones'
//Servicios
import Services from '../../services/Services'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    MethodType:  { 
        width:'40px',
        height:'40px',
        marginLeft: theme.spacing(2),
    },

    ppMethod: {
        height: "28px",
        paddingLeft: theme.spacing(1),
        marginTop:"5px"
    },
    payonlineop: {
        width:"100%", 
    },
    txtPMethod: {
        marginRight: "3rem",
        paddingRight: "10rem",
    },
}));

export default function Forma_de_pago(props){
    const classes                           = useStyles()
    const router                            = useRouter()
    const data                              = props.data
    const afiliado                          = 'S'
    const max_cont_ent                      = (afiliado === 'S')?5000:1000    
    const [ejecutivo,setEjecutivo]          = useState((data.jsonResumen.resumen.nombreEjecutivo !== '')?{ejecutivo:data.jsonResumen.resumen.nombreEjecutivo, slmn:0}:{ejecutivo:'', slmn:0})
    const [forma_pago,setFormaPago]         = useState('linea')
    const [sub_forma_pago,setSubFormaPago]  = useState('1')
    
    function salectOption({target}){
        const {value,name,id} = target;
        if(name === 'forma_pago'){
            setFormaPago(value)
            setSubFormaPago('')
        }else if(name === 'sub_forma_pago'){
            setSubFormaPago(value)
        }
    }
    function continuarCompra(){
        (sub_forma_pago === '5')?
        Services('PUT-NOT','/registrov2/getOrderPayPalOXXO',{
            evento:data.jsonResumen.resumen.eventoNum
        })
        .then( response =>{
            let linkOxxo = response.data
            if(linkOxxo !== ''){
                guardaFormaDePago(linkOxxo) 
            }                           
        }): guardaFormaDePago(''); 
    }

    function guardaFormaDePago(linkOxxo){
        Services('PUT-NOT','/registrov2/registraFormaPagoTv',{
            pedido_num:2795111,
            cliente_num:839494,
            fp_num:sub_forma_pago
        })
        //ShoppingCartServices.guardaFormaDePago(data.pedido_num,data.Cliente,data.sub_forma_pago)
        .then( response =>{
            let mensaje = response.data
            if( mensaje === "Agregado" || mensaje === "Actualizado"){
                if(sub_forma_pago === '3' || sub_forma_pago === '4' ){
                    router.push('/checkout/confirmacion-de-pago')
                }else if(sub_forma_pago === '2'){
                   /* ShoppingCartServices.guardaPagoAlRecibir(data.pedido_num,data.Cliente,data.jsonResumen.resumen.shipVia,data.sub_forma_pago)
                    .then( response =>{
                        let mensajeRecibir = response.data
                        if(mensajeRecibir === 'ok'){
                            router.push('/checkout/confirmacion-de-pago')
                        }
                    })*/
                }else if(sub_forma_pago === '5'){
                    window.open(linkOxxo,'','width=800,height=550,left=300,top=100,toolbar=yes')
                    setTimeout(router.push('/checkout/confirmacion-de-pago'),1000000)
                }
            }
        })
    }

    return (
    <Box component="div" m={2} className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <div>                  
                    <Process paso={3}/>
                    <Box component="div" py={2}  className={classes.root}>
                        <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                            <Grid item xs={12}>
                            <Typography variant="h6" component="h1">4. Selecciona la forma de pago</Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box m={1} >
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
                                                                <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={8}>
                                                                    <Grid item xs={4}>
                                                                        <ListItemAvatar>
                                                                            <Avatar variant="rounded" className={classes.MethodType} alt="Online Payment" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/online.svg" />
                                                                        </ListItemAvatar>
                                                                    </Grid>
                                                                    <Grid item xs={8}>
                                                                        {/* <Typography component="subtitle1">Paga en línea </Typography> */}
                                                                        <ListItemText id="list-label-payment-method" primary="Paga en línea"/>
                                                                    </Grid>
                                                                </Grid>   
                                                            </Box>
                                                        } control={<Radio />}/>
                                                    </ListItem>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12}>
                                            {((data.jsonResumen.resumen.shipVia !== 5 || data.jsonResumen.resumen.envio.tipo === 'Abierto' || data.jsonResumen.resumen.envio.tipo === 'Pactado')
                                            && data.jsonResumen.resumen.subtotal + data.jsonResumen.resumen.costoEnvio <= max_cont_ent
                                            )&&  
                                            <Card variant="outlined">
                                                <ListItem variant="outlined" button fullWidth>                 
                                                    <FormControlLabel value="recibir" fullWidth label={
                                                        <Box component="div" fullWidth py={2}>
                                                                <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={8}>
                                                                    <Grid item xs={4}>
                                                                        <ListItemAvatar>
                                                                            <Avatar variant="rounded" className={classes.MethodType} alt="Online Payment" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/recibe3.svg" />
                                                                        </ListItemAvatar>
                                                                    </Grid>
                                                                    <Grid item xs={8}>
                                                                        {/* <Typography component="subtitle1">Paga al recibir</Typography> */}
                                                                        <ListItemText id="list-label-payment-method" primary="Paga al recibir"/>
                                                                    </Grid>
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
                                                                <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={8}>
                                                                    <Grid item xs={4}>
                                                                        <ListItemAvatar>
                                                                            <Avatar variant="rounded" className={classes.MethodType} alt="Online Payment" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/transfer.svg" />
                                                                        </ListItemAvatar>
                                                                    </Grid>
                                                                    <Grid item xs={8}>
                                                                        {/* <Typography component="subtitle1">Transferencias y depósitos</Typography> */}
                                                                        <ListItemText id="list-label-payment-method" primary="Transferencia o depósito"/>
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
                    {(forma_pago === 'linea') &&
                        <Box component="div" m={1}>
                            <Box component="div" py={2} >
                                <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" component="h2">Pago en línea</Typography>
                                        <Typography variant="subtitle1" component="subtitle2">Selecciona la opción:</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component="div" >
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
                                                                            <Grid item xs={2}>
                                                                                <ListItemAvatar>
                                                                                    <Avatar>
                                                                                        <CreditCardOutlinedIcon />
                                                                                    </Avatar>
                                                                                </ListItemAvatar>
                                                                            </Grid>
                                                                            <Grid item xs={5}>
                                                                                {/* <Typography component="subtitle1">Tarjeta</Typography> */}
                                                                                <ListItemText className={classes.txtPMethod} id="list-label-payment-online" primary="Tarjeta"/>
                                                                            </Grid>
                                                                            <Grid item xs={5}>
                                                                            
                                                                            <ListItemSecondaryAction>
                                                                            <Box display="flex" justifyContent="flex-center">
                                                                                <Box>
                                                                                <img className={classes.payonlineop} src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/Brand/VISA.svg" alt="visa" />
                                                                                </Box>
                                                                                <Box>
                                                                                <img className={classes.payonlineop} src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/Brand/mastercard.svg" alt="masterCard" />
                                                                                </Box>
                                                                                <Box>
                                                                                <img className={classes.payonlineop} src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/Brand/AMEX.svg" alt="AMEX" />
                                                                                </Box>
                                                                                <ListItemText className={classes.payonlineop}  secondary="   y más..."/>
                                                                            </Box>
                                                                                    
                                                                            </ListItemSecondaryAction>
                                                                            </Grid>
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
                                                                        <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={8}>
                                                                            {/* <Grid item xs={4} sm={4}>
                                                                                <ListItemAvatar>
                                                                                        imagen
                                                                                </ListItemAvatar>
                                                                            </Grid> */}
                                                                            <Grid item xs={12}>
                                                                                {/* <Typography component="subtitle1">PayPal</Typography> */}
                                                                                {/* <ListItemText id="list-label-payment-online" primary="PayPal"/> */}
                                                                                <img className={classes.ppMethod} src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/paypal.png" alt="PayPal" />
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
                    {(forma_pago === 'recibir') &&
                        <Box m={1}>
                            <Box component="div" py={2} >
                                <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" component="h2">Pago al recibir </Typography>
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
                                                                        <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={8}>
                                                                            <Grid item xs={4} sm={4}>
                                                                                <ListItemAvatar>
                                                                                    <Avatar>
                                                                                        <CreditCardOutlinedIcon />
                                                                                    </Avatar>
                                                                                </ListItemAvatar>
                                                                            </Grid>
                                                                            <Grid item xs={8} sm={8}>
                                                                                {/* <Typography component="subtitle1">Tarjeta</Typography> */}
                                                                                <ListItemText id="list-label-payment-onreceipt" primary="Tarjeta"/>
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
                                                                        <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={8}>
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
                                                                        <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={6}>
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
                                                        {(data.jsonResumen.resumen.envio.tipo !== "Express" && data.jsonResumen.resumen.subtotal + data.jsonResumen.resumen.costoEnvio <= 10000)&&
                                                        <Card variant="outlined">
                                                            <ListItem variant="outlined" button>
                                                                <FormControlLabel value="5" label={
                                                                        <Box component="div" py={2}>
                                                                        <Grid container direction="row"  justifyContent="space-evenly"  alignItems="center" spacing={8}>
                                                                            <Grid item xs={4} sm={4}>
                                                                                <ListItemAvatar>
                                                                                    <Avatar alt="OXXO" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/f-pago/oxxo.svg"/>
                                                                                </ListItemAvatar>
                                                                            </Grid>
                                                                            <Grid item xs={8} sm={8}>
                                                                                {/* <Typography component="subtitle1">OXXO</Typography> */}
                                                                                <ListItemText id="list-label-payment-transfer" primary="OXXO"/>
                                                                            </Grid>
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
                    {(sub_forma_pago !== '')?
                        (sub_forma_pago === '7')?
                            <SDKPayPalBotones/>
                            :
                            (sub_forma_pago === '1')?
                            <h1>tarjeta</h1>
                            :
                            <Button variant="contained" fullWidth  size="large" color="secondary" type="button" onClick={continuarCompra}>Finalizar</Button>
                        :
                        null
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
    let services     = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+2795111+'&afiliado=S&paso=4',{})
    let data         = await services.data  
    return {
        props: {
            data :      {jsonResumen:data}
        },
      }
}