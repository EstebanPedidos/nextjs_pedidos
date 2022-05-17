import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const BrandCarousel = (props) => {
	const { brands } = props;

	return (
		<Swiper
			pagination={{
				clickable: true,
			}}
			slidesPerView={1.5}
			spaceBetween={20}
			breakpoints={{
				768: {
					slidesPerView: 4,
					spaceBetween: 25,
				},
				1024: {
					slidesPerView: 4.25,
					spaceBetween: 25,
				},
			}}
			style={{
				paddingLeft: '2rem',
				paddingRight: '2rem',
			}}>
			{brands.map((category) => (
				<SwiperSlide key={category.label}>
					<Box
						component={category.url !== '#' ? 'a' : 'div'}
						href={category.url}
						display='flex'
						alignItems='center'
						mb={3}
						borderRadius={1.5}
						padding={1.5}
						overflow='hidden'
						boxShadow='0 8px 16px 0 rgb(51 51 51 / 8%)'
						justifyContent='center'>
						<img src={category.img} alt={category.label} height={62} />
					</Box>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default BrandCarousel;
