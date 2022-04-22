import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Divider, Paper } from '@material-ui/core';
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
					<Typography align='center' variant='h4'>
						Ayuda
					</Typography>
				</Box>
				<DialogContent>
					<DialogContentText>
						Horario de Atención Lunes a Domingo de 9 a 18:30hrs
					</DialogContentText>
					{items.map(({ description, icon: Icon, title }) => (
						<Box key={title} marginBottom={'1.5rem'}>
							<Paper>
								<Box
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
					<Box
						marginY={'1rem'}
						color='gray'
						fontSize='14px'
						textAlign={'center'}>
						Contáctanos: 55 5015-8100 ó 01 800 8138181
					</Box>
					<Divider />
					<Box marginY={'1rem'}>
						<Typography align='center'>
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
