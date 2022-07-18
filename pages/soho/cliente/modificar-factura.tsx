import Head from 'next/head';
import React from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Box, Grid } from '@mui/material';
//components
import ButtonModal from '../../../components/modificar-factura/ButtonModal';
import { Layout } from '../../../layout/Layout';

const ModifyInvoice: NextPage = () => {
	return (
		<Layout title='Modificar Factura | Pedidos.com'>
			<Head>
				<meta name="description" content="Ahora podrás generar un cambio en las facturas de tus pedidos. Te compartimos el paso a paso de como hacerlo AQUI."/>
				<link rel="canonical" href="https://pedidos.com/soho/cliente/modificar-factura"/>
			</Head>
			<Container maxWidth='lg'>
				<Box
					sx={{
						my: 4,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Typography variant='h5' component='h1' fontSize={21} gutterBottom>
						Conoce como realizar{' '}
						<span style={{ color: '#eb7f36' }}>un cambio</span> en tu factura
					</Typography>
					<br />
					<Grid container spacing={4}>
						<Grid item xs={12}>
							<ButtonModal />
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Layout>
	);
};

export default ModifyInvoice;
