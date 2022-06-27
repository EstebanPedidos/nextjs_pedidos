import React, {useEffect,useState} from "react";
import Link from 'next/link'
//MUI
import {Container, Box, Grid, Paper, Button, Typography, FormControl, Tab,AppBar,Table,TableBody,
    TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

    import makeStyles from '@mui/styles/makeStyles';

//Componentes
import { Layout } from 'layout/Layout';
import Alertas from '../checkout/Alertas'

//Servicios
import Services from '../services/Services'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
    button: {
      textTransform:"none",
    },
})); 


export default function Login(){  
    const ruter = useRouter() 
    const classes = useStyles();
    const paperStyle={padding:40, height: 'auto', width:450, maxWidth:'90%', margin:"30px auto"}
    const [inputs, setInputs] = useState({});
    const [isLogged, setLogged] = useState(false);
    const [intentos, setIntentos] = useState(0);
    const [alerta,setAlerta] = useState({})
    const [url, setUrl] = useState('');
    const [loading,setLoading] = useState(false) 

    useEffect(() => {
        setUrl(localStorage.getItem('URL') )
    }, []) 

    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    function refreshPage() {
        window.location.reload(false);
    }

    async function handleSubmit(e) {     
        setLoading(true);
  
        e.preventDefault();
        let usuario         = await (localStorage.getItem('Usuario') === undefined || localStorage.getItem('Usuario') === null)?0:localStorage.getItem('Usuario')
        let services        = await Services('POST','/registrov2/validaCredencial?email='+inputs.correo+'&pass='+inputs.pass+'&user_m='+usuario,{})
        let data            = await services.data
        

        if(data.error === 'Usuario o Password Invalido'){
            localStorage.setItem('Cliente','201221')
            localStorage.setItem('Token', '')
            localStorage.setItem('Login', 'NO')
            localStorage.setItem('Usuario', '0')
            localStorage.setItem('iniciales', false)
            localStorage.setItem('iniciales', "")
            localStorage.setItem('Nombre_corto', "")
            setIntentos(intentos+1);
            setAlerta({severity:'error',mensaje:'Correo o Contraseña incorrecta',vertical:'bottom',horizontal:'right',variant:'filled'})
            if(intentos > 2){
                ruter.push('/Contra')
            }
            setLoading(false)
        }else{
            let nombre = data.usuario.nombre
            setAlerta({severity:'info',mensaje:'Bienvenido '+nombre,vertical:'bottom',horizontal:'right',variant:'filled'})
            localStorage.setItem('Usu_Nomb', data.usuario.nombre)
            localStorage.setItem('Email', data.usuario.email)
            localStorage.setItem('Cliente', data.usuario.clienteNum)
            localStorage.setItem('Usuario', data.usuario.usuarioNum)
            localStorage.setItem('SesPartidas', data.usuario.partidas)
            localStorage.setItem('Token', data.usuario.token)
            localStorage.setItem('Login', 'Ok')
            localStorage.setItem('afiliado', data.usuario.afiliacion)
            localStorage.setItem('nivelAcceso', data.usuario.nivelAcceso)
            setLogged(true);

            let services1        = await Services('POST','/miCuenta/obtieneFavoritosFrecuentes?clienteNum='+data.usuario.clienteNum,{})
            let data1            = await services1.data.favoritosFrecuentes;
            if(data1 !== "VACIO"){
            data1 = data1.filter(
                (favoritos) => favoritos.tipo === "F")

            localStorage.setItem('Favoritos', data1.length) 
            }else{
                localStorage.setItem('Favoritos', 0) 
            }
            
            if( url === undefined || url === null || url === ''){
                ruter.push('/Home')
            }else{
                // ruter.push(localStorage.getItem('URL'))
                ruter.push('/checkout/verifica-pedido')
            }
        }
      }
    
    return(
        <React.Fragment>
            <Layout>
                <Container maxWidth="sm">
                    <Paper variant="outlined" elevation={0} style={paperStyle}>
                        <Box textAlign='center' my={2}>
                            <Typography variant="h4" component="h1" textAlign="center" sx={{ fontWeight:'600' }}>Inicia Sesión</Typography>
                            <Typography variant="subtitle1">Hola ¡Que bueno verte!</Typography>   
                        </Box>
                        <Box my={4}>
                            <FormControl fullWidth noValidate onSubmit={handleSubmit} className="classes.margin" >
                                <TextField id="outlined-basic" margin="normal" label="Correo" variant="outlined" autoComplete="on" name="correo" onChange={handleChange} fullWidth focused/>
                                <TextField id="outlined-basic" margin="normal"  label="Contraseña" variant="outlined" type="password" name="pass" onChange={handleChange} fullWidth />
                                
                                <Box mt={2}>
                                    <LoadingButton className={classes.button} type="submit" variant="contained" size="large" color="primary" fullWidth
                                        onClick={handleSubmit}
                                        loading={loading}
                                        loadingIndicator="Iniciando Sesión"
                                    >    
                                        Inicia Sesión
                                    </LoadingButton>
                                </Box>
                                
                                <Box textAlign="center" pt={4}>
                                    <Typography variant="subtitle2" sx={{ fontWeight:'600' }}  >
                                            ¿Eres nuevo? &nbsp;
                                        <Box component="span" color="primary" sx={{ color:'#3655a5' }}>
                                            <Link href="/RegistroUsuario">
                                                Crea tu cuenta
                                            </Link>
                                        </Box>
                                    </Typography>
                                </Box>
                                <Box my={2} textAlign="center">
                                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight:'600' }}>
                                        <Link href="/Contra" color="primary" >
                                            <a>
                                            ¿Olvide mi contraseña?
                                            </a>
                                        </Link>
                                    </Typography>
                                </Box>
                            </FormControl>
                        </Box>
                    </Paper>
                </Container> 
                {(alerta.hasOwnProperty('severity'))&&
                    <Alertas setAlerta={setAlerta} alerta={alerta}/>
                } 
            </Layout>  
        </React.Fragment>  
    )
}