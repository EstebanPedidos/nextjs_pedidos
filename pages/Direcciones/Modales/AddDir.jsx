//React
import {useState} from 'react'
//hooks
import {useLocalStorage} from "../../../hooks/useLocalStorage";
//MAterial UI
import {Button,Modal,Fade,Grid,Typography,TextField,InputLabel,Select,MenuItem,Backdrop,Box,Divider,IconButton
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
//Servicios
import Services from '../../services/Services';
//Componentes
import Alertas from '../../checkout/Alertas';

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
		position: 'absolute',
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

export default function AddDir({setAgregada,agregada}){
    const classes                                   = useStyles()
    const [open, setOpen]                           = useState(false)
    const [inputs, setInputs]                       = useState({})
    const [estadoDelegacion, setEstadoDelegacion]   = useState('-')
    const [resultCP, setResultCP]                   = useState([]) 
    const [loader, setloader]                       = useState(false)  
    const [clienteNum,setClienteNum]                = useLocalStorage('Cliente',0)
    const [alerta,setAlerta]                        = useState({estado:false,severity:'success',vertical:'bottom',horizontal:'right',mensaje:''})

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
        if(inputs.nombre !== '' && inputs.nombre !== undefined && inputs.nombre !== null){
            if(inputs.address1 !== '' && inputs.address1 !== undefined && inputs.address1 !== null){
                if(inputs.colonia !== '' && inputs.colonia !== undefined && inputs.colonia !== null){
                    if(inputs.cp !== '' && inputs.cp !== undefined && inputs.cp !== null){
                        if(inputs.phone !== '' && inputs.phone !== undefined && inputs.phone !== null){
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
                                                                if(inputs.contact.length >= 5){
                                                                
                                                                }else{
                                                                    setAlerta({severity:'error',mensaje:'¿Quién recibe? debe ser mayor a 5 caracteres',vertical:'bottom',horizontal:'right',variant:'filled'})
                                                                }
                                                            }else{
                                                                setAlerta({severity:'error',mensaje:'¿Quién recibe? debe ser mayor a 5 caracteres',vertical:'bottom',horizontal:'right',variant:'filled'})
                                                            }

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
                                                                interior:"",
                                                                exterior:"",
                                                                extension:inputs.extension,
                                                                numEnvio:"",
                                                                clave:"",
                                                                shipNum:""
                                                            }
                                                            Services('POST-NOT', '/miCuenta/agregaDireccion', peticionesJson)
                                                            .then((response) => {
                                                                alert(response.data)
                                                                if(response.data.includes('correctamente')){
                                                                    setOpen(false)
                                                                    setAgregada(agregada+1);
                                                                }          
                                                            })
                                                            .catch((error) => {
                                                                console.log(error.response);
                                                            });
                                                        }else{
                                                            setAlerta({severity:'error',mensaje:'Ingresa y Calle',vertical:'bottom',horizontal:'right',variant:'filled'})
                                                        } 
                                                    }else{
                                                        setAlerta({severity:'error',mensaje:'Ingresa Entre Calle',vertical:'bottom',horizontal:'right',variant:'filled'})
                                                    } 
                                                }else{
                                                    setAlerta({severity:'error',mensaje:'Ingresa Observaciones de entrega',vertical:'bottom',horizontal:'right',variant:'filled'})
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
                                setAlerta({severity:'error',mensaje:'Ingresa ¡Quien Recibe?',vertical:'bottom',horizontal:'right',variant:'filled'})
                            }
                        }else{
                            setAlerta({severity:'error',mensaje:'Ingresa un Telefono',vertical:'bottom',horizontal:'right',variant:'filled'})
                        }
                    }else{
                        setAlerta({severity:'error',mensaje:'Ingresa un CP',vertical:'bottom',horizontal:'right',variant:'filled'})
                    }
                }else{
                    setAlerta({severity:'error',mensaje:'Ingresa una Colonia',vertical:'bottom',horizontal:'right',variant:'filled'})
                }
            }else{
                setAlerta({severity:'error',mensaje:'Ingresa una Direccion',vertical:'bottom',horizontal:'right',variant:'filled'})
            }
        }else{
            setAlerta({severity:'error',mensaje:'Ingresa un Tipo de Direccion',vertical:'bottom',horizontal:'right',variant:'filled'})
        }
	}

    return(
        <>
        <Button onClick={()=>{setOpen(true)}} disableElevation variant="outlined" startIcon={<AddCircleOutlineIcon />} fullWidth>
         Añadir Nueva
        </Button>
        <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            className={classes.modal}
            open={open}
            onClose={()=>{setOpen(false)}}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <Fade in={open}>
                <div className={classes.paper}>
                    <Grid
                        container
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        spacing={2}>
                        <Grid item xs={12}>
                            <Box
                                component='div'
                                textAlign='center'
                                m={1}
                                py={2}>
                                <Typography component='h3' variant='h5'>
                                    <Box
                                        component='span'
                                        fontWeight='fontWeightMedium'>
                                        Agrega Nueva Dirección
                                    </Box>
                                </Typography>
                                <Box component='div' pt={3}>
                                    <Divider />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                component='subtitle2'
                                gutterBottom>
                                ¿Quién recibe? :
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                id='outlined-basic'
                                label='Nombre...'
                                variant='outlined'
                                name='contact'
                                onChange={handleChange}
                                inputProps={{ maxLength: 30 }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                id='outlined-basic'
                                label='Telefono...'
                                variant='outlined'
                                name='phone'
                                onChange={handleChange}
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                id='outlined-basic'
                                label='Ext.'
                                variant='outlined'
                                name='extension'
                                onChange={handleChange}
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
                                fullWidth
                                id='outlined-basic'
                                label='Ej. Oficina, Casa, Torre'
                                variant='outlined'
                                name='nombre'
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                component='subtitle2'
                                gutterBottom>
                                Dirección
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id='outlined-basic'
                                label='Calle'
                                variant='outlined'
                                name='address1'
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id='outlined-basic'
                                label='Colonia'
                                variant='outlined'
                                name='colonia'
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                id='outlined-basic'
                                label='Num. Exterior'
                                variant='outlined'
                                name='exterior'
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                id='outlined-basic'
                                label='Núm. Interior'
                                variant='outlined'
                                name='interior'
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Grid
                                container
                                direction='row'
                                justifyContent='space-between'
                                alignItems='center'>
                                <Grid item xs={10}>
                                    <TextField
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
                            <InputLabel id="demo-simple-select-outlined-label">
                                Estado | Delegación
                            </InputLabel>
                            <Select fullWidth variant="outlined"
                            label="Estado | Delegación"
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={estadoDelegacion}
                            name="estadoDelegacion"
                            onChange={handleChange}
                            onFocus={consultarCp}
                            >
                                <MenuItem value='-'>{(loader)?'Buscando...':'Selecciona'}</MenuItem>
                                {resultCP.map((select) => (
                                    <MenuItem key={select.delegacion} value={select.estado.replace("MEXICO","MÉXICO").toLowerCase()+'-'+select.delegacion.toLowerCase()}>{select.estado.replace("MEXICO","MÉXICO")+' - '+select.delegacion}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id='outlined-basic'
                                label='Entre calle'
                                variant='outlined'
                                name='entreCalle1'
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id='outlined-basic'
                                label='y calle'
                                variant='outlined'
                                name='entreCalle2'
                                onChange={handleChange}
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
                                id='outlined-basic'
                                fullWidth
                                label='Fachada, colores, etc'
                                variant='outlined'
                                name='instrEntrega'
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Box component='div' pt={2}>
                                <Button
                                    fullWidth
                                    color='primary'
                                    size='large'
                                    onClick={guardarDireccion}>
                                    Guardar
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box component='div' pt={2}>
                                <Button
                                    fullWidth
                                    color='primary'
                                    size='large'
                                    onClick={()=>{setOpen(false)}}>
                                    Cerrar
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Fade>            
        </Modal>
        {(alerta.hasOwnProperty('severity'))&&
                <Alertas setAlerta={setAlerta} alerta={alerta}/>
            } 
        </>
    )
}