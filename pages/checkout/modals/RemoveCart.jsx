import React,{useState} from 'react';
//Pauquetes
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function RemoveCart({Delete,tipo}) {
    const classes         = useStyles();
    const [modalStyle]    = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    return (
        <div>
            {(tipo=== 'E')?
            <Button variant="outlined" fullWidth size="Large" type="button" onClick={()=>{setOpen(true);}}>Eliminar productos</Button>
            :
            (tipo=== 'V')&&
            <Button variant="outlined" fullWidth size="Large" type="button" onClick={()=>{setOpen(true);}}>Vaciar carrito</Button>
            }        
            <Modal
                open={open}
                onClose={()=>{setOpen(false);}}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            <div style={modalStyle} className={classes.paper}>
              <div>
                {(tipo=== 'E')?
                <>
                  <Box component="div" textAlign="center" m={1} py={2}>
                      <Typography component="h3" variant="h5">
                          <Box component="span" fontWeight="fontWeightMedium">
                            Eliminar productos
                          </Box>
                      </Typography>
                      <Box component="div" py={1}>
                        <Divider/>
                      </Box>
                      <Typography component="subtitle1"  gutterBottom>¿Estás seguro de eliminar los productos seleccionados?</Typography>                
                  </Box>
                </>
                :
                (tipo=== 'V')&&
                <>
                  <Box component="div" textAlign="center" m={1} py={2}>
                      <Typography component="h3" variant="h5">
                          <Box component="span" fontWeight="fontWeightMedium">
                            Vaciar carrito
                          </Box>
                      </Typography>
                      <Box component="div" py={1}>
                        <Divider/>
                      </Box>
                      <Typography component="subtitle1"  gutterBottom>¿Estás seguro de eliminar todos los productos?</Typography>                
                  </Box>
                </>    
                }
                  <Box component="div" justifyContet="center">
                    <Grid container direction="row"justifyContent="center" alignItems="center" spacing={2}>
                      <Grid item xs={6}>
                        <Button type="button" variant="outlined" fullWidth size="large" onClick={()=>{setOpen(false);}}>Regresar</Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button type="button" variant="contained" fullWidth size="large" color="primary" disableElevation onClick={()=>{Delete('');setOpen(false)}}>Eliminar</Button>
                      </Grid>
                    </Grid>
                  </Box>
                </div>                        
            </div>
        </Modal>
        </div>
    );
}