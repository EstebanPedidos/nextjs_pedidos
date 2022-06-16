import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const Demonstration = () => {
	return (
		<Box textAlign='center' py={10} position='relative'>
			<Container>
				<Box
					position='relative'
					zIndex={2}
					borderRadius={2}
					component='iframe'
					width='100%'
					height={500}
					src='https://www.youtube.com/embed/y2QBWl0zOU8'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
			</Container>
			<Box
				sx={{
					position: 'absolute',
					bottom: 0,
					bgcolor: 'white',
					height: '50%',
					width: '100%',
					zIndex: 1,
				}}
			/>
		</Box>
	);
};

export default Demonstration;
