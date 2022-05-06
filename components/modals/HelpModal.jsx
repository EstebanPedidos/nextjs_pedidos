import React from 'react';
//MUI
import {Dialog, DialogContent, DialogContentText, Box, 
	Divider, Paper, Typography, Button, Card, 
    CardActionArea, CardContent, CardActions,CardMedia
   } from '@mui/material';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	pointer: {
		cursor: 'pointer',
	},
}));

export function HelpModal({ isOpen, onClose }) {
	const { pointer } = useStyles();
	return (
		<Dialog open={isOpen} onClose={onClose}>
			<Box padding={'1rem'}>
				<Box marginTop={'1rem'}>
					<Typography align='center' component="h3" variant="h5" fontWeight="fontWeightMedium">
						Ayuda
					</Typography>
				</Box>
				<DialogContent>
					<DialogContentText>
						Horario de Atención Lunes a Domingo de 9 a 18:30hrs
					</DialogContentText>
					<Box component="div" pt={2}>
						{items.map(({ description, icon: Icon, title }) => (
							<Box key={title} marginBottom={'1em'}>
								<Paper variant="outlined">
									<Box sx={{borderRadius:'8px'}}
										className={`${pointer}`}
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
					<Box m={1} textAlign="center">
						<Typography
							variant="body2" color="textSecondary">
							Contáctanos: 55 5015-8100 ó 01 800 8138181
						</Typography>
						<Box my={1} textAlign="center">
							<Divider />
						</Box>
						<Typography align='center' color="textSecondary" variant="body2">
							Los tiempos de respuesta pueden variar
						</Typography>
					</Box>
				</DialogContent>
			</Box>
		</Dialog>
	);
}

const items = [
	{
		icon: ChatBubbleOutlineIcon,
		title: 'Chat',
		description: 'Inicia una conversación',
	},
	{
		icon: WhatsAppIcon,
		title: 'WhatsApp',
		description: 'Envia un mensaje',
	},
	{
		icon: MailOutlineIcon,
		title: 'Correo',
		description: 'En breve responderemos',
	},
];
