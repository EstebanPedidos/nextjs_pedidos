import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Layout } from 'layout/Layout';
import Banner from 'components/pickup/Banner';
import HowItWorks from 'components/pickup/HowItWorks';
import Terms from 'components/pickup/Terms';
import Demonstration from 'components/pickup/Demonstration';
import Schedule from 'components/pickup/Schedule';

export const Pickup = () => {
	return (
		<Layout title='PickUp Center | Pedidos.com'>
			<Box bgcolor='#f6f7fa'>
				<Banner />
			</Box>

			<Box py={10}>
				<HowItWorks />

				<Box mt={2}>
					<Terms />
				</Box>
			</Box>

			<Box bgcolor='#f6f7fa'>
				<Demonstration />

				<Schedule />
			</Box>
		</Layout>
	);
};

export default Pickup;
