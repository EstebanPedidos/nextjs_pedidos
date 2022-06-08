import {useState} from 'react'
//next js
import { useRouter } from 'next/router';
//Material UI
import {Box, Grid, Typography, 
    Button, Select, TextField, Divider,  MenuItem, IconButton,
    InputLabel} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined'
//hooks
import {useLocalStorage} from "../../../hooks/useLocalStorage";
//Servicios
import Services from '../../services/Services'


export default function AddRFC({setAddOpen,setAlerta,alerta}){
    const ruter                                     = useRouter() 
    const [inputs, setInputs]                       = useState({cfdi:'-',metodoPago:'-'})
    const [statusRFC, setStatusRFC]                 = useState(false) 
    const [cfdiSelect, setCfdiSelect]               = useState([])
    const [estadoDelegacion, setEstadoDelegacion]   = useState('-')
    const [resultCP, setResultCP]                   = useState([]) 
    const [clienteNum,setClienteNum]                = useLocalStorage('Cliente',201221)
    

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if(name === 'cp'){
            setEstadoDelegacion('-')
            setResultCP([])
        }        
        if(name === 'rfc'){
            value = value.toUpperCase()
            setStatusRFC(false)
        }
        setInputs(values => ({...values, [name]: value}))
        if(name === "estadoDelegacion"){
            setEstadoDelegacion(event.target.value);
        }
    }  

    async function validarRFC(){
        let rfc = await inputs.rfc
        let validacionExpresion = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
        if(rfc === null || rfc === '' || rfc === undefined){
            setAlerta({severity:'error',mensaje:'Ingresa un RFC',vertical:'bottom',horizontal:'right',inputError:'rfc'})
        }else{
            if(rfc.match(validacionExpresion)){
                let tipoPersona  = await (rfc === 13)?'fisica':'moral';
                Services('POST','/miCuenta/obtieneCfdi?tipoPersona='+tipoPersona,{})
                .then( response =>{  
                    if(response.data.length > 0){
                        setCfdiSelect(response.data)        
                        setStatusRFC(true); 
                    } else{
                        setAlerta({severity:'error',mensaje:'Error al obtener CFDI',vertical:'bottom',horizontal:'right',inputError:'rfc'})
                    }                        
                })                  
            }else{
                setAlerta({severity:'error',mensaje:'La etructura del RFC es incorrecta',vertical:'bottom',horizontal:'right',inputError:'rfc'})
            }
        }     
    }
    

    async function addRFC(){
        if(clienteNum !== 201221){ 
            if(inputs.rfc !== '' && inputs.rfc !== undefined && inputs.rfc !== null){
                if(inputs.cfdi !== '-' && inputs.cfdi !== undefined && inputs.cfdi !== null){
                    if(inputs.razonSocial !== '' && inputs.razonSocial !== undefined && inputs.razonSocial !== null){
                        if(inputs.telefono !== '' && inputs.telefono !== undefined && inputs.telefono !== null){
                            if(inputs.contacto !== '' && inputs.contacto !== undefined && inputs.contacto !== null){
                                if(inputs.contacto !== '' && inputs.contacto !== undefined && inputs.contacto !== null){
                                    if(inputs.direccion !== '' && inputs.direccion !== undefined && inputs.direccion !== null){
                                        if(inputs.cp !== '' && inputs.cp !== undefined && inputs.cp !== null){
                                            if(inputs.colonia !== '' && inputs.colonia !== undefined && inputs.colonia !== null){                                                
                                                if(inputs.metodoPago !== '-' && inputs.metodoPago !== undefined && inputs.metodoPago !== null){
                                                    if(estadoDelegacion !== '-'){
                                                        let separador = await estadoDelegacion.split('-')
                                                        if(separador.length === 2){
                                                            let city     = await separador[0]
                                                            let province = await separador[1]
                                                            if(city !== '' && city !== undefined && city !== null  && !city.includes('no encontrado')){
                                                                if(province !== ''  && province !== undefined && province !== null && !province.includes('no encontrado')){
                                                                    Services('POST-NOT','/miCuenta/guardaDatoFactNuevo',{
                                                                        clienteNum:parseInt(clienteNum),
                                                                        clienteRfc:inputs.rfc.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                        usoCfdi: inputs.cfdi,
                                                                        razonSocial:inputs.razonSocial.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                        telefono:inputs.telefono,
                                                                        contact:inputs.contacto.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                        direccion:inputs.direccion.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                        cp:inputs.cp,
                                                                        colonia:inputs.colonia.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                        estado:city.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                        delegacion:province.normalize('NFD').replace(/[\u0300-\u036f]/g,""),
                                                                        mpago:parseInt(inputs.metodoPago)
                                                                    })
                                                                    .then( response =>{  
                                                                        if(response.data.includes('correcto')){
                                                                            setAddOpen(false)
                                                                        }else{
                                                                            setAlerta({severity:'error',mensaje:'Error al querer agregar RFC',vertical:'bottom',horizontal:'right'})
                                                                        }                                                                       
                                                                    }) 
                                                                }else{
                                                                    setAlerta({severity:'error',mensaje:'Selecciona Estado | Delegación',vertical:'bottom',horizontal:'right',inputError:'estadoDelegacion'})
                                                                }
                                                            }else{
                                                                setAlerta({severity:'error',mensaje:'Selecciona Estado | Delegación',vertical:'bottom',horizontal:'right',inputError:'estadoDelegacion'})
                                                            }
                                                        }else{
                                                            setAlerta({severity:'error',mensaje:'Error en Estado | Delegación',vertical:'bottom',horizontal:'right',inputError:'estadoDelegacion'})
                                                        }
                                                    }else{
                                                        setAlerta({severity:'error',mensaje:'Ingresa Estado | Delegación',vertical:'bottom',horizontal:'right',inputError:'estadoDelegacion'})
                                                    }
                                                    
                                                }else{
                                                    setAlerta({severity:'error',mensaje:'Ingresa un Metodo de Pago',vertical:'bottom',horizontal:'right',inputError:'metodoPago'})
                                                }
                                            }else{
                                                setAlerta({severity:'error',mensaje:'Ingresa un Colonia',vertical:'bottom',horizontal:'right',inputError:'colonia'})
                                            }
                                        }else{
                                            setAlerta({severity:'error',mensaje:'Ingresa un CP',vertical:'bottom',horizontal:'right',inputError:'cp'})
                                        }
                                    }else{
                                        setAlerta({severity:'error',mensaje:'Ingresa un Direccion',vertical:'bottom',horizontal:'right',inputError:'direccion'})
                                    }
                                }else{
                                    setAlerta({severity:'error',mensaje:'Ingresa un Contacto',vertical:'bottom',horizontal:'right',inputError:'contacto'})
                                }
                            }else{
                                setAlerta({severity:'error',mensaje:'Ingresa un Contacto',vertical:'bottom',horizontal:'right',inputError:'contacto'})
                            }
                        }else{
                            setAlerta({severity:'error',mensaje:'Ingresa un Telefono',vertical:'bottom',horizontal:'right',inputError:'telefono'})
                        }
                    }else{
                        setAlerta({severity:'error',mensaje:'Ingresa una Razon Social',vertical:'bottom',horizontal:'right',inputError:'razonSocial'})
                    }
                }else{
                    setAlerta({severity:'error',mensaje:'Ingresa un uso de CFDI',vertical:'bottom',horizontal:'right',inputError:'cfdi'})
                }
            }else{
                setAlerta({severity:'error',mensaje:'Ingresa un RFC',vertical:'bottom',horizontal:'right',inputError:'rfc'})
            }            
        }else{
            ruter.push('/')
        }   
    }

    function consultarCp() {
        if(inputs.rfc !== '' && inputs.rfc !== undefined && inputs.rfc !== null){
            Services('POST','/miCuenta/consultaCp?cp='+inputs.cp,{})
            .then( response =>{          
                setResultCP(response.data)
                if(response.data.length  > 0){
                    setEstadoDelegacion(response.data[0].estado.replace("MEXICO","MÉXICO").toLowerCase()+'-'+response.data[0].delegacion.toLowerCase())
                }       
            }) 
        }else{
            setAlerta({severity:'error',mensaje:'Ingresa un CP',vertical:'bottom',horizontal:'right',inputError:'cp'})
        }                
	}

    return (
       <div>
            <Grid container spacing={2}>
                <Box component="div" textAlign="center" m={1} py={2}>
                    <Typography component="h3" variant="h5">
                        <Box component="span" fontWeight="fontWeightMedium">
                            Ingresa Datos de Factura
                        </Box>
                        <Button disableElevation variant="outlined" fullWidth onClick={()=>{setAddOpen(false)}}>
                                Regresar
                            </Button>
                    </Typography>
                    <Box component="div" py={1}>
                        <Divider/>
                    </Box>
                        <Typography component="subtitle1"  gutterBottom>Proporcionanos la siguiente información</Typography>                
                </Box>
                <Grid item xs={12}>
                    <TextField 
                        error={((alerta)?(alerta.hasOwnProperty('inputError'))?(alerta.inputError === 'rfc'):false:false)}
                        id="outlined-basic" 
                        label="RFC" 
                        variant="outlined" 
                        name="rfc"
                        placeholder="Ingresa un un RFC" 
                        onChange={handleChange}
                        inputProps={{ maxLength: 20 }}
                        value={(inputs)?(inputs.hasOwnProperty('rfc'))?inputs.rfc:'':''}/>
                    <Button onClick={validarRFC}>
                        <ArrowDropDownCircleOutlinedIcon/>
                    </Button>
                    {(statusRFC)&&
                    <Box component="div" pt={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <InputLabel required id="demo-simple-select-outlined-label">
                                    Uso de CDFI
                                </InputLabel>
                                <Select fullWidth variant="outlined"
                                error={((alerta)?(alerta.hasOwnProperty('inputError'))?(alerta.inputError === 'cfdi'):false:false)}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={inputs.cfdi}
                                name="cfdi"
                                onChange={handleChange}
                                label="Uso de CDFI"
                                >
                                    <MenuItem  value={'-'}>Selecciona</MenuItem>
                                    {cfdiSelect.map((select) => (
                                        <MenuItem key={select.idUsu} value={select.idUsu}>{select.descripcion}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth
                                    error={((alerta)?(alerta.hasOwnProperty('inputError'))?(alerta.inputError === 'razonSocial'):false:false)}
                                    id="filled-textarea"
                                    label="Razón Social" 
                                    placeholder="Ingresa tu razón social"
                                    multiline
                                    variant="outlined"
                                    name="razonSocial" 
                                    onChange={handleChange}
                                    inputProps={{ maxLength: 100 }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    error={((alerta)?(alerta.hasOwnProperty('inputError'))?(alerta.inputError === 'telefono'):false:false)}
                                    id="filled-textarea"
                                    label="Teléfono" 
                                    placeholder="Ingresa un teléfono"
                                    multiline
                                    variant="outlined"
                                    name="telefono" 
                                    onChange={handleChange}
                                    type="number"
                                    inputProps={{ maxLength: 20 }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    error={((alerta)?(alerta.hasOwnProperty('inputError'))?(alerta.inputError === 'contacto'):false:false)}
                                    id="filled-textarea"
                                    label="Contacto" 
                                    placeholder="Ingresa un nombre"
                                    multiline
                                    variant="outlined"
                                    name="contacto" 
                                    onChange={handleChange}
                                    inputProps={{ maxLength: 30 }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    error={((alerta)?(alerta.hasOwnProperty('inputError'))?(alerta.inputError === 'direccion'):false:false)}
                                    id="filled-textarea"
                                    label="Dirección" 
                                    placeholder="Ingresa la calle y número"
                                    multiline
                                    variant="outlined"
                                    name="direccion" 
                                    onChange={handleChange}
                                    inputProps={{ maxLength: 60 }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Box display="flex" justifyContent="flex-start" m={1} p={1} >
                                    <TextField fullWidth
                                        error={((alerta)?(alerta.hasOwnProperty('inputError'))?(alerta.inputError === 'cp'):false:false)}
                                        id="filled-textarea"
                                        label="Código Postal" 
                                        placeholder="Ingresa un C.P."
                                        multiline
                                        variant="outlined"
                                        name="cp" 
                                        onChange={handleChange}
                                        inputProps={{ maxLength: 5 }}
                                    />
                                    <IconButton color="primary" aria-label="add CP" onClick={consultarCp}>
                                        <CheckCircleOutlineIcon/>
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    error={((alerta)?(alerta.hasOwnProperty('inputError'))?(alerta.inputError === 'colonia'):false:false)}
                                    id="filled-textarea"
                                    label="Colonia" 
                                    placeholder="Ingresa una colonia"
                                    multiline
                                    variant="outlined"
                                    name="colonia" 
                                    onChange={handleChange}
                                    inputProps={{ maxLength: 60 }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Estado | Delegación
                                </InputLabel>
                                <Select fullWidth variant="outlined"
                                error={((alerta)?(alerta.hasOwnProperty('inputError'))?(alerta.inputError === 'estadoDelegacion'):false:false)}
                                label="Estado | Delegación"
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={estadoDelegacion}
                                name="estadoDelegacion"
                                onChange={handleChange}
                                onFocus={consultarCp}
                                >
                                    <MenuItem value="-">Selecciona</MenuItem>
                                    {resultCP.map((select) => (
                                        <MenuItem key={select.delegacion} value={select.estado.replace("MEXICO","MÉXICO").toLowerCase()+'-'+select.delegacion.toLowerCase()}>{select.estado.replace("MEXICO","MÉXICO")+' - '+select.delegacion}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Método de Pago (requerido)
                                </InputLabel>
                                <Select fullWidth variant='outlined'
                                error={((alerta)?(alerta.hasOwnProperty('inputError'))?(alerta.inputError === 'metodoPago'):false:false)}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={inputs.metodoPago}
                                name="metodoPago"
                                onChange={handleChange}
                                label="Selecciona"
                                >
                                        <MenuItem value="-">Selecciona</MenuItem>
                                        <MenuItem value="99">NO IDENTIFICADO</MenuItem>
                                        <MenuItem value="1">EFECTIVO</MenuItem>
                                        <MenuItem value="2">CHEQUE NOMINATIVO </MenuItem>
                                        <MenuItem value="3">TRANSFERENCIA ELECTRONICA DE FONDOS</MenuItem>
                                        <MenuItem value="4">TARJETA DE CREDITO</MenuItem>
                                        <MenuItem value="28">TARJETA DE DEBITO</MenuItem>
                                        <MenuItem value="29">TARJETA DE SERVICIOS</MenuItem>
                                        <MenuItem value="99">PAYPAL</MenuItem>
                                        <MenuItem value="5">MONEDERO ELECTRONICO</MenuItem>
                                        <MenuItem value="6">DINERO ELECTRONICO</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" onClick={addRFC}>Guardar</Button>
                            </Grid>
                        </Grid>
                    </Box>
                    }
                </Grid>
            </Grid>
        </div>
    )
}