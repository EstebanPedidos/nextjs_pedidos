import React, {useState} from "react";
import Link from 'next/link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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

    const paperStyle={padding:40, height:'60vh', width:450, margin:"80px auto"}

    const [inputs, setInputs] = useState({});
    const [isLogged, setLogged] = useState(false);
    
    const params = 
            '?email='+inputs.correo+
            '&pass='+inputs.pass+
            '&user_m=0';
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    function refreshPage() {
        window.location.reload(false);
    }

    async function handleSubmit(e) {       
        e.preventDefault();
        console.log("Entro al servicio Registrar Usuario");
        console.log(params);
        let services        = await Services('POST','/registrov2/validaCredencial'+params,{})
        let data            = await services.data
        alert(JSON.stringify(data))
        ruter.push('/Contra')
        /*LoginService.validaCredencial(params)
            .then( response =>{
                console.log(response);
    
                if(response.data.error === 'Usuario o Password Invalido'){
                  localStorage.setItem('Cliente','201221')
                  localStorage.setItem('Token', '')
                  localStorage.setItem('Login', 'NO')
                  localStorage.setItem('Usuario', '0')
                  localStorage.setItem('iniciales', false)
                  localStorage.setItem('iniciales', "")
                  localStorage.setItem('Nombre_corto', "")
                  
    
                  history.push("/Contra")
                }else{
                  localStorage.setItem('Usu_Nomb', response.data.usuario.nombre)
                  localStorage.setItem('Email', response.data.usuario.email)
                  localStorage.setItem('Cliente', response.data.usuario.clienteNum)
                  localStorage.setItem('Usuario', response.data.usuario.usuarioNum)
                  localStorage.setItem('Favoritos', response.data.usuario.favoritos)
                  localStorage.setItem('SesPartidas', response.data.usuario.partidas)
                  localStorage.setItem('Token', response.data.usuario.token)
                  localStorage.setItem('Login', 'Ok')
                  localStorage.setItem('afiliado', response.data.usuario.afiliado)
                  setLogged(true);
                  history.push("/Home")
                  refreshPage();
                }
            }
          )*/
      }
    
    return(
        <React.Fragment>
            <CssBaseline />
            <Grid>
                    <Paper variant="outlined" elevation={0} style={paperStyle}>
                        <Grid align='center' mb={2}>
                            <Typography variant="h1" textAlign="center" mb={8}>Inicia Sesión</Typography>
                            <Typography variant="subtitle1">Hola ¡Que bueno verte!</Typography>   
                        </Grid>
                        <Box my={4}>
                            <form noValidate onSubmit={handleSubmit} className="classes.margin" >
                                <TextField id="outlined-basic" margin="normal" label="Correo" variant="outlined" autoComplete="on" name="correo" onChange={handleChange} fullWidth autoFocus sx={{ p: 2, }} />
                                <TextField id="outlined-basic" margin="normal"  label="Contraseña" variant="outlined" type="password" name="pass" onChange={handleChange} fullWidth />
                                <Box my={2} fontWeight="bold">
                                    <Typography variant="subtitled2"   >
                                        <Link href="/Contra" color="primary" >
                                            <a>
                                            ¿Olvide mi contraseña?
                                            </a>
                                        </Link>
                                    </Typography>
                                </Box>
                                <Box mt={3}>
                                    <Button className={classes.button} type="submit" variant="contained" size="large" color="primary"  onClick={handleSubmit} fullWidth>
                                        Inicia Sesión
                                    </Button>
                                </Box>
                                <Box align="center" pt={4} fontWeight="bold" color="textSecondary">
                                    <Typography variant="subtitled2"  >
                                         ¿Eres nuevo? &nbsp;
                                        <Link href="/RegistroUsuario" color="primary">
                                            <a>
                                             Crea tu cuenta
                                             </a>
                                        </Link>
                                    </Typography>
                                </Box>
                            </form>
                        </Box>
                    </Paper>
            </Grid>   
        </React.Fragment>  
    )
}