import { useState } from 'react';
//next js
import { useRouter } from 'next/router'
//Material Ui
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
//Componentes 
import Resumen from '../Resumen';
import Process from "../Process"
import ConFactura from '../modals/ConFactura';
//Servicos
import Services from '../../services/Services'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    rootCardA: {
        flexGrow: 1,
        height: "11rem",
      },
    textCardA: {
    height: "7.5rem",
    overflow: "hidden",
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
    const classes                   = useStyles();
    const ruter                     = useRouter() 
    const data                      = props.data
    const peso                      = 1
    const [direccion,setDireccion]  = useState({dir_num:'0',observacion:'PickUP'});
    const [ejecutivo,setEjecutivo]  = useState((data.jsonResumen.resumen.nombreEjecutivo !== '')?{ejecutivo:data.jsonResumen.resumen.nombreEjecutivo, slmn:0}:{ejecutivo:'', slmn:0})

    function salectOption({target}){
        const {value,name,id} = target;
        setDireccion({dir_num:value,observacion:id})
    }

    function continuarCompra(op){       
        Services('PUT','/carritoyreservado/actualizaDireccion?clienteNum='+839494+'&pedidoNum='+2795111+'&dirNum='+parseInt(direccion.dir_num)+'&ejecutivo='+ejecutivo.slmn+'&observaciones='+direccion.observacion+'&op='+op+'&peso='+peso+'&afiliado=S',{})
            .then( response =>{
                let mensaje = response.data
                if (mensaje.indexOf("Error") == -1) {
                    if(op === 1){
                        if(data.dir_num === '0'){
                            ruter.push("/checkout/forma-de-pago") 
                        }else{
                            ruter.push("/checkout/forma-de-envio")  
                        }
                    } else if(op == 2){
                        ruter.push("/checkout/facturacion")                    
                    }
                } else {
                    if (mensaje == "Error PvsE"){
                        alert('No puede modificarse', 'Tu pedido es pago al recibir');
                        ruter.push("/misPedidos")
                    } else if (mensaje == "Error factura"){
                        alert('No puede modificarse', 'Tu pedido esta facturado');
                        ruter.push("/misPedidos")
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
                        <div>
                            <ConFactura continuarCompra={continuarCompra}/>
                        </div>
                        <Process paso={0}/>
                        <Box component="div" >
                            <Paper elevation={0} className={classes.paper}>
                                <Box component="div"  className={classes.root}>
                                    <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                        <Grid item xs={1}>
                                        <Avatar className={classes.blue}>Ini</Avatar>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Typography variant="h6" component="p" >
                                                <Box px={3}>
                                                    Hola Nomcort
                                                </Box>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h6" component="h1" >1. Selecciona la forma de entrega.</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </Box>
                        <Box>
                            <div className={classes.root}>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    <Grid item xs={12} >
                                    <Card className={classes.root} variant="outlined">
                                        <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                            <Grid item xs={8} sm={8}>                 
                                                <CardContent>
                                                    <Grid container alignItems="center" spacing={1}>
                                                        <Grid item xs={4} sm={3}>
                                                            <Box component="div" ml={6}>
                                                                <Avatar>
                                                                    <AddOutlinedIcon />
                                                                </Avatar>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={4} sm={6}>  
                                                            <Box component="div" ml={4} textAlign="left">
                                                                <Typography variant="h6" component="h2">
                                                                    A Domicilio
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid> 
                                                </CardContent>
                                            </Grid> 
                                            <Grid item xs={4} sm={4}>
                                                <CardActions>
                                                    <Button size="Large" color="primary">Añadir Nueva</Button>
                                                </CardActions>
                                            </Grid>   
                                        </Grid>   
                                    </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        </Box>
                        <Box component="div" py={2}>
                            <RadioGroup name='direccion_envio' value={direccion.dir_num}  onChange={salectOption}>
                            {(data.jsonResumen.resumen.entregaPickup !== '')&&
                                <div>
                                    <Card className={classes.root} variant="outlined">
                                    <CardActionArea>
                                        <Box component="div" mx={2}>
                                            <FormControlLabel sx={{ padding:"0px"}} value="0" label={
                                                <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                                    <CardContent>
                                                        <Box display="flex" justifyContent="flex-start" >
                                                            <Box justifyContent="center" my={2}>
                                                                <Avatar>
                                                                    <StorefrontOutlinedIcon />
                                                                </Avatar>
                                                            </Box>
                                                        
                                                            <Box component="div" px={3}>
                                                            <Typography variant="h6" component="h2">
                                                                {data.jsonResumen.resumen.entregaPickup} en PickUp Center
                                                            </Typography>
                                                            <Typography  color="textSecondary">
                                                                Alejandro Dumas 135, Polanco, 11550 CDMX.
                                                            </Typography>
                                                            </Box>
                                                        </Box>
                                                    </CardContent>
                                                </Grid>
                                            }
                                            control={<Radio id="PickUP"/>}/> 
                                        </Box>                       
                                    </CardActionArea>                         
                                    </Card>                       
                                </div>
                            }
                            <Box component="div" py={3}>
                                <Typography variant="h6" component="h2">Direcciones de envío:</Typography>
                            </Box>
                            <div className={classes.root}>
                                <Grid container spacing={2}>
                                    {
                                        data.jsonResumen.direcciones.map((direccion, index) => (
                                            <Grid item xs={12} sm={6} key={index}>
                                                <Card className={classes.rootCardA} variant="outlined">
                                                <Box component="div" mx={2}>
                                                <FormControlLabel value={direccion.dirNum+''} 
                                                label={
                                                    <>
                                                        <CardContent className={classes.textCardA} >                                        
                                                            <Typography variant="h6" component="h2">
                                                                    {direccion.nombreDireccion.substring(0, 30)}
                                                            </Typography>
                                                            <Typography  color="textSecondary">
                                                                {direccion.direccion.substring(0, 57)}
                                                            </Typography>
                                                        </CardContent>                                            
                                                    </>                                        
                                                    
                                                }
                                                control={<Radio id={(direccion.observacion.trim() === '')?'':direccion.observacion.replace('Á','A').replace('É','E').replace('Í','I').replace('Ó','O').replace('Ú','U').replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('Ñ','N').replace('ñ','n').replace(/ /g, "%20").substr(0,50)}/>} />
                                                </Box>
                                                <CardActions>
                                                    <Button size="large" color="primary">
                                                        Ver
                                                    </Button>
                                                    {direccion.reservado === 0 &&
                                                        <Button size="large" color="primary">
                                                        Eliminar
                                                        </Button>
                                                    }
                                                </CardActions>
                                                </Card>
                                            </Grid>
                                    ))                    
                                    }
                                </Grid>
                            </div>
                            </RadioGroup>
                        </Box>
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
    let services     = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+2795111+'&afiliado=S&paso=1',{})
    let data         = await services.data  
    return {
        props: {
            data : {jsonResumen:data}
        },
      }
}