import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { styled } from '@mui/material/styles';

import { Layout } from '/layout/Layout';
import ArrowsContainer from 'components/ArrowsContainer';
import NumberedList from 'components/NumberedList';
import AnimatedFigures from 'components/AnimatedFigures';
import Link from 'components/Link';

const brands = [
	{
		label: 'Canon',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/reciclaje/brands/canon.webp',
	},
	{
		label: 'HP',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/reciclaje/brands/hp.webp',
	},
	{
		label: 'Brother',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/reciclaje/brands/brother.webp',
	},
];

const figuresHero = [
	'https://pedidos.com/myfotos/pedidos-com/pagina/planet-partners/leave1.png',
	'https://pedidos.com/myfotos/pedidos-com/pagina/planet-partners/leave1.png',
	'https://pedidos.com/myfotos/pedidos-com/pagina/planet-partners/leave1.png',
];

const figuresHowTo = [
	'https://pedidos.com/myfotos/pedidos-com/pagina/planet-partners/leave3.png',
	'https://pedidos.com/myfotos/pedidos-com/pagina/planet-partners/leave1.png',
	'https://pedidos.com/myfotos/pedidos-com/pagina/planet-partners/leave2.png',
];

const howToPack = [
	{
		label:
			'Colocar varios cartuchos en una caja de cartón corrugado y en buen estado',
		tooltip:
			'Sin etiquetas de envíos anteriores y contener 5 cartuchos como mínimo.',
	},
	{
		label:
			'Los cartuchos de tinta se pueden incluir en la(s) caja(s) de los cartuchos de tóner.',
		tooltip: 'La recolección es de 5 o más cartuchos',
	},
	{
		label: 'Cada caja debe estar sellada con cinta adhesiva resistente',
		tooltip:
			'No usar hilo, envoltorios de papel, o celofán, ni cajas de cartón delgado',
	},
	{
		label: 'Las cajas no deben exceder el límite de contorno 330 cm',
		tooltip: 'No deben exceder el límite de contorno',
	},
	{
		label:
			'Podrá enviar grupos de 5 cajas o más flejadas siempre y cuando no rebasen los los 200 kg.',
		tooltip: 'no sobrepasen las dimensiones ni el peso mencionado',
	},
];

const CustomButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	padding: '40px 80px',
	border: 0,
	lineHeight: 1.5,
	backgroundColor: '#0199d5',
	fontSize: 20,
	fontWeight: 500,
	borderColor: '#0199d5',
	color: 'white',
	'&:hover': {
		backgroundColor: '#00b2ff',
		boxShadow: '3px 3px 9px 1px #7e93eb6b',
		borderColor: '#00b2ff',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#00b2ff',
		borderColor: '#00b2ff',
	},
	'&:focus': {
		boxShadow: '3px 3px 9px 1px #7e93eb6b',
	},
});

const ProgramaDeReciclaje = () => {
	return (
		<Layout title='¿Ya conoces el programa de reciclaje? | Pedidos.com | Pedidos.com'>
			<Box
				pt={8}
				position='relative'
				sx={{
					backgroundImage: {
						xs: 'inherit',
						md: 'url(https://pedidos.com/myfotos/pedidos-com/pagina/planet-partners/leaves.png)',
					},
					backgroundSize: '100%',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'top center',
				}}>
				<Container
					maxWidth={false}
					sx={{
						px: '6%!important',
					}}>
					<Grid container>
						<Grid xs={12} md={5} item>
							<Box pt={25}>
								<Typography
									letterSpacing={5}
									fontSize={19}
									fontWeight={300}
									textTransform='uppercase'
									color='#333'
									gutterBottom>
									Programa de reciclaje
								</Typography>
								<Typography
									variant='h1'
									fontSize={45}
									fontWeight={700}
									color='#333'
									mb={4}>
									Recicla tus cartuchos de tinta & tóner.
								</Typography>
								<Typography fontSize={22} color='#555' mb={2}>
									Ayudemos a impulsar un cambio medioambiental positivo.
								</Typography>

								<Link href='#requisitos' underline='none'>
									<CustomButton>
										Recolección
										<Box component={ExpandCircleDownOutlinedIcon} ml={1} />
									</CustomButton>
								</Link>
							</Box>
						</Grid>
						<Grid xs={12} md={7} item>
							<Box
								maxWidth='100%'
								component='img'
								px={5}
								dataSrc='https://pedidos.com/myfotos/pedidos-com/pagina/reciclaje/cartuchos_originales_reciclaje.webp'
								alt='Programa de reciclaje de cartuchos originales, tintas &amp; tóners'
								src='https://pedidos.com/myfotos/pedidos-com/pagina/reciclaje/cartuchos_originales_reciclaje.webp'
							/>
						</Grid>
					</Grid>
				</Container>
				<AnimatedFigures figures={figuresHero} />
			</Box>

			<Box py={10} bgcolor='#F6F7F9'>
				<Container maxWidth='xl'>
					<Typography
						variant='h3'
						textAlign='center'
						fontSize={35}
						color='#333'
						sx={{
							mb: 5,
						}}
						fontWeight={700}>
						Juntos, estamos reciclando para un mundo mejor
					</Typography>

					<Grid container>
						{brands.map((brand) => (
							<Grid key={brand.label} xs={12} md={4} item>
								<Box textAlign='center'>
									<Box
										component='img'
										data-src={brand.img}
										alt={brand.label}
										src={brand.img}
									/>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box
				id='requisitos'
				pt={15}
				position='relative'
				sx={{
					backgroundImage: {
						xs: 'inherit',
						md: 'url(https://pedidos.com/myfotos/pedidos-com/pagina/planet-partners/leaves2.png)',
					},
					backgroundSize: '100%',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'top center',
				}}>
				<Container maxWidth='lg'>
					<Grid container>
						<Grid xs={12} md={7} item>
							<Box py={8} px={4}>
								<Typography
									fontSize={35}
									color='#333'
									fontWeight={700}
									gutterBottom>
									¿Cómo pedir la recolección?
								</Typography>

								<Divider sx={{ my: 2.5 }} />

								<Typography
									fontSize={28}
									color='#333'
									fontWeight={500}
									gutterBottom>
									El proceso es totalmente gratuito.
								</Typography>

								<Divider sx={{ my: 2.5 }} />

								<Typography
									fontSize={18}
									color='#555'
									fontWeight={700}
									gutterBottom>
									Por el momento solo aplica dentro de la CDMX.
								</Typography>

								<Typography fontSize={18} color='#555' gutterBottom>
									Al momento de alguna entrega de Pedidos.com podrás solicitar
									la recolección de los cartuchos, solo debes entregarlos
									empacados. Nosotros nos encargamos de hacerlo llegar a las
									marcas.
								</Typography>
							</Box>
						</Grid>

						<Grid xs={12} md={5} item>
							<Box position='relative' mx={4}>
								<Box
									sx={{
										position: 'absolute',
										backgroundColor: '#0199d5',
										width: '90%',
										pt: '105%',
										top: '-2em',
										right: '-3em',
										borderRadius: '4px',
										zIndex: 0,
									}}
								/>
								<Box
									component='img'
									p={2}
									mb={2}
									maxWidth='100%'
									data-src='https://pedidos.com/myfotos/pedidos-com/pagina/reciclaje/recicla-para-un-futuro.webp'
									alt='Programa de reciclaje, para un mundo mejor'
									src='https://pedidos.com/myfotos/pedidos-com/pagina/reciclaje/recicla-para-un-futuro.webp'
									position='relative'
									zIndex={1}
								/>

								<Typography variant='body2'>
									El programa de recolección busca trabajar por un futuro mejor.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
				<AnimatedFigures figures={figuresHowTo} />
			</Box>

			<ArrowsContainer>
				<Container maxWidth='lg'>
					<Typography
						variant='h3'
						textAlign='center'
						fontSize={35}
						color='#333'
						sx={{
							mb: 15,
						}}
						fontWeight={700}>
						¿Cómo empacar los cartuchos originales de tintas & tóners?
					</Typography>

					<Grid container>
						<Grid xs={12} md={5} item>
							<Box
								component='img'
								p={2}
								mb={2}
								maxWidth='100%'
								data-src='https://pedidos.com/myfotos/pedidos-com/pagina/planet-partners/empaque_cartuchos_originales.png'
								alt='Empaque de cartuchos originales, Programa de reciclaje'
								src='https://pedidos.com/myfotos/pedidos-com/pagina/planet-partners/empaque_cartuchos_originales.png'
							/>
							<Typography>
								El Programa de reciclaje es para uso exclusivo de cartuchos de
								tintas & tóners.
							</Typography>
						</Grid>
						<Grid xs={12} md={7} item>
							<NumberedList items={howToPack} />
						</Grid>
					</Grid>
				</Container>
			</ArrowsContainer>

			<Box py={15}>
				<Container>
					<Typography
						variant='h3'
						textAlign='center'
						fontSize={40}
						color='#333'
						sx={{
							mb: 3,
						}}
						fontWeight={700}>
						Requisitos del servicio
					</Typography>

					<Typography
						textAlign='center'
						fontSize={18}
						fontWeight={500}
						color='#555'
						mb={6}>
						Pedidos.com no podrá recoger los cartuchos si no cumplen las
						especificaciones.
					</Typography>
				</Container>
			</Box>
		</Layout>
	);
};
export default ProgramaDeReciclaje;
