import React from 'react';
import Link from 'next/link';
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
		to: 'https://customerreviews.google.com/v/merchant?q=pedidos.com&c=MX&v=17',
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
		to: '/soho/cliente/aviso-privacidad',
	},
	{
		content: 'Terminos y condiciones',
		to: '/soho/cliente/terminos-y-condiciones',
	},
];
const itemsServicios = [
	{
		content: 'Pick Up Center',
		to: '/servicios/pickup',
	},
	{
		content: 'Para empresas',
		to: '/servicios/empresas',
	},
	{
		content: 'Planes de protección',
		to: '/soho/cliente/planes-de-proteccion',
	},
	{
		content: 'Programa de reciclaje',
		to: '/programa-de-reciclaje',
	},
	{
		content: 'Uniclick: Crédito PYME',
		to: '/uniclick/credito',
	},
];
const itemsAyuda = [
	{
		content: 'Facturación',
		to: '/soho/cliente/modificar-factura',
	},
	{
		content: 'Forma de pago',
		to: '/soho/politicas/forma-pago',
	},
	{
		content: 'Forma de Envíos',
		to: '/soho/politicas',
	},
	{
		content: 'Soporte Técnico',
		to: 'soporte-tecnico',
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
			{data.map(({ content, to }, indx) => (
				<ListItem component={'li'}  key={indx} button>
					{/* <Link href={to}>
						<a> */}
						<Link href={to+''}>
							<a>
								<span style={{
										color: 'gray',
									}}>
									
									{content}
								</span>
							</a>
						</Link>
							
						{/* </a>
					</Link> */}
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
