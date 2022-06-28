import React from 'react';
// import { Link as RouterLink} from 'react-router-dom';
import Link from 'next/link';
//mui5
import {
	Grid, Stack, IconButton,
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
		width: '100%',
		position: 'relative',
	},
	mainContainer: {
		position: 'relative',
		width: '100%',
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
		margin: ' 1.8rem ', width:'initial', boxShadow:'none',position:'relative'
	},
	socialMediaIcon: {
		textDecoration: 'none',
		color: theme.palette.text.primary,
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
				<Grid sx={{width:'100%'}}
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
			<Box component='div' sx={{width:'100%'}}>
				<Grid sx={{width:'100%'}}
					container
					direction='row'
					justifyContent='space-evenly'
					alignItems='stretch'
					className={classes.mainContainer}>
					<Grid item className={classes.gridItem} sx={{ width: 'initial', height: 'inherit'}}>
						<Box component="div" sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
							<Grid container direction='column' spacing={3} sx={{position: 'relative', width: 'initial', height: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
								<Grid item className={classes.titlefooter} sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
									<Typography variant="h6" fontWeight="600">Conocenos</Typography>
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='https://customerreviews.google.com/v/merchant?q=pedidos.com&c=MX&v=17'>
										<a>
										<Typography variant="body1" fontWeight="500">Google</Typography>
										</a>
									</Link>
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='/quienes-somos/prensa'>
										<a>
										<Typography variant="body1" fontWeight="500">Prensa</Typography>
										</a>
									</Link>
								</Grid>
								{/* <Grid item className={classes.ItemListFooter}>
									<Link href='/'>
										<a>
										<Typography variant="body1" fontWeight="500">Reviews</Typography>
										</a>
									</Link>
								</Grid> */}
								<Grid item className={classes.ItemListFooter}>
										<a href="mailto:info@pedidos.com.mx">
										<Typography variant="body1" fontWeight="500">Se Proveedor</Typography>
										</a>
									
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='/hotsale'>
										<a>
										<Typography variant="body1" fontWeight="500">Hot Sale</Typography>
										</a>
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Grid>
					<Grid item className={classes.gridItem} sx={{ width: 'initial', height: 'inherit'}}>
						<Box component="div" sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
							<Grid container direction='column' spacing={3} sx={{position: 'relative', width: 'initial', height: 'inherit', height: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
								<Grid item className={classes.titlefooter}>
									<Typography variant="h6" fontWeight="600" sx={{position: 'relative', width: 'inherit', padding: '0', boxShadow: 'none'}}>Servicios</Typography>
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='/servicios/pickup'>
										<a>
										<Typography variant="body1" fontWeight="500">Pick Up Center </Typography></a>
									</Link>
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='/servicios/empresas'>
										<a>
										<Typography variant="body1" fontWeight="500">Para empresas </Typography></a>
									</Link>
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='/soho/cliente/planes-de-proteccion'>
										<a>
										<Typography variant="body1" fontWeight="500">Planes de protección </Typography></a>
									</Link>
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='/programa-de-reciclaje'>
										<a>
										<Typography variant="body1" fontWeight="500">Programa de reciclaje </Typography></a>
									</Link>
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='/uniclick'>
										<a>
										<Typography variant="body1" fontWeight="500">Uniclick Crédito </Typography>
										</a>
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Grid>
					<Grid item className={classes.gridItem} sx={{ width: 'initial', height: 'inherit'}}>
						<Box component="div" sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
							<Grid container direction='column' spacing={3} sx={{position: 'relative', width: 'initial', height: 'inherit', padding: 'inherit', boxShadow: 'none'}} >
								<Grid item className={classes.titlefooter} sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
									<Typography variant="h6" fontWeight="600">Ayuda</Typography>
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='/soho/cliente/modificar-factura'>
										<a>
											<Typography variant="body1" fontWeight="500">Facturación</Typography>
										</a>
									</Link>
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='/soporte-tecnico'>
										<a>
										<Typography variant="body1" fontWeight="500">Soporte Técnico </Typography>
										</a>
									</Link>
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='/soho/politicas/forma-de-pago'>
										<a>
										<Typography variant="body1" fontWeight="500">Forma de Pago </Typography>
										</a>
									</Link>
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='/soho/politicas'>
										<a>
										<Typography variant="body1" fontWeight="500">Forma de Envíos</Typography>
										</a>
									</Link>
								</Grid>
								<Grid item className={classes.ItemListFooter}>
									<Link href='/soho/devoluciones-garantias'>
										<a>
										<Typography variant="body1" fontWeight="500">Garantías & devoluciones</Typography>
										</a>
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Grid>
					<Grid item className={classes.gridItem} sx={{ width: 'initial', height: 'inherit'}}>
						<Box component="div" sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
							<Grid container direction='column' spacing={2} sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}} >
								<Grid item className={classes.titlefooter} sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
									<Typography variant="h6" fontWeight="600">Contacto
										<Typography className={classes.titlefooter}>
											55 5015-8100 ó 01 800 8138181
										</Typography>
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
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box component='div' sx={{width:'100%'}}>
				<Grid sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}
					container
					justifyContent='flex-start'
					className={classes.mainContainer}>
					<Grid item className={classes.gridLastItem} sx={{width:'100%', padding:'inherit', position:'relative', boxShadow:'none'}}>
						<Box component='div' px={6} sx={{ width: '100%'}}>
							<Stack direction="row" alignItems='center' spacing={4} sx={{ width: '100%'}}>
								<Box component="div">
									<Link href='/soho/cliente/aviso-privacidad'>
										<a>
										<Typography variant="body1" fontWeight="500" color="textSecondary">Aviso de privacidad</Typography>
										</a>
									</Link>
								</Box>
								<Box component="div">
									<Link href='/soho/cliente/terminos-y-condiciones'>
											<a>
												<Typography variant="body1" fontWeight="500" color="textSecondary">Términos & Condiciones</Typography>
											</a>
									</Link>
								</Box>
								<Box component="div">
									<Link href='/RegistroUsuario' passHref>
											<Button component='a' size='large' color='primary'>
												Registrate
											</Button>
									</Link>
								</Box>
							</Stack>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Divider />
			<Grid
				container
				direction='row'
				justifyContent='space-evenly'
				alignItems='center'
				className={classes.mainContainer}>
				<Grid item className={classes.gridLastItem} sx={{padding:'inherit', position:'relative', boxShadow:'none'}}>
					<Box sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
						<Box item px={2}>
							{/* <Link to="/Home"> */}
							<img
								sx={{ width: '125px', position:'relative', boxShadow:'none', padding:'initial', backgroundColor:'none' }}
								alt='Pedidos.com'
								src={logo}
								
							/>
							{/* </Link> */}
						</Box>
					</Box>
				</Grid>
				<Grid item className={classes.gridLastItem} sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
					<Grid container direction='column' spacing={2} sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
						<Grid item className={classes.copyrightItem} sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
							<Box component='div' m={1}>
								<Typography variant="caption">Copyright © {year} {name} - Todos los derechos reservados </Typography>
							</Box>
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridLastItem} sx={{position: 'relative', width: 'inherit', padding: 'inherit', boxShadow: 'none'}}>
					<Stack direction="row" spacing={1}>
						<Link href='https://www.facebook.com/pedidoscom/'>
							<a>
							<IconButton  aria-label="Facebook">
								<FacebookIcon />
							</IconButton>
							</a>
						</Link>
						<Link href='https://www.linkedin.com/company/pedidos-com/'>
							<a>
							<IconButton aria-label="Linkedin">
								<LinkedInIcon />
							</IconButton>
							</a>
						</Link>							
						<Link href='https://www.instagram.com/pedidoscom/'>
							<a>
							<IconButton aria-label="Instagram">
								<InstagramIcon />
							</IconButton>
							</a>
						</Link>
						<Link href='https://www.youtube.com/user/PedidosTV'>
							<a>
							<IconButton aria-label="YouTube">
								<YouTubeIcon />
							</IconButton>
							</a>
						</Link>							
						<Link href='https://twitter.com/pedidos_com?'>
							<a>
							<IconButton aria-label="Twitter">
								<TwitterIcon />
							</IconButton>
							</a>
						</Link>
					</Stack>
				</Grid>
			</Grid>
		</footer>
	);
}
