import React,{useState} from 'react';
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
		icon: WhatsAppIcon,
		title: 'WhatsApp',
		description: 'Exclusivo para Empresas',
	},
  {
		icon: ChatBubbleOutlineIcon,
		title: 'Chat',
		description: 'Inicia una conversación',
	},
	
  {
		icon: WhatsAppIcon,
		title: 'WhatsApp',
		description: 'Envía un mensaje',
	},
	{
		icon: MailOutlineIcon,
		title: 'Correo',
		description: 'En breve responderemos',
	},
];

export default function Help({tipo}) {
    const classes         = useStyles();
    const [modalStyle]    = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    
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
            (tipo == '3')&&
            <Button variant="contained" fullWidth size="large" startIcon={<HelpOutlineIcon/>}  onClick={()=>{setOpen(true);}}>¿Necesitas Ayuda?</Button>
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
                    {items.map(({ description, icon: Icon, title }) => (
                      <Box key={title} marginBottom={'1em'}>
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