import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { Layout } from 'layout/Layout';
import MSIBanner from 'components/MSIBanner';
import Link from 'components/Link';

const shippingTips = [
	{
		label: 'Paga al recibir  CDMX y Guadalajara*  ',
		description: 'Tus pedidos con tarjeta',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/home19/pp/paga-recibe.svg',
	},
	{
		label: 'Programa tu entrega',
		description: 'Pide el día y el horario',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/home19/pp/proe.svg',
	},
	{
		label: 'Entrega Express CDMX*',
		description: 'Pide y ahorras tiempo',
		img: 'https://pedidos.com/myfotos/pedidos-com/pagina/home19/pp/pe.svg',
	},
];

const Hotsale = () => {
	return (
		<Layout title='Hotsale 2022'>
			<Box
				sx={{
					backgroundImage:
						'url(https://pedidos.com/myfotos/pedidos-com/pagina/hotsale-2021/back-hotsale.jpg)',
					backgroundSize: 'cover',
				}}>
				<Container maxWidth='lg'>
					<Box
						component='img'
						src='https://pedidos.com/myfotos/pedidos-com/pagina/hotsale-2021/hot-sale2.png'
					/>

					<Typography fontSize={32} fontWeight={700}>
						¡Espéralo!
						<br />
						Hot Sale 2023
					</Typography>
				</Container>
			</Box>

			<Divider sx={{ mx: 5, my: 5, borderBottom: '2px solid #0000000d' }} />

			<Box py={1}>
				<Container maxWidth='lg'>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='space-between'>
						<Typography fontSize={18} fontWeight={500}>
							¿Quieres recibir ofertas exclusivas del Hot Sale?
						</Typography>

						<Button
							variant='contained'
							size='small'
							sx={{
								fontSize: 15,
								fontWeight: 600,
								height: 42,
								px: 3,
								boxShadow: '1px -1px 13px 0px rgb(0 0 0 / 20%)',
								background: 'linear-gradient(to top, #DE3E4A, #F47653)',

								'&:hover': {
									background: 'linear-gradient(to top, #F47653, #DE3E4A)',
								},
							}}>
							Recibir ofertas del Hot Sale <ArrowRightAltIcon />
						</Button>
					</Box>
				</Container>
			</Box>

			<Divider sx={{ mx: 5, my: 5, borderBottom: '2px solid #0000000d' }} />

			<Box py={1}>
				<Container maxWidth='lg'>
					<MSIBanner />
				</Container>
			</Box>

			<Box py={10}>
				<Grid spacing={5} justifyContent='center' container>
					{shippingTips.map((item, i) => (
						<Grid xs={12} sm={4} md={3} key={item.label} item>
							<Box
								display='flex'
								flexDirection='column'
								gap={2}
								alignItems='center'
								borderLeft={i > 0 ? '1px solid #e8e8e8' : undefined}>
								<img
									width={45}
									height={45}
									data-sizes='auto'
									src={item.img}
									data-src={item.img}
									alt={item.label}
								/>
								<Box>
									<Typography
										fontWeight={700}
										fontSize={14}
										color='#333'
										textAlign={{ sm: 'center' }}
										dangerouslySetInnerHTML={{
											__html: item.label,
										}}
										sx={{
											'& > span': {
												color: '#3655a5',
											},
										}}
									/>
									<Typography
										fontSize={14}
										color='#333'
										textAlign={{ sm: 'center' }}
										dangerouslySetInnerHTML={{
											__html: item.description,
										}}
									/>
								</Box>
							</Box>
						</Grid>
					))}
				</Grid>

				<Box display='flex' justifyContent='center' mt={4}>
					<Link href='/soho/politicas' underline='none' target='_blank'>
						<Button
							variant='text'
							sx={{
								textTransform: 'uppercase',
								color: '#777',
								letterSpacing: 2,
								fontSize: 13,
							}}>
							Consulta restricciones
						</Button>
					</Link>
				</Box>
			</Box>

			<Divider sx={{ borderBottom: '2px solid #00000018' }} />

			<Box py={10} bgcolor='#f2f3f9'>
				<Container maxWidth='lg'>
					<Typography variant='h6' fontSize={20} color='#555' mb={1}>
						Hot Sale 2022 México
					</Typography>
					<Typography variant='h6' fontSize={15} color='#555' mb={1}>
						Promociones Hot Sale 2022 para pequeñas empresas
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Cada año, se realizan algunas ventas especiales que ayudan a
						incentivar la economía, y que traen consigo una serie de descuentos
						y oportunidades únicas que se deben aprovechar, pues representan una
						opción de ahorro, sin embargo, hay que saber identificar las
						verdaderas ofertas y realizar compras informadas y seguras.{' '}
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Algunos de estos eventos se realizan de manera presencial y algunos
						otros se pueden aprovechar únicamente mediante las tiendas en línea,
						un ejemplo de este tipo de ventas especiales en México es el Hot
						Sale.
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						La primera vez que se realizó el Hot Sale fue en el año 2014 como
						una iniciativa para fomentar el comercio electrónico con promociones
						y precios únicos que se pueden adquirir solamente bajo el formato de
						consumo por internet en tiendas en línea.
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						7 años y una pandemia después, el Hot Sale 2022 se proyecta para ser
						uno de los más atractivos para los consumidores minoristas y
						mayoristas que buscarán aprovechar al máximo las oportunidades para
						adquirir sus productos al mejor precio.{' '}
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Las promociones del Hot Sale 2022 se podrán aprovechar del 23 al 31
						de mayo, será toda una semana en la que las empresas en línea
						ofertarán una gran cantidad de productos de todo tipo, desde
						alimentos o ropa hasta muebles y tecnología.{' '}
					</Typography>
					<Typography variant='h6' fontSize={15} color='#555' mb={1}>
						Promociones Hot Sale 2022 para pequeñas empresas
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Este tipo de eventos están enfocados principalmente en los
						consumidores minoristas, es decir, personas que no compran una gran
						cantidad de artículos, consumidores comunes.La realidad es que la
						mayoría de las tiendas normales no ofrecen oportunidades de compra a
						clientes que buscan adquirir más de un solo artículo, mucho menos
						ofertas adicionales durante días especiales como el Hot Sale.{' '}
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Sin embargo, pedidos.com es una tienda en línea que ha decidido
						romper con esta práctica para ofrecer promociones tanto para
						consumidores minoristas como mayoristas, con precios especiales para
						ambos casos, así, cualquier persona, pequeña o mediana empresa podrá
						disfrutar de este Hot Sale 2022.{' '}
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						En pedidos.com podrán encontrar todo lo necesario para empresas y
						oficinas, desde bolígrafos y folders hasta muebles, artículos de
						tlapalería e incluso tecnología.{' '}
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Por supuesto, las compras que deben realizar las pequeñas y medianas
						empresas son diferentes a las que realizaría un consumidor promedio,
						para equipar una oficina se necesitan sillas, escritorios,
						consumibles, impresoras,
						<Link
							underline='none'
							href='/categorias/tecnologia/computo/monitores'
							target='_blank'>
							{' '}
							monitores para PC
						</Link>{' '}
						y, claro, computadoras.
					</Typography>
					<Typography variant='h6' fontSize={15} color='#555' mb={1}>
						Oferta de laptops en el Hot Sale
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Las{' '}
						<Link
							underline='none'
							href='/categorias/tecnologia/computo/laptops'
							target='_blank'>
							computadoras, laptop
						</Link>{' '}
						se han convertido en una de las principales herramientas para los
						trabajadores, un elemento que no puede faltar en ninguna oficina del
						mundo. Contar con computadoras personales para los colaboradores en
						una oficina representa una oportunidad de crecimiento pues su
						principal ventaja es, por supuesto, la portabilidad. Desde{' '}
						<Link
							underline='none'
							href='/categorias/tecnologia/computo/laptops'
							target='_blank'>
							laptops baratas
						</Link>{' '}
						hasta máquinas con grandes capacidades, durante el Hot Sale se
						podrán aprovechar ofertas únicas que quizá no se repetirán.
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Por ejemplo, la Laptop HP 15-EF10004LA con su potente procesador AMD
						es una de las opciones más económicas del mercado, además, tiene un
						diseño compacto ideal para llevar a todas partes.{' '}
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Un{' '}
						<Link
							underline='none'
							href='/categorias/tecnologia/computo'
							target='_blank'>
							hardware
						</Link>{' '}
						de gama alta que sería de gran utilidad incluso para empresas que se
						dediquen a labores de diseño, como un despacho de arquitectos, es la
						laptop HP 15-DK1040LA, este dispositivo tiene un procesador Intel
						Core i5 de última generación, 8 GB de memoria RAM DDR4, la más
						rápida del mercado y teclado retroiluminado, ideal incluso gamers.
					</Typography>
					<Typography variant='h6' fontSize={15} color='#555' mb={1}>
						Computadoras de escritorio que debes adquirir en el Hot Sale
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Los desktops para oficina se han ganado un lugar dentro de las
						primeras opciones que las empresas consideran al momento de realizar
						una compra al mayoreo para equipar completamente sus instalaciones y
						es que las ventajas que ofrecen son muy útiles. También conocidas
						como computadoras de escritorio, este tipo de equipos son mucho más
						grandes que una laptop, no están diseñados para transportarse
						fácilmente de un lugar a otro, pero tienen una potencia mayor,
						además tienen la opción de ampliar elementos como la memoria RAM de
						manera sencilla, por supuesto, también son equipos para uso extenso.
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						La desktop HP 280 G5 con un poderoso procesador Intel Core i7 es una
						de las opciones ideales para empresas que necesitan de equipos
						veloces y con potencia de sobra para trabajos pesados de diseño o
						animación.{' '}
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Con sus increíbles 16GB de memoria RAM, la HP Workstation Z1 es la
						elección definitiva para aquellas empresas que necesitan de la mayor
						potencia disponible pues su sector empresarial así lo exige.{' '}
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Para cualquiera de estos equipos puedes elegir algún{' '}
						<Link
							underline='none'
							href='/categorias/tecnologia/computo/monitores'
							target='_blank'>
							monitor de computadora
						</Link>{' '}
						que también se oferta en pedidos.com, con diferentes alternativas de
						tamaño y también de resolución, desde opciones recatadas hasta el
						mejor equipamiento para gamers.{' '}
					</Typography>
					<Typography variant='h6' fontSize={15} color='#555' mb={1}>
						Impresoras y multifuncionales en el Hot Sale
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						{' '}
						Cualquier empresa, independientemente del ramo al que se dedique,
						necesitará impresoras y multifuncionales, así como consumibles como{' '}
						<Link
							underline='none'
							href='https://pedidos.com/hp/consumibles-originales'
							target='_blank'>
							tinta para impresora
						</Link>{' '}
						y hojas de papel, mismas que también se pueden adquirir por mayoreo
						en pedidos.com.{' '}
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Multifuncionales de inyección de tinta de las mejores marcas, con la
						capacidad para imprimir fotografías, escanear documentos e imprimir
						una gran cantidad de páginas con una calidad excelente están
						disponibles en esta tienda en línea.
					</Typography>
					<Typography variant='h6' fontSize={15} color='#555' mb={1}>
						Comprando al mayoreo en línea con seguridad{' '}
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Las pequeñas y medianas empresas pueden comprar fácilmente por
						mayoreo directamente en la página de pedidos.com, basta con ingresar
						en la sección de venta por volumen, o en la página del producto que
						deseas y dar click en el link que dice “Cotizar precio por volumen”.{' '}
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Inmediatamente un asesor te atenderá para encontrar la mejor opción
						al mejor precio para tu pequeña o mediana empresa, los precios del{' '}
						<Link
							underline='none'
							href='https://pedidos.com/pedidosmayoreo/pedidos-mayorista'
							target='_blank'>
							equipo de cómputo al mayoreo
						</Link>
						, por supuesto, son más económicos que comprar por una sola pieza.{' '}
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Comprar en Pedidos.com es muy seguro, de hecho, esta tienda en línea
						tiene el respaldo de marcas de renombre internacional como HP,
						siendo uno de los únicos con una tienda oficial de
						<Link
							underline='none'
							href='https://pedidos.com/pedidosmayoreo/pedidos-mayorista'
							target='_blank'>
							{' '}
							HP México
						</Link>{' '}
						dentro de su página.Y no sólo HP, pedidos.com es un vendedor
						autorizado de otras empresas como Intel, Epson e incluso Apple. Así
						que no se te olvide la fecha para aprovechar las ofertas del Hot
						Sale 2022, del 23 al 31 de mayo de 2022, en pedidos.com incluso las
						pequeñas y medianas empresas pueden encontrar las mejores opciones
						para su negocio.{' '}
					</Typography>
					<Typography variant='h6' fontSize={15} color='#555' mb={1}>
						Acerca de la AMVO
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						La Asociación Mexicana de Venta Online, A.C. (
						<Link
							underline='none'
							href='https://www.amvo.org.mx/hot-sale/'
							target='_blank'>
							AMVO
						</Link>
						) es una organización civil sin fines de lucro constituida en 2014
						con el propósito de apoyar e impulsar el desarrollo del comercio
						electrónico y la economía digital en México. La AMVO reúne a más de
						400 empresas mexicanas e internacionales (startups, bricks, agencias
						y pure players) de los sectores de retail, moda, viajes, servicios
						financieros, entre otros, que buscan desarrollar su comercio
						electrónico y aplicar las mejores prácticas de la industria. Más
						información: www.amvo.org.mx
					</Typography>
					<Typography
						variant='body2'
						color='#555'
						fontSize={13}
						fontWeight={500}
						textAlign='justify'
						mb={1}>
						Es la campaña de ventas online mas grande del país. Hot Sale es una
						iniciativa de la Asociación Mexicana de Venta Online (AMVO).
						Empresas como Pedidos.com participarán en la iniciativa brindando
						increíbles descuentos y promociones en exclusiva de sus productos
						como tecnología, electrónica, electrodomésticos, y mucho más.
						Contamos con un servicio 100% personalizado, envío gratis en cientos
						de productos y Meses sin intereses en pagos en línea (aplica en
						compras arriba de $500MXN).¡Te esperamos!
					</Typography>
				</Container>
			</Box>
		</Layout>
	);
};

export default Hotsale;
