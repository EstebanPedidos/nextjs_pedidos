import {useState,useEffect} from 'react';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(2, 0, 1),
  },
}));



export default function ListDescription({detalle}) {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [detalleD,setDetalleD] = useState([])
  useEffect(()=>{
    setDetalleD(detalle) 
  },[])

  return (
    <>
    {(detalleD.length > 0)&&
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <List dense={dense}>
                
                {   
                    Object.keys(detalle).map((oneKey,i)=>{
                        if(i < 4){
                            return (
                                <ListItem>
                                <ListItemText    
                                primary={oneKey}
                                secondary={detalle[oneKey]}
                                />
                                </ListItem>
                             )
                        }                       
                    })
                }        
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
    }
    </>
  );
}