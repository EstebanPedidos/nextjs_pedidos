import React from 'react';

// import { Box, Container } from '@material-ui/core';
// mui/material
import { Box, Container, Typography } from '@mui/material';

import { HeadingPolicies, Paragraph, PoliciesMenu } from '/components';
import { Layout } from '/layout/Layout';

export const SohoPrecios = () => {
	return (
		<Layout>
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
