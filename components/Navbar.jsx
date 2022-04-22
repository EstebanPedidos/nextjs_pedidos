import React, { useRef, useState } from 'react';

// Third parties import
import { makeStyles } from '@material-ui/core/styles';

// Componentes - material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import { Button, Divider } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

// Icons
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Variables imports
import { logoUrl } from '../constants';

import { HelpModal } from './modals';
// import { useUiContext } from '../context/UiContext';

const useStyles = makeStyles((theme) => ({
	// my styles - javier mora
	logo: {
		width: '150px',
	},
	content: {
		height: '72px',
		alignItems: 'center',
		justifyContent: 'space-around',
		// gap: '0.5rem',
		position: 'relative',
		// margin: '0 auto',
	},
	iconhca: {
		width: '19px',
		height: '19px',
	},
}));

export function Navbar() {
	const { logo, content, iconhca } = useStyles();

	const [openModal, setOpenModal] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	// const { drawerToggle } = useUiContext();
	// const [anchorEl, setAnchorEl] = React.useState(null);
	const anchorEl = useRef();
	const handleClose = () => {
		setOpenMenu(false);
	};
	const handleClick = (event) => {
		setOpenMenu(true);
	};

	const handleOpenModal = () => {
		setOpenModal(!openModal);
	};

	return (
		<>
			<HelpModal isOpen={openModal} onClose={handleOpenModal} />
			<AppBar position='sticky' color='white'>
				<Toolbar className={content}>
					<Box component={'div'} alignItems={'center'} display='flex'>
						<Hidden smDown='true'>
							{/* Crear una variante del logo que sea adaptable / Por
							ejemplo una "p" para esos casos de usos */}
							<img
								className={logo}
								src={logoUrl}
								alt='logo pedidos'
							/>
						</Hidden>

						<Box component={'span'} marginLeft='2%'>
							<IconButton
								onClick={() => {
									// drawerToggle(true);
									console.log('here');
								}}>
								<img
									className={iconhca}
									src='https://pedidos.com/myfotos/pedidos-com/pagina/header/catego.svg'
									alt='categories'
								/>
							</IconButton>
						</Box>
						<Hidden smDown='true'>
							<Box component={'span'} padding={'1rem'}>
								<Typography>Categorías</Typography>
							</Box>
						</Hidden>
					</Box>
					{/* <Hidden smDown='hide'> */}
					<Hidden smDown='hide'>
						<Box width='30%'>
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
											<SearchIcon />
										</InputAdornment>
									),
								}}
							/>
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
						<Hidden smDown='hide'>
							<Box
								component={'span'}
								style={{ cursor: 'pointer' }}>
								<Typography component='span'>Para </Typography>
								<Typography component='span' color='primary'>
									empresas
								</Typography>
							</Box>
						</Hidden>

						<Box component={'span'}>
							<IconButton onClick={handleClick}>
								<FavoriteBorderIcon />
							</IconButton>
							<Menu
								anchorEl={anchorEl.current}
								keepMounted
								open={openMenu}
								onClose={handleClose}>
								<Box padding={'1em'}>
									{/* <MenuItem onClick={handleClose}> */}
									<Typography
										variant='subtitle2'
										align='center'>
										Aún no tienes favoritos
									</Typography>
									{/* </MenuItem> */}
									<Divider />
									<Box
										paddingTop={'1em'}
										display='flex'
										alignItems='center'
										flexDirection={'column'}>
										<IconButton>
											<FavoriteBorderIcon fontSize='large' />
										</IconButton>
										<Typography>
											Iniciar sesión para añadir
										</Typography>
									</Box>
								</Box>
							</Menu>
							<div ref={anchorEl} id='menu'></div>
						</Box>
						<Box component={'span'}>
							<IconButton onClick={handleOpenModal}>
								<HelpOutlineIcon />
							</IconButton>
						</Box>
						<Box component={'span'}>
							<IconButton>
								<ShoppingCartIcon />
							</IconButton>
						</Box>
					</Box>
					<Box>
						<Button variant='contained' color='primary'>
							Ingresar
						</Button>
					</Box>
					{/* </Hidden> */}
				</Toolbar>
				<Hidden mdUp='hide'>
					<Box mt={'1rem'}>
						<TextField
							size='medium'
							id='outlined-basic'
							fullWidth
							variant='outlined'
							placeholder='Buscar..'
							InputProps={{
								endAdornment: (
									<InputAdornment position='start'>
										<SearchIcon />
									</InputAdornment>
								),
							}}
						/>
					</Box>
				</Hidden>
			</AppBar>
		</>
	);
}
