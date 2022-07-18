import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export interface IContainerProps {
	children: JSX.Element;
}

export const Schedule = () => {
	return (
		<Box sx={{ borderTop: '2px solid rgba(0, 0, 0, 0.05)' }}>
			<Grid spacing={2} container>
				<Grid xs={12} md={6} item>
					<Box
						component='iframe'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5378320116656!2d-99.19765348509333!3d19.432364986884462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202022793a35b%3A0xcf4931efcb3e7df3!2sAlejandro%20Dumas%20135%2C%20Polanco%2C%20Polanco%20IV%20Secc%2C%20Miguel%20Hidalgo%2C%2011550%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1645141224178!5m2!1ses-419!2smx'
						style={{ border: 0 }}
						allowFullScreen
						loading='lazy'
						width='100%'
						height='420px'
					/>
				</Grid>

				<Grid xs={12} md={6} item>
					<Box
						display='flex'
						flexDirection='column'
						alignItems='center'
						justifyContent='center'
						gap={1.5}
						px={5}
						py={5}
						height='100%'>
						<Typography
							variant='h4'
							component='h4'
							color='#555'
							fontSize={24}
							fontWeight={500}
							textAlign='center'>
							PickUp Center: Horario de atención
						</Typography>
						<Typography
							color='#555'
							fontSize={15}
							fontWeight={500}
							textAlign='center'>
							Lunes a Sábado en un horario de 10:00 a 18:30, excepto días
							feriados.
						</Typography>
						<Typography color='#555' fontSize={13} textAlign='center'>
							¡Regálanos tu opinión cuando nos visites!
						</Typography>

						<Button
							sx={{
								borderWidth: '2px',
								color: '#3655a5',
								borderColor: '#3655a5',
								backgroundColor: '#e4e8f3',
								px: 5,
								my: 2,

								'&:hover': {
									borderWidth: '2px',
									backgroundColor: '#dee5fb',
								},
							}}
							target='_blank'
							href='https://g.page/r/CcAUsdofb-qOEAg/review'
							variant='outlined'
							size='large'>
							Opinar
						</Button>

						<Typography color='#555' fontSize={13} textAlign='center'>
							Recuerda que si agendaste una cita con soporte técnico es
							importante respetar los horarios de la cita programada.
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Schedule;
