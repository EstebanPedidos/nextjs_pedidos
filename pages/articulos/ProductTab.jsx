import {useState,useEffect} from 'react';
import {Paper,Tab,AppBar,Typography,Grid,Table,TableBody,
  TableCell,TableContainer,TableRow,Box, Avatar, Button, Skeleton} from '@mui/material';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import {TabContext,TabList,TabPanel} from '@mui/lab';
import ReviewItem from './ReviewItem';



export default function ProductTab({datos}) {
  const [value, setValue] = useState('1');
  const [datosD,setDatosD] = useState({})
  useEffect(()=>{
    setDatosD(datos) 
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    {(datosD.hasOwnProperty('item_num'))&&
    <Paper elevation={0} >      
      <div>
      <TabContext value={value}>
        <AppBar elevation={0} position='static' color='transparent'  >
          <TabList onChange={handleChange} indicatorColor='primary' textColor='primary' variant='outlined' centered aria-label='Detalles de producto'>
           
            <Tab label='Especificaciones' value='1' />
            <Tab label='Beneficios y promociones' value='2' />
          </TabList>
        </AppBar>
       
        <TabPanel value='1'>
          <Box component='div' py={2}>
            <div>
                <Grid container spacing={2}>
                    <Typography variant='h6' component="h5" mt={4} px={2}>{(datosD.hasOwnProperty('item_num'))?(datosD.descripcion.descripcion.hasOwnProperty('titulo'))?`Información sobre ${datosD.descripcion.descripcion.titulo}`:``:<Skeleton animation='wave'/>}</Typography> 
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}>
                        <Box component='div'>
                            {(datosD.hasOwnProperty('item_num'))&&
                            <>
                            <Box component='div' >
                                <Typography variant='h6' color="textSecondary">Especificaciones</Typography>
                            </Box>
                            <TableContainer>
                                <Table  aria-label='simple table'>
                                    <TableBody component='ul'>
                                        {
                                            Object.keys(datosD.detalle).map((oneKey,i)=>{
                                                return (   
                                                <TableRow component='li'key={i}>
                                                  <TableCell>{oneKey}</TableCell>
                                                  <TableCell align='right' >{datosD.detalle[oneKey]}</TableCell>
                                                </TableRow> 
                                                )  
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            </>
                            }
                        </Box>
                    </Grid>
                </Grid>
            </div>
          </Box>
        </TabPanel>    
        <TabPanel value='2'>
          <Box component="div" py={4} >
            <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center">
              <Grid item>
                {/* <Paper elevation={3}>
                  <Box component="div" p={4}> */}
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="flex-start" spacing={1}>
                      <Grid item>                   
                        <Typography variant='h6' component="h5" sx={{fontWeight:'600'}}>
                          Beneficios
                        </Typography>                      
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center" >                         
                            <StorefrontOutlinedIcon />
                            <Typography ml={2} variant='subtitle1' component="body1">
                              Recoge en PickUp Center*
                            </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center" >
                            
                              <MopedOutlinedIcon />
                            
                            <Typography ml={2} variant='subtitle1' component="body1">
                              Envío Express CDMX -3 hrs
                            </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center" >
                            
                              <Inventory2OutlinedIcon />
                            
                            <Typography ml={2} variant='subtitle1' component="body1">
                              Devoluciones con producto cerrado
                            </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center">
                            
                              <PaymentOutlinedIcon />
                            
                            <Typography ml={2} variant='subtitle1' component="body1">
                              Paga al recibir y Programa tu entrega CDMX y Guadalajara
                            </Typography>
                        </Grid>
                      </Grid>
                      
                  </Grid>
                  {/* </Box>
                </Paper> */}
              </Grid>
              <Grid item>
                <Grid 
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start" spacing={2}>
                     <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                          {/* <Avatar>
                            <MopedOutlinedIcon />
                          </Avatar> */}
                          <Typography variant='h6' component="h5" sx={{fontWeight:'600'}}>
                            Meses sin intereses
                          </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                         18 MSI con tarjetas participantes
                      </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">
                           24 MSI con tarjetas CitiBanamex
                        </Typography>
                    </Grid>
                    <Grid item>
                      
                          <Button variant="outlined" fullWidth color="primary">
                            Comentarios de servicio
                          </Button>
                    </Grid>
                    
                   
                </Grid>
              </Grid>
            </Grid>

          </Box>
        </TabPanel>
      </TabContext>
    </div>
    </Paper>
    }
    </>
  );
} 