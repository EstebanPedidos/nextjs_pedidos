import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BrandCarousel = (props) => {
	const { id, brands, breakpoints, imgHeight, itemSx } = props;

	return (
		<Swiper
			id={`brand-carousel-${id}`}
			className={`brand-carousel-${id}`}
			slidesPerView={1.5}
			spaceBetween={20}
			breakpoints={
				breakpoints ?? {
					768: {
						slidesPerView: 4,
						spaceBetween: 25,
					},
					1024: {
						slidesPerView: 4.25,
						spaceBetween: 25,
					},
				}
			}
			style={{
				paddingLeft: '2rem',
				paddingRight: '2rem',
			}}>
			{brands.map((brand) => (
				<SwiperSlide key={brand.label}>
					<Box
						component={brand.url !== '#' ? 'a' : 'div'}
						href={brand.url}
						display='flex'
						alignItems='center'
						mb={3}
						borderRadius={1.5}
						padding={1.5}
						overflow='hidden'
						boxShadow='0 8px 16px 0 rgb(51 51 51 / 8%)'
						justifyContent='center'
						bgcolor='white'
						sx={{ ...itemSx }}>
						<img src={brand.img} alt={brand.label} height={imgHeight ?? 62} />
					</Box>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default BrandCarousel;
