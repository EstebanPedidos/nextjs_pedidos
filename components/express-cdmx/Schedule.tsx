import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from './styles.module.css';

export const Schedule = () => {
	const { containerPadding, centered } = styles;

	return (
		<Container className={`${containerPadding} ${centered}`}>
			<Typography variant='h6' component={'h3'} fontSize={24} gutterBottom>
				Horario del servicio
			</Typography>
			<Typography component='p' color='#555' fontWeight={500} fontSize={15}>
				Lunes a Viernes en un horario de 9:00 a 17:00, días laborales.
			</Typography>
		</Container>
	);
};

export default Schedule;
