import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		common: {
			blue: '#3655a5',
			orange: '#f1861c',
			white: '#ffffff',
			gray: '#CCCCCC',
			lightgray: 'rgba(166, 173, 185, 0.48)',
			lightgrayb: '#E7ECF3',
			darkgray: '#A6ADB9',
		},
		primary: {
			light: '#99B2F2',
			main: '#3655a5',
			gray: '#9298A7',
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
			defaultGrey: 'grey[300]',
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
			fontSize: '1.5rem',
		},
		h3: {
			fontWeight: '600',
		},
		button: {
			textTransform: 'none',
			height: '50px',
		},
	},
});
export default lightTheme;

export const COLORS = {
	primary: '#3655a5',
};
