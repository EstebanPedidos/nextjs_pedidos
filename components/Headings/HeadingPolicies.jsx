import React from 'react';
import { Box, Typography } from '@mui/material';

export const HeadingPolicies = ({
	children,
	style,
	marginTop = '2rem',
	marginBottom = '2rem',
}) => {
	return (
		<Box marginTop={marginTop} marginBottom={marginBottom} style={style}>
			<Typography
				align='center'
				variant='h3'
				component={'h1'}
				color='primary'>
				Políticas de envío, devoluciones y cancelaciones {/* {children} */}
			</Typography>
		</Box>
	);
};
