import { useEffect, useState } from 'react';
//next js
import Link from 'next/link'
//Material UI
import {AppBar, Toolbar, Box,  Paper, Container,
        Typography, Button, Skeleton,Grid } from '@mui/material';
        import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
        import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import  Help  from '../../components/modals/Help';
import { LiveChatWidget, EventHandlerPayload } from '@livechat/widget-react'

export default function CheckoutHeader() {
    const [openModal, setOpenModal] = useState(false)
    function handleOpenModal(){
        setOpenModal(false)
    }
    
    return (
        <>   
        <LiveChatWidget
            license="7731061"
            visibility="minimized"
        />     
        <Box sx={{ flexGrow: 1 }}>            
            <AppBar position="static" color="transparent" elevation={0} variant="outlined">
                <Container maxWidth="xl">
                    <Toolbar>
                    <Box component="div" sx={{ flexGrow: 1 }}>
                         <Link href={`/`}>
                            <a>
                                <img alt='Pedidos.com' sx={{height:"1.5em",}} src='https://pedidos.com/myfotos/pedidos-com/pagina/header/pedidos-logo.svg' />
                            </a>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Grid container spacing={1}>
                            <Grid item>                                
                                <Help tipo={'1'}/>
                            </Grid>
                            <Grid item>
                                <Box>
                                    <a href="tel:55 5015-8100">
                                        <Button size="large"  startIcon={<CallOutlinedIcon />}>(55 5015-8100)</Button>
                                    </a>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            </Box>
        </>
    );
}