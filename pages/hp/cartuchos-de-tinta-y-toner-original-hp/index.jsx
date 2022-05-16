import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import { Layout } from 'layout/Layout';
import HPSearchScript from 'components/HPSearchScript';

const TintaTonerHP = () => {
	return (
		<Layout>
			<Box py={5}>
				<Container maxWidth='md'>
					<HPSearchScript />
				</Container>
			</Box>
			<Divider
				variant='middle'
				sx={{ borderColor: 'rgba(0, 0, 0, 0.075)', borderBottomWidth: '2px' }}
			/>
		</Layout>
	);
};

export default TintaTonerHP;
