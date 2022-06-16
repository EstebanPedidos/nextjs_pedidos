import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import BrandCarousel from 'components/BrandCarousel';

const HeroCategory = (props) => {
	const { title, description, bgImg, categoryItems, sx } = props;

	return (
		<>
			<Box
				sx={{
					background: `url(${bgImg}) center top no-repeat`,
					backgroundSize: 'cover',
					...sx,
				}}>
				<Container maxWidth='xl'>
					<Box
						width={{ xs: '100%', md: '44%' }}
						p='7% 4%'
						sx={{
							background: {
								xs: 'linear-gradient(rgb(255 255 255 / 68%) 43.23%, rgb(246 246 248 / 0%) 100%) center top / cover, linear-gradient(180deg, rgb(255 255 255), rgb(253 253 255 / 0%))',
								md: 'none',
							},
						}}>
						<Typography
							color='#717171'
							letterSpacing={2}
							fontWeight={500}
							textTransform='uppercase'>
							{description}
						</Typography>
						<Typography fontSize={{ xs: 28, md: 42 }} fontWeight={700}>
							{title}
						</Typography>
					</Box>
				</Container>
				<Container maxWidth={false} sx={{ px: '0!important' }}>
					<BrandCarousel
						id={`category-tintas-toner-hero`}
						brands={categoryItems}
						slidesPerView={3}
						breakpoints={{
							768: {
								slidesPerView: 4,
								spaceBetween: 25,
							},
							1024: {
								slidesPerView: 6.5,
								spaceBetween: 16,
							},
						}}
						itemSx={{
							bgcolor: '#f9f9f9b5',
							bosShadow: '0 5px 7.5px 0 rgb(0 0 0 / 5%)',
							border: '1.5px solid #e5e5e5',
							fontWeight: 500,
							height: 42,
							py: 0,
							transition: '0.3s',

							'&:hover': {
								borderColor: '#325ac3',
							},
						}}
						hideText
						navigation
					/>
				</Container>
			</Box>

			<Divider sx={{ borderColor: '#eee', mx: 4, mb: 2.5 }} />
			<Divider sx={{ borderColor: '#e5e5e5', mx: 4 }} />
		</>
	);
};

export default HeroCategory;