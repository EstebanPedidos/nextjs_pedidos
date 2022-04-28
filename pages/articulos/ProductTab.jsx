import {useState} from 'react';
import {Paper,Tab,AppBar,Typography,Grid,Table,TableBody,
  TableCell,TableContainer,TableRow,Box, Avatar} from '@mui/material';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import {TabContext,TabList,TabPanel} from '@mui/lab';
import ReviewItem from './ReviewItem';




export default function ProductTab({datos}) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={0} >      
      <div>
      <TabContext value={value}>
        <AppBar elevation={0} position='static' color='transparent'  >
          <TabList onChange={handleChange} indicatorColor='primary' textColor='primary' variant='outlined' centered aria-label='Detalles de producto'>
            <Tab label='Comentarios y Q&A' value='1' />
            <Tab label='Especificaciones' value='2' />
            <Tab label='Beneficios y promociones' value='3' />
          </TabList>
        </AppBar>
        <TabPanel value='1'>
          <ReviewItem item_num={datos.item_num.trim()} />
        </TabPanel>
        <TabPanel value='2'>
          <Box component='div' py={2}>
            <div>
                <Grid container spacing={2}>
                    <Typography variant='h6' component="h5" mt={4} px={2}>{(datos.hasOwnProperty('item_num'))?(datos.descripcion.descripcion.hasOwnProperty('titulo'))?`Información sobre ${datos.descripcion.descripcion.titulo}`:``:<Skeleton animation='wave'/>}</Typography> 
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}>
                        <Box component='div'>
                            {(datos.hasOwnProperty('item_num'))&&
                            <>
                            <Box component='div' >
                                <Typography variant='h6' color="textSecondary">Especificaciones</Typography>
                            </Box>
                            <TableContainer>
                                <Table  aria-label='simple table'>
                                    <TableBody component='ul'>
                                        {
                                            Object.keys(datos.detalle).map((oneKey,i)=>{
                                                return (   
                                                <TableRow component='li'key={i}>
                                                  <TableCell>{oneKey}</TableCell>
                                                  <TableCell align='right' >{datos.detalle[oneKey]}</TableCell>
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
        <TabPanel value='3'>
          <Box component="div" py={4 } >
            <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center">
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start" spacing={3}>
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center" spacing={2}>
                          <Avatar>
                            <MopedOutlinedIcon />
                          </Avatar>
                          <Typography ml={2} variant="subtitle2">
                            Envío Express CDMX -3 hrs
                          </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center" spacing={2}>
                          <Avatar>
                            <MopedOutlinedIcon />
                          </Avatar>
                          <Typography ml={2} variant="subtitle2">
                            Paga al recibir CDMX y Guadalajara
                          </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center" spacing={2}>
                          <Avatar>
                            <MopedOutlinedIcon />
                          </Avatar>
                          <Typography ml={2} variant="subtitle2">
                            Programa tu entrega
                          </Typography>
                      </Grid>
                    </Grid>
                </Grid>
              </Grid>
              <Grid item>
              <Grid 
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start" spacing={3}>
                     <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center" spacing={2}>
                          <Avatar>
                            <MopedOutlinedIcon />
                          </Avatar>
                          <Typography ml={2} variant="subtitle2">
                            Recoge en PickUp Center
                          </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center" spacing={2}>
                          <Avatar>
                            <MopedOutlinedIcon />
                          </Avatar>
                          <Typography ml={2} variant="subtitle2">
                            Comentarios de servicio
                          </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center" spacing={2}>
                          <Avatar>
                            <MopedOutlinedIcon />
                          </Avatar>
                          <Typography ml={2} variant="subtitle2">
                            Devoluciones con producto cerrado
                          </Typography>
                      </Grid>
                    </Grid>
                    
                   
                </Grid>
              </Grid>
              <Grid item>
              <Grid 
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start" spacing={3}>
                     <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center" spacing={2}>
                          {/* <Avatar>
                            <MopedOutlinedIcon />
                          </Avatar> */}
                          <Typography ml={2} variant="subtitle2">
                            Meses sin intereses
                          </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography ml={2} variant="body2">
                        Hasta 18 MSI con tarjetas participantes
                      </Typography>
                    </Grid>
                    <Grid item>
                        <Typography ml={2} variant="body2">
                          Hasta 24 MSI con tarjetas CitiBanamex
                        </Typography>
                    </Grid>
                    
                   
                </Grid>
              </Grid>
            </Grid>

          </Box>
        </TabPanel>
      </TabContext>
    </div>
    </Paper>
  );
} 