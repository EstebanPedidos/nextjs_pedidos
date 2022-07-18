import Image from 'next/image';
import Link from 'next/link'
//MUI
import {Container, Box,  Typography, Button, Divider} from '@mui/material';

export default function NotFoud(){
    return (
        <Container maxWidth="sm">
            <Box component="div" justifyContent="center" py={4}>
            <Box component="div"> 
                <Box m="auto">
                    <Image
                        src="/imagenes/error-404.jpg"
                    alt="Error 404"
                    width="300"
                    height="239"
                    layout="responsive"
                    />
                </Box> 
            </Box>
            <Box component="div" textAlign="center" pt={2} >
                <Typography variant="h4" component="h1" fontWeight="600">404 Página no encontrada</Typography>
                <Box component="div" pt={3} textAlign="center" >
                    <Link href="/">
                        <Button component="a" size="large"  variant="contained" color="primary">Regresar</Button>
                    </Link>
                </Box>
                <p>Si necesitas ayuda, ponte en 
                    <Box component="span" sx={ {textDecoration:"underline", }}>
                        <Link href="https://direct.lc.chat/7731061/">
                            <a> contacto con nosotros</a>
                        </Link>
                    </Box>.
                </p>
            </Box>
            </Box>
        </Container>
    )
}