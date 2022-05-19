import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const HeroImage = (props) => {
	const { src, alt, title, subtitle, gradient, height } = props;

	return (
		<Box
			height={height ?? '27vw'}
			position='relative'
			sx={{
				backgroundImage: `url(${src})`,
				backgroundSize: { xs: 'cover', md: '100%' },
				backgroundPosition: 'center',
			}}>
			{gradient && (
				<Box
					sx={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						background:
							'linear-gradient(90deg,rgba(48,50,136,0) 0%, #ffffffd6 100%)',
					}}
				/>
			)}
			{(title || subtitle) && (
				<Box position='absolute' bottom='1rem' width='100%'>
					<Container>
						<Box width={{ lg: '42%' }} mt={4}>
							{title && (
								<Typography
									variant='h4'
									fontSize='38px'
									fontWeight={700}
									color='#333'
									dangerouslySetInnerHTML={{
										__html: title,
									}}
									gutterBottom
								/>
							)}
							{subtitle && (
								<Typography
									variant='h6'
									fontSize='1rem'
									color='#333'
									dangerouslySetInnerHTML={{
										__html: subtitle,
									}}
								/>
							)}
						</Box>
					</Container>
				</Box>
			)}
		</Box>
	);
};

export default HeroImage;
