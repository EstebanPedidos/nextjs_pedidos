import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export function Carousel({ children, slidesPerView = 4 }) {
	return (
		<Swiper
			modules={[Navigation]}
			navigation
			spaceBetween={50}
			slidesPerView={slidesPerView}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}>
			{children}
		</Swiper>
	);
}
