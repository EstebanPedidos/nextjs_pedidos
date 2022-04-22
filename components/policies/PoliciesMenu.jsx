import React from 'react';
// ICONS
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';

//Materil Components
import { Box } from '@material-ui/core';
//Custom components
import { Item } from './PoliciesItem';

// Others
const items = [
	{
		icon: QueryBuilderIcon,
		title: 'Tiempo de entrega',
		path: '/soho/politicas/politicas',
	},
	{
		icon: LocalShippingIcon,
		title: 'Condiciones de envio',
		path: '/soho/politicas/condiones-envio',
	},
	{
		icon: CreditCardIcon,
		title: 'Formas de pago',
		path: '/soho/politicas/forma-pago',
	},
	{
		icon: KeyboardReturnIcon,
		title: 'Devoluciones',
		path: '/soho/politicas/devoluciones-garantias',
	},
	{
		icon: LocalOfferIcon,
		title: 'Precios y existencia',
		path: '/soho/politicas/precios',
	},
	{
		icon: MarkunreadMailboxIcon,
		title: 'Cajas de papel',
		path: '/soho/politicas/cajas',
	},
];

export const PoliciesMenu = () => {
	return (
		<Box
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
