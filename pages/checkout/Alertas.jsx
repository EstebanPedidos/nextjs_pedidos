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

export default function Alertas({estado,severity,vertical,horizontal,mensaje}) {
  const classes             = useStyles();
  const [open, setOpen]     = useState(estado);

  return (
    <div className={classes.root}>        
      <Snackbar open={open} autoHideDuration={6000} onClose={()=>{setOpen(false)}}
         anchorOrigin={{vertical: vertical, horizontal: horizontal }}>
        <Alert onClose={()=>{setOpen(false)}} severity={severity}>
          {mensaje}
        </Alert>
      </Snackbar>
    </div>
  );
}