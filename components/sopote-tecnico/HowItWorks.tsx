import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { HowItWorksItem, DataItem } from './HowItWorksItem';

export const HowItWorks = () => {
	const [data] = useState<DataItem[]>([
		{
			title: '¿Cómo funciona?',
			bigTitle: true,
			text: 'Te ayudamos a resolver las dudas frecuentes con tus nuevos equipos comprados en Pedidos.com',
		},
		{
			title: 'Instalación',
			bigTitle: false,
			text: 'Resolvemos contigo las primeras dudas que surgen al iniciar con tu(s) equipo(s).',
			icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/instalacion.webp',
			iconWidth: 50,
		},
		{
			title: 'Configuración',
			bigTitle: false,
			text: 'Aprende a preparar el equipo adquirido de acuerdo a tus necesidades diarias.',
			icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/Configuracion.webp',
			iconWidth: 50,
		},
		{
			title: 'Problemas',
			bigTitle: false,
			text: 'Solución de problemas y soporte de posibles problemas con tu(s) equipo.',
			icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/problemas.webp',
			iconWidth: 50,
		},
	]);

	return (
		<Box pt={6} pb={3} bgcolor='white'>
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
