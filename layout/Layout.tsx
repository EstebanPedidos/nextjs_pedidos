import Head from 'next/head';
import { Footer, Navbar, HeroSection, CategoriesDrawer } from '../components';

export const Layout = (props) => {
	const { title, children } = props;

	return (
		<>
			<Head>
				<title>{title ?? 'Pedidos.com'}</title>
			</Head>
			<Navbar />
			<HeroSection />
			<CategoriesDrawer />
			{children}
			<Footer />
		</>
	);
};
