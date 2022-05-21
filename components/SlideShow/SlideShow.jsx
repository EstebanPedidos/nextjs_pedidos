import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
const SlideShow = (props) => {
	const { id, title, slides } = props;
	return (
		<Box pt={8} pb={2} bgcolor='#f5f5f5'>
			<Typography
				dangerouslySetInnerHTML={{
					__html: title,
				}}
				variant='h3'
				fontSize={28}
				color='#333'
				textTransform='uppercase'
				letterSpacing={2}
				fontWeight={500}
				textAlign='center'
				mb={8}
			/>
			<Swiper
				pagination={true}
				modules={[Pagination]}
				id={`brand-carousel-${id}`}
				className={`brand-carousel-${id}`}
				slidesPerView={1}
				style={{
					paddingLeft: '2rem',
					paddingRight: '2rem',
				}}
				autoHeight>
				{slides.map((slide) => (
					<SwiperSlide key={slide.title}>
						<Box px={4} pb={6}>
							<Grid spacing={10} container>
								<Grid xs={12} md={5} item>
									<img src={slide.img} alt={slide.title ?? ''} width='100%' />
								</Grid>
								<Grid xs={12} md={6} item>
									{slide.title && (
										<Typography
											fontSize={24}
											dangerouslySetInnerHTML={{
												__html: slide.title,
											}}
											gutterBottom
										/>
									)}
									<Typography
										textAlign='justify'
										lineHeight={1.75}
										dangerouslySetInnerHTML={{
											__html: slide.content,
										}}
										gutterBottom
									/>

									<Divider sx={{ my: 5 }} />

									{slide.extra && (
										<Typography
											textAlign='justify'
											fontSize={24}
											fontWeight={300}
											dangerouslySetInnerHTML={{
												__html: slide.extra,
											}}
											gutterBottom
										/>
									)}
								</Grid>
							</Grid>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default SlideShow;
