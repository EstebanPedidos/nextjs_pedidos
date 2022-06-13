
import Link from 'next/link'
import Image from 'next/image';
//MUI
import {Container, Box, Grid, Paper, Typography, Button, Card, 
  CardActionArea, CardContent, CardActions,CardMedia
 } from '@mui/material';
 import makeStyles from '@mui/styles/makeStyles';
 import styles from 'styles/Home.module.css';

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import { Autoplay, Lazy } from 'swiper';
import 'swiper/css';
//import 'swiper/css/navigation';
//
import 'swiper/css/pagination';
import { margin } from '@mui/system';

const Boxcategory = ({data})=>{
  return(
  <>  
    
        <Box component="div" py={2} sx={{position:'relative'}}>
            <Box component="div" px={1}>
                <Box component="div"  className={styles.categories}>
                    <Box component="div">
                        <Box className={styles.backca}></Box>
                        <img className={styles.backcaimg}
                            src={data.categimg}
                            alt={data.keyw}
                            layout="fill"
                            />
                    </Box>
                    <Box component="div" textAlign="center">
                        <Typography variant="h6" component="h3" sx={{fontWeight:'600'}}>
                            {data.titulo}
                        </Typography>  
                    </Box>
                </Box>
               
            </Box>
        </Box>
    
        
  </> 
  )
}
export default function SecondaryCards() {

  return (
    <Box py={4} sx={{ background:'#f6f7f9' }}>
        <Container maxWidth="lg">
            <Box pb={8}>
                <Grid container direction="row"  spacing={4}
                    justifyContent="center" alignItems="center">
                    <Grid item>
                        <Link href="/categorias/papeleria">
                            <a>
                                <Boxcategory
                                    data={{
                                    titulo:'Para oficina',
                                    categimg:'https://pedidos.com/myfotos/pedidos-com/pagina/home20/categorias/papeleria-1.webp',
                                    keyw:'Papel para impresión, especializado, bond, color, fotográfico, reciclado, ecológico, rollos y más' }}
                                />	
                            </a>
                        </Link>
                     </Grid>
                    <Grid item>
                        <Link href="/categorias/papel">
                            <a>
                                <Boxcategory
                                    data={{
                                    titulo:'Papel',
                                    categimg:'https://pedidos.com/myfotos/pedidos-com/pagina/home20/categorias/papel.webp',
                                    keyw:'Productos para oficina, papelería, papel, cajas de papel, resma de papel' }}
                                />	
                            </a>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/categorias/tintas-y-toners">
                            <a>
                                <Boxcategory
                                    data={{
                                    titulo:'Tintas y Tóners',
                                    categimg:'https://pedidos.com/myfotos/pedidos-com/pagina/home20/categorias/consumibles.webp',
                                    keyw:'Consumibles, tintas, tóners, tambores, cartuchos originales hp, epson, brother, canon,xerox, lexmark' }}
                                />
                            </a>
                        </Link>	
                    </Grid>
                    <Grid item>
                        <Link href="/categorias/tecnologia">
                            <a>
                                <Boxcategory
                                    data={{
                                    titulo:'Tecnología',
                                    categimg:'https://pedidos.com/myfotos/pedidos-com/pagina/home20/categorias/tecnologia.webp',
                                    keyw:'Variedad de compúto, impresión, accesorios, pantallas, proyectores y más' }}
                                />
                            </a>
                        </Link>	
                    </Grid>
                    <Grid item>
                        <Link href="/categorias/accesorios">
                            <a>
                                <Boxcategory
                                    data={{
                                    titulo:'Accesorios',
                                    categimg:'https://pedidos.com/myfotos/pedidos-com/pagina/home20/categorias/accesorios.webp',
                                    keyw:'Componentes de cómputo, memorias, bases, ergonomía, matenimiento, conexiones y mucho más' }}
                                />	
                            </a>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/categorias/muebles">
                            <a>
                                <Boxcategory
                                    data={{
                                    titulo:'Muebles',
                                    categimg:'https://pedidos.com/myfotos/pedidos-com/pagina/home20/categorias/muebles.webp',
                                    keyw:'Mobiliario pensado en el trabajo, sillas, mesas, escritorios, archiveros.' }}
                                />	
                            </a>
                        </Link>
                    </Grid>
                    <Grid item>
                         <Link href="/categorias/cafeteria">
                            <a>
                                <Boxcategory
                                    data={{
                                    titulo:'Cafetería',
                                    categimg:'https://pedidos.com/myfotos/pedidos-com/pagina/home20/categorias/cafeteria.webp',
                                    keyw:'Cafetereas, comida y snacks, bebidas, azúcar, cremas, sustitutos, dispensadores y desechables.' }}
                                />	
                            </a>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/categorias/tlapaleria">
                            <a>
                                <Boxcategory
                                    data={{
                                    titulo:'Tlapalería',
                                    categimg:'https://pedidos.com/myfotos/pedidos-com/pagina/home20/categorias/tlapaleria.webp',
                                    keyw:'Herramientas, electricidad, iluminación, candados, señalización, pinturas, hogar y productos industriales' }}
                                />	
                             </a>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/categorias/limpieza">
                            <a>
                                <Boxcategory
                                    data={{
                                    titulo:'Limpieza',
                                    categimg:'https://pedidos.com/myfotos/pedidos-com/pagina/home20/categorias/limpieza.webp',
                                    keyw:'Químicos, Higiénicos, jarciería, despachadores, ceras y aceites' }}
                                />	
                            </a>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>
	)
}