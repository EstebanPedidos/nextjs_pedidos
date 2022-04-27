import {useState} from 'react';
import makeStyles from '@mui/styles/makeStyles';
import {Paper,Tab,AppBar,Typography,Grid,Table,TableBody,
  TableCell,TableContainer,TableRow,Box} from '@mui/material';
import {TabContext,TabList,TabPanel} from '@mui/lab';
import ReviewItem from './ReviewItem';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    borderBottom: '1px solid #e8e8e8',
  },
});

export default function ProductTab({datos}) {
  const classes           = useStyles();
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={0} className={classes.root}>      
      <div className={classes.root}>
      <TabContext value={value}>
        <AppBar elevation={0} position='static' color='transparent'  >
          <TabList onChange={handleChange} indicatorColor='primary' textColor='primary' variant='outlined' centered aria-label='Detalles de producto'>
            <Tab label='Detalles' value='1' />
            <Tab label='Comentarios' value='2' />
            <Tab label='Q&A' value='3' />
          </TabList>
        </AppBar>
        <TabPanel value='1'>
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
        <TabPanel value='2'>
          <ReviewItem item_num={datos.item_num.trim()} />
        </TabPanel>
        <TabPanel value='3'>Item Three</TabPanel>
      </TabContext>
    </div>
    </Paper>
  );
} 