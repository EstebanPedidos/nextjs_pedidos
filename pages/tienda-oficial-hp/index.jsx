import Image from 'next/image';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Layout } from 'layout/Layout';
import HPSearchScript from 'components/HPSearchScript';
import HPPcSelectorScript from 'components/HPPcSelectorScript';

const productCategories = [
	{
		label: 'Laptops para el hogar',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/Tienda-HP/lhogar.webp',
		url: '/busquedas.asp?query=PDIR-LAP-&m=HP&d=true',
	},
	{
		label: 'Laptops empresariales',
		img: 'https://pedidos.com/myfotos/Pedidos-com/pagina/Tienda-HP/lempresarial.webp',
		url: '/busquedas.asp?query=HP-lap-&d=true',
	},
	{
		label: 'Zona Gaming',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/Tienda-HP/gaming1.webp',
		url: '/busquedas.asp?query=PDIR-LAP-&m=HP&d=true',
	},
	{
		label: 'Accesorios',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/Tienda-HP/accesorios.webp',
		url: '/busquedas.asp?query=PDIR-LAP-&m=HP&d=true',
	},
	{
		label: 'Desktops hogar',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/Tienda-HP/dhogar.webp',
		url: '/busquedas.asp?query=PDIR-LAP-&m=HP&d=true',
	},
	{
		label: 'Desktops empresariales',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/Tienda-HP/dempresarial.webp',
		url: '/busquedas.asp?query=PDIR-LAP-&m=HP&d=true',
	},
	{
		label: 'Impresoras empresariales',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/Tienda-HP/iempresarial.webp',
		url: '/busquedas.asp?query=PDIR-LAP-&m=HP&d=true',
	},
	{
		label: 'Impresoras para el hogar',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/Tienda-HP/ihogar.webp',
		url: '/busquedas.asp?query=PDIR-LAP-&m=HP&d=true',
	},
];

const TiendaOficialHP = () => {
	return (
		<Layout>
			<Head>
				<link
					href='https://e-commerce-online-pub.ext.hp.com/main.css'
					rel='stylesheet'
				/>
			</Head>

			<Box height='27vw' position='relative'>
				<Image
					src={require('../../public/images/landing/tiendaoftxt.jpg')}
					alt='Tienda oficial HP'
					layout='fill'
					priority
				/>
			</Box>

			<Box py={3}>
				<HPPcSelectorScript />
			</Box>

			<Divider
				variant='middle'
				sx={{ borderColor: 'rgba(0, 0, 0, 0.075)', borderBottomWidth: '2px' }}
			/>

			<Box py={5}>
				<Container>
					<Typography
						variant='h3'
						fontSize='2rem'
						fontWeight={700}
						color='#333'>
						Lo mejor de HP para tu negocio y hogar
					</Typography>

					<Box>
						<Swiper
							pagination={{
								clickable: true,
							}}
							slidesPerView={1.5}
							spaceBetween={20}
							breakpoints={{
								768: {
									slidesPerView: 4,
									spaceBetween: 40,
								},
								1024: {
									slidesPerView: 5,
									spaceBetween: 50,
								},
							}}
							className='mySwiper'>
							{productCategories.map((category) => (
								<SwiperSlide key={category.label}>
									<Box component='a' href={category.url}>
										<Box
											sx={{
												'&>img': {
													width: '100%',
													position: 'relative',
													display: 'block',
													margin: '0 auto',
												},
											}}>
											<img src={category.img} alt={category.label} />
										</Box>
										<Typography
											textAlign='center'
											color='text.secondary'
											fontWeight='500'>
											{category.label}
										</Typography>
									</Box>
								</SwiperSlide>
							))}
						</Swiper>
					</Box>
				</Container>
			</Box>

			<Divider
				variant='middle'
				sx={{ borderColor: 'rgba(0, 0, 0, 0.075)', borderBottomWidth: '2px' }}
			/>

			<Container maxWidth='md' sx={{ py: 8 }}>
				<Box mb={10}>
					<HPSearchScript />
				</Box>
				<Grid spacing={2} container>
					<Grid xs={12} md={6} item>
						<Button
							variant='outlined'
							sx={{
								height: 45,
								bgcolor: 'transparent',
								borderColor: '#d7dded',
								color: '#9ea3a9',
								fontSize: 14,
								fontWeight: 400,
								'&:hover': {
									borderColor: '#707e8c',
									color: '#707e8c',
								},
							}}
							fullWidth>
							Tintas originales HP
						</Button>
					</Grid>
					<Grid xs={12} md={6} item>
						<Button
							variant='outlined'
							sx={{
								height: 45,
								bgcolor: 'transparent',
								borderColor: '#d7dded',
								color: '#9ea3a9',
								fontWeight: 400,
								fontSize: 14,
								'&:hover': {
									borderColor: '#707e8c',
									color: '#707e8c',
								},
							}}
							fullWidth>
							Tóners originales HP
						</Button>
					</Grid>
				</Grid>
			</Container>

			<Divider
				variant='middle'
				sx={{ borderColor: 'rgba(0, 0, 0, 0.075)', borderBottomWidth: '2px' }}
			/>

			<Box py={5} display={{ xs: 'none', md: 'block' }}>
				<Container maxWidth='md'>
					<Box display='flex' gap={6}>
						<Box display='flex' gap={3}>
							<Box>
								<LocalShippingOutlinedIcon fontSize='large' color='#333' />
							</Box>
							<Box>
								<Typography variant='body2' fontWeight={500} color='#333'>
									<strong>Envíos express CDMX</strong> 3 horas o menos
								</Typography>
							</Box>
						</Box>
						<Box display='flex' gap={3}>
							<Box>
								<CreditCardOutlinedIcon fontSize='large' />
							</Box>
							<Box>
								<Typography variant='body2' fontWeight={500} color='#333'>
									<strong>Paga al recibir</strong> CDMX y Guadalajara.
								</Typography>
							</Box>
						</Box>
						<Box display='flex' gap={3}>
							<Box>
								<Inventory2OutlinedIcon fontSize='large' />
							</Box>
							<Box>
								<Typography variant='body2' fontWeight={500} color='#333'>
									<strong>Programa tu entrega</strong> CDMX y Guadalajara.
								</Typography>
							</Box>
						</Box>
						<Box display='flex' gap={3}>
							<Box>
								<HeadsetMicOutlinedIcon fontSize='large' />
							</Box>
							<Box>
								<Typography variant='body2' fontWeight={500} color='#333'>
									<strong>Servicio totalmente</strong> Personalizado.
								</Typography>
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>

			<Divider
				variant='middle'
				sx={{ borderColor: 'rgba(0, 0, 0, 0.075)', borderBottomWidth: '2px' }}
			/>

			<Box py={5} opacity={0.8}>
				<Container maxWidth='lg'>
					<Grid spacing={4} container>
						<Grid xs={12} item>
							<Typography
								variant='h6'
								fontSize={15}
								sx={{ opacity: 0.7 }}
								gutterBottom>
								Tienda HP en Pedidos.com
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								sx={{ opacity: 0.7 }}
								textAlign='justify'
								fontWeight={500}>
								Las necesidades y preferencias que cada persona busca en una
								computadora personal o desktop, siempre son distintas. La HP
								store es líder en este tema desde que se fabricaron las primeras
								computadoras. Ya sea laptop o de escritorio, es muy distinta la
								forma en la que la usa cada persona. Escolar, empresarial,
								gaming, o trabajos especializados como arquitectura, diseño o
								ingeniería que requieren características específicas, siempre se
								busca algo en especial. Lo mejor es buscar en tiendas dedicadas
								es donde se pueda encontrar muchas más variedades como HP store
								México. En una tienda HP especializada se puede encontrar todo
								lo necesario para una oficina completa que tenga las necesidades
								específicas para el tipo de trabajo que se realiza. No es
								necesario buscar en diferentes lugares y se sabe que la calidad
								y garantía será excelente en todo momento. Desde los mejores
								diseños, hasta desempeño óptimo, y batería duradera, siempre
								serán productos de gran calidad.
							</Typography>
						</Grid>
						<Grid xs={12} md={4} item>
							<Typography
								variant='h6'
								fontSize={15}
								sx={{ opacity: 0.7 }}
								gutterBottom>
								Laptops HP para tu oficina
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								sx={{ opacity: 0.7 }}
								textAlign='justify'
								fontWeight={500}>
								Las{' '}
								<a
									className='c-blue'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS&m=HP'
									target='_blank'>
									laptops HP
								</a>{' '}
								son la mejor opción para el trabajo de oficina, sobre todo ahora
								que la mayoría del trabajo puede realizarse también en casa. Es
								una marca considerada de un alto estándar de calidad desde hace
								mucho tiempo, y con precios muy adecuados a las necesidades que
								se requieren. Dentro de los principales beneficios que se pueden
								encontrar en una laptop HP, es sin duda, su desempeño. No
								solamente para trabajos especializados, como es el caso de
								arquitectos y diseñadores, para todos es importante que la
								principal herramienta de trabajo funcione adecuadamente en todo
								momento. Cuentan con los mejores procesadores Intel y AMD, dando
								opciones según las necesidades del trabajo. Desde 4 GB de RAM
								para una computadora para uso personal o hasta 8 GB y 12 GB de
								memoria RAM para el trabajo o gaming, son siempre la mejor
								opción cuando se busca el mejor desempeño y que en ningún
								momento se sienta sobrecalentar el equipo. Un ejemplo es la{' '}
								<a
									className='c-blue'
									href='/articulos/laptop-hp-envy-x360-convertible-15-ed1501la-procesador-intel-core-i5-ram-12-gb-ssd-512-gb-windows-10-home'
									target='_blank'>
									HP Envy X360
								</a>
								, que tiene 12 GB de memoria RAM y un procesador Intel Core i5
								de onceava generación. Con su pantalla de 15.6 pulgadas es
								perfecta para trabajos especializados y gaming. También las
								laptops HP cuentan con baterías de larga duración, que hoy en
								día son indispensables para las videollamadas. Dependiendo del
								equipo, entre siete y nueve horas de carga y hasta cuatro años
								de duración para estar en óptimo funcionamiento (más de mil
								cargas). Una larga vida en la batería es crucial para el tipo de
								trabajo híbrido que ha tenido un crecimiento exponencial en los
								últimos dos años. La laptop{' '}
								<a
									className='c-blue'
									href='articulos/laptop-hp-14-dk1015la-procesador-amd-athlon-3050u-ram-4-gb-ssd-256-gb-windows-10-home'
									target='_blank'>
									HP 14 DK1015LA
								</a>{' '}
								tiene una larga duración en su batería, además de un precio muy
								adecuado para uso personal. Por otro lado, es también muy
								importante el diseño. Aunque es subjetivo lo que le puede
								agradar a cada persona, es algo que se considera a la hora de
								una compra, sobre todo de una herramienta que se usa
								diariamente.
							</Typography>
						</Grid>
						<Grid xs={12} md={4} item>
							<Typography
								variant='body2'
								fontSize={13}
								sx={{ opacity: 0.7 }}
								textAlign='justify'
								fontWeight={500}>
								Las laptops HP tienen los mejores diseños y más en tendencia. La{' '}
								<a
									className='c-blue'
									href='/articulos/laptop-hp-spectre-x360-convertible-13-aw0001la-intel-core-i7-ram-de-8-gb-ssd-512-gb-mas-32-gb'
									target='_blank'>
									HP Spectre X360
								</a>{' '}
								puede voltearse para usarse como tablet y tiene el diseño más
								innovador en las dos de sus formas.
							</Typography>
							<Typography
								variant='h6'
								fontSize={15}
								sx={{ opacity: 0.7 }}
								gutterBottom>
								Impresoras HP ideales para oficina y hogar
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								sx={{ opacity: 0.7 }}
								textAlign='justify'
								fontWeight={500}>
								{' '}
								Al igual de las laptops, para hablar de impresoras es importante
								tomar en cuenta el uso que se le dará para elegir la más
								adecuada a las necesidades que se tengan. Además de sus
								funciones, igualmente se deben considerar los tipos de cartuchos
								que requieren, ya que habrá que sustituirlos cuando se terminen.
								Una impresora puede ser de inyección de tinta o láser, para lo
								que se requieren cartuchos de tinta o de tóner respectivamente.
								En una tienda HP se pueden encontrar de todos los tipos de
								impresoras. Las impresoras láser son más recomendadas si sólo se
								requiere imprimir texto, mientras que las de inyección de tinta
								se consideran mejor para imprimir fotografías. Si no se requiere
								imprimir a color, el modelo de impresora multifuncional{' '}
								<a
									className='c-blue'
									href='/articulos/multifuncional-hp-mfp-137fnw-printer-laser-blanco-y-negro'
									target='_blank'>
									HP MFP 137FNW
								</a>{' '}
								es una perfecta opción. Es de los modelos más económicos de
								impresora láser, por lo que es la más adecuada para imprimir
								documentos de texto en grandes cantidades y en poco tiempo. Al
								ser multifuncional, puede utilizarse para realizar fotocopias o
								escanear, de forma que se tiene todo un sistema de impresión en
								el mismo lugar. Si se requiere imprimir fotografías o documentos
								a color, un modelo más accesible es la impresora multifuncional{' '}
								<a
									className='c-blue'
									href='/articulos/multifuncional-hp-ink-tank-wireless-415-inyeccion-de-tinta-color'
									target='_blank'>
									HP Ink Tank Wireless 415
								</a>
								. Es de inyección de tinta y permite imprimir remotamente desde
								un dispositivo móvil, de forma que no se requiere tener los
								documentos en una computadora. Igualmente el modelo{' '}
								<a
									className='c-blue'
									href='/articulos/multifuncional-hp-deskjet-ink-advantage-5275-inyeccion-de-tinta'
									target='_blank'>
									HP Deskjet Ink Advantage 5275
								</a>
								, tiene estas funciones y es de inyección de tinta, además de
								tener impresión automática a doble cara para ahorrar papel.
							</Typography>
						</Grid>
						<Grid xs={12} md={4} item>
							<Typography
								variant='h6'
								fontSize={15}
								sx={{ opacity: 0.7 }}
								gutterBottom>
								Pedidos.com: tu aliado en tecnología para tu oficina y hogar{' '}
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								sx={{ opacity: 0.7 }}
								textAlign='justify'
								fontWeight={500}>
								{' '}
								Cada vez más en los últimos años, se ha tenido que armar un
								espacio para trabajo en casa. Un aliado para encontrar todos los
								artículos de trabajo y oficina en un solo lugar ha sido
								Pedidos.com. Además de todo lo necesario para tener una oficina
								completa, tiene la mejor tienda HP en México. Además de laptops
								baratas y de excelente calidad, también se puede encontrar en la
								HP store de Pedidos.com, una gran variedad de computadoras de
								escritorio, ya sea desktops All in One —son más compactas y
								albergan todo en el monitor— o desktops para oficina, y
								accesorios con todo lo necesario para cada tipo de trabajo.
								Muchas veces resulta más cómodo tener una estación de escritorio
								para la laptop o tener más espacio en el monitor. En la tienda
								HP de Pedidos.com también se pueden encontrar monitores para PC
								de varios tamaños, de forma que se pueda tener el más cómodo y
								de mejor resolución. Si HP no resulta ser una marca con la que
								se está familiarizado, en Pedidos.com se puede encontrar una
								sección de asistente virtual, donde se ingresan las necesidades
								que debe tener una laptop y se sugieren opciones adecuadas a
								esas necesidades. Se puede hacer con un experto o sin él, pero
								igualmente respondiendo una serie de preguntas sencillas y de
								forma interactiva para que al final sugiera la mejor opción
								según las necesidades que se tienen para su uso. Una razón más
								para ser la mejor HP store México.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default TiendaOficialHP;
