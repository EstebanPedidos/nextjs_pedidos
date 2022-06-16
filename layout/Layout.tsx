import Script from 'next/script';
import Head from 'next/head';

import { Footer, Navbar, SubNav, CategoriesDrawer } from '../components';

export const Layout = (props) => {
	const { title, children, partidas, favoritos } = props;

	return (
		<>
			<Head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta content="es-mx" http-equiv="content-language"/>
				<title>{title ?? 'Pedidos.com'}</title>
				<meta name="viewport" content="width=device-width,initial-scale=1"/>
				<meta name="robots" content="index,follow"/>

			</Head>
			<Script
				src='https://kit.fontawesome.com/57c5aaf07a.js'
				crossOrigin='anonymous'
			/>
			<Navbar partidas={partidas} favoritos={favoritos}/>
			<SubNav />
			<CategoriesDrawer />
			{children}
			<Footer />
		</>
	);
};
