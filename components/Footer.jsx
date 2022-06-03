import React from 'react';
// import { Link as RouterLink} from 'react-router-dom';
import Link from 'next/link'
//mui5
import {Grid, Box, Typography,Skeleton,Divider,Button, Container } from '@mui/material';
import { Hidden } from '@material-ui/core';
//icons
import { makeStyles } from '@material-ui/core/styles';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
//components
import { logoUrl as logo } from '../constants';
import { FooterAccordion } from './Text/FooterAccordion';

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
		margin: '2.5%',
	},
	titlefooter: {
		fontSize: '20px',
		fontWeight: '600',
		marginBottom: '0.5rem'
	},
	ItemListFooter: {
		fontWeight: '500',
		textDecoration: 'none',
		color: theme.palette.text.primary,
	},
	ItemListFooterl: {
		fontWeight: '500',
		textDecoration: 'none',
		color: theme.palette.text.secondary,
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
			<Hidden smDown={true}>
				<FooterDesktop />
			</Hidden>
			<Hidden mdUp={true}>
				<FooterAccordion />
			</Hidden>
		</>
	);
}

export function FooterDesktop() {
	const classes = useStyles();

	return (
		
		<footer className='classes.footer'>
			<Box component="div" py={2}>
				<Grid
					container
					direction='row'
					justifyContent='center'
					alignItems='flex-end'
					spacing={4}
					>
						<Grid item>
							<Box component="div" p={1}>
								<img
									src="https://pedidos.com/myfotos/pedidos-com/pagina/footer/hp-partner.svg"
									srcSet=""
									alt="HP Partner First Platinum"
									loading="lazy"
								/>
							</Box>
						</Grid>	
						<Grid item>
							<Box component="div" p={1}>
								<img
									src="https://pedidos.com/myfotos/pedidos-com/pagina/footer/apple-ar.svg"
									srcSet=""
									alt="Apple  Authorized  Reseller"
									loading="lazy"
								/>
							</Box>
						</Grid>	
						<Grid item>
							<Box component="div" p={1}>
								<img 
									src="https://pedidos.com/myfotos/pedidos-com/pagina/footer/afiliado-amvo1.png"
									srcSet=""
									alt="Amvo"
									loading="lazy"
									
								/>
							</Box>
						</Grid>	
						<Grid item>
							<Box component="div" p={1}>
								<img
									src="https://pedidos.com/myfotos/pedidos-com/pagina/footer/epson.svg"
									srcSet=""
									alt="EPSON"
									loading="lazy"
								/>
							</Box>
						</Grid>	
						<Grid item>
							<Box component="div" p={1}>
								<img
									src="https://pedidos.com/myfotos/pedidos-com/pagina/footer/norton.svg"
									srcSet=""
									alt="Norton Secured"
									loading="lazy"
								/>
							</Box>
						</Grid>	
				</Grid>
			</Box>
			<Divider />
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
						<Grid item className={classes.ItemListFooter}
							// component={RouterLink} to="/"
						>
							<Link href="https://customerreviews.google.com/v/merchant?q=pedidos.com&c=MX&v=17">
         						 <a>
									Google
								</a>
							</Link>
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={RouterLink} to="/"
						>
							<Link href="/quienes-somos/prensa">
         						 <a>
									Prensa
								</a>
							</Link>
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={RouterLink} to="/"
						>
							<Link href="/">
         						 <a>
									Reviews
								</a>
							</Link>
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							//  component={RouterLink} to="/"
						>
							<Link href="/">
         						 <a>
								  	Se Proveedor
								</a>
							</Link>
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							//  component={RouterLink} to="/"
						>
							<Link href="/">
         						 <a>
								  	Hot Sale 2022
								</a>
							</Link>
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
							<Grid
							item
							className={classes.ItemListFooter}
							//  component={RouterLink} to="/"
						>
							<Link href="/servicios/pickup">
         						 <a>
								  	Pick Up Center
								</a>
							</Link>
						</Grid>
							
						</Grid>
						<Grid
							item
							className={classes.ItemListFooter}
							// component={Link} to="/"
						>
							<Link href="/servicios/empresas">
         						 <a>
								  Para empresas
								</a>
							</Link>
							
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
					<Grid container direction='column' spacing={2}>
						<Grid item className={classes.titlefooter}>
							Contacto
						</Grid>
						<Grid item><Typography className={classes.titlefooter}>55 5015-8100 ó 01 800 8138181</Typography> </Grid>
						<Grid item>Horario de atención 9:00 a 18:30 hrs</Grid>
						<Grid item>
							<Button variant='outlined' color='primary' fullWidth>
								Cotizar precio por volumen
							</Button>
						</Grid>
						<Grid item>
							<Button variant='outlined' color='primary' fullWidth>
								Comunícate con ventas
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				justifyContent='flex-start'
				className={classes.mainContainer}>
				<Grid item className={classes.gridLastItem}>
					<Box component="div" px={5}>
						<Grid container	direction='row' justifyContent="space-around"
							alignItems='center' spacing={6}>
							<Grid item className={classes.ItemListFooterl} color="textSecondary">
								Aviso de privacidad
							</Grid>

							<Grid
								item
								className={classes.ItemListFooterl}
								// component={Link} to="/"
							>
								Términos & Condiciones
							</Grid>

							<Grid
								item
								className={classes.ItemListFooterl}
								// component={Link} to="/"
							>
								Mapa de sitio
							</Grid>
						</Grid>
					</Box>
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
