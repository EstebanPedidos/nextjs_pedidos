import React, {useEffect,useState} from "react";
import clsx from 'clsx';
//MUI
import {Container, Box, Grid, Paper, Button, Typography, FormControl, Tab,AppBar,InputLabel,
     TextField, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

import makeStyles from '@mui/styles/makeStyles';

//Componentes
import { Layout } from 'layout/Layout';

//Servicios
import Services from '../../services/Services'
import { useRouter } from 'next/router'
import Alertas from '../../checkout/Alertas'


const useStyles = makeStyles((theme) => ({
    modal: { display: 'flex', alignItems: 'center', justifyContent: 'center',},
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
  boxevaluation: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '8px',
      padding: theme.spacing(1),
    },
  }));


export default function Actualizapass(){  


    const classes = useStyles();
    const router = useRouter();
    let email = router.query.email;


    const [inputs, setInputs] = useState({});
    const ruter = useRouter()
    const [alerta,setAlerta] = useState({})
    const [value, setValue] = React.useState();

    const [values, setValues] = React.useState({
        password: '',
        password2: '',
        showPassword: false,
        showPassword2: false,
    });

    // const valores = window.location.search;
    // const urlParams = new URLSearchParams(valores);
    // var email = urlParams.get('email');

    useEffect(() => {

    }, [email]) 

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleChangePass = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log("Passoword2: "+event.target.value)
        console.log("valor: "+values.password2)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    async function handleSubmit(e) {
        Services('POST','/miCuenta/cambioContrasena2?email='+email+'&contrasenaN='+values.password+'&contrasenaN2='+values.password2,{})
            .then( response =>{
                if(response.data > 0){
                    setAlerta({severity:'success',mensaje:'Exito, Contraseña Actualizada',vertical:'bottom',horizontal:'right',variant:'filled'})
                    ruter.push("/Login")
                }else if(response.data === -1){
                    setAlerta({severity:'error',mensaje:'Las contraseñas no coinciden',vertical:'bottom',horizontal:'right',variant:'filled'})
                }else{
                    setAlerta({severity:'error',mensaje:'Verifica los datos, Algo salió mal',vertical:'bottom',horizontal:'right',variant:'filled'})
                }
            }).catch(error => {
                console.log("falló registraMisDatos")
                console.log(error.response)
            });
        
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

    const paperStyle={padding:40, height: 'auto', width:600, maxWidth:'90%', margin:"30px auto"}
    return(
        <Layout>
                <Container maxWidth="sm">
                    <Paper variant="outlined" elevation={0} style={paperStyle}>
                        <Box textAlign='center' my={2}>
                            <Typography variant="h4" component="h1" textAlign="center" sx={{ fontWeight:'600' }}>Elige una nueva contraseña</Typography>
                        </Box>
                        <Box my={4}>
                            <Grid item xs={12}>   
                                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
                                    <InputLabel htmlFor="standard-adornment-password">Nueva Contraseña</InputLabel>
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
                                    <InputLabel htmlFor="standard-adornment-password">Confirmar contraseña</InputLabel>
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
                            <FormControl fullWidth  onSubmit={handleSubmit} >
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