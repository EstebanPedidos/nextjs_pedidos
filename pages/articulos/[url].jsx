import {useState,useEffect} from "react";
//hooks
import {useLocalStorage} from "../../hooks/useLocalStorage";
//next js
import { useRouter } from 'next/router'
import Script from 'next/script'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image' 
//Servicios
import Services from '../services/Services'
import Precios from '../services/Precios'
import RandomUser  from '../services/RandomUser'

//Componentes
import Breadcrumb from './Breadcrumb';
import ListDescription from './ListDescription';
import ProductTab   from './ProductTab';
import Alertas from '../checkout/Alertas'
import { Layout } from 'layout/Layout';
import ReviewItem from './ReviewItem';
//Modales
import Cotizar from "./Modales/Cotizar";

//Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Thumbs, FreeMode, Lazy, } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css/pagination';

//import { Carousel } from 'react-responsive-carousel';
//import "react-responsive-carousel/lib/styles/carousel.min.css";



import PropTypes from 'prop-types';
import {Container,Grid,Box,Typography,Skeleton,Divider,Button,Avatar,TextField,Paper,FormControl,InputLabel,
    Select,MenuItem,FormLabel,RadioGroup,Radio,CircularProgress,
    Card,CardActionArea,CardActions,CardContent,CardMedia,FormControlLabel,Checkbox} 
from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


import YouTube from 'react-youtube';

const variants = ['h1'];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    breadcrumb:{padding: theme.spacing(2),},
    width_carousel: {
        width: 'auto',
    },

   media: {
    height: 130,
    width: 130,
    margin: 'auto',
  },

  productCard: {
    maxWidth: 345,
    marginTop:5,
    marginBottom:5,
    padding:5,
    boxShadow: '0px 0px 16px rgb(54 85 166 / 8%), 0px 1px 4px rgb(54 85 166 / 8%)',
  },
/*plussss*/ 
  green: { color: 'rgba(116, 166, 38, 1)'},
  rootqty: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  ctaAdd:{
    backgroundColor:  "secondary.light" ,
  }

}));

function TypographyDemo(props) {
    const { loading = false } = props;

    return (
        <div>
        {variants.map((variant) => (
            <Typography component="div" key={variant} variant={variant}>
            {loading ? <Skeleton animation="wave" /> : variant}
            </Typography>
        ))}
        </div>
    );
}

TypographyDemo.propTypes = {
    loading: PropTypes.bool,
};



export default function FichaTecnica(props){
    const classes                           = useStyles()
    const ruter                             = useRouter() 
    const [urlTem,setUrlTem]                = useState(ruter.query.url)
    const [datos,setDatos]                  = useState({})
    const [horentr,setHorEntr]              = useState([])
    const [precio,setPrecio]                = useState(0)
    const [subTotal,setSubTotal]            = useState(0)
    const [hdi,setHdi]                      = useState(0)
    const [garantext1,setGarnatExt1]        = useState(0)
    const [garantext2,setGarnatExt2]        = useState(0)
    const [isGarn,setIsGarn]                = useState('')
    const [isHDI,setisHDI]                  = useState('')
    const [cantidad,setCantidad]            = useState(1)
    const [isManual,setIsManual]            = useState(false)
    const [loading,setLoading]              = useState(false) 
    const [agregado,setAgregado]            = useState([]) 
    const [alerta,setAlerta]                = useState({})
    const [cp,setCP]                        = useState('')
    const [isFavorito,setIsFavorito]        = useState(false)
    const [thumbsSwiper, setThumbsSwiper]   = useState(null);
    const [partidas,setPartidas]                    = useLocalStorage('SesPartidas',0)
    const [favoritos,setFavoritos]                    = useLocalStorage('Favoritos',0)

    const cortadosPA    = ['HP-TIN','HP-TO-'];
    const articulosPA   = ['HP-LAP-2C3C3LA','ASU-LAP-C4G500','HP-MFC-Z4B04A','HP-MFC-Z4B53A','PDIR-LAP-2C3E1L','PDIR-LAP-2Z748L','HP-LAP-151F5LT','PDIR-LAP-22A98L','PDIR-IMP-1TJ09A','PDIR-ACC-2UF58A','LG-PAN-32LM570','BRO-MFC-T220','PF-LOG-G920','PF-LOG-G29','HP-IMP-CZ993A','CAN-MFC-G2160','BRO-MFC-DCP2551','PDIR-MFC-2LB19A','HP-ALL-140P8AA','ACE-MON-V246HQL','LEN-LAP-CHRB0US'];
    const subfamilia    = {'Desktops':3,'Laptops':3,'Tablets':2,'Esc??neres':2,'Multifuncionales':3,'Impresoras':3,'Escaneres':2,'Plotters':2,'Videoproyector':2 ,'Teclado y mouse':1,'All in One':1,'Teclados':1}
    const opts          = {height: '390',width: '640',playerVars: {autoplay: 1,},}

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }

    useEffect(()=>{
        const getdata= async ()=>{
            let url             = await ruter.query.url;
            if(url !== undefined && url !==  null){
                setUrlTem(url)
                let cliente_num     = await (localStorage.getItem('Cliente') === undefined || localStorage.getItem('Cliente') === null)?201221:localStorage.getItem('Cliente')
                    cliente_num     = await (parseInt(cliente_num) === 0)?201221:cliente_num 
                let services        = await Services('POST','/fichaTecnica/obtieneItemCompleto?url='+url+'&cliente_num='+cliente_num,{})
                let data            = await services.data
                if((data.hasOwnProperty('item_num'))){
                    data.item_num       = await data.item_num.trim()
                    data.cortado        = await data.item_num.trim().substring(0,6); 
                    data.estatus_img    = await data.estatus_img.trim() 
                    data.descripcion    = await JSON.parse(data.descripcion)
                    data.detalle        = await JSON.parse(data.detalle)
                    data.breadcrumb     = await data.breadcrumb.split(',')
                    data.horarioEntrega = await JSON.parse(data.horarioEntrega)
                    data.relacionados   = await JSON.parse(data.relacionados)
                    data.metas          = await JSON.parse(data.metas)

                    setDatos(data)
                    setPrecio(parseFloat(data.precio)+(parseFloat(data.precio)*parseFloat(data.iva)))
                    setSubTotal(data.precio)
                    setHdi(data.precioSeguro)
                    setGarnatExt1(data.garantia1)
                    setGarnatExt2(data.garantia1)
                    setHorEntr(data.horarioEntrega) 
                    
                    data.metas.metasList.forEach( function(valor, indice, array) {
                        var meta = document.createElement('meta')
                        meta.setAttribute(valor.type, valor.name);
                        meta.setAttribute('content', valor.content);                        
                        document.head.appendChild(meta);
                    });
                }else{
                    ruter.push('/')
                }                
            }
        }
        getdata()
    },[ruter])

    

    function validaCPexpress (){
        setLoading(true)
        if(cp !== ''){
            Services('POST','/fichaTecnica/esMotoExpress?item_num='+datos.item_num+'&codigo_postal='+cp,{})
            .then( response =>{
                if(response.data >= 0){
                    setAlerta({severity:'success',mensaje:'Disponible Env??o Express',vertical:'bottom',horizontal:'right',variant:'filled'})
                }else{
                    setAlerta({severity:'error',mensaje:'Este producto a??n no esta disponible para env??o express.',vertical:'bottom',horizontal:'right',variant:'filled'})
                }
                setLoading(false)                
            })
        }else{
            setAlerta({severity:'error',mensaje:'Ingresa un CP',vertical:'bottom',horizontal:'right',variant:'filled'})
            setLoading(false)
        }   
    }

    async function add(isCarrito,item_num){          
        setLoading(true)
        if(item_num === '' && (cantidad === '' || parseInt(cantidad) === 0)){
            setAlerta({severity:'error',mensaje:'Se requiere una cantidad',vertical:'bottom',horizontal:'right',variant:'filled'})
            setLoading(false)
            return
        }
        let cliente_num     = await (localStorage.getItem('Cliente') === undefined || localStorage.getItem('Cliente') === null)?201221:localStorage.getItem('Cliente')
            cliente_num     = await (parseInt(cliente_num) === 0)?201221:cliente_num            
        
        let usuario         = await (localStorage.getItem('Usuario') === undefined || localStorage.getItem('Usuario') === null)?RandomUser():localStorage.getItem('Usuario')
            usuario         = await (parseInt(usuario) === 0)?RandomUser():usuario 
        Services('POST-NOT','/carritoyreservado/agregaCarrito',{cliente_num: cliente_num,usuario_num : usuario,cantidad : (item_num==='')?parseInt(cantidad):1,item_num :(item_num==='')?datos.item_num:item_num,seguro :(item_num==='')?isHDI:'',garantia :(item_num==='')?isGarn:''})
        .then( response =>{
            let partidas =  response.data
            if(partidas > 0){
                setPartidas(parseInt(partidas))
                setAgregado([...agregado,(item_num==='')?datos.item_num:item_num])
                if(isCarrito){
                    ruter.push('/checkout/verifica-pedido')
                }else{
                    setLoading(false)
                    setAlerta({severity:'success',mensaje:'Agregado',vertical:'bottom',horizontal:'right',variant:'filled'})
                }                
            }else{
                setAlerta({severity:'error',mensaje:'Error al agregar',vertical:'bottom',horizontal:'right',variant:'filled'})
                setLoading(false)
            }
        })         
    }

    async function addFavorito(){
        setLoading(true)
        let cliente_num     = await (localStorage.getItem('Cliente') === undefined || localStorage.getItem('Cliente') === null)?201221:localStorage.getItem('Cliente')
            cliente_num     = await (parseInt(cliente_num) === 0)?201221:cliente_num 
        if(cliente_num !== 201221){
            if(isFavorito){
                Services('POST','/miCuenta/eliminaFavorito?cliente='+cliente_num+'&itemNum='+datos.item_num,{})
                .then( response =>{
                    setLoading(false)
                    if(response.data === 'OK'){
                        setAlerta({severity:'success',mensaje:'Eliminado de Favoritos',vertical:'bottom',horizontal:'right',variant:'filled'})
                        setIsFavorito(false)              
                    }else{
                        setAlerta({severity:'error',mensaje:'Error al eliminar Favorito',vertical:'bottom',horizontal:'right',variant:'filled'})
                    }
                })
            }else{
                let precio = Precios('redondear_arriba',{subtotal:(parseFloat(subTotal)*parseFloat(datos.iva)),iva:0,formato:true})
                Services('POST-NOT','/miCuenta/agregarFavorito?cliente_num='+cliente_num+'&item_num='+datos.item_num+'&notificacion=1&precio='+precio,{})
                .then( response =>{
                    setLoading(false)
                    if(response.data === 'OK'){
                        setFavoritos(favoritos++)
                        setAlerta({severity:'success',mensaje:'Agregado a Favoritos',vertical:'bottom',horizontal:'right',variant:'filled'})
                        setIsFavorito(true)               
                    }else{
                        setAlerta({severity:'error',mensaje:'Error al agregar a Favoritos',vertical:'bottom',horizontal:'right',variant:'filled'})
                    }
                }) 
            }                        
        }else{
            ruter.push('/Login')
        }        
    }
    

    return (
        <div>      
            <Layout favoritos={favoritos} partidas={partidas} title={(datos.hasOwnProperty('item_num'))?datos.descripcion.descripcion.urlName.substring(0,34):''}>    
               {(datos.hasOwnProperty('item_num'))&&
                <Head>                    
                    <link rel="canonical" href={`https://pedidos.com/articulos/${urlTem}`} />
                    {(!JSON.stringify(datos.metas.metasList).includes('description'))&&
                        <meta name="description" content={`Compra ${datos.descripcion.descripcion.urlName.substring(0,34)} y Paga a MSI en compras mayores a $500 MXN. Envio EXPRESS CDMX.`} />
                    }
                    {(!JSON.stringify(datos.metas.metasList).includes('keywords'))&&
                        <meta name="keywords" content={datos.descripcion.descripcion.urlName.substring(0,34)} />
                    }
                </Head>

                }
               
                {(datos.hasOwnProperty('item_num'))&&
                    (datos.item_num.includes('HP-') || datos.item_num.includes('hp-') || datos.item_num.includes('PDIR-') || datos.item_num.includes('pdir-'))&&
                    <Script type="text/javascript" src="https://storage.googleapis.com/indexado/assets/alquimioIndexado.v2.js" 
                    data-sku={datos.descripcion.descripcion.sort_name}
                    data-country="MX"
                    data-source="SCRIPT"
                    data-brand="HP"></Script>                                      
                }
                {(datos.hasOwnProperty('item_num'))&&
                    <Script id="show-banner" strategy="lazyOnload">
                    {`var ccs_cc_args = ccs_cc_args || [];
                    // HP Content Product Page
                    ccs_cc_args.push(['cpn', 'CPN']);
                    ccs_cc_args.push(['mf', '${datos.marca}']);
                    ccs_cc_args.push(['pn', '${datos.descripcion.descripcion.sort_name}']);
                    ccs_cc_args.push(['upcean', 'UPC_EAN_CODE']);
                    ccs_cc_args.push(['ccid', 'CATALOG_CODE']);
                    ccs_cc_args.push(['lang', 'es']);
                    ccs_cc_args.push(['market', 'MX']);

                    (function () {
                            var o = ccs_cc_args; o.push(['_SKey', '74b5eb60']); o.push(['_ZoneId', 'hp-auto-pp']);
                    var sc = document.createElement('script'); sc.type = 'text/javascript'; sc.async = true;
                            sc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.cnetcontent.com/jsc/h.js';
                    var n = document.getElementsByTagName('script')[0]; n.parentNode.insertBefore(sc, n);
                    })();`
                    }                
                    </Script>
                }
                <Container maxWidth="xl">                
                    <Box component="div" m={2}>
                        <Grid container direction="row" justifyContent="space-between" spacing={3}>
                            <Grid xs={12} sm={12} >
                                <Box component="div">
                                    <Box component="div">
                                        {(datos.hasOwnProperty('item_num'))&&
                                        (datos.breadcrumb[0] !== "N/A")?                                    
                                            <Breadcrumb site='Home' categoria={datos.breadcrumb[0]} subcategoria={datos.breadcrumb[1]} productos={datos.breadcrumb[2]} variant="caption"/>
                                            :
                                            <Box sx={{ pt: 0.5 }}>
                                                <Skeleton width="25%" />
                                            </Box>
                                        } 
                                    </Box>  
                                </Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={7} md={8} lg={8}>
                                        <Grid container>
                                            <Grid>
                                                <Typography variant="h5" component="h1" sx={{fontWeight:'500'}}>
                                                    {(datos.hasOwnProperty('item_num'))?`${datos.descripcion.descripcion.urlName}`
                                                    : 
                                                    <Box sx={{ pt: 0.2, width: '80vw' }}>
                                                        <Skeleton width='60%'height={40}/>
                                                        <Skeleton width='40%' height={40}  />
                                                    </Box>
                                                    }
                                                </Typography> 
                                            </Grid>
                                            <Grid item xs={12} sm={12} lg={7}>
                                                {(datos.hasOwnProperty('item_num'))?
                                                <Box className={classes.width_carousel} sx={{position:'relative'}}> 
                                                    <Box sx={{position:'absolute', right:'0', top:'0', zIndex:'2'}}>
                                                        {(loading)?
                                                            <CircularProgress />
                                                            :
                                                            <FormControlLabel name='favoritos'  onChange={addFavorito}
                                                            control={
                                                                <Checkbox checked={isFavorito} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                                            } 
                                                            />
                                                        }
                                                    </Box>
                                                    <Swiper
                                                    style={{
                                                    "--swiper-navigation-color": "#fff",
                                                    "--swiper-pagination-color": "#fff",
                                                    }}
                                                    loop={true}
                                                    spaceBetween={10}
                                                    navigation={true}
                                                    thumbs={{ swiper: thumbsSwiper }}
                                                    modules={[FreeMode, Navigation, Thumbs]}
                                                    className="mySwiper2"
                                                    >
                                                        <SwiperSlide>
                                                            <img width={'100%'}  height={'100%'} layout="responsive" src={`https://pedidos.com/myfotos/xLarge/(X)${datos.item_num}.webp`}  alt={datos.item_num} />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                           
                                                            <img width={'100%'}  height={'100%'} layout="responsive" src={(datos.estatus_img === "A")?`https://pedidos.com/myfotos/xLarge_v2/(v2)(X)${datos.item_num}.webp`:`https://pedidos.com/myfotos/xLarge/(X)${datos.item_num}.webp`} alt={datos.item_num}/>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            
                                                            <img width={'100%'}  height={'100%'} layout="responsive" src={(datos.estatus_img === "A")?`https://pedidos.com/myfotos/xLarge_v3/(v3)(X)${datos.item_num}.webp`:`https://pedidos.com/myfotos/xLarge/(X)${datos.item_num}.webp`} alt={datos.item_num}/>
                                                        </SwiperSlide>
                                                        {(datos.hasOwnProperty('item_num'))&&
                                                            (datos.descripcion.descripcion.hasOwnProperty("link"))&&
                                                                datos.descripcion.descripcion.link.split(',').map((link, index) => (
                                                                    <SwiperSlide key={index}>  
                                                                        <Box component="div" py={6} alignItems="center" sx={{backgroundColor:'#000000',borderRadius:'8px'}}>
                                                                            <YouTube videoId={(link.includes('='))?link.substring(link.lastIndexOf('=')+1,link.length):link.substring(link.lastIndexOf('/')+1,link.length)} opts={opts} onReady={onPlayerReady}/>
                                                                        </Box>
                                                                    </SwiperSlide>
                                                                ))
                                                        }                                                                                                           
                                                    </Swiper>
                                                    <Swiper
                                                        onSwiper={setThumbsSwiper}                                                        
                                                        spaceBetween={10}
                                                        slidesPerView={4}
                                                        freeMode={true}
                                                        watchSlidesProgress={true}
                                                        modules={[FreeMode, Navigation, Thumbs]}
                                                        className="mySwiper"
                                                    >
                                                        <SwiperSlide>
                                                            <img width={'100%'}  height={'100%'} layout="responsive" src={`https://pedidos.com/myfotos/${datos.item_num}.webp`}  alt={datos.item_num} />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img width={'100%'}  height={'100%'} layout="responsive" src={`https://pedidos.com/myfotos/v2/(v2)${datos.item_num}.webp`} alt={datos.item_num}/>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img width={'100%'}  height={'100%'} layout="responsive" src={`https://pedidos.com/myfotos/v3/(v3)${datos.item_num}.webp`} alt={datos.item_num}/>
                                                        </SwiperSlide>
                                                        {(datos.hasOwnProperty('item_num'))&&
                                                            (datos.descripcion.descripcion.hasOwnProperty("link"))&&
                                                                datos.descripcion.descripcion.link.split(',').map((link, index) => (
                                                                    <SwiperSlide key={index}>
                                                                        <Box component="div" py={2} alignItems="center">
                                                                        <img width={'80%'}  height={'80%'} layout="responsive" src={`https://img.youtube.com/vi${(link.includes('='))?link.substring(link.lastIndexOf('='),link.length):link.substring(link.lastIndexOf('/'),link.length)}/0.jpg`} alt={datos.item_num}/>
                                                                        </Box>
                                                                    </SwiperSlide>
                                                                ))
                                                        }                                                       
                                                    </Swiper>
                                                    
                                                </Box>
                                                :
                                                <Box sx={{ pt: 0.5 }}>
                                                    <Skeleton  width="98%" height={600} />
                                                    <Skeleton width={90} height={90} />
                                                </Box>
                                                }
                                                  
                                            </Grid>
                                            <Grid item xs={12} sm={12} lg={5}>
                                                <Box>   
                                                    <Grid>
                                                        <Box component="div" pt={4}>
                                                            <Typography variant="subtitle1" component="h3" sx={{fontWeight:'500'}} className={classes.titDescription}>
                                                                {(datos.hasOwnProperty('item_num'))?(datos.descripcion.descripcion.hasOwnProperty("titulo"))?`Especificaciones de  ${datos.descripcion.descripcion.titulo}`:``:<Skeleton variant="text" height={60} animation="wave"/>}
                                                            </Typography>
                                                        </Box>
                                                        {(datos.hasOwnProperty('item_num'))?
                                                        <ListDescription detalle={datos.detalle} />
                                                        :
                                                        <Box sx={{ pt: 0.5 }}>
                                                            <Skeleton animation="wave" />
                                                            <Skeleton width="60%" animation="wave" />
                                                            <Skeleton animation="wave" />
                                                            <Skeleton width="60%" animation="wave" />
                                                        </Box>
                                                        
                                                        }
                                                    </Grid>
                                                </Box>
                                                <Divider />
                                                <Grid item>
                                                    <Box py={1}>
                                                        {(datos.hasOwnProperty('item_num'))?
                                                        <Button color="primary" to="#more" size="large" fullWidth>
                                                            Ver todo {(cortadosPA.indexOf(datos.cortado) >= 0)? `del `:`de `}   {datos.descripcion.descripcion.titulo}
                                                        </Button>:
                                                        <Skeleton variant="rectangular"  height={50} animation="wave"/>
                                                        }
                                                    </Box>
                                                </Grid>
                                                <Divider />
                                                <Grid item>
                                                     {(datos.hasOwnProperty('item_num'))?
                                                    <Box component="div" pt={1}>                                                    
                                                        <Card elevation={0} sx={{backgroundColor:'#3655a51f'}}>
                                                            <CardContent>
                                                                <Grid container justifyContent="center" alignItems="center">
                                                                    <Grid item xs>
                                                                        <Box component="div" textAlign="center" >
                                                                            <Typography variant="body1">
                                                                            Hasta
                                                                            </Typography>
                                                                            <Typography variant="h5" sx={{fontWeight:'600'}}>
                                                                            <Box component="span" sx={{color:'#3655a5'}}>18</Box> MSI
                                                                            </Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Divider orientation="vertical" flexItem />
                                                                    <Grid item xs>
                                                                        <Box component="div" textAlign="center" pl={1}>
                                                                            <Typography variant="body1">
                                                                            Pide y recoge en
                                                                            </Typography>
                                                                            <Typography component="div" variant="h5" sx={{fontWeight:'600'}}>
                                                                            <Box component="span" sx={{color:'#3655a5'}}>PickUp</Box> Center
                                                                            </Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                </Grid>
                                                            </CardContent>
                                                        </Card>
                                                    </Box>
                                                    :
                                                        <Skeleton variant="rectangle" width="100%" height={120} animation="wave"/>
                                                    }
                                                </Grid>
                                                <Grid item>
                                                    <Box my={2}>
                                                        <Typography variant="subtitle1" component="h4" className={classes.titxt} >{(datos.hasOwnProperty('item_num'))?'Consulta env??o express 3 horas aqu??':<Skeleton variant="text" animation="wave" />}</Typography>
                                                        <Box my={2}>
                                                            <Grid container justifyContent="center" alignItems="center">
                                                                <Grid item xs={2} >
                                                                    <Box component="div" px={2} justifyContent="center">
                                                                    {(datos.hasOwnProperty('item_num'))?
                                                                        <Avatar alt="express"size="large" src="https://pedidos.com/myfotos/pedidos-com/pagina/ficha-tecnica/m-express-ship.svg"/>
                                                                        :
                                                                        <Skeleton variant="circular" width={50} height={50} animation="wave"/>
                                                                    }
                                                                    </Box>
                                                                </Grid>
                                                                <Grid item xs={10}>
                                                                {(datos.hasOwnProperty('item_num'))?
                                                                (datos.isExpress)&&  
                                                                    <Grid container  alignItems="center" justifyContent="flex-start">
                                                                        <Grid item xs={7}>
                                                                            <TextField id="outlined-basic" value={cp} label="C??digo Postal" variant="outlined" name="cp" onChange={({target})=>{setCP(target.value)}} fullWidth/>
                                                                        </Grid>
                                                                        <Grid item xs={5}>
                                                                            <LoadingButton variant="contained" color="primary" size="large"fullWidth
                                                                            onClick={validaCPexpress}
                                                                            loading={loading}
                                                                            loadingIndicator="Comprobando..."
                                                                            >
                                                                                Comprobar
                                                                            </LoadingButton> 
                                                                        </Grid>                                           
                                                                    </Grid>
                                                                :
                                                                <Box sx={{ pl: 1 }}>
                                                                    <Skeleton variant="rectangular" width="100%"  height={50} animation="wave"/>
                                                                </Box>
                                                                }
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={5} md={4} lg={4}>
                                        {(datos.hasOwnProperty('item_num'))?                                        
                                        <Paper variant="outlined" >
                                            <Box component="div" m={4}>
                                            <Typography>Precio unitario</Typography>
                                            <Box component="div">
                                                <Grid container>
                                                    <Grid item>
                                                        <Box p={1}>
                                                            <Typography variant="h4" component="subtitle1"> 
                                                            ${(precio > 0)?Precios('redondear_arriba',{subtotal:precio,iva:0,formato:true}):``}
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item>
                                                        <Box p={1} color="grey.600" sx={ {textDecoration:"line-through", }} >
                                                            <Typography variant="subtitle1">
                                                            ${(cortadosPA.indexOf(datos.cortado) >= 0 || articulosPA.indexOf(datos.item_num) >= 0)?(datos.precio_anterior > 0 && datos.precio_anterior > precio)?Precios('redondear_arriba',{subtotal:datos.precio_anterior,iva:0,formato:true}):``:Precios('redondear_arriba',{subtotal:(((parseFloat(precio)*10)/100)+parseFloat(precio)),iva:0,formato:true})}
                                                            </Typography> 
                                                        </Box>
                                                    </Grid>

                                                </Grid>
                                            </Box> 
                                            <Box component="div">
                                                <Box component="div">
                                                    <Box component="div" fullWidth>
                                                        <div className={classes.root}>
                                                            <Grid container alignItems="center" justifyContent="flex-start">
                                                            {(datos.bodega !== "Ninguna")&&
                                                                <Box fontWeight="fontWeightBold">
                                                                    <Grid item>
                                                                        <Grid container alignItems="center" justifyContent="center" spacing={1}>
                                                                            <Grid item xs={2} sm={3} md={2} lg={1}>
                                                                                <MopedOutlinedIcon color="primary"/></Grid>
                                                                            <Grid item xs={10} sm={9} md={10} lg={11}>
                                                                                <Typography variant="subtitle2">Entrega EXPRESS,<Box component="span" sx={{color:'#3655a5'}}> CDMX {datos.horarioEntrega.horarioLocal}</Box> </Typography>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Grid container alignItems="center" justifyContent="space-around" spacing={1}>
                                                                            <Grid item xs={2} sm={3} md={2} lg={1}><LocalShippingOutlinedIcon color="primary"/></Grid>
                                                                            <Grid item xs={10} sm={9} md={10} lg={11}>
                                                                                <Typography variant="subtitle2">Entregas <Box component="span" sx={{color:'#3655a5'}}>al pa??s {horentr.horarioForaneo}</Box></Typography>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Box> 
                                                            }
                                                            
                                                            {(datos.envio_gratis === "Y")&&
                                                                <Grid item>
                                                                    <Grid container alignItems="center" justifyContent="space-around" spacing={1}>
                                                                        <Grid item><LocalShippingOutlinedIcon/></Grid>
                                                                        <Grid item>
                                                                            <Typography className={classes.green} variant="subtitle2">Env??o GRATIS <span>en producto.</span></Typography>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            }
                                                            </Grid>
                                                        </div>
                                                    </Box>
                                                </Box>
                                                <Box component="div" pt={1}>
                                                    <Typography variant="subtitle1" color="textSecondary">
                                                        <Box component="span" fontWeight="fontWeightMedium">
                                                            {(datos.disponibilidad > 20)?`??Tenemos m??s de 20 piezas!`:`??Tenemos ${datos.disponibilidad} piezas!`}
                                                        </Box>
                                                    </Typography>
                                                </Box> 
                                            </Box>
                                            <Box my={2}>
                                                <Grid container direction="row" justifyContent="center"
                                                    alignItems="center" component="form" spacing={2}>
                                                        <Grid item xs={4} sm={12} lg={4}>
                                                            {(isManual)?
                                                            <TextField fullWidth   id='cantidad' type="number" value={cantidad} onChange={({target})=>{setCantidad((parseInt(target.value) > datos.disponibilidad)?datos.disponibilidad:target.value)}} label="Cantidad"/>
                                                            :
                                                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                                                <InputLabel id="demo-simple-select-outlined-label">Cant.</InputLabel>
                                                                <Select
                                                                id='cantidad'
                                                                value={cantidad}
                                                                onChange={({target})=>{ setCantidad(target.value); setIsManual((target.value === 6));}}
                                                                label="Cantidad"
                                                                >
                                                                <MenuItem value={1}>1</MenuItem>
                                                                <MenuItem value={2}>2</MenuItem>
                                                                <MenuItem value={3}>3</MenuItem>
                                                                <MenuItem value={4}>4</MenuItem>
                                                                <MenuItem value={5}>5</MenuItem>
                                                                <MenuItem value={6}>+5</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                            }
                                                        </Grid>
                                                        <Grid item xs={8} sm={12} lg={8}>
                                                            <LoadingButton variant="outlined" color="secondary"  size="large" py={1} fullWidth elevation={0}
                                                            onClick={()=>{add(false,'')}}
                                                            loading={loading}
                                                            loadingIndicator="Agregando..."
                                                            >
                                                                Agregar a carrito
                                                            </LoadingButton>                                                         
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            {(datos.disponibilidad  > 0)&&
                                                                <LoadingButton variant="contained" color="secondary" onclick="" type="button" fullWidth size="large" elevation={0}
                                                                onClick={()=>{add(true,'')}}
                                                                loading={loading}
                                                                loadingIndicator="Agregando..."
                                                                >
                                                                    Comprar ahora
                                                                </LoadingButton>
                                                            }
                                                        </Grid>
                                                </Grid>
                                            </Box>
                                            <Box component="div" pb={2}>
                                                {(precio > 500)?
                                                    <Typography variant="subtitle1" color="primary" >
                                                    Paga a 18 meses sin intereses de ${Precios('redondear_arriba',{subtotal:(precio/18),iva:0}).split('.')[0]}<sup>.{Precios('redondear_arriba',{subtotal:(precio/18),iva:0}).split('.')[1]}</sup>
                                                    </Typography>:``
                                                }
                                            </Box>
                                            <Divider middle/>
                                            <Box component="div" py={3}>
                                                <Cotizar item_num={datos.item_num}/>
                                            </Box>
                                            <Divider middle/>
                                            <Box component="div">
                                            {(subfamilia.hasOwnProperty(datos.descripcion.descripcion.subfamilia))&&
                                                ((subfamilia[datos.descripcion.descripcion.subfamilia] === 1 || subfamilia[datos.descripcion.descripcion.subfamilia] === 3) && hdi > 0)&&
                                                <Box pt={4}>
                                                    <FormControl component="fieldset" >
                                                    <FormLabel component="legend">Protecci??n contra da??os</FormLabel>
                                                        <RadioGroup aria-label="duraci??n" name="proteccion" value={isHDI} onChange={({target})=>{setisHDI(target.value)}}>
                                                            <FormControlLabel value='ZZZSEGURO' control={<Radio />} label={
                                                            <Typography>1 A??O ${hdi}</Typography>
                                                            }/>
                                                            <FormControlLabel value='' control={<Radio />} label="No, por el momento" />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </Box> 
                                            }
                                            </Box>
                                            {(subfamilia.hasOwnProperty(datos.descripcion.descripcion.subfamilia))&&
                                                ((subfamilia[datos.descripcion.descripcion.subfamilia] === 2 || subfamilia[datos.descripcion.descripcion.subfamilia] === 3) && (garantext1 > 0 || garantext2 > 0))&&
                                                <Box pt={4}>
                                                    <FormControl component="fieldset">
                                                    <FormLabel component="legend">Protecci??n contra da??os</FormLabel>
                                                        <RadioGroup aria-label="duraci??n" name="garantiaext" value={isGarn} onChange={({target})=>{setIsGarn(target.value)}}>
                                                            <FormControlLabel value="ZZZGAEXT1" control={<Radio />} label={
                                                            <Typography>1 A??O  ${garantext1}</Typography>
                                                            }/>
                                                            <FormControlLabel value="ZZZGAEXT2" control={<Radio />} label={
                                                            <Typography>2 A??Os  ${garantext2}</Typography>
                                                            }/>
                                                            <FormControlLabel value="" control={<Radio />} label="No, por el momento" />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </Box>      
                                            }
                                            </Box>
                                        </Paper>
                                        :
                                        <Skeleton variant="rectangular"  height={880} animation="wave"/>
                                        }
                                    </Grid>
                                </Grid>
                                <Grid> 
                                    {(datos.hasOwnProperty('item_num'))?
                                    (datos.relacionados.listaRelacionados.length > 0  && datos.descripcion.descripcion.titulo !== undefined )&&
                                    <Box component="div" py={2}>
                                        <Typography variant="h6" component="h5" className={classes.titSuggest} >
                                            {(cortadosPA.indexOf(datos.cortado) >= 0)?`Consumibles HP para `:`Sugerencia de compra para `}<span>{(datos.descripcion.descripcion.titulo.indexOf('ORIGINAL') >= 0)?datos.descripcion.descripcion.titulo.substring(0,datos.descripcion.descripcion.titulo.indexOf('ORIGINAL')-1):datos.descripcion.descripcion.titulo}</span> {(cortadosPA.indexOf(datos.cortado) >= 0)?`relacionados`:``}
                                        </Typography>
                                        <Box my={4}>   
                                            <Grid container>  
                                                <Grid item xs={12}>
                                                <Swiper
                                                    modules={[Navigation]}
                                                    navigation
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    slidesPerView={4}
                                                    spaceBetween={15}
                                                    className="mySwiper4"
                                                    breakpoints={{
                                                        320: {
                                                            slidesPerView: 1.9,
                                                            
                                                          },
                                                        630:{
                                                            slidesPerView:2.2,
                                                            
                                                        },
                                                        768: {
                                                            slidesPerView: 3.2,
                                                           
                                                        },
                                                        1024: {
                                                            slidesPerView: 4.2,
                                                           
                                                        },
                                                    }}
                                                    >
                                                    { Object.keys(datos.relacionados.listaRelacionados).map((oneKey,i)=>{
                                                                return (
                                                    <SwiperSlide key={i}>
                                                        <Card className={classes.productCard} >
                                                            <Link href={`/articulos/${datos.relacionados.listaRelacionados[oneKey].url.toLowerCase()}`}>
                                                            <a>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                className={classes.media}
                                                                image={`https://pedidos.com/myfotos/large/(L)${datos.relacionados.listaRelacionados[oneKey].item_rel}.webp`}
                                                                alt={datos.item_num}
                                                                title={datos.item_num} />
                                                                <CardContent>
                                                                <Divider light />
                                                                <Typography mt={2} sx={{ height:'45px', overflow: 'hidden'}}
                                                                    variant="body2"
                                                                    color="textSecondary"
                                                                    component="p">
                                                                    { datos.relacionados .listaRelacionados[oneKey].alt }
                                                                </Typography>
                                                                </CardContent>
                                                            </CardActionArea>
                                                            </a>
                                                            </Link>
                                                            <CardActions>
                                                                {(agregado.indexOf(datos.relacionados.listaRelacionados[oneKey].item_rel) >= 0)?
                                                                <Button color="secondary"
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    size="large"
                                                                    >
                                                                Agregado
                                                                </Button>
                                                                :
                                                                <LoadingButton size="medium"
                                                                variant="outlined"
                                                                fullWidth
                                                                onClick={()=>{add(false,datos.relacionados.listaRelacionados[oneKey].item_rel)}}
                                                                loading={loading}
                                                                loadingIndicator="Agregando..."
                                                                >
                                                                <AddOutlinedIcon />
                                                                </LoadingButton>
                                                                }
                                                            </CardActions>
                                                        </Card>
                                                    </SwiperSlide>
                                                    );
                                                        })
                                                    }
                                                    
                                                </Swiper>
                                                </Grid>                              
                                            </Grid>  
                                        </Box>     
                                    </Box>
                                    :
                                    <Box sx={{ pt: 0.5 }}>
                                        <Skeleton width="60%" />    
                                        <Skeleton variant="rectangular" width="25%" height={250} animation="wave"/>
                                    </Box>
                                    }
                                    {(datos.hasOwnProperty('item_num'))?
                                    <Box pb={2}>
                                        <ReviewItem item_num={datos.item_num.trim()} />
                                    </Box>    
                                        :
                                    <Box sx={{ py: 0.5 }}>
                                        <Skeleton variant="rectangular" width='100%'  height={80} animation="wave"/>
                                    </Box>  
                                    }  
                                    
                                    {(datos.hasOwnProperty('item_num'))?
                                    <ProductTab datos={datos}/>
                                    :
                                    <Skeleton variant="rectangular"  height={250} animation="wave"/>
                                    }  
                                   
                                      
                                    <div id="contenidoIndexado"></div>
                                    <section>
                                        <div>
                                            <div id="ccs-inline-content"></div>
                                            <div id="ccs-explore-product"></div>
                                        </div>
                                    </section>
                                </Grid>
                            </Grid>
                        </Grid>
                        {(alerta.hasOwnProperty('severity'))&&
                            <Alertas setAlerta={setAlerta} alerta={alerta}/>
                        } 
                    </Box>
                </Container>
            </Layout>
        </div>     
    )    
}
