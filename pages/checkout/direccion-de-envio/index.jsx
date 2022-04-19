import { useEffect, useState } from 'react';
//next js
import { useRouter } from 'next/router'
//Material Ui
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
//Componentes 
import Resumen from '../Resumen';
import Process from "../Process"
import ConFactura from '../modals/ConFactura';
import Eliminar from '../modals/Eliminar';
import Alertas from '../Alertas';

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
    const classes                       = useStyles();
    const ruter                         = useRouter() 
    const peso                          = 1
    const [data,setData]                = useState({})
    const [direcciones,setDirecciones]  = useState([])
    const [direccion,setDireccion]      = useState({dir_num:'0',observacion:'PickUP'});
    const [ejecutivo,setEjecutivo]      = useState({ejecutivo:'', slmn:0})
    const [alerta,setAlerta]            = useState({estado:false,severity:'success',vertical:'bottom',horizontal:'right',mensaje:''})

    useEffect(()=>{
        const getData = async () => {
            let services     = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+2795111+'&afiliado=S&paso=1',{})
            let json         = await {jsonResumen:services.data}
            setData(json)
            setDirecciones(json.jsonResumen.direcciones)
            setEjecutivo((json.jsonResumen.resumen.nombreEjecutivo !== '')?{ejecutivo:json.jsonResumen.resumen.nombreEjecutivo, slmn:0}:{ejecutivo:'', slmn:0})
        }
        getData()
    },[])

    async function Delete({dirNum,nombreDireccion}){
        Services('PUT','/registrov2/inhabilitadireccion?clienteNum='+839494+'&dirNum='+dirNum,{})
        .then( response =>{
            if (response.data === "Ok") { 
                direcciones.splice((direcciones.findIndex(direccion => direccion.dirNum === dirNum)), 1);
                (parseInt(direccion.dir_num) === dirNum)?setDireccion({dir_num:'0',observacion:'PickUP'}):setDirecciones([...direcciones])
                setAlerta({...alerta,severity:'success',estado:true,mensaje:'Tu dirección '+nombreDireccion+' se ha eliminado'})
            } else {
                setAlerta({...alerta,severity:'error',estado:true,mensaje:'La dirección no se ha eliminado: Intenta de nuevo'})
            }
        })
    }

    function salectOption({target}){
        const {value,id} = target;
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
                        setAlerta({...alerta,severity:'error',estado:true,mensaje:'Tu pedido es pago al recibir'})
                        ruter.push("/misPedidos")
                    } else if (mensaje == "Error factura"){
                        setAlerta({...alerta,severity:'error',estado:true,mensaje:'Tu pedido esta facturado'})
                        ruter.push("/misPedidos")
                    } else {
                        setAlerta({...alerta,severity:'error',estado:true,mensaje:'Intenta de nuevo: Algo salió mal'})
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
                            {(data.hasOwnProperty('jsonResumen'))&&
                            (data.jsonResumen.resumen.entregaPickup !== '')&&
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
                                                            {(data.hasOwnProperty('jsonResumen'))&&
                                                            <Typography variant="h6" component="h2">
                                                                {data.jsonResumen.resumen.entregaPickup} en PickUp Center
                                                            </Typography>
                                                            }
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
                                        direcciones.map((direccion, index) => (
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
                                                        <Eliminar
                                                        Delete={Delete}
                                                        object={{dirNum:direccion.dirNum,nombreDireccion:direccion.nombreDireccion}}
                                                        ms_but={'Eliminar'}
                                                        titilo={'Eliminar Dirección'}
                                                        mensaje={'¿Estás seguro de eliminar la dirección?'}
                                                        />
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
                {(data.hasOwnProperty('jsonResumen'))&&
                <Grid item xs={12} sm={4}>
                    <Resumen data={data} setEjecutivo={setEjecutivo} ejecutivo={ejecutivo} /> 
                </Grid>                 
                }
            </Grid>
            {(alerta.estado)&&
                <Alertas estado={alerta.estado} severity={alerta.severity} vertical={alerta.vertical} horizontal={alerta.horizontal} mensaje={alerta.mensaje}/>
            }            
        </Box>
    );
}