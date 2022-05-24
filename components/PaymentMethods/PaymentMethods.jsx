import Script from 'next/script';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const PaymentMethods = () => {
	return (
		<Container>
			<Grid container>
				<Grid xs={12} md={5} display={{ xs: 'none', md: 'block' }} item>
					<Box pt={2} height='100%' display='flex' alignItems='end'>
						<img
							src='https://pedidos.com/include/css/responsivo/imagenes/HP/gabs.png'
							alt='Formas de pago'
							width='100%'
						/>
					</Box>
				</Grid>
				<Grid xs={12} md={7} item>
					<Box pt={2} pb={1}>
						<Typography
							variant='h4'
							textAlign='center'
							fontSize={32}
							fontWeight={500}
							color='#3f3f3f'
							gutterBottom>
							Formas de Pago
						</Typography>

						<Box mt={6}>
							<Grid spacing={6} container>
								<Grid xs={6} lg={12} item>
									<Box
										component='a'
										href='#'
										display='flex'
										flexDirection='column'
										justifyContent='center'
										alignItems='center'
										gap={2}
										sx={{
											'&:hover .icon-container, &:focus .icon-container': {
												borderColor: 'transparent',
												backgroundColor: '#3655a5',
												color: '#FFF',
											},
										}}>
										<Box
											className='icon-container'
											width={90}
											height={90}
											display='flex'
											alignItems='center'
											justifyContent='center'
											sx={{
												borderRadius: '50%',
												border: '2px solid #777',
												fontSize: 32,
											}}>
											<i className='fa fa-paypal' aria-hidden='true'></i>
										</Box>
										<Typography textAlign='center'>PayPal</Typography>
									</Box>
								</Grid>
								<Grid xs={6} lg={12} item>
									<Box
										component='a'
										href='#'
										display='flex'
										flexDirection='column'
										justifyContent='center'
										alignItems='center'
										gap={2}
										sx={{
											'&:hover .icon-container, &:focus .icon-container': {
												borderColor: 'transparent',
												backgroundColor: '#3655a5',
												color: '#FFF',
											},
										}}>
										<Box
											className='icon-container'
											width={90}
											height={90}
											display='flex'
											flexDirection='column'
											gap={0.5}
											alignItems='center'
											justifyContent='center'
											sx={{
												borderRadius: '50%',
												border: '2px solid #777',
												fontSize: 24,

												'&:hover, &: focus': {
													borderColor: 'transparent',
													backgroundColor: '#3655a5',
													color: '#FFF',
												},
											}}>
											<i className='fa fa-cc-mastercard' aria-hidden='true' />
											<i className='fa fa-cc-visa' aria-hidden='true' />
										</Box>
										<Typography textAlign='center'>
											Visa o Mastercard
										</Typography>
									</Box>
								</Grid>
							</Grid>

							<Typography
								variant='body2'
								textAlign='center'
								fontWeight={500}
								mt={4}
								color='#333'>
								Consulta los detalles{' '}
								<strong>
									<Link
										underline='none'
										color='#333'
										href='/soho/Politicas/forma-pago.asp'>
										aquí
									</Link>
								</strong>
								.
							</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default PaymentMethods;
