//React
import {useState,useEffect} from 'react'
//next js
import { useRouter } from 'next/router';
//hooks
import {useLocalStorage} from "../../../hooks/useLocalStorage";
//MAterial UI
import {Button,Modal,Fade,Grid,Typography,TextField,InputLabel,Select,MenuItem,Backdrop,Box,Divider,IconButton, FormControl
} from '@mui/material';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
//Servicios
import Services from '../../services/Services';


const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	root: {
		flexGrow: 1,
	},
	paper: {
		
		backgroundColor: theme.palette.background.paper,
		borderRadius: '8px',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		margin: theme.spacing(2),
	},
	control: {
		padding: theme.spacing(3),
	},
	bgcontent: {
		backgroundImage:
			'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)',
	},
	boxCardI: {
		height: '330px',
		boxShadow:
			'0px 0px 16px rgb(195 203 214 / 16%), 0px 1px 4px rgb(195 203 214 / 16%)',
	},
	boxContent: { height: '12rem' },
	adressBox: {
		marginTop: theme.spacing(2),
	},
}));

export default function AddDir({setAddOpen,setAlerta,alerta}){
    const classes                                   = useStyles() 
    const ruter                                     = useRouter() 
    const [inputs, setInputs]                       = useState({})
    const [estadoDelegacion, setEstadoDelegacion]   = useState('-')
    const [resultCP, setResultCP]                   = useState([]) 
    const [loader, setloader]                       = useState(false)  
    const [clienteNum,setClienteNum]                = useLocalStorage('Cliente',201221)

    useEffect(()=>{if(clienteNum === 201221){ruter.push('/')}},[])

    const handleChange = (event) => {
		const name = event.target.name;
        if(name === 'cp'){
            setEstadoDelegacion('-')
            setResultCP([])
        }
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
        if(event.target.name === "estadoDelegacion"){
            setEstadoDelegacion(event.target.value);
        }
	}

    function consultarCp() {
        setloader(true)
        Services('POST','/miCuenta/consultaCp?cp='+inputs.cp,{})
        .then( response =>{          
            setResultCP(response.data)
            if(response.data.length  > 0){
                setEstadoDelegacion(response.data[0].estado.replace("MEXICO","MÉXICO").toLowerCase()+'-'+response.data[0].delegacion.toLowerCase())
            }    
            setloader(false)        
        })        
	}

    async function guardarDireccion() {    
        if(clienteNum !== 201221){  
            if(inputs.nombre !== '' && inputs.nombre !== undefined && inputs.nombre !== null){
                if(inputs.address1 !== '' && inputs.address1 !== undefined && inputs.address1 !== null){
                    if(inputs.colonia !== '' && inputs.colonia !== undefined && inputs.colonia !== null){
                        if(inputs.cp !== '' && inputs.cp !== undefined && inputs.cp !== null){
                            if(inputs.phone !== '' && inputs.phone !== undefined && inputs.phone !== null){
                                if(String(inputs.phone).length <=  20){
                                    if(inputs.contact !== '' && inputs.contact !== undefined && inputs.contact !== null){
                                        if(estadoDelegacion !== '-'){
                                            let separador = await estadoDelegacion.split('-')
                                            if(separador.length === 2){
                                                let city     = await separador[0]
                                                let province = await separador[1]
                                                if(city !== '' && city !== undefined && city !== null){
                                                    if(province !== ''  && province !== undefined && province !== null){
                                                        if(inputs.instrEntrega !== '' && inputs.instrEntrega !== undefined && inputs.instrEntrega !== null){
                                                            if(inputs.entreCalle1 !== '' && inputs.entreCalle1 !== undefined && inputs.entreCalle1 !== null){
                                                                if(inputs.entreCalle2 !== '' && inputs.entreCalle2 !== undefined && inputs.entreCalle2 !== null){
                                                                    if(inputs.contact.length >= 5){
                                                                        if(inputs.exterior !== '' && inputs.exterior !== undefined && inputs.exterior !== null){
                                                                            let peticionesJson = await
                                                                            {
                                                                                dirNum:0,
                                                                                clienteNum:clienteNum,
                                                                                nombre:inputs.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                                address1:inputs.address1.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                                address2:"",
                                                                                colonia:inputs.colonia.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                                city:city.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                                province:province.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                                country:'Mexico',
                                                                                postalCode:inputs.cp,
                                                                                phone:inputs.phone,
                                                                                fax:"",
                                                                                contact:inputs.contact.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                                puesto:"",
                                                                                email:"",
                                                                                zonaEnvio:"",
                                                                                estatus:"A",
                                                                                instrEntrega: inputs.instrEntrega.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                                entreCalle1: inputs.entreCalle1.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                                entreCalle2: inputs.entreCalle2.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                                piso:"",
                                                                                interior:(inputs.interior !== '' && inputs.interior !== undefined && inputs.interior !== null)?inputs.interior:'',
                                                                                exterior:inputs.exterior,
                                                                                extension:(inputs.extension !== '' && inputs.extension !== undefined && inputs.extension !== null)?inputs.extension:'',
                                                                                numEnvio:"",
                                                                                clave:"",
                                                                                shipNum:""
                                                                            }
                                                                            Services('POST-NOT', '/miCuenta/agregaDireccion', peticionesJson)
                                                                            .then((response) => {
                                                                                if(response.data.includes('correctamente')){
                                                                                    setAddOpen(false)
                                                                                    setAlerta({severity:'success',mensaje:'Agregada',vertical:'bottom',horizontal:'right',variant:'filled', inputError:'',isAgregada:true})
                                                                                }else{
                                                                                    setAlerta({severity:'error',mensaje:response.data,vertical:'bottom',horizontal:'right',variant:'filled', inputError:''})  
                                                                                }          
                                                                            })
                                                                            .catch((error) => {
                                                                                console.log(error.response);
                                                                            });
                                                                        }else{
                                                                            setAlerta({severity:'error',mensaje:'Ingresa un Numero Exterior',vertical:'bottom',horizontal:'right',variant:'filled', inputError:'exterior'})
                                                                        }                                                                    
                                                                    }else{
                                                                        setAlerta({severity:'error',mensaje:'¿Quién recibe? debe ser mayor a 5 caracteres',vertical:'bottom',horizontal:'right',variant:'filled', inputError:'contact'})
                                                                    }
                                                                }else{
                                                                    setAlerta({severity:'error',mensaje:'Ingresa y Calle',vertical:'bottom',horizontal:'right',variant:'filled',inputError:'entreCalle2'})
                                                                } 
                                                            }else{
                                                                setAlerta({severity:'error',mensaje:'Ingresa Entre Calle',vertical:'bottom',horizontal:'right',variant:'filled',inputError:'entreCalle1'})
                                                            } 
                                                        }else{
                                                            setAlerta({severity:'error',mensaje:'Ingresa Observaciones de entrega',vertical:'bottom',horizontal:'right',variant:'filled',inputError:'instrEntrega'})
                                                        }                                               
                                                    }else{
                                                        setAlerta({severity:'error',mensaje:'Error en Province',vertical:'bottom',horizontal:'right',variant:'filled'})
                                                    }
                                                }else{
                                                    setAlerta({severity:'error',mensaje:'Error en City',vertical:'bottom',horizontal:'right',variant:'filled'})
                                                }   
                                            }else{
                                                setAlerta({severity:'error',mensaje:'',vertical:'bottom',horizontal:'right',variant:'filled'})
                                            }
                                        } else{
                                            setAlerta({severity:'error',mensaje:'Selecciona un Estado|Delegacion',vertical:'bottom',horizontal:'right',variant:'filled'})
                                        }                                               
                                    }else{
                                        setAlerta({severity:'error',mensaje:'Ingresa ¡Quien Recibe?',vertical:'bottom',horizontal:'right',variant:'filled',inputError:'contact'})
                                    }
                                }else{
                                    setAlerta({severity:'error',mensaje:'El Telefono es muy largo',vertical:'bottom',horizontal:'right',variant:'filled',inputError:'phone'})
                                }
                            }else{
                                setAlerta({severity:'error',mensaje:'Ingresa un Telefono',vertical:'bottom',horizontal:'right',variant:'filled',inputError:'phone'})
                            }
                        }else{
                            setAlerta({severity:'error',mensaje:'Ingresa un CP',vertical:'bottom',horizontal:'right',variant:'filled',inputError:'cp'})
                        }
                    }else{
                        setAlerta({severity:'error',mensaje:'Ingresa una Colonia',vertical:'bottom',horizontal:'right',variant:'filled',inputError:'colonia'})
                    }
                }else{
                    setAlerta({severity:'error',mensaje:'Ingresa una Direccion',vertical:'bottom',horizontal:'right',variant:'filled',inputError:'address1'})
                }
            }else{
                setAlerta({severity:'error',mensaje:'Ingresa un Tipo de Direccion',vertical:'bottom',horizontal:'right',variant:'filled',inputError:'nombre'})
            }
        }else{
            ruter.push('/')
        }
	}

    return(
        <>        
        <div>
            <Box component='div' pb={3}>
                <Divider variant="middle" />
            </Box>
            <Box component="div">
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                        <Grid item xs={8} sm={8}>
                            <Typography variant="subtitle1" component="h4" sx={{fontWeight:'500'}}>
                                Añade nueva dirección 
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            
                            <Button disableElevation variant="outlined" fullWidth onClick={()=>{setAddOpen(false)}}>
                                Regresar
                            </Button>
                            
                        </Grid>
                    </Grid>
            </Box>
            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={2}>
                <Grid item xs={12}>
                    <Box component='div' textAlign='left'>
                        <Typography variant='subtitle1' component="p">
                            <Box component='span' fontWeight='fontWeightMedium'>
                                
                            </Box>
                        </Typography>
                        
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        component='subtitle2'
                        gutterBottom>
                        ¿Quién recibe? :
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={(alerta.inputError === 'contact')}
                        fullWidth
                        id='outlined-basic'
                        label='Contacto...'
                        variant='outlined'
                        name='contact'
                        onChange={handleChange}
                        inputProps={{ maxLength: 30 }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        error={(alerta.inputError === 'phone')}
                        fullWidth
                        id='outlined-basic'
                        label='Telefono...'
                        variant='outlined'
                        name='phone'
                        onChange={handleChange}
                        type="number"
                        inputProps={{ maxLength: 20 }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        error={(alerta.inputError === 'extension')}
                        fullWidth
                        id='outlined-basic'
                        label='Ext.'
                        variant='outlined'
                        name='extension'
                        onChange={handleChange}
                        inputProps={{ maxLength: 20 }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box component='div' py={1}>
                        <Typography
                            component='subtitle2'
                            gutterBottom>
                            Tipo de Dirección
                        </Typography>
                    </Box>
                    <TextField
                        error={(alerta.inputError === 'nombre')}
                        fullWidth
                        id='outlined-basic'
                        label='Ej. Oficina, Casa, Torre'
                        variant='outlined'
                        name='nombre'
                        onChange={handleChange}
                        inputProps={{ maxLength: 45 }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        component='subtitle2'
                        gutterBottom>
                        Dirección
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={(alerta.inputError === 'address1')}
                        fullWidth
                        id='outlined-basic'
                        label='Calle'
                        variant='outlined'
                        name='address1'
                        onChange={handleChange}
                        inputProps={{ maxLength: 35 }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        error={(alerta.inputError === 'exterior')}
                        fullWidth
                        id='outlined-basic'
                        label='Num. Exterior'
                        variant='outlined'
                        name='exterior'
                        onChange={handleChange}
                        inputProps={{ maxLength: 5 }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        error={(alerta.inputError === 'interior')}
                        fullWidth
                        id='outlined-basic'
                        label='Núm. Interior'
                        variant='outlined'
                        name='interior' 
                        onChange={handleChange}
                        inputProps={{ maxLength: 10 }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        error={(alerta.inputError === 'colonia')}
                        fullWidth
                        id='outlined-basic'
                        label='Colonia'
                        variant='outlined'
                        name='colonia'
                        onChange={handleChange}
                        inputProps={{ maxLength: 20 }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Grid
                        container
                        direction='row'
                        justifyContent='space-between'
                        alignItems='center'>
                        <Grid item xs={10}>
                            <TextField
                                error={(alerta.inputError === 'cp')}
                                fullWidth
                                id='outlined-basic'
                                label='C.P.'
                                variant='outlined'
                                name='cp'
                                onChange={handleChange}
                                inputProps={{ maxLength: 5 }}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton
                                aria-label='delete'
                                onClick={consultarCp}>
                                <CheckCircleOutlineIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label" >
                        Estado | Delegación
                    </InputLabel>
                    <Select  variant="outlined"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select"
                    value={estadoDelegacion}
                    label="Estado | Delegación"
                    name="estadoDelegacion"
                    onChange={handleChange}
                    onFocus={consultarCp}
                    >
                        <MenuItem value='-'>{(loader)?'Buscando...':'Selecciona'}</MenuItem>
                        {resultCP.map((select) => (
                            <MenuItem key={select.delegacion} value={select.estado.replace("MEXICO","MÉXICO").toLowerCase()+'-'+select.delegacion.toLowerCase()}>{select.estado.replace("MEXICO","MÉXICO")+' - '+select.delegacion}</MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        error={(alerta.inputError === 'entreCalle1')}
                        fullWidth
                        id='outlined-basic'
                        label='Entre calle'
                        variant='outlined'
                        name='entreCalle1'
                        onChange={handleChange}
                        inputProps={{ maxLength: 40 }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        error={(alerta.inputError === 'entreCalle2')}
                        fullWidth
                        id='outlined-basic'
                        label='y calle'
                        variant='outlined'
                        name='entreCalle2'
                        onChange={handleChange}
                        inputProps={{ maxLength: 40 }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box component='div' py={1}>
                        <Typography
                            component='subtitle2'
                            gutterBottom>
                            Observaciones de entrega
                        </Typography>
                    </Box>
                    <TextField
                        error={(alerta.inputError === 'instrEntrega')}
                        id='outlined-basic'
                        fullWidth
                        label='Fachada, colores, etc'
                        variant='outlined'
                        name='instrEntrega'
                        onChange={handleChange}
                        inputProps={{ maxLength: 40 }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box component='div' pt={2}>
                        <Button variant="contained"
                            fullWidth
                            color='primary'
                            size='large'
                            onClick={guardarDireccion}>
                            Guardar
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
        </>
    )
}