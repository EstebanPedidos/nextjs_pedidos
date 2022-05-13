import React from 'react';
import type {NextPage} from 'next';
import {Container, Typography, Box, Grid} from '@mui/material';

import ButtonModal from '../../../components/modificar-factura/ButtonModal';
import {Layout} from '../../../layout/Layout';

const ModifyInvoice: NextPage = () => {
	return (
		<Layout>
			<Container maxWidth='lg'>
				<Box
					sx={{
						my: 4,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Typography variant='h5' component='h1' gutterBottom>
						Conoce como realizar{' '}
						<span style={{color: 'orange'}}>un cambio</span> en tu factura
					</Typography>
					<br />
					<Grid container spacing={4}>
						<Grid item xs={12}>
							<ButtonModal></ButtonModal>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Layout>
	);
};

export default ModifyInvoice;
