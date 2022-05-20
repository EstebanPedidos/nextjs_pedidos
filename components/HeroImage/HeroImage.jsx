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
				backgroundSize: { xs: 'cover', lg: '100%' },
				backgroundRepeat: 'no-repeat',
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
				<Box
					position='absolute'
					display='flex'
					alignItems='center'
					height='100%'
					width='100%'>
					<Container>
						<Box width={{ lg: '42%' }} mt={4}>
							{title && (
								<Typography
									variant='h4'
									fontSize={{ xs: '38px', lg: '45px' }}
									fontWeight={700}
									color='#333'
									dangerouslySetInnerHTML={{
										__html: title,
									}}
									sx={{
										'& > span': {
											color: '#3655a5',
										},
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
