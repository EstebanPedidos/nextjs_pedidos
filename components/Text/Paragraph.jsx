import { Typography } from '@mui/material';

export const Paragraph = ({ children, variant = 'body2' }) => {
	return (
		<Typography variant={variant} component='p' gutterBottom>
			{children}
		</Typography>
	);
};
