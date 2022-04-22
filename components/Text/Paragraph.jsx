import { Typography } from '@material-ui/core';

export const Paragraph = ({ children, variant = 'body2' }) => {
	return (
		<Typography variant={variant} component='p' gutterBottom>
			{children}
		</Typography>
	);
};
