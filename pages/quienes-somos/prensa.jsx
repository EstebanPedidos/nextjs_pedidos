import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {
	Container,
	Box,
	Typography,
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Button,
} from '@mui/material';

//Componentes
import { Layout } from 'layout/Layout';
import Link from 'components/Link';

const useStyles = makeStyles({
	root: {
		//width: 350,
		height: '100%',
		marginTop: '0px',
		fontFamily: 'Poppins',
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.64)',
	},
});
const Boxcard = ({ data }) => {
	return (
		<Card
			variant='outlined'
			sx={{
				height: '100%',
				position: 'relative',

				'& .cta-button': {
					transition: 'all .2s',
				},

				'& img.MuiCardMedia-root': {
					transition: 'all .2s',
				},

				'&:hover': {
					'& .cta-button': {
						opacity: 1,
						bottom: '50%',
					},

					'& img.MuiCardMedia-root': {
						transform: 'scale(1.1)',
						opacity: 0.75,
					},
				},
			}}>
			<CardActionArea sx={{ height: '100%' }}>
				<CardMedia
					component='img'
					height='205'
					image={data.img}
					alt={data.info}
				/>
				<CardContent
					sx={{
						borderTop: '1px solid rgba(0, 0, 0, 0.12)',
						position: 'relative',
						zIndex: 2,
						backgroundColor: 'white',
						height: '100%',
					}}>
					<Typography
						gutterBottom
						variant='h5'
						fontSize={18}
						fontWeight={700}
						color='#3a3c41'
						textAlign='center'>
						{data.title}
					</Typography>
					<Typography
						variant='body2'
						color='#3655a5'
						fontWeight={700}
						fontSize={14}
						fontStyle='italic'
						textAlign='center'>
						{data.date}
					</Typography>
				</CardContent>

				<Button
					className='cta-button'
					variant='contained'
					color='secondary'
					sx={{
						color: 'white',
						position: 'absolute',
						p: '6px 12px',
						height: 'auto',
						bottom: 0,
						opacity: 0,
						left: '50%',
						transform: 'translateX(-50%)',
						width: '60%',
						zIndex: 5,
					}}>
					Ver más
				</Button>
			</CardActionArea>
		</Card>
	);
};
export default function TitlebarImageList() {
	const classes = useStyles();

	return (
		<Layout>
			<Container maxWidth='lg'>
				<Box py={2}>
					<Box pt={8} pb={6}>
						<Typography
							align='center'
							variant='h3'
							component='h1'
							color='#333'
							fontSize={36}
							fontWeight={500}>
							Notas de Prensa
						</Typography>
					</Box>
					<Grid container justifyContent='center' spacing={3}>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='https://www.pymempresario.com/2017/03/el-e-commerce-con-una-experiencia-de-compra-mas-humana/'>
								<Boxcard
									data={{
										img: ' /imagenes/quienes/prensa/pymempresario.jpg',
										info: 'Pymempresario',
										title: 'Pymempresario',
										date: '14-Marzo-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='https://www.sobre-t.com/el-e-commerce-con-una-experiencia-de-compra-mas-humana/'>
								<Boxcard
									data={{
										img: '/imagenes/quienes/prensa/eldiario.jpg',
										info: 'El  Diario Coahuila',
										title: 'El  Diario Coahuila',
										date: '9-Marzo-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='https://www.elpuntocritico.com/noticias-mexico/economia-nacional/144097-el-e-commerce-como-una-experiencia-de-compra-m%C3%A1s-humana.html'>
								<Boxcard
									data={{
										img: '/imagenes/quienes/prensa/sobret.jpg',
										title: 'Sobre T',
										Date: '7-Marzo-2017',
										info: 'Sobre T',
									}}
								/>
							</Link>
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.elpuntocritico.com/noticias-mexico/economia-nacional/144097-el-e-commerce-como-una-experiencia-de-compra-m%C3%A1s-humana.html'>
								<Boxcard
									data={{
										info: 'El punto crítico',
										img: '/imagenes/quienes/prensa/elpcritico.jpg',
										title: 'El punto crítico',
										date: '6-Marzo-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://semanariobalance.com/2017/03/03/e-commerce-tacto-humano/'>
								<Boxcard
									data={{
										info: 'Seminario Balance',
										img: '/imagenes/quienes/prensa/balance.jpg',
										title: 'Seminario Balance',
										date: '3-Marzo-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://lagazzettadf.com/noticia/2017/02/28/e-commerce-tacto-humano/'>
								<Boxcard
									data={{
										info: 'La Gazzetadf.com',
										img: '/imagenes/quienes/prensa/gazzeta2.jpg',
										title: 'La Gazzetadf.com',
										date: '28-Febrero-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://hcandcnews.webnode.mx/noticias/'>
								<Boxcard
									data={{
										info: 'HcandCnews',
										img: '/imagenes/quienes/prensa/noticias.jpg',
										title: 'HcandCnews',
										date: '27-Febrero-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.logisticamx.enfasis.com/notas/77209-tiene-e-commerce-desafios-mexico-'>
								<Boxcard
									data={{
										info: 'Logísticamx',
										img: '/imagenes/quienes/prensa/logisticamx.jpg',
										title: 'Logísticamx',
										date: '20-Febrero-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://prensaescenario.com/2017/02/18/pedidos-com-los-desafios-del-commerce-mexico/'>
								<Boxcard
									data={{
										info: 'Prensa Escenario',
										img: '/imagenes/quienes/prensa/prensaescenario.jpg',
										title: 'Prensa Escenario',
										date: '19-Febrero-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://websinergia.com.mx/blog/2017/01/31/crece-e-commerce-59-en-dos-anos-en-mexico/'>
								<Boxcard
									data={{
										info: 'Provincia',
										img: '/imagenes/quienes/prensa/provincia.jpg',
										title: 'Provincia',
										date: '17-Febrero-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://websinergia.com.mx/blog/2017/01/31/crece-e-commerce-59-en-dos-anos-en-mexico/'>
								<Boxcard
									data={{
										info: 'Websinergia.com ',
										img: '/imagenes/quienes/prensa/webs.jpg',
										title: 'Websinergia.com ',
										date: '31-Enero-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.yousuariofinal.com/archives/4660?platform=hootsuite'>
								<Boxcard
									data={{
										info: 'Yo usuario final',
										img: '/imagenes/quienes/prensa/yousuario.jpg',
										title: 'Yo usuario final',
										date: '27-Enero-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.supermexicanos.com/2017/01/27/comercio-electronico-con-seguridad-e-innovacion/'>
								<Boxcard
									data={{
										info: 'Super Mexicanos',
										img: '/imagenes/quienes/prensa/superm.jpg',
										title: 'Super Mexicanos',
										date: '27-Enero-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='https://www.comunicae.com.mx/nota/el-e-commerce-crece-en-mexico-un-59-en-dos-anos-105236/'>
								<Boxcard
									data={{
										info: 'Comunicate MX',
										img: '/imagenes/quienes/prensa/comunicate.jpg',
										title: 'Comunicate MX',
										date: '25-Enero-2017',
									}}
								/>
							</Link>
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.merca20.com/crece-e-commerce-59-en-dos-anos-en-mexico/'>
								<Boxcard
									data={{
										info: 'Merca 2.0',
										img: '/imagenes/quienes/prensa/merca2.jpg',
										title: 'Merca 2.0',
										date: '25-Enero-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.elpuntocritico.com/noticias-mexico/economia-nacional/142638-crece-el-e-commerce-en-m%C3%A9xico.html'>
								<Boxcard
									data={{
										info: 'El punto crítico',
										img: '/imagenes/quienes/prensa/punto.jpg',
										title: 'El punto crítico',
										date: '24-Enero-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.elpuntocritico.com/radio-y-tv/el-punto-critico-sabado/142311-bloque-01-s%C3%A1bado-14-de-enero-2017-entrada-y-empresas-de-%C3%A9xito.html?platform=hootsuite'>
								<Boxcard
									data={{
										info: 'El punto crítico',
										img: '/imagenes/quienes/prensa/critico.jpg',
										title: 'El punto crítico',
										date: '14-Enero-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://imagendeveracruz.com.mx/resumen.php?id=67009'>
								<Boxcard
									data={{
										info: 'Imagen de Veracruz',
										img: '/imagenes/quienes/prensa/imagen1.jpg',
										title: 'Imagen de Veracruz',
										date: '4-Enero-2017',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='https://mexicoenlared.tv/la-asociacion-de-internet-mx-premia-a-pedidos-com-por-su-trayectoria-en-internet-como-empresa-de-retail/'>
								<Boxcard
									data={{
										info: 'México en la red',
										img: '/imagenes/quienes/prensa/mexico.jpg',
										title: 'México en la red',
										date: '30-Diciembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://lagazzettadf.com/noticia/2016/12/30/la-asociacion-internet-mx-premia-pedidos-com-trayectoria-internet-empresa-retail/'>
								<Boxcard
									data={{
										info: 'La Gazzetta DF',
										img: '/imagenes/quienes/prensa/gazzetta.jpg',
										title: 'La Gazzetta DF',
										date: '30-Diciembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.revistacentral.com.mx/notas/trends/248448/este-es-el-mejor-sitio-web-de-mexico/?t=purgar'>
								<Boxcard
									data={{
										info: 'Revista Central',
										img: '/imagenes/quienes/prensa/central.jpg',
										title: 'Revista Central',
										date: '29-Diciembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.provincia.com.mx/web/Premia_a_Pedidos.com_por_su_trayectoria_en_Internet_como_empresa_de_Retail-62372'>
								<Boxcard
									data={{
										info: 'Provincia',
										img: '/imagenes/quienes/prensa/provincia.jpg',
										title: 'Provincia',
										date: '26-Diciembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://ebusinesshoy.com/pedidos-com-mejor-ecommerce-de-retail-segun-asociacion-de-internet-mx-y-logitech/?utm_source=Twitter&utm_medium=twitter&utm_term=Nota_-&utm_campaign=MEX_twitter_-_0-0_Nota_-_26-12-2016_pedidos_11_00_-_link'>
								<Boxcard
									data={{
										info: 'HcandCnews',
										img: '/imagenes/quienes/prensa/ebu.jpg',
										title: 'Ebussines hoy',
										date: '22-Diciembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://marketing4ecommerce.mx/premia-asociacion-de-internet-pedidos-com/'>
								<Boxcard
									data={{
										info: 'Marketing4ecommerce',
										img: '/imagenes/quienes/prensa/m4r.jpg',
										title: 'Marketing4ecommerce',
										date: '21-Diciembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.revistaneodigital.com/articles/2016/12/07/la-asociación-de-internetmx-premia-pedidoscom-en-la-categor%C3%ADa-de-retail'>
								<Boxcard
									data={{
										info: 'Revista Neo Dígital',
										img: '/imagenes/quienes/prensa/neo.jpg',
										title: 'Revista Neo Dígital',
										date: '26-Diciembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.emprefinanzas.com.mx/portal/plataforma-tecnologica/4265-la-asociacion-de-internet-mx-premia-a-pedidos-com-por-su-trayectoria-en-internet-como-empresa-de-retail/'>
								<Boxcard
									data={{
										info: 'Empre Finanzas',
										img: '/imagenes/quienes/prensa/empre.jpg',
										title: 'Empre Finanzas',
										date: '7-Diciembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.market-think.com.mx/noticias/la-asociacion-de-internet-mx-premia-a-pedidos-com-por-su-trayectoria-como-empresa-de-retail/'>
								<Boxcard
									data={{
										info: 'Markethink',
										iimg: '/imagenes/quienes/prensa/marke.jpg',
										title: 'The Markethink',
										date: '7-Diciembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='https://multipress.com.mx/mercadotecnia/la-asociacion-de-internet-mx-premia-a-pedidos-com-por-su-trayectoria-en-internet/'>
								<Boxcard
									data={{
										info: 'Multipres',
										img: '/imagenes/quienes/prensa/multi.jpg',
										title: 'Multipress',
										date: '6-Diciembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.cionoticias.tv/pedidos-com-tu-mejor-opcion-para-comprar/'>
								<Boxcard
									data={{
										info: 'CIO Noticias',
										img: '/imagenes/quienes/prensa/cio.jpg',
										title: 'CIO Noticias',
										date: '2-Diciembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='www.emprefinanzas.com.mx/portal/mundo-de-negocios/4204-pedidos-com-mejora-la-experiencia-de-los-usuarios-del-e-commerce'>
								<Boxcard
									data={{
										info: 'Empre Finanzas',
										img: '/imagenes/quienes/prensa/empre1.jpg',
										title: 'Empre Finanzas',
										date: '1-Diciembre-2016',
									}}
								/>
							</Link>
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://indicecorporativo.com/opinion/5135-corporativo-pedidos-com-pone-la-banderita'>
								<Boxcard
									data={{
										info: 'Indice',
										img: '/imagenes/quienes/prensa/indice.jpg',
										title: 'Indice Corporativo',
										date: '23-Noviembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.cronica.com.mx/notas/2016/997047.html'>
								<Boxcard
									data={{
										info: 'crónica',
										img: '/imagenes/quienes/prensa/cronica.jpg',
										title: 'La Crónica',
										date: '23-Noviembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='/'>
								<Boxcard
									data={{
										info: 'Comunicate MX',
										img: '/imagenes/quienes/prensa/imagen.jpg',
										title: 'Imagen Radio',
										date: '22-Noviembre-2016',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.emm2015.com/el-camino-al-exito-de-pedidos-com/'>
								<Boxcard
									data={{
										info: 'Yo usuario final',
										img: '/imagenes/quienes/prensa/emm.jpg',
										title: 'E-mergingmarkets',
										date: '17-Febrero-2015',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.cronica.com.mx/notas/2016/997047.html'>
								<Boxcard
									data={{
										info: 'Super Mexicanos',
										img: '/imagenes/quienes/prensa/pyme.jpg',
										title: 'Pymempresario',
										date: 'Agosto-14',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='http://www.elfinanciero.com.mx/empresas/pedidos-com-un-caso-de-exito-en-las-e-commerce-mexicanas.html'>
								<Boxcard
									data={{
										info: 'Fnanciero',
										img: '/imagenes/quienes/prensa/financiero.jpg',
										title: 'El financiero',
										date: '12-Febrero-2014',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='https://www.publimetro.com.mx/mx/noticias/2013/07/04/empresa-mexicana-apuesta-comercio-electronico.html'>
								<Boxcard
									data={{
										info: 'Publimetro',
										img: '/imagenes/quienes/prensa/publimetro.jpg',
										title: 'Publimetro',
										date: '4-Julio-2013',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='https://issuu.com/latardedeluno/docs/2_diciembre_2013/7'>
								<Boxcard
									data={{
										info: 'issuu',
										img: '/imagenes/quienes/prensa/google.jpg',
										title: 'Google',
										date: '2-Diciembre-2013',
									}}
								/>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Link
								underline='none'
								sx={{ display: 'block', height: '100%' }}
								href='https://www.entrepreneur.com/article/266071'>
								<Boxcard
									data={{
										info: 'Comunicate MX',
										img: '/imagenes/quienes/prensa/entrepeneur.jpg',
										title: 'Entrepeneur',
										date: '26-Junio-2013',
									}}
								/>
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Layout>
	);
}
