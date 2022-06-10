import Box from '@mui/material/Box';

import { Layout } from 'layout/Layout';
// import Banner from '/components/express-cdmx/Banner';
import Banner from 'components/express-cdmx/Banner';
import HowItWorks from 'components/express-cdmx/HowItWorks';
import Schedule from 'components/express-cdmx/Schedule';

export const ExpressCDMX = () => {
	return (
		<Layout title='Pedidos Express | Pedidos.com'>
			<Banner />
			<HowItWorks />

			<Box
				sx={{
					borderTop: '2px solid rgba(0, 0, 0, 0.025)',
				}}
			/>

			<Schedule />
		</Layout>
	);
};

export default ExpressCDMX;
