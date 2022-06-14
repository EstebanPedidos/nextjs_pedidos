import * as React from 'react';
import { styled } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';
import {
    Button,
    DialogActions,
    DialogContent,
    Dialog,
    Typography,
    Grid,
    IconButton,
    DialogTitle,    
} from '@mui/material'
//youtube
import YouTube from 'react-youtube';
interface Props {
    open: boolean, 
    setOpen: Function,
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 4 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

export default function VideoModal({ open, setOpen }: Props) {
  const handleClose = () => {
    setOpen(false);
  };
  const opts = {height: '390',width: '640',playerVars: {autoplay: 1,},}

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        maxWidth={'lg'}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        </BootstrapDialogTitle>
            <DialogContent dividers>
            <Grid container spacing={4}>
                <Grid item xs={8}>
                  <YouTube videoId={'MGuOo1_xpBI'} opts={opts} onReady={onPlayerReady}/>
                    
                </Grid>
                <Grid item xs={4}>
                    <h1>¿Cómo Refacturar?</h1>
                    <Typography gutterBottom>
                        Si necesitas hacer un cambio dentro de la factura de tu pedido en este video te presentamos esta opción donde podrás realizar el cambio, solo entra a tu sección de facturas dentro de tu cuenta, podrás hacer uso en caso de querer un cambio en tu factura.
                    </Typography>                          
                </Grid>
            </Grid>
          {/* <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography> */}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}