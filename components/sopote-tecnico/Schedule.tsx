/*import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {
  Typography,
  Container,
  Grid,
  Button,
} from '@mui/material'

const useStyles = makeStyles( theme => ({
  containerPadding: {
    padding: "5rem 0px"
  },
  centered: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
  },
  hint: {
    fontSize: '.85rem',
    color: '#5A5A5B'
  },

  buttonW: {
    border: '2px solid #424242',
    color: '#424242',
    '&:hover': {
      border: '2px solid #424242',
    },
  },

  buttonA: {
    border: '2px solid ' + theme.palette.primary.main,
    color: theme.palette.primary.main,
    
    '&:hover': {
      border: '2px solid ' + theme.palette.primary.main,
    },
  },
}))
*/
export const Schedule = () => {
  //const classes = useStyles()

  return (
    <h1>Revisar</h1>
    /*<Container className={clsx([classes.containerPadding, classes.centered])}>
      <Typography className={classes.title} gutterBottom>
        Horario de atención
      </Typography>
      <Typography component="p">
        Lunes a Viernes en un horario de 9:00 a 18:30, días laborales.
      </Typography>
      <br />
      <Typography component="p" className={classes.hint}>
        Recuerda que es importante respetar los horarios de la cita programada con nuestro equipo técnico para el soporte necesario para ti y tu equipo.
      </Typography>
      <br />
      <br />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button   
            className={classes.buttonW}
            variant="outlined"
            target="_blank"                  
            size="large"
            href="https://api.whatsapp.com/send?phone=5215634076339&text=Pedidos.com%20necesito%20ayuda"
            >
              <WhatsAppIcon /> &nbsp; WhatsApp
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            target="_blank"
            href="https://calendly.com/pedidoscom/60min?back=1&month=2021-09"
            className={classes.buttonA}
            variant="outlined"
            size="large"
          >
            Agendar cita
          </Button>
        </Grid>
      </Grid>
    </Container>*/
  )
}

export default Schedule
