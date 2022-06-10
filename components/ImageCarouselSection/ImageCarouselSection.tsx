import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Link from 'components/Link';

const ImageCarouselSection = (props) => {
	const { items, title, subtitle, centered, breakpoints, id, slidesPerView } =
		props;

	return (
		<Box>
			<Container maxWidth='xl'>
				<Box>
					{title && (
						<Typography variant='h3' fontSize={24} fontWeight={700}>
							{title}
						</Typography>
					)}
					{subtitle && <Typography variant='body2'>{subtitle}</Typography>}
				</Box>
			</Container>
			<Box
				mt={5}
				component={centered ? Container : 'div'}
				sx={{ px: '0!important' }}>
				<Swiper
					className={`image-carousel-${id}`}
					style={{
						paddingRight: '1rem',
						paddingLeft: '1rem',
					}}
					slidesPerView={slidesPerView ? slidesPerView : 1.5}
					spaceBetween={25}
					breakpoints={
						breakpoints ?? {
							768: {
								slidesPerView: 3,
								spaceBetween: 25,
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 25,
							},
						}
					}>
					{items.map((item) => (
						<SwiperSlide key={item.label}>
							{/* <Link
								href={item.href}
								underline='none'
								sx={{
									'&:hover .MuiTypography-root': {
										color: '#325ac3',
									},
								}}> */}
								<Box
									display='flex'
									flexDirection='column'
									alignItems='center'
									justifyContent='center'>
									<Box
										component='img'
										src={item.img}
										alt={item.label}
										sx={{ p: 2, width: 108, mb: 2 }}
									/>

									<Typography color='#717171' fontWeight={500}>
										{item.label}
									</Typography>
								</Box>
							{/* </Link> */}
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</Box>
	);
};

export default ImageCarouselSection;
