import React,{useState} from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
//MUI4

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

export default function ConFactura({continuarCompra}) {
    const classes         = useStyles();
    const [modalStyle]    = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button variant="contained" fullWidth  size="large"
            color="primary" type="button" onClick={()=>{setOpen(true);}}>Continuar compra</Button>
            <Modal
                open={open}
                onClose={()=>{setOpen(false);}}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            <div style={modalStyle} className={classes.paper}>
                  <Box component="div" textAlign="center" m={1} py={2}>
                      <Typography component="h3" variant="h5">
                          <Box component="span" fontWeight="fontWeightMedium">
                            Facturación del pedido
                          </Box>
                      </Typography>
                      <Box component="div" py={1}>
                        <Divider/>
                      </Box>
                      <Typography component="subtitle1"  gutterBottom>¿Necesitas facturar?</Typography>                
                  </Box>
                  <Box component="div" justifyContet="center">
                    <Grid container direction="row"justifyContent="center" alignItems="center" spacing={2}>
                      <Grid item xs={6}>
                        <Button type="button" variant="outlined" fullWidth size="large" onClick={()=>{continuarCompra(1);setOpen(false);}}>No, gracias</Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button type="button" variant="contained" fullWidth size="large" color="primary" disableElevation onClick={()=>{continuarCompra(2);setOpen(false)}}>Si, necesito</Button>
                      </Grid>
                    </Grid>
                  </Box>                    
            </div>
        </Modal>
        </div>
    );
}