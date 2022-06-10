import {useState,useEffect} from 'react'
//next js
import Link from 'next/link'
//Material UI
import {Box, Grid, Paper, Typography, Button, Checkbox,
        ButtonBase, IconButton, TextField, FormControl,
        Alert, InputLabel, Select, Divider, CardActions,
       } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

//Funciones
import Precios from '../../services/Precios'

const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1 
    },
    paperpp: { padding: "5px", marginBottom:"5px", textAlign: 'center', width:'100%',
    backgroundColor: '#E7ECF3', borderColor: '#E7ECF3',
    
    },
    productimage: { width: "100%", borderRadius:"8px",
        border: "1px solid",  borderColor:'#CCCCCC', padding: "0.8rem", },
    pimg: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
    ppimg: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
    iconButton: {
        color: theme.palette.text.primary,
      },
    inputTxt: {
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
        justifyContent: 'center',
        textAlign: 'center',
        borderColor: theme.palette.text.lightgray,
        border: 1,
        minWidth: 120,
        //borderWidth: '1px',
        borderRadius:'8px',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      boxGift: {
        backgroundColor: 'rgba(228,242, 236,0.25)',
      },

  }));  

export default function Cart({precarrito,deleteAll,Remove,setRemove,Delete,UpdateCantidad,modificar}){
    const classes   = useStyles();
    const [precarritoP,setPrecarritoP] = useState([])

    useEffect(()=>{
        setPrecarritoP(precarrito) 
    },[precarrito])

    function NewRemove(item_num){        
        let existe = Remove.indexOf(item_num)
        if(existe < 0){
            Remove.push(item_num)
        }   
        setRemove(Remove);   
    }

    

    return(
        <Box component="div">
            <div className={classes.root}>
            {(precarritoP.length > 0)&&
                <div>    
                    <Box component="div">
                        {
                        precarritoP.map((item, index) => (
                            (!item.item_num.includes('CON-REG'))?
                            <div key={index}>
                                <Box component="div" m={1} py={1}>
                                    <Grid container alignItems="flex-start" justifyContent="flex-start">
                                        <Grid item xs={12} sm={6}>
                                            <Grid container alignItems="flex-start" justifyContent="center" spacing={1}>
                                                <Grid item xs={3}>
                                                    <Box component="div" className={(item.cantSeguro >0 || item.cantGarant1 > 0 || item.cantGarant2 > 0 )?'':''}>
                                                        <Link href={`/articulos/${item.url.toLowerCase()}`}>
                                                            <a> 
                                                                <ButtonBase className={classes.productimage}>
                                                                    <img className={classes.pimg} src={`https://pedidos.com/myfotos/${item.item_num}.jpg`} alt={item.descripcion}/> 
                                                                </ButtonBase>
                                                                { (item.exis === 'N')?
                                                                <i>!</i>
                                                                :
                                                                (item.exis === 'X') &&
                                                                <i>times</i>   
                                                                }                          
                                                            </a>  
                                                        </Link>
                                                        <Box component="div" pt={1}>
                                                            {(item.cantSeguro > 0)&&
                                                            <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>    
                                                                <Grid item xs={12} sm={12} lg={6}>
                                                                    <Paper variant="outlined" className={classes.paperpp}>
                                                                        <Box component="div">
                                                                            <img className={classes.ppimg} src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/planes-p/dsegurow-1.png" alt="Plan contra daños y accidentes"/>
                                                                        </Box>
                                                                    </Paper>
                                                                </Grid>
                                                                <Grid item xs={12} sm={12} lg={6}>
                                                                    {(item.cantGarant1 > 0 || item.cantGarant2 > 0)&&
                                                                        
                                                                        <Paper variant="outlined" className={classes.paperpp}>
                                                                            <Box component="div">
                                                                            <img className={classes.ppimg} src={(item.cantGarant1 > 0)?`https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/planes-p/dgarantiaw-1.png`:`https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/planes-p/dgarantiaw-2.png`} alt="Garantia extendida" />
                                                                            </Box>
                                                                        </Paper>
                                                                    }
                                                                </Grid>
                                                            </Grid>    
                                                            }
                                                        </Box>        
                                                    </Box> 
                                                </Grid> 
                                                <Grid item xs={8}>
                                                    <Box component="div">
                                                        <Grid item container justifyContent="space-between" alignItems="center" direction="column">
                                                            <Grid item >
                                                                <Box textAlign="left">
                                                                <Typography gutterBottom variant="subtitle2">
                                                                    {item.descripcion}
                                                                </Typography>
                                                                <Typography variant="body2" gutterBottom>
                                                                    Precio Unitario:  <span>${Precios('formatcurrency',{subtotal:item.precio,fixed:2})}</span>
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary" pt={1}>
                                                                    SKU: <span>{item.item_num}</span>
                                                                </Typography>
                                                                <Box pt={1}>
                                                                    {(item.cantSeguro > 0 )&&
                                                                    <Typography gutterBottom variant="subtitle2">
                                                                            1 AÑO Protección. Robo y acc.
                                                                        <span> ${item.precioSeguro}</span>
                                                                    </Typography>   
                                                                    } 
                                                                    {(item.cantGarant1 > 0)&&
                                                                    <Typography gutterBottom variant="subtitle2">
                                                                        1 AÑO Garantía Extendida
                                                                        <span> ${item.precioSeguro}</span>
                                                                    </Typography>   
                                                                    } 

                                                                    {(item.cantGarant2 > 0 )&&
                                                                    <Typography gutterBottom variant="subtitle2">
                                                                        2 AÑO Garantía Extendida
                                                                        <span> {item.precioSeguro}</span>
                                                                    </Typography>   
                                                                    } 
                                                                </Box>
                                                                {(item.cantSeguro > 0  || item.cantGarant1 > 0 || item.cantGarant2 > 0 )&&
                                                                <CardActions>
                                                                    <Button color="primary" size="small" >Editar Planes</Button>
                                                                </CardActions>   
                                                                } 
                                                                </Box>
                                                            </Grid> 
                                                        </Grid>
                                                    </Box>     
                                                </Grid>
                                            </Grid>
                                        </Grid>                        
                                        <Grid item xs={3} sm={3}>
                                                <Box m={1}>
                                                    { (item.exis === 'X') ?
                                                    <Alert severity="error">Sin Disponibilidad</Alert>
                                                    :                                                    
                                                    (item.modificar !== undefined )?                                                            
                                                    <TextField fullWidth  id='input' type="number" value={item.cantidad} name={index}  onChange={UpdateCantidad} label="Cantidad"/>
                                                    :
                                                    <FormControl variant="outlined" className={classes.formControl}>
                                                        <InputLabel htmlFor="age-native-simple">Cantidad</InputLabel>
                                                        <Select
                                                        label="Cantidad"
                                                        native
                                                        value={item.cantidad}
                                                        onChange={UpdateCantidad}
                                                        inputProps={{
                                                            name: index,
                                                        }}
                                                        >
                                                        {Array.apply(0, Array((item.existencia >= 5)?5:item.existencia)).map(function (x, i) {
                                                            return <option key={i+1} value={i+1}>{i+1}</option>;
                                                        })}  

                                                        {(item.cantidad > 5)&&
                                                            <option key={item.cantidad} value={item.cantidad}>{item.cantidad}</option>
                                                        }
                                                        {(item.existencia >= 5)&&
                                                            <option key={0} value="0">+5</option>
                                                        }                
                                                        </Select>
                                                    </FormControl>
                                                    }   
                                                
                                                </Box>
                                                <Box item pt={2}>
                                                    <Box textAlign="left" ml={2}> 
                                                    {(item.cantSeguro > 0 )&&
                                                        <Typography gutterBottom variant="subtitle2">
                                                            Cant. <span> {item.cantSeguro}</span>{(item.cantSeguro === 1)?` Plan`:` Planes`}
                                                        </Typography>   
                                                        }
                                                        {(item.cantGarant1 > 0 || item.cantGarant2 > 0)&&
                                                        <Typography gutterBottom variant="subtitle2">
                                                            Cant. <span> {(item.cantGarant1 > 0 )?item.cantGarant1:item.cantGarant2}</span>{(item.cantGarant1 === 1 || item.cantGarant2 === 1)?` Garantia`:` Garantias`}
                                                        </Typography>   
                                                    }
                                                    </Box>
                                                        
                                                </Box>    
                                        </Grid> 
                                        <Grid item xs={9} sm={3}>
                                            <Grid container alignItems="center" justifyContent="center" spacing={1}>
                                                <Grid item xs={9} sm={6} lg={6}>
                                                    <Box m={1} p={1} justifyContent="center">
                                                        <Typography variant="subtitle1" >
                                                            <Box pt={2} fontWeight="fontWeightMedium" textAlign="center">$
                                                            {Precios('formatcurrency',{subtotal:((item.precio*item.cantidad) +(item.precioSeguro*item.cantSeguro)+(item.precioGarant1*item.cantGarant1)),fixed:2})}  
                                                            </Box>
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={3} sm={6} lg={6}>
                                                    <Box m={1} pt={2}>                                                        
                                                        {(deleteAll)?
                                                        <Checkbox
                                                        onChange={()=>{NewRemove(item.item_num)}}
                                                        name={item.item_num}                           
                                                        />
                                                        :
                                                        <IconButton type="button" fullWidth size="large" onClick={()=>{Delete(item.item_num)}} aria-label="delete">
                                                            <DeleteOutlineOutlinedIcon />
                                                        </IconButton>                                                        
                                                        } 
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Divider variant="middle" />
                            </div>          
                            :
                            <div key={index}>
                                <Box component="div" m={1} py={1} className={classes.boxGift} >
                                    <Grid container alignItems="flex-start" justifyContent="flex-start">
                                        <Grid item xs={6} sm={6}>  
                                            <Grid container alignItems="flex-start" justifyContent="flex-start" spacing={1}>
                                                <Grid item xs={3}>
                                                    <Box component="div">
                                                        <ButtonBase className={classes.productimage}>
                                                            <img className={classes.pimg} src={`https://pedidos.com/myfotos/${item.item_num}.jpg`} alt={item.descripcion}/>
                                                        </ButtonBase>    
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={9}> 
                                                    <Box component="div" pt={1}>
                                                        <Grid item container justifyContent="space-between" alignItems="center" direction="column">
                                                            <Grid item >
                                                                <Box textAlign="left">
                                                                <Typography gutterBottom variant="subtitle2">
                                                                    {item.descripcion}
                                                                </Typography>
                                                                <Typography variant="body2" gutterBottom>
                                                                     Producto de regalo
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary">
                                                                    SKU: <span>{item.item_num}</span>
                                                                </Typography>
                                                                
                                                                </Box>
                                                            </Grid> 
                                                        </Grid>
                                                    </Box> 
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} sm={4}>
                                            <Box m={1} p={1} justifyContent="center">
                                                <Typography variant="subtitle1" >
                                                    <Box pt={2} fontWeight="fontWeightMedium" textAlign="center">
                                                        Gratis
                                                    </Box>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
                        ))
                        }
                    </Box>
                    <Box component="div" py={ 2} textAlign="right">
                        <Typography variant="subtitle1" gutterBottom>
                           <Box fontWeight="fontWeightMedium">Precios sujetos a cambios sin previo aviso.</Box> 
                        </Typography>
                    </Box>
                </div>
            }            
            </div>
        </Box>
    )
}