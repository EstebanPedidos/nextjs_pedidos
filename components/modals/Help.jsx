import React,{useState} from 'react';
import Link from 'next/link';
import makeStyles from '@mui/styles/makeStyles';
import {Box,Paper, IconButton} from '@mui/material';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

const items = [
	
  { 

		icon: ChatBubbleOutlineIcon,
		title: 'Chat',
		description: 'Inicia una conversación',
    tipo:1
	},
	
  {
		icon: WhatsAppIcon,
		title: 'WhatsApp',
		description: 'Envía un mensaje',
    tipo:2
	},
  {
		icon: WhatsAppIcon,
		title: 'WhatsApp Empresas',
		description: 'Envía un mensaje',
    tipo:3
	},
	{
		icon: MailOutlineIcon,
		title: 'Correo',
		description: 'En breve responderemos',
    tipo:4
	},
];

export default function Help({tipo}) {
    const classes         = useStyles();
    const [modalStyle]    = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    async function abrir(tipo){
        let url= await '';        
        if(tipo === 1){
          //live
          url=await 'https://direct.lc.chat/7731061/'
        }else if(tipo === 2){
          //Personal wats
          url=await 'https://api.whatsapp.com/send?phone=5215562947884&amp;text=Hola,%20Pedidos.com%20me%20ayudas%20a...%20'
        }else if(tipo === 3){
          //Empresa wats
          url=await 'https://api.whatsapp.com/send?phone=5215610348533&amp;text=Hola,%20Pedidos.com%20me%20ayudas%20a...%20'
        }else if(tipo === 4){
          url=await 'mailto:info@pedidos.com.mx?subject=Necesito%20apoyo%20con'
        }
        window.open(url, '_blank');
    }

    return (
        <div>
            {(tipo == '1')?
            <Button variant="outlined" fullWidth size="large" startIcon={<HelpOutlineIcon/>}  onClick={()=>{setOpen(true);}}>¿Necesitas Ayuda?</Button>            
            :
            (tipo == '2')?
            <IconButton color='primary' onClick={()=>{setOpen(true);}}>
										<HelpOutlineIcon />
						</IconButton>
            :
            (tipo == '3')?
            <Button variant="contained" fullWidth size="large" startIcon={<HelpOutlineIcon/>}  onClick={()=>{setOpen(true);}}>¿Necesitas Ayuda?</Button>
            :
            (tipo == '4')&&
            <Button variant="outlined" fullWidth size="large" startIcon={<HelpOutlineIcon/>}  onClick={()=>{setOpen(true);}}>Ayuda</Button>            
          }
            
            <Modal
                open={open}
                onClose={()=>{setOpen(false);}}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            <div style={modalStyle} className={classes.paper}>
              <div>
              <Box padding={'1rem'}>
                <Box >
                  <Typography
                    align='center'
                    component='h3'
                    variant='h5'
                    fontWeight='fontWeightMedium'>
                    Ayuda
                  </Typography>
                </Box>
                  <Box component='div' pt={2}>
                    Horario de Atención Lunes a Domingo de 9 a 18:30hrs 
                  </Box>
                  <Box component='div' pt={2}>
                    {/* <Box>
                      <Paper>
                        <Box py={2}>
                          <Link href="">
                              <a>
                                <Button variant="outlined" color="primary" fullWidth>Empresas</Button>
                              </a>
                          </Link>
                        </Box>
                      </Paper>
                    </Box> */}
                    {items.map(({ description, icon: Icon, title, tipo }) => (
                      <Box key={title} marginBottom={'1em'} onClick={()=>{abrir(tipo)}}>
                        <Paper variant='outlined'>
                          <Box
                            sx={{ borderRadius: '8px' }}
                            className={`${classes.pointer}`}
                            paddingY='0.5rem'
                            paddingLeft={'1rem'}
                            display='flex'
                            alignItems='center'
                            gridGap={'0.5rem'}>
                            <Box>
                              <IconButton>
                                <Icon fontSize='large' />
                              </IconButton>
                            </Box>
                            <Box>
                              <Box>{title}</Box>
                              <Box>{description}</Box>
                            </Box>
                          </Box>
                        </Paper>
                      </Box>
                    ))}
                  </Box>
                  <Box m={1} textAlign='center'>
                    <Typography variant='subtitle2' color='textSecondary'>
                     Teléfonos: 55 5015-8100 ó 01 800 8138181
                    </Typography>
                    <Box my={1} textAlign='center'>
                      <Divider />
                    </Box>
                    <Typography
                      align='center'
                      variant='body2'>
                      Los tiempos de respuesta pueden variar
                    </Typography>
                  </Box>
              </Box>
                </div>                        
            </div>
        </Modal>
        </div>
    );
}