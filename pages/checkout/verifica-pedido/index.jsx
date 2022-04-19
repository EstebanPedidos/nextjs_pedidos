import {useState,useEffect} from 'react'
import * as React from 'react';
//next js
import { useRouter } from 'next/router'
//Paquetes
import {Box, Grid, Paper, Typography,
        Button, TextField, Divider, 
        Alert, Stack, AlertTitle,  Link  } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';
//Navigation
//import Link from '@mui/material/Link';

//Componentes MUI4

//Servicios
import Services from '../../services/Services'
//Funciones
import Precios from '../../services/Precios'
//Componentes
import DataContext from './Context/DataContext'
import ItemFavorites from './ItemFavorites'
import Cart from './Cart'
import Eliminar from '../modals/Eliminar'
import ModalExecutive   from '../modals/ModalExecutive'
import { RestorePageOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    rootdiscount:{
        padding: '2px 4px',
        display: 'flex',
    },
    buttonDiscount: {
        width: "95%",
      },
    rootdivider: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    },
    emptyCart: {
        padding: theme.spacing(1),
        width: '160px',
    }
}));

export default function Verifica_pedido(props){
    const classes                               = useStyles();
    const ruter                                 = useRouter() 
    const [Remove,setRemove]                    = useState([])
    const [deleteAll,setDeleteAll]              = useState(false)
    const [modificar,setModificar]              = useState(0)
    const [ejecutivo,setEjecutivo]              = useState({ejecutivo:'', slmn:0})
    const [cupon,setCupon]                      = useState('')
    

    const [carrito,setCarrito]                  = useState({})
    const [partidas,setPartidas]                = useState(0)
    const [isEjecutivo,setisEjecutivo]          = useState(false)
    const [total,setTotal]                      = useState(0)
    const [favoritos,setFavoritos]              = useState([])
    const [articulos,setArticulos]              = useState([])
    const cliente                               = 839494
    const usuario                               = 168020
    const afiliado                              = 'S'


    useEffect(() => {
        const getData = async () => {
            let services        = await Services('GET','/carritoyreservado/getCarrito?clienteNum='+cliente+'&usuarioNum='+usuario+'&top=10&afiliado='+afiliado,{})
            let carritoS        = await services.data
            let totalS          = await carritoS.configCarrito.precarrito.map(item => ((Precios('formatcurrency',{subtotal:item.precio,fixed:2})*item.cantidad)+(Precios('formatcurrency',{subtotal:item.precioSeguro,fixed:2})*item.cantSeguro)+(Precios('formatcurrency',{subtotal:item.precioGarant1,fixed:2})*item.cantGarant1)+(Precios('formatcurrency',{subtotal:item.precioGarant2,fixed:2})*item.cantGarant2))).reduce((prev, curr) => prev + curr, 0)
            let isEjecutivo     = await (carritoS.configCarrito.resenapedidos.length > 0)
            let num_partidas    = await carritoS.configCarrito.precarrito.length
            let pyitemsfavoritos= await carritoS.configCarrito.pyitemsfavoritos 
            let favoritos       = await getFavoritos(pyitemsfavoritos)
            async function getFavoritos(pyitemsfavoritos) {
                let f = []
                pyitemsfavoritos.forEach(function(item) {
                    if(num_partidas > 0){
                        if(item.tipo === 'I' && item.disponibilidad > 0){
                            f.push(item)  
                        }
                    }else{
                        if((pyitemsfavoritos.find((items) =>{return items.tipo === 'V'}) !== undefined)){
                        
                            if(item.tipo === 'V' && item.disponibilidad > 0 ){
                                f.push(item) 
                            }
                        }else{
                            if(item.tipo === 'I' && item.disponibilidad > 0 ){
                                f.push(item) 
                            }
                        }
                    }            
                })
                return f
            }
            let articulos =  await carritoS.configCarrito.precarrito.map((item) => item.item_num)

            setCarrito(carritoS)
            setPartidas(num_partidas)
            setisEjecutivo(isEjecutivo)
            setTotal(totalS)
            setFavoritos(favoritos)
            setArticulos(articulos)
        }
        getData()   
    },[partidas])

    function add(item_num){
        Services('POST-NOT','/carritoyreservado/agregaCarrito',{cliente_num: cliente,usuario_num : usuario,cantidad : 1,item_num : item_num,seguro : '',garantia : ''})
        .then( response =>{
            if(response.data > 0){
                setPartidas(response.data)
            }
        }) 
    }

    async function Delete(item_num){
        if(deleteAll && Remove.length===0){
            alert('sin item')
            return 
        }

        let articulosD   = await (item_num === 'V' || item_num === 'E')?(deleteAll)?Remove.toString():articulos.toString():item_num
        
        Services('DELETE','/carritoyreservado/deleteCarrito?clienteNum='+cliente+'&usuarioNum='+usuario+'&items='+articulosD,{})
        .then( response =>{
            setPartidas(response.data)                        
        })        
        
    }

    async function UpdateCantidad({target}){
        const {name, value , id} = target
        if(parseInt(value) === 0){
            carrito.configCarrito.precarrito[name].modificar = await true    
            carrito.configCarrito.precarrito[name].cantidad  = await 6        
        }else if(id === 'input'){
            carrito.configCarrito.precarrito[name].cantidad = await value            
        }else{
            carrito.configCarrito.precarrito[name].cantidad = await value 
        }        

        let totalR  =  await carrito.configCarrito.precarrito.map(item => ((Precios('formatcurrency',{subtotal:item.precio,fixed:2})*item.cantidad)+(Precios('formatcurrency',{subtotal:item.precioSeguro,fixed:2})*item.cantSeguro)+(Precios('formatcurrency',{subtotal:item.precioGarant1,fixed:2})*item.cantGarant1)+(Precios('formatcurrency',{subtotal:item.precioGarant2,fixed:2})*item.cantGarant2))).reduce((prev, curr) => prev + curr, 0)
        setTotal(totalR)
    }

 
    function validaCodigoDescuento(){
        if(cupon !== ''){
            Services('GET','/carritoyreservado/validaCodigoDescuento?clienteNum='+cliente+'&usuarioNum='+usuario+'&cupon='+cupon,{})
            .then( response =>{
                if(response.data)  {
                    alert("Continua para ver el descuento")
                }else{
                    alert('Algo salió mal Es posible que el código sea incorrecto o no aplique en tú carrito')
                } 
            }) 
        }else{
            alert('Ingresa un código de descuento')
        }

    }

    function reservaCarrito(){
        if(carrito.configCarrito.precarrito.length > 0){
            var arraySkus = new Array();
            carrito.configCarrito.precarrito.map(function(item) {                
                if(item.cantidad > 0){
                    var objeto      = new Object()
                    objeto.sku        = item.item_num.replace(' ', '');
                    objeto.cantidad   = item.cantidad;
                    objeto.seguro     = 0;
                    objeto.gaex       = 0 ;
                    objeto.itemGarant = "";
                    arraySkus.push(objeto)
                }else{
                    alert("El articulo "+item.item_num+' no se puede reservar con cantidad 0')
                    return false;
                }
                
            })

            if(arraySkus.length > 0){
                Services('POST','/carritoyreservado/reservaCarrito?clienteNum='+cliente+'&usuarioNum='+usuario+'&afiliado='+afiliado+'&cupon='+cupon+'&ip=192.10.1.166&ejecutivo='+ejecutivo.slmn,arraySkus)
                .then( response =>{
                    if(response.data.pedido > 0){
                        localStorage.setItem('Pedido', response.data.pedido)
                        ruter.push('/checkout/direccion-de-envio')
                    }                    
                }) 
            }           
        }
    }

    return (
            <Box component="div">
                <div className={classes.root}>
                    <Grid container justifyContent="space-around" alignItems="flex-start">
                        <Grid item xs={12} sm={8} lg={8}>
                            <ItemFavorites 
                            favoritos={favoritos}
                            add={add}
                            />
                            {partidas > 0 ? (
                                <Box component="div" m={2} >                        
                                    <Box className={classes.root} py={2}>
                                        <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                            <Grid item xs={6} sm={8}>
                                                <Typography component="h1" variant="h5">
                                                    <Box component="span" fontWeight="fontWeightBold">
                                                        Carrito de compra
                                                    </Box>
                                                </Typography>
                                            </Grid>
                                            <Grid item justifyContent="flex-end" xs={6} sm={4}>
                                            {deleteAll ? (
                                                <Button variant="outlined" size="large"color="secondary" 
                                                    onClick={() => {
                                                        setDeleteAll(false);
                                                    }}
                                                    >
                                                    Cancelar
                                                </Button>
                                            ) : (
                                                <Button variant="outlined" size="large"  justifyContent="flex-end"
                                                    onClick={() => {
                                                        setDeleteAll(true);
                                                    }}
                                                    >
                                                    Varios
                                                </Button>
                                            )}
                                            </Grid>
                                        </Grid>
                                        </Box>
                                        <Divider light />                
                                    
                                    {/*carrito.configCarrito.precarrito.find((items) => {
                                        return items.exis === "N";
                                    }) !== undefined*/ 1===1 && (
                                        <Box component="div">
                                            {" "}
                                            <Alert severity="warning">
                                                <AlertTitle>Disponibilidad límitada</AlertTitle>
                                                    Es probable que algunos productos <strong>No cuenten con suficiente disponilidad.</strong>
                                            </Alert>
                                            {" "}
                                            <Alert severity="warning">Uno o varios productos sin suficiente disponibilidad.</Alert>  
                                        </Box>
                                    )}
                                    {/*carrito.configCarrito.precarrito.find((items) => {
                                        return items.exis === "N";
                                    }) !== undefined*/ 1===1 && (
                                        <Box component="div">
                                            <Alert severity="error"><strong>Sin disponibilidad</strong> de producto</Alert>
                                        </Box>
                                    )}
                                    {(modificar >= 0)&&
                                            <Cart
                                            precarrito={carrito.configCarrito.precarrito}
                                            deleteAll={deleteAll}
                                            Remove={Remove}
                                            setRemove={setRemove}
                                            Delete={Delete}
                                            UpdateCantidad={UpdateCantidad}
                                            modificar={modificar}
                                        />
                                    }
                                </Box>
                                ) : (
                                    <Box component="div" py={4}>
                                        <Divider light variant="middle" />
                                        <Box className={classes.root} py={2}>
                                            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                                                <Grid item xs={12}>
                                                    <Box component="div" m={1} pt={4} >
                                                        <img className={classes.emptyCart} src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/carrito-v.svg" alt="Carrito vacio" />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography component="h1" variant="h5">
                                                        <Box component="span" fontWeight="fontWeightBold">
                                                            Carrito vacío
                                                        </Box>
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button component={Link} to={'/home'} variant="contained" color="secondary">Comenzar</Button>     
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                )}
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4}>
                            <Paper className={classes.paper}  elevation={0}>
                                {isEjecutivo && (
                                <div>
                                    <ModalExecutive
                                    resenapedidos={carrito.configCarrito.resenapedidos}
                                    setEjecutivo={setEjecutivo}
                                    ejecutivo={ejecutivo.ejecutivo}
                                    />
                                </div>
                                )}
                                <div>
                                    <Box component="div" m={1} className={classes.root}>
                                        <Grid container  alignItems="center" spacing={1}>
                                            <Grid item xs={6} sm={12} lg={6}>
                                                <Box textAlign="left">  
                                                    <Typography component="h2" variant="h6">
                                                        Resumen
                                                    </Typography>
                                                </Box>  
                                            </Grid>
                                            <Grid item xs={6} sm={12} lg={6}>
                                                {partidas > 0 && (
                                                    <Paper variant="outlined">
                                                    <Typography variant="body2">   
                                                        <Box py={1} fontWeight="fontWeightMedium">    
                                                            {partidas} {partidas > 1 ? `productos` : `producto`}
                                                        </Box>
                                                    </Typography>
                                                    </Paper>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </div>       
                                <Box component="div">
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <Divider light /> 
                                            <Box component="div" className={classes.root} pt={3}>
                                                <Grid container  alignItems="center" spacing={1}> 
                                                    <Grid item xs={6} sm={12} lg={6}>
                                                        <TextField label="Código de descuento" type="text" name="cupon" onChange={({target})=>{setCupon(target.value)}} id="discountcode"  variant="outlined" value={cupon}/>
                                                    </Grid>
                                                    <Grid item xs={6} sm={12} lg={6}>
                                                        <Button disableElevation
                                                            variant="contained"
                                                            fullWidth
                                                            size="large"
                                                            className={classes.buttonDiscount} 
                                                            onClick={validaCodigoDescuento}
                                                            >
                                                            Aplicar
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                    </form>
                                </Box>               
                                {partidas > 0 ? (
                                    <div>
                                        <Box component="div" m={1} pt={3}>
                                            <Divider light /> 
                                                <Box component="div" className={classes.root} py={3}>
                                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                                        <Grid item xs={4}>
                                                            <Box textAlign="left">  
                                                                <Grid container direction="column" justifyContent="center" spacing={1}>
                                                                    <Grid item>
                                                                        <Typography variant="subtitle1" textAlign="left">
                                                                            Subtotal{" "}
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Typography variant="subtitle1" >
                                                                            Envío
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Box textAlign="right"> 
                                                                <Grid container direction="column" justifyContent="center" spacing={1}>
                                                                    
                                                                    <Grid item>
                                                                        <Typography variant="subtitle1"  >
                                                                            <Box component="span" fontWeight="fontWeightBold">
                                                                                ${Precios('formatcurrency',{subtotal:total,fixed:2})} MXN
                                                                            </Box>
                                                                        </Typography>
                                                                    </Grid>                                                                
                                                                    <Grid item>
                                                                        <Typography variant="body2">
                                                                            Calculado adelante
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Grid container justifyContent="flex-end" alignItems="center" spacing={1}>
                                                                <Grid item>
                                                                    <Typography variant="body2">
                                                                        <Box component="span" fontWeight="fontWeightMedium">
                                                                            Precios incluyen IVA
                                                                        </Box>
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            <Divider light />
                                        </Box>
                                        <Box component="div" py={2} >
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            size="large"
                                            color="primary"
                                            onClick={reservaCarrito}
                                        >
                                            Continuar compra
                                        </Button>
                                        </Box>
                                        {(deleteAll)  ? (
                                            <Box component="div">
                                                <Eliminar
                                                Delete={Delete}
                                                object={"E"}
                                                ms_but={'Eliminar productos'}
                                                titilo={'Eliminar productos'}
                                                mensaje={'¿Estás seguro de eliminar los productos seleccionados?'}
                                                />
                                            </Box>
                                        ) : (
                                            <Box component="div">
                                                <Eliminar
                                                Delete={Delete}
                                                object={"V"}
                                                ms_but={'Vaciar carrito'}
                                                titilo={'Vaciar carrito'}
                                                mensaje={'¿Estás seguro de eliminar todos los productos?'}
                                                />
                                            </Box>
                                        )}
                                    </div>
                                ) : (
                                    <Box component="div" m={1} pt={3}>
                                        <Divider light /> 
                                            <Box component="div" className={classes.root} py={3}>
                                                <Typography variant="subtitle2" color="textSecondary">Aún no tienes productos</Typography>
                                            </Box>
                                        <Divider light /> 
                                    </Box>
                                )}
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Box>
    )
}

