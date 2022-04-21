import { useEffect, useState } from 'react';
//next js
import { useRouter } from 'next/router';
//Material UI
import {Box, Grid, Paper, Typography, Button, Skeleton,
        Card, CardActions, CardContent, CardActionArea,
        Avatar, Divider, Radio, RadioGroup, FormControlLabel} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

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
    const peso                          = 1
    const [data,setData]                = useState({})
    const [direcciones,setDirecciones]  = useState([])
    const [direccion,setDireccion]      = useState({dir_num:'0',observacion:'PickUP'});
    const [ejecutivo,setEjecutivo]      = useState({ejecutivo:'', slmn:0})
    const [alerta,setAlerta]            = useState({estado:false,severity:'success',vertical:'bottom',horizontal:'right',mensaje:''})
    const cliente                       = 839494
    const usuario                       = 168020
    const afiliado                      = 'S'

    useEffect(()=>{
        const getData = async () => {
            let pedido       = await localStorage.getItem('Pedido')
            let services     = await Services('GET','/carritoyreservado/obtieneResumenPedido?pedidoNum='+pedido+'&afiliado='+afiliado+'&paso=1',{})
            let json         = await {jsonResumen:services.data,pedido:pedido}
            setData(json)
            setDirecciones(json.jsonResumen.direcciones)
            setEjecutivo((json.jsonResumen.resumen.nombreEjecutivo !== '')?{ejecutivo:json.jsonResumen.resumen.nombreEjecutivo, slmn:0}:{ejecutivo:'', slmn:0})
        }
        getData()
    },[])

    async function Delete({dirNum,nombreDireccion}){
        Services('PUT','/registrov2/inhabilitadireccion?clienteNum='+cliente+'&dirNum='+dirNum,{})
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
        if(parseInt(direccion.dir_num) >= 0){
            Services('PUT','/carritoyreservado/actualizaDireccion?clienteNum='+cliente+'&pedidoNum='+data.pedido+'&dirNum='+parseInt(direccion.dir_num)+'&ejecutivo='+ejecutivo.slmn+'&observaciones='+direccion.observacion+'&op='+op+'&peso='+peso+'&afiliado='+afiliado,{})
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
                        if (mensaje == "Error PvsE"){
                            setAlerta({severity:'error',mensaje:'Tu pedido es pago al recibir',vertical:'bottom',horizontal:'right'})
                            ruter.push("/misPedidos")
                        } else if (mensaje == "Error factura"){
                            setAlerta({severity:'error',mensaje:'Tu pedido esta facturado',vertical:'bottom',horizontal:'right'})
                            ruter.push("/misPedidos")
                        } else {
                            setAlerta({severity:'error',mensaje:'Intenta de nuevo: Algo salió mal',vertical:'bottom',horizontal:'right'})
                        }
                    }
            })
        }        
    }

    return ( 
        <Box component="div" m={2} className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <div>
                        <Box component="div" py={4} px={8}>
                        {(data.hasOwnProperty('jsonResumen'))?                  
                            <Process paso={0}/>:<Skeleton variant="text" animation="wave"/>
                        }
                        </Box>
                        <Box component="div" p={2}>
                            {(data.hasOwnProperty('jsonResumen'))?  
                            <Box component="div" >
                                <Paper elevation={0} className={classes.paper}>
                                    <Box component="div" mb={1} className={classes.root}>
                                        <Divider light />
                                        <Box component="div" p={3} >
                                            <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={3}>
                                                <Grid item xs={1}>
                                                    <Box component="div" mx="auto">
                                                        <Avatar className={classes.blue}>Ini</Avatar>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={11}>
                                                    <Typography variant="h6" component="p" >
                                                        <Box px={3}>
                                                            Nomcort
                                                        </Box>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box> 
                                        <Divider light/> 
                                        <Box component="div" pt={3}>                                           
                                            <Typography variant="h6" component="h1" sx={{ fontWeight:'600'}} >1. Selecciona la forma de entrega.</Typography>
                                        </Box>   
                                    </Box>
                                </Paper>
                            </Box>
                            :
                            <Skeleton variant="rectangular"  height={80} animation="wave"/>
                            }
                            <Box component="div" px={2}>
                                {(data.hasOwnProperty('jsonResumen'))?  
                                <Box component="div">
                                    <div className={classes.root}>
                                        <Grid container direction="row" justifyContent="center" alignItems="center">
                                            <Grid item xs={12} >
                                                <Card className={classes.root} variant="outlined">
                                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                                        <Grid item xs={8} sm={8}>                 
                                                            <CardContent>
                                                                <Grid container alignItems="center" direction="row" justifyContent="center" spacing={1}>
                                                                    <Grid item xs={4} sm={3}>
                                                                        <Box component="div">
                                                                            <Avatar>
                                                                                <AddOutlinedIcon />
                                                                            </Avatar>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid item xs={4} sm={6}>  
                                                                        <Box component="div" textAlign="left">
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
                                                                <Button size="Large" fullWidth color="primary">Añadir Nueva</Button>
                                                            </CardActions>
                                                        </Grid>   
                                                    </Grid>   
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Box>
                                :
                                <Skeleton variant="rectangular"  height={80} animation="wave"/>
                                }
                                <Box component="div" py={2}>
                                    <RadioGroup name='direccion_envio' value={direccion.dir_num}  onChange={salectOption}>
                                    {(data.hasOwnProperty('jsonResumen'))&&
                                    (data.jsonResumen.resumen.entregaPickup !== '')&&
                                        <div>
                                            <Card className={classes.root} variant="outlined">
                                            <CardActionArea>
                                                <Box component="div" mx={2}>
                                                    <FormControlLabel sx={{ padding:"0px"}} value="0" labelPlacement="start" label={
                                                        <Grid container direction="row" justifyContent="center" alignItems="center">
                                                            <CardContent>
                                                                <Box display="flex" justifyContent="space-between" >
                                                                    <Box justifyContent="center" py={1}>
                                                                        <Avatar>
                                                                            <StorefrontOutlinedIcon />
                                                                        </Avatar>
                                                                    </Box>                                                                
                                                                    <Box component="div" pl={4}>
                                                                        {(data.hasOwnProperty('jsonResumen'))&&
                                                                        <Typography variant="h6" component="h2">
                                                                            {data.jsonResumen.resumen.entregaPickup} en PickUp Center
                                                                        </Typography>
                                                                        }
                                                                        <Typography variant="body1" gutterBottom color="textSecondary">
                                                                            Alejandro Dumas 135, Polanco, 11550 CDMX.
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                            </CardContent>
                                                        </Grid>
                                                    }
                                                    control={<Radio row id="PickUP"/>}/> 
                                                </Box>                       
                                            </CardActionArea>                         
                                            </Card>                       
                                        </div>
                                    }
                                    
                                    <Box component="div" py={3}>
                                        <Typography variant="h6" component="h2">{(data.hasOwnProperty('jsonResumen'))?'Direcciones de envío:':<Skeleton animation="wave"/>}</Typography>
                                    </Box>
                                    {(data.hasOwnProperty('jsonResumen'))?
                                    <div className={classes.root}>
                                        <Grid container spacing={2}>
                                            {
                                                direcciones.map((direccion, index) => (
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
                                                            labelPlacement="start"
                                                            control={<Radio id={(direccion.observacion.trim() === '')?'':direccion.observacion.replace('Á','A').replace('É','E').replace('Í','I').replace('Ó','O').replace('Ú','U').replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('Ñ','N').replace('ñ','n').replace(/ /g, "%20").substr(0,50)}/>} />
                                                        </Box>
                                                        <Box component="div" >
                                                            <Divider variant="middle" light />
                                                        </Box>
                                                        <CardActions>
                                                            <Button size="small" fullWidth color="primary">
                                                                Detalles
                                                            </Button>
                                                            {direccion.reservado === 0 &&
                                                                <Eliminar
                                                                Delete={Delete}
                                                                object={{dirNum:direccion.dirNum,nombreDireccion:direccion.nombreDireccion}}
                                                                ms_but={'Eliminar'}
                                                                titulo={'Eliminar Dirección'}
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
                                    :
                                    <Skeleton variant="rectangular" height={300} animation="wave"/>
                                    }
                                    </RadioGroup>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                </Grid>     
                <Grid item xs={12} sm={4}>
                    {(data.hasOwnProperty('jsonResumen'))?
                        <>
                        <Resumen data={data} setEjecutivo={setEjecutivo} ejecutivo={ejecutivo} /> 
                        <ConFactura continuarCompra={continuarCompra}/>
                        </>
                        :
                        <Skeleton variant="rectangular"  height={400} animation="wave"/>
                    }                    
                </Grid> 
            </Grid>
            {(alerta.hasOwnProperty('severity'))&
                <Alertas setAlerta={setAlerta} alerta={alerta}/>
            }            
        </Box>
    );
}