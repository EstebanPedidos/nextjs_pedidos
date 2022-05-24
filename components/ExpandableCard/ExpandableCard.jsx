import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Link from 'components/Link';

const ExpandableCard = (props) => {
	const { item } = props;

	return (
		<Box
			component={Link}
			href={item.url}
			position='relative'
			display='block'
			overflow='hidden'
			pt='110%'
			borderRadius={2}
			sx={{
				'&:hover > div > .description-container': {
					transform: 'translateY(0)',
				},

				'&:hover > .background-image': {
					transform: 'scale(1.1)',
					height: '100%',
				},
			}}>
			<Box
				className='background-image'
				borderRadius={2}
				overflow='hidden'
				position='absolute'
				sx={{
					transition: 'all .5s cubic-bezier(.19,1,.22,1) 0s',
					bottom: 0,
					height: '90%',
					width: '100%',

					'&>img': {
						width: '100%',
						position: 'relative',
						display: 'block',
						margin: '0 auto',
					},
				}}>
				<img src={item.img} alt={item.label} />
				<Box
					sx={{
						background:
							'linear-gradient(rgba(24, 27, 50, 0) 43.23%, rgba(24, 27, 50, 0.95) 100%) center top / contain, linear-gradient(0deg, rgba(24, 27, 50, 0.05), rgba(24, 27, 50, 0.05))',
						width: '100%',
						position: 'absolute',
						top: 0,
						bottom: 0,
					}}
				/>
			</Box>
			<Box
				position='absolute'
				bottom={0}
				zIndex='2'
				padding={2.25}
				pt={20}
				right={0}
				left={0}
				sx={{}}>
				<Box
					className='description-container'
					sx={{
						transform: 'translateY(2.5rem)',
						transition: 'all 0.25s ease',
					}}>
					<Typography
						fontWeight={300}
						color='white'
						fontSize={18}
						letterSpacing={4.2}
						textTransform='uppercase'
						gutterBottom>
						{item.label}
					</Typography>
					<Typography color='white' mb={3}>
						{item.description}
					</Typography>
					<Box display='flex' gap={1} alignItems='center'>
						<Typography color='white' variant='body2'>
							Ver los detalles
						</Typography>
						<ArrowForwardIcon sx={{ color: 'white' }} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ExpandableCard;
