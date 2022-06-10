import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { HowItWorksItem } from './HowItWorksItem';

export const HowItWorks = () => {
	const [data] = useState([
		{
			title: '¿Cómo funciona?',
			bigTitle: true,
			text: 'Selecciona la opción si es aplicable dentro de tu carrito de compra',
			icon: undefined,
		},
		{
			title: 'Exclusivo CDMX',
			bigTitle: false,
			text: 'Actualmente esta disponible en la Ciudad se México. Consulta restricciones aquí',
			icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/problemas.webp',
			iconWidth: 50,
		},
		{
			title: 'Entregas',
			bigTitle: false,
			text: 'Costo extra +$45 pesos ya con IVA incluido y reflejado en la factura de compra.',
			icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/home19/pp/pe.svg',
			iconWidth: 60,
		},
		{
			title: 'Paga al recibir',
			bigTitle: false,
			text: 'Tienes la opción dentro del carrito de compras para pagar al momento de la entrega.',
			icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/home19/pp/paga-recibe.svg',
			iconWidth: 60,
		},
	]);

	return (
		<Box py={7} bgcolor='white'>
			<Container maxWidth='lg'>
				<Grid spacing={0.5} container>
					{data.map(
						(item: any, index: number): JSX.Element => (
							<HowItWorksItem item={item} key={index} />
						)
					)}
				</Grid>
			</Container>
		</Box>
	);
};

export default HowItWorks;
