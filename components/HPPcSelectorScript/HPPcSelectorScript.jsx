import Script from 'next/script';
import Box from '@mui/material/Box';

const HPPcSelectorScript = () => {
	return (
		<Box>
			<Box id='pcSelectorDiv'> </Box>
			<Script
				src='https://storage.googleapis.com/indexado/pcselector/insert.min.js'
				type='text/javascript'
				strategy='beforeInteractive'
				data-retail='PEDIDOS'
				data-country='MEXICO'
			/>
		</Box>
	);
};

export default HPPcSelectorScript;
