import Head from 'next/head';
import Box from '@mui/material/Box';
import { Layout } from 'layout/Layout';
// import Banner from '/components/express-cdmx/Banner';
import Banner from 'components/express-cdmx/Banner';
import HowItWorks from 'components/express-cdmx/HowItWorks';
import Schedule from 'components/express-cdmx/Schedule';

export const ExpressCDMX = () => {
	return (
		<Layout title='Pedidos Express | Pedidos.com'>
			<Head>
				<meta name="description" content="Pedidos.com es la mejor opción para conseguir todo lo que necesitas en tres horas o menos"/>
				<link rel="canonical" href="https://pedidos.com/servicios/express-cdmx"/>
			</Head>
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
