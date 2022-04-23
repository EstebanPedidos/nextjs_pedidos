import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { HowItWorksItem } from './HowItWorksItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
			icon: HelpIcon,
		},
		{
			title: 'Entregas',
			bigTitle: false,
			text: 'Costo extra +$45 pesos ya con IVA incluido y reflejado en la factura de compra.',
			icon: MoreTimeIcon,
		},
		{
			title: 'Paga al recibir',
			bigTitle: false,
			text: 'Tienes la opción dentro del carrito de compras para pagar al momento de la entrega.',
			icon: CreditCardIcon,
		},
	]);

	return (
		<Card className={classes.withoutShadow}>
			<CardContent>
				<Paddined>
					<Grid container spacing={2}>
						{data.map(
							(item: any, index: number): JSX.Element => (
								<HowItWorksItem item={item} key={index} />
							)
						)}
					</Grid>
				</Paddined>
			</CardContent>
		</Card>
	);
};

export default HowItWorks;
