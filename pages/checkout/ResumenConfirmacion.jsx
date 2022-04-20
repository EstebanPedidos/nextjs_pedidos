
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
//MUI

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
  }));
export default function ResumeConfirmation({data}){
	const classes   = useStyles();
	const formaP	= {1:'Tarjeta',2:'Al recibir con tarjeta',3:'Transferencia',4:'Dep&oacute;sito',5:'Pago en OXXO',7:'PayPal'}
    return (
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
							Entrega a {data.jsonResumen.resumen.direccion.nombreDireccion}
						</Box>
					</Typography>
					<Typography component="body2" variant="body2">{data.jsonResumen.resumen.direccion.direccion}</Typography>
					{(data.jsonResumen.resumen.direccion.nombreDireccion === "PickUP")&&
					 <Alert severity="info">Te notificaremos por correo cuando tu pedido se encuentre listo en el PickUp Center</Alert>
					}
				</div>
				<Box component="div" pt={2}>
				<Typography component="h2" variant="subtitle1">
						<Box component="span" fontWeight="fontWeightMedium">
							Fecha de entrega: {data.jsonResumen.resumen.envio.fecha}
						</Box>
						<Typography component="span" variant="subtitle1"> con envío {data.jsonResumen.resumen.envio.tipo}</Typography>
				</Typography>
				</Box>
			</Box>
			<Box component="div" pb={2}>
				<Typography component="h3" variant="subtitle1">
					<Box component="span" fontWeight="fontWeightMedium">
						Facturar a RFC: {data.jsonResumen.resumen.facturas.rfc}
					</Box>
				</Typography>
			</Box>
			<Divider light /> 
			<Box component="div" py={2}>
				<Typography component="h3" variant="subtitle1">
					<Box component="span" fontWeight="fontWeightMedium">
						Forma de Pago: {formaP[data.jsonResumen.resumen.formaPago]}
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
										{(data.jsonResumen.nc.tieneNc !== 'false')&&
										<Grid item>
											<Typography variant="subtitle1" >
												Nota de crédito:
											</Typography>
										</Grid>
										}
										{(data.jsonResumen.nc.tieneNc !== 'false')?
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
											{(data.jsonResumen.resumen.costoEnvio === 0 )?
												<span>Gratis</span> 
											:
											<span>${data.jsonResumen.resumen.costoEnvio}</span>
											}
											</Typography>
											
										</Grid>
										{(data.jsonResumen.nc.tieneNc !== 'false')&&
											<Grid item>
												<Typography variant="subtitle1" >
												{data.jsonResumen.nc.montoNc}
												</Typography>
											</Grid>
										}
										<Grid item>
										{(data.jsonResumen.nc.tieneNc !== 'false')?
											<Grid item>
												<Typography variant="subtitle1"  >
													<Box component="span" fontWeight="fontWeightBold">
														{((data.jsonResumen.resumen.subtotal + data.jsonResumen.resumen.costoEnvio) - data.jsonResumen.nc.montoNc)}
													</Box>
												</Typography>
												<Typography variant="subtitle1"  >
													<Box component="span" fontWeight="fontWeightBold">
													{data.jsonResumen.resumen.formaPago}
													{formaP[data.jsonResumen.resumen.formaPago]}
													</Box>
												</Typography>
											</Grid>
												:
											<Grid item>
												<Typography variant="subtitle1"  >
													<Box component="span" fontWeight="fontWeightBold">
													{(data.jsonResumen.resumen.subtotal + data.jsonResumen.resumen.costoEnvio)}	
													</Box>
												</Typography>
												<Typography variant="subtitle1"  >
													<Box component="span" fontWeight="fontWeightBold">
													{formaP[data.jsonResumen.resumen.formaPago]}	
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
				
				
				{(data.jsonResumen.resumen.formaPago = 7 || data.jsonResumen.resumen.formaPago === 1)&&
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
    )
}