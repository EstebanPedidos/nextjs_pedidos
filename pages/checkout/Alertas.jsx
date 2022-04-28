import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


export default function Alertas({setAlerta,alerta}) {  

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={true} autoHideDuration={6000} onClose={()=>{setAlerta({})}}
      anchorOrigin={{vertical: alerta.vertical, horizontal: alerta.horizontal }}
      >
        <Alert severity={alerta.severity}>
          {(alerta.hasOwnProperty('titulo'))&&
            <AlertTitle>{alerta.titulo}</AlertTitle>
          }
          {alerta.mensaje}
        </Alert>
      </Snackbar>
     
    </Stack>
  );
}