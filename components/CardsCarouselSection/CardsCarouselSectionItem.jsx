import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from 'components/Link';

const CardsCarouselSectionItem = (props) => {
	const { item } = props;

	return (
		<Box
			component={Link}
			href={item.url}
			position='relative'
			display='block'
			borderRadius={2}
			overflow='hidden'
			sx={{
				'&:hover > div > .description-container': {
					transform: 'translateY(0)',
				},

				'&:hover > div > img': {
					transform: 'scale(1.1)',
				},
			}}>
			<Box
				sx={{
					'&>img': {
						width: '100%',
						position: 'relative',
						display: 'block',
						margin: '0 auto',
						transition: 'transform 2s cubic-bezier(.19,1,.22,1) 0s',
					},
				}}>
				<img src={item.img} alt={item.label} />
			</Box>
			<Box
				position='absolute'
				bottom={0}
				zIndex='2'
				padding={2.25}
				pt={20}
				right={0}
				left={0}
				sx={{
					background:
						'linear-gradient(0deg, rgba(13,21,27,.86) 0%, rgba(255,255,255,0) 100%)',
				}}>
				<Box
					className='description-container'
					sx={{
						transform: 'translateY(2.25rem)',
						transition: 'all 0.5s ease 0.15s',
					}}>
					<Typography color='white'>{item.description}</Typography>
					<Typography fontWeight='500' color='white' fontSize={24} gutterBottom>
						{item.label}
					</Typography>
					<Typography color='white' variant='body2'>
						Ver productos
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default CardsCarouselSectionItem;
