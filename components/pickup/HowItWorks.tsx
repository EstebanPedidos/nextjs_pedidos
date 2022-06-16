//MUI
import { Container, Box, Grid } from '@mui/material';
import { useState } from 'react';
import { HowItWorksItem, DataItem } from './HowItWorksItem';

export const HowItWorks = () => {
	const [data] = useState<DataItem[]>([
		{
			title: '¿Cómo funciona?',
			bigTitle: true,
			text: 'Dentro de tu carrito de compras puedes seleccionar esta forma de entrega. Recibe tus productos en nuestro PickUp Center. ',
			fontSize: 18,
		},
		{
			title: 'Notificaciones e-mail',
			bigTitle: false,
			text: 'Se notificará a tu correo eléctronico cuando tu pedido se encuentre listo para recoger. <strong>No olvides llevar el código QR para poder hacer la entrega de tu pedido.</strong>',
			icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/problemas.webp',
			iconWidth: 50,
		},
		{
			title: 'Soporte técnico',
			bigTitle: false,
			text: 'Si tienes duda de alguno de tus equipos tecnológicos puedes solicitar el apoyo para resolver dudas o configurarlo de acuerdo a tus necesidades.',
			icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/instalacion.webp',
			iconWidth: 50,
		},
	]);

	return (
		<Container maxWidth='lg'>
			<Grid spacing={1} container>
				{data.map(
					(item: any, index: number): JSX.Element => (
						<HowItWorksItem item={item} key={index} />
					)
				)}
			</Grid>
		</Container>
	);
};

export default HowItWorks;
