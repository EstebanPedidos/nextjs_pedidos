import {useState,useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


export default function Alertas({setAlerta,alerta}) {  

  const [alertaA,setAlertaA]= useState({})
  useEffect(()=>{
    setAlertaA(alerta)
  },[])

  return (
    <>
    {(alertaA.hasOwnProperty('severity'))?
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={true} autoHideDuration={6000} onClose={()=>{setAlerta({})}}
      anchorOrigin={{vertical: alertaA.vertical, horizontal: alertaA.horizontal }}
      >
        <Alert severity={alertaA.severity} variant={(alertaA.hasOwnProperty('variant'))?alertaA.variant:'outlined'} >
          {(alertaA.hasOwnProperty('titulo'))&&
            <AlertTitle>{alertaA.titulo}</AlertTitle>
          }
          {alertaA.mensaje}
        </Alert>
      </Snackbar>     
    </Stack>
    :
    <></>
    }
    </>
  );
}