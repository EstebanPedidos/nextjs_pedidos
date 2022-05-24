import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import CardsCarouselSectionItem from './CardsCarouselSectionItem';

const CardsCarouselSection = (props) => {
	const {
		title,
		subtitle,
		items,
		id,
		centered,
		ctaLabel,
		ctaLink,
		breakpoints,
		ctaNewLine,
	} = props;

	return (
		<Box pt={8} pb={5}>
			<Container>
				<Box
					display='flex'
					alignItem='end'
					justifyContent='space-between'
					flexDirection={{ xs: ctaNewLine ? 'column' : 'row', md: 'row' }}
					gap={2}>
					<Box>
						<Typography variant='h3' fontSize={24} fontWeight={700}>
							{title}
						</Typography>
						<Typography variante='body2'>{subtitle}</Typography>
					</Box>

					<Box>
						<Button
							href={ctaLink}
							variant='outlined'
							sx={{ px: 5, py: 2, borderRadius: '10px' }}>
							{ctaLabel && <>{ctaLabel}</>}
							{!ctaLabel && 'Ver todo'}
						</Button>
					</Box>
				</Box>
			</Container>

			<Box
				mt={5}
				component={centered ? Container : 'div'}
				sx={{ px: '0!important' }}>
				<Swiper
					className={`brand-carousel-${id}`}
					style={{
						paddingRight: '1rem',
						paddingLeft: '1rem',
					}}
					slidesPerView={1.5}
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
							<CardsCarouselSectionItem item={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</Box>
	);
};

export default CardsCarouselSection;
