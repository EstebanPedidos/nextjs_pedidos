import React from 'react';
import Head from 'next/head';
import { Layout } from '/layout/Layout';
import { Paragraph, HeadingPolicies, PoliciesMenu } from '/components';
import { Box, Container, Typography } from '@mui/material';

export default function CajasDePapel() {
	return (
		<Layout title='Costos por cajas de Papel | Pedidos.com'>
			<Head>
				<meta name="description" content="CONOCE AQUÍ sobre los costos de envío de cajas de papel en la CDMX, zona metropolitana el resto de la  República"/>
				<link rel="canonical" href="https://pedidos.com/soho/politicas/cajas"/>
			</Head>
			<Container maxWidth='xl'>
				<HeadingPolicies/>
				<PoliciesMenu />
				<Box my={2}>
					<Container maxWidth='md'>
						<Typography
							variant='h5'
							component={'h2'}
							color='primary'
							gutterBottom
						>
							Costos por cajas de Papel
						</Typography>
						<Box pt={2}>
							<Typography variant='h6' component='h3'gutterBottom>
								D.F. y Zona Metropolitana:
							</Typography>
							<Paragraph variant='body1' component='p'>
								El costo de envío depende del monto de tu pedido de
								papel. Consultar Costos de Envío.
							</Paragraph>
							<Typography variant='h6' component='h3'gutterBottom>
								Entregas en el resto de la República:
							</Typography>
							<Paragraph variant='body1' component='p'>
								Se hará un cobro de costo por caja + los costos de
								tabla. El costo de envío es de $70 + IVA por cada
								caja.
							</Paragraph>
						</Box>
					</Container>
				</Box>
			</Container>
		</Layout>
	);
}
