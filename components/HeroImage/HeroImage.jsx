import Image from 'next/image';
import Box from '@mui/material/Box';

const HeroImage = (props) => {
	const { src, alt } = props;

	return (
		<Box height='27vw' position='relative'>
			<Image src={src} alt={alt} layout='fill' priority />
		</Box>
	);
};

export default HeroImage;
