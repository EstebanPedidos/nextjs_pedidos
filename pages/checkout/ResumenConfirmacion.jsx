import {useState,useEffect} from 'react'
import {Box,Grid,Alert,Paper,Divider,Typography} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
//MUI

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
}));
export default function ResumeConfirmation({data}){
	const classes   = useStyles();	
	const [dataT,setDataT] = useState({})

    useEffect(()=>{
        setDataT(data) 
    },[])

	function FormaPago(formaPago){
		switch (formaPago) {
			case 1:
				return 'Tarjeta'
			case 2:
				return 'Al recibir con tarjeta'
			case 3:
				return 'Transferencia'
			case 4:
				return 'Deposito'
			case 5:
				return 'Pago en OXXO'
			case 7:
				return 'PayPal'
			default:
				return 'Sin definir';
		  }
	}

    return (
		<>
        {(dataT.hasOwnProperty('jsonResumen'))&&
        <div>
		<Paper variant="outlined">
			<Box component="div" m={1} p={1}>
			<Box component="div">
                <div className={classes.root}>
                    <Grid container  alignItems="center" spacing={1}>
                        <Grid item xs={12}>
                            <Box textAlign="center" py={2}>  
                                <Typography component="h2" variant="h6">Resumen</Typography>
                            </Box>  
                        </Grid>
                    </Grid>
                </div>              
            </Box>
			<Divider light middle />
			<Box  py={2}>
				<div>
					<Typography component="h2" variant="subtitle1">
						<Box component="span" fontWeight="fontWeightMedium">
							Entrega a {dataT.jsonResumen.resumen.direccion.nombreDireccion}
						</Box>
					</Typography>
					<Typography component="body2" variant="body2">{dataT.jsonResumen.resumen.direccion.direccion}</Typography>
					{(dataT.jsonResumen.resumen.direccion.nombreDireccion === "PickUP")&&
					 <Alert severity="info">Te notificaremos por correo cuando tu pedido se encuentre listo en el PickUp Center</Alert>
					}
				</div>
				<Box component="div" pt={2}>
				<Typography component="h2" variant="subtitle1">
						<Box component="span" fontWeight="fontWeightMedium">
							Fecha de entrega: {dataT.jsonResumen.resumen.envio.fecha}
						</Box>
						<Typography component="span" variant="subtitle1"> con envío {dataT.jsonResumen.resumen.envio.tipo}</Typography>
				</Typography>
				</Box>
			</Box>
			<Box component="div" pb={2}>
				<Typography component="h3" variant="subtitle1">
					<Box component="span" fontWeight="fontWeightMedium">
						Facturar a RFC: {dataT.jsonResumen.resumen.facturas.rfc}
					</Box>
				</Typography>
			</Box>
			<Divider light /> 
			<Box component="div" py={2}>
				<Typography component="h3" variant="subtitle1">
					<Box component="span" fontWeight="fontWeightMedium">
						Forma de Pago: {FormaPago(parseInt(dataT.jsonResumen.resumen.formaPago))}
					</Box>
				</Typography>
			</Box>
			<Box component="div"  pt={1}>
				<Divider light /> 
					<Box component="div" className={classes.root} py={3}>
						<Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
							<Grid item xs={4}>
								<Box textAlign="left">  
									<Grid container direction="column" justifyContent="center" spacing={1}>
										<Grid item>
											<Typography variant="subtitle1" >
												Envío
											</Typography>
										</Grid>
										{(dataT.jsonResumen.nc.tieneNc !== 'false')&&
										<Grid item>
											<Typography variant="subtitle1" >
												Nota de crédito:
											</Typography>
										</Grid>
										}
										{(dataT.jsonResumen.nc.tieneNc !== 'false')?
											<Grid item>
												<Typography variant="subtitle1" >
													Total:
												</Typography>
												<Typography variant="subtitle1" >
													Forma de pago:
												</Typography>
											</Grid>
											:
											<Grid item>
												<Typography variant="subtitle1" >
													Total:
												</Typography>
												<Typography variant="subtitle1" >
													Forma de pago:
												</Typography>
											</Grid>
										}
									</Grid>
								</Box>
							</Grid>
							<Grid item xs={8}>
								<Box textAlign="right"> 
									<Grid container direction="column" justifyContent="center" spacing={1}>
										
										<Grid item>
											<Typography variant="body2">
											{(dataT.jsonResumen.resumen.costoEnvio === 0 )?
												<span>Gratis</span> 
											:
											<span>${dataT.jsonResumen.resumen.costoEnvio}</span>
											}
											</Typography>
											
										</Grid>
										{(dataT.jsonResumen.nc.tieneNc !== 'false')&&
											<Grid item>
												<Typography variant="subtitle1" >
												{dataT.jsonResumen.nc.montoNc}
												</Typography>
											</Grid>
										}
										<Grid item>
										{(dataT.jsonResumen.nc.tieneNc !== 'false')?
											<Grid item>
												<Typography variant="subtitle1"  >
													<Box component="span" fontWeight="fontWeightBold">
														{((dataT.jsonResumen.resumen.subtotal + dataT.jsonResumen.resumen.costoEnvio)-dataT.jsonResumen.nc.montoNc)}
													</Box>
												</Typography>
												<Typography variant="subtitle1"  >
													<Box component="span" fontWeight="fontWeightBold">
														{FormaPago(parseInt(dataT.jsonResumen.resumen.formaPago))}
													</Box>
												</Typography>
											</Grid>
												:
											<Grid item>
												<Typography variant="subtitle1"  >
													<Box component="span" fontWeight="fontWeightBold">
													{(dataT.jsonResumen.resumen.subtotal + dataT.jsonResumen.resumen.costoEnvio)}	
													</Box>
												</Typography>
												<Typography variant="subtitle1"  >
													<Box component="span" fontWeight="fontWeightBold">
														{FormaPago(parseInt(dataT.jsonResumen.resumen.formaPago))}
													</Box> 
												</Typography>
											</Grid>
										}
										
										</Grid>
										
									</Grid>
								</Box>
							</Grid>
							
						</Grid>
					</Box>
				<Divider light />
			</Box> 
				
				
				{(dataT.jsonResumen.resumen.formaPago === 7 || dataT.jsonResumen.resumen.formaPago === 1)&&
				<Box component="div" pt={4} pb={2} mx="auto">
					<Typography component="h4" variant="subtitle1">
					<Box component="span" fontWeight="fontWeightMedium" textAlign="center"  justifyContent="center">
						Folio de transacción: <br/>-------------
					</Box>
					</Typography>
					<Typography component="h5" variant="caption"> Guarda tu núm de transacción para cualquier aclaración.</Typography>
					
				</Box>
				} 
				</Box>
				</Paper>
            </div> 
		}
		</>
    )
}