import React from 'react'
import clsx from 'clsx'
import { useTheme, makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

export interface ChildrenProps {
  children: JSX.Element,
}

const usePaddinedStyles = makeStyles({
  container: {
    margin: '2rem 3.5rem',
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

const useStyles = makeStyles(theme => ({
  alignment: {
    textAlign: 'left',
  },
  heading: {
    fontSize: '3rem',
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
    color: '#424242'
  },
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

export const Banner = () => {
  const classes = useStyles()

  return (
    <Paddined>
      <Grid container spacing={2}>
        <Medium className={classes.paddined}>
          <SubTitle>
            Envíos rápidos CDMX
          </SubTitle>
          <Head>
            Pedidos <span>Express</span> CD<span>MX</span>
          </Head>
          <SubTitle>
            Tu pedido en 3 horas o menos.
          </SubTitle>
        </Medium>
        <Medium>
          <img src="/sp-day.png" alt="sp-day" width="100%" height="auto" />
        </Medium>
      </Grid>
    </Paddined>
  )
}

export default Banner
