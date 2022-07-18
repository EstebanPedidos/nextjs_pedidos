import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CategoryCarousel = (props) => {
	const { productCategories } = props;

	return (
		<Swiper
			slidesPerView={1.5}
			spaceBetween={20}
			breakpoints={{
				768: {
					slidesPerView: 4,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 5,
					spaceBetween: 50,
				},
			}}>
			{productCategories.map((category) => (
				<SwiperSlide key={category.label}>
					<Box component='a' href={category.url}>
						<Box
							sx={{
								'&>img': {
									width: '100%',
									position: 'relative',
									display: 'block',
									margin: '0 auto',
								},
							}}>
							<img src={category.img} alt={category.label} />
						</Box>
						<Typography
							textAlign='center'
							color='text.secondary'
							fontWeight='500'>
							{category.label}
						</Typography>
					</Box>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default CategoryCarousel;
