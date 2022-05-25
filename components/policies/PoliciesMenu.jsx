import React from 'react';
//MUI5
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
//Material Components
import { Box } from '@mui/material';
//Custom components
import { Item } from './PoliciesItem';

// Others
const items = [
	{
		icon: AccessTimeOutlinedIcon,
		title: 'Tiempo de entrega',
		path: '/soho/politicas',
	},
	{
		icon: LocalShippingOutlinedIcon,
		title: 'Condiciones de envio',
		path: '/soho/politicas/condiciones-de-envio',
	},
	{
		icon: CreditCardOutlinedIcon,
		title: 'Formas de pago',
		path: '/soho/politicas/forma-de-pago',
	},
	{
		icon: AssignmentReturnOutlinedIcon,
		title: 'Devoluciones',
		path: '/soho/politicas/devoluciones-garantias',
	},
	{
		icon: LocalOfferOutlinedIcon,
		title: 'Precios y existencia',
		path: '/soho/politicas/precios',
	},
	{
		icon: Inventory2OutlinedIcon,
		title: 'Cajas de papel',
		path: '/soho/politicas/cajas',
	},
];

export const PoliciesMenu = () => {
	return (
		<Box  mb={6}
			display='flex'
			flexWrap='wrap'
			gridGap={'.5rem'}
			justifyContent='center'>
			{items.map(({ title, icon, path }) => (
				<Item key={title} title={title} icon={icon} path={path} />
			))}
		</Box>
	);
};
