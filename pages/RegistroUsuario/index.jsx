import React, {useState, useEffect} from "react";
import axios from 'axios'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Componentes
import { Layout } from 'layout/Layout';

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
        alert(params);
        let services  = await Services('POST','/registrov2/registraUsuarioNuevo'+params,{}) 
        let data = services.data;
        alert(data);
        if(services.data === "S"){
            setFirst(true);
        }
    }

    async function handleSubmitVerificar(e) {
        e.preventDefault();
        alert(params2);
        let services  = await Services('POST','/registrov2/verificarCodigo'+params,{}) 
        let data = services.data;
        alert(data);

        ruter.push("/home")
    }

    const [state, setState] = React.useState({
        checked: false
    });

    const paperStyle={padding:40, height:'60vh', width:450, margin:"80px auto"}
    return(

        <React.Fragment>
        <Layout>
        <CssBaseline />
            {first === false &&
            <Grid>
                    <Paper variant="outlined" elevation={0} style={paperStyle}>
                        <Grid align='center' mb={2}>
                            <Typography variant="h1" textAlign="center" mb={8}>Crear cuenta</Typography>
                            <Typography variant="subtitle1">Bienvenido ¡Nos da gusto que estes aquí!</Typography>   
                        </Grid>
                        <Box my={4}>
                            
                <form onSubmit={handleSubmit} className="classes.margin">
                    <TextField name="usuario" variant="outlined" autoComplete="on"  onChange={handleChange} type="text" placeholder="Nombre"  expresionRegular={expresiones.nombre} />
                    <TextField name="correo" variant="outlined" autoComplete="on" onChange={handleChange} type="text" placeholder="Correo"  expresionRegular={expresiones.correo} />
                    <TextField name="telefono" variant="outlined" autoComplete="on"  onChange={handleChange} type="number" placeholder="Teléfono"  expresionRegular={expresiones.telefono} />             
                    <TextField name="password" variant="outlined" onChange={handleChange} type="password" placeholder="Contraseña" expresionRegular={expresiones.password} />
                    <TextField name="password2" variant="outlined"  onChange={handleChange} type="password" placeholder="Confirmación" funcion={validarPassword2} />
                    <FormControlLabel 
                    control={
                        <Checkbox checked={state.checked} onChange={handleChange} name="checked" color="primary"/>
                    }
                        label="Soy Empresa"
                    />

                    <Box mt={3}>
                        <Button type="submit" variant="contained" size="large" color="primary"  onClick={handleSubmit} fullWidth>
                                Crea tu cuenta
                        </Button>
                    </Box>
                </form>
                        </Box>
                    </Paper>
            </Grid>   
            }
            {first == true &&
                <div>
                    <h2>Ingresa el código que te enviamos por e-mail:</h2>
                    <p>{inputs.correo}</p>
                    <form onSubmit={handleSubmitVerificar}>
                    <TextField variant="outlined" type="number" name="num1" onChange={handleChange}/>
                    <TextField variant="outlined" type="number" name="num2" onChange={handleChange}/>
                    <TextField variant="outlined" type="number" name="num3" onChange={handleChange}/>
                    <TextField variant="outlined" type="number" name="num4" onChange={handleChange}/>
                    <TextField variant="outlined" type="number" name="num5" onChange={handleChange}/>
                    <TextField variant="outlined" type="number" name="num6" onChange={handleChange}/>
                    <div>
                        <Button type="submit">Verificar el código</Button>
                    </div>
                    </form>
                </div>
            }
        </Layout>
    </React.Fragment>  

    )
}