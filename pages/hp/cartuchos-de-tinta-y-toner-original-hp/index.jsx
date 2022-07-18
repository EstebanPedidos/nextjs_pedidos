import Head from 'next/head';
import { Box, Container, Divider } from '@mui/material';
//components
import { Layout } from 'layout/Layout';
import HPSearchScript from 'components/HPSearchScript';

const TintaTonerHP = () => {
	return (
		<Layout title='Cartuchos originales HP | Pedidos.com'>
			<Head>
				<meta name="description" content="Encuentra tu tinta & tóner original HP en Pedidos.com y paga a Meses sin Intereses, 18 MSI con tarjetas participantes y hasta 24 MSI con Citibanamex. Contamos con entregas EXPRESS CDMX."/>
				<link rel="canonical" href="https://pedidos.com/hp/cartuchos-de-tinta-y-toner-original-hp"/>
			</Head>
			<Box pt={8} position='relative'>
				<Box
					bgcolor='#f6f7f9'
					position='absolute'
					top='0'
					left='0'
					right='0'
					bottom='6rem'
					zIndex={-1}
				/>
				<Box width={{ xs: '95%', lg: '50%' }} mx='auto'>
					<img
						src='https://pedidos.com/myfotos/pedidos-com/pagina/hp/toner-hp/HP_Q421.webp'
						alt='Toner original HP'
						width='100%'
						style={{
							boxShadow: '0 10px 20px rgb(0 0 0 / 20%)',
							borderRadius: '.5rem',
							margin: 'auto',
							display: 'block',
						}}
					/>
				</Box>
			</Box>

			<Box py={5}>
				<Container maxWidth='md'>
					<HPSearchScript />
				</Container>
			</Box>

			<Divider
				variant='middle'
				sx={{ borderColor: 'rgba(0, 0, 0, 0.075)', borderBottomWidth: '2px' }}
			/>
		</Layout>
	);
};

export default TintaTonerHP;
