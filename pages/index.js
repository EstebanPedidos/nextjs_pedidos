import { Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pedidos.com | Todo para tu espacio de trabajo</title>
        <meta name="description" content="Paga a Meses Sin Intereses, 18 MSI con tarjetas participantes y hasta 24 MSI con Citibanamex. Gran variedad de productos + Entregas EXPRESS CDMX." />
        <script src="https://www.paypal.com/sdk/js?currency=MXN&debug=true&components=hosted-fields,buttons&locale=es_MX&client-id=ARuJiaAFKxs8vJtK5KxLz0wHlC3Tdgz-XRbMSNwHC2GY0Ip0JIxMgxfgB6oqbGDwh8CFRhUS-vpcGfv_" data-service-stage="paypal.com" data-stage="paypal.com" data-api-stage-host="api.paypal.com" data-client-token="eyJicmFpbnRyZWUiOnsiYXV0aG9yaXphdGlvbkZpbmdlcnByaW50IjoiNjI0YmJkOTc1MjkyMDc0M2M2ZDcyNzRiNTU0MmJhN2RkMjUzMWJhNTE2YjdkMjIxZWRhNzQzOWJkMTUxZjQ2YnxtZXJjaGFudF9pZD1yd3dua3FnMnhnNTZobTJuJnB1YmxpY19rZXk9ajJmYzJqcHhkZzZ2cDg0ZiZjcmVhdGVkX2F0PTIwMjItMDQtMTlUMTM6MTE6NTIuMDM0WiZjdXN0b21lcl9pZD04Mzk0OTMiLCJ2ZXJzaW9uIjoiMy1wYXlwYWwifSwicGF5cGFsIjp7ImlkVG9rZW4iOm51bGwsImFjY2Vzc1Rva2VuIjoiQTIxQUFQbjRUNFh0V3hTR3FVODQ1SzJZMlJRenlGcVVDNURKZHoySXNaTnV2d0lSN1ZBcWdjaDBGeHF0aWtYOW9YbFlKdERBNmpiQTdQRDNoTFB5WHg3LTkwNjRDSDEwdyJ9fQ=="></script>
      </Head>
      <nav>
        Header
      </nav>

      <main className={styles.main}>
        <Typography variant='h1' color='primary'>prueba MUI lista</Typography>

			<main className={styles.main}>
				<Typography variant='h1' color='primary'>
					prueba MUI lista
				</Typography>

				<h1 className={styles.title}>
					Ir a <a href='/'>Home</a>
				</h1>

				<p className={styles.description}>
					Get started by editing{' '}
					<code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					<a href='https://nextjs.org/docs' className={styles.card}>
						<h2>Documentation &rarr;</h2>
						<p>
							Find in-depth information about Next.js features and
							API.
						</p>
					</a>

					<a href='https://nextjs.org/learn' className={styles.card}>
						<h2>Learn &rarr;</h2>
						<p>
							Learn about Next.js in an interactive course with
							quizzes!
						</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{' '}
					<span className={styles.logo}>
						<Image
							src='/vercel.svg'
							alt='Vercel Logo'
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
}
