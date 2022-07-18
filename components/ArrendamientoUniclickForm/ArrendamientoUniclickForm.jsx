import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	padding: '0 65px',
	border: 0,
	lineHeight: 1.5,
	backgroundColor: '#385fb9',
	fontSize: 18,
	fontWeight: 600,
	transform: 'translateY(50%)',
	borderColor: '#385fb9',
	'&:hover': {
		backgroundColor: '#264692',
		boxShadow: '3px 3px 9px 1px #7e93eb6b',
		borderColor: '#264692',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#385fb9',
		borderColor: '#385fb9',
	},
	'&:focus': {
		boxShadow: '3px 3px 9px 1px #7e93eb6b',
	},
});

const ArrendamientoUniclickForm = () => {
	const [name, setName] = React.useState(null);
	const [email, setEmail] = React.useState(null);
	const [phone, setPhone] = React.useState(null);
	const [open, setOpen] = React.useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			return;
		}

		if (!email) {
			return;
		}

		if (!phone) {
			return;
		}

		setOpen(true);

		// setName(null)
		// setEmail(null)
		// setPhone(null)
	};

	return (
		<Box
			sx={{
				width: {
					sm: '70%',
				},
				ml: 'auto',
				pt: 5,
				px: 7,
				border: '1px solid #f5f5f5',
				borderRadius: '15px',
				boxShadow: '1px 1px 5px 0px rgb(0 0 0 / 8%)',
				bgcolor: '#fff',
				m: '10px auto',
				position: 'relative',
				zIndex: 999,
			}}>
			<Box
				component='img'
				src='https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/uniclick.svg'
				alt='Uniclick'
				px={7}
				mb={4}
				width='100%'
				mx='auto'
			/>

			<Typography fontSize={18} textAlign='center' color='#333'>
				Solicita tu arrendamiento y
			</Typography>

			<Typography fontSize={18} textAlign='center' fontWeight={500}>
				estrena los equipos que tu negocio necesita.
			</Typography>

			<Box
				component='form'
				display='flex'
				flexDirection='column'
				gap={1.5}
				mt={5}
				onSubmit={onSubmit}>
				<TextField
					label='Nombre'
					variant='outlined'
					value={name}
					onChange={(event) => setName(event.target.value)}
					size='small'
					InputProps={{
						sx: {
							borderRadius: 16,
						},
					}}
					required
				/>
				<TextField
					label='Correo'
					variant='outlined'
					type='email'
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					size='small'
					InputProps={{
						sx: {
							borderRadius: 16,
						},
					}}
					required
				/>
				<TextField
					label='Teléfono'
					variant='outlined'
					type='tel'
					value={phone}
					onChange={(event) => setPhone(event.target.value)}
					size='small'
					InputProps={{
						sx: {
							borderRadius: 16,
						},
					}}
					required
				/>

				<Box textAlign='center'>
					<CustomButton variant='contained' type='submit'>
						Solicita tu arrendamiento
					</CustomButton>
				</Box>
			</Box>

			<Dialog
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'>
				<DialogTitle id='alert-dialog-title' textAlign='center'>
					Gracias por tu registro
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						<Box px={4}>Nos pondremos en contacto contigo.</Box>
					</DialogContentText>
					<Divider sx={{ mt: 2, mb: 1 }} />
					<Box sx={{ textAlign: 'center' }}>
						<Button onClick={() => setOpen(false)}>Entendido</Button>
					</Box>
				</DialogContent>
			</Dialog>
		</Box>
	);
};

export default ArrendamientoUniclickForm;
