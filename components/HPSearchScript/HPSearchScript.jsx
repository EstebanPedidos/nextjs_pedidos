import Script from 'next/script';
import Head from 'next/head';
import Box from '@mui/material/Box';

const HPSearchScript = () => {
	return (
		<Box>
			<Head>
				<link
					href='https://e-commerce-online-pub.ext.hp.com/main.css'
					rel='stylesheet'
				/>
			</Head>
			<Box
				id='hpocf'
				data-resellerid='a091ddaa-8d16-11eb-9b54-191b88c03aff'
				data-lang='mx'
				data-loc='mx'
				data-privacy='true'
			/>
			<Script
				src='https://e-commerce-online-pub.ext.hp.com/main.js'
				type='text/javascript'
				strategy='afterInteractive'
			/>
		</Box>
	);
};

export default HPSearchScript;
