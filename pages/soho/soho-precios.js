import React from 'react';
import { Box, Container } from '@material-ui/core';
import { HeadingPolicies, Paragraph, PoliciesMenu } from '../../components';
import { Layout } from '../../layout';

export const SohoPrecios = () => {
	return (
		<Layout>
			<HeadingPolicies>
				Precios y existencia sobre productos
			</HeadingPolicies>
			<PoliciesMenu />
			<Box marginTop='2rem'>
				<Container maxWidth='md'>
					<Paragraph>
						Los precios <strong>INCLUYEN IVA.</strong>
					</Paragraph>
					<Paragraph>
						Todos los precios están sujetos a cambios debido a que
						los proveedores modifican los precios de un día a otro.
					</Paragraph>
					<Paragraph>
						Todas las existencias de la página son reales. No
						vendemos productos que no tenemos disponibles.
					</Paragraph>
				</Container>
			</Box>
		</Layout>
	);
};
