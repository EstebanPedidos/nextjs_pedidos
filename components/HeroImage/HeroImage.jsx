import Box from '@mui/material/Box';

const HeroImage = (props) => {
	const { src, alt } = props;

	return (
		<Box height='27vw' position='relative'>
			<img src={src} alt={alt} layout='fill' priority width='100%' />
		</Box>
	);
};

export default HeroImage;
