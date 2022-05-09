import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { HowItWorksItem, DataItem } from './HowItWorksItem'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { Paddined } from './Banner'

import ConstructionIcon from '@mui/icons-material/Construction';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const useStyles = makeStyles({
  withoutShadow: {
    boxShadow: 'none !important',
  },
})

export const HowItWorks = () => {
  const classes = useStyles()
  const [data] = useState<DataItem[]>([
    {
      title: "¿Cómo funciona?",
      bigTitle: true,
      text: "Te ayudamos a resolver las dudas frecuentes con tus nuevos equipos comprados en Pedidos.com",
      icon: 'undefined',
    },
    {
      title: "Instalación",
      bigTitle: false,
      text: "Resolvemos contigo las primeras dudas que surgen al iniciar con tu(s) equipo(s).",
      icon: ConstructionIcon,
    },
    {
      title: "Entregas",
      bigTitle: false,
      text: "Aprende a preparar el equipo adquirido de acuerdo a tus necesidades diarias.",
      icon: SettingsIcon,
    },
    {
      title: 'Paga al recibir',
      bigTitle: false,
      text: 'Solución de problemas y soporte de posibles problemas con tu(s) equipo.',
      icon: HelpOutlineIcon,
    },
  ])

  return (
    <Card className={classes.withoutShadow}>
      <CardContent>
        <Paddined>
          <Grid container spacing={2}>
            {data.map((item: DataItem, index: number): JSX.Element => (
              <HowItWorksItem
                item={item}
                key={index}
              />
            ))}
          </Grid>
        </Paddined>
      </CardContent>
    </Card>
  )
}

export default HowItWorks
