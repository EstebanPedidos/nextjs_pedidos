import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const MSIBanner = (props) => {
	const { shadow } = props;
	return (
		<Box
			sx={{
				backgroundImage: 'linear-gradient(to bottom,#fafafb,#f6f7f9)',
				boxShadow: shadow ? '0 8px 16px 0 rgb(51 51 51 / 8%)' : null,
			}}
			pl={4}>
			<Grid
				direction='row'
				justifyContent='space-between'
				alignItems='center'
				container>
				<Grid xs={0} md={1} item />
				<Grid xs={12} md={7} item>
					<Box>
						<Typography
							variant='h5'
							fontSize={24}
							fontWeight={700}
							color='#333'
							gutterBottom>
							Paga a meses sin intereses
						</Typography>
						<Typography variant='body2' color='#333'>
							Consulta todos los requisitos para los MSI{' '}
							<Link underline='none' href='#'>
								aquí
							</Link>
						</Typography>
					</Box>
				</Grid>

				<Grid xs={12} md={4} item>
					<Box display='flex' gap={1} sx={{ transform: 'translateY(3rem)' }}>
						<Box>
							<img
								src='https://pedidos.com/myfotos/pedidos-com/pagina/busquedas/msi/18msi.webp'
								data-src='https://pedidos.com/myfotos/pedidos-com/pagina/busquedas/msi/18msi.webp'
								alt='18 MSI, Meses sin intereses, tarjetas de crédito, PayPal'
							/>
						</Box>
						<Box>
							<img
								src='https://pedidos.com/myfotos/pedidos-com/pagina/busquedas/msi/24msi.webp'
								data-src='https://pedidos.com/myfotos/pedidos-com/pagina/busquedas/msi/24msi.webp'
								alt='24 MSI, Meses sin intereses, tarjetas de crédito, Citibanamex, PayPal'
							/>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default MSIBanner;
