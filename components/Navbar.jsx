import React, { useState, useEffect } from 'react';

//Components @mui/material
import {AppBar, Toolbar, IconButton,Typography, Menu, Box, Hidden, TextField, Button, Divider, InputAdornment,	MenuItem, Badge, Avatar} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { FavoriteBorder, Search as SearchIcon, ShoppingCartOutlined as ShoppingCartOutlinedIcon
} from '@mui/icons-material';
import { makeStyles, useTheme } from '@mui/styles';

import RandomUser  from '../pages/services/RandomUser'

// Variables imports
import { logoUrl } from '../constants';
import  Help  from '../components/modals/Help';
import { content, logo } from './Navbar.module.css';
import DrawerCategorias from './drawers/drawer';

const drawerWidth = 240;

//Nextjs
import { useRouter } from 'next/router';
import Link from 'next/link';

function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 3 : 0,
		sx: {
			backgroundColor: '#FFF',
			borderBottom: trigger ? '1px solid transparent' : '1px solid #e5e5e5',
		},
	});
}

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
}));

export function Navbar(props) {
	const [openModal, setOpenModal] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	const ruter = useRouter();
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [inputs, setInputs] = useState({});
	const [nombre, setNombre] = React.useState('');
	const [isLogged, setLogged] = React.useState(false);
	const [menuName, setMenuName] = React.useState(null);
	const [lista, setLista] = React.useState({});
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const [sesPartidas, setSesPartidas] = useState(props.partidas);
    const [favoritos, setFavoritos] = useState(props.favoritos);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	let Cliente = 0;
	let Token = '';
	let Usuario = 0;
	let ejecutivoNum = 0;

	useEffect(() => {
		setNombre(localStorage.getItem('Usu_Nomb'));
		if (localStorage.getItem('Login') === 'Ok') {
			setLogged(true);
		} else if (
			localStorage.getItem('Login') === 'NO' ||
			localStorage.getItem('Login') === null
		) {
			setLogged(false);
		}
		setSesPartidas((localStorage.getItem('SesPartidas') !== undefined && localStorage.getItem('SesPartidas')!== null)?localStorage.getItem('SesPartidas'):0);
		setFavoritos(localStorage.getItem('Favoritos'));
	}, [props]);

	useEffect(() => {
		function checkUserData() {
			const CountPartidas = localStorage.getItem('SesPartidas');
			if (CountPartidas) {
				setSesPartidas(CountPartidas);
			}

            const countFavoritos = localStorage.getItem('Favoritos');
			if (countFavoritos) {
				setFavoritos(countFavoritos);
			}
		}
		window.addEventListener('storage', checkUserData);
		return () => {
			window.removeEventListener('storage', checkUserData);
		};
	}, [props]);

	const handleClose = () => {
		setOpenMenu(false);
	};
	const handleClick = (event) => {
		setOpenMenu(true);
	};

	const handleOpenModal = () => {
		setOpenModal(!openModal);
	};

	const handleDrawerOpen = (event) => {
		const name = event.target.name;
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	function CerrarSesion() {
		setLogged(false);
		localStorage.setItem('Usu_Nomb', '');
		localStorage.setItem('Cliente', 0);
		localStorage.setItem('Favoritos', 0);
		localStorage.setItem('SesPartidas', 0);
		localStorage.setItem('Token', '');
		localStorage.setItem('Login', 'NO');
		localStorage.setItem('Email', '');
		localStorage.setItem('Usuario', RandomUser());
		localStorage.setItem('afiliado', '');
        localStorage.setItem('pedido', 0);
        localStorage.setItem('URL', '');
		ruter.push('/');
	}

	function searchBoxSubmit(e) {
		e.preventDefault();
		var busquedaUrl = inputs.query;
		var busquedaUrl1 = busquedaUrl.replace(/\s+/g, '+');
		ruter.push({
			pathname: '/busquedas',
			query: { query: inputs.query },
		});
	}

	const menuId = 'primary-search-account-menu';
	const menuLogin = (
		<Menu
			anchorEl={anchorEl}
			id={menuId}
			keepMounted
			open={isMenuOpen}
			onClose={handleMenuClose}
			PaperProps={{
				elevation: 0,
				sx: {
					overflow: 'visible',
					filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
					mt: 1.5,
					'& .MuiAvatar-root': {
						width: 32,
						height: 32,
						ml: -0.5,
						mr: 1,
					},
					'&:before': {
						content: '""',
						display: 'block',
						position: 'absolute',
						top: 0,
						right: 14,
						width: 10,
						height: 10,
						bgcolor: 'background.paper',
						transform: 'translateY(-50%) rotate(45deg)',
						zIndex: 0,
					},
				},
			}}
			transformOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
			<div>
				<MenuItem onClick={handleMenuClose}>
					<Link href='/soho/MiCuenta/MisDatos'>
						<Typography variant="h6" component="a" py={1}>Mis Datos</Typography>
					</Link>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<Link href='/soho/MiCuenta/MisPedidos'><Typography variant="h6" component="a" py={1}>Pedidos</Typography></Link>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<Link href='/soho/MiCuenta/Direcciones'><Typography variant="h6" component="a" py={1}>Direcciones</Typography></Link>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<Link href='/soho/MiCuenta/misFacturas'>
					<Typography variant="h6" component="a" py={1}>Facturas</Typography></Link>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<Link href='/soho/MiCuenta/misFavoritos'>
					<Typography variant="h6" component="a" py={1}>Favoritos</Typography>
					</Link>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<Link href='/soho/MiCuenta/misNotasCredito'>
					<Typography variant="h6" component="a" py={1} >Notas de Credito</Typography>
					</Link>
				</MenuItem>
				<Divider />
				<MenuItem onClick={() => (handleMenuClose(), CerrarSesion())}>
					<Typography variant="h6" component="p" py={1} color="textSecondary">Salir </Typography>
				</MenuItem>
			</div>
		</Menu>
	);

	const menuLogout = (
		<Menu
			anchorEl={anchorEl}
			id={menuId}
			keepMounted
			open={isMenuOpen}
			onClose={handleMenuClose}
			PaperProps={{
				elevation: 0,
				sx: {
					overflow: 'visible',
					filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
					mt: 1.5,
					'&:before': {
						content: '""',
						display: 'block',
						position: 'absolute',
						top: 0,
						right: 14,
						width: 10,
						height: 10,
						bgcolor: 'background.paper',
						transform: 'translateY(-50%) rotate(45deg)',
						zIndex: 0,
					},
				},
			}}
			transformOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
			<div>
				<MenuItem onClick={handleMenuClose}>
					<Link href='/Login'>
						<Typography variant="h6" component="a" py={1}>Iniciar Sesión</Typography>
					</Link>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<Link href='/RegistroUsuario'>
						<Typography variant="h6" component="a" py={1}>Crear Cuenta </Typography>
					</Link>
				</MenuItem>
			</div>
		</Menu>
	);

	return (
		<>
			<ElevationScroll {...props}>
				<AppBar position='sticky'>
					<Toolbar className={content}>
						<Box component={'div'} alignItems={'center'} display='flex'>
							<Hidden smUp>
								<Box component={'span'}>
									<DrawerCategorias />
								</Box>
							</Hidden>
							{/*<Hidden smDown={true}>
								 Crear una variante del logo que sea adaptable / Por
							ejemplo una "p" para esos casos de usos */}
								<Link href='/'>
									<a>
										<img className={logo} src={logoUrl} alt='logo pedidos' />
									</a>
								</Link>
							{/* </Hidden> */}
							<Hidden smDown>
								<Box component={'span'} px={2}>
									<DrawerCategorias />
								</Box>
							</Hidden>
							
						</Box>
						{/* <Hidden smDown='hide'> */}
						<Hidden mdDown>
							<Box width='30%'>
								<form onSubmit={searchBoxSubmit}>
									<TextField
										size='small'
										id='outlined-basic'
										fullWidth
										// label='Outlined'
										variant='outlined'
										placeholder='Buscar..'
										InputProps={{
											endAdornment: (
												<InputAdornment position='start'>
													<Button type="submit"><SearchIcon /></Button>
												</InputAdornment>
											),
										}}
										name='query'
										onChange={handleChange}
									/>
								</form>
							</Box>
						</Hidden>
						<Box
							display={'flex'}
							flexDirection='row'
							alignItems={'center'}
							justifyContent='center'
							flexWrap='nowrap'
							component={'div'}>
							{/* This inline styles is temporaly, when add link router component, remove */}
							<Hidden mdDown>
								<Box component={'span'} style={{ cursor: 'pointer', fontWeight:'Bold' }}>
									<Typography variant="subtitle2" component='span' color='textPrimary'>
										Para{' '}
									</Typography>
									<Typography variant="subtitle2" component='span' color='primary'>
										empresas
									</Typography>
								</Box>
							</Hidden>
							
								<Hidden smDown>		
								<Box component={'span'}>
									<IconButton onClick={handleClick}
									aria-controls={open ? 'favorites' : undefined}
									aria-haspopup="true">
										<Badge
											badgeContent={isLogged ? (favoritos > 0)? favoritos : null : null}
											color='secondary'>
                                            {favoritos === null || favoritos === 0 || favoritos === undefined ? '' : 
											<Link href='/soho/MiCuenta/misFavoritos'>
												<FavoriteBorder sx={{color:'#9298A7'}} />
											</Link>
                                            }
										</Badge>
									</IconButton>
									<Menu
										id="favorites"
										aria-labelledby="favorites-positioned-button"
										anchorEl={anchorEl}
										keepMounted
										open={openMenu}
										onClose={handleClose}
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'center',
										  }}
										  transformOrigin={{
											vertical: 'top',
											horizontal: 'left',
										  }}
										  PaperProps={{
											elevation: 0,
											sx: {
											  overflow: 'visible',
											  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
											  mt: 8, ml: 20,
											  
											  '&:before': {
												content: '""',
												display: 'block',
												position: 'absolute',
												top: 0,
												right: 14,
												width: 10,
												height: 10,
												bgcolor: 'background.paper',
												transform: 'translateY(-50%) rotate(45deg)',
												zIndex: 0,
											  },
											},
										  }}
									>
										<Box py={'1em'} px={'2em'}>
											{/* <MenuItem onClick={handleClose}> */}
											<Typography variant='subtitle1' align='center'>
												Ve tus favoritos
											</Typography>
											{/* </MenuItem> */}
										</Box>
									</Menu>
									<div ref={anchorEl} id='menu'></div>
								</Box>
								<Box component='span' justifyContent='center' sx={{ backgroundColor:'#E7ECF3', borderRadius:'100px'}} >
									<Help tipo={'2'}/>
								</Box>
								</Hidden>	
								<IconButton color='primary'>
									<Badge
										badgeContent={(sesPartidas > 0)? sesPartidas : null }
										color='secondary'>
										<Link href='/checkout/verifica-pedido'>
											<ShoppingCartOutlinedIcon sx={{color:'#9298A7'}} />
										</Link>
									</Badge>
								</IconButton>
							
						</Box>
						<Box>
							{isLogged ? (
								<IconButton
									size='large'
									aria-controls={menuId}
									aria-haspopup='true'
									onClick={handleProfileMenuOpen}>
									<Avatar sx={{ width:48, height: 48, border: 2, borderColor: '#3655A5', color:'#3655A5', backgroundColor:'#E7ECF3', textTransform: 'uppercase',  }}>
										{nombre.substring(0, 2)}
									</Avatar>
								</IconButton>
							) : (
								<Button
									variant='contained'
									color='primary'
									aria-controls={menuId}
									onClick={handleProfileMenuOpen}>
									Ingresar
								</Button>
							)}
						</Box>
					</Toolbar>
					<Hidden mdUp={true}>
						<Box px={3} pb={1}>
                            <form onSubmit={searchBoxSubmit}>
                                <TextField
                                    size='medium'
                                    id='outlined-basic'
                                    fullWidth
                                    variant='outlined'
                                    placeholder='Buscar..'
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='start'>
                                                <Button type="submit"><SearchIcon /></Button>
                                            </InputAdornment>
                                        ),
                                    }}
                                    name='query'
									onChange={handleChange}
                                />
                            </form>
						</Box>
					</Hidden>
				</AppBar>
			</ElevationScroll>

			{isLogged ? menuLogin : menuLogout}
		</>
	);
}
