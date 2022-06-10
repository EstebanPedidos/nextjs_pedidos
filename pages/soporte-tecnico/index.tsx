import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';

import { Layout } from 'layout/Layout';
import Banner from 'components/sopote-tecnico/Banner';
import HowItWorks from 'components/sopote-tecnico/HowItWorks';
import Schedule from 'components/sopote-tecnico/Schedule';

const useStyles = makeStyles({
	container: {
		backgroundColor: '#f6f7fa',
	},
});

export const TechnicalSupport = () => {
	const classes = useStyles();

	return (
		<Layout title='Soporte Técnico | Pedidos.com'>
			<Banner />
			<HowItWorks />
			<Box
				sx={{
					borderTop: '2px solid rgba(0, 0, 0, 0.05)',
				}}
			/>
			<Schedule />
		</Layout>
	);
};

export default TechnicalSupport;
