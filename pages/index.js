import { Typography } from '@mui/material';
import Link from 'next/link'
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from 'layout/Layout';
import { SwiperSlide } from 'swiper/react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
	<Layout>	
		<Head>
			<title>Pedidos.com | Todo para tu espacio de trabajo</title>
			<meta name="description" content="Paga a Meses Sin Intereses, 18 MSI con tarjetas participantes y hasta 24 MSI con Citibanamex. Gran variedad de productos + Entregas EXPRESS CDMX." />
			<script src="https://www.paypal.com/sdk/js?currency=MXN&debug=true&components=hosted-fields,buttons&locale=es_MX&client-id=ARuJiaAFKxs8vJtK5KxLz0wHlC3Tdgz-XRbMSNwHC2GY0Ip0JIxMgxfgB6oqbGDwh8CFRhUS-vpcGfv_" data-service-stage="paypal.com" data-stage="paypal.com" data-api-stage-host="api.paypal.com" data-client-token="eyJicmFpbnRyZWUiOnsiYXV0aG9yaXphdGlvbkZpbmdlcnByaW50IjoiNjI0YmJkOTc1MjkyMDc0M2M2ZDcyNzRiNTU0MmJhN2RkMjUzMWJhNTE2YjdkMjIxZWRhNzQzOWJkMTUxZjQ2YnxtZXJjaGFudF9pZD1yd3dua3FnMnhnNTZobTJuJnB1YmxpY19rZXk9ajJmYzJqcHhkZzZ2cDg0ZiZjcmVhdGVkX2F0PTIwMjItMDQtMTlUMTM6MTE6NTIuMDM0WiZjdXN0b21lcl9pZD04Mzk0OTMiLCJ2ZXJzaW9uIjoiMy1wYXlwYWwifSwicGF5cGFsIjp7ImlkVG9rZW4iOm51bGwsImFjY2Vzc1Rva2VuIjoiQTIxQUFQbjRUNFh0V3hTR3FVODQ1SzJZMlJRenlGcVVDNURKZHoySXNaTnV2d0lSN1ZBcWdjaDBGeHF0aWtYOW9YbFlKdERBNmpiQTdQRDNoTFB5WHg3LTkwNjRDSDEwdyJ9fQ=="></script>
		</Head>
		<div className={styles.container}>
			<main className={styles.main}>

				<h1 className={styles.title}>
				<Link href="/Home">
					<a>
					HOME logeado
					</a>
				</Link>
				</h1>
			</main>
		</div>
	</Layout>
	);
}
