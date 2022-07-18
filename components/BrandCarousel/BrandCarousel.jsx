import Box from '@mui/material/Box';
import Typography from '@mui/material/Box';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const BrandCarousel = (props) => {
	const {
		id,
		brands,
		breakpoints,
		imgHeight,
		itemSx,
		navigation,
		slidesPerView,
		hideText,
	} = props;

	return (
		<Box
			sx={{
				'& .swiper-button-next, & .swiper-button-prev': {
					color: 'black',
					borderRadius: '50%',
					bgcolor: 'white',
					width: 40,
					height: 40,
					boxShadow: '0 1px 5px rgb(0 0 0 / 20%)',
					transform: 'translateY(-25%)',

					'&:after': {
						fontSize: 20,
					},
				},
			}}>
			<Swiper
				id={`brand-carousel-${id}`}
				className={`brand-carousel-${id}`}
				slidesPerView={slidesPerView ?? 1.5}
				spaceBetween={20}
				navigation={!!navigation}
				modules={[Navigation]}
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
							sx={itemSx ? { ...itemSx } : {}}>
							{brand.img && (
								<img
									src={brand.img}
									alt={brand.label}
									height={imgHeight ?? 62}
								/>
							)}
							{hideText && (
								<Typography fontSize={15} fontWeight={500}>
									{brand.label}
								</Typography>
							)}
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default BrandCarousel;
