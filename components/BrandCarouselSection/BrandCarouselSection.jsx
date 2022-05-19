import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import BrandCarouselSectionItem from './BrandCarouselSectionItem';

const BrandCarouselSection = (props) => {
	const { title, subtitle, brands, id, centered, ctaLink } = props;

	return (
		<Box pt={8} pb={5}>
			<Container>
				<Box display='flex' alignItem='end' justifyContent='space-between'>
					<Box>
						<Typography variant='h3' fontSize={24} fontWeight={700}>
							{title}
						</Typography>
						<Typography variante='body2'>{subtitle}</Typography>
					</Box>

					<Button
						href={ctaLink}
						variant='outlined'
						sx={{ px: 5, py: 4, borderRadius: '10px' }}>
						Ver
						<br />
						todo
					</Button>
				</Box>
			</Container>

			<Box mt={5}>
				<Swiper
					className={`brand-carousel-${id}`}
					pagination={{
						clickable: true,
					}}
					style={{
						paddingRight: '2rem',
						paddingLeft: '2rem',
					}}
					slidesPerView={1.5}
					spaceBetween={25}
					breakpoints={{
						768: {
							slidesPerView: 4,
							spaceBetween: 25,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 25,
						},
					}}>
					{brands.map((brand) => (
						<SwiperSlide key={brand.label}>
							<BrandCarouselSectionItem brand={brand} />
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</Box>
	);
};

export default BrandCarouselSection;
