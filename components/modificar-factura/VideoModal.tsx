import * as React from 'react';
import { styled } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';
import {
	Button,
	DialogActions,
	DialogContent,
	Dialog,
	Typography,
	Grid,
	Box,
	IconButton,
	DialogTitle,
} from '@mui/material';

interface Props {
	open: boolean;
	setOpen: Function;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

export interface DialogTitleProps {
	id: string;
	children?: React.ReactNode;
	onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 4 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label='close'
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

export default function VideoModal({ open, setOpen }: Props) {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<BootstrapDialog
				onClose={handleClose}
				maxWidth={'lg'}
				aria-labelledby='customized-dialog-title'
				open={open}>
				<BootstrapDialogTitle
					id='customized-dialog-title'
					onClose={handleClose}
				/>
				<DialogContent sx={{ p: '0!important' }} dividers>
					<Grid container spacing={4}>
						<Grid item xs={12} md={8}>
							<iframe
								style={{ border: 0 }}
								width='100%'
								height='400'
								src='https://www.youtube.com/embed/MGuOo1_xpBI'
								title='YouTube video player'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
						</Grid>
						<Grid item xs={12} md={4}>
							<Box px={3}>
								<h1>¿Cómo Refacturar?</h1>
								<Typography gutterBottom>
									Si necesitas hacer un cambio dentro de la factura de tu pedido
									en este video te presentamos esta opción donde podrás realizar
									el cambio, solo entra a tu sección de facturas dentro de tu
									cuenta, podrás hacer uso en caso de querer un cambio en tu
									factura.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</DialogContent>
			</BootstrapDialog>
		</div>
	);
}
