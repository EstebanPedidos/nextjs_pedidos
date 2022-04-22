import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const useStyles = makeStyles({
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
})

export const Schedule = () => {
  const classes = useStyles()

  return (
    <Container className={clsx([classes.containerPadding, classes.centered])}>
      <Typography className={classes.title} gutterBottom>
        Horario del servicio
      </Typography>
      <Typography component="p">
        Lunes a Viernes en un horario de 9:00 a 17:00, días laborales.
      </Typography>
    </Container>
  )
}

export default Schedule
