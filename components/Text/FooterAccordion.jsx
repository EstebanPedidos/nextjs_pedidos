import React from 'react';

import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	List,
	ListItem,
} from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: '5rem',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	titlefooter: {
		fontSize: '20px',
		fontWeight: '600',
		marginBottom: '0.5rem'
	},
}));

const itemsConocenos = [
	{
		content: 'Google',
		to: '/',
	},
	{
		content: 'Prensa',
		to: '/',
	},
	{
		content: 'Reviews',
		to: '/',
	},
	{
		content: 'Se Proveedor',
		to: '/',
	},
	{
		content: 'Hot Sale',
		to: '/',
	},
	{
		content: 'Aviso de Privacidad',
		to: '/',
	},
];
const itemsServicios = [
	{
		content: 'Pick Up Center',
		to: '/',
	},
	{
		content: 'Para empresas',
		to: '/',
	},
	{
		content: 'Planes de protección',
		to: '/',
	},
	{
		content: 'Programa de reciclaje',
		to: '/',
	},
	{
		content: 'Uniclick: Crédito PYME',
		to: '/',
	},
];
const itemsAyuda = [
	{
		content: 'Facturación',
		to: '/',
	},
	{
		content: 'Forma de pago',
		to: '/',
	},
	{
		content: 'Forma de Envíos',
		to: '/',
	},
	{
		content: 'Soporte Técnico',
		to: '/',
	},
	{
		content: 'Garantías & Devoluciones',
		to: '/',
	},
];
const itemsContacto = [
	{
		content: 'Horario de atención 9:00 a 18:30 hrs',
	},
	{
		content: 'Cotizar por volumen',
		to: '/',
	},
	{
		content: 'Comunícate con ventas',
		to: '/',
	},
];

export function FooterAccordion() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CustomAcordion title={
				<Typography variant="subtitle2" component='span' className={classes.titlefooter}>
					Conocenos
				</Typography>
			}>
				<CustomList data={itemsConocenos} />
			</CustomAcordion>
			<CustomAcordion title={
				<Typography variant="subtitle2" component='span' className={classes.titlefooter}>
					Servicios
				</Typography>
			}>
				<CustomList data={itemsServicios} />
			</CustomAcordion>
			<CustomAcordion title=
			{
				<Typography variant="subtitle2" component='span' className={classes.titlefooter}>
					Ayuda
				</Typography>
			}>
				<CustomList data={itemsAyuda} />
			</CustomAcordion>
			<CustomAcordion title={
				<Typography variant="subtitle2" component='span' className={classes.titlefooter}>
					Contacto
				</Typography>
			}>
				<CustomList data={itemsContacto} />
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
		<Accordion elevation={0}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography className={heading}>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
};
