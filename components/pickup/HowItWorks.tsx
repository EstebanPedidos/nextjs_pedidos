/*import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { HowItWorksItem, DataItem } from './HowItWorksItem'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { Paddined } from './Banner'

import HelpIcon from '@mui/icons-material/Help';
import ConstructionIcon from '@mui/icons-material/Construction';

const useStyles = makeStyles({
  withoutShadow: {
    boxShadow: 'none !important',
  },
})*/

export const HowItWorks = () => {
  /*const classes = useStyles()
  const [data] = useState<DataItem[]>([
    {
      title: "¿Cómo funciona?",
      bigTitle: true,
      text: "Dentro de tu carrito de compras puedes seleccionar esta forma de entrega. Recibe tus productos en nuestro PickUp Center. ",
      icon: undefined,
    },
    {
      title: "Notificaciones e-mail",
      bigTitle: false,
      text: "Se notificará a tu correo eléctronico cuando tu pedido se encuentre listo para recoger. No olvides llevar el código QR para poder hacer la entrega de tu pedido. ",
      icon: HelpIcon,
    },
    {
      title: "Soporte técnico",
      bigTitle: false,
      text: "Si tienes duda de alguno de tus equipos tecnológicos puedes solicitar el apoyo para resolver dudas o configurarlo de acuerdo a tus necesidades.",
      icon: ConstructionIcon
    },
  ])*/

  return (
    <h1>Revisar</h1>
    /*<Card className={classes.withoutShadow}>
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
    </Card>*/
  )
}

export default HowItWorks
