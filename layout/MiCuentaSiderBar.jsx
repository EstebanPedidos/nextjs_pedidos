import React, { useState, useEffect } from 'react';

//MUI
import {Box, Grid, Avatar,Paper, Typography, Container,
    Button,TextField, Divider, Modal, Backdrop,
    Fade, Card, FadeCard, CardActions, CardContent} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { makeStyles } from '@material-ui/core/styles';


//Nextjs
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		position: 'absolute',
		backgroundColor: theme.palette.background.paper,
		borderRadius: '8px',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		margin: theme.spacing(2),
	},
	bgcontent: {
		backgroundImage:
			'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)',
		// background: '#F7F7F9',
	},
	opacityBox: {
		opacity: '0.40',
	},
}));

export default function MiCuentaSiderBar() {
	const classes = useStyles();

	const [nombre, setNombre] = React.useState('');
	const [open, setOpen] = React.useState(false);
	const [modal, setModal] = React.useState('');

	useEffect(() => {
		setNombre(localStorage.getItem('Usu_Nomb'));
	}, [nombre]);

	const handleOpen = (event) => {
		const name = event.target.name;
		setModal(name);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Box component="div"  m={1} px={1}>
                <Box component="div" py={2} >
                <Box component="div" textAlign="center" m="auto" p={2}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                        
                        >
                        <Grid item>
                            <Avatar>
                                <AccountCircleOutlinedIcon />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Typography component="h2" variant="h6">{nombre}</Typography>
                        </Grid>
                    </Grid>
                </Box>   
                <Divider light/>
                    <Grid
                    container
                    //direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={2}
                   
                    >
                        <Grid item xs={12} >
                            <Box component="div" textAlign="center" m="auto" p={2}>
                                <Typography variant="caption" color="textSecondary">MI CUENTA</Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                <Link href="/MisDatos">
                                    <a>
                                        <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={2}
                                        >
                                            <Grid item>
                                                <SettingsOutlinedIcon/>
                                            </Grid> 
                                            <Grid item>
                                                <Box component="span">Mis datos</Box>
                                            </Grid>
                                        </Grid>
                                    </a>
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                <Link href="/MisPedidos">
                                    <a>
                                        <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={1}
                                        >
                                            <Grid item>
                                                <Inventory2OutlinedIcon/>
                                            </Grid> 
                                            <Grid item>
                                                <Box component="span">Pedidos</Box>
                                            </Grid>
                                        </Grid>
                                    </a>
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                <Link href="/Direcciones">
                                    <a>
                                        <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={1}
                                        >
                                            <Grid item>
                                                <FmdGoodOutlinedIcon/>
                                            </Grid> 
                                            <Grid item>
                                                <Box component="span">Direcciones</Box>
                                            </Grid>
                                        </Grid>
                                    </a>
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                <Link href="/misFacturas">
                                    <a>
                                        <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={1}
                                        >
                                            <Grid item>
                                                <DescriptionOutlinedIcon/>
                                            </Grid> 
                                            <Grid item>
                                                <Box component="span">Facturas</Box>
                                            </Grid>
                                        </Grid>
                                    </a>
                                </Link>
                            </Typography>
                        </Grid>
                        {/* <Grid item sm={12}>
                            <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                <Link href="/MisFacturas">
                                    <a>
                                        <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={1}
                                        >
                                            <Grid item>
                                                <DescriptionOutlinedIcon/>
                                            </Grid> 
                                            <Grid item>
                                                <Box component="span">Garantías y Devoluciones</Box>
                                            </Grid>
                                        </Grid>
                                    </a>
                                </Link>
                            </Typography>
                        </Grid> */}
                        <Grid item sm={12}>
                            <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                <Link href="/misFavoritos">
                                    <a>
                                        <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={1}
                                        >
                                            <Grid item>
                                                <FavoriteBorderIcon/>
                                            </Grid> 
                                            <Grid item>
                                                <Box component="span">Favoritos</Box>
                                            </Grid>
                                        </Grid>
                                    </a>
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="subtitle1" gutterBottom sx={{fontWeight:'500'}}>
                                <Link href="/MisNotasCredito">
                                    <a>
                                        <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={1}
                                        >
                                            <Grid item>
                                                <ReceiptOutlinedIcon/>
                                            </Grid> 
                                            <Grid item>
                                                <Box component="span">Notas de crédito</Box>
                                            </Grid>
                                        </Grid>
                                    </a>
                                </Link>
                            </Typography>
                        </Grid>
                       
                    </Grid>
                </Box>
                <Divider />
                    <Box component="divider" py={2}>
                    <Box component="div" py={1}>
                        <Button startIcon={<ShuffleIcon />} onClick={() => window.open('mailto:pagos@pedidos.com.mx?subject=Garantia%20Y%20Devoluciones'
                                            +'&body=Completar%20la%20siguiente%20información%0D%0A'+
                                            'Pedido:%20%0D%0AProducto:%20%0D%0ACantidad:%20%0D%0ATelefono%20de%20Contacto:%20%0D%0AAdjuntar%20Fotos.%20%0D%0A%0D%0A%0D%0A%0D%0A')}>
                            Garantías & Devoluciones
                        </Button>

                        <Button startIcon={<FeedbackOutlinedIcon />}
                            onClick={() => window.open('mailto:quejas@pedidos.com.mx?subject=Queja%20sobre')}
                        >
                            Levantar queja
                        </Button>
                    </Box>   
                    <Divider />
                    <Box component="div" pt={3} >
                        <Box component="div" pb={2}>
                            <Button startIcon={<HelpOutlineOutlinedIcon />} variant="outlined" color="primary" fullWidth size="large" name="Modal1" onClick={handleOpen}>Necesito Ayuda</Button>
                        </Box>
                        <Box component="div" >
                           <Button startIcon={<LogoutOutlinedIcon />} variant="outlined" color="primary" fullWidth size="large" name="editarDatos" >Cerrar sesión</Button>
                        </Box>
                        
                    </Box>
                    </Box>                   
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open && modal === 'Modal1'}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <div className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}> 
                                <Card className={classes.root}>
                                    <CardContent>
                                        <ChatBubbleOutlineOutlinedIcon fontSize="large" /> 
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Chat
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                        Inicia una conversación
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                    </Fade>
                </Modal>
				<Modal
					aria-labelledby='transition-modal-title'
					aria-describedby='transition-modal-description'
					className={classes.modal}
					open={open && modal === 'Modal1'}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}>
					<Fade in={open}>
						<div className={classes.paper}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Card className={classes.root}>
										<CardContent>
											<ChatBubbleOutlineOutlinedIcon fontSize='large' />
											<Typography
												className={classes.title}
												color='textSecondary'
												gutterBottom>
												Chat
											</Typography>
											<Typography
												variant='h5'
												component='h2'>
												Inicia una conversación
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item xs={12}>
									<Card className={classes.root}>
										<CardContent>
											<WhatsappOutlinedIcon fontSize='large' />
											<Typography
												className={classes.title}
												color='textSecondary'
												gutterBottom>
												WhatsApp
											</Typography>
											<Typography
												variant='h5'
												component='h2'>
												Envía un mensaje
											</Typography>
										</CardContent>
									</Card>
								</Grid>

                        </Grid>
                         </div>
                    </Fade>
                </Modal>
            </Box>
		</>
	);
}
