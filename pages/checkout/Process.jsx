//Paquetes
import { useRouter } from 'next/router'
//Material
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(2),
    },
    instructions: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
}));

function getSteps() {
  return ['Entrega', 'Factura', 'Envío', 'Pago'];
}
export default function Process({paso}){
  const ruter     = useRouter() 
  const classes   = useStyles();
  const steps     = getSteps();

  function cambio(index){
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
    <div>
        <div className={classes.root}>
            <Stepper activeStep={(paso === undefined)?0:(paso > 3)?3:paso}>
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
        </div>
    </div>
  )
}