import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Alertas({setAlerta,alerta}) {
  const classes             = useStyles();

  return (
    <div className={classes.root}>        
      <Snackbar open={true} autoHideDuration={6000} onClose={()=>{setAlerta({})}}
         anchorOrigin={{vertical: alerta.vertical, horizontal: alerta.horizontal }}>
        <Alert onClose={()=>{setAlerta({})}} severity={alerta.severity}>
          {alerta.mensaje}
        </Alert>
      </Snackbar>
    </div>
  );
}