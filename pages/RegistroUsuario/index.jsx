import React, {useState, useEffect} from "react";
import axios from 'axios'
import Link from 'components/Link';
//MUI
import {Container,Box, Grid, Paper, Button, Typography, FormControl,
    FormControlLabel, Checkbox, TextField, } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

//Componentes
import { Layout } from 'layout/Layout';
import ReactInputVerificationCode from "react-input-verification-code";

//Servicios
import Services from '../services/Services'
import { useRouter } from 'next/router'

import Alertas from '../checkout/Alertas'

const useStyles = makeStyles((theme) => ({
    button: {
        textTransform:"none",
    },
})); 

export default function RegistroUsuario(){

     //creating IP state
    const [inputs, setInputs] = useState({});
    const [ip, setIP] = useState('');
    const [first, setFirst] = React.useState(false);
    const [alerta,setAlerta] = useState({})
    const [codigo,setCodigo] = useState(0)
	const router = useRouter();
    const [loading,setLoading] = useState(false) 
    const [empresa, setEmpresa] = React.useState(false);
    const [empresa2, setEmpresa2] = React.useState('N');

    let mensajeError = '';
    let error = false;

    const obtenerCodigo = (value) => {
        setCodigo([value])
        console.log("Value: "+value)
    };

    //creating function to load ip address from the API
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIP(res.data.IPv4)
    }
    
    useEffect( () => {
        
        getData()

    }, [])   
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const params = 
    '?usuario='+inputs.usuario+
    '&email='+inputs.correo+
    '&pass='+inputs.password+
    '&passC='+inputs.password2+
    '&ip='+ip+
    '&tel='+inputs.telefono+
    '&isEmpresa='+empresa2;

    const params2 = 
        '?codigo='+codigo+
        '&correo='+inputs.correo;
    
    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{6,20}$/, // 6 a 20 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{8,14}$/ // 8 a 14 numeros.
    }
    
    const validarPassword2 = () => {
        if(password.campo.length > 0){
            if(password.campo !== password2.campo){
            }else{
                setAlerta({severity:'error',mensaje:'Las contraseñas son distintas',vertical:'bottom',horizontal:'right',variant:'filled'})
            }
        }
    }

    

    async function handleSubmit() {
       
        setLoading(true);
        
        if(inputs.usuario === undefined || inputs.correo === undefined || inputs.password === undefined || inputs.password2 === undefined || inputs.telefono === undefined ){
            mensajeError = 'Campo(s) vacíos'
            error = true;
            
        }else{
            if( inputs.password !== inputs.password2){
                mensajeError = 'Contraseñas no coinciden'
                error = true;
            } else{
                error = false;
            }
        }

        if(error !== true){
            Services('POST','/registrov2/registraUsuarioNuevo'+params,{})
                .then( response =>{ 
                    if(response.data === "S"){
                        setFirst(true);
                        setLoading(false)
                        setAlerta({severity:'success',mensaje:'Registro exitoso',vertical:'bottom',horizontal:'right',variant:'filled'})
                    }else{
                        setLoading(false)
                        setAlerta({severity:'error',mensaje:'Hubo un error',vertical:'bottom',horizontal:'right',variant:'filled'})
                    }
            })
        }else{
            setAlerta({severity:'error',mensaje:mensajeError,vertical:'bottom',horizontal:'right',variant:'filled'})
            setLoading(false)
        }
    }

    async function handleSubmitVerificar(e) {
        e.preventDefault();
        let services  = await Services('POST','/registrov2/UpdatePyClienteCodigo'+params2,{}) 
        let data = services.data;
        if(services.data.estatus === "OK"){
            let services        = await Services('POST','/registrov2/validaCredencial?email='+inputs.correo+'&pass='+inputs.password+'&user_m=0',{})
            let data1            = await services.data

            if(data1.error === 'Usuario o Password Invalido'){
                setAlerta({severity:'error',mensaje:'Hubo un error al verificar',vertical:'bottom',horizontal:'right',variant:'filled'})
                }else{
                    localStorage.setItem('Usu_Nomb', data1.usuario.nombre)
                    localStorage.setItem('Email', data1.usuario.email)
                    localStorage.setItem('Cliente', data1.usuario.clienteNum)
                    localStorage.setItem('Usuario', data1.usuario.usuarioNum)
                    localStorage.setItem('SesPartidas', data1.usuario.partidas)
                    localStorage.setItem('Token', data1.usuario.token)
                    localStorage.setItem('Login', 'Ok')
                    localStorage.setItem('afiliado', data1.usuario.afiliacion)
                    localStorage.setItem('nivelAcceso', data1.usuario.nivelAcceso)

                    router.push("/Home")
                }
        }else if(services.data.estatus === "CODIGO INVALIDO"){
            setAlerta({severity:'error',mensaje:'Codigo Invalido',vertical:'bottom',horizontal:'right',variant:'filled'})
        }
    }

    async function reenviarCodigo() {
        let services  = await Services('POST','/registrov2/registraUsuarioNuevo'+params,{}) 
        let data = services.data;
        if(services.data === "S"){
            setAlerta({severity:'info',mensaje:'Codigo Reenviado',vertical:'bottom',horizontal:'right',variant:'filled'})
        }
    }

    const handleChange2 = (event) => {
        setEmpresa(event.target.checked)

        if(event.target.checked === true){
            setEmpresa2('S')
        }else{
            setEmpresa2('N')
        }
    }

    const paperStyle={padding:40, height: 'auto', width:450, maxWidth:'90%', margin:"30px auto"}
    return(

        <React.Fragment>
        <Layout>
            <Container maxWidth="xl">
                {first === false &&
                
                    <Paper variant="outlined" elevation={0} style={paperStyle}>
                        <Box textAlign='center' mb={2}>
                            <Typography  variant="h4" component="h1" textAlign="center" sx={{ fontWeight:'600' }}>Crear cuenta</Typography>
                            <Typography variant="subtitle1">Bienvenido ¡Nos da gusto que estes aquí!</Typography>   
                        </Box>
                        <Box my={1}>
                            <FormControl fullWidth onSubmit={handleSubmit} >
                                <TextField margin="dense" name="usuario" label="Nombre" variant="outlined" type="text" onChange={handleChange}  expresionRegular={expresiones.nombre} focused />
                                <TextField margin="dense" name="correo" variant="outlined" autoComplete="on" onChange={handleChange} type="text" label="Correo"   />
                                <TextField margin="dense" name="telefono" variant="outlined" autoComplete="on"  onChange={handleChange} type="number" label="Teléfono"  expresionRegular={expresiones.telefono} />             
                                <TextField margin="dense" name="password" variant="outlined" onChange={handleChange} type="password" label="Contraseña" expresionRegular={expresiones.password} />
                                <TextField margin="dense" name="password2" variant="outlined"  onChange={handleChange} type="password" label="Confirmación" funcion={validarPassword2} />
                                <FormControlLabel 
                                control={
                                    <Checkbox checked={empresa} onChange={handleChange2} name="checked" color="primary"/>
                                }
                                    label="Soy Empresa"
                                />

                                <Box mt={1}>
                                    <LoadingButton type="submit" variant="contained" size="large" color="primary"  fullWidth
                                        onClick={handleSubmit} 
                                        loading={loading}
                                        loadingIndicator="Registrando"
                                    >
                                        Crea tu cuenta
                                    </LoadingButton> 
                                    <Box my={1} textAlign="center">
                                        <Typography variant="body2"  >
                                            Al registrarte aceptas los &nbsp;
                                            <Box component="span" >
                                                <Link href="/soho/cliente/terminos-y-condiciones" color="textSecondary" sx={{ color:'textSecondary', fontWeight:'600' }}>
                                                    <a>
                                                    Términos y condiciones
                                                    </a>
                                                </Link>
                                            </Box>
                                        </Typography>
                                    </Box>
                                    <Box textAlign="center" pt={1}>
                                        <Typography variant="subtitle2">
                                                ¿Tienes una cuenta? &nbsp;
                                            <Box component="span" color="primary" sx={{ color:'primary' }}>
                                                <Link href="/Login"  sx={{ color:'primary', fontWeight:'600' }}>
                                                    Inicia Sesión
                                                </Link>
                                            </Box>
                                        </Typography>
                                    </Box>
                                    
                                </Box>
                            </FormControl>
                        </Box>
                    </Paper>
            
                }
                {first == true &&
                    <Paper variant="outlined" elevation={0} style={paperStyle}>
                        <Box textAlign='center' my={9}>
                            <Typography  variant="h4" component="h1" textAlign="center" sx={{ fontWeight:'600' }}>Verifica tu cuenta</Typography>
                            <Typography mt={1} variant="subtitle1">Ingresa el código que enviamos al e-mail: {inputs.correo} </Typography>   
                        </Box>
                       
                        <form fullWidth onSubmit={handleSubmitVerificar}>
                            <Box component="div" pb={4}>
                                <div className="custom-styles" sx={{width:'100px'}}>
                                    <ReactInputVerificationCode placeholder={null}
                                    length={6} onChange={obtenerCodigo}/>
                                </div>
                            </Box>
                        
                            <Box mt={2}>
                                <Button type="submit" variant="contained" size="large" color="primary" fullWidth >Verificar el código</Button>
                            </Box>
                            <Box my={1} textAlign="center">
                                <Button variant="outlined" size="large" color="primary" fullWidth onClick={reenviarCodigo}>
                                    Reenvíar código
                                </Button>
                            </Box>
                        </form>
                   
                    </Paper>
                } 
                {(alerta.hasOwnProperty('severity'))&&
                    <Alertas setAlerta={setAlerta} alerta={alerta}/>
                } 
            </Container>   
        </Layout>
    </React.Fragment>  

    )
}