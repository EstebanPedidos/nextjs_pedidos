import React from 'react';
import { SwiperSlide } from 'swiper/react';

// @meterial-ui/icons
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// Custom components
import { Carousel } from './Caruousel';

// components @mui/material

import { Box, Typography, Breadcrumbs, Hidden } from '@mui/material';

//Nextjs
import Link from 'next/link';

// Section, after navbar, with next content
// Delivery free, all CDMX
// My orders
// Volumen price
// My invoices

const items = [
	{
        url: '/Membresia/pro',
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/header/miembros-pro/m-pro-ship.svg',
		title: '¡Empresas! Envío Gratis CDMX',
		description: 'Costo a partir de $599 y vol. arriba de 25kg.',
	},
	{   
        url: '/MisPedidos',
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/header/tools/m-acc-p.svg',
		title: 'Mis pedidos',
		description: 'Ve tus pedidos al iniciar sesión',
	},
	{
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/header/miembros-pro/m-pro-dis.svg',
		title: 'Precio por volumen',
		description: 'Solicita tu cotización',
	},
	{
        url: '/misFacturas',
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/header/tools/m-acc-f.svg',
		title: 'Mis facturas',
		description: '¡Editar facturas!',
	},
	{
        url: '/misFavoritos',
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/header/tools/m-acc-fa.svg',
		title: 'Favoritos',
		description: '¡En un solo lugar!',
	},
	{
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/header/tools/m-acc-grma.svg',
		title: "Garantías & RAM's",
		description: 'Comienza el proceso',
	},
	{
        url: '/misNotasCredito',
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/header/tools/m-acc-nc.svg',
		title: 'Notas de credito',
		description: 'Consultar disponibles',
	},
	{
		icon: 'https://pedidos.com/myfotos/pedidos-com/pagina/header/miembros-pro/m-pro-services.svg',
		title: 'Envios express y programados',
		description: 'Descuento para empresas',
	},
];

export const HeroSection = () => {
	function handleClick(event) {
		event.preventDefault();
		console.info('You clicked a breadcrumb.');
	}

	return (
		<>
			<Box
				display='flex'
				flexDirection='column'
				paddingX='3%'
				bgcolor='#f6f7f9'
				py={1}>
				<Box display='flex' justifyContent='space-between' alignItems='center'>
					<Box>
						<Breadcrumbs
							separator={<NavigateNextIcon />}
							aria-label='breadcrumb'>
							<Link color='inherit' href='/' onClick={handleClick}>
								Empresas
							</Link>
							<Link color='inherit' href='/' onClick={handleClick}>
								{'  '}
							</Link>
						</Breadcrumbs>
					</Box>
					<Hidden mdDown={true}>
						<Box display={'flex'} alignItems='center'>
							<span
								style={{
									background: 'rgb(116, 195, 12)',
									borderRadius: '50%',
									display: 'inline-block',
									width: '0.6rem',
									height: '0.6rem',
									marginRight: '0.3rem',
								}}></span>
							<Typography variant='body2'>
								Horario de Atención Lunes a Domingo de 9 a 18:30hrs
							</Typography>
						</Box>
					</Hidden>
				</Box>
			</Box>

			{/* Carrusel  */}
			<Box overflow={'hidden'}>
				<Box>
					<Hidden smDown>
						<Carousel slidesPerView={5}>
							{items.map((props, indx) => (
								<SwiperSlide key={indx}>
									<HeroItem {...props} />
								</SwiperSlide>
							))}
						</Carousel>
					</Hidden>

					<Hidden smUp>
						<Carousel slidesPerView={1}>
							{items.map((props, indx) => (
								<SwiperSlide key={indx}>
									<HeroItem {...props} />
								</SwiperSlide>
							))}
						</Carousel>
					</Hidden>
				</Box>
			</Box>
		</>
	);
};

const HeroItem = ({ url, icon, title, description }) => {
	return (
        <Link href={url !== undefined ? url : ''}>
            <a>
                <Box component={'div'} width={'350px'} marginY='5px' marginRight={'5px'}>
                    <Box
                        display='flex'
                        borderRight={'0.5px solid rgb(229, 229, 229)'}
                        justifyContent='center'>
                        <Box display={'flex'} alignItems='center'>
                            <img
                                style={{
                                    padding: '8px',
                                    height: '50px',
                                }}
                                src={icon}
                                alt={title}
                            />
                        </Box>
                        <Box minHeight={'90px'}>
                            <p>
                                <Typography component={'span'} variant='subtitle2'>
                                    {title}
                                </Typography>
                                <br />
                                <Typography
                                    style={{
                                        opacity: '0.8',
                                        fontSize: '1',
                                    }}
                                    componen='span'
                                    variant='body2'>
                                    {description}
                                </Typography>
                            </p>
                        </Box>
                    </Box>
                </Box>
            </a>
        </Link>
	);
};
