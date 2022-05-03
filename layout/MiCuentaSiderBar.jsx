import React, {useState, useEffect} from 'react';

//MUI
import {Box, Grid, Paper, Typography, Container,
    Button,TextField, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Shop2OutlinedIcon from '@mui/icons-material/Shop2Outlined';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
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

    useEffect( () => {
        setNombre(localStorage.getItem('Usu_Nomb'));

    }, [nombre]) 

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
                                    <ShuffleIcon/>  Garantias y Devoluciones
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
                                    Levantar queja
                                </Typography>
                            </Box>

                            <Grid item xs={3}>
                                <Button variant="outlined" color="primary" fullWidth name="agregaTel" >Necesito Ayuda</Button>
                            </Grid>
                            <Box component="div" py={3}>
                                <Button variant="contained" color="primary" fullWidth  name="editarDatos" >Cerrar sesión</Button>
                            </Box>
                        </Box>
                    </Container>
                </Box>

            </div>
		</>
	);
}