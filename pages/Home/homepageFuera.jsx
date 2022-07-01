import React, { useEffect} from 'react';
import Link from 'next/link'
import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Home.module.css';
 //MUI
	import {Container,Box, Grid, Paper, Typography, Button, Divider, Card, 
    CardActionArea, CardContent, CardActions,CardMedia
   } from '@mui/material';
//Components
import { Layout } from 'layout/Layout';
import MainSlideShow from 'components/home/mainSlideShow';
import PromoSlides from 'components/home/promoSlides';
import ServiceSlides from 'components/home/serviceSlides';
import SecondaryCard from 'components/home/secondaryCards';
import Trends from 'components/home/trendSlides';
import Categories from 'components/home/categories';
import ThreeCards from 'components/home/tertiaryCards';
import Brands from 'components/home/Brands';
import ForBusiness from 'components/home/forBusiness';
//Modales
import  Help  from '../../components/modals/Help';
//Nextjs
import { useRouter } from 'next/router'

export const HomeSite = () => {

    const router = useRouter();

    useEffect(() => {

        let clienteNum = localStorage.getItem('Cliente');
        let afiliado =  localStorage.getItem('afiliado')
        let login =  localStorage.getItem('Login')

        if(login ==="NO" || login === undefined || login === null || clienteNum === 0){
           
        }else{
            router.push('/Home')
        }


    }, []) 

	return (
		<Layout title='Pedidos.com | Todo para tu espacio de trabajo'>
			<Head>
				<meta name="description" content="Paga a Meses Sin Intereses con tarjetas participantes y hasta 24 MSI con Citibanamex. Gran variedad de productos + Entregas EXPRESS CDMX."/>
				<link rel="canonical" href="https://pedidos.com/" />
			</Head>	
				<Box component="div" py={2} textAlign="center">
					<Box m="auto">
						<Image
							src="/imagenes/error-404.jpg"
						alt="Error 404"
						width="7"
						height="2"
						layout="responsive"
						/>
					</Box> 
					<Container maxWidth="xl">
					<Typography variant="h4" component="h1" sx={{fontWeight:'600'}} pt={8} >
					Estamos trabajando para ti.
					</Typography>
						<Box component="div" pt={2} textAlign="center">
							<Typography variant="h4" component="h5" sx={{fontWeight:'400'}}>
								Si necesitas ayuda con tu pedido nos puedes contactar vía whatsapp al siguiente número
							</Typography>
							<Typography variant="h4" component="h5" sx={{fontWeight:'400', textDecoration:"underline"}} pt={3} color="primary">
                            	<a> 5610348533</a>
							</Typography>
						</Box>

						
						<Box component="div" pt={4} pb={6}>
							<Container maxWidth="xs">
                            	<Help tipo={'3'}/>
                        	</Container>
						</Box>
					</Container>
				</Box>	
		</Layout>
	);	
	
};

export default HomeSite;

