import React, {useState} from "react";

//MUI
import {Container, Box, Grid, Paper, Button, Typography, FormControl, Tab,AppBar,Table,TableBody,
    TableCell,TableContainer,TableRow, Avatar, TextField } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

//Componentes
import { Layout } from 'layout/Layout';

//Servicios
import Services from '../services/Services'
import { useRouter } from 'next/router'
import Alertas from '../checkout/Alertas'


export default function Contra(){  

    const [inputs, setInputs] = useState({});
    const ruter = useRouter()
    const [alerta,setAlerta] = useState({})
 
    const params = 
            '?email='+inputs.correo;
    
    const expresiones = {
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let services  = await Services('GET','/registrov2/enviacorreoPedidos'+params,{}) 
        let data = services.data;
        setAlerta({severity:'success',mensaje:'Correo Enviado',vertical:'bottom',horizontal:'right',variant:'filled'})
    }
    const paperStyle={padding:40, height: 'auto', width:450, maxWidth:'90%', margin:"30px auto"}
    return(
        <Layout>
                <Container maxWidth="sm">
                    <Paper variant="outlined" elevation={0} style={paperStyle}>
                        <Box textAlign='center' my={2}>
                            <Typography variant="h4" component="h1" textAlign="center" sx={{ fontWeight:'600' }}>Restablecer contraseña</Typography>
                            <Typography variant="subtitle1">Enviaremos instrucciones a tu correo electrónico de registro para restablecer la contraseña</Typography>   
                        </Box>
                        <Box my={4}>
                            <FormControl fullWidth  onSubmit={handleSubmit} >
                                <TextField id="outlined-basic" label="Correo" variant="outlined" type="text" name="correo" onChange={handleChange} focused/>
                                <Box mt={2}>
                                    <Button type="submit" variant="contained" size="large" color="primary"  onClick={handleSubmit} fullWidth>
                                       Envíar
                                    </Button>
                                </Box>
                            </FormControl>
                        </Box>
                    </Paper>
                </Container> 
                {(alerta.hasOwnProperty('severity'))&&
                    <Alertas setAlerta={setAlerta} alerta={alerta}/>
                } 
        </Layout>
    )
}