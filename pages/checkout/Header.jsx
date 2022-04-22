import { useEffect, useState } from 'react';
//next js
import { useRouter } from 'next/router';
//Material UI
import {AppBar, Toolbar, Box,  Paper, 
        Typography, Button, Link, Skeleton } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

export default function CheckoutHeader() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" elevation={0} variant="outlined">
                <Toolbar>
                <Box component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/Home">
                        <img alt='Pedidos.com' sx={{height:"1.5em",}} src='https://pedidos.com/myfotos/pedidos-com/pagina/header/pedidos-logo.svg' />
                    </Link>
                </Box>
                <Button variant="outlined" color="primary" >Ayuda </Button>
                </Toolbar>
            </AppBar>
            </Box>
    );
}