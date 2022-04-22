import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
export const theme = createTheme({
	palette: {
		common: {
			blue: '#3655a5',
			orange: '#f1861c',
			white: '#ffffff',
			lightgray: '#CCCCCC',
			gray: '#333',
		},
		primary: {
			light: '#6b81d7',
			main: '#3655a5',
			dark: '#002d75',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ffb750',
			main: '#f1861c',
			dark: '#a85d13',
			contrastText: '#000',
		},
		error: {
			light: '#e57373',
			main: '#f44336',
			dark: '#d32f2f',
			contrastText: '#fff',
		},
		white: {
			main: '#FFFFFF',
		},
		background: {
			paper: '#ffffff',
			default: '#ffffff',
			blue: '#3655a5',
		},
	},
	typography: {
		fontFamily: 'Poppins ,sans-serif',
		h1: {
			fontWeight: '600',
			fontSize: '2rem',
		},
		h2: {
			fontWeight: '600',
		},
		h3: {
			fontWeight: '600',
		},
		button: {
			textTransform: 'none',
		},
		span: {
			fontWeight: '600',
		},
	},
});

export default theme;

export const COLORS = {
	primary: '#3655a5',
};
