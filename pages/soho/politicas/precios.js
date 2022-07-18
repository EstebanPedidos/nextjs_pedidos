import React from 'react';
import Head from 'next/head';
// mui/material
import { Box, Container, Typography } from '@mui/material';
//components
import { HeadingPolicies, Paragraph, PoliciesMenu } from '/components';
import { Layout } from '/layout/Layout';

export const SohoPrecios = () => {
	return (
		<Layout title='Precios y existencias sobre productos | Pedidos.com'>
			<Head>
				<meta name="description" content="Información sobre los precios y existencias de productos"/>
				<link rel="canonical" href="https://pedidos.com/soho/politicas/precios"/>
			</Head>
			<HeadingPolicies/>
			<PoliciesMenu />
				<Container maxWidth='md'>
					<Box my={2}>
						<Typography
							variant='h5'
							component={'h2'}
							color='primary'
							gutterBottom
						>
							Precios y Existencia
						</Typography>
						<Box pt={2}>
							<Paragraph variant='body1' component='p' align='justify'>
								Los precios <strong>INCLUYEN IVA.</strong>
							</Paragraph>
							<Paragraph variant='body1' component='p' align='justify'>
								Todos los precios están sujetos a cambios debido a que
								los proveedores modifican los precios de un día a otro.
							</Paragraph>
							<Paragraph variant='body1' component='p' align='justify'>
								Todas las existencias de la página son reales. No
								vendemos productos que no tenemos disponibles.
							</Paragraph>
						</Box>
					</Box>
				</Container>
		</Layout>
	);
};

export default SohoPrecios;
