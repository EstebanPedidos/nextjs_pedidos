import { Box, Grid, Container, Typography, Button } from '@material-ui/core';
import React from 'react';
import { COLORS } from '../app/theme';
import { Carousel } from '/components';
import { Layout } from '/layout';
import { useMediaQuery } from '@material-ui/core';

export const Empresas = () => {
	const query = useMediaQuery('(max-width:480px)');
	return (
		<Layout>
			<Box
				style={{
					background:
						'linear-gradient(to top, rgba(140, 164, 255, 0.14901960784313725), rgba(251, 251, 251, 0.3803921568627451))',
				}}
				marginTop='3rem'>
				<Container component={'section'}>
					<Grid container spacing={3}>
						<Grid sm={12} xs={12} md={6} lg={5} xl={5} item>
							<Box
								marginLeft={'5rem'}
								paddingTop='3rem'
								paddingBottom={'2rem'}>
								<Typography
									style={{
										fontSize: '20px',
										fontWeight: '500',
										color: '#333',
									}}
									gutterBottom>
									Conviértete en miembro.
								</Typography>
								<Typography
									style={{
										fontSize: '36px',
										fontWeight: '600',
										lineHeight: '1.1',
									}}
									gutterBottom>
									La solución para las{' '}
									<span
										style={{
											color: COLORS.primary,
										}}>
										empresas.
									</span>
								</Typography>
								<Typography
									style={{
										fontSize: '18px',
									}}
									gutterBottom>
									Te ayudamos a conseguir el espacio de
									trabajo para tu equipo de trabajo. Disfruta
									de los beneficios que traemos para ti al
									registrarte como empresa.
								</Typography>
								<Box marginTop={'1rem'}>
									<Button
										variant='outlined'
										color='primary'
										size='large'>
										Ayuda
									</Button>
								</Box>
							</Box>
						</Grid>
						<Grid sm={12} xs={12} md={6} lg={7} xl={7} item>
							<img
								style={{
									verticalAlign: 'middle',
									width: '100%',
								}}
								src='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/servicios-pedidos-empresa2.webp'
								alt='chica con una laptop hp'
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>
			{/* <Box>
				<Carousel />
			</Box> */}
		</Layout>
	);
};
