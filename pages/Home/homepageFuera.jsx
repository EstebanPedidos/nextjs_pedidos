import React, { useEffect} from 'react';
import Link from 'next/link'
import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Home.module.css';
 //MUI
	import {Container,Box, Grid, Paper, Typography, Button, Divider, Card, 
    CardActionArea, CardContent, CardActions,CardMedia, IconButton
   } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import { Layout } from 'layout/Layout';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

//Modales
import  Help  from '../../components/modals/Help';
//Nextjs
import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      borderRadius: '8px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2, 2),
    },
    pointer: {
          cursor: 'pointer',
      },
  }));

export const HomeSite = () => {

    const router = useRouter();
    const classes         = useStyles();

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
            <Container maxWidth="sm">
				<Box component="div" py={2} textAlign="center">
					<Box m="auto">
                        <Image
                            src="/imagenes/error-404.jpg"
                        alt="Error 404"
                        width="300"
                        height="239"
                        layout="responsive"
                        />
					</Box> 
					
					<Typography variant="h4" component="h1" sx={{fontWeight:'600'}} pt={8} >
					    Estamos trabajando para Ti.
					</Typography>

                    <Box component="div" pt={2} textAlign="center">
                        <Typography variant="h4" component="h5" sx={{fontWeight:'400'}}>
                            Si necesitas ayuda con tu pedido nos puedes contactar vía whatsapp al siguiente número
                        </Typography>

                        <Box component="div" pt={4} pb={6}>
                            <Container maxWidth="xs">
                                <Button 
                                    variant="outlined"
                                    size="large" 
                                    aria-label="Help" 
                                    startIcon={<WhatsAppIcon/>}  
                                    onClick={(event) => { event.preventDefault(); window.open('https://api.whatsapp.com/send?phone=5215610348533&amp;text=Hola,%20Pedidos.com%20me%20ayudas%20a...%20', '_blank')}}>
                                        +5215610348533
                                </Button>
                            </Container>
                        </Box>
                    </Box>

                    <Box component="div" pt={4} pb={6}>
                        <Container maxWidth="xs">
                            <Help tipo={'3'}/>
                        </Container>
                    </Box>
				</Box>
            </Container>	
		</Layout>
	);	
	
};

export default HomeSite;

