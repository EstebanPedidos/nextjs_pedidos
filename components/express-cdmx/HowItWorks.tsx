import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { HowItWorksItem } from './HowItWorksItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Paddined } from './Banner';

import HelpIcon from '@mui/icons-material/Help';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const useStyles = makeStyles({
	withoutShadow: {
		boxShadow: 'none !important',
	},
});

export const HowItWorks = () => {
	const classes = useStyles();
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
			text: 'Actualmente esta disponible en la Ciudad de México',
			icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/problemas.webp',
		},
		{
			title: 'Entregas',
			bigTitle: false,
			text: 'Costo extra +$45 pesos ya con IVA incluido y reflejado en la factura de compra.',
			icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/home19/pp/pe.svg',
		},
		{
			title: 'Paga al recibir',
			bigTitle: false,
			text: 'Tienes la opción dentro del carrito de compras para pagar al momento de la entrega.',
			icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/home19/pp/paga-recibe.svg',
		},
	]);

	return (
		<Card className={classes.withoutShadow}>
			<CardContent>
				<Paddined>
					<Container maxWidth='lg'>
						<Grid container spacing={2}>
							{data.map(
								(item: any, index: number): JSX.Element => (
									<HowItWorksItem item={item} key={index} />
								)
							)}
						</Grid>
					</Container>
				</Paddined>
			</CardContent>
		</Card>
	);
};

export default HowItWorks;
