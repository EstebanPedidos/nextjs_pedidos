import React, {useState, useEffect} from "react";
import axios from 'axios'

//MUI
import {Container,Box, Grid, Paper, Button, Typography, FormControl,
    FormControlLabel, Checkbox, TextField,Link } from '@mui/material';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

//Componentes
import { Layout } from 'layout/Layout';
import Verification from './verification';
//Servicios
import Services from '../services/Services'
import Router, { withRouter } from 'next/router'


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
        '&isEmpresa=N';

    const params2 = 
        '?codigo='+inputs.num1+inputs.num2+inputs.num3+inputs.num4+inputs.num5+inputs.num6+
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
                console.log('Las contraseñas son iguales')
            }else{
                console.log('Las contraseñas son distintas')
            }
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Entro al servicio Registrar Usuario");
        let services  = await Services('POST','/registrov2/registraUsuarioNuevo'+params,{}) 
        let data = services.data;
        if(services.data === "S"){
            setFirst(true);
        }
    }

    async function handleSubmitVerificar(e) {
        e.preventDefault();
        let services  = await Services('POST','/registrov2/verificarCodigo'+params,{}) 
        let data = services.data;

        ruter.push("/home")
    }

    const [state, setState] = React.useState({
        checked: false
    });

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
                                    <Checkbox checked={state.checked} onChange={handleChange} name="checked" color="primary"/>
                                }
                                    label="Soy Empresa"
                                />

                                <Box mt={1}>
                                    <Button type="submit" variant="contained" size="large" color="primary"  onClick={handleSubmit} fullWidth>
                                            Crea tu cuenta
                                    </Button>
                                    <Box my={1} textAlign="center">
                                        <Typography variant="body2"  >
                                            Al registrarte aceptas los &nbsp;
                                            <Box component="span" >
                                                <Link href="/" color="textSecondary" sx={{ color:'textSecondary', fontWeight:'600' }}>
                                                    Términos y condiciones
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
                                <Verification/>
                            </Box>
                            {/* <Box py={4} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <TextField sx={{ m: 0.5, width: '5ch' }} variant="outlined" type="number" name="num1" onChange={handleChange}/>
                                <TextField sx={{ m: 0.5, width: '5ch' }} variant="outlined" type="number" name="num2" onChange={handleChange}/>
                                <TextField sx={{ m: 0.5, width: '5ch' }}variant="outlined" type="number" name="num3" onChange={handleChange}/>
                                <TextField sx={{ m: 0.5, width: '5ch' }}variant="outlined" type="number" name="num4" onChange={handleChange}/>
                                <TextField sx={{ m: 0.5, width: '5ch' }}variant="outlined" type="number" name="num5" onChange={handleChange}/>
                                <TextField sx={{ m: 0.5, width: '5ch' }}variant="outlined" type="number" name="num6" onChange={handleChange}/>
                            </Box> */}
                            <Box mt={2}>
                                <Button type="submit" variant="contained" size="large" color="primary" fullWidth >Verificar el código</Button>
                            </Box>
                            <Box my={1} textAlign="center">
                                <Button component={Link} to="/Contra" type="submit" variant="outlined" size="large" color="primary" fullWidth >
                                    Reenvíar código
                                </Button>
                            </Box>
                        </form>
                   
                    </Paper>
                } 
            </Container>   
        </Layout>
    </React.Fragment>  

    )
}