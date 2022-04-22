import { Footer, Navbar, HeroSection, CategoriesDrawer } from '../components';

export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<CategoriesDrawer />
			{children}
			<Footer />
		</>
	);
};
