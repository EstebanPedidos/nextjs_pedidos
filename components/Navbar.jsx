import React, { useRef, useState, useEffect } from 'react';

// Third parties import
// import { makeStyles } from '@material-ui/core/styles';

// Componentes - material UI
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import Menu from '@material-ui/core/Menu';
// import Box from '@material-ui/core/Box';
// import Hidden from '@material-ui/core/Hidden';
// import TextField from '@material-ui/core/TextField';
// import { Button, Divider } from '@material-ui/core';
// import InputAdornment from '@material-ui/core/InputAdornment';

//Components @mui/material
import {
	AppBar,Toolbar,IconButton,Typography,
	Menu, Box,Hidden, TextField, Button,
	Divider,InputAdornment,MenuItem, Badge,Drawer,
	List, ListItem, ListIcon, ListItemText, Avatar,Tooltip, } from '@mui/material';

import {
	FavoriteBorder,
	HelpOutline as HelpOutlineIcon,
	ShoppingCart as ShoppingCartIcon,
	Search as SearchIcon,
} from '@mui/icons-material';

import { alpha, makeStyles,useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';




// Icons
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import SearchIcon from '@material-ui/icons/Search';

// Variables imports
import { logoUrl } from '../constants';

import { HelpModal } from './modals';

import { content, logo, iconhca } from './Navbar.module.css';

const drawerWidth = 240;

//Nextjs
import { useRouter } from 'next/router'
import Link from 'next/link'


const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    }
  }));

export function Navbar() {
	const [openModal, setOpenModal] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

    const ruter = useRouter() 
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [inputs, setInputs] = useState({});
    const [nombre, setNombre] = React.useState('');
    const [isLogged, setLogged] = React.useState(false);
    const [menuName, setMenuName] = React.useState(null);
    const [lista, setLista] = React.useState({});
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    
    const [sesPartidas, setSesPartidas] = useState(0);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



    let Cliente = 0;
    let Favoritos = 0;
    let Token = '';
    let Usuario = 0;
    let ejecutivoNum = 0;

    useEffect( () => {

        setNombre(localStorage.getItem('Usu_Nomb'));
        if(localStorage.getItem('Login') === 'Ok'){
            setLogged(true);
            } else if(localStorage.getItem('Login') === 'NO' || localStorage.getItem('Login') === null){
            setLogged(false);
            }
        setSesPartidas(localStorage.getItem('SesPartidas'))
    }, [])  

    useEffect(() => {
        function checkUserData() {
            const CountPartidas = localStorage.getItem('SesPartidas')                   
            if (CountPartidas) {
                setSesPartidas(CountPartidas)                
            }
        }        
        window.addEventListener('storage', checkUserData)        
        return () => {
            window.removeEventListener('storage', checkUserData)
        }

        Cliente = localStorage.getItem('Cliente');
        Favoritos = localStorage.getItem('Favoritos');
        Token = localStorage.getItem('Token');
        Usuario = localStorage.getItem('Usuario');
        ejecutivoNum = localStorage.getItem('ejecutivoNum');
    }, [])

	const anchorEl2 = useRef();
	const handleClose = () => {
		setOpenMenu(false);
	};
	const handleClick = (event) => {
		setOpenMenu(true);
	};

	const handleOpenModal = () => {
		setOpenModal(!openModal);
	};


    const handleDrawerOpen = (event) => {
        const name = event.target.name;
        setOpen(true);
        
    };

    const handleDrawerClose = () => {
        setOpen(false);
        
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const toggleDrawer = (anchor, open) => event => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    const mainMenuListArr = ['Productos para Oficina', 'Papel', 'Tintas y Toners', 'Tecnología', 'Accesorios', 'Muebles', 'Tlapalería', 'Limpieza', 'Cafetería'];

    const subMenuObj = {
      "Productos para Oficina": ['Papelería', 'Cuardernos y Blocks', 'Escritura', 'Encuadernado y Engargolado', 'Accesorios de Escritorio', 'Clasificación y Organización', 'Adhesivos', 'Recorte', 'Geometría', 'Formatos', 'Desctructoras', 'Sellos y Tintas', 'Pizarrones y Rotafolios', 'Cintas, Etiquetas y Rotuladores'],
      "Papel": ['Papel para Impresión', 'Papel Especializado'],
      "Tintas y Toners": ['Tintas', 'Toners', 'Rollos', 'Accesorios de impresión', 'Kit´s'],
      "Tecnología": ['Cómputo', 'Impresión', 'Teclado y Mouse', 'Proyectores', 'Audio', 'Cámara y Vídeo', 'Televisores', 'DVDs y Blu-Rays', 'Software', 'Telefonía', 'Energía', 'Seguridad', 'Punto de Venta', 'Pilas y Baterías', 'Línea Blanca', 'VideoJuegos', 'Salud y Belleza'],
      "Accesorios": ['Componentes de cómputo', 'Memorias', 'Pantallas', 'Ergonomía', 'Estuche y Fundas', 'CD´S Y DVD´S', 'Bases', 'Presentadores', 'Conexiones', 'Protección', 'Limpieza y mantenimiento', 'Equipamiento Electrónico'],
      "Muebles": ['Escritorios y Mesas', 'Sillas y Sillones', 'Archiveros', 'Anaqueles y Libreros', 'Cajas Fuertes', 'DESKO'],
      "Tlapalería": ['Herramientas', 'Electricidad', 'Iluminación', 'Industrial', 'Candados', 'Señalización', 'Hogar', 'Pinturas'],
      "Limpieza": ['Químicos', 'Higiénicos', 'Jarciería', 'Despachadores', 'Ceras y aceites'],
      "Cafetería": ['Cafeteras', 'Comida y Snacks', 'Café y té', 'Bebidas', 'Azucar y sustitutos', 'Crema y Sustitutos', 'Dispensador de Agua', 'Desachables'],
    };

    const subMenuProductosOficina = {
        "Papelería": ['Gomas', 'Sacapuntas', 'Clips', 'Pin', 'Chinchetas', 'Kit', 'Broche Baco', 'Sujetadocumentos', 'Grapas', 'Ligas de hule', 'Gafete', 'Broche para gafete', 'Calculadora', 'Dedales', 'Sumadoras'],
        "Cuardernos y Blocks": ['Cuadernos', 'Block', 'Tarjeta multiusos', 'Libro flotere', 'Hojas de repuesto'],
        "Escritura": ['Bolígrafo', 'Bolígrafo tipo fuente', 'Bolígrafo Roller', 'Repuestos de bolígrafos', 'Lápiz de madera', 'Lapicero', 'Lápices de color', 'Puntillas', 'Crayolas y marcadores de cera','Marcadores y marcatextos', 'Plumones','Correctores','Gises','Repuestos de marcadores'],
        "Encuadernado y Engargolado": ['Cubiertas', 'Engargoladoras', 'Enmicadora', 'Gusanos y espirales', 'Micas'],
        "Accesorios de Escritorio": ['Charolas portadocumentos', 'Engrapadoras y Desengrapadoras', 'Despachador de notas adhesivas', 'Organizador de escritorio', 'Organizador de documentos', 'Base para calendario', 'Perforadoras y repuestos', 'Portalápices', 'Portaclips', 'Revistero', 'Notas adhesivas'],
        "Clasificación y Organización": ['Carpetas', 'Folders', 'Sobres', 'Portadocumentos', 'Cajas para archivos', 'Portablocks', 'Separadores y Guías', 'Protector de hojas', 'Protector de tarjetas de presentación', 'Tarjetero', 'Tabla sujetapapel', 'Agendas, calendarios y directorios', 'Señaladores y banderitas'],
        "Adhesivos": ['Lápiz adhesivo', 'Pegamento instantáneo', 'Pegamento líquido', 'Silicón líquido', 'Adhesivo en aerosol', 'Cuadros adhesivos', 'Cinta adhesiva de empaque', 'Cinta adhesiva masking tape', 'Cinta adhesiva de corte fácil', 'Cinta adhesiva invisible', 'Cinta adhesiva doble cara', 'Cinta adhesiva de montaje', 'Cinta adhesiva para ducto y filamento', 'Despachador para cinta', 'Pistola de silicón', 'Cinta adhesiva para libros', 'Cinta adhesiva mágica'],
        "Recorte": ['Cutters y repuestos', 'Guillotinas y repuestos', 'Tijeras'],
        "Geometría": ['Juego de geometría', 'Regla'],
        "Formatos": ['Solicitud de empleo', 'Pagaré', 'Recibo de nómina', 'Póliza de cheque', 'Comprobante de gastos', 'Polizas de ingreso y egreso', 'Contrarecibo', 'Vales de caja', 'Carta Poder', 'Hoja de trabajo', 'Remisión'],
        "Desctructoras": ['Destructora de papel', 'Lubricante de trituradoras'],
        "Sellos y Tintas": ['Foliador', 'Tinta para sello', 'Tinta para cheques', 'Tinta multiusos', 'Cojín para sello', 'Sellos'],
        "Pizarrones y Rotafolios": ['Pizzaron blanco', 'Tableros', 'Borrador', 'Rotafolio', 'Limpiador en spray', 'Limpiatipos', 'Rollo de corcho'],
        "Cintas, Etiquetas y Rotuladores": ['Rotulador', 'Cinta para máquina de escribir', 'Cinta para rotulador', 'Etiquetas para usos generales', 'Cintas', 'Etiquetas', 'Etiquetas CD', 'Etiquetas para impresión láser', 'Refuerzis de hojas'],
    };

    const subMenuPapel = {
        "Papel para Impresión": ['Papel bond blanco', 'Papel bond color'],
        "Papel Especializado": ['Papel Opalina', 'Papel stock', 'Papel fotográfico', 'Papel reciclado', 'Papel carbón', 'Cartulina Opalina', 'Rollo para calculadora'],
    };

    const subMenuTintasToners = {
        "Tintas": ['Tinta estándar', 'Tinta sólida', 'Tintas de alto formato'],
        "Toners": ['Toners de capacidad estándar', 'Toners de alta capacidad', 'Toners de extra alta capacidad', 'Toners de capacidad ultra alta'],
        "Rollos": ['Película de reemplzado', 'Rollo entintador para sumadora'],
        "Accesorios de impresión": ['Fusor', 'Revelador', 'Rodillo', 'Tambores, fotoconductores y fotoreceptores'],
        "Kit´s": ['Kit de mantenimiento', 'Kit de impresión', 'Kit para fax', 'Kit fotoconductor'],
    };

    const subMenuTecnologia = {
        "Cómputo": ['Laptops', 'Desktops', 'All in One', 'Tablets', 'Monitores'],
        "Impresión": ['Multifuncionales', 'Impresoras', 'Escáneres', 'Plotters', 'Rotuladores', 'Matriz de punto', 'Impresoras fotográficas', 'Accesorios de impresión'],
        "Teclado y Mouse": ['Teclados', 'Mouse', 'Teclado y Mouse'],
        "Proyectores": ['Accesorios para proyectores', 'Videoproyector'],
        "Audio": ['Audifonos', 'Diademas', 'Bocinas', 'Teatro en Casa', 'Minicomponente'],
        "Cámara y Vídeo": ['Cámaras Web', 'Cámaras digitales', 'Cámaras Réflex', 'Cámaras Deportivas', 'Accesorios para cámaras'],
        "Televisores": ['Pantalla LED', 'Streaming'],
        "DVDs y Blu-Rays": ['Blu-ray', 'Reproductor de DVD'],
        "Software": ['Antivirus', 'Sistema operativo', 'Paquetería', 'Control de asistencia y acceso'],
        "Telefonía": ['Télefono inalámbrico', 'Télefono Alámbrico', 'Accesorios para celular', 'Celulares'],
        "Energía": ['Power Bank', 'No Break', 'Regulador', 'Supresor de Picos'],
        "Seguridad": ['Cámaras', 'Kit de seguridad', 'DVR', 'Accesorios para cámara', 'Detectores de billetes falsos'],
        "Punto de Venta": ['Accesorios ', 'Miniprinter', 'Lector', 'Cajón para dinero'],
        "Pilas y Baterías": ['Pila alcalina', 'Pila recargable', 'Cargadores de pila', 'Pila de litio', 'Baterías'],
        "Línea Blanca": ['Aspiradora', 'Refrigeradores', 'Estufas', 'Lavadoras', 'Licuadoras', 'Batidoras', 'Exprimidores', 'Tostadoras', 'Hervidoras', 'Sandwicheras', 'Microondas', 'Ventiladores', 'Parrillas'],
        "VideoJuegos":  ['Volante', 'Controles', 'Videojuegos', 'Consolas'],
        "Salud y Belleza": ['Termómetros', 'Bascula', 'Oximetro'],
    };

    const subMenuAccesorios = {
        "Componentes de cómputo": ['Tarjetas madre', 'Procesadores', 'Fuente de poder', 'Quemadores', 'Gabinete', 'Discos duros externos', 'Discos duros internos', 'Cartucho de datos', 'Lectores de tarjetas', 'Tarjetas de interfaz', 'Docking Station', 'Unidad de estado solido'],
        "Memorias": ['Memorias USB', 'Memorias SD', 'Memorias RAM', 'Tarjetas micro SD'],
        "Pantallas": ['Pantalla para proyección', 'Filtros', 'Soportes'],
        "Ergonomía": ['Mousepad', 'Descansa muñecas', 'Descansa pies', 'Cojín lumbar'],
        "Estuche y Fundas": ['Fundas', 'Mochilas', 'Portafolios', 'Maletines'],
        "CD´S Y DVD´": ['CD', 'CD´s imprimibles', 'DVD´s', 'DVD´S imprimibles', 'BluRay'],
        "Bases": ['Bases para Laptop', 'Ventilador para PC', 'Base para monitor', 'Base para tabler', 'Base para documentos'],
        "Presentadores": ['Presentador láser', 'Apuntador láser'],
        "Conexiones": ['Cargadores', 'Convertidores', 'Adaptador', 'Cables', 'Extensor de rango inalámbrico', 'Router balanceador de carga', 'Access Point', 'Tarjeta de red', 'Plug', 'Switch', 'JACK', 'Bobina', 'Pinzas para red', 'KIT herramientas para computadora', 'Módulo wireless', 'HUB'],
        "Protección": ['Candados para Laptops'],
        "Limpieza y mantenimiento": ['Abrillantador', 'Cremas limpiadoras', 'Limpiador', 'Cartucho de limpieza', 'Alcohol', 'Toalla', 'Espuma', 'Aire comprimido', 'Kit de limpieza', 'Pastas térmicas'],
        "Equipamiento Electrónico": ['Racks'],
    };

    const subMenuMuebles = {
        "Escritorios y Mesas": ['Escritorios', 'Mesas'],
        "Sillas y Sillones": ['Silla operativa', 'Silla directiva', 'Silla ejecutiva', 'Silla ergonómica', 'Silla visita', 'Silla plegable'],
        "Archiveros": ['Archiveros verticales', 'Archiveros horizontales'],
        "Anaqueles y Libreros": ['Libreros', 'Anaquel metálico'],
        "Cajas Fuertes": ['Caja de seguridad', 'Caja para dinero'],
        "DESKO": ['Mamparas', 'Accesorios para mobiliario', 'Patas', 'Cubierta para mobiliario', 'Uniones para mobiliario'],
    };

    const subMenuTlapaleria = {
        "Herramientas": ['Juego de desarmadores', 'Martillo', 'Herramientras por pieza', 'Herramienta electrica', 'Juego de Pinzas'],
        "Electricidad": ['Placas', 'Extensión de uso rudo', 'Extensión doméstica', 'Supresor'],
        "Iluminación": ['Focos', 'Lámparas', 'Luminario'],
        "Industrial": ['Cascos de seguridad', 'Lentes de seguridad', 'Guantes de seguridad', 'Flexómetros', 'Chalecos de seguridad', 'Diablito', 'Lonas', 'Chincho sujetacables', 'Faja elástica', 'Cubrebocas', 'Rollos de burbuja', 'Cinta de aislar', 'Botiquín primeros auxilios'],
        "Candados": ['Candado cortina'],
        "Señalización": ['Letrero de precación', 'Letrero de instrucción'],
        "Hogar": ['Mangueras', 'Identificador', 'Salud', 'Chapas y perillas', 'Basculas'],
        "Pinturas": ['Pintura en aerosol'],
    };


    const subMenuLimpieza = {
        "Químicos": ['Detergente', 'Jabón líquido', 'Jabón de tocador', 'Jabón de lavanderia', 'Desinfectante', 'Cloro', 'Bicloro', 'Pino', 'Limpiavidrios', 'Líquido quitamanchas', 'Limpiador multiusos', 'Pastillas desodorantes', 'Gel antibacterial', 'Toallas antibacteriales', 'Aromatizantes', 'Insecticida'],
        "Higiénicos": ['Papel higiénico tradicional', 'Papel higiénico interdoblado', 'Papel higiénico en bobina', 'Servilleta tradicional', 'Servilleta Barra mesa', 'Servilleta interdoblada', 'Servitoalla', 'Toalla en rollo', 'Toalla interdobladas', 'Pañuelos faciales'],
        "Jarciería": ['Cepillos y Fibras', 'Cestos de basura', 'Cubetas y Jicaras', 'Cubeta con exprimidor', 'Escobas y mechudos', 'Jaladores de piso y vidrio', 'Franelas y jergas', 'Guantes de hule y látex', 'Bolsa de plástico', 'Recogedor', 'Plumero', 'Bomba para WC', 'Rodillo quitapelusas', 'MOP, repuestos y tratamiento', 'Atomizador', 'Rejillas y Tapetes para mingitorios', 'Rollo de espuma', 'Cofias', 'TELAS MULTIUSOS'],
        "Despachadores": ['Despachador de toalla para manos', 'Despachador de papel higiénico', 'Despachador de jabón líquido', 'Despachador de jabón en espuma'],
        "Ceras y aceites": ['Aceite para manos', 'Ceras', 'Abrillantador de muebles'],
    };

    const subMenuCateferia = {
        "Cafeteras": ['Cafetera comercial', 'Calentadores Eléctricos'],
        "Comida y Snacks": ['Snacks', 'Galletas'],
        "Café y té": [ 'Café', 'Té'],
        "Bebidas": ['Agua embotellada', 'Refresco'],
        "Azucar y sustitutos": ['Azúcar', 'Endulzante'],
        "Crema y Sustitutos": ['Sustituto de crema'],
        "Dispensador de Agua": ['Despachador de agua fría y caliente'],
        "Desachables": ['Plato desechable', 'Vaso desachable', 'Cucha desechable', 'Cuchillo desechable', 'Cono desechable', 'Tenedor desechable'],
    };

    const drawer = anchor => {
        let arr = menuName ? lista[menuName] : mainMenuListArr;
        const clickListener = text => {
            if (!menuName) { 
                return setLista(subMenuObj),setMenuName(text);
            } 
        //Con las sig 3 lineas se podría resumir todo el sig codigo pero no detecta el subMenuObj.
        //   } else {         
        //     return setLista('subMenu'+subMenu),setMenuName(text);
        //   }  
            else if(text === 'Papelería' || text === 'Cuardernos y Blocks' || text === 'Escritura' || text === 'Encuadernado y Engargolado' || text === 'Accesorios de Escritorio' || text === 'Clasificación y Organización' || text === 'Adhesivos' || text === 'Recorte' || text === 'Geometría' || text === 'Formatos' || text === 'Desctructoras' || text ==='Sellos y Tintas' || text === 'Pizarrones y Rotafolios' || text === 'Cintas, Etiquetas y Rotuladores'){
                return setLista(subMenuProductosOficina),setMenuName(text);
            }
            else if(text === 'Papel para Impresión' || text === 'Papel Especializado' ){
                return setLista(subMenuPapel),setMenuName(text);
            }
            else if(text === 'Tintas' || text === 'Toners' || text === 'Rollos' || text === 'Accesorios de impresión' || text === 'Kit´s'){
                return setLista(subMenuTintasToners),setMenuName(text);
            }
            else if(text === 'Cómputo' || text === 'Impresión' || text === 'Teclado y Mouse' || text === 'Proyectores' || text === 'Audio' || text === 'Cámara y Vídeo' || text === 'Televisores' || text === 'DVDs y Blu-Rays' || text === 'Software' || text === 'Telefonía' || text === 'Energía' || text === 'Seguridad' || text === 'Punto de Venta' || text === 'Pilas y Baterías' || text === 'Línea Blanca' || text === 'VideoJuegos' || text === 'Salud y Belleza'){
                return setLista(subMenuTecnologia),setMenuName(text);
            }
            else if(text === 'Componentes de cómputo' || text === 'Memorias' || text === 'Pantallas' || text === 'Ergonomía' || text === 'Estuche y Fundas' || text === 'CD´S Y DVD´S' || text === 'Bases' || text === 'Presentadores' || text === 'Conexiones' || text === 'Protección' || text === 'Limpieza y mantenimiento' || text === 'Equipamiento Electrónico'){
                return setLista(subMenuAccesorios),setMenuName(text);
            }
            else if(text === 'Escritorios y Mesas' || text === 'Sillas y Sillones' || text === 'Archiveros' || text === 'Anaqueles y Libreros' || text === 'Cajas Fuertes' || text === 'DESKO'){
                return setLista(subMenuMuebles),setMenuName(text);
            }
            else if(text === 'Herramientas' || text === 'Electricidad' || text === 'Iluminación' || text === 'Industrial' || text === 'Candados' || text === 'Señalización' || text === 'Hogar' || text === 'Pinturas'){
                return setLista(subMenuTlapaleria),setMenuName(text);
            }
            else if(text === 'Químicos' || text === 'Higiénicos' || text === 'Jarciería' || text === 'Despachadores' || text === 'Ceras y aceites'){
                return setLista(subMenuLimpieza),setMenuName(text);
            }
            else if(text === 'Cafeteras' || text === 'Comida y Snacks' || text === 'Café y té' || text === 'Bebidas' || text === 'Azucar y sustitutos' || text === 'Crema y Sustitutos' || text === 'Dispensador de Agua' || text === 'Desachables'){
                return setLista(subMenuCateferia),setMenuName(text);
            }
        };
        return (
          <div
            className={clsx(classes.list, {
              [classes.fullList]: anchor === "top" || anchor === "bottom"
            })}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
          >
            
              {arr.map((text, index) => (
                <List>
                    {(() => {
                        if(text === "Gomas" || text === "Sacapuntas" || text === "Clips" || text === "Pin" || text ==="Chinchetas" || text ==="Kit" || text === "Broche Baco" || text === "Sujetadocumentos" || text === "Grapas" || text === "Ligas de hule" || text === "Gafete" || text === "Broche para gafete" || text === "Calculadora" || text === "Dedales" || text === "Sumadoras"){
                            return  <ListItem button key={text}>
                                    <Link onClick={handleDrawerClose}
                                    to={{
                                    pathname: '/Busquedas',
                                    search: '?/PRODUCTOS-PARA-OFICINA/PAPELERIA/'+text.toUpperCase().replace(/\s+/g,'-').replace(/[\u0300-\u036f]/g, ""),
                                    state: {categoria: 'PRODUCTOS-PARA-OFICINA > PAPELERIA > '+text.toUpperCase().replace(/\s+/g,'-').replace(/[\u0300-\u036f]/g, "")}
                                    }}
                                    >
                                    <ListItemText primary={text}/>
                                    </Link>
                                </ListItem>
                            }else if(text === "Cuadernos" || text === "Block" || text === "Tarjeta multiusos" || text === "Libro flotere" || text === "Hojas de repuesto"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/CUADERNOS-Y-BLOCKS/'+text.toUpperCase().replace(/\s+/g,'-').replace(/[\u0300-\u036f]/g, ""),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > CUADERNOS-Y-BLOCKS > '+text.toUpperCase().replace(/\s+/g,'-').replace(/[\u0300-\u036f]/g, "")}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Bolígrafo" || text === "Bolígrafo tipo fuente" || text === "Bolígrafo Roller" || text === "Repuestos de bolígrafos" || text === "Lápiz de madera" || text === "Lapicero" || text ===  "Lápices de color" || text === "Puntillas" || text ===  "Crayolas y marcadores de cera" || text === "Marcadores y marcatextos" || text ===  "Plumones" || text === "Correctores" || text === "Gises" || text === "Repuestos de marcadores"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/ESCRITURA/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > ESCRITURA > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === 'Cubiertas' || text === "Cuadernos" || text === "Engargoladoras" || text === "Enmicadora" || text === "Gusanos y espirales" || text === "Micas"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/ENCUADERNADO-Y-ENGARGOLADO/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > ENCUADERNADO-Y-ENGARGOLADO > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === 'Charolas portadocumentos' || text === 'Engrapadoras y Desengrapadoras' || text === 'Despachador de notas adhesivas' || text === 'Organizador de escritorio' || text === 'Organizador de documentos' || text === 'Base para calendario' || text === 'Perforadoras y repuestos' || text === 'Portalápices' || text === 'Portaclips' || text === 'Revistero' || text === 'Notas adhesivas'){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/ACCESORIOS-DE-ESCRITORIO/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > ACCESORIOS-DE-ESCRITORIO > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Carpetas" || text === "Folders" || text === "Sobres" || text === "Portadocumentos" || text === "Cajas para archivos" || text === "Portablocks" || text === "Separadores y Guías" || text === "Protector de hojas" || text === "Protector de tarjetas de presentación" || text === "Tarjetero" || text === "Tabla sujetapapel" || text === "Agendas || text === calendarios y directorios" || text === "Señaladores y banderitas"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/CLASIFICACION-Y-ORGANIZACION/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > CLASIFICACION-Y-ORGANIZACION > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if( text ==="Lápiz adhesivo" || text === "Pegamento instantáneo" || text === "Pegamento líquido" || text === "Silicón líquido" || text === "Adhesivo en aerosol" || text === "Cuadros adhesivos" || text === "Cinta adhesiva de empaque" || text === "Cinta adhesiva masking tape" || text === "Cinta adhesiva de corte fácil" || text === "Cinta adhesiva invisible" || text === "Cinta adhesiva doble cara" || text === "Cinta adhesiva de montaje" || text === "Cinta adhesiva para ducto y filamento" || text === "Despachador para cinta" || text === "Pistola de silicón" || text === "Cinta adhesiva para libros" || text === "Cinta adhesiva mágica"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/ADHESIVOS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > ADHESIVOS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Cutters y repuestos" || text === "Guillotinas y repuestos" || text === "Tijeras"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/RECORTE/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > RECORTE > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Solicitud de empleo" || text === "Pagaré" || text === "Recibo de nómina" || text === "Póliza de cheque" || text === "Comprobante de gastos" || text === "Polizas de ingreso y egreso" || text === "Contrarecibo" || text === "Vales de caja" || text === "Carta Poder" || text === "Hoja de trabajo" || text === "Remisión"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/FORMATOS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > FORMATOS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === 'Destructora de papel' || text === 'Lubricante de trituradoras'){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/DESTUCTORAS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > DESTUCTORAS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Foliador" || text ===  "Tinta para sello" || text ===  "Tinta para cheques" || text ===  "Tinta multiusos" || text ===  "Cojín para sello" || text ===  "Sellos"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/SELLOS-Y-TINTAS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > SELLOS-Y-TINTAS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Pizzaron blanco" || text === "Tableros" || text === "Borrador" || text === "Rotafolio" || text === "Limpiador en spray" || text === "Limpiatipos" || text === "Rollo de corcho"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/PIZARRONES-Y-ROTAFOLIOS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > PIZARRONES-Y-ROTAFOLIOS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Rotulador" || text === "Cinta para máquina de escribir" || text === "Cinta para rotulador" || text === "Etiquetas para usos generales" || text === "Cintas" || text === "Etiquetas" || text === "Etiquetas CD" || text === "Etiquetas para impresión láser" || text === "Refuerzis de hojas"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/CINTAS--ETIQUETAS-Y-ROTULADORES/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > CINTAS--ETIQUETAS-Y-ROTULADORES > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Papel bond blanco" || text === "Papel bond color"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PAPEL/PAPEL-PARA-IMPRESION/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PAPEL > PAPEL-PARA-IMPRESION > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Papel Opalina" || text === "Papel stock" || text === "Papel fotográfico" || text === "Papel reciclado" || text === "Papel carbón" || text === "Cartulina Opalina" || text === "Rollo para calculadora"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/PRODUCTOS-PARA-OFICINA/ENCUADERNADO-Y-ENGARGOLADO/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'PRODUCTOS-PARA-OFICINA > ENCUADERNADO-Y-ENGARGOLADO > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Tinta estándar" || text === "Tinta sólida" || text === "Tintas de alto formato"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TINTAS-Y-TONERS/TINTAS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TINTAS-Y-TONERS > TINTAS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Toners de capacidad estándar" || text === "Toners de alta capacidad" || text === "Toners de extra alta capacidad" || text === "Toners de capacidad ultra alta"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TINTAS-Y-TONERS/TONERS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TINTAS-Y-TONERS > TONERS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Película de reemplzado" || text === "Rollo entintador para sumadora"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TINTAS-Y-TONERS/ROLLOS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TINTAS-Y-TONERS > ROLLOS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Fusor" || text === "Revelador" || text === "Rodillo" || text === "Tambores" || text === "fotoconductores y fotoreceptores"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TINTAS-Y-TONERS/ACCESORIOS-DE-IMPRESION/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TINTAS-Y-TONERS > ACCESORIOS-DE-IMPRESION > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Kit de mantenimiento" || text === "Kit de impresión" || text === "Kit para fax" || text === "Kit fotoconductor"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TINTAS-Y-TONERS/KITS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TINTAS-Y-TONERS > KITS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Laptops" || text === "Desktops" || text === "All in One" || text === "Tablets" || text === "Monitores"){
                               return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TECNOLOGIA/COMPUTO/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TECNOLOGIA > COMPUTO > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                        </ListItem>
                            }else if(text === "Multifuncionales" || text === "Impresoras" || text === "Escáneres" || text === "Plotters" || text === "Rotuladores" || text === "Matriz de punto" || text === "Impresoras fotográficas" || text === "Accesorios de impresión"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TECNOLOGIA/IMPRESION/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TECNOLOGIA > IMPRESION > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Teclados" || text === "Mouse" || text === "Teclado y Mouse"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/TECLADO-Y-MOUSE/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > TECLADO-Y-MOUSE > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                             >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Accesorios para proyectores" || text === "Videoproyector"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/PROYECTORES/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > PROYECTORES > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                             >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Audifonos" || text === "Diademas" || text === "Bocinas" || text === "Teatro en Casa" || text === "Minicomponente"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/AUDIO/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > AUDIO > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                             >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Cámaras Web" || text === "Cámaras digitales" || text === "Cámaras Réflex" || text === "Cámaras Deportivas" || text === "Accesorios para cámaras"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/CAMARA-Y-VIDEO/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > CAMARA-Y-VIDEO > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === 'Pantalla LED' || text === 'Streaming'){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/TELEVISIONES/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > TELEVISIONES > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Blu-ray" || text === "Reproductor de DVD"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/DVDS-Y-BLU-RAYS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > DVDS-Y-BLU-RAYS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Antivirus" || text === "Sistema operativo" || text === "Paquetería" || text === "Control de asistencia y acceso"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/SOFTWARE/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > SOFTWARE > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Télefono inalámbrico" || text === "Télefono Alámbrico" || text === "Accesorios para celular" || text === "Celulares"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/TELEFONIA/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > TELEFONIA > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Power Bank" || text === "No Break" || text === "Regulador" || text === "Supresor de Picos"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/ENERGIA/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > ENERGIA > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Cámaras" || text === "Kit de seguridad" || text === "DVR" || text === "Accesorios para cámara" || text === "Detectores de billetes falsos"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/SEGURIDAD/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > SEGURIDAD > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Accesorios " || text === "Miniprinter" || text === "Lector" || text === "Cajón para dinero"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/PUNTO-DE-VENTA/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > PUNTO-DE-VENTA > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Pila alcalina" || text === "Pila recargable" || text === "Cargadores de pila" || text === "Pila de litio" || text === "Baterías"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/PILAS-Y-BATERIAS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > PILAS-Y-BATERIAS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Aspiradora" || text === "Refrigeradores" || text === "Estufas" || text === "Lavadoras" || text === "Licuadoras" || text === "Batidoras" || text === "Exprimidores" || text === "Tostadoras" || text === "Hervidoras" || text === "Sandwicheras" || text === "Microondas" || text === "Ventiladores" || text === "Parrillas"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/LINEA-BLANCA/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > LINEA-BLANCA > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Volante" || text === "Controles" || text === "Videojuegos" || text === "Consolas"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/VIDEOJUEGOS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > VIDEOJUEGOS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Termómetros" || text === "Bascula" || text === "Oximetro"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/TECNOLOGIA/SALUD-Y-BELLEZA/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'TECNOLOGIA > SALUD-Y-BELLEZA > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Tarjetas madre" || text === "Procesadores" || text === "Fuente de poder" || text === "Quemadores" || text === "Gabinete" || text === "Discos duros externos" || text === "Discos duros internos" || text === "Cartucho de datos" || text === "Lectores de tarjetas" || text === "Tarjetas de interfaz" || text === "Docking Station" || text === "Unidad de estado solido"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/ACCESORIOS/COMPONENTES-DE-COMPUTO/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'ACCESORIOS > COMPONENTES-DE-COMPUTO > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Memorias USB" || text === "Memorias SD" || text === "Memorias RAM" || text === "Tarjetas micro SD"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/ACCESORIOS/MEMORIAS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'ACCESORIOS > MEMORIAS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Pantalla para proyección" || text === "Filtros" || text === "Soportes"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/ACCESORIOS/PANTALLAS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'ACCESORIOS > PANTALLAS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Mousepad" || text === "Descansa muñecas" || text === "Descansa pies" || text === "Cojín lumbar"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/ACCESORIOS/ERGONOMIA/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'ACCESORIOS > ERGONOMIA > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Fundas" || text === "Mochilas" || text === "Portafolios" || text === "Maletines"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/ACCESORIOS/ESTUCHE-Y-FUNDAS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'ACCESORIOS > ESTUCHE-Y-FUNDAS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "CD" || text === "CD´s imprimibles" || text === "DVD´s" || text === "DVD´S imprimibles" || text === "BluRay"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/ACCESORIOS/CDS-Y-DVDS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'ACCESORIOS > CDS-Y-DVDS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Bases para Laptop" || text === "Ventilador para PC" || text === "Base para monitor" || text === "Base para tabler" || text === "Base para documentos"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/ACCESORIOS/BASES/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'ACCESORIOS > BASES > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Presentador láser" || text === "Apuntador láser"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/ACCESORIOS/PRESENTADORES/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'ACCESORIOS > PRESENTADORESS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Cargadores" || text === "Convertidores" || text === "Adaptador" || text === "Cables" || text === "Extensor de rango inalámbrico" || text === "Router balanceador de carga" || text === "Access Point" || text === "Tarjeta de red" || text === "Plug" || text === "Switch" || text === "JACK" || text === "Bobina" || text === "Pinzas para red" || text === "KIT herramientas para computadora" || text === "Módulo wireless" || text === "HUB"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/ACCESORIOS/CONEXIONES/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'ACCESORIOS > CONEXIONES > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Candados para Laptops"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/ACCESORIOS/PROTECCIÓN/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'ACCESORIOS > PROTECCIÓN > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Abrillantador" || text === "Cremas limpiadoras" || text === "Limpiador" || text === "Cartucho de limpieza" || text === "Alcohol" || text === "Toalla" || text === "Espuma" || text === "Aire comprimido" || text === "Kit de limpieza" || text === "Pastas térmicas"){
                                return <ListItem button key={text}>
                                                <Link onClick={handleDrawerClose}
                                                to={{
                                                pathname: '/Busquedas',
                                                search: '?/ACCESORIOS/LIMPIEZA-Y-MANTENIMIENTO/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                                state: {categoria: 'ACCESORIOS > LIMPIEZA-Y-MANTENIMIENTO > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                                }}
                                                >
                                             <ListItemText primary={text}/>
                                             </Link>
                                         </ListItem>
                             }else if(text === "Racks"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/ACCESORIOS/EQUIPAMIENTO-ELECTRONICO/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'ACCESORIOS > EQUIPAMIENTO-ELECTRONICO > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Escritorios" || text === "Mesas"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/MUEBLES/ESCRITORIOS-Y-MESAS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'MUEBLES > ESCRITORIOS-Y-MESAS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Silla operativa" || text === "Silla directiva" || text === "Silla ejecutiva" || text === "Silla ergonómica" || text === "Silla visita" || text === "Silla plegable" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/MUEBLES/SILLAS-Y-SILLONES/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'MUEBLES > SILLAS-Y-SILLONES > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Archiveros verticales" || text === "Archiveros horizontales" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/MUEBLES/ARCHIVEROS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'MUEBLES > ARCHIVEROS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Libreros" || text === "Anaquel metálico" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/MUEBLES/ANAQUELES-Y-LIBREROS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'MUEBLES > ANAQUELES-Y-LIBREROS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Caja de seguridad" || text === "Caja para dinero" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/MUEBLES/CAJAS-FUERTES/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'MUEBLES > CAJAS-FUERTES > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Mamparas" || text === "Accesorios para mobiliario" || text === "Patas" || text === "Cubierta para mobiliario" || text === "Uniones para mobiliario" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/MUEBLES/DESKO/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'MUEBLES > DESKO > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Juego de desarmadores" || text === "Martillo" || text === "Herramientras por pieza" || text === "Herramienta electrica" || text === "Juego de Pinzas" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TLAPALERIA/HERRAMIENTAS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TLAPALERIA > HERRAMIENTAS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Placas" || text === "Extensión de uso rudo" || text === "Extensión doméstica" || text === "Supresor" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TLAPALERIA/ELECTRICIDAD/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TLAPALERIA > ELECTRICIDAD > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Focos" || text === "Lámparas" || text === "Luminario" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TLAPALERIA/ILUMINACION/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TLAPALERIA > ILUMINACION > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Cascos de seguridad" || text === "Lentes de seguridad" || text === "Guantes de seguridad" || text === "Flexómetros" || text === "Chalecos de seguridad" || text === "Diablito" || text === "Lonas" || text === "Chincho sujetacables" || text === "Faja elástica" || text === "Cubrebocas" || text === "Rollos de burbuja" || text === "Cinta de aislar" || text === "Botiquín primeros auxilios" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TLAPALERIA/INDUSTRIAL/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TLAPALERIA > INDUSTRIAL > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Candado cortina" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TLAPALERIA/CANDADOS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TLAPALERIA > CANDADOS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Letrero de precación" || text === "Letrero de instrucción" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TLAPALERIA/SENALIZACION/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TLAPALERIA > SENALIZACION > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Mangueras" || text === "Identificador" || text === "Salud" || text === "Chapas y perillas" || text === "Basculas" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TLAPALERIA/HOGAR/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TLAPALERIA > HOGAR > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Pintura en aerosol" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/TLAPALERIA/PINTURAS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'TLAPALERIA > PINTURAS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Detergente" || text === "Jabón líquido" || text === "Jabón de tocador" || text === "Jabón de lavanderia" || text === "Desinfectante" || text === "Cloro" || text === "Bicloro" || text === "Pino" || text === "Limpiavidrios" || text === "Líquido quitamanchas" || text === "Limpiador multiusos" || text === "Pastillas desodorantes" || text === "Gel antibacterial" || text === "Toallas antibacteriales" || text === "Aromatizantes" || text === "Insecticida" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/LIMPIEZA/QUIMICOS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'LIMPIEZA > QUIMICOS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Papel higiénico tradicional" || text === "Papel higiénico interdoblado" || text === "Papel higiénico en bobina" || text === "Servilleta tradicional" || text === "Servilleta Barra mesa" || text === "Servilleta interdoblada" || text === "Servitoalla" || text === "Toalla en rollo" || text === "Toalla interdobladas" || text === "Pañuelos faciales"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/LIMPIEZA/HIGIENICOS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'LIMPIEZA > HIGIENICOS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Cepillos y Fibras" || text === "Cestos de basura" || text === "Cubetas y Jicaras" || text === "Cubeta con exprimidor" || text === "Escobas y mechudos" || text === "Jaladores de piso y vidrio" || text === "Franelas y jergas" || text === "Guantes de hule y látex" || text === "Bolsa de plástico" || text === "Recogedor" || text === "Plumero" || text === "Bomba para WC" || text === "Rodillo quitapelusas" || text === "MOP || text === repuestos y tratamiento" || text === "Atomizador" || text === "Rejillas y Tapetes para mingitorios" || text === "Rollo de espuma" || text === "Cofias" || text === "TELAS MULTIUSOS"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/LIMPIEZA/JARCERIA/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'LIMPIEZA > JARCERIA > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Despachador de toalla para manos" || text === "Despachador de papel higiénico" || text === "Despachador de jabón líquido" || text === "Despachador de jabón en espuma" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/LIMPIEZA/DESPACHADORES/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'LIMPIEZA > DESPACHADORES > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Aceite para manos" || text === "Ceras" || text === "Abrillantador de muebles"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/LIMPIEZA/CERAS-Y-ACEITES/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'LIMPIEZA > CERAS-Y-ACEITES > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Cafetera comercial" || text === "Calentadores Eléctricos" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/CAFETERIA/CAFETERAS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'CAFETERIA > CAFETERAS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Snacks" || text === "Galletas" ){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/CAFETERIA/COMIDA-Y-SNACKS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'CAFETERIA > COMIDA-Y-SNACKS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Café" || text === "Té"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/CAFETERIA/CAFE-Y-TE/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'CAFETERIA > CAFE-Y-TE > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Agua embotellada" || text === "Refresco"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/CAFETERIA/BEBIDAS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'CAFETERIA > BEBIDAS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Azúcar" || text === "Endulzante"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/CAFETERIA/AZUCAR-Y-SUSTITUTOS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'CAFETERIA > AZUCAR-Y-SUSTITUTOS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Sustituto de crema"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/CAFETERIA/CREMA-Y-SUSTITUTOS/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'CAFETERIA > CREMA-Y-SUSTITUTOS > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Despachador de agua fría y caliente"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/CAFETERIA/DISPENSADOR-DE-AGUA/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'CAFETERIA > DISPENSADOR-DE-AGUA > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else if(text === "Plato desechable" || text === "Vaso desachable" || text === "Cucha desechable" || text === "Cuchillo desechable" || text === "Cono desechable" || text === "Tenedor desechable"){
                                return <ListItem button key={text}>
                                            <Link onClick={handleDrawerClose}
                                            to={{
                                            pathname: '/Busquedas',
                                            search: '?/CAFETERIA/DESECHABLES/'+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-'),
                                            state: {categoria: 'CAFETERIA > DESECHABLES > '+text.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g,'-')}
                                            }}
                                            >
                                            <ListItemText primary={text}/>
                                            </Link>
                                         </ListItem>
                             }else {
                                return  <ListItem button key={text} onClick={() => clickListener(text)}>
                                            <ListItemText primary={text} />
                                            {!menuName}
                                        </ListItem>   
                            }
                    })()}
                </List>
              ))}
            
          </div>
        );
      };

      function CerrarSesion(){
        setLogged(false);
        localStorage.setItem('Usu_Nomb', '')
        localStorage.setItem('Cliente', 0)
        localStorage.setItem('Favoritos', 0)
        localStorage.setItem('SesPartidas', 0)
        localStorage.setItem('Token', '')
        localStorage.setItem('Login', 'NO')
        localStorage.setItem('Email', '')
        localStorage.setItem('Usuario', 0)
        localStorage.setItem('afiliado', '')
        ruter.push("/Home")
    }
  
    function searchBoxSubmit(e){
        e.preventDefault();
        var busquedaUrl = inputs.query;
        var busquedaUrl1 = busquedaUrl.replace(/\s+/g,'+'); 
        ruter.push({
        pathname: '/busquedas',
        query: {query: inputs.query },
        })
    }

    const menuId = 'primary-search-account-menu';
    const menuLogin = (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            keepMounted
            open={isMenuOpen}
            onClose={handleMenuClose}
            PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <div>
                <MenuItem onClick={handleMenuClose}><Link href="/MisDatos">Mis Datos</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link href="/misPedidos">Pedidos</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link href="/Direcciones">Direcciones</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link href="/misFacturas">Facturas</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link href="/misFavoritos">Favoritos</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link href="/misNotasCredito">Notas de Credito</Link></MenuItem>
                <Divider />
                <MenuItem onClick={() => (handleMenuClose(), CerrarSesion())}>Salir</MenuItem>
            </div>
        </Menu>
    );


    const menuLogout = (
        <Menu
        anchorEl={anchorEl}
        id={menuId}
        keepMounted
        open={isMenuOpen}
        onClose={handleMenuClose}
		PaperProps={{
			elevation: 0,
			sx: {
			  overflow: 'visible',
			  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
			  mt: 1.5,
			  
			},
		}}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <div>
                <MenuItem onClick={handleMenuClose} ><Link href="/Login">Iniciar Sesión</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link href="/RegistroUsuario">Crear Cuenta</Link></MenuItem>
            </div>

        </Menu>
    );


	return (
		<>
            <HelpModal isOpen={openModal} onClose={handleOpenModal} />
			<AppBar position='sticky' sx={{backgroundColor:'#ffffff',}}>
				<Toolbar className={content}>
					<Box component={'div'} alignItems={'center'} display='flex'>
						<Hidden smDown={true}>
							{/* Crear una variante del logo que sea adaptable / Por
							ejemplo una "p" para esos casos de usos */}
                            <Link href="/Home">
                                <a>
                                    <img
                                        className={logo}
                                        src={logoUrl}
                                        alt='logo pedidos'
                                    />
                                </a>
                            </Link>
						</Hidden>
						<Box component={'span'} marginLeft='2%'>
							<IconButton onClick={toggleDrawer("left", true)}>
								<img
									className={iconhca}
									src='https://pedidos.com/myfotos/pedidos-com/pagina/header/catego.svg'
									alt='categories'
								/>
							</IconButton>
						</Box>
						<Hidden smDown={true}>
							<Box component={'span'} padding={'1rem'}>
								<Typography color="textPrimary">Categorías</Typography>
							</Box>
						</Hidden>
					</Box>
					{/* <Hidden smDown='hide'> */}
					<Hidden smDown='hide'>
						<Box width='30%'>
                        <form onSubmit={searchBoxSubmit}>
							<TextField
								size='small'
								id='outlined-basic'
								fullWidth
								// label='Outlined'
								variant='outlined'
								placeholder='Buscar..'
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<SearchIcon />
										</InputAdornment>
									),
								}}
                                name="query"
                                onChange={handleChange}
							/>
                        </form>    
						</Box>
					</Hidden>

					<Box
						display={'flex'}
						flexDirection='row'
						alignItems={'center'}
						justifyContent='center'
						flexWrap='nowrap'
						component={'div'}>
						{/* This inline styles is temporaly, when add link router component, remove */}
						<Hidden smDown={true}>
							<Box
								component={'span'}
								style={{ cursor: 'pointer' }}>
								<Typography component='span' color="textPrimary">Para </Typography>
								<Typography component='span' color='primary'>
									empresas
								</Typography>
							</Box>
						</Hidden>

						<Box component={'span'}>
							<IconButton onClick={handleClick}>
                                <Badge badgeContent={isLogged ? Favoritos : null} color="secondary">
                                    <Link href="/misFavoritos"><FavoriteBorder /></Link>
                                </Badge>
							</IconButton>
							<Menu
								anchorEl={anchorEl}
								keepMounted
								open={openMenu}
								onClose={handleClose}>
								<Box padding={'1em'}>
									{/* <MenuItem onClick={handleClose}> */}
									<Typography
										variant='subtitle2'
										align='center'>
										Aún no tienes favoritos
									</Typography>
									{/* </MenuItem> */}
									<Divider />
									<Box
										paddingTop={'1em'}
										display='flex'
										alignItems='center'
										flexDirection={'column'}>
										<IconButton>
											<FavoriteBorder fontSize='large' />
										</IconButton>
										<Typography>
											Iniciar sesión para añadir
										</Typography>
									</Box>
								</Box>
							</Menu>
							<div ref={anchorEl} id='menu'></div>
						</Box>
						<IconButton onClick={handleOpenModal}>
                                <HelpOutlineIcon />
						</IconButton>
						<IconButton color='primary'>
                            <Badge badgeContent={isLogged ? sesPartidas : null} color="secondary">
                                <Link href="/checkout/verifica-pedido"><ShoppingCartIcon /></Link>
                            </Badge>
						</IconButton>
					</Box>
					<Box>
                        {isLogged 
                        ?<IconButton size="large" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen}><Avatar sx={{ width: 32, height: 32 }}>{nombre.substring(0,2)}</Avatar></IconButton>
                        :<Button variant='contained' color='primary' aria-controls={menuId}  onClick={handleProfileMenuOpen}>
                        Ingresar
                        </Button>}
					</Box>
				</Toolbar>
				<Hidden mdUp={true}>
					<Box mt={'1rem'}>
						<TextField
							size='medium'
							id='outlined-basic'
							fullWidth
							variant='outlined'
							placeholder='Buscar..'
							InputProps={{
								endAdornment: (
									<InputAdornment position='start'>
										<SearchIcon />
									</InputAdornment>
								),
							}}
						/>
					</Box>
				</Hidden>
			</AppBar>

            <Drawer
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
            >
                {menuName 
                ? 
                <div className={classes.drawerHeader}>
                <ListItem button onClick={() => setMenuName(null)}>
                    <ListItemText primary="Regresar" style={{color: 'orange'}}/>
                </ListItem>
                <Divider />
                <h3>{menuName}</h3>
                </div>
                :<h3> CATEGORIAS</h3>}
                
                {drawer("left")}
            </Drawer>


            {isLogged ? menuLogin : menuLogout}
		</>
	);
}
