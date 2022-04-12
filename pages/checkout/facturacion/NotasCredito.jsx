import {useState} from 'react'
//Material UI
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
}));


export default function NotasCredito(props){
    const classes = useStyles();
    let   notas   = props.notas
    return(
        <div>
            {(notas.length > 0)&&          
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
                    notas.map((nota, index) => (
                        <Grid item xs={6}>
                            <div key={index}>  
                                <Card variant="outlined">
                                    <CardActionArea>
                                        <CardContent>
                                            <Box component="div">
                                                <Grid container alignItems="center">
                                                    <Grid item xs={12}>
                                                    <FormControlLabel name='nota' value={nota.invoiceNum} onChange={props.salectOption}
                                                        control={
                                                            <Checkbox checked={(props.aplicar.indexOf(nota.invoiceNum+'') >= 0)} id={nota.aplica}  />
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

