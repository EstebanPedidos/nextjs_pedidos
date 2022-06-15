import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import { Layout } from 'layout/Layout';
import Link from 'components/Link';

const comerciales = [
	{
		label: 'Video comenrcial <strong>2018</strong>',
		title: '¡Todo para tu Oficina 2018!',
		description:
			'Tienda de productos de oficina: Pedidos.com. Sin duda, ahorra tiempo, dinero y esfuerzo. Empresa 100% mexicana.',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/comerciales/fit_18.jpg',
		color: 'none',
		col: 12,
		titleColor: 'black',
		embedUrl: 'https://www.youtube.com/embed/GAyMmtJ5rrE',
	},
	{
		label: 'Parte <strong>1</strong>',
		title: 'Todo para tu espacio de trabajo 2018',
		description:
			'Pedidos.com. Sin duda, ahorra tiempo, dinero y esfuerzo. Empresa 100% mexicana de productos para oficina. Comercial producido por Adrenorama.',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/comerciales/p1.jpg',
		color: '#83A4E666',
		col: 4,
		opacity: 1,
		embedUrl: 'https://www.youtube.com/embed/TaZUf8Y4E8E',
	},
	{
		label: 'Parte <strong>2</strong>',
		title: 'Pedidos.com Parte 2',
		description:
			'Pedidos.com es simplemente más barato que las tiendas. Empresa 100% mexicana de productos de oficina con diferentes modalidades de envío.',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/comerciales/p2.jpg',
		color: '#FFB74D4D',
		col: 4,
		opacity: 1,
		embedUrl: 'https://www.youtube.com/embed/q5ujDgK0MBQ',
	},
	{
		label: 'Parte <strong>3</strong>',
		title: '¡Todo para tu Oficina 2018!',
		description:
			'Tienda de productos de oficina: Pedidos.com. Sin duda, ahorra tiempo, dinero y esfuerzo. Empresa 100% mexicana.',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/comerciales/p3.jpg',
		color: '#F60EC233',
		col: 4,
		opacity: 1,
		embedUrl: 'https://www.youtube.com/embed/FNvBYBeuXKI',
	},
	{
		label: 'Video comenrcial <strong>2017</strong>',
		title: '¡Todo para tu Oficina!',
		description:
			'Pedidos.com te presenta este 2017 los videos comerciales realizados con el propósito de mencionarte por que somos la mejor opción para ti. ¡Te invitamos a verlos todos!',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/comerciales/fit_v2.jpg',
		color: '#ffcc80c4',
		col: 12,
		embedUrl: 'https://www.youtube.com/embed/EJud9aHyQho',
	},
	{
		label: 'Comercial <strong>2016</strong>',
		title: 'Todo para tu espacio de trabajo 2016',
		description:
			'Pedidos.com. Sin duda, ahorra tiempo, dinero y esfuerzo. Empresa 100% mexicana de productos para oficina. Comercial producido por Adrenorama.',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/comerciales/2016.jpg',
		color: '#5C6BC0',
		col: 4,
		embedUrl: 'https://www.youtube.com/embed/_l6ypsMYaO4',
	},
	{
		label: 'Comercial <strong>2013</strong>',
		title: 'Pedidos.com 2013',
		description:
			'Pedidos.com es simplemente más barato que las tiendas. Empresa 100% mexicana de productos de oficina con envíos a cualquier parte de la República Mexicana. Comercial producido por Adrenorama.',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/comerciales/2013.jpg',
		color: '#FFB74D',
		col: 4,
		embedUrl: 'https://www.youtube.com/embed/hMI2BZTVODQ',
	},
	{
		label: '<strong>Proceso</strong> de orden',
		title: 'Procesamiento de Orden',
		description:
			'Te recomendamos ver este video para que vean como procesamos tus pedidos además de mostrar parte de nuestro almacén.',
		img: 'https://pedidos.com/include/css/responsivo/imagenes/comerciales/pro.jpg',
		color: '#5C6BC0',
		col: 4,
		embedUrl: 'https://www.youtube.com/embed/wEnkKwDbTpw',
	},
];

const socialNetworks = [
	{
		url: 'https://www.facebook.com/pedidoscom',
		icon: 'fab fa-facebook-f',
	},
	{
		url: 'https://twitter.com/pedidos_com',
		icon: 'fab fa-twitter',
	},
	{
		url: 'https://plus.google.com/+pedidoscom',
		icon: 'fab fa-google-plus-g',
	},
	{
		url: 'https://www.instagram.com/pedidoscom/',
		icon: 'fab fa-instagram',
	},
];

const VideosComerciales = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(null);

	const next = () => {
		if (selectedIndex + 1 < comerciales.length) {
			setSelectedIndex(selectedIndex + 1);
		} else {
			setSelectedIndex(0);
		}
	};

	const prev = () => {
		if (selectedIndex - 1 >= 0) {
			setSelectedIndex(selectedIndex - 1);
		} else {
			setSelectedIndex(comerciales.length - 1);
		}
	};

	const select = (index) => {
		setSelectedIndex(index);
	};

	return (
		<Layout title='Pedidos.com | Comerciales'>
			<Box py={10}>
				<Container maxWidth='lg'>
					<Typography
						variant='h5'
						component='h1'
						fontSize={21}
						fontWeight={400}
						letterSpacing='-1px'
						textAlign='center'
						gutterBottom>
						Echa un vistazo a{' '}
						<span style={{ color: '#eb7f36' }}>
							nuestros videos comerciales
						</span>{' '}
						¡No puedes perdértelos!
					</Typography>

					<Box mt={3}>
						<Grid spacing={4} container>
							{comerciales.map((comercial, i) => (
								<Grid key={comercial.label} xs={12} sm={comercial.col} item>
									<Box
										onClick={() => select(i)}
										sx={{
											cursor: 'pointer',
											position: 'relative',
											overflow: 'hidden',

											'&:hover': {
												'& img': {
													opacity: 1,
												},
												'& .overlay': {
													opacity: 0,
												},
											},
										}}>
										<Box
											component='img'
											src={comercial.img}
											alt={comercial.title}
											maxWidth='100%'
											sx={{
												opacity: 0.5,
												transition: 'all .5s ease-in-out',
											}}
										/>
										<Box
											className='overlay'
											sx={{
												position: 'absolute',
												width: '100%',
												top: 0,
												left: 0,
												bottom: '6px',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												backgroundColor: comercial.color,
												opacity: comercial.opacity ?? 0.8,
												transition: 'all .5s ease-in-out',
											}}>
											<Typography
												fontSize={{ xs: 18, md: 24 }}
												color={comercial.titleColor ?? 'white'}
												textTransform='uppercase'
												letterSpacing={{ xs: 0, md: '5px' }}
												textAlign='center'
												dangerouslySetInnerHTML={{
													__html: comercial.label,
												}}
											/>
										</Box>
									</Box>
								</Grid>
							))}
						</Grid>
					</Box>
				</Container>
			</Box>

			<Modal
				open={selectedIndex !== null}
				onClose={() => setSelectedIndex(null)}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
				closeAfterTransition>
				<>
					<Container
						maxWidth='lg'
						sx={{
							px: '0!important',
							position: 'absolute' as 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							boxShadow: 24,
						}}>
						<Box bgcolor='white'>
							<Grid spacing={2} container>
								<Grid
									xs={12}
									md={0}
									pt={0}
									display={{ xs: 'block', md: 'none' }}
									item>
									<Box display='flex'>
										<IconButton
											aria-label='close'
											sx={{
												ml: 'auto',
											}}
											onClick={() => setSelectedIndex(null)}>
											<CloseIcon />
										</IconButton>
									</Box>
								</Grid>

								<Grid xs={12} md={8} sx={{ pt: '0!important' }} item>
									<iframe
										width='100%'
										height='426'
										src={
											selectedIndex
												? comerciales[selectedIndex].embedUrl
												: undefined
										}
										title='YouTube video player'
										frameBorder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
									/>
								</Grid>

								<Grid xs={12} md={4} pt='0rem!important' item>
									<Box display='flex' flexDirection='column' p={2}>
										<Box display={{ xs: 'none', md: 'flex' }}>
											<IconButton
												aria-label='close'
												sx={{
													ml: 'auto',
												}}
												onClick={() => setSelectedIndex(null)}>
												<CloseIcon />
											</IconButton>
										</Box>

										<Typography
											id='modal-modal-title'
											variant='h6'
											component='h2'
											fontSize={30}
											fontWeight={700}
											mb={2}>
											{comerciales[selectedIndex]?.title ?? ''}
										</Typography>

										<Typography id='modal-modal-description' sx={{ mt: 2 }}>
											{comerciales[selectedIndex]?.description ?? ''}
										</Typography>

										<Box
											pt={4}
											display='flex'
											alignItems='center'
											justifyContent='center'
											gap={1}>
											{socialNetworks.map((sn) => (
												<Link
													key={sn.url}
													href={sn.url}
													underline='none'
													target='_blank'>
													<IconButton
														aria-label='close'
														sx={{
															border: '4px solid white',
															backgroundColor: '#ccc',
															color: 'white',
															width: 50,
															height: 50,
															fontSize: 16,

															'&:hover': {
																borderColor: '#ccc',
																backgroundColor: '#ccc',
															},
														}}>
														<i className={sn.icon} aria-hidden='true' />
													</IconButton>
												</Link>
											))}
										</Box>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Container>

					<Box>
						<IconButton
							aria-label='close'
							sx={{
								position: 'absolute',
								left: '.5rem',
								top: '50%',
								transform: 'translateY(-50%)',
								zIndex: 1301,
							}}
							onClick={() => prev()}>
							<ArrowLeftIcon fontSize='large' sx={{ color: 'white' }} />
						</IconButton>

						<IconButton
							aria-label='close'
							sx={{
								position: 'absolute',
								right: '.5rem',
								top: '50%',
								transform: 'translateY(-50%)',
								zIndex: 1301,
							}}
							onClick={() => next()}>
							<ArrowRightIcon fontSize='large' sx={{ color: 'white' }} />
						</IconButton>
					</Box>
				</>
			</Modal>
		</Layout>
	);
};

export default VideosComerciales;
