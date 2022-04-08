import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));



export default function ListDescription({detalle}) {
  const classes = useStyles();
  const [dense, setDense] = useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
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
  );
}