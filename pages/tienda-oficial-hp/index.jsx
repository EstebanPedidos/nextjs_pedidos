import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

// import required modules
import { Layout } from 'layout/Layout';
import HPSearchScript from 'components/HPSearchScript';
import HPPcSelectorScript from 'components/HPPcSelectorScript';
import HeroImage from 'components/HeroImage';
import CategoryCarousel from 'components/CategoryCarousel';

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
		<Layout title='Tienda Oficial HP en Pedidos.com'>
			<HeroImage
				src='https://pedidos.com/myfotos/pedidos-com/pagina/Tienda-HP/tiendaoftxt.jpg'
				alt='Tienda oficial HP'
			/>

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
						<CategoryCarousel productCategories={productCategories} />
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
							T??ners originales HP
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
									<strong>Env??os express CDMX</strong> 3 horas o menos
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
				<Container maxWidth='xl'>
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
								store es l??der en este tema desde que se fabricaron las primeras
								computadoras. Ya sea laptop o de escritorio, es muy distinta la
								forma en la que la usa cada persona. Escolar, empresarial,
								gaming, o trabajos especializados como arquitectura, dise??o o
								ingenier??a que requieren caracter??sticas espec??ficas, siempre se
								busca algo en especial. Lo mejor es buscar en tiendas dedicadas
								es donde se pueda encontrar muchas m??s variedades como HP store
								M??xico. En una tienda HP especializada se puede encontrar todo
								lo necesario para una oficina completa que tenga las necesidades
								espec??ficas para el tipo de trabajo que se realiza. No es
								necesario buscar en diferentes lugares y se sabe que la calidad
								y garant??a ser?? excelente en todo momento. Desde los mejores
								dise??os, hasta desempe??o ??ptimo, y bater??a duradera, siempre
								ser??n productos de gran calidad.
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
								<Link
									underline='none'
									className='c-blue'
									href='/busquedas.asp?/TECNOLOGIA/COMPUTO/LAPTOPS&m=HP'
									target='_blank'>
									laptops HP
								</Link>{' '}
								son la mejor opci??n para el trabajo de oficina, sobre todo ahora
								que la mayor??a del trabajo puede realizarse tambi??n en casa. Es
								una marca considerada de un alto est??ndar de calidad desde hace
								mucho tiempo, y con precios muy adecuados a las necesidades que
								se requieren. Dentro de los principales beneficios que se pueden
								encontrar en una laptop HP, es sin duda, su desempe??o. No
								solamente para trabajos especializados, como es el caso de
								arquitectos y dise??adores, para todos es importante que la
								principal herramienta de trabajo funcione adecuadamente en todo
								momento. Cuentan con los mejores procesadores Intel y AMD, dando
								opciones seg??n las necesidades del trabajo. Desde 4 GB de RAM
								para una computadora para uso personal o hasta 8 GB y 12 GB de
								memoria RAM para el trabajo o gaming, son siempre la mejor
								opci??n cuando se busca el mejor desempe??o y que en ning??n
								momento se sienta sobrecalentar el equipo. Un ejemplo es la{' '}
								<Link
									underline='none'
									className='c-blue'
									href='/articulos/laptop-hp-envy-x360-convertible-15-ed1501la-procesador-intel-core-i5-ram-12-gb-ssd-512-gb-windows-10-home'
									target='_blank'>
									HP Envy X360
								</Link>
								, que tiene 12 GB de memoria RAM y un procesador Intel Core i5
								de onceava generaci??n. Con su pantalla de 15.6 pulgadas es
								perfecta para trabajos especializados y gaming. Tambi??n las
								laptops HP cuentan con bater??as de larga duraci??n, que hoy en
								d??a son indispensables para las videollamadas. Dependiendo del
								equipo, entre siete y nueve horas de carga y hasta cuatro a??os
								de duraci??n para estar en ??ptimo funcionamiento (m??s de mil
								cargas). Una larga vida en la bater??a es crucial para el tipo de
								trabajo h??brido que ha tenido un crecimiento exponencial en los
								??ltimos dos a??os. La laptop{' '}
								<Link
									underline='none'
									className='c-blue'
									href='articulos/laptop-hp-14-dk1015la-procesador-amd-athlon-3050u-ram-4-gb-ssd-256-gb-windows-10-home'
									target='_blank'>
									HP 14 DK1015LA
								</Link>{' '}
								tiene una larga duraci??n en su bater??a, adem??s de un precio muy
								adecuado para uso personal. Por otro lado, es tambi??n muy
								importante el dise??o. Aunque es subjetivo lo que le puede
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
								Las laptops HP tienen los mejores dise??os y m??s en tendencia. La{' '}
								<Link
									underline='none'
									className='c-blue'
									href='/articulos/laptop-hp-spectre-x360-convertible-13-aw0001la-intel-core-i7-ram-de-8-gb-ssd-512-gb-mas-32-gb'
									target='_blank'>
									HP Spectre X360
								</Link>{' '}
								puede voltearse para usarse como tablet y tiene el dise??o m??s
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
								tomar en cuenta el uso que se le dar?? para elegir la m??s
								adecuada a las necesidades que se tengan. Adem??s de sus
								funciones, igualmente se deben considerar los tipos de cartuchos
								que requieren, ya que habr?? que sustituirlos cuando se terminen.
								Una impresora puede ser de inyecci??n de tinta o l??ser, para lo
								que se requieren cartuchos de tinta o de t??ner respectivamente.
								En una tienda HP se pueden encontrar de todos los tipos de
								impresoras. Las impresoras l??ser son m??s recomendadas si s??lo se
								requiere imprimir texto, mientras que las de inyecci??n de tinta
								se consideran mejor para imprimir fotograf??as. Si no se requiere
								imprimir a color, el modelo de impresora multifuncional{' '}
								<Link
									underline='none'
									className='c-blue'
									href='/articulos/multifuncional-hp-mfp-137fnw-printer-laser-blanco-y-negro'
									target='_blank'>
									HP MFP 137FNW
								</Link>{' '}
								es una perfecta opci??n. Es de los modelos m??s econ??micos de
								impresora l??ser, por lo que es la m??s adecuada para imprimir
								documentos de texto en grandes cantidades y en poco tiempo. Al
								ser multifuncional, puede utilizarse para realizar fotocopias o
								escanear, de forma que se tiene todo un sistema de impresi??n en
								el mismo lugar. Si se requiere imprimir fotograf??as o documentos
								a color, un modelo m??s accesible es la impresora multifuncional{' '}
								<Link
									underline='none'
									className='c-blue'
									href='/articulos/multifuncional-hp-ink-tank-wireless-415-inyeccion-de-tinta-color'
									target='_blank'>
									HP Ink Tank Wireless 415
								</Link>
								. Es de inyecci??n de tinta y permite imprimir remotamente desde
								un dispositivo m??vil, de forma que no se requiere tener los
								documentos en una computadora. Igualmente el modelo{' '}
								<Link
									underline='none'
									className='c-blue'
									href='/articulos/multifuncional-hp-deskjet-ink-advantage-5275-inyeccion-de-tinta'
									target='_blank'>
									HP Deskjet Ink Advantage 5275
								</Link>
								, tiene estas funciones y es de inyecci??n de tinta, adem??s de
								tener impresi??n autom??tica a doble cara para ahorrar papel.
							</Typography>
						</Grid>
						<Grid xs={12} md={4} item>
							<Typography
								variant='h6'
								fontSize={15}
								sx={{ opacity: 0.7 }}
								gutterBottom>
								Pedidos.com: tu aliado en tecnolog??a para tu oficina y hogar{' '}
							</Typography>
							<Typography
								variant='body2'
								fontSize={13}
								sx={{ opacity: 0.7 }}
								textAlign='justify'
								fontWeight={500}>
								{' '}
								Cada vez m??s en los ??ltimos a??os, se ha tenido que armar un
								espacio para trabajo en casa. Un aliado para encontrar todos los
								art??culos de trabajo y oficina en un solo lugar ha sido
								Pedidos.com. Adem??s de todo lo necesario para tener una oficina
								completa, tiene la mejor tienda HP en M??xico. Adem??s de laptops
								baratas y de excelente calidad, tambi??n se puede encontrar en la
								HP store de Pedidos.com, una gran variedad de computadoras de
								escritorio, ya sea desktops All in One ???son m??s compactas y
								albergan todo en el monitor??? o desktops para oficina, y
								accesorios con todo lo necesario para cada tipo de trabajo.
								Muchas veces resulta m??s c??modo tener una estaci??n de escritorio
								para la laptop o tener m??s espacio en el monitor. En la tienda
								HP de Pedidos.com tambi??n se pueden encontrar monitores para PC
								de varios tama??os, de forma que se pueda tener el m??s c??modo y
								de mejor resoluci??n. Si HP no resulta ser una marca con la que
								se est?? familiarizado, en Pedidos.com se puede encontrar una
								secci??n de asistente virtual, donde se ingresan las necesidades
								que debe tener una laptop y se sugieren opciones adecuadas a
								esas necesidades. Se puede hacer con un experto o sin ??l, pero
								igualmente respondiendo una serie de preguntas sencillas y de
								forma interactiva para que al final sugiera la mejor opci??n
								seg??n las necesidades que se tienen para su uso. Una raz??n m??s
								para ser la mejor HP store M??xico.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
};

export default TiendaOficialHP;
