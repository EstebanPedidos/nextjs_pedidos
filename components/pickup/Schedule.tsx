import { FC } from 'react'
import { Box, Grid, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { Medium } from './Banner'

const useStyles = makeStyles({
  container: {
    padding: '40px',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    margin: '10px 0px',
  },
  paddingTop40: {
    paddingTop: '40px',
  },
  opineButton: {
    margin: '40px 0px',
  },
})

export interface IContainerProps {
  children: JSX.Element,
}

export const Container: FC<IContainerProps> = ({ children }) => {
  const classes = useStyles()

  return (
    <div >{/* className={classes.container} */}
      {children}
    </div>
  )
}

export const Schedule = () => {
  //const classes = useStyles()

  return (
   
     <Grid container spacing={2}>
      <Medium>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5378320116656!2d-99.19765348509333!3d19.432364986884462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202022793a35b%3A0xcf4931efcb3e7df3!2sAlejandro%20Dumas%20135%2C%20Polanco%2C%20Polanco%20IV%20Secc%2C%20Miguel%20Hidalgo%2C%2011550%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1645141224178!5m2!1ses-419!2smx" style={{ border: 0 }} allowFullScreen loading="lazy" width="100%" height="420px"></iframe>
      </Medium>
      <Medium>
         
          <Typography variant="h4" component="h4">{/*  className={classes.paddingTop40} */}
            PickUp Center: Horario de atención
          </Typography>
          <Typography>{/*  className={classes.bold} */}
            Lunes a Sábado en un horario de 10:00 a 18:30, excepto días feriados. 
          </Typography>
          <Typography>
            ¡Regálanos tu opinión cuando nos visites!
          </Typography>
          <Button
            variant="outlined"
            href="https://g.page/r/CcAUsdofb-qOEAg/review"
            target="_blank"
            color="primary"
           
            size="large"
          >{/*  className={classes.opineButton} */}
            Opinar
          </Button>
          <Typography>
            Recuerda que si agendaste una cita con soporte técnico es importante respetar los horarios de la cita programada.
          </Typography>
        
      </Medium>
    </Grid> 
  )
}

export default Schedule
