import Script from 'next/script';
import Head from 'next/head';

import { Footer, Navbar, HeroSection, CategoriesDrawer } from '../components';

export const Layout = (props) => {
	const { title, children, partidas, fovoritos } = props;

	return (
		<>
			<Head>
				<title>{title ?? 'Pedidos.com'}</title>
			</Head>
			<Script
				src='https://kit.fontawesome.com/57c5aaf07a.js'
				crossOrigin='anonymous'
			/>
			<Navbar partidas={partidas} fovoritos={fovoritos}/>
			<HeroSection />
			<CategoriesDrawer />
			{children}
			<Footer />
		</>
	);
};
