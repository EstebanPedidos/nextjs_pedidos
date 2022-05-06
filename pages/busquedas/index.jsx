import React, {useState, useEffect} from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, 
        RefinementList, 
        Breadcrumb,
        connectSearchBox,
        SearchBox,  
        Hits,
        Highlight,
        ToggleRefinement, 
        Stats, 
        Pagination, 
        connectHitInsights , 
        HierarchicalMenu,
        Configure, 
        RangeInput,
        Panel, 
        DynamicWidgets } 
        from 'react-instantsearch-dom';
import {Box, Grid, Paper, Typography,
    Button, Select, TextField, Divider, 
    Card, CardContent, CardMedia, FormControl, InputLabel, MenuItem  } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';
import 'styles/Algolia.module.css';

//Componentes
import { Layout } from 'layout/Layout';

//NextJs
import { useRouter } from 'next/router'
import Link from 'next/link'

    const searchClient = algoliasearch(
    '12YTHFXXB5',
    '235f66e4531637d52c48f4a91ad6fa3f'
    );

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    
  },
  stats: {
    display: theme.none,
  },
  resultado: {
    display: theme.none,
  },
opacityBox: {
    opacity:'0.6',
},

bgcontent:{backgroundImage: 'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)'},
BoxMsi: {
    padding: '8px',
    height: '7.5rem',
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  rootCard:{ 
  flexWrap: 'wrap',
  '& > *': {
    marginBottom: theme.spacing(4),

  },
},
rootCardI:{ 
    boxShadow: '0px 0px 16px rgb(195 203 214 / 16%), 0px 1px 4px rgb(195 203 214 / 16%)',
},
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '2 0 auto',
    textDecoration:"none",
    
  },
  cover: {
    width: 180,
    margin: 'auto',
    justifyContent: 'center',
  },
  productContent: {
    display: 'flex',
    alignItems: 'center',
   
    color:  theme.palette.text.primary, 
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  productLink: {
    textDecoration:'none',
    color:  theme.palette.text.primary, 
  },
  hitsgeneral:{listStyleType: 'none' ,textDecoration:"none",color:  theme.palette.text.primary},
  aisHitslist:{listStyleType: 'none',},
  hitPrice:{fontWeight: '600',},
  CTAlink:{
    textDecoration:"none",
    color:  theme.palette.common.white, 
  },
  tagFreeShipping:{
    width:'auto',
    padding: '8px',
    borderRadius:'5px',
    marginRight: theme.spacing(1),
    border:"none",
    backgroundColor: 'rgb(230 245 236 / 96%)'
  },
  tagExpresshipping:{
    width:'auto',
    padding: '8px',
    borderRadius:'5px',
    border:"none",
    backgroundColor: 'rgba(231, 236, 243, 1)'
  },
 
}));


export default function Busquedas(props) {
  const classes = useStyles();

  const router = useRouter()
  const url = router.query.query;
// const { url } = 'lapiz';

  const [index, setIndex] = React.useState('Pedidos');
  const [filtros, setFiltros] = React.useState(false);
  const ruter = useRouter() 


  useEffect( () => {

  }, [router])  

  const handleChange = (event) => {
    setIndex(event.target.value);
  };

//   const resultado = props.location.state.query;


  return(
    <Layout>
    <div className={classes.bgcontent}>
        <InstantSearch 
            indexName={index}
            searchClient={searchClient}
        >
            <div className={classes.root}>
                <Grid container direction="row" justifyContent="center" alignItems="flex-start" >
                    <Grid item xs={12} sm={12}>
                        <Box component="div" px={4} pt={4} className={classes.root}>
                            <Grid container direction="row" justifyContent="space-between" alignItems="flex-end" spacing={2}>
                                <Grid item xs={12} sm={12} lg={6}>
                                    <Box component="div">
                                        <Typography variant="h3" component="h1" sx={{fontWeight:'500'}}>{url}</Typography>
                                        <Typography variant="subtitle1">
                                        <Stats
                                        translations={{
                                            stats(nbHits) {
                                            return  nbHits > 1
                                            ? `${nbHits} Resultados`
                                            : ''
                                            },
                                        }}
                                        />
                                        </Typography>
                                        {/* NOTA: Lo siguiente que requiere? */}
                                        <div style={{ display: 'none' }}>
                                            <SearchBox defaultRefinement={url}/>
                                        </div>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} lg={3}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Paper elevation={4} className={classes.BoxMsi}>
                                            <Typography variant="overline" display="block">Hasta</Typography>
                                                <Typography  component="body1" variant="h4" sx={{fontWeight:'600'}}><Typography component="span" variant="h4" color="primary">18</Typography> MSI</Typography>
                                                <Typography variant="caption" display="block" gutterBottom color="textSecondary">Meses sin Intereses*</Typography>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Paper elevation={4} className={classes.BoxMsi}> 
                                                <Typography variant="overline" display="block">Hasta</Typography>
                                                <Typography component="body1" variant="h4" sx={{fontWeight:'600'}}><Typography component="span" variant="h4" color="primary">24</Typography> MSI*</Typography>
                                                <Typography variant="caption" display="block" gutterBottom color="textSecondary">con CitiBanamex</Typography>
                                            </Paper>
                                        </Grid>
                                    </Grid>  
                                </Grid>
                                <Grid item xs={6} sm={6} lg={3} >
                                    <FormControl fullWidth>
                                    <InputLabel id="select-helper">Ordenar por:</InputLabel>
                                    <Select variant="outlined"
                                        label-Id="select-helper-label"
                                        label="Ordenar Por"
                                        id="select-helper"
                                        value={index}
                                        onChange={handleChange}
                                        displayEmpty
                                        className={classes.selectEmpty}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                        <MenuItem value="Pedidos_Mas_Vendido">
                                        <em>Más Vendido</em>
                                        </MenuItem>
                                        <MenuItem value="Pedidos">Sugerido</MenuItem>
                                        <MenuItem value="Pedidos_Precio_asc">Precio  Menor a Mayor</MenuItem>
                                        <MenuItem value="Pedidos_Precio_desc">Precio Mayor a Menor</MenuItem>
                                    </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Box mb={4}>
                                <Box my={2}>
                                    <Breadcrumb
                                        attributes={[
                                        'LINEA_NEG',
                                        'COD_FAMILIA',
                                        'COD_SUBFAMILIA'
                                        ]}
                                        separator={('separator', ' > ')}
                                        rootURL="/Home"
                                    />
                                    <div style={{ display: 'none' }}>
                                    <HierarchicalMenu  
                                        attributes={[
                                        'LINEA_NEG',
                                        'COD_FAMILIA',
                                        'COD_SUBFAMILIA'
                                        ]}
                                    />
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                        {/* <Box component="div" textAlign="center" pb={4}>
                            <Divider variant="middle" />
                        </Box> */}
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Box className="left-panel" textAlign="left">
                        <Box component="div" textAlign="left" px={4} py={1}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                                <ToggleRefinement 
                                    color="primary"
                                    attribute="DISPONIBILIDAD"
                                    label="Disponibilidad"
                                    value={true}
                                    
                                />
                            </Typography>
                        </Box>
                        <Box component="div" textAlign="left" px={4} py={1}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                                <ToggleRefinement
                                    attribute="ENVIO_GRATIS"
                                    label="Envío Gratis"
                                    value={true}
                                />
                            </Typography>
                        </Box>
                        <Box component="div" textAlign="left" px={4} py={1}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                                <ToggleRefinement
                                    attribute="APLICA_EXPRESS"
                                    label="Entrega Express"
                                    value={true}
                                />
                            </Typography>  
                        </Box>
                        <Box component="div" textAlign="left" px={4} py={1}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}}>
                                <ToggleRefinement
                                    attribute="REGALO"
                                    label="Con Regalo"
                                    value={true}
                                />
                            </Typography>
                        </Box>
                        <Box sx={{margin:"1rem 0"}}>
                        <Divider />
                        </Box>

                        
                        <Box component="div" px={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >Marca</Typography>
                            <RefinementList
                                attribute="MARCA"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Precio
                            </Typography>
                            <RangeInput 
                            attribute="PRECIO" 
                            translations={{
                                submit: 'Consultar',
                                separator: ' - ',
                            }}/>
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Pulgadas
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.PULGADAS"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        
                        <Box component="div" textAlign="left" p={4}>
                        <Panel header="PROCESADOR">
                            <RefinementList 
                                attribute="FILTROS.PROCESADOR"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                                
                            />
                        </Panel>
                        </Box> 
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Sistema Operativo
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.SISTEMA OPERATIVO"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Tipo de Impresión
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.TIPO DE IMPRESION"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Tipo
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.TIPO"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Tamaño
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.TAMAÑO"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Tamaño
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.TAMAÑO 2"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Almacenamiento
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.ALMACENAMIENTO"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Capacidad
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.CAPACIDAD"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Interfaz
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.INTERFAZ"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Medidas
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.MEDIDAS"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Tipo de arillo
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.TIPO DE ARILLO"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Material
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.MATERIAL"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Caja con
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.CAJA CON"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Piezas
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.PIEZAS"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Voltaje
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.VOLTAJE"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Tipo de entrada
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.TIPO DE ENTRADA"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Tipo de conexión
                            </Typography>
                            
                            <RefinementList 
                                attribute="FILTROS.TIPO DE CONEXIÓN"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Color
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.COLOR"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Tipo de punta 
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.TIPO DE PUNTA"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Orificios
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.ORIFICIOS"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Forma
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.FORMA"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Número
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.NUMERO"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Box component="div" textAlign="left" p={4}>
                            <Typography variant="subtitle1" component="h2" sx={{fontWeight:'600'}} >
                            Posición
                            </Typography>
                            <RefinementList 
                                attribute="FILTROS.POSICIÓN"
                                limit={3}
                                showMoreLimit={15}
                                showMore={true}
                            />
                        </Box>
                        <Configure hitsPerPage={20} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                            <Stats
                            translations={{
                                stats(nbHits) {
                                return  nbHits > 1
                                ? <Box px={2} className="right-panel">
                                <Hits className={classes.hitsgeneral} hitComponent={Hit} component="div" sx={{ listStyleType:'none'}} />
                            </Box>
                            :   
                            <Box component="div" mx="auto" py={8} className={classes.opacityBox}>
                                    <Box component="div" width="28%" mx="auto" py={4}>
                                        <img src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/page-info/notfound.svg" alt="Sin resutado de busquedas" />
                                    </Box>
                                    <Box component="div" textAlign="center">
                                        <Typography component="h3" variant="h4">No encontramos "{url}"</Typography>
                                        <Typography component="p" variant="subtitle1">Intente con un término de búsqueda diferente o contáctanos para ayudarte.</Typography>
                                    </Box>
                            </Box>
                            },
                            }}
                            />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box component="div" textAlign="center" mx="auto" py={4}>  
                            <Pagination 
                            showFirst={true}
                            showLast={true}
                            showPrevious={true}
                            showNext={true}
                            className="pagination"/>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <Configure clickAnalytics />
        </InstantSearch>
    </div>
    </Layout>
    
  );

    function Hit( props ) {

        let button; 
        if (props.hit.STOCK) {
        button = 
        <Link href={`/articulos/${props.hit.URL}`} className={classes.CTAlink} >
            <a>
            <Button variant="contained" size="large" color="secondary" fullWidth >
            Comprar
            </Button>
            </a>
        </Link>
        } else {
        button = <Button variant="outlined" size="large" fullWidth disableElevation disabled>
                    Agotado
                </Button>;
        }
    
    return (
      <Box className={classes.rootCard}>
          <Card elevation={0} className={classes.rootCardI}>
              <Box py={2} px={2} component="div" className={classes.root}>
                <Grid container   direction="row" justifyContent="space-around" alignItems="center" spacing={3}>
                  <Grid item xs={12} sm={4} lg={4} justify="center">
                    <Link href={`/articulos/${props.hit.URL}`}>  
                        <a>
                        <CardMedia
                            className={classes.cover}
                            component="img"
                            alt={props.hit.ITEM_NUM}
                            height="180"
                            image={"https://pedidos.com/myfotos/large/(L)" + props.hit.ITEM_NUM + ".jpg"}
                            title={props.hit.ITEM_NUM}
                            />
                        </a>
                    </Link>      
                  </Grid>
                  <Grid item xs={12} sm={8} lg={5}>
                    <Box textAlign="left">
                      <CardContent className={classes.content}>
                        <Box component="div" display="flex" pb={2}>
                            {props.hit.ENVIO_GRATIS ? 
                            <Paper variant="outlined" className={classes.tagFreeShipping}>    
                                <Typography variant="subtitle2">
                                    Envío Gratis
                                </Typography>
                            </Paper>
                            : ''} 
                            {props.hit.APLICA_EXPRESS ? 
                            <Paper variant="outlined" className={classes.tagExpresshipping}>
                               <Typography variant="subtitle2">
                                    Pídelo Express
                                </Typography>
                            </Paper>
                            : ''}
                        </Box>
                        <Link href={`/articulos/${props.hit.URL}`} className={classes.productLink}>
                            <a>
                                <Typography component="body2" variant="p" textAlign="left">
                                {props.hit.FILTROS.MARCA}
                                </Typography>
                                <Typography variant="subtitle1" className="hit-name" color="textSecondary">
                                <Highlight attribute="TITULO" hit={props.hit} />
                                </Typography>
                            </a>
                        </Link>
                        <div className="hit-description">
                          <Typography component="body2" variant="p">Clave alterna: <Highlight attribute="SORT_NAME" hit={props.hit} /></Typography>
                        </div>
                      </CardContent>
                    </Box> 
                     
                  </Grid>
                  <Grid item xs={12} sm={12} lg={3} align="left">
                   
                    <Box component="div" m={1} >
                      <Typography variant="h5" component="body1" className={classes.hitPrice}  >${props.hit.PRECIO}</Typography>
                      <br></br>
                      {props.hit.PRECIO > 500 ? 
                      <Typography component="body2" variant="p" style={{color: 'green'}}>Hasta 18 meses sin intereses</Typography>
                      : ''}
                    </Box>
                    {button}
                  </Grid>
                </Grid>
              </Box>  
           
          </Card>
        
      </Box>
    );
  }
}
