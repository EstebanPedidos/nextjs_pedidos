import {useState} from 'react'
//Paquetes
import { useRouter } from 'next/router'
//Material
//Material UI
import {Box, Stepper, Step, StepLabel, } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import LinearProgress from '@mui/material/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
  return ['Entrega', 'Factura', 'Envío', 'Pago'];
}
export default function Process({paso}){
  const ruter     = useRouter() 
  const classes   = useStyles();
  const steps     = getSteps();

  const [iscambio,setIsCambio] = useState(false)

  function cambio(index){
    setIsCambio(true)
    if(index !== paso){
      ruter.push(
        (index == 0)?'/checkout/direccion-de-envio':
        (index == 1)?'/checkout/facturacion':
        (index == 2)?'/checkout/forma-de-envio':
        (index == 3)&&'/checkout/forma-de-pago'
      )  
    }
  }

  return (
    <Box component="div" pb={2}>
        <div className={classes.root}>
          {(iscambio)?
          <LinearProgress />
          :
            <Stepper alternativeLabel activeStep={(paso === undefined)?0:(paso > 3)?3:paso}>
                {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                  return (
                      <Step key={label} {...stepProps} onClick={()=>{cambio(index)}}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                  );
                })}
            </Stepper>
          }
        </div>
    </Box>
  )
}