import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import Container from '@mui/material/Container'

const useStyles = makeStyles({
  justify: {
    textAlign: 'justify',
  },
  paddined: {
    padding: "1rem 3.5rem 4rem",
  },
})

export const Terms = () => {
  const classes = useStyles()

  return (
    <Container className={classes.paddined}>
      <Typography variant="h6">
        Términos y condiciones
      </Typography>
      <Typography className={classes.justify}>
        Este servicio de entrega está disponible de Lunes a Sábado en días laborales . Al pedir en línea en Pedidos.com la opción será válida o podrá usarse siempre y cuando la cantidad máxima de volumen del producto/pedido a entregar no sobrepase y no ocupe un volumen o espacio superior al comprendido a 0.13 metros cúbicos y no tener un peso mayor de 20kg. La opción de este servicio se mostrará en el carrito de compras si es válida para la entrega del pedido. No olvides que para recoger el pedido debe de llegar un correo electrónico con el código QR que debes llevar para poder recoger tu pedido en Pedidos.com PickUp Center. El tiempo prometido de entrega dependerá de los productos de tu pedido, donde las entregas podrán ser en 3 horas o bien al día siguiente siempre y cuando sea día hábil y cumpla con los horarios hábiles laborales. 
      </Typography>
    </Container>
  )
}

export default Terms
