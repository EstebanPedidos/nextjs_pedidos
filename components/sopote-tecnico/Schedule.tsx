import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Schedule = () => {
	return (
		<Box bgcolor='#f6f7f9'>
			<Container
				sx={{
					textAlign: 'center',
					p: '3.25rem 0px 2.5rem 0px',
				}}>
				<Typography variant='h6' component={'h3'} fontSize={24} gutterBottom>
					Horario de atención
				</Typography>

				<Typography
					component='p'
					color='#555'
					fontWeight={500}
					fontSize={15}
					gutterBottom>
					Lunes a Viernes en un horario de 9:00 a 18:30, días laborales.
				</Typography>

				<Typography fontSize={13} color='#555'>
					Recuerda que es importante respetar los horarios de la cita programada
					con nuestro equipo técnico para el soporte necesario para ti y tu
					equipo.
				</Typography>

				<Box display='flex' flexDirection='column' gap={2} py={2.5}>
					<Box>
						<Button
							sx={{
								borderWidth: '2px',
								color: '#333',
								borderColor: '#333',
								px: 5,
								'&:hover': {
									borderWidth: '2px',
									borderColor: '#333',
								},
							}}
							variant='outlined'
							target='_blank'
							size='large'
							href='https://api.whatsapp.com/send?phone=5215634076339&text=Pedidos.com%20necesito%20ayuda'>
							<WhatsAppIcon /> &nbsp; WhatsApp
						</Button>
					</Box>

					<Box>
						<Button
							sx={{
								borderWidth: '2px',
								color: '#3655a5',
								borderColor: '#3655a5',
								backgroundColor: '#e4e8f3',
								px: 5,
								'&:hover': {
									borderWidth: '2px',
									backgroundColor: '#dee5fb',
								},
							}}
							target='_blank'
							href='https://calendly.com/pedidoscom/60min?back=1&month=2021-09'
							variant='outlined'
							size='large'>
							Agendar cita
						</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Schedule;
