import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { format } from 'date-fns';

//MUI
import {Box, Grid, Paper, Typography, Container, Backdrop,
    Button, Select, TextField, Divider, Modal, Fade,
    Card, CardContent, CardMedia, CardActionArea, TextareaAutosize,
    FormHelperText, FormControl, MenuItem, IconButton,
    Input, InputLabel, InputAdornment, OutlinedInput, Chip, Stack, Rating } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import makeStyles from '@mui/styles/makeStyles';

import esLocale from 'date-fns/locale/es'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

//Component
import { Layout } from 'layout/Layout';
import MiCuentaSiderBar from 'layout/MiCuentaSiderBar'
import Alertas from '../checkout/Alertas'

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
    position: 'absolute',
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
    const [value, setValue] = React.useState();
    const [valueDate, setValueDate] = React.useState(new Date());
    const [fechaNac, setFechaNac] = React.useState(null);
    const [celPrincipal, setCelPrincipal] = React.useState(0);
    const [telPrincipal, setTelPrincipal] = React.useState(0);
    const [misDatos, setMisDatos] = useState({clienteNum:0,usuarioNum:0,nombre:"",apellido:"",empresa:"",fechaNac:"",fechaReg:"",enviaMsg:"",entregaCliente:"",tipoCuenta:"",celularPrinc:"",telefonoPrinc:""});
    const [misTelefonos, setMisTelefonos] = useState([]);
    const [misCelulares, setMisCelulares] = useState([]);
    const [ultimoTransportista, setUltimoTransportista] = useState({certifNum: 0,
        invoiceNum: ' ',
        choferNum: 0,
        nombre: '',
        paterno: '',
        materno: '',
        layoutMail: {
            id_evaluacion: '',
            invoice_num: '',
            certif_num: '',
            evaluacion: 0,
            comentario: '',
            fecha: ''
        }});
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
    const [fecha, setFecha] = React.useState("");
    const [tipoTelefono, setTipoTelefono] = React.useState('');
    const [alerta,setAlerta] = useState({})
    const [correo, setCorreo] = React.useState('');
    const [cliente, setCliente ] = React.useState('');
    const [usuarioNum, setUsuarioNum] = React.useState('');
    const [usu_nomb, setUsu_nomb] = React.useState('');
    const [afiliado, setAfiliado] = React.useState('');
    const [nivelAcceso, setNivelAcceso] = React.useState('');
    const [ejecutivoNum, setEjecutivoNum] = React.useState('');
    const [telefonoPrinc, setTelefonoPrinc] = React.useState(0);

    const localeMap = {
        es: esLocale,
    };
    

    const [values, setValues] = React.useState({
        password: '',
        password2: '',
        password3: '',
        showPassword: false,
        showPassword2: false,
        showPassword3: false,
    });
    
    const test = new Date('2014-08-18T21:11:54');

    let correo1 = '';
    let cliente1 = '';
    let usuarioNum1 = '';
    let usu_nomb1 = '';
    let nivelAcceso1 = '';
    let ejectuvoNum1  = '';
    let afiliado1 = '';

    useEffect( () => {
        correo1 = localStorage.getItem('Email')
        cliente1 = localStorage.getItem('Cliente')
        usuarioNum1 = localStorage.getItem('Usuario')
        usu_nomb1 = localStorage.getItem('Usu_Nomb')
        nivelAcceso1 = localStorage.getItem('nivelAcceso')
        ejectuvoNum1 = localStorage.getItem('EjecutivoNum')
        ejectuvoNum1 = localStorage.getItem('EjecutivoNum')
        afiliado1 = localStorage.getItem('afiliado')

    }, [correo1,cliente1, usuarioNum1, usu_nomb1, nivelAcceso1, ejectuvoNum1, afiliado1]) 

    useEffect( () => {

        if(cliente !== undefined && cliente !== null && afiliado !== undefined && afiliado !== null){
            if(parseInt(cliente) !== 201221){
                
                const getData= async ()=>{

                    setCorreo(correo1);
                    setCliente(cliente1);
                    setUsuarioNum(usuarioNum1);
                    setUsu_nomb(usu_nomb1);
                    setNivelAcceso(nivelAcceso1);
                    setEjecutivoNum(ejectuvoNum1);
        
                    Services('POST','/miCuenta/obtieneMisDatos?usuarioNum='+usuarioNum1,{})
                        .then( response =>{
                        setMisDatos(response.data);
                        setFecha(format(new Date(response.data.fechaNac), 'yyyy-MM-dd'));
                        if (response.data.nombre === "" || response.data.nombre === null || response.data.nombre === undefined){
                            setPrimeraVez(true);
                            console.log('SI esta ejecutando')
                            }else{
                            setPrimeraVez(false);
                        }
                        
                        if(response.data.telefonoPrinc === 0 || response.data.telefonoPrinc !== "" ){
                            setTelefonoPrinc(0); 
                        }else{
                            
                        }
        
                        if(response.data.celularPrinc !== "" || response.data.celularPrinc !== null || response.data.celularPrinc !== undefined){
                            setCelPrincipal(response.data.celularPrinc); 
                        }
                        }).catch(error => {
                            console.log("falló obtieneMisDatos")
                            console.log(error.response)
                    });
        
                    Services('POST','/miCuenta/obtieneTelefonos?usuarioNum='+usuarioNum1,{})
                        .then( response =>{
                        setMisTelefonos(response.data);
                        console.log("obtieneTelefonos Exitoso")
                        }).catch(error => {
                        console.log("falló obtieneTelefonos")
                        console.log(error.response)
                    });
                    
                    Services('POST','/miCuenta/obtieneTelefonos?cliente_num='+cliente1,{})
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
        
                    Services('POST','/miCuenta/todosMisTelefonos?clienteNum='+cliente1+'&usuarioNum='+usuarioNum1,{})
                    .then( response =>{
                        setTodosMisTelefonos(response.data);
                        console.log("todosMisTelefonos Exitoso")
                        }).catch(error => {
                            console.log("falló todosMisTelefonos")
                            console.log(error.response)
                    });
        
                    Services('POST','/miCuenta/consultaTransportista?clienteNum='+cliente1,{})
                    .then( response =>{
                        setUltimoTransportista(response.data);
                        console.log(response.data)
                        console.log("consultaTransportista Exitoso")
                        }).catch(error => {
                            console.log("falló consultaTransportista")
                            console.log(error.response)
                    });
                }
                
                getData();
        
            }else{
                router.push('/')
            } 
        }else{
            router.push('/')
        } 
        
    }, []) 

    const handleOpen = (event) => {
        const name = event.target.name;
        setModal(name)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeDate = (newValue) => {
        setValueDate(newValue);
        setFechaNac((newValue.getFullYear()+'-'+newValue.getMonth()+1)+'-'+newValue.getDay())
      };

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
         Services('POST-NOT','/miCuenta/actualizaDatos',{
            nombre:inputs.nombre === undefined || inputs.nombre === null? misDatos.nombre : inputs.nombre,
            apellido:inputs.apellido === undefined || inputs.apellido === null ? misDatos.apellido : inputs.apellido,
            statEmp:tipoCuenta,
            empresa:inputs.empresa === undefined || inputs.empresa === null ? misDatos.empresa : inputs.empresa,
            email:correo,
            fechaNac:fechaNac === null ? misDatos.fechaNac : valueDate,
            usuarioNum:parseInt(usuarioNum),
            tipoCuenta:tipoCuenta,
            nivelAcceso: parseInt(nivelAcceso)
        })
        .then( response =>{
            if(response.data === "ERRORNo tiene permiso para actualizar los datos"){
                setAlerta({severity:'error',mensaje:'No tiene permiso para actualizar los datos',vertical:'bottom',horizontal:'right',variant:'filled'})
            }else if(response.data === "ERROROcurrio un error al actualizar los datos"){
                setAlerta({severity:'error',mensaje:'Ocurrio un error al actualizar los datos',vertical:'bottom',horizontal:'right',variant:'filled'})
            }else if(response.data === "ERRORNo se actualizaron los datos"){
                setAlerta({severity:'error',mensaje:'No se actualizaron los datos',vertical:'bottom',horizontal:'right',variant:'filled'})
            }else{
                setAlerta({severity:'success',mensaje:'Exito, tus datos se actualizaron',vertical:'bottom',horizontal:'right',variant:'filled'})
                refreshPage();
            }
        }).catch(error => {
            setAlerta({severity:'error',mensaje:'Hubo un error',vertical:'bottom',horizontal:'right',variant:'filled'})
        });
    };

    function registraMisDatos() {
        console.log("Entro al servicio Registrar Mis Datos");
        console.log(cliente+' '+usuarioNum+' Nombre:'+(inputs.nombre === undefined ? "" : misDatos.nombre)+' Apellido:'+(inputs.apellido === undefined ? "" : misDatos.apellido)+' Empresa:'+(inputs.empresa === undefined ? "" : misDatos.empresa)+' FechaNac:'+(inputs.fechaNac === undefined ? "" : misDatos.fechaNac)+' '+tipoCuenta)
        Services('POST','/miCuenta/registraMisDatos',{
            clienteNum:cliente,
            usuarioNum:usuarioNum,
            nombre:inputs.nombre,
            apellido:inputs.apellido,
            empresa:(inputs.empresa === undefined ? "" : inputs.empresa),
            fechaNac:inputs.fechaNac,
            tipoCuenta:tipoCuenta
        })
        .then( response =>{
            if(response.data === "ERROR"){
                setAlerta({severity:'error',mensaje:'Hubo un error',vertical:'bottom',horizontal:'right',variant:'filled'})
            }else{
            setAlerta({severity:'success',mensaje:'Exito, tus datos se actualizaron',vertical:'bottom',horizontal:'right',variant:'filled'})
            refreshPage();
            }
        }).catch(error => {
            setAlerta({severity:'error',mensaje:'Hubo un error',vertical:'bottom',horizontal:'right',variant:'filled'})
        });

    };

    function agregaTelCel(){
        Services('POST','/miCuenta/agregaTelCel',{
            telNum:inputs.telNum,
		    clienteNum:cliente,
            usuarioNum:usuarioNum,
		    telefono:inputs.telefono,
		    extension:inputs.extension,
		    tipoNum:inputs.tipoNum,
		    fechaRegistro:"",
		    status:"A",
		    rolNum:0
        })
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
        Services('POST','/miCuenta/cambioContrasena?usuarioNum='+localStorage.getItem('Usuario')+'&contrasenaA='+values.password+'&contrasenaN='+values.password2+'&contrasenaN2='+values.password3,{})
            .then( response =>{
                if(response.data > 0){
                    setAlerta({severity:'success',mensaje:'Exito, Contraseña Actualizada',vertical:'bottom',horizontal:'right',variant:'filled'})
                }else if(response.data === -1){
                    setAlerta({severity:'error',mensaje:'Las contraseñas no coinciden',vertical:'bottom',horizontal:'right',variant:'filled'})
                }else if(response.data === -2){
                    setAlerta({severity:'error',mensaje:'Contraseña incorrecta',vertical:'bottom',horizontal:'right',variant:'filled'})
                }else{
                    setAlerta({severity:'error',mensaje:'Verifica los datos, Algo salió mal',vertical:'bottom',horizontal:'right',variant:'filled'})
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
                  placeholder="Nombre de Usuario " 
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
        <Container maxWidth="lg">
            <Box component="div" mt={2}>
                <Grid 
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center">
                    <Grid item xs={8} sm={9}>   
                        <Box component="div" py={2}>
                            <Typography variant="h4" component="h1" sx={{fontWeight:'500'}}>
                                Mis Datos
                            </Typography> 
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3}>   
                    <Box component="div" py={2}>
                        <Button variant="contained" color="primary" fullWidth size="large" name="editarDatos" onClick={handleOpen}>Editar</Button>
                    </Box>
                    </Grid>
                </Grid>
                {/* <Divider light/> */}
                <Box component="div" m={1} pb={4}>
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
                                            {misDatos.nombre !== "" &&
                                            <TextField fullWidth disabled
                                                id="outlined-read-only-input"
                                                label="Nombre(s)"
                                                defaultValue={misDatos.nombre}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                                variant="outlined"
                                            />
                                            }
                                        </Grid>
                                        <Grid item xs={6}>
                                            {misDatos.nombre !== "" &&
                                            <TextField fullWidth  disabled
                                                id="outlined-read-only-input"
                                                label="Apellidos(s)"
                                                defaultValue={misDatos.apellido}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                                variant="outlined"
                                            />
                                            }
                                        </Grid>
                                        {misDatos.tipoCuenta === "N" &&
                                        <Grid item xs={12}>
                                            <TextField fullWidth disabled
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
                                            {correo !== "" &&
                                            <TextField fullWidth disabled
                                                id="outlined-read-only-input"
                                                label="Correo"
                                                defaultValue={correo}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                                variant="outlined"
                                            />
                                            }
                                        </Grid>
                                        <Grid item xs={6}>
                                            {misDatos.fechaNac !== "" &&
                                            <TextField fullWidth disabled
                                            id="outlined-full-width" 
                                            label="Fecha de nacimiento" 
                                            defaultValue={misDatos.fechaNac}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            />
                                            }
                                        </Grid>
                                    </Grid> 
                                </Grid> 
                                <Grid item xs={12}>
                                    <Box component="div" py={2}>
                                        <Divider  light/>
                                    </Box>
                                    <Box component="div" py={2}>
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
                                    <Box component="div" py={2}>
                                        <Divider  light/>
                                    </Box>
                                </Grid>  
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography variant="h6" component="h5" gutterBottom>
                                                Contacto
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
                                                    <MenuItem key={row.telefono} value={row.telefono}>{row.telefono}</MenuItem>
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
                                                    <MenuItem key={row.celular} value={row.celular}>{row.celular}</MenuItem>
                                                ))}
                                                </Select>
                                                <FormHelperText>Seleccionar</FormHelperText>
                                                
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box component="div" py={2}>
                                        <Divider variant="middle" light/>
                                    </Box>
                                </Grid>
                                {ultimoTransportista.layoutMail.comentario !=="NOHAYPEDIDOSENTREGADOS" && ultimoTransportista.layoutMail.comentario !=="ENTREGADOSINRESENANULL" && ultimoTransportista.layoutMail.comentario !=="ERRORALCONSULTARTRANSPORTISTA" &&
                                <Grid item xs={12} sm={6}>
                                    <Box component="div" textAlign="left" pb={2}>
                                        <Typography variant="body1" color="textSecondary">
                                            <Box component="div" textAlign="left">TE ENTREGO TU ÚLTIMO PEDIDO</Box>
                                        </Typography>
                                    </Box>
                                    <Card className={classes.root }elevation={10}>
                                        <Box component="div" m={1}>
                                            <CardContent >
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="space-around"
                                                alignItems="center"
                                            >
                                                <Grid item>
                                                    <LocalShippingOutlinedIcon color="textSecondary" fontSize="large"/>
                                                </Grid>
                                                <Grid item>
                                                    <Box component="div" py={1} textAlign="left">
                                                        <Typography variant="subtitle1" sx={{fontWeight:'500'}} >
                                                            {ultimoTransportista.nombre} {ultimoTransportista.paterno}
                                                        </Typography>
                                                        <Typography variant="subtitle2" color="textSecondary" >
                                                            H{ultimoTransportista.invoiceNum.toString().substr(1, 6)} Entrega Local
                                                        </Typography>
                                                    </Box>
                                                    <Button fullWidth variant="outlined" name="Modal4" onClick={handleOpen}>Evaluar </Button>

                                                </Grid>
                                            </Grid>
                                            </CardContent>
                                        </Box>
                                    </Card>
                                </Grid>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    

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
                      <Box component="div" py={4}>
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
                        defaultValue={misDatos.nombre}
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
                </Grid>
                    {misDatos.tipoCuenta === "N" &&
                        <div>
                    <Grid container spacing={2}>        
                        <Grid item xs={12}>
                            <TextField fullWidth
                            id="outlined-full-width" 
                            label="Empresa" 
                            variant="outlined" 
                            type="text" 
                            name="empresa" 
                            defaultValue={misDatos.empresa}
                            onChange={handleChange}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
                        </Grid>
                    </Grid>    
                        </div>
                    }
                 <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField fullWidth
                        id="outlined-full-width" 
                        label="Correo" 
                        variant="outlined" 
                        type="text" 
                        name="correo" 
                        defaultValue={correo}
                        margin="normal"
                        InputLabelProps={{
                            readOnly: true,
                        }}
                        disabled/>
                    </Grid>
                    <Grid item xs={6}>
                        <Box pt={2}>
                            <LocalizationProvider 
                            dateAdapter={AdapterDateFns}
                            adapterLocale={esLocale}
                            dateFormats=""
                            >
                                <DatePicker
                                label='Fecha de nacimiento'
                                name="fechaNac" 
                                value={misDatos.fechaNac}
                                onChange={handleChangeDate}
                                renderInput={(params) => <TextField fullWidth {...params} />}
                                />
                            </LocalizationProvider> 
                        </Box>
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
                <Box component="div" textAlign="center" m={1} pt={2}>
                    <Typography component="h3" variant="h5">
                        <Box component="span" fontWeight="fontWeightMedium">
                            Cambiar Contraseña
                        </Box>
                    </Typography>
                    <Box component="div" py={4}>
                        <Divider/>
                    </Box>
                    <Box component="div">
                        <Grid container justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item xs={12}>   
                                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
                                    <InputLabel htmlFor="standard-adornment-password">Contraseña Actual</InputLabel>
                                    <OutlinedInput 
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
                                    <OutlinedInput
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
                                    <OutlinedInput
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
                        <Box component="div" py={4}>
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
                                    <MenuItem key={row.tipoNum} value={row.tipoNum}>{row.tipo}</MenuItem>
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
                    <Box component="div" py={4}>
                        <Divider/>
                    </Box>
                </Box>
                <Box component="div" textAlign="center" py={2}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}> 
                        {todosMisTelefonos.listPyTelefonoCliente.map((row) => (
                        <Grid item xs={12} key={row.telefono}>
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
                        <Grid item xs={12} component="div" py={2}>
                            <Box component="div" textAlign="center" py={2}>
                                <Divider />
                            </Box>
                        </Grid>
                        {todosMisTelefonos.listPyCelularSms.map((row) => (
                        <Grid item xs={12} key={row.celular}>
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
        <Box className={classes.bgcontent} component="div" >
            <Box component="div" m={1}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Grid item xs={12} sm={4} lg={3}>
                        <MiCuentaSiderBar/> 
                    </Grid>
                    <Grid item xs={12} sm={8} lg={9}>
                        <Box component="div" m={1}>
                            {primeraVez ? formPrimeraVez : formMisDatos}
                        </Box>
                    </Grid>
                </Grid>
            </Box> 
        </Box>
    <div>

    {(alerta.hasOwnProperty('severity'))&&
        <Alertas setAlerta={setAlerta} alerta={alerta}/>
    } 
    </div>
    </Layout>
      
  );
}
