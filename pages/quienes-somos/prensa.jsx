/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import {Container, Box, Typography, Grid, Card, CardActionArea,  CardMedia, CardContent,} from '@mui/material'
//Componentes
import { Layout } from 'layout/Layout';

const useStyles = makeStyles({
  root: {
    //width: 350,
    height: "100%",
    marginTop: "0px",
    fontFamily:"Poppins",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.64)"
  }
});
const Boxcard = ({data})=>{
    return(
    <>  
    <Card variant="outlined">
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={data.img}
            alt={data.info}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.date}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    </> 
    )
  }
export default function TitlebarImageList() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth='lg'>
          <Box my={2}>
                <Box my='2rem'>
                    <Typography
                        align='center'
                        variant='h3'
                        component={'h1'}
                        color='primary'>
                        Notas de Prensa
                    </Typography>
                </Box>
                <Grid container justifyContent="center" spacing={3}>
                    <Grid item xs={6} sm={4}>
                        <Link href="https://www.pymempresario.com/2017/03/el-e-commerce-con-una-experiencia-de-compra-mas-humana/">
                            <a>
                                <Boxcard 
                                    data={{
                                    img:' /imagenes/quienes/prensa/pymempresario.jpg',
                                    info: 'Pymempresario', 
                                    title:'Pymempresario',
                                    date:'14-Marzo-2017',
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="https://www.sobre-t.com/el-e-commerce-con-una-experiencia-de-compra-mas-humana/">
                            <a>
                                <Boxcard 
                                    data={{
                                    img:'/imagenes/quienes/prensa/eldiario.jpg',
                                    info: 'El  Diario Coahuila',
                                    title: "El  Diario Coahuila",
                                    date: "9-Marzo-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="https://www.elpuntocritico.com/noticias-mexico/economia-nacional/144097-el-e-commerce-como-una-experiencia-de-compra-m%C3%A1s-humana.html">
                            <a>
                                <Boxcard 
                                    data={{
                                    img:"/imagenes/quienes/prensa/sobret.jpg",
                                    title: "Sobre T",
                                    Date: "7-Marzo-2017",   
                                    info: 'Sobre T', 
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                   
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.elpuntocritico.com/noticias-mexico/economia-nacional/144097-el-e-commerce-como-una-experiencia-de-compra-m%C3%A1s-humana.html">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'El punto crítico',
                                    img:"/imagenes/quienes/prensa/elpcritico.jpg",
                                    title: "El punto crítico",
                                    date: "6-Marzo-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://semanariobalance.com/2017/03/03/e-commerce-tacto-humano/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Seminario Balance', 
                                    img:"/imagenes/quienes/prensa/balance.jpg",
                                    title: "Seminario Balance",
                                    date: "3-Marzo-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://lagazzettadf.com/noticia/2017/02/28/e-commerce-tacto-humano/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'La Gazzetadf.com', 
                                    img:"/imagenes/quienes/prensa/gazzeta2.jpg",
                                    title: "La Gazzetadf.com",
                                    date: "28-Febrero-2017",
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://hcandcnews.webnode.mx/noticias/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'HcandCnews',
                                    img:"/imagenes/quienes/prensa/noticias.jpg",
                                    title: "HcandCnews",
                                    date: "27-Febrero-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.logisticamx.enfasis.com/notas/77209-tiene-e-commerce-desafios-mexico-">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Logísticamx', 
                                    img:"/imagenes/quienes/prensa/logisticamx.jpg",
                                    title: "Logísticamx",
                                    date: "20-Febrero-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://prensaescenario.com/2017/02/18/pedidos-com-los-desafios-del-commerce-mexico/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Prensa Escenario', 
                                    img:"/imagenes/quienes/prensa/prensaescenario.jpg",
                                    title: "Prensa Escenario",
                                    date: "19-Febrero-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://websinergia.com.mx/blog/2017/01/31/crece-e-commerce-59-en-dos-anos-en-mexico/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Provincia',
                                    img:"/imagenes/quienes/prensa/provincia.jpg",
                                    title: "Provincia",
                                    date: "17-Febrero-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://websinergia.com.mx/blog/2017/01/31/crece-e-commerce-59-en-dos-anos-en-mexico/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Websinergia.com ', 
                                    img:"/imagenes/quienes/prensa/webs.jpg",
                                    title: "Websinergia.com ",
                                    date: "31-Enero-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.yousuariofinal.com/archives/4660?platform=hootsuite">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Yo usuario final', 
                                    img:"/imagenes/quienes/prensa/yousuario.jpg",
                                    title: "Yo usuario final",
                                    date: "27-Enero-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.supermexicanos.com/2017/01/27/comercio-electronico-con-seguridad-e-innovacion/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Super Mexicanos',
                                    img:"/imagenes/quienes/prensa/superm.jpg",
                                    title: "Super Mexicanos",
                                    date: "27-Enero-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="https://www.comunicae.com.mx/nota/el-e-commerce-crece-en-mexico-un-59-en-dos-anos-105236/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Comunicate MX', 
                                    img:"/imagenes/quienes/prensa/comunicate.jpg",
                                    title: "Comunicate MX",
                                    date: "25-Enero-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    


                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.merca20.com/crece-e-commerce-59-en-dos-anos-en-mexico/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Merca 2.0', 
                                    img:"/imagenes/quienes/prensa/merca2.jpg",
                                    title: "Merca 2.0",
                                    date: "25-Enero-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.elpuntocritico.com/noticias-mexico/economia-nacional/142638-crece-el-e-commerce-en-m%C3%A9xico.html">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'El punto crítico',
                                    img:"/imagenes/quienes/prensa/punto.jpg",
                                    title: "El punto crítico",
                                    date: "24-Enero-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.elpuntocritico.com/radio-y-tv/el-punto-critico-sabado/142311-bloque-01-s%C3%A1bado-14-de-enero-2017-entrada-y-empresas-de-%C3%A9xito.html?platform=hootsuite">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'El punto crítico', 
                                    img:"/imagenes/quienes/prensa/critico.jpg",
                                    title: "El punto crítico",
                                    date: "14-Enero-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://imagendeveracruz.com.mx/resumen.php?id=67009">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Imagen de Veracruz', 
                                    img:"/imagenes/quienes/prensa/imagen1.jpg",
                                    title: "Imagen de Veracruz",
                                    date: "4-Enero-2017"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="https://mexicoenlared.tv/la-asociacion-de-internet-mx-premia-a-pedidos-com-por-su-trayectoria-en-internet-como-empresa-de-retail/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'México en la red',
                                    img:"/imagenes/quienes/prensa/mexico.jpg",
                                    title: "México en la red",
                                    date: "30-Diciembre-2016"
                                    
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://lagazzettadf.com/noticia/2016/12/30/la-asociacion-internet-mx-premia-pedidos-com-trayectoria-internet-empresa-retail/">
                            <a>
                                <Boxcard 
                                    data={{
                                        info:'La Gazzetta DF',
                                        img:"/imagenes/quienes/prensa/gazzetta.jpg",
                                        title: "La Gazzetta DF",
                                        date: "30-Diciembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.revistacentral.com.mx/notas/trends/248448/este-es-el-mejor-sitio-web-de-mexico/?t=purgar">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Revista Central', 
                                    img:"/imagenes/quienes/prensa/central.jpg",
                                    title: "Revista Central",
                                    date: "29-Diciembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.provincia.com.mx/web/Premia_a_Pedidos.com_por_su_trayectoria_en_Internet_como_empresa_de_Retail-62372">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Provincia', 
                                    img:"/imagenes/quienes/prensa/provincia.jpg",
                                    title: "Provincia",
                                    date: "26-Diciembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://ebusinesshoy.com/pedidos-com-mejor-ecommerce-de-retail-segun-asociacion-de-internet-mx-y-logitech/?utm_source=Twitter&utm_medium=twitter&utm_term=Nota_-&utm_campaign=MEX_twitter_-_0-0_Nota_-_26-12-2016_pedidos_11_00_-_link">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'HcandCnews',
                                    img:"/imagenes/quienes/prensa/ebu.jpg",
                                    title: "Ebussines hoy",
                                    date: "22-Diciembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://marketing4ecommerce.mx/premia-asociacion-de-internet-pedidos-com/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Marketing4ecommerce', 
                                    img:"/imagenes/quienes/prensa/m4r.jpg",
                                    title: "Marketing4ecommerce",
                                    date: "21-Diciembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.revistaneodigital.com/articles/2016/12/07/la-asociación-de-internetmx-premia-pedidoscom-en-la-categor%C3%ADa-de-retail">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Revista Neo Dígital', 
                                    img:"/imagenes/quienes/prensa/neo.jpg",
                                    title: "Revista Neo Dígital",
                                    date: "26-Diciembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.emprefinanzas.com.mx/portal/plataforma-tecnologica/4265-la-asociacion-de-internet-mx-premia-a-pedidos-com-por-su-trayectoria-en-internet-como-empresa-de-retail/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Empre Finanzas',
                                    img:"/imagenes/quienes/prensa/empre.jpg",
                                    title: "Empre Finanzas",
                                    date: "7-Diciembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.market-think.com.mx/noticias/la-asociacion-de-internet-mx-premia-a-pedidos-com-por-su-trayectoria-como-empresa-de-retail/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Markethink', 
                                    iimg:"/imagenes/quienes/prensa/marke.jpg",
                                    title: "The Markethink",
                                    date: "7-Diciembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="https://multipress.com.mx/mercadotecnia/la-asociacion-de-internet-mx-premia-a-pedidos-com-por-su-trayectoria-en-internet/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Multipres', 
                                    img:"/imagenes/quienes/prensa/multi.jpg",
                                    title: "Multipress",
                                    date: "6-Diciembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.cionoticias.tv/pedidos-com-tu-mejor-opcion-para-comprar/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'CIO Noticias',
                                    img:"/imagenes/quienes/prensa/cio.jpg",
                                    title: "CIO Noticias",
                                    date: "2-Diciembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="www.emprefinanzas.com.mx/portal/mundo-de-negocios/4204-pedidos-com-mejora-la-experiencia-de-los-usuarios-del-e-commerce">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Empre Finanzas', 
                                    img:"/imagenes/quienes/prensa/empre1.jpg",
                                    title: "Empre Finanzas",
                                    date: "1-Diciembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    
                    <Grid item xs={6} sm={4}>
                        <Link href="http://indicecorporativo.com/opinion/5135-corporativo-pedidos-com-pone-la-banderita">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Indice', 
                                    img:"/imagenes/quienes/prensa/indice.jpg",
                                    title: "Indice Corporativo",
                                    date: "23-Noviembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.cronica.com.mx/notas/2016/997047.html">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'crónica',
                                    img:"/imagenes/quienes/prensa/cronica.jpg",
                                    title: "La Crónica",
                                    date: "23-Noviembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Comunicate MX', 
                                    img:"/imagenes/quienes/prensa/imagen.jpg",
                                    title: "Imagen Radio",
                                    date: "22-Noviembre-2016"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.emm2015.com/el-camino-al-exito-de-pedidos-com/">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Yo usuario final', 
                                    img:"/imagenes/quienes/prensa/emm.jpg",
                                    title: "E-mergingmarkets",
                                    date: "17-Febrero-2015"

                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.cronica.com.mx/notas/2016/997047.html">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Super Mexicanos',
                                    img:"/imagenes/quienes/prensa/pyme.jpg",
    title: "Pymempresario",
    date: "Agosto-14"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="http://www.elfinanciero.com.mx/empresas/pedidos-com-un-caso-de-exito-en-las-e-commerce-mexicanas.html">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Fnanciero', 
                                    img:"/imagenes/quienes/prensa/financiero.jpg",
                                    title: "El financiero",
                                    date: "12-Febrero-2014"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="https://www.publimetro.com.mx/mx/noticias/2013/07/04/empresa-mexicana-apuesta-comercio-electronico.html">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Publimetro', 
                                    img:"/imagenes/quienes/prensa/publimetro.jpg",
                                    title: "Publimetro",
                                    date: "4-Julio-2013"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="https://issuu.com/latardedeluno/docs/2_diciembre_2013/7">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'issuu',
                                    img:"/imagenes/quienes/prensa/google.jpg",
                                    title: "Google",
                                    date: "2-Diciembre-2013"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Link href="https://www.entrepreneur.com/article/266071">
                            <a>
                                <Boxcard 
                                    data={{
                                    info: 'Comunicate MX', 
                                    img:"/imagenes/quienes/prensa/entrepeneur.jpg",
                                    title: "Entrepeneur",
                                    date: "26-Junio-2013"
                                }}
                                />				
                            </a>
                        </Link>
                    </Grid>
                    
                </Grid>
          </Box>
        
       
      </Container>
    </Layout>
  );
}

