import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { format } from 'date-fns';

//MUI
import {Box, Grid, Paper, Typography, Container, Backdrop,
    Button, Select, TextField, Divider, Modal, Fade,
    Card, CardContent, CardMedia, CardActionArea, TextareaAutosize,
    FormHelperText, FormControl, MenuItem, IconButton,
    Input, InputLabel, InputAdornment, Chip, Snackbar, 
    Alert, Stack, Rating } from '@mui/material';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import { makeStyles } from '@material-ui/core/styles';

import { Layout } from 'layout/Layout';
import MiCuentaSiderBar from 'layout/MiCuentaSiderBar'
import Services from '../services/Services'

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

export default function MisDatos() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = React.useState('');
    const [inputs, setInputs] = useState({});
    const [snack, setSnack] = React.useState('');
    const [value, setValue] = React.useState(5);
    const [celPrincipal, setCelPrincipal] = React.useState(0);
    const [telPrincipal, setTelPrincipal] = React.useState(0);
    const [misDatos, setMisDatos] = useState({clienteNum:0,usuarioNum:0,nombre:"",apellido:"",empresa:"",fechaNac:"",fechaReg:"",enviaMsg:"",entregaCliente:"",tipoCuenta:"",celularPrinc:"",telefonoPrinc:""});
    const [misTelefonos, setMisTelefonos] = useState([]);
    const [misCelulares, setMisCelulares] = useState([]);
    const [ultimoTransportista, setUltimoTransportista] = useState({});
    const [tipoTelefonos, setTipoTelefonos] = useState([]);
    const [todosMisTelefonos, setTodosMisTelefonos] = 
        useState({listPyCelularSms:[
                    {celular_num:0,cliente_num:0,fecha_registro:"",celular:0,status:""} 
                ],
                listPyTelefonoCliente:[
                    {telNum:0,clienteNum:0,usuarioNum:0,telefono:0,extension:"",tipoNum:0,fechaRegistro:"",status:"",rolNum:0}
                ]
                });
    const [ultimoEjectuvo, setUltimoEjecutivo] = useState([]);
    const [primeraVez, setPrimeraVez] = React.useState(false);
    const [nombre, setNombre] = React.useState("");
    const [fecha, setFecha] = React.useState("");
    const [tipoTelefono, setTipoTelefono] = React.useState('');


    let cliente = '';
    let usu_nomb = '';
    let correo = ''
    let usuarioNum = '';
    let nivelAcceso ='';
    let ejectuvoNum ='';
    let telefonoPrinc = 0;
    let celularPrinc = 0;
    let extensionPrinc = 0;

    const [values, setValues] = React.useState({
        password: '',
        password2: '',
        password3: '',
        showPassword: false,
        showPassword2: false,
        showPassword3: false,
    });
    
    const test = new Date('2014-08-18T21:11:54');

    useEffect( () => {

        cliente = localStorage.getItem('Cliente');
        usu_nomb = localStorage.getItem('Usu_Nomb');
        correo = localStorage.getItem('Email');
        usuarioNum = localStorage.getItem('Usuario');
        nivelAcceso = localStorage.getItem('nivelAcceso');
        ejectuvoNum = localStorage.getItem('EjecutivoNum');

        const getData= async ()=>{
            Services('POST','/miCuenta/obtieneMisDatos?usuarioNum='+usuarioNum,{})
                .then( response =>{
                setMisDatos(response.data);
                // setNombre(response.data.nombre);
                setFecha(format(new Date(response.data.fechaNac), 'yyyy-MM-dd'));
                if (response.data.nombre === "" || response.data.nombre === null || response.data.nombre === undefined){
                    setPrimeraVez(true);
                    alert(SI)
                    console.log('SI esta ejecutando')
                    }else{
                    setPrimeraVez(false);
                    alert(No)
                }
                }).catch(error => {
                    console.log("falló obtieneMisDatos")
                    console.log(error.response)
            });

            Services('POST','/miCuenta/obtieneTelefonos?usuarioNum='+usuarioNum,{})
                .then( response =>{
                setMisTelefonos(response.data);
                console.log("obtieneTelefonos Exitoso")
                }).catch(error => {
                console.log("falló obtieneTelefonos")
                console.log(error.response)
            });
            
            Services('POST','/miCuenta/obtieneTelefonos?cliente_num='+cliente,{})
                .then( response =>{
                setMisCelulares(response.data);
                console.log("obtieneNoCelulares Exitoso")
            }).catch(error => {
                console.log("falló obtieneNoCelulares")
                console.log(error.response)
            });

            Services('POST','/miCuenta/obtieneTipoTelefono',{})
            .then( response =>{
                setTipoTelefonos(response.data);
                console.log("obtieneTipoTelefono Exitoso")
                }).catch(error => {
                    console.log("falló obtieneTipoTelefono")
                    console.log(error.response)
            });

            Services('POST','/miCuenta/todosMisTelefonos?clienteNum='+cliente+'&usuarioNum='+usuarioNum,{})
            .then( response =>{
                setTodosMisTelefonos(response.data);
                console.log("todosMisTelefonos Exitoso")
                }).catch(error => {
                    console.log("falló todosMisTelefonos")
                    console.log(error.response)
            });

            Services('POST','/miCuenta/consultaTransportista?clienteNum='+cliente,{})
            .then( response =>{
                setUltimoTransportista(response.data);
                console.log("consultaTransportista Exitoso")
                }).catch(error => {
                    console.log("falló consultaTransportista")
                    console.log(error.response)
            });

        }
        getData();
    }, []) 

    const handleOpen = (event) => {
        const name = event.target.name;
        setModal(name)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSnack('')
    };

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleChangePass = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log("Passoword2: "+event.target.value)
        console.log("valor: "+values.password2)
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        if(name === "tipoTelefono"){
            setTipoTelefono(event.target.value);
        }
        else if(name === "telPrincipal"){
            setTelPrincipal(event.target.value);

        }
        else if(name === "celPrincipal"){
            setCelPrincipal(event.target.value);
        }
    }
    function handleClickShowPassword (prop) {
        if(prop === 'showPassword'){
            setValues({ ...values, showPassword: !values.showPassword });
        }else if( prop === 'showPassword2'){
            setValues({ ...values, showPassword2: !values.showPassword2 });
        }else if( prop === 'showPassword3'){
            setValues({ ...values, showPassword3: !values.showPassword3 });
        }
      };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function refreshPage() {
        window.location.reload(false);
    }

    function handleSubmit(tipoCuenta) {
        
        console.log("Entro al servicio Actualizar Usuario");
        console.log(cliente+' '+usuarioNum+' '+inputs.nombre+' '+inputs.apellido+' '+(inputs.empresa === undefined ? "" : inputs.empresa)+' '+inputs.fechaNac+' '+tipoCuenta)
        RegistroUsuarioService.registraMisDatos(cliente,usuarioNum,inputs.nombre,inputs.apellido,(inputs.empresa === undefined ? "" : inputs.empresa),inputs.fechaNac,tipoCuenta)
            .then( response =>{
                console.log("Exito registraMisDatos")
                console.log(response.data);
                refreshPage();
            }).catch(error => {
                console.log("falló registraMisDatos")
                console.log(error.response)
            });
            
    };

    function registraMisDatos() {
        console.log("Entro al servicio Registrar Mis Datos");

    };

    function agregaTelCel(){
        MiCuentaService.agregaTelCel(inputs.telNum, cliente, usuarioNum, inputs.telefono, inputs.extension, inputs.tipoNum, "", 'A', 0)
        .then( response =>{
            console.log("Exito registraMisDatos")
            console.log(response.data);
            // refreshPage();
        }).catch(error => {
            console.log("falló registraMisDatos")
            console.log(error.response)
        });
    }

    function cambioContrasena(){
        MiCuentaService.cambioContrasena(usuarioNum,values.password,values.password2, values.password3)
            .then( response =>{
                if(response.data > 0){
                    setOpen(true);
                    setSnack('uno')
                }else if(response.data === -1){
                    setOpen(true);
                    setSnack('dos')
                }else if(response.data === -2){
                    setOpen(true);
                    setSnack('tres')
                }else{
                    setOpen(true);
                    setSnack('cuatro')
                }
            }).catch(error => {
                console.log("falló registraMisDatos")
                console.log(error.response)
            });
    }

    // RegistroUsuarioService.registraUsuario(datosRegistro){
    //     .then( response =>{
    //         console.log(response);
    //     })
    // }

  const formPrimeraVez = (
    <div>
        <Box component="div" className={classes.bgcontent}>
            <Container maxWidth="lg">
                <Box component="div" mx="auto" py={8} >
                        <Box component="div" textAlign="center">
                            <Typography component="h3" variant="h6">Gestiona tu cuenta, tu eliges</Typography>
                        </Box>
                        <Box component="div" width="15%" mx="auto" py={4}>
                            <img className={classes.opacityBox} src="https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/modal/edit.svg" alt="Perfil de usuario" />
                        </Box>
                        <Box component="div"  width="40%" mx="auto" textAlign="center" py={2}>
                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                <Grid item xs={6}>
                                    <Button variant="outlined" fullWidth size="large" name="Modal1" onClick={handleOpen}>Personal</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="outlined" fullWidth  size="large" name="Modal2" onClick={handleOpen}>Empresarial</Button>
                                </Grid>
                            </Grid>
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
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <PersonAddIcon 
                  style={{ fontSize: 50 }}
                  color="primary"/>
                <h3>Cuenta Personal</h3>
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  id="outlined-full-width" 
                  label="Nombres(s)" 
                  variant="outlined" 
                  type="text" 
                  name="nombre"
                  placeholder="Nombre de Usuario" 
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  id="outlined-full-width" 
                  label="Apellido(s)" 
                  variant="outlined" 
                  type="text" 
                  name="apellido" 
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  id="outlined-full-width" 
                  label="Correo" 
                  variant="outlined" 
                  type="text" 
                  name="correo" 
                  defaultValue={correo}
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    readOnly: true,
                  }}
                  />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  id="outlined-full-width" 
                  label="Fecha de nacimiento" 
                  variant="outlined" 
                  type="date" 
                  name="fechaNac" 
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
              </Grid>
              <div>
              <Button variant="contained" color="primary" onClick={(event) => { event.preventDefault();handleSubmit('Personal')}}>Guardar</Button>
            </div>
            </Grid>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal1}
        open={open && modal === 'Modal2'}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <PersonAddIcon 
                  style={{ fontSize: 50 }}
                  color="primary"/>
                <h3>Cuenta Personal</h3>
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  id="outlined-full-width" 
                  label="Nombres(s)" 
                  variant="outlined" 
                  type="text" 
                  name="nombre"
                  placeholder="Nombre de Usuario" 
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  id="outlined-full-width" 
                  label="Apellido(s)" 
                  variant="outlined" 
                  type="text" 
                  name="apellido" 
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  id="outlined-full-width" 
                  label="Empresa" 
                  variant="outlined" 
                  type="text" 
                  name="empresa" 
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  id="outlined-full-width" 
                  label="Correo" 
                  variant="outlined" 
                  type="text" 
                  name="correo" 
                  defaultValue={correo}
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    readOnly: true,
                  }}
                  />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  id="outlined-full-width" 
                  label="Fecha de nacimiento" 
                  variant="outlined" 
                  type="date" 
                  name="fechaNac" 
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
              </Grid>
              <div>
              <Button variant="contained" color="primary" onClick={(event) => { event.preventDefault();handleSubmit('N')}}>Guardar</Button>
            </div>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );

  const formMisDatos = (
    <div>
        <Box className={classes.bgcontent} component="div">
            <Box component="div" m={1}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Grid item xs={12} sm={12} lg={3}>

                    </Grid>
                    <Grid item xs={12} sm={12} lg={9}>
                        <Box component="div">
                            <Grid 
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center">
                                <Grid item xs={12} sm={9}>   
                                    <Box component="div" py={2}>
                                        <Typography variant="h3" component="h1">
                                            Mis Datos
                                        </Typography>
                                        
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={3}>   
                                <Box component="div" py={2}>
                                    <Button variant="contained" color="primary" fullWidth size="large" name="editarDatos" onClick={handleOpen}>Editar</Button>
                                </Box>
                                </Grid>
                            </Grid>
                            <Divider light/>
                            <Box component="div" m={1} py={4}>
                                {misDatos.tipoCuenta === "P" &&
                                <Box component="div" py={2}>
                                    <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
                                        Cuenta Personal
                                    </Typography>
                                </Box>
                                }     
                                {misDatos.tipoCuenta === "N" &&
                                <Box component="div" py={2}>
                                    <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
                                        Cuenta Negocios
                                    </Typography>
                                </Box>
                                }         
                                <Grid container 
                                direction="row"
                                className={classes.root}
                                justifyContent="space-around"
                                alignItems="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container justifyContent="flex-start" spacing={2}>                                                
                                            <Grid item xs={12}>
                                                <Grid container justifyContent="center" spacing={2}>
                                                    <Grid item xs={6}>
                                                        <TextField fullWidth
                                                            id="outlined-read-only-input"
                                                            label="Nombre(s)"
                                                            defaultValue={misDatos.nombre}
                                                            InputProps={{
                                                                readOnly: true,
                                                            }}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <TextField fullWidth
                                                            id="outlined-read-only-input"
                                                            label="Apellidos(s)"
                                                            defaultValue={misDatos.apellido}
                                                            InputProps={{
                                                                readOnly: true,
                                                            }}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    {misDatos.tipoCuenta === "N" &&
                                                    <Grid item xs={12}>
                                                        <TextField fullWidth
                                                            id="outlined-read-only-input"
                                                            label="Empresa"
                                                            defaultValue={misDatos.empresa}
                                                            InputProps={{
                                                                readOnly: true,
                                                            }}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    }
                                                    <Grid item xs={6}>
                                                        <TextField fullWidth
                                                            id="outlined-read-only-input"
                                                            label="Correo"
                                                            defaultValue={correo}
                                                            InputProps={{
                                                                readOnly: true,
                                                            }}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <TextField fullWidth
                                                        id="outlined-full-width" 
                                                        label="Fecha de nacimiento" 
                                                        defaultValue={fecha}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        disabled
                                                        variant="outlined"
                                                        />
                                                    </Grid>
                                                </Grid> 
                                            </Grid> 
                                            <Grid item xs={12}>
                                                <Divider variant="middle" light/>
                                                <Box component="div" py={4}>
                                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                                        <Grid item xs={6}>
                                                            <Typography variant="h6" component="h4" >
                                                            <Box component="div" textAlign="left">Contraseña</Box>
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Button variant="outlined" color="primary" fullWidth size="large" name="modificarPass" onClick={handleOpen}>
                                                            Cambiar
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <Divider variant="middle" light/>
                                            </Grid>  
                                            <Grid item xs={12}>
                                                <Grid container>
                                                    <Grid item xs={6}>
                                                        <Typography variant="h6" component="h5" gutterBottom>
                                                            Teléfono(s)
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                                            <Grid item xs={6}>
                                                                <Button variant="outlined" color="primary" fullWidth size="large" name="agregaTel" onClick={handleOpen}>Agregar</Button>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Button variant="outlined" color="primary"  fullWidth size="large" name="modificarTel" onClick={handleOpen}>Modificar</Button>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>  
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography variant="h6" component="h5" color="textSecondary" gutterBottom>
                                                            Principal: {misDatos.telefonoPrinc} {/* si no tiene poner "ninguno aún" */}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <FormControl fullWidth className={classes.formControl}>
                                                            <Select variant="outlined" 
                                                            value={telPrincipal}
                                                            onChange={handleChange}
                                                            displayEmpty
                                                            className={classes.selectEmpty}
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                            name="telPrincipal"
                                                            >
                                                            <MenuItem value="" disabled>
                                                                Seleccionar
                                                            </MenuItem>
                                                            {todosMisTelefonos.listPyTelefonoCliente.map((row) => (
                                                                <MenuItem value={row.telefono}>{row.telefono}</MenuItem>
                                                            ))}
                                                            </Select>
                                                            <FormHelperText>Seleccionar</FormHelperText>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                    <Typography variant="h6" component="h5" color="textSecondary" gutterBottom>
                                                        Celular: {misDatos.telefonoPrinc}  {/* si no tiene poner "ninguno aún" */}
                                                    </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                    <FormControl fullWidth className={classes.formControl}>
                                                        <Select variant="outlined"
                                                        value={celPrincipal}
                                                        onChange={handleChange}
                                                        displayEmpty
                                                        className={classes.selectEmpty}
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                        name="celPrincipal"
                                                        >
                                                        <MenuItem value="" disabled>
                                                            Seleccionar
                                                        </MenuItem>
                                                        {todosMisTelefonos.listPyCelularSms.map((row) => (
                                                            <MenuItem value={row.celular}>{row.celular}</MenuItem>
                                                        ))}
                                                        </Select>
                                                        <FormHelperText>Seleccionar</FormHelperText>
                                                        
                                                    </FormControl>
                                                    </Grid>

                                                    <Grid item xs={6}>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Typography variant="h6" component="h5" >
                                                        <Box component="div" textAlign="left">TE ENTREGÓ TU ÚLTIMO PEDIDO</Box>
                                                        </Typography>
                                                        <Card className={classes.root}>
                                                            <CardContent>
                                                            <LocalShippingOutlinedIcon fontSize="large"/>
                                                            <Typography variant="h6" component="h4" >
                                                            <Box component="div" textAlign="left">{ultimoEjectuvo.nombre} {ultimoEjectuvo.paterno}</Box>
                                                            </Typography>
                                                            <Typography variant="h6" component="h6" >
                                                            <Box component="div" textAlign="left">{ultimoEjectuvo.invoiceNum} Entrega Local</Box>
                                                            </Typography>
                                                            </CardContent>
                                                            <Button variant="outlined" name="Modal4" onClick={handleOpen}>Evaluar </Button>
                                                        </Card>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                                                

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
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open && modal === 'editarDatos'}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <div className={classes.paper}>
                <Box component="div" textAlign="center" m={1} py={2}>
                    <Box component="div" textAlign="center">
                      <Typography component="h3" variant="h5">
                          <Box component="span" fontWeight="fontWeightMedium">
                            Edita tus Datos
                          </Box>
                      </Typography>
                      <Box component="div" py={1}>
                        <Divider/>
                      </Box>
                    </Box>
                    <Box component="div" textAlign="center" m={1}>
                        <Link href="/DatosFacturacion" >
                            <Chip label="Para editar tus datos de facturación Ingresa aquí." color="primary" variant="outlined" />
                        </Link>
                    </Box>
                </Box>
               <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField fullWidth
                        id="outlined-full-width" 
                        label="Nombres(s)" 
                        variant="outlined" 
                        type="text" 
                        name="nombre"
                        defaultValue={nombre}
                        placeholder="Nombre de Usuario" 
                        onChange={handleChange}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth
                        id="outlined-full-width" 
                        label="Apellido(s)" 
                        variant="outlined" 
                        type="text" 
                        name="apellido" 
                        defaultValue={misDatos.apellido}
                        onChange={handleChange}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth
                        id="outlined-full-width" 
                        label="Correo" 
                        variant="outlined" 
                        type="text" 
                        name="correo" 
                        defaultValue={correo}
                        onChange={handleChange}
                        margin="normal"
                        InputLabelProps={{
                            readOnly: true,
                        }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth
                        id="outlined-full-width" 
                        label="Fecha de nacimiento" 
                        variant="outlined" 
                        type="date" 
                        name="fechaNac" 
                        defaultValue={fecha}
                        onChange={handleChange}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth size="large" color="primary"  onClick={(event) => { event.preventDefault();handleSubmit(misDatos.tipoCuenta)}}>Guardar</Button>
                    </Grid>
                </Grid>
            </div>
            </Fade>
        </Modal>
      
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open && modal === 'modificarPass'}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <Box component="div" className={classes.paper}>
                <Box component="div" textAlign="center" m={1} py={2}>
                    <Typography component="h3" variant="h5">
                        <Box component="span" fontWeight="fontWeightMedium">
                        Cambiar Contraseña
                        </Box>
                    </Typography>
                    <Box component="div" py={1}>
                    <Divider/>
                    </Box>
                </Box>
                <Box component="div" justifyContet="center">
                    <Grid container justifyContent="center" alignItems="center" mx={2} spacing={2}>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
                                <InputLabel htmlFor="standard-adornment-password">Contraseña Actual</InputLabel>
                                <Input 
                                    id="standard-adornment-password"
                                    name="passActual"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChangePass('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={(event) => { event.preventDefault(); handleClickShowPassword('showPassword')}}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
                                <InputLabel htmlFor="standard-adornment-password">Nueva contraseña</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    name="nuevoPass"
                                    type={values.showPassword2 ? 'text' : 'password'}
                                    value={values.password2}
                                    onChange={handleChangePass('password2')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={(event) => { event.preventDefault(); handleClickShowPassword('showPassword2')}}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                /> 
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
                                <InputLabel htmlFor="standard-adornment-password">Confirmar nueva contraseña</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    name="confirmaPass"
                                    type={values.showPassword3 ? 'text' : 'password'}
                                    value={values.password3}
                                    onChange={handleChangePass('password3')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={(event) => { event.preventDefault(); handleClickShowPassword('showPassword3')}}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword3 ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth size="large" color="primary" onClick={cambioContrasena}>Guardar</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            </Fade>
        </Modal>

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open && modal === 'agregaTel'}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <div className={classes.paper}>
                    <Box component="div" textAlign="center" m={1} py={2}>
                        <Typography component="h3" variant="h5">
                            <Box component="span" fontWeight="fontWeightMedium">
                                Agrega Teléfono(s)
                            </Box>
                        </Typography>
                        <Box component="div" py={1}>
                        <Divider/>
                        </Box>
                    </Box>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={8}>
                            <TextField fullWidth
                            id="outlined-number"
                            label="Teléfono"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            placeholder="5555555555"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth
                            id="outlined-number"
                            label="Ext."
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            placeholder="Ext."
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                name="tipoTelefono"
                                value={tipoTelefono}
                                onChange={handleChange}
                                label="Tipo"
                                >
                                    
                                <MenuItem value="" disabled>
                                    <em>Selecciona</em>
                                </MenuItem>
                                {tipoTelefonos.map((row) => (
                                    <MenuItem value={row.tipoNum}>{row.tipo}</MenuItem>
                                    ))
                                }
                                </Select>
                            </FormControl>           
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth color="primary" size="large" onClick={agregaTelCel}>Guardar</Button>        
                        </Grid>
                    </Grid>
                </div>
            </Fade>
        </Modal>

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open && modal === 'modificarTel'}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <div className={classes.paper}>
                <Box component="div" textAlign="center" m={1} py={2}>
                    <Typography component="h3" variant="h5">
                        <Box component="span" fontWeight="fontWeightMedium">
                            Modificar Teléfono(s)
                        </Box>
                    </Typography>
                    <Box component="div" py={1}>
                        <Divider/>
                    </Box>
                </Box>
                <Box component="div" textAlign="center" py={2}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}> 
                        {todosMisTelefonos.listPyTelefonoCliente.map((row) => (
                        <Grid item xs={12}>
                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                <Grid item xs={8} sm={6}>
                                    <TextField fullWidth
                                    id="outlined-number"
                                    label="Teléfono"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    placeholder="5555555555"
                                    defaultValue={row.telefono}
                                    />
                                </Grid>
                                <Grid item xs={4} sm={2}>
                                    <TextField fullWidth
                                        id="outlined-number"
                                        label="Ext."
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        defaultValue={row.extension}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        name="tipoTelefono"
                                        value={tipoTelefono}
                                        onChange={handleChange}
                                        label="Tipo"
                                        defaultValue="1"

                                        >
                                        <MenuItem value="" disabled>
                                            <em>Selecciona</em>
                                        </MenuItem>
                                        <MenuItem value={'Casa'}>Casa</MenuItem>
                                        <MenuItem value={'Oficina'}>Oficina</MenuItem>
                                        <MenuItem value={'Celular'}>Celular</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>       
                        </Grid>
                        ))}
                        <Box component="div" py={2}>
                            <Divider variant="middle"/>
                        </Box>
                        {todosMisTelefonos.listPyCelularSms.map((row) => (
                        <Grid item xs={12}>
                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}> 
                                <Grid item xs={9}>
                                    <TextField fullWidth
                                        id="outlined-number"
                                        label="Teléfono"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        defaultValue={row.celular}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField fullWidth
                                        id="outlined-number"
                                        label="Tipo"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        placeholder="Celular"
                                        disabled
                                    />
                                </Grid>
                            </Grid>        
                        </Grid>
                        ))}
                        <Grid item xs={12}>
                            <Button fullWidth size="large" color="primary">Guardar</Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            </Fade>
        </Modal>

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open && modal === 'Modal4'}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <div className={classes.paper}>
                    <Box component="div" textAlign="center" m={1} py={2}>
                        <Typography component="h3" variant="h5">
                            <Box component="span" fontWeight="fontWeightMedium">
                                ¿Qué te pareció el servicio brindado?
                            </Box>
                        </Typography>

                        <Typography component="h3" variant="h6">
                            <Box component="span" fontWeight="fontWeightMedium">
                                Nos gustaría saber como te atendió {ultimoTransportista.nombre} {ultimoTransportista.paterno} 
                            </Box>
                        </Typography>
                        <Box component="div" py={1}>
                        <Divider/>
                        </Box>
                    </Box>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={12}>
                            <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize aria-label="empty textarea" placeholder="Escribenos tu opinión" />
                        </Grid>
                    </Grid>
                    <CardActionArea >
                        <Button color="primary">Enviar</Button>
                    </CardActionArea>
                </div>
            </Fade>
        </Modal>
    </div>
  );

  let renderContainer = false;

  return(
    <Layout> 
    
    <div>
    <MiCuentaSiderBar/> 
        {primeraVez ? formPrimeraVez : formMisDatos}

        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            open={open && snack === 'uno'}
            autoHideDuration={6000}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
            Exito, Contraseña Actualizada
            </Alert>
        </Snackbar>

        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            open={open && snack === 'dos'}
            autoHideDuration={6000}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity="info">
            Las contraseñas no coinciden
            </Alert>
        </Snackbar>

        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            open={open && snack === 'tres'}
            autoHideDuration={6000}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity="info">
            Contraseña incorrecta
            </Alert>
        </Snackbar>

        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            open={open && snack === 'cuatro'}
            autoHideDuration={6000}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
            Verifica los datos, Algo salió mal
            </Alert>
        </Snackbar>
    </div>
    </Layout>
      
  );
}
