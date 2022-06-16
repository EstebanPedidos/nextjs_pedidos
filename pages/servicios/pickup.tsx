import Head from 'next/head';
import Box from '@mui/material/Box';
//components
import { Layout } from 'layout/Layout';
import Banner from 'components/pickup/Banner';
import HowItWorks from 'components/pickup/HowItWorks';
import Terms from 'components/pickup/Terms';
import Demonstration from 'components/pickup/Demonstration';
import Schedule from 'components/pickup/Schedule';

export const Pickup = () => {
	return (
		<Layout title='PickUp Center | Pedidos.com'>
			<Head>
				<meta name="description" content="Pide en Pedidos.com y recoge tu pedido con está nueva forma de entrega.Es muy sencillo, haz tu pedido en línea y recoge en tres horas o día siguiente en nuestro Pick up Center."/>
				<link rel="canonical" href="https://pedidos.com/servicios/pickup" />
			</Head>	
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
