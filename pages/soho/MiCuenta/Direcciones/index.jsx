import React, { useState, useEffect } from 'react';

import {Box,Grid,Paper,Typography, Container,Backdrop,Button,
	TextField, Divider, Modal, Fade,Card,CardContent,CardActions,
	Alert,Stack,Avatar, Hidden  } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import styles from '../../../../styles/account.module.css';
import { Layout } from 'layout/Layout';
import MiCuentaSiderBar from 'layout/MiCuentaSiderBar';
import AddDir from './add/Index'
import Services from '../../../services/Services';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	root: {
		flexGrow: 1,
	},
	
	control: {
		padding: theme.spacing(3),
	},
	boxCardI: {
        width:'100%',
		height: '380px',
		boxShadow:
			'0px 0px 16px rgb(195 203 214 / 16%), 0px 1px 4px rgb(195 203 214 / 16%)',
	},
	boxContent: { height: '14rem', },
	adressBox: {
		marginTop: theme.spacing(2),
	},
}));

export default function Direcciones() {
	const classes = useStyles();
	const [spacing, setSpacing] = React.useState(2);

	const [open, setOpen] = React.useState(false);
	const [modal, setModal] = React.useState('');
	const [inputs, setInputs] = useState({});
	const [result, setResult] = useState([]);
	const [dirNum, setDirNum] = useState('');
	const [resultCP, setResultCP] = React.useState([]);
	const [estadoDelegacion, setEstadoDelegacion] = React.useState('');
    const [alerta,setAlerta]            = useState({inputError:''})
    const [addOpen,setAddOpen]          = useState(false);     

	let clienteNum = '';

	const handleOpen = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setModal(name);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setDirNum('');
	};

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
        if(event.target.name === "estadoDelegacion"){
            setEstadoDelegacion(event.target.value);
        }
	};

	useEffect(() => {

        clienteNum = localStorage.getItem('Cliente');
        let afiliado = localStorage.getItem('afiliado') 

        if(clienteNum !== undefined && clienteNum !== null && afiliado !== undefined && afiliado !== null){
            if(parseInt(clienteNum) !== 201221){

                Services('POST','/miCuenta/consultaDirecciones?clienteNum=' + clienteNum,{})
                    .then((response) => {
                        console.log('Funcionó');
                        console.log(response.data);
                        setResult(response.data);
                    })
                    .catch((error) => {
                        console.log('falló');
                        console.log(error.response);
                });

            }else{
                router.push('/')
            } 
        }else{
            router.push('/')
        } 

	}, []);

	function refreshPage() {
		window.location.reload(false);
	}

	function eliminarDireccion() {
		console.log('Entró a método eliminar, el dirNum es: ' + dirNum);
        Services('POST','/miCuenta/eliminaDireccion?dirNum='+dirNum+'&clienteNum='+clienteNum,{})
			.then((response) => {
				refreshPage();
			})
			.catch((error) => {
				console.log(error.response);
			});
	}

	function consultarCp() {
		console.log('consultar CP');
        Services('POST','/miCuenta/consultaCp?cp='+inputs.cp,{})
        .then( response =>{
            console.log("Consultar CP service");
            console.log(response.data);
            setResultCP(response.data);
        })
	}

	return (
		<Layout title="Mis Direcciones | Pedidos.com"> 
				<Box className={styles.bgcontent} component='div'>
					<Box component='div' mx={1}>
						<Grid
							container
							direction='row'
							justifyContent='space-between'
							alignItems='flex-start'
                        >
							<Grid item xs={12} sm={12} md={3} lg={3}>
                                <MiCuentaSiderBar/> 
                            </Grid>
							<Grid item xs={12} sm={12} md={9} lg={9}>
								<Box component='div' m={1}>
									<Grid
										container
										direction='row'
										justifyContent='space-around'
										alignItems='center'>
										<Grid item xs={6} sm={6}  lg={9}>
											<Box component='div' py={2}>
												<Typography
													variant='h3'
													component='h1'>
													Direcciones
												</Typography>
											</Box>
										</Grid>
                                        <Grid item xs={6} sm={6} lg={3}>
                                            {(!addOpen)?
                                                <Box component='div' py={2}>
                                                    <Button
                                                        variant='contained'
                                                        elevation={0}
                                                        fullWidth
                                                        color='primary'
                                                        size='large'
                                                        name='Modal1'
                                                        onClick={()=>{setAddOpen(true)}}>
                                                        Agregar Dirección
                                                    </Button>
                                                </Box>
                                                :
                                                ''
                                            }
                                        </Grid>
									</Grid>
									<Divider light />
                                    {(!addOpen)?
                                        <Box component='div' m={1} py={4}>
                                            <Grid
                                                container
                                                className={classes.root}
                                                spacing={2}>
                                                <Grid item xs={12}>
                                                    <Grid
                                                        container
                                                        justifyContent='center'
                                                        spacing={spacing}>
                                                        {result.map((row) => (
                                                            row.nombre !== "Generica" && row.nombre !== "PickUP" && 
                                                            <Grid item  xs={6} sm={6} lg={4}
                                                                key={row.rfcNum}>
                                                                <Card variant="auto" className={ classes.boxCardI}>
                                                                    <CardContent>
                                                                        <Box
                                                                            component='div'
                                                                            pb={2}
                                                                            display='flex'
                                                                            alignItems='center'
                                                                            justifyContent='center'
                                                                            mx='auto'>
                                                                            <Avatar sx={{backgroundColor:'#E7ECF3', color:'#002d75'}}>
                                                                                <LocationOnOutlinedIcon />
                                                                            </Avatar>
                                                                        </Box>
                                                                        <Box
                                                                            component='div'
                                                                            className={
                                                                                classes.boxContent
                                                                            }>
                                                                            <Typography
                                                                                variant='h6'
                                                                                component='h2'>
                                                                                {
                                                                                    row.nombre
                                                                                }
                                                                            </Typography>
                                                                            <Typography
                                                                                gutterBottom>
                                                                                <Box
                                                                                    component='span'
                                                                                    fontWeight='fontWeightMedium'>
                                                                                    {
                                                                                        row.contact
                                                                                    }
                                                                                </Box>
                                                                            </Typography>
                                                                            <Typography
                                                                                gutterBottom>
                                                                                <Box
                                                                                    component='span'
                                                                                    fontWeight='fontweightMedium'>
                                                                                    Telefóno:{' '}
                                                                                    {' ' +
                                                                                        row.phone}{' '}
                                                                                    &nbsp;
                                                                                    Ext.
                                                                                    {' ' +
                                                                                        row.extension}
                                                                                </Box>
                                                                            </Typography>
                                                                            <Typography 
                                                                                color='textSecondary'
                                                                                component='body2'
                                                                                gutterBottom>
                                                                                <Box
                                                                                    component='div'
                                                                                    className={
                                                                                        classes.adressBox
                                                                                    }>
                                                                                    {' ' +
                                                                                        row.address1}
                                                                                    {' ' +
                                                                                        row.interior}{' '}
                                                                                    entre
                                                                                    calle
                                                                                    {' ' +
                                                                                        row.entreCalle1}{' '}
                                                                                    y
                                                                                    {' ' +
                                                                                        row.entreCalle2}

                                                                                    ,
                                                                                    Col.
                                                                                    {' ' +
                                                                                        row.colonia}
                                                                                    {' ' +
                                                                                        row.city}
                                                                                    {' ' +
                                                                                        row.postalCode}
                                                                                    {' ' +
                                                                                        row.province}
                                                                                </Box>
                                                                            </Typography>
                                                                        </Box>
                                                                    </CardContent>
                                                                    <Divider
                                                                        variant='middle'
                                                                        light
                                                                    />
                                                                    <CardActions>
                                                                        <Button
                                                                            size='small'
                                                                            fullWidth
                                                                            color='primary'
                                                                            name='Modal1'
                                                                            onClick={(
                                                                                event
                                                                            ) => {
                                                                                handleOpen(
                                                                                    event
                                                                                );
                                                                                setDirNum(
                                                                                    row.dirNum
                                                                                );
                                                                            }}>
                                                                            Eliminar
                                                                        </Button>
                                                                    </CardActions>
                                                                </Card>
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        :
                                        <Box component="div" width="100%">
                                            <AddDir  setAddOpen={setAddOpen} setAlerta={setAlerta} alerta={alerta}/>
                                        </Box>
                                    }
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Box>

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
						<Box component='div' sx={{
                            position: 'absolute',
                            backgroundColor:'#fff',
                            borderRadius: '8px',
                            padding:'2rem',
                        }}>
							<Box
								component='div'
								textAlign='center'
								m={1}
								py={2}>
								<Typography component='h3' variant='h5'>
									<Box
										component='span'
										fontWeight='fontWeightMedium'>
										Eliminar la Dirección
									</Box>
								</Typography>
								<Box component='div' py={1}>
									<Divider />
								</Box>
								<Typography component='subtitle1' gutterBottom>
									¿Seguro que desea eliminar la dirección{' '}
									{/* se pondrá función / validación del nombre de dirección ya que tenia "casa" */}
									?
								</Typography>
							</Box>
							<Grid
								container
								direction='row'
								justifyContent='center'
								alignItems='center'
								spacing={2}>
								<Grid item xs={6}>
									<Button
										type='button'
										variant='outlined'
										fullWidth
										size='large'
										onClick={handleClose}>
										Regresar
									</Button>
								</Grid>
								<Grid item xs={6}>
									<Button
										type='button'
										variant='contained'
										fullWidth
										size='large'
										color='primary'
										disableElevation
										onClick={eliminarDireccion}>
										Eliminar
									</Button>
								</Grid>
							</Grid>
						</Box>
					</Fade>
				</Modal>

		</Layout>
	);
}
