import { useEffect, useState } from 'react';
//next js
import { useRouter } from 'next/router';
//Material UI
import {AppBar, Toolbar, Box,  Paper, Container,
        Typography, Button, Link, Skeleton,Grid } from '@mui/material';
        import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
        import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function CheckoutHeader() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" elevation={0} variant="outlined">
                <Container maxWidth="xl">
                    <Toolbar>
                    <Box component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/Home">
                            <img alt='Pedidos.com' sx={{height:"1.5em",}} src='https://pedidos.com/myfotos/pedidos-com/pagina/header/pedidos-logo.svg' />
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <Button variant="outlined" size="large" color="primary"  startIcon={<HelpOutlineIcon />} > ¿Necesitas Ayuda? </Button>
                            </Grid>
                            <Grid item>
                            <Button size="large"  startIcon={<CallOutlinedIcon />}> 55 5015-8100 </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            </Box>
    );
}