import React, {useState} from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button'

//Servicios
import Services from '../services/Services'
import Router, { withRouter } from 'next/router'

//Componentes
import { Layout } from 'layout/Layout';

export default function Contra(){  

    const [inputs, setInputs] = useState({});
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
        console.log("Entro al servicio de Recuperar Contraseña");
        console.log("Correo: "+inputs.correo);

        let services  = await Services('GET','/registrov2/enviacorreoPedidos'+params,{}) 
        let data = services.data;
        alert(data);
        ruter.push("/home")

    }

    return(
        <Layout>
            <div>
                <h2>Recupera tu contraseña</h2>
                <h2>Estimado usuario:</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Por favor ingresa tu correo registrado. Le enviaremos un correo para el cambio de su contraseña.</p>
                        
                    </div>
                    <TextField id="outlined-basic" label="Correo" variant="outlined" type="text" name="correo" onChange={handleChange}/>
                    <div>
                        <Button type="submit" variant="contained" onClick={handleSubmit}>Recuperar</Button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}