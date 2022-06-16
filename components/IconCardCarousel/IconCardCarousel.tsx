import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const IconCardCarousel = (props) => {
	const { id, items, breakpoints, itemSx, navigation, slidesPerView } = props;

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

				'& .swiper-button-disabled': {
					opacity: 0,
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
							slidesPerView: 2.5,
							spaceBetween: 25,
						},
						1140: {
							slidesPerView: 3.5,
							spaceBetween: 25,
						},
						1366: {
							slidesPerView: 4.1,
							spaceBetween: 25,
						},
					}
				}
				style={{
					paddingLeft: '2rem',
					paddingRight: '2rem',
					paddingTop: '3rem',
					paddingBottom: '3rem',
				}}>
				{items.map((item) => (
					<SwiperSlide key={item.label} style={{ height: '100%' }}>
						<Box
							sx={{
								border: '1px solid #eff2f6',
								borderRadius: 5,
								bgcolor: '#fff',
								p: 2.25,
								transition: 'all 0.4s',
								height: 184,

								'&:hover': {
									boxShadow: '0 10px 90px rgb(0 0 0 / 8%)',
									transform: 'translateY(-1px)',
								},

								...itemSx,
							}}>
							<Box
								sx={{
									background: 'linear-gradient(to top,#3655a5,#304c94)',
									backgroundColor: '#fff',
									width: 20,
									height: 20,
									fontSize: 16,
									borderRadius: '50%',
									padding: 2.5,
									color: '#fff',
									textAlign: 'center',
									mb: 2,
									mx: 'auto',
								}}>
								<Box component='i' className={item.icon} />
							</Box>

							<Typography
								sx={{
									fontSize: 15,
									fontWeight: 700,
									mb: 2,
									textAlign: 'center',
								}}
								dangerouslySetInnerHTML={{
									__html: item.title,
								}}
							/>
							<Typography
								sx={{
									fontSize: 13,
									textAlign: 'center',
									'& > strong': {
										fontWeight: 700,
									},
								}}
								dangerouslySetInnerHTML={{
									__html: item.description,
								}}
							/>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default IconCardCarousel;
