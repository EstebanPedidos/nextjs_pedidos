import React from 'react';
// import {
// 	Container,
// 	Box,
// 	Typography,
// 	Table,
// 	TableHead,
// 	TableRow,
// 	TableCell,
// 	TableBody,
// 	TableContainer,
// 	Paper,
// 	Grid,
// } from '@material-ui/core';

import {
	Container,
	Box,
	Typography,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TableContainer,
	Paper,
	Grid,
} from '@mui/material';

import { HeadingPolicies, PoliciesMenu }  from 'components';
import { Layout } from 'layout/Layout';

const rows = [
	{
		range: '$0 a $599',
		price: '$95',
	},
	{
		range: '$600 a $1,000	',
		price: '$55',
	},
	{
		range: '$1,001 a $2,000',
		price: '$35',
	},
	{
		range: 'arriba de $2,000	',
		price: '$25',
	},
];

export default function CondicionesDeEnvio() {
	return (
		<Layout>
			<Container maxWidth='xl'>
				<HeadingPolicies />
				<PoliciesMenu />
				<Container fluid>
					<Box my={2}>
						<Typography
							variant='h5'
							component={'h2'}
							color='primary'
							gutterBottom
						>
							Condiciones de envío
						</Typography>
						<Box marginTop={'0.8rem'}>
							<Typography variant='h6' component='h3'>
								Pago
							</Typography>
							<Typography variant='body1'>
								Si el pedido es pagado después de las 2:00 pm se
								enviará al siguiente día hábil y a partir de la
								fecha de envío se tomará el tiempo de entrega.
							</Typography>
							<br />
							<Typography variant='h6' component='h3'>
								Envío gratis
							</Typography>
							<Typography variant='body1' component='p' >
								Aplica únicamente a los productos seleccionados
								con un peso de hasta 25kg.
							</Typography>
							<br />
							<Typography variant='h6' component='h3'>
								Peso
							</Typography>
							<Typography variant='body1' component='p'>
								En caso de que tu pedido tenga un peso mayor a
								15 kg. el tiempo de entrega aumenta de 5 a 10
								días hábiles. Esto se debe a que los pedidos
								mayores a 15 kg. se envían vía terrestre y no
								aérea.
							</Typography>
							<br />
							<Typography variant='h6' component='h3'>
								Costo
							</Typography>
							<Typography variant='body1' component='p'>
								Si eres cliente Local o Foráneo, habrá un cobro
								de envío como se muestra en la siguiente tabla:
							</Typography>
							<br />
							<Grid container spacing={2}>
								{/* First Column */}
								<Grid item xs={12} lg={6}>
									<Box margin='auto'>
										<TableContainer variant='outlined' component={Paper}>
											<Table>
												<TableHead>
													<TableRow>
														<TableCell>
															<Typography variant='h6' component='h3'>
																Monto del Pedido
															</Typography>
														</TableCell>
														<TableCell align='right'>
															<Typography variant='h6' component='h3'>Costo Mínimo de
																Envío
															</Typography>
														</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{rows.map(
														({ price, range }) => (
															<TableRow
																key={range}>
																<TableCell
																	component='th'
																	scope='row'>
																	{range}
																</TableCell>
																<TableCell align='right'>
																	{price}
																</TableCell>
															</TableRow>
														)
													)}
												</TableBody>
											</Table>
										</TableContainer>
									</Box>
								</Grid>
								{/* Second Column */}
								<Grid item xs={12} lg={6}>
									<Box>
										<Typography variant='h6' component='h3'>
											Importante
										</Typography>
										<Typography variant='body1' component='p' align='justify'>
											Si el pedido es Foráneo y tiene un
											peso mayor a 25kg el costo se deberá
											cotizar el costo con nuestros
											ejecutivos.
										</Typography>
										<br />
										<Typography variant='body1' component='p' align='justify' >
											Los costos de envío incluyen IVA Es
											importante: Si el pedido es Foráneo
											y tiene un peso mayor a 25kg el
											costo se deberá cotizar el costo con
											nuestros ejecutivos. Si es
											seleccionado el Servicio de Envío
											Express con horario pactado para la
											entrega de tu pedido, se cobrarán
											los costos de la tabla +$45 pesos.
										</Typography>
										<br />
										<Typography variant='body1' component='p' align='justify'>
											En caso de que el pedido sea Foráneo
											y compre papel, se hará un cobro de
											costo por caja más los costos de
											tabla.
										</Typography>
									</Box>
								</Grid>
							</Grid>

							<Box>
								<Typography variant='body1' component='p' align='justify'>
									Los costos de envío incluyen IVA
								</Typography>
								<Typography variant='body1' component='p' color='textSecondary' align='justify'>
									*Si tienes alguna duda, consulta con
									nuestros ejecutivos de ventas para que
									puedan asesorarte.
								</Typography>
							</Box>
							<br />
							<Typography variant='h6' component='h3'>
								Empaque
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Es posible que existan pedidos que se entreguen
								partidos; lo cual quiere decir que lleguen en
								paquetes diferentes en tiempos diferentes. Esto
								es debido a que por seguridad y protección del
								producto mismo nosotros empacamos en distintas
								cajas, o bien, salen de distintas bodegas.
							</Typography>
							<br />
						</Box>
					</Box>
				</Container>
			</Container>
		</Layout>
	);
}
