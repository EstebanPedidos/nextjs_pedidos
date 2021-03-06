import {useEffect, useState} from 'react'
//Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
}));


export default function NotasCredito({notas,salectOption,aplicar}){
    const classes = useStyles();
    const [notasDos,setNotasDos] = useState([])
    useEffect(()=>{
        setNotasDos(notas) 
    },[])

    return(
        <div>
            {(notasDos.length > 0)&&          
            <>
            <Box component="div" pt={4} className={classes.root}>
                <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="h4" >Notas de crédito disponibles:</Typography>
                        <Typography variant="subtitle1" component="h5"> Selecciona las de tu preferencia para tu pedido.</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box py={2}>
                <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
                    {
                    notasDos.map((nota, index) => (
                        <Grid  key={index} item xs={6}>
                            <div>  
                                <Card variant="outlined">
                                    <CardActionArea>
                                        <CardContent>
                                            <Box component="div">
                                                <Grid container alignItems="center">
                                                    <Grid item xs={12}>
                                                    <FormControlLabel name='nota' value={nota.invoiceNum} onChange={salectOption}
                                                        control={
                                                            <Checkbox checked={(aplicar.indexOf(nota.invoiceNum+'') >= 0)} id={nota.aplica}  />
                                                        }
                                                        label={
                                                            <Grid item xs={8}>
                                                                <Typography>${nota.monto}</Typography>
                                                            </Grid>
                                                        } 
                                                    />                                                                               
                                                    </Grid>                                                    
                                                </Grid>
                                                
                                                </Box>
                                    </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </Grid>                                
                    ))
                    }     
                </Grid>   
            </Box>
            </>
            }            
        </div>
    )
}

