import React from 'react';
import { Layout } from '/layout/Layout';
import { Paragraph, HeadingPolicies, PoliciesMenu } from '/components';
import { Box, Container, Typography } from '@material-ui/core';

export default function CajasDePapel() {
	return (
		<Layout>
			<Container maxWidth='xl'>
				<HeadingPolicies>Costos por cajas de Papel</HeadingPolicies>
				<PoliciesMenu />
				<Box marginTop={'2rem'}>
					<Container maxWidth='md'>
						<Typography variant='h6' component='h3' gutterBottom>
							Costo de envío de cajas de papel
						</Typography>
						<Typography
							color='primary'
							variant='subtitle1'
							gutterBottom>
							D.F. y Zona Metropolitana:
						</Typography>
						<Paragraph>
							El costo de envío depende del monto de tu pedido de
							papel. Consultar Costos de Envío.
						</Paragraph>
						<Typography
							color='primary'
							variant='subtitle1'
							gutterBottom>
							Entregas en el resto de la República:
						</Typography>
						<Paragraph>
							Se hará un cobro de costo por caja + los costos de
							tabla. El costo de envío es de $70 + IVA por cada
							caja.
						</Paragraph>
					</Container>
				</Box>
			</Container>
		</Layout>
	);
}
