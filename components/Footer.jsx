import React from 'react';
// import { Link as RouterLink} from 'react-router-dom';
import Link from 'next/link';
//mui5
import {
	Grid,
	Box,
	Typography,
	Skeleton,
	Divider,
	Button,
	Container,
} from '@mui/material';
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
//Modales
import Cotizar from '../pages/articulos/Modales/Cotizar';
import Help from '../components/modals/Help';
import { LiveChatWidget, EventHandlerPayload } from '@livechat/widget-react';

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
		marginBottom: '0.5rem',
	},
	ItemListFooter: {
		fontWeight: '500',
		textDecoration: 'none',
		color: theme.palette.text.primary,
		boxShadow: 'none!important',
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
		margin: ' 1.8rem ', width:'100', boxShadow:'none'
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
			<LiveChatWidget license='7731061' visibility='minimized' />
			<Box component='div' py={2}>
				<Grid
					container
					direction='row'
					justifyContent='center'
					alignItems='center'
					spacing={4}>
					<Grid item>
						<Box component='div' p={1}>
							<img
								src='https://pedidos.com/myfotos/pedidos-com/pagina/footer/hp-partner.svg'
								srcSet=''
								alt='HP Partner First Platinum'
								loading='lazy'
							/>
						</Box>
					</Grid>
					<Grid item>
						<Box component='div' p={1}>
							<img
								src='https://pedidos.com/myfotos/pedidos-com/pagina/footer/aar.svg'
								srcSet=''
								alt='Apple  Authorized  Reseller'
								loading='lazy'
							/>
						</Box>
					</Grid>
					<Grid item>
						<Box component='div' p={1}>
							<img
								src='https://pedidos.com/myfotos/pedidos-com/pagina/footer/afiliado-amvo1.png'
								srcSet=''
								alt='Amvo'
								loading='lazy'
							/>
						</Box>
					</Grid>
					<Grid item>
						<Box component='div' p={1}>
							<img
								src='https://pedidos.com/myfotos/pedidos-com/pagina/footer/epson.svg'
								srcSet=''
								alt='EPSON'
								loading='lazy'
							/>
						</Box>
					</Grid>
					<Grid item>
						<Box component='div' p={1}>
							<img
								src='https://pedidos.com/myfotos/pedidos-com/pagina/footer/norton.svg'
								srcSet=''
								alt='Norton Secured'
								loading='lazy'
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
						<Grid item className={classes.ItemListFooter}>
							<Link href='https://customerreviews.google.com/v/merchant?q=pedidos.com&c=MX&v=17'>
								<a>Google</a>
							</Link>
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							<Link href='/quienes-somos/prensa'>
								<a>Prensa</a>
							</Link>
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							<Link href='/'>
								<a>Reviews</a>
							</Link>
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							<Link href='/'>
								<a>Se Proveedor</a>
							</Link>
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							<Link href='/hotsale'>
								<a>Hot Sale</a>
							</Link>
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Grid container direction='column' spacing={3}>
						<Grid item className={classes.titlefooter}>
							Servicios
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							<Link href='/servicios/pickup'>
								<a>Pick Up Center</a>
							</Link>
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							<Link href='/servicios/empresas'>
								<a>Para empresas</a>
							</Link>
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							<Link href='/soho/cliente/planes-de-proteccion'>
								<a>Planes de protección</a>
							</Link>
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							<Link href='/programa-de-reciclaje'>
								<a>Programa de reciclaje</a>
							</Link>
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							<Link href='/uniclick'>
								<a>Uniclick: Crédito PYME</a>
							</Link>
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Grid container direction='column' spacing={3}>
						<Grid item className={classes.titlefooter}>
							Ayuda
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							Facturación
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							<Link href='/soporte-tecnico'>
								<a>Soporte Técnico</a>
							</Link>
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							<Link href='/soho/politicas/forma-de-pago'>
								<a>Forma de Pago</a>
							</Link>
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							<Link href='/soho/politicas'>
								<a>Forma de Envíos</a>
							</Link>
						</Grid>
						<Grid item className={classes.ItemListFooter}>
							Garantías & devoluciones
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Grid container direction='column' spacing={2}>
						<Grid item className={classes.titlefooter}>
							Contacto
							<Typography className={classes.titlefooter}>
								55 5015-8100 ó 01 800 8138181
							</Typography>
						</Grid>

						<Grid item>Horario de atención 9:00 a 18:30 hrs</Grid>
						<Grid item>
							<Cotizar />
						</Grid>
						<Grid item>
							<Help tipo={'1'} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				justifyContent='flex-start'
				className={classes.mainContainer}>
				<Grid item className={classes.gridLastItem} sx={{width:'100%', padding:'inherit', position:'relative', boxShadow:'none'}}>
					<Box component='div' px={5}>
						<Grid 
							container
							direction='row'
							justifyContent='flex-start'
							alignItems='center'
							spacing={6}>
							<Grid
								item
								className={classes.ItemListFooterl}
								color='textSecondary'>
								<Link href='/soho/cliente/aviso-privacidad'>
									<a>Aviso de privacidad</a>
								</Link>
							</Grid>
							<Grid item className={classes.ItemListFooterl}>
								<Link href='/soho/cliente/terminos-y-condiciones'>
									<a>Términos & Condiciones</a>
								</Link>
							</Grid>
							<Grid item className={classes.ItemListFooterl}>
								<Link href='/RegistroUsuario' passHref>
									<Button component='a' color='primary'>
										Registrate
									</Button>
								</Link>
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
				<Grid item className={classes.gridLastItem} sx={{padding:'inherit', position:'relative', boxShadow:'none'}}>
					<Grid container direction='column' spacing={2}>
						<Grid item>
							{/* <Link to="/Home"> */}
							<img
								sx={{ width: '125px' }}
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
							Copyright © {year} {name} - Todos los derechos reservados
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
							<InstagramIcon className={classes.socialMediaIcon} />
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
			</Grid>
		</footer>
	);
}
