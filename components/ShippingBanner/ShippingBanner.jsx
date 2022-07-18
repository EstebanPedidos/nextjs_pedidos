import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const items = [
	{
		label: 'Programa tu entrega',
		description: 'Selecciona día y horario.',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/home19/pp/proe.svg',
	},
	{
		label: 'Entrega Express solo CDMX*',
		description: 'tus pedidos en 3 horas o menos.',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/home19/pp/pe.svg',
	},
	{
		label: 'Paga al recibir',
		description: 'tus pedidos con tarjeta, hasta $10,000 MXN',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/home19/pp/paga-recibe.svg',
	},
];

const ShippingBanner = () => {
	return (
		<Grid spacing={{ xs: 3, md: 5 }} justifyContent='center' container>
			<Grid xs={12} lg={3} item>
				<Typography variant='h5' fontSize={24} fontWeight={700} color='#333'>
					CDMX y Guadalajara
				</Typography>
				<Typography variant='body2'>
					*Consulta restricciones{' '}
					<Link
						underline='none'
						href='/soho/politicas'
						target='_blank'>
						aquí.
					</Link>
				</Typography>
			</Grid>
			{items.map((item) => (
				<Grid xs={12} sm={4} lg={3} key={item.label} item>
					<Box
						display='flex'
						flexDirection={{ sm: 'column', lg: 'row' }}
						alignItems='center'
						gap={4}>
						<Box height={{ sm: 100, lg: 'inherit' }}>
							<img
								width='100'
								data-sizes='auto'
								src={item.img}
								data-src={item.img}
								alt={item.label}
								sizes='86px'
								style={{ padding: '12px' }}
							/>
						</Box>
						<Box>
							<Typography
								variant='body2'
								fontWeight={700}
								color='#333'
								textAlign={{ sm: 'center', lg: 'left' }}
								dangerouslySetInnerHTML={{
									__html: item.label,
								}}
							/>
							<Typography
								variant='body2'
								color='#333'
								textAlign={{ sm: 'center', lg: 'left' }}
								dangerouslySetInnerHTML={{
									__html: item.description,
								}}
							/>
						</Box>
					</Box>
				</Grid>
			))}
		</Grid>
	);
};

export default ShippingBanner;
