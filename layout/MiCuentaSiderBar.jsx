import React, {useState, useEffect} from 'react';

//MUI
import {Box, Grid, Paper, Typography, Container,
    Button,TextField, Divider, Modal, Backdrop,
    Fade, Card, FadeCard, CardActions, CardContent} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Shop2OutlinedIcon from '@mui/icons-material/Shop2Outlined';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

import { makeStyles } from '@material-ui/core/styles';


//Nextjs
import Link from 'next/link'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: theme.spacing(2),
  },
  bgcontent: {
    backgroundImage: 'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)',
    // background: '#F7F7F9',
},
opacityBox: {
    opacity:'0.40',
},
}));


export default function MiCuentaSiderBar() {

    const classes = useStyles();

    const [nombre, setNombre] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = React.useState('');

    useEffect( () => {
        setNombre(localStorage.getItem('Usu_Nomb'));

    }, [nombre]) 

    const handleOpen = (event) => {
        const name = event.target.name;
        setModal(name)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

	return (
		<>
			<div>
                <Box component="div" className={classes.bgcontent}>
                    <Container maxWidth="lg">
                        <Box component="div" mx="auto" py={2} >
                            <Box component="div" textAlign="center">
                                <Typography component="h3" variant="h6">{nombre}</Typography>
                            </Box>
                            <Divider/>
                            <Box component="div" py={2}>
                                <Typography variant="h6" component="h3" color="textSecondary" gutterBottom>
                                    Mi Cuenta
                                </Typography>
                            </Box>
                            <Box component="div" py={2}>
                                <Typography variant="h6" component="h3" color="textSecondary" gutterBottom>
                                    <Link href="/MisDatos">
                                        <a>
                                            <SettingsOutlinedIcon/> Mis datos
                                        </a>
                                    </Link>
                                </Typography>
                                <Typography variant="h6" component="h3" color="textSecondary" gutterBottom>
                                    <Link href="/MisPedidos">
                                        <a>
                                            <Shop2OutlinedIcon/>  Pedidos
                                        </a>
                                    </Link>
                                </Typography>
                                <Typography variant="h6" component="h3" color="textSecondary" gutterBottom>
                                    <Link href="/MisPedidos">
                                        <a>
                                            <LocationOnOutlinedIcon/> Direcciones
                                        </a>
                                    </Link>
                                </Typography>
                                <Typography variant="h6" component="h3" color="textSecondary" gutterBottom>
                                    <Link href="/MisFacturas">
                                        <a>
                                    <FilterNoneIcon/>  Facturas
                                        </a>
                                    </Link>
                                </Typography>
                                <Typography variant="h6" component="h3" color="textSecondary" gutterBottom>
                                    <ShuffleIcon/>  
                                    <Button variant="text"
                                        onClick={() => window.open('mailto:pagos@pedidos.com.mx?subject=Garantia%20Y%20Devoluciones'
                                        +'&body=Completar%20la%20siguiente%20información%0D%0A'+
                                        'Pedido:%20%0D%0AProducto:%20%0D%0ACantidad:%20%0D%0ATelefono%20de%20Contacto:%20%0D%0AAdjuntar%20Fotos.%20%0D%0A%0D%0A%0D%0A%0D%0A')}
                                    >
                                        Garantias y Devoluciones
                                    </Button>
                                </Typography>
                                <Typography variant="h6" component="h3" color="textSecondary" gutterBottom>
                                    <Link href="/MisFacturas">
                                        <a>
                                            <FavoriteBorderIcon/>  Favoritos
                                        </a>
                                    </Link>
                                </Typography>
                                <Typography variant="h6" component="h3" color="textSecondary" gutterBottom>
                                    <Link href="/MisNotasCredito">
                                        <a>
                                            <NoteAltOutlinedIcon/>  Notas de credito
                                        </a>
                                    </Link>
                                </Typography>
                            </Box>
                            <Divider/>
                            <Box component="div" py={2}>
                                <Typography variant="h6" component="h3" color="textSecondary" gutterBottom>
                                    <CreateOutlinedIcon/>
                                        <Button variant="text"
                                            onClick={() => window.open('mailto:quejas@pedidos.com.mx?subject=Queja%20sobre')}
                                        >
                                            Levantar queja
                                        </Button>
                                </Typography>
                            </Box>

                            <Grid item xs={3}>
                                <Button variant="outlined" color="primary" fullWidth size="large" name="Modal1" onClick={handleOpen}><HelpOutlineOutlinedIcon color="primary"/>&nbsp; Necesito Ayuda</Button>
                            </Grid>
                            <Box component="div" py={3}>
                                <Button variant="contained" color="primary" fullWidth  name="editarDatos" ><ArrowForwardOutlinedIcon color="white"/>&nbsp; Cerrar sesión</Button>
                            </Box>
                        </Box>
                    </Container>
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

                            <Grid item xs={12}> 
                                <Card className={classes.root}>
                                    <CardContent>
                                        <WhatsappOutlinedIcon fontSize="large" /> 
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        WhatsApp
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                        Envía un mensaje
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12}> 
                                <Card className={classes.root}>
                                    <CardContent>
                                        <EmailOutlinedIcon fontSize="large" /> 
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Correo
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                        En breve responderemos
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    </div>
                    </Fade>
                </Modal>

            </div>
		</>
	);
}