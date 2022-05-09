import React, {useState, useEffect} from 'react';

//MUI
import {Box, Grid, Paper, Typography, Container, Backdrop,
    Button, Select, TextField, Divider, Modal, Fade,
    Card, CardContent, CardActions, CardMedia, CardActionArea, CardHeader,
    TextareaAutosize, FormHelperText, FormControl, MenuItem, IconButton,
    Input, InputLabel, InputAdornment, Chip, Snackbar, 
    Alert, Stack, Rating, Avatar } from '@mui/material';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { Layout } from 'layout/Layout';
import MiCuentaSiderBar from 'layout/MiCuentaSiderBar'
import Services from '../services/Services'

//NextJs
import { useRouter } from 'next/router'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  control: {
    padding: theme.spacing(3),
  },

  bgcontent: {
    backgroundImage: 'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)',
    // background: '#F7F7F9',
},
  paperBox: {
    boxShadow: '0px 0px 16px rgb(195 203 214 / 16%), 0px 1px 4px rgb(195 203 214 / 16%)',
},
colorIcon: {
    color: theme.palette.common.lightgrayb,
},
imgProduct: {
    padding: '5px', 
    height: '90px',
    width: '90px',
    
},
}));

export default function Pedido(props) {

    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
    //const pedidoNum = props.location.state.pedido;
    const [inputs, setInputs] = useState({});
    const [clienteNum, setClienteNum] = useState('');
    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = React.useState('');
    const [snack, setSnack] = React.useState('');
    const [result, setResult] = useState(
        {
            "misPedidos": {
                "pedidoNum": 0,
                "estatus": "",
                "formaEnvio": "",
                "fechaEntrega": "",
                "horario": "",
                "estatusEnvio": "",
                "idSuperpedido": null,
                "estatusBoton": "",
                "estatusComprobante": "",
                "formaPago": "",
                "precioTotal": 0,
                "linkOxxo": ""
            },
            "pedido": {
                "orgCode": "",
                "divCode": "",
                "pedidoNum": 0,
                "custNum": 0,
                "clienteNum": 0,
                "dirNum": 0,
                "fecha": "",
                "idSuperpedido": 0,
                "usuario": 0,
                "centroCosto": "",
                "ordenCompra": "",
                "observaciones": "",
                "estatus": "",
                "estEnvio": "",
                "importe": 0,
                "iva": 0,
                "tipoEntrega": "",
                "evento": 0,
                "origen": "",
                "remFact": "",
                "shipVia": "",
                "shipNum": 0,
                "pl": null,
                "urgente": null,
                "esEjecutivo": false,
                "importeDist": 0,
                "ivaDist": 0,
                "listPyPedidoDet": [
                    {
                        "orgCode": "",
                        "divCode": "",
                        "pedidoNum": 0,
                        "renglonNum": 0,
                        "itemNum": "",
                        "claveClien": "",
                        "cantidad": 0,
                        "currCode": "",
                        "precio": 0,
                        "centroCosto": "",
                        "estatus": "",
                        "tipoCambio": 0,
                        "descCartucho": "",
                        "iva": 0,
                        "ensid": 0,
                        "precioListDist": 0,
                        "precioList": 0,
                        "precioDist": 0,
                        "precioAlDist": 0,
                        "ivaDist": 0,
                        "cantidadexist": 0,
                        "margen": 0,
                        "descuento": 0,
                        "descDist": 0,
                        "locationItem": null,
                        "item": null,
                        "imagen": null,
                        "linea": null,
                        "familia": null,
                        "marca": null,
                        "costoStandard": 0,
                        "ultimoCosto": 0,
                        "costoPromedio": 0,
                        "margenCliente": 0,
                        "margenDist": 0,
                        "mensaje": null,
                        "proyectoLicitacion": null,
                        "urgente": null,
                        "usuarioNum": 0,
                        "upc": null,
                        "mgpromedio": 0,
                        "mgminimo": 0,
                        "mgventa": 0,
                        "mglineaMarca": 0,
                        "mgultimoCosto": 0,
                        "mglinea": 0,
                        "mglineaCliente": 0
                    },
                    {
                        "orgCode": "",
                        "divCode": "",
                        "pedidoNum": 0,
                        "renglonNum": 0,
                        "itemNum": "",
                        "claveClien": "",
                        "cantidad": 0,
                        "currCode": "",
                        "precio": 0,
                        "centroCosto": "",
                        "estatus": "",
                        "tipoCambio": 0,
                        "descCartucho": "",
                        "iva": 0,
                        "ensid": 0,
                        "precioListDist": 0,
                        "precioList": 0,
                        "precioDist": 0,
                        "precioAlDist": 0,
                        "ivaDist": 0,
                        "cantidadexist": 0,
                        "margen": 0,
                        "descuento": 0,
                        "descDist": 0,
                        "locationItem": null,
                        "item": null,
                        "imagen": null,
                        "linea": null,
                        "familia": null,
                        "marca": null,
                        "costoStandard": 0,
                        "ultimoCosto": 0,
                        "costoPromedio": 0,
                        "margenCliente": 0,
                        "margenDist": 0,
                        "mensaje": null,
                        "proyectoLicitacion": null,
                        "urgente": null,
                        "usuarioNum": 0,
                        "upc": null,
                        "mgpromedio": 0,
                        "mgminimo": 0,
                        "mgventa": 0,
                        "mglineaMarca": 0,
                        "mgultimoCosto": 0,
                        "mglinea": 0,
                        "mglineaCliente": 0
                    }
                ],
                "tipo": null,
                "cambioPrecio": null,
                "pedidoDC": null,
                "nombreUsuario": null,
                "nombreCliente": null,
                "listpedidoDetSoloCDMX": null,
                "fechaSeg": null,
                "customerPo": 0,
                "termCode": 0,
                "fechaFacturacion": null,
                "numFactura": 0,
                "orderNum": 0,
                "ruta": null,
                "horaRuta": null,
                "orderStatus": null,
                "horaCredito": null,
                "zEnvio": null,
                "zPagosL": null,
                "zPagoH": null,
                "localForaneo": null,
                "listaBodegas": null,
                "ligaFactura": null,
                "ligasFacturas": null,
                "locaCodes": null,
                "bodegas": null,
                "listaFacturas": null,
                "locaCodeD": null,
                "piezas": 0,
                "facturaDC": 0,
                "estatusEntrega": null,
                "fechaCancelacion": null,
                "producto": null,
                "sumaA": 0,
                "sumaC": 0,
                "sumaE": 0,
                "sumaivaA": 0,
                "sumaivaC": 0,
                "sumaivaE": 0,
                "sumapA": 0,
                "sumapC": 0,
                "sumapE": 0,
                "calle": null,
                "address1": null,
                "address2": null,
                "colonia": null,
                "city": null,
                "province": null,
                "country": null,
                "postal_code": null,
                "guia": null,
                "paqueteria": null,
                "numeroguia": null,
                "datosM": null,
                "vehiculo": null,
                "ordership": null,
                "fecharegresiva": null,
                "fechaEstimada": null,
                "bodega": null,
                "pedidoDCBodega": null,
                "facturaPDF": null,
                "factura": null,
                "rutaPdf": null,
                "idBigDeal": 0,
                "numproductos": 0
            },
            "direccion": {
                "dirNum": 0,
                "clienteNum": 0,
                "nombre": "",
                "address1": "",
                "address2": "",
                "colonia": "",
                "city": "",
                "province": "",
                "country": "",
                "postalCode": "",
                "phone": "",
                "fax": "",
                "contact": "",
                "puesto": "",
                "email": "",
                "zonaEnvio": "",
                "estatus": "A",
                "instrEntrega": "",
                "entreCalle1": "",
                "entreCalle2": "",
                "piso": "",
                "interior": "",
                "extension": "",
                "numEnvio": 0,
                "clave": 0,
                "shipNum": 0
            },
            "listaSearch": [
                {
                    "itemNum": "",
                    "numParte": null,
                    "tituloCompuesto": "",
                    "url": "",
                    "marca": null,
                    "lineaNeg": null,
                    "codFamilia": null,
                    "codSubfamilia": null,
                    "volume": null,
                    "netWeigth": null,
                    "precio": null,
                    "precioDeLista": null,
                    "iva": null,
                    "disponibilidad": 0,
                    "proveedorExterno": null,
                    "soloDf": null,
                    "ponderacion": 0,
                    "estrella": 0,
                    "aplicaExpress": null,
                    "estatus": null
                },
                {
                    "itemNum": "",
                    "numParte": "",
                    "tituloCompuesto": "",
                    "url": "",
                    "marca": "",
                    "lineaNeg": "",
                    "codFamilia": "",
                    "codSubfamilia": "",
                    "volume": 0,
                    "netWeigth": 0,
                    "precio": 0,
                    "precioDeLista": 0,
                    "iva": 0,
                    "disponibilidad": 0,
                    "proveedorExterno": "",
                    "soloDf": "",
                    "ponderacion": 0,
                    "estrella": 0,
                    "aplicaExpress": "",
                    "estatus": ""
                }
            ],
            "guia": {
                "certifNum": 0,
                "vehiculoNum": 0,
                "choferNum": 0,
                "tipoVeh": "",
                "nombreChofer": "",
                "maternoChofer": "",
                "paternoChofer": "",
                "guiaNum": null,
                "guiaNombre": null,
                "guiaLink": "",
                "tipoEnvio": ""
            },
            "upc": [
                ""
            ]
        }
    );
    const [resultado, setResultado] = useState(false);

    const router = useRouter()
    const pedido = router.query.pedido;


    useEffect(() => {

        setClienteNum(localStorage.getItem('Cliente'));

        Services('POST','/miCuenta/detallePedido?clienteNum='+clienteNum+'&pedidoNum='+pedido,{})
        .then( response =>{
            console.log('Entro a detallePedido Servicio: ')
            console.log(response.data)
            setResult(response.data)
            setResultado(true)
        }).catch(error => {
            console.log("falló")
            console.log(error.response)
        });
    }, [router]) 

    const handleOpen = (event) => {
        const name = event.target.name;
        setModal(name)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    function agregarAlCarrito(pedidoNum){
        Services('PUT','/carritoyreservado/agregarAlCarrito??pedidoNum='+pedidoNum,{})
        .then( response =>{
            setOpen(true);
            setSnack('uno')
            console.log("")
            
        }).catch(error => {
            console.log("falló")
            console.log(error.response)
        });
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const Contenido = (
        <Box component="div">
            <Grid 
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center">
                <Grid item xs={12} sm={8}>   
                    <Box component="div" py={2}>
                        <Typography variant="h3" component="h1">
                        Pedido #{pedido}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>   
                    <Button variant="contained" color="primary" fullWidth size="large" href="/misPedidos">Regresar</Button>
                </Grid>
            </Grid>
            <Divider light/>
            <Box component="div" m={1}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container direction="row" justifyContent="center" spacing={2}>
                            <Grid item xs={12}> 
                                <Box component="div" py={2}>
                                    <Grid 
                                        container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="flex-start" spacing={2}>
                                        <Grid item xs={12} sm={8}>
                                            <Card className={classes.paperBox}>
                                                <CardHeader
                                                    avatar={
                                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                                    <ShoppingCartOutlinedIcon/>
                                                    </Avatar>
                                                    }
                                                    
                                                    title={
                                                    <Typography variant="h6" component="h2" color="textPrimary"gutterBottom>
                                                        Detalle del Pedido
                                                    </Typography>}
                                                
                                                    action={
                                                        <Chip label="FACTURADO" color="success"/>
                                                    }
                                                />
                                                <Divider variant="middle" light/>
                                                <CardContent>
                                                    <Box component="div">
                                                        <Typography variant="h6" component="h3" color="textSecondary"gutterBottom>
                                                            Información de envío
                                                        </Typography>
                                                        <Box component="div" m={1}>
                                                            <Typography variant="subtitle1" color="textPrimary" gutterBottom>
                                                                Tipo de Entrega: {result.misPedidos.formaEnvio}
                                                            </Typography>
                                                            <Typography variant="subtitle1" color="textPrimary" gutterBottom>
                                                                Fecha de creación: {result.pedido.fecha}
                                                            </Typography>
                                                            <Typography variant="subtitle1" color="textPrimary" gutterBottom>
                                                                Dirección de envío: 
                                                                <br/>
                                                                {result.direccion.address1+
                                                                                ', Col. '+result.direccion.colonia+
                                                                                ' '+ result.direccion.city+
                                                                                ' '+ result.direccion.province}
                                                            </Typography>
                                                        </Box>
                                                    </Box> 
                                                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                                                        <Grid item xs={12}> 
                                                            <Typography variant="h6" component="h4" color="textSecondary"gutterBottom>
                                                                Horario de entrega:
                                                                {result.misPedidos.fechaEntrega+ ' a las '+ result.misPedidos.horario}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={6}> 
                                                            <Typography variant="subtitle1" component="h5" color="textSecondary" gutterBottom>
                                                                ESTATUS DE PAGO
                                                            </Typography>
                                                            <Typography variant="subtitle2" gutterBottom>
                                                                {result.misPedidos.estatusBoton === 'PAGADO' || (result.misPedidos.estatusBoton === 'FACTURADO' 
                                                                && 'FACTURADO')}
                                                                {result.misPedidos.estatusBoton === 'REFUNDED' && 'Reembolsado'}
                                                                {result.misPedidos.estatusBoton === 'RETURNED' && 'Regresado'}
                                                                {result.misPedidos.estatusBoton != 'PAGADO' && result.misPedidos.estatusBoton != 'FACTURADO' && result.misPedidos.estatusBoton != 'REFUNDED'  && result.misPedidos.estatusBoton != 'RETURNED'
                                                                && result.misPedidos.estatusBoton}
                                                            </Typography>
                                                        </Grid>
                                                        {result.guia.tipoEnvio != "" &&
                                                            <Grid item xs={6}> 
                                                                <Divider orientation="vertical"/>
                                                                {result.guia.tipoEnvio === "LOCAL" &&
                                                                    <span>
                                                                        <Typography variant="subtitle1" component="h5" color="textSecondary" gutterBottom>
                                                                            Rastreo de Pedido
                                                                        </Typography>
                                                                        <Typography variant="subtitle2" gutterBottom>
                                                                            {result.guia.tipoVeh === "MOTO" &&
                                                                                <span>
                                                                                    <img src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/pedido/motorcycle.svg"
                                                                                    alt="servicio de pedidos.com" width="50px" height="50"/>
                                                                                </span>
                                                                            }   
                                                                            {result.guia.tipoVeh != "MOTO" &&
                                                                                <span>
                                                                                    <img src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/pedido/truck.svg"
                                                                                    alt="servicio de pedidos.com" width="50px" height="50"/>                                                              
                                                                                </span>
                                                                            }
                                                                            No. certificado: {result.guia.guiaLink === "" && result.guia.certifNum} {result.guia.guiaLink != "" && <Link href={result.guia.guiaLink} target="_blank" rel="noopener noreferrer"><a>{result.guia.certifNum}</a></Link>} 
                                                                            <p>Transportista: {result.guia.nombreChofer+" "+result.guia.maternoChofer}</p>
                                                                        </Typography>
                                                                    </span>
                                                                }
                                                                {result.guia.tipoEnvio === "FORANEO" &&
                                                                    <span>
                                                                        <Typography variant="subtitle1" component="h5" color="textSecondary" gutterBottom>
                                                                            Guia de Rastreo
                                                                        </Typography>
                                                                        <Typography variant="subtitle2" gutterBottom>
                                                                            {result.guia.guiaNombre === "FEDEX" &&
                                                                                <span>
                                                                                    <img src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/pedido/fedex.png"
                                                                                    alt="fedex" width="50px" height="50"/>
                                                                                </span>
                                                                            }   
                                                                            {result.guia.guiaNombre === "DHL" || result.guia.guiaNombre === "DHL EXPRESS" &&
                                                                                <span>
                                                                                    <img src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/pedido/dhl.png"
                                                                                    alt="dhl" width="50px" height="50"/>                                                              
                                                                                </span>
                                                                            }
                                                                            {result.guia.guiaNombre === "ESTAFETA" &&
                                                                                <span>
                                                                                    <img src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/pedido/estafeta.png"
                                                                                    alt="estafeta" width="50px" height="50"/>                                                              
                                                                                </span>
                                                                            }
                                                                            {result.guia.guiaNombre === "REDPACK" &&
                                                                                <span>
                                                                                    <img src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/paqueterias/redpack.png"
                                                                                    alt="redpack" width="50px" height="50"/>                                                              
                                                                                </span>
                                                                            }
                                                                            {result.guia.guiaNombre === "NO EMPACADO" &&
                                                                                <div>
                                                                                    <h4>ESTATUS DE ENVIO</h4>
                                                                                    <p>El pedido aún no se está empacando</p>
                                                                                </div>
                                                                            }
                                                                            {result.guia.guiaNombre === "NO GUIA" &&
                                                                                <span>
                                                                                    <h4>ESTATUS DE ENVIO</h4>
                                                                                    <img src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/pedido/generando.svg"
                                                                                    alt="redpack" width="50px" height="50"/>                                                              
                                                                                </span>
                                                                            }
                                                                            {result.guia.guiaNombre === "ERROR" &&
                                                                                <div>
                                                                                    <h4>ESTATUS DE ENVIO</h4>
                                                                                    <img src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/pedido/generando.svg"
                                                                                    alt="redpack" width="50px" height="50"/>
                                                                                </div>
                                                                            }
                                                                            {result.guia.guiaNombre === "NO INFO" &&
                                                                                <span>
                                                                                    <h4>ESTATUS DE ENVIO</h4>
                                                                                    <img src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/pedido/generando.svg"
                                                                                    alt="redpack" width="50px" height="50"/>                                                              
                                                                                </span>
                                                                            }
                                                                            {result.guia.guiaNombre === "NO ESPECIFICADO" &&
                                                                                <div>
                                                                                    <h4>ESTATUS DE ENVIO</h4>
                                                                                </div>
                                                                            }
                                                                          </Typography>
                                                                    </span>
                                                                }
                                                            </Grid>
                                                        }
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Paper className={classes.paperBox}>
                                                <Box component="div" justifyContent="center" textAlign="center" mx="auto">
                                                    <MonetizationOnIcon className={classes.colorIcon} style={{ fontSize: 150}} />
                                                    <Typography variant="h6" component="h2" color="textPrimary"gutterBottom>
                                                        Total: ${(result.pedido.importe+result.pedido.iva).toFixed(2)}
                                                    </Typography>    
                                                </Box>
                                            </Paper>
                                            <Box component="div" py={4}>
                                                <Grid 
                                                container
                                                direction="column"
                                                justifyContent="space-between"
                                                alignItems="flex-start" spacing={2}>
                                                    <Button variant="outlined" fullWidth size="large" onClick={(event) => { event.preventDefault();agregarAlCarrito(props.location.state.pedido)}}>Agregar</Button>
                                                    <Button variant="outlined" fullWidth size="large" 
                                                        onClick={() => window.open('mailto:pagos@pedidos.com.mx?subject=Comprobante%20de%20Pago%20Pedido%20'
                                                        +props.location.state.pedido
                                                        +'&body=Adjunta%20tu%20Archivo%20JPG,%20PNG%20o%20PDF.%20%0D%0A%0D%0A%0D%0A%0D%0A')}
                                                        >   
                                                        Comprobante de pago
                                                    </Button> 
                                                    <Button variant="outlined" fullWidth size="large" 
                                                        onClick={() => window.open('mailto:pagos@pedidos.com.mx?subject=Garantia%20Y%20Devoluciones%20Pedido%20'
                                                        +props.location.state.pedido
                                                        +'&body=Completar%20la%20siguiente%20información%0D%0AProducto:%20%0D%0ACantidad:%20%0D%0ATelefono%20de%20Contacto:%20%0D%0AAdjuntar%20Fotos.%20%0D%0A%0D%0A%0D%0A%0D%0A')}
                                                    >
                                                        Garantía y Devoluciones
                                                    </Button> 

                                                </Grid>                       
                                            </Box>                           
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box component="div" py={2}>
                                                <Divider  light />                                  
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h6" component="h5" color="textPrimary"gutterBottom>
                                                Tus Artículos
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box component="div" textAlign="center" px={2}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justifyContent="space-around"
                                                    alignItems="center"
                                                    >
                                                    <Grid item xs={6}>
                                                        <Typography variant="subtitle1" component="h6" color="textSecondary" gutterBottom>
                                                            <Box component="div" textAlign="left"> PRODUCTO </Box>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography variant="subtitle1" component="h6" color="textSecondary" gutterBottom>
                                                            CANT.
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography variant="subtitle1" component="h6" color="textSecondary" gutterBottom>
                                                            P. UNITARIO
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography variant="subtitle1" component="h6" color="textSecondary" gutterBottom>
                                                            TOTAL
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                        {result.pedido.listPyPedidoDet.map((row, index) => (                        
                                            <Box component="div" py={2} key={row.itemNum}>                       
                                                <Paper className={classes.paperBox}>
                                                    <Box component="div" py={2} textAlign="center">
                                                        
                                                            <Grid
                                                            container
                                                            direction="row"
                                                            justifyContent="space-evenly"
                                                            alignItems="center"
                                                            >
                                                                <Grid item xs={2}>
                                                                    <CardMedia 
                                                                    className={classes.imgProduct}
                                                                    component="img"
                                                                    alt={row.itemNum}
                                                                    height="90"
                                                                    weight="90"
                                                                    image={"https://pedidos.com/myfotos/Large/(L)"+row.itemNum+".jpg"}
                                                                    title={row.itemNum}
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={4}> 
                                                                    <Typography variant="body2" color="textPrimary" gutterBottom>
                                                                        <Box component="p" textAlign="left">{result.listaSearch[index].tituloCompuesto}</Box>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={2}>
                                                                    <p>
                                                                        {row.cantidad}
                                                                    </p>
                                                                </Grid>
                                                                <Grid item xs={2}>
                                                                    <Typography variant="body2" color="textPrimary" gutterBottom>
                                                                        {row.precio}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={2}>
                                                                    <Typography variant="body2" color="textPrimary" gutterBottom>
                                                                        {row.cantidad*row.precio}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                           
                                                    </Box>
                                                </Paper>
                                            </Box> 
                                            ))
                                         }
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box component="div" textAlign="right" px={4}>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justifyContent="flex-end"
                                                    alignItems="center"
                                                    >
                                                        <Grid item xs={12} sm={8}></Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                                                Envío: 
                                                            </Typography>
                                                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                                                Subtotal:
                                                            </Typography>
                                                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                                                Total:
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                                                $0.00
                                                            </Typography>
                                                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                                                ${(Math.round((result.pedido.importe+result.pedido.iva) * 100) / 100).toFixed(2)}
                                                            </Typography>
                                                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                                                ${(Math.round((result.pedido.importe+result.pedido.iva) * 100) / 100).toFixed(2)}
                                                            </Typography>
                                                        </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>     
    )
    
    return(
        <Layout>
        <div>
            <Box className={classes.bgcontent} component="div">
                <Box component="div" m={1}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Grid item xs={12} sm={12} lg={3}>

                        </Grid>
                        <Grid item xs={12} sm={12} lg={9}>
                            {resultado && Contenido}
                        </Grid>
                    </Grid>
                </Box> 
            </Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open && modal === 'Modal1'}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}> 
                            <Card className={classes.root}>
                                <CardContent>
                                    <ChatBubbleOutlineIcon fontSize="large" /> 
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Chat
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    Inicia una conversación
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12}> 
                            <Card className={classes.root}>
                                <CardContent>
                                    <WhatsAppIcon fontSize="large" /> 
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    WhatsApp
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    Envía un mensaje
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12}> 
                            <Card className={classes.root}>
                                <CardContent>
                                    <MailOutlineIcon fontSize="large" /> 
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Correo
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    En breve responderemos
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </div>
                </Fade>
            </Modal>
            

            <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            open={open && snack === 'uno'}
            autoHideDuration={6000}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
            Añadiendo al carrito
                </Alert>
            </Snackbar>
        </div>
        </Layout>
    );
}
