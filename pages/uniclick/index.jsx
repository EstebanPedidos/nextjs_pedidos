import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Layout } from '/layout/Layout';
import Link from 'components/Link';
import ExpandableCard from 'components/ExpandableCard';

const options = [
	{
		label: 'Crédito',
		description:
			'Solo tienes que seguir 4 pasos y en muy poco tiempo estarás disfrutando del bien solicitado.',
		img: 'https://pedidos.com/myfotos/pedidos-com/Pagina/uniclick/credito-1.png',
		url: '/uniclick/credito',
	},
	{
		label: 'Arrendamiento',
		description:
			'En equipos electrónicos en un plazo de 24 meses o equipo mobiliario a un plazo de hasta 36 meses.',
		img: 'https://pedidos.com/myfotos/pedidos-com/Pagina/uniclick/arrendamiento.png',
		url: '/uniclick/arrendamiento',
	},
];

const Uniclick = () => {
	return (
		<Layout>
			<Box
				pt={12}
				pb={15}
				sx={{
					background: 'linear-gradient(to bottom,#ebeef7,#f3f6ff)',
				}}>
				<Container maxWidth='lg'>
					<Grid spacing={6} container>
						<Grid xs={12} md={6} item>
							<Box>
								<Typography
									textTransform='uppercase'
									color='#8c8c8d'
									letterSpacing={2}
									textAlign={{ xs: 'center', md: 'left' }}
									mb={2}>
									Solución financiera con
								</Typography>

								<Typography
									variant='h1'
									fontSize={32}
									fontWeight={700}
									textAlign={{ xs: 'center', md: 'left' }}
									color='#555'>
									Productos Uniclick
								</Typography>
							</Box>
						</Grid>
						<Grid xs={12} md={6} item>
							<Box
								maxWidth={450}
								mr={{ xs: 'auto', md: 0 }}
								ml={{ xs: 'auto', md: 'auto' }}>
								<Link href='https://uniclick.com.mx/3104'>
									<img
										src='https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/uniclick.svg'
										alt='Uniclick'
										width='100%'
									/>
								</Link>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box pb={15} mt={-12}>
				<Container maxWidth='md'>
					<Grid
						spacing={4}
						alignItems='center'
						justifyContent='center'
						px={8}
						container>
						{options.map((option) => (
							<Grid key={option.label} xs={12} md={6} item>
								<ExpandableCard item={option} />
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default Uniclick;
