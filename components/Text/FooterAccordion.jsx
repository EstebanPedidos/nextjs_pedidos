import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: '5rem',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

const itemsConocenos = [
	{
		content: 'Prensa',
		to: '/',
	},
	{
		content: 'Comerciales',
		to: '/',
	},
	{
		content: 'Se proveedor',
		to: '/',
	},
	{
		content: 'Comentarios',
		to: '/',
	},
	{
		content: 'Aviso de Privacidad',
		to: '/',
	},
];
const itemsServicios = [
	{
		content: 'Modificas Facturas',
		to: '/',
	},
	{
		content: 'Soporte técnico',
		to: '/',
	},
	{
		content: 'Unclick',
		to: '/',
	},
	{
		content: 'Punto de venta',
		to: '/',
	},
	{
		content: 'Protección para dispositivos',
		to: '/',
	},
	{
		content: '¿Que computadora HP comprar?',
		to: '/',
	},
];
const itemsTiendas = [
	{
		content: 'Tienda oficial HP',
		to: '/',
	},
	{
		content: 'Multifuncionales Epson',
		to: '/',
	},
	{
		content: 'Papelería',
		to: '/',
	},
	{
		content: 'Newell',
		to: '/',
	},
	{
		content: 'Muebles',
		to: '/',
	},
];
const itemsAyuda = [
	{
		content: 'Políticas de envío',
		to: '/',
	},
	{
		content: 'Formas de pago',
		to: '/',
	},
	{
		content: 'Terminos y condiciones',
		to: '/',
	},
];

export function FooterAccordion() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CustomAcordion title='Conoceno'>
				<CustomList data={itemsConocenos} />
			</CustomAcordion>
			<CustomAcordion title='Servicios'>
				<CustomList data={itemsServicios} />
			</CustomAcordion>
			<CustomAcordion title={'Tiendas'}>
				<CustomList data={itemsTiendas} />
			</CustomAcordion>
			<CustomAcordion title={'Ayuda'}>
				<CustomList data={itemsAyuda} />
			</CustomAcordion>
		</div>
	);
}

const CustomList = ({ data = [1, 2] }) => {
	return (
		<List
			style={{
				marginBottom: '1rem',
			}}>
			{data.map(({ content }, indx) => (
				<ListItem component={'li'} key={indx} button>
					<span
						style={{
							color: 'gray',
						}}>
						{content}
					</span>
				</ListItem>
			))}
		</List>
	);
};

const CustomAcordion = ({ title, children }) => {
	const { heading } = useStyles();
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography className={heading}>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
};
