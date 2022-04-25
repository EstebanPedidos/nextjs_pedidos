import React from 'react';
// MATERIAL UI COMPONENTS
// import { Box, Container, Icon, Typography } from '@material-ui/core';
import { Box, Container, Icon, Typography } from '@mui/material';

//CUSTOM COMPONENTS
import { Layout } from '/layout/Layout';
import { HeadingPolicies, PoliciesMenu } from '/components';

export const Politicas = () => {
	return (
		<Layout>
			<Container maxWidth='xl'>
				<HeadingPolicies>
					Políticas de envío, devoluciones y cancelaciones
				</HeadingPolicies>
				<PoliciesMenu />
				<Container maxWidth='md' component={'section'}>
					<Box marginTop='3em'>
						<Typography
							variant='h5'
							component={'h3'}
							color='primary'
							gutterBottom>
							Tiempo de entrega
						</Typography>
						<Box marginTop='1rem'>
							<Typography component='p' gutterBottom>
								Si vives en CDMX te entregamos tu pedido el
								mismo día con entregas Express o en Pedidos.com
								PickUp Center siempre y cuando el pedido no se
								encuentre en diferentes bodegas.
							</Typography>
							<Typography gutterBottom component='p'>
								Con las formas de envío que ofrecemos, el pago
								debe de ser efectúado en 1 hra como máximo
								después de haber reservado el producto para
								poder respetar el horario y fecha de entrega.
							</Typography>
							<Typography component='p' gutterBottom>
								En caso de que el pedido salga de diferentes
								bodegas el tiempo se prolongará de 1 a 5 días
								hábiles. Antes de pagar tu pedido aparecerá la
								leyenda si el pedido sale o no de diferentes
								bodegas.
							</Typography>
							<Typography component='p' gutterBottom>
								En caso de que el producto tenga el aviso de
								entrega más dos días, quiere decir que ese
								producto se demorará 2 días en embarcarse o en
								enviarse, por lo que, no aplicará la entrega el
								mismo día y a su vez el tiempo de entrega se
								demorará dos días extras.
							</Typography>
							<Typography component='p' gutterBottom>
								El tiempo habitual de entrega de los pedidos es
								de 1 a 5 días hábiles.
							</Typography>
							<Typography component='p' gutterBottom>
								Existen códigos postales en donde ninguna de
								nuestras paqueterías cumple con el tiempo de
								entrega de 1 a 5 días hábiles. Por tal motivo no
								podemos comprometernos con una fecha.
							</Typography>
							<Typography component='p' gutterBottom>
								En caso de suscitarse algún problema, nos
								comprometemos para dar un seguimiento oportuno
								hasta que tu pedido sea entregado en óptimas
								condiciones.
							</Typography>
							<Typography component='p' gutterBottom>
								Pedidos.com PickUp Center. Este servicio de
								entrega está disponible de Lunes a Sábado en
								horarios laborales. Al pedir en línea en
								Pedidos.com la opción será válida o podrá usarse
								siempre y cuando la cantidad máxima de volumen
								del producto/pedido a entregar no sobrepase y no
								ocupe un volumen o espacio superior al
								comprendido a 0.13 metros cúbicos y no tener un
								peso mayor de 20kg. La opción de este servicio
								se mostrará en el carrito de compras si es
								válida para la entrega del pedido. No olvides
								que para recoger el pedido debe de llegar un
								correo electrónico con el código QR que debes
								llevar para poder recoger tu pedido en
								Pedidos.com PickUp Center. El tiempo prometido
								de entrega dependerá de los productos de tu
								pedido, donde las entregas podrán ser en 3 horas
								o bien al día siguiente siempre y cuando sea día
								hábil y cumpla con los horarios hábiles
								laborales.
							</Typography>
							<Typography component='p' gutterBottom>
								Entrega Express. El servicio de Entrega Express
								está disponible de Lunes a Viernes en días
								laborales en un horario de 9:00hrs a 17:00hrs,
								tiene un costo de $45 pesos ya con IVA incluido.
								Los productos participantes para este servicio
								serán aquellos que se muestren en la sección
								Entrega Express y sólo se podrá comprar la
								cantidad máxima que entre en una motocicleta de
								reparto, está cantidad se mostrará en el carrito
								de compras, para que el usuario esté consiente
								de cuanto espacio tiene disponible en la
								motocicleta de reparto. El tiempo prometido de
								entrega máximo 3 horas, una vez sea confirmado
								el pedido por alguno de nuestros ejecutivos, en
								caso de que el pedido no llegue en 3 horas, el
								cargo extra de $45 pesos será reembolsado en un
								lapso no mayor a 2 días. Sólo aplica en los
								pagos contra entrega o al recibir, no se
								aceptarán otro tipos de pagos.
							</Typography>
						</Box>
					</Box>
				</Container>
			</Container>
		</Layout>
	);
};

export default Politicas;
