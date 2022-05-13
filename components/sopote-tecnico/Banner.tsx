/*import React from 'react'
import clsx from 'clsx'
import { useTheme, makeStyles } from '@mui/styles'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {
  Grid,
  Button,
  Typography,
} from '@mui/material'

export interface ChildrenProps {
  children: JSX.Element | any,
}

const usePaddinedStyles = makeStyles({
  container: {
    margin: '2rem 10.5rem',
  },
})

export const Paddined: React.FC<ChildrenProps> = ({ children }) => {
  const classes = usePaddinedStyles()

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export interface IMediumProps extends ChildrenProps {
  className?: string
}

export const Medium: React.FC<IMediumProps> = ({ children, className }) => (
  <Grid xs={12} md={6} item className={className}>
    {children}
  </Grid>
)
// onniman
const useStyles = makeStyles(theme => ({
  alignment: {
    textAlign: 'left',
  },
  heading: {
    fontSize: '3rem',
    color: '#424242',
    fontWeight: 'bold',
    '& span': {
      color: theme.palette.primary.main,
    },
  },
  paddined: {
    paddingTop: '6rem !important',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#666667'
  },
  hint: {
    fontSize: '1rem',
    color: '#666667'
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
  }
}))

export interface IBaseTextProps {
  children: JSX.Element,
  component: string,
  textClass: string
}

export const BaseText: React.FC<IBaseTextProps> = ({
  children,
  component,
  textClass
}) => {
  const classes = useStyles()

  return (
    <Typography
      component={component}
      className={clsx(classes.alignment, classes[textClass])}
    >
      {children}
    </Typography>
  )
}

export const Head: React.FC<ChildrenProps> = ({ children }) => (
  <BaseText
    component="h1"
    textClass="heading"
  >
    {children}
  </BaseText>
)

export const SubTitle: React.FC<ChildrenProps> = ({ children }) => (
  <BaseText
    component="h2"
    textClass="subtitle"
  >
    {children}
  </BaseText>
)

export const Hint: React.FC<ChildrenProps> = ({ children }) => (
  <BaseText
    component="h2"
    textClass="hint"
  >
    {children}
  </BaseText>
)*/

export const Banner = () => {
  //const classes = useStyles()

  return (
    <h1>Revisar</h1>
    /*<Paddined>
      <Grid container spacing={2}>
        <Medium className={classes.paddined}>
          <div>
            <SubTitle>
              ¿Necesitas ayuda con tu equipo?
            </SubTitle>
            <Head>
              <span>Soporte</span> técnico <span> <u>gratuito</u></span>
            </Head>
            <Head>
              ¡Listos para ayudarte!
            </Head>
            <br /><br />
            <Grid container spacing={2}>
              <Grid item xs={6}md={3}>
                <Button   
                  className={classes.buttonW}
                  variant="outlined"
                  fullWidth
                  target="_blank"                  
                  size="large"
                  href="https://api.whatsapp.com/send?phone=5215634076339&text=Pedidos.com%20necesito%20ayuda"
                  >
                    <WhatsAppIcon /> &nbsp; WhatsApp
                </Button>
              </Grid>
              <Grid item xs={0} md={2} />
              <Grid item xs={6} md={3}>
                <Button
                  target="_blank"
                  href="https://calendly.com/pedidoscom/60min?back=1&month=2021-09"
                  className={classes.buttonA}
                  variant="outlined"
                  fullWidth
                  size="large"
                >
                  Agendar cita
                </Button>
              </Grid>
            </Grid>
            <br />

            <Hint>
              Exclusivo para clientes con compras realizadas
            </Hint>
          </div>
        </Medium>
        <Medium>
          <img src="/sp-day.png" alt="sp-day" width="100%" height="auto" />
        </Medium>
      </Grid>
    </Paddined>*/
  )
}

export default Banner
