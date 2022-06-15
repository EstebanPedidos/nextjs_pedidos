// import { Container, Typography, Box } from '@material-ui/core';
import { Container, Typography, Box } from '@mui/material';
import { HeadingPolicies, PoliciesMenu } from '/components';
import { Layout } from '/layout/Layout';

export const FormaDePago = () => {
	return (
		<Layout title='Formas de Pago | Pedidos.com'>
			<Container maxWidth='xl'>
				<HeadingPolicies/>
				<PoliciesMenu />
					<Container fluid>
						<Box my={2}>
							<Typography
								variant='h5'
								component={'h2'}
								color='primary'
								gutterBottom
							>
								Formas de Pago
							</Typography>
							<Box component='div' pt={2}>
							<Typography variant='h6' component='h3' gutterBottom>
								Pago contra entrega
							</Typography>
							<Typography variant='body1' component='p' align='justify' gutterBottom>
								¡En Pedidos.com puedes pagar al momento de recibir
								con tu tarjeta de crédito o débito! Solo debes
								elegir pago al recibir con tarjeta al momento de
								finalizar tu pedido.
							</Typography>

							<Typography variant='body1' component='p' align='justify' gutterBottom>
								Si eliges pago contra entrega tu pedido:
							</Typography>
							<ul>
								<li>No debe de ser mayor a $10,000 con tarjeta.</li>
								<li>
									Debe caber en nuestra moto (.13 metros cúbicos y
									20 kg).
								</li>
							</ul>
							<Typography
								variant='body1' align='justify'
								component='p' color="textSecondary"
								gutterBottom>
								NOTA: Si esta opción de pago no aparece se debe a
								que no es posible hacer la entrega de tu pedido con
								este método de pago. El pago al recibir el pedido
								aplica únicamente en la Ciudad de México (CDMX),
								Naucalpan de Juárez, Atizapán de Zaragoza,
								Tlalnepantla de Baz, Ecatepec de Morelos,
								Cuautitlán, Nezahualcóyotl, Cuautitlán Izcalli,
								Coacalco de Berriozábal , Chimalhuacán y
								Guadalajara.
							</Typography>

							{/* Paypal */}
							<Typography variant='h6' component='h3' gutterBottom>
								Paypal
							</Typography>
							<Typography variant='body1'component='p' align='justify' gutterBottom>
								Puedes realizar tu pago por medio de tu cuenta de
								PayPal, sigue el proceso normal de compra,
								seleccionando PayPal, cuando des click en Pagar te
								redireccionará a la página de PayPal donde
								proporcionarás tus datos para hacer el pago. Si
								eliges pago contra entrega tu pedido:
							</Typography>

							<Typography variant='body1' component='p' align='justify' gutterBottom>
								Debes de aceptar el cargo en tu cuenta y te arrojará
								tu número de orden de compra. Si aún no tienes
								cuenta con PayPal, ahí mismo te dará la opción de
								generar una, sólo debes ingresar los datos
								correspondientes.
							</Typography>
							<Typography
								variant='body1' align='justify'
								component='p' color="textSecondary"
								gutterBottom>
								NOTA: Es importante que tu dirección registrada en
								PayPal sea la misma que registraste en dirección de
								envío en Pedidos.com, de lo contrario por
								proteccción del usuario de PayPal declinaremos el
								pago.
							</Typography>

							{/* Tarjeta virtual visa o master */}
							<Typography variant='h6' component='h3' gutterBottom>
								Tarjeta Visa o Mastercard
							</Typography>
							<Typography variant='body1' align='justify' component='p' gutterBottom>
								Puedes realizar tu pago con tu tarjeta de Débito o
								Crédito, tu compra es totalmente segura.
							</Typography>

							<Typography variant='body1' align='justify' component='p' gutterBottom>
								Sólo ingresa los datos que te solicitamos, estos son
								procesados bajo parámetros de seguridad de
								Pedidos.com y ninguno de tus datos bancarios se
								guardarán.
							</Typography>
							<Typography
								variant='body1' align='justify'
								component='p' color="textSecondary"
								gutterBottom>
								NOTA: Si tu pago fue realizado antes de las 14 hrs.
								se verá reflejado en nuestro sistema ese mismo día,
								si no será hasta el siguiente día hábil.
							</Typography>

							{/* Deposito bancario */}
							<Typography variant='h6' component='h3' gutterBottom>
								Tarjeta Visa o Mastercard
							</Typography>
							<Typography variant='body1' align='justify'  component='p' gutterBottom>
								Los MSI no podrán ser aplicados ya que está opción
								es para los pagos en línea y pagos contra entrega.
							</Typography>
							<Typography variant='body1' align='justify' component='p' gutterBottom>
								Si eliges realizar tu pago por medio de un depósito
								bancario, te proporcionaremos nuestro número de
								cuenta de BANCOMER.
							</Typography>
							<Typography variant='body1' align='justify' component='p' gutterBottom>
								Si tu depósito fue realizado antes de las 14 hrs. se
								verá reflejado en nuestro sistema ese mismo día, si
								no será hasta el siguiente día hábil.
							</Typography>
							<Typography variant='body1' align='justify' component='p' gutterBottom>
								No olvides referenciar tu depósito, éste será el
								número de tu pedido.
							</Typography>
							<Typography variant='body1' align='justify' component='p' gutterBottom>
								Envía tu comprobante de pago a pagos@pedidos.com.mx
								o bien puedes cargar tu evidencia de pago en la
								seccion de tus pedidos
							</Typography>
							<Typography variant='body1'  component='p' gutterBottom>
								Posteriormente recibirás un correo confirmando tu
								compra.
							</Typography>
							</Box>
						</Box>	
					</Container>
			</Container>
		</Layout>
	);
};

export default FormaDePago;
