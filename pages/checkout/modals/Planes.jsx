import {useState,useEffect} from 'react'
import makeStyles from '@mui/styles/makeStyles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Divider,FormControl, InputLabel, Select, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';
//Funciones
import Precios from '../../services/Precios';
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width:'80%',
      minWidth:'320px',
      backgroundColor: theme.palette.background.paper,
      borderRadius: '8px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      margin:'auto'
    },
    btnService: { 
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.common.white,
        borderColor: 'rgba(166, 173, 185, 0.48)',
        },
      }, 
    boxEjecutivo: {
      
      fontWeight:"fontWeightBold",
    }, 
  })); 
export default function Planes({item,UpdateCantidad,index,CambiarPlanes}){
    const classes         = useStyles();
    const [modalStyle]    = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    return (
    <div>
      <Box component="div" pb={2}>
        <Button color="primary" size="small" onClick={()=>{setOpen(true);}}>Editar Planes</Button>
      </Box>  
        <Modal
            open={open}
            onClose={()=>{setOpen(false);}}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
        <div style={modalStyle} className={classes.paper}>
            <Box component="div" textAlign="center" m={1} py={2}>
              <Box component="div" textAlign="center" m={1} py={2}>
                      <Typography component="h3" variant="h5">
                          <Box component="span" fontWeight="fontWeightMedium">
                              Edita las protecciones
                          </Box>
                      </Typography>
                      <Box component="div" py={1}>
                        <Divider/>
                      </Box>
                      <Typography component="subtitle1"  gutterBottom>Delproducto {(item)?item.descripcion:''}</Typography>                
                </Box>     
              <Box component="div" py={2}>
                {(parseInt(item.cantSeguro) > 0 && item.cantidad !== '')&&
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteOutlineOutlinedIcon onClick={()=>{CambiarPlanes(index,2,'S');setOpen(false)}}/>
                    </IconButton>
                  }
                >                    
                  <Grid container spacing={1} justifyContent='space-around' alignItems='center'>
                    <Grid item xs={12} sm={1}>
                      <ListItemAvatar>
                        <Avatar alt="Proteccion de producto" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/planes-p/cseguro-1.jpg" />
                      </ListItemAvatar>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <ListItemText 
                      primary="PLAN DE PRODUCTO, PEDIDOS"
                      secondary={`Precio Unitario: ${Precios('redondear_arriba',{subtotal:item.precioSeguro,iva:0,formato:true})}`}
                  /> 
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <FormControl fullWidth variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Cantidad</InputLabel>
                        <Select
                        label="Cantidad"
                        native
                        value={item.cantSeguro}
                        onChange={UpdateCantidad}
                        inputProps={{
                            id: 'Plan',
                            name : index
                        }}
                        >
                        {Array.apply(0, Array(parseInt(item.cantidad))).map(function (x, i) {
                            return <option key={i+1} value={i+1}>{i+1}</option>;
                        })}      
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <ListItemText
                        primary={`$${Precios('redondear_arriba',{subtotal:(item.precioSeguro*item.cantSeguro),iva:0,formato:true})}`}
                      />
                    </Grid> 
                      
                  </Grid>                   
                </ListItem>
                }
                {(parseInt(item.cantGarant1) > 0 && item.cantidad !== '')&&
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteOutlineOutlinedIcon onClick={()=>{CambiarPlanes(index,2,'G');setOpen(false)}}/>
                    </IconButton>
                  }
                >   
                  <Grid container spacing={2} justifyContent='space-around' alignItems='center'>
                    <Grid item xs={12} sm={1}>
                      <ListItemAvatar>
                        <Avatar alt="Garantia de producto" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/planes-p/cgarantia-1.jpg" />
                      </ListItemAvatar>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ListItemText 
                          primary="GARANTIA EXTENDIDA POR 1 AÑO, PEDIDOS 1"
                          secondary={`Precio Unitario: ${Precios('redondear_arriba',{subtotal:item.precioGarant1,iva:0,formato:true})}`}
                      />  
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <FormControl fullWidth variant="outlined" className={classes.formControl}>
                          <InputLabel htmlFor="age-native-simple">Cantidad</InputLabel>
                          <Select
                          label="Cantidad"
                          native
                          value={item.cantGarant1}
                          onChange={UpdateCantidad}
                          inputProps={{
                              id: 'Garantia1',
                              name : index
                          }}
                          >
                          {Array.apply(0, Array(parseInt(item.cantidad))).map(function (x, i) {
                              return <option key={i+1} value={i+1}>{i+1}</option>;
                          })}         
                          </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <ListItemText
                          primary={`$${Precios('redondear_arriba',{subtotal:(item.precioGarant1*item.cantGarant1),iva:0,formato:true})}`}
                      />
                    </Grid> 
                  </Grid>                  
                </ListItem>
                }
                {(parseInt(item.cantGarant2) > 0 && item.cantidad !== '')&&
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteOutlineOutlinedIcon onClick={()=>{CambiarPlanes(index,2,'G');setOpen(false)}}/>
                    </IconButton>
                  }
                >  
                  <Grid container spacing={2} justifyContent='space-around' alignItems='center'>
                    <Grid item xs={12} sm={1}>
                      <ListItemAvatar>
                        <Avatar alt="Garantia de producto" src="https://pedidos.com/myfotos/pedidos-com/pagina/carrito-compra/planes-p/cgarantia-1.jpg" />
                      </ListItemAvatar>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <ListItemText
                          primary="GARANTIA EXTENDIDA POR 2 AÑO, PEDIDOS 2"
                          secondary={`Precio Unitario: ${Precios('redondear_arriba',{subtotal:item.precioGarant2,iva:0,formato:true})}`}
                      />   
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <FormControl fullWidth variant="outlined" className={classes.formControl}>
                          <InputLabel htmlFor="age-native-simple">Cantidad</InputLabel>
                          <Select
                          label="Cantidad"
                          native
                          value={item.cantGarant2}
                          onChange={UpdateCantidad}
                          inputProps={{
                              id: 'Garantia2',
                              name : index
                          }}
                          >
                          {Array.apply(0, Array(parseInt(item.cantidad))).map(function (x, i) {
                              return <option key={i+1} value={i+1}>{i+1}</option>;
                          })}         
                          </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2}  sm={2}>
                      <ListItemText
                          primary={`$${Precios('redondear_arriba',{subtotal:(item.precioGarant2*item.cantGarant2),iva:0,formato:true})}`}
                      />
                    </Grid> 
                  </Grid>                    
                </ListItem>
                }
              </Box>
              <Box component="div" justifyContet="center">
                    <Grid container direction="row"justifyContent="center" alignItems="center" spacing={2}>
                      <Grid item xs={6}>
                        <Button type="button" variant="outlined" fullWidth size="large" onClick={()=>{setOpen(false)}}>Regresar</Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button type="button" variant="contained" fullWidth size="large" color="primary" disableElevation onClick={()=>{CambiarPlanes(index,1,'N');setOpen(false)}}>Cambiar</Button>
                      </Grid>
                    </Grid>
                  </Box>
            </Box> 
        </div>
        </Modal>
    </div>
    )
}