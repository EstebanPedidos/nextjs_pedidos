import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CommentsButton = () => {
	return (
		<Box
			component='a'
			href='https://customerreviews.google.com/v/merchant?q=pedidos.com&c=MX&v=17'
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			borderRadius={2}
			py={3}
			gap={2}
			sx={{
				color: '#337ab7',
				textSecoration: 'none',
				border: '1px solid #edeefd',
				bgcolor: '#f9fafd',
				width: '300px',
				margin: '0 auto',

				'&:hover': {
					borderColor: '#325ac3',
					bgcolor: '#eaedf7',
				},
			}}>
			<img
				style={{ top: '-1.8em', right: '-2em' }}
				width='93'
				data-sizes='auto'
				src='https://pedidos.com/myfotos/pedidos-com/pagina/home19/p/Comentar.svg'
				alt='Comentarios'
				sizes='93px'
			/>
			<Typography variant='h3' fontSize={14} fontWeight={600}>
				Comentarios
			</Typography>
		</Box>
	);
};

export default CommentsButton;
