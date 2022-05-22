import React, { useState, useEffect } from 'react';

import {
	Box,
	Grid,
	Paper,
	Typography,
	Container,
	Backdrop,
	Button,
	Select,
	TextField,
	Divider,
	Modal,
	Fade,
	Card,
	CardContent,
	CardActions,
	CardMedia,
	CardActionArea,
	TextareaAutosize,
	FormHelperText,
	FormControl,
	MenuItem,
	IconButton,
	Input,
	InputLabel,
	InputAdornment,
	Chip,
	Snackbar,
	Alert,
	Stack,
	Rating,
	Avatar,
	Hidden,
	collapseClasses,
} from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import { Layout } from 'layout/Layout';
import MiCuentaSiderBar from 'layout/MiCuentaSiderBar';
import Services from '../services/Services';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	root: {
		flexGrow: 1,
	},
	paper: {
		position: 'absolute',
		backgroundColor: theme.palette.background.paper,
		borderRadius: '8px',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		margin: theme.spacing(2),
	},
	control: {
		padding: theme.spacing(3),
	},
	bgcontent: {
		backgroundImage:
			'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)',
	},
	boxCardI: {
		height: '330px',
		boxShadow:
			'0px 0px 16px rgb(195 203 214 / 16%), 0px 1px 4px rgb(195 203 214 / 16%)',
	},
	boxContent: { height: '12rem' },
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

		Services(
			'POST',
			'/miCuenta/consultaDirecciones?clienteNum=' + clienteNum,
			{}
		)
			.then((response) => {
				console.log('Funcionó');
				console.log(response.data);
				setResult(response.data);
			})
			.catch((error) => {
				console.log('falló');
				console.log(error.response);
			});
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

	function guardarDireccion() {
		let peticionesJson = {
			dirNum: 0,
			clienteNum: clienteNum,
			nombre: inputs.nombre,
			address1: inputs.address1,
			address2: inputs.address2,
			colonia: inputs.colonia,
			city: inputs.city,
			province: inputs.province,
			country: 'Mexico',
			postalCode: inputs.postalCode,
			phone: inputs.phone,
			fax: '',
			contact: inputs.contact,
			puesto: '',
			email: '',
			zonaEnvio: '',
			estatus: '',
			instrEntrega: '',
			entreCalle1: inputs.entreCalle1,
			entreCalle2: inputs.entreCalle2,
			piso: '',
			interior: '',
			exterior: '',
			extension: inputs.extension,
			numEnvio: '',
			clave: '',
			shipNum: '',
		};

		Services('POST', '/miCuenta/agregaDireccion', peticionesJson)
			.then((response) => {
				refreshPage();
			})
			.catch((error) => {
				console.log(error.response);
			});
	}

	return (
		<Layout>
			
			
				<Box className={classes.bgcontent} component='div'>
					<Box component='div' m={1}>
						<Grid
							container
							direction='row'
							justifyContent='space-between'
							alignItems='flex-start'
                        >
							<Grid item xs={12} sm={12} lg={3}>
                                <MiCuentaSiderBar/> 
                            </Grid>
							<Grid item xs={12} sm={8} lg={9}>
								<Box component='div'>
									<Grid
										container
										direction='row'
										justifyContent='space-around'
										alignItems='center'>
										<Grid item xs={9}>
											<Box component='div' py={2}>
												<Typography
													variant='h3'
													component='h1'>
													Direcciones
												</Typography>
											</Box>
										</Grid>
										<Grid item xs={3}>
											<Box component='div' py={2}>
												<Button
													variant='contained'
													elevation={0}
													fullWidth
													color='primary'
													size='large'
													name='Modal1'
													onClick={handleOpen}>
													Agregar Dirección
												</Button>
											</Box>
										</Grid>
									</Grid>
									<Divider light />
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
														<Grid
															item
															xs={6}
															sm={6}
															lg={4}
															key={row.rfcNum}>
															<Card
																className={
																	classes.boxCardI
																}>
																<CardContent>
																	<Box
																		component='div'
																		pb={2}
																		display='flex'
																		alignItems='center'
																		justifyContent='center'
																		mx='auto'>
																		<Avatar>
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
																		name='Modal2'
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
																		ELIMINAR
																	</Button>
																</CardActions>
															</Card>
														</Grid>
													))}
												</Grid>
											</Grid>
										</Grid>
									</Box>
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
						<div className={classes.paper}>
							<Grid
								container
								direction='row'
								justifyContent='center'
								alignItems='center'
								spacing={2}>
								<Grid item xs={12}>
									<Box
										component='div'
										textAlign='center'
										m={1}
										py={2}>
										<Typography component='h3' variant='h5'>
											<Box
												component='span'
												fontWeight='fontWeightMedium'>
												Agrega Nueva Dirección
											</Box>
										</Typography>
										<Box component='div' pt={3}>
											<Divider />
										</Box>
									</Box>
								</Grid>
								<Grid item xs={12}>
									<Typography
										component='subtitle2'
										gutterBottom>
										¿Quién recibe? :
									</Typography>
								</Grid>
								<Grid item xs={4}>
									<TextField
										fullWidth
										id='outlined-basic'
										label='Nombre...'
										variant='outlined'
										name='contact'
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										fullWidth
										id='outlined-basic'
										label='Telefono...'
										variant='outlined'
										name='phone'
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										fullWidth
										id='outlined-basic'
										label='Ext.'
										variant='outlined'
										name='extension'
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<Box component='div' py={1}>
										<Typography
											component='subtitle2'
											gutterBottom>
											Tipo de Dirección
										</Typography>
									</Box>
									<TextField
										fullWidth
										id='outlined-basic'
										label='Ej. Oficina, Casa, Torre'
										variant='outlined'
										name='nombre'
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<Typography
										component='subtitle2'
										gutterBottom>
										Dirección
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<TextField
										fullWidth
										id='outlined-basic'
										label='Calle'
										variant='outlined'
										name='address1'
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										fullWidth
										id='outlined-basic'
										label='Colonia'
										variant='outlined'
										name='colonia'
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										fullWidth
										id='outlined-basic'
										label='Num. Exterior'
										variant='outlined'
										name='exterior'
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										fullWidth
										id='outlined-basic'
										label='Núm. Interior'
										variant='outlined'
										name='interior'
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={4}>
									<Grid
										container
										direction='row'
										justifyContent='space-between'
										alignItems='center'>
										<Grid item xs={10}>
											<TextField
												fullWidth
												id='outlined-basic'
												label='C.P.'
												variant='outlined'
												name='cp'
												onChange={handleChange}
											/>
										</Grid>
										<Grid item xs={2}>
											<IconButton
												aria-label='delete'
												onClick={consultarCp}>
												<CheckCircleOutlineIcon />
											</IconButton>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={12}>
                                    <InputLabel id="demo-simple-select-outlined-label">
                                        Estado | Delegación
                                    </InputLabel>
                                    <Select fullWidth variant="outlined"
                                    label="Estado | Delegación"
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={estadoDelegacion}
                                    name="estadoDelegacion"
                                    onChange={handleChange}
                                    onFocus={consultarCp}
                                    >
                                        <MenuItem value="-">Selecciona</MenuItem>
                                        {resultCP.map((select) => (
                                            <MenuItem key={select.delegacion} value={select.estado.replace("MEXICO","MÉXICO").toLowerCase()+'-'+select.delegacion.toLowerCase()}>{select.estado.replace("MEXICO","MÉXICO")+' - '+select.delegacion}</MenuItem>
                                        ))}
                                    </Select>
								</Grid>
								<Grid item xs={6}>
									<TextField
										fullWidth
										id='outlined-basic'
										label='Entre calle'
										variant='outlined'
										name='entreCalle1'
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										fullWidth
										id='outlined-basic'
										label='y calle'
										variant='outlined'
										name='entreCalle2'
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<Box component='div' py={1}>
										<Typography
											component='subtitle2'
											gutterBottom>
											Observaciones de entrega
										</Typography>
									</Box>
									<TextField
										id='outlined-basic'
										fullWidth
										label='Fachada, colores, etc'
										variant='outlined'
										name='instrEntrega'
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<Box component='div' pt={2}>
										<Button
											fullWidth
											color='primary'
											size='large'
											onClick={guardarDireccion}>
											Guardar
										</Button>
									</Box>
								</Grid>
							</Grid>
						</div>
					</Fade>
				</Modal>

				<Modal
					aria-labelledby='transition-modal-title'
					aria-describedby='transition-modal-description'
					className={classes.modal}
					open={open && modal === 'Modal2'}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}>
					<Fade in={open}>
						<div className={classes.paper}>
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
						</div>
					</Fade>
				</Modal>

		</Layout>
	);
}
