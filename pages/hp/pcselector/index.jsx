import Head from 'next/head';
//components
import { Layout } from 'layout/Layout';
import HPPcSelectorScript from 'components/HPPcSelectorScript';

const PCSelector = () => {
	return (
		<Layout title='Descubre todo sobre el asistente virtual HP | Pedidos.com'>
			<Head>
				<meta name="description" content="Encuentra el mejor equipo para ti con ayuda de nuestro asistente virtual HP. ¡Los mejores productos solo para ti!"/>
				<link rel="canonical" href="https://pedidos.com/hp/pcselector"/>
			</Head>
			<HPPcSelectorScript />
		</Layout>
	);
};

export default PCSelector;
