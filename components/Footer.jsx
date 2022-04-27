import React from 'react';
// import { Link as RouterLink} from 'react-router-dom';
import {Grid,Typography,Skeleton,Divider,Button } from '@mui/material';
// import logo from '../assets/pedidos-logo.svg';
import { logoUrl as logo } from '../constants';
import { makeStyles } from '@material-ui/core/styles';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { FooterAccordion } from './Text/FooterAccordion';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: '#F6F6F6',
		width: '100%',
		position: 'relative',
	},
	mainContainer: {
		position: 'relative',
	},
	gridItem: {
		margin: '4.5rem',
	},
	titlefooter: {
		fontWeight: '600',
	},
	ItemListFooter: {
		textDecoration: 'none',
		color: theme.palette.text.primary,
	},
	copyrightItem: {
		color: theme.palette.text.secondary,
	},
	gridLastItem: {
		margin: ' 1.8rem ',
	},
	socialMediaIcon: {
		textDecoration: 'none',
		color: theme.palette.text.primary,
	},
	logo: {
		height: '1.5em',
	},
}));
const name = 'Pedidos.com';
const currentDate = new Date();
const year = currentDate.getFullYear();

export function Footer() {
	return (
		<>
			<Hidden smDown='hiden'>
				<FooterDesktop />
			</Hidden>
			<Hidden smUp='hiden'>
				<FooterAccordion />
			</Hidden>
		</>
	);
}

export function FooterDesktop() {
	const classes = useStyles();

	return (
		<footer className='classes.footer'>
			<Grid
				container
				direction='row'
				justifyContent='space-evenly'
				alignItems='stretch'
				className={classes.mainContainer}>
				<Grid item className={classes.gridItem}>
					<Grid container direction='column' spacing={3}>
						<Grid item className={classes.titlefooter}>
							Conocenos
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={RouterLink} to="/"
						>
							Google
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={RouterLink} to="/"
						>
							Prensa
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={RouterLink} to="/"
						>
							Reviews
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							//  component={RouterLink} to="/"
						>
							Se Proveedor
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Grid container direction='column' spacing={3}>
						<Grid item className={classes.titlefooter}>
							Servicios
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Pick Up Center
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Para empresas
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Planes de protección
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Programa de reciclaje
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Uniclick: Crédito PYME
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Grid container direction='column' spacing={3}>
						<Grid item className={classes.titlefooter}>
							Ayuda
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Facturación
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Soporte Técnico
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Forma de Pago
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Forma de Envíos
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Garantías & devoluciones
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Grid container direction='column' spacing={3}>
						<Grid item className={classes.titlefooter}>
							Contacto
						</Grid>
						<Grid item>Horario de atención 9:00 a 18:30 hrs</Grid>
						<Grid item>
							<Button variant='outlined' color='primary'>
								Ver opciones
							</Button>
						</Grid>

						<Grid item>
							<Button variant='outlined' color='primary'>
								Cotizar por volumen
							</Button>
						</Grid>
						<Grid item>
							<Button color='primary'>
								Comunícate con ventas
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				justifyContent='center'
				className={classes.mainContainer}>
				<Grid item className={classes.gridLastItem}>
					<Grid
						container
						direction='row'
						justifyContent='flex-start'
						alignItems='center'
						spacing={2}>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Aviso de privacidad
						</Grid>

						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Términos & Condiciones
						</Grid>

						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							Mapa de sitio
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Divider />
			<Grid
				container
				direction='row'
				justifyContent='space-evenly'
				alignItems='center'
				className={classes.mainContainer}>
				<Grid item className={classes.gridLastItem}>
					<Grid container direction='column' spacing={2}>
						<Grid item>
							{/* <Link to="/Home"> */}
							<img
								alt='Pedidos.com'
								src={logo}
								className={classes.logo}
							/>
							{/* </Link> */}
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridLastItem}>
					<Grid container direction='column' spacing={2}>
						<Grid item className={classes.copyrightItem}>
							Copyright © {year} {name} - Todos los derechos
							reservados
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridLastItem}>
					<Grid
						container
						direction='row'
						justifyContent='space-around'
						alignItems='center'
						spacing={3}>
						<Grid
							item
							component={'a'}
							href='https://www.facebook.com/pedidoscom/'
							rel='noopener noreferrer'>
							<FacebookIcon className={classes.socialMediaIcon} />
						</Grid>
						<Grid
							item
							component={'a'}
							href='https://www.linkedin.com/company/pedidos-com/'
							rel='noopener noreferrer'
							target='_blank'>
							<LinkedInIcon className={classes.socialMediaIcon} />
						</Grid>
						<Grid
							item
							component={'a'}
							href='https://www.instagram.com/pedidoscom/'
							rel='noopener noreferrer'
							target='_blank'>
							<InstagramIcon
								className={classes.socialMediaIcon}
							/>
						</Grid>
						<Grid
							item
							component={'a'}
							href='https://www.youtube.com/user/PedidosTV'
							rel='noopener noreferrer'
							target='_blank'>
							<YouTubeIcon className={classes.socialMediaIcon} />
						</Grid>
						<Grid
							item
							component={'a'}
							href='https://twitter.com/pedidos_com?'
							rel='noopener noreferrer'
							target='_blank'>
							<TwitterIcon className={classes.socialMediaIcon} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridLastItem}>
					<Grid container direction='row' spacing={2}>
						<Grid item>
							<Button variant='contained' color='primary'>
								Registrate
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</footer>
	);
}
