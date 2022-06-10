import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { makeStyles } from '@mui/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export interface ChildrenProps {
	children: JSX.Element | any;
}

const usePaddinedStyles = makeStyles({
	container: {
		margin: '2rem 10.5rem',
	},
});

export const Paddined: React.FC<ChildrenProps> = ({ children }) => {
	const classes = usePaddinedStyles();

	return <div className={classes.container}>{children}</div>;
};

export interface IMediumProps extends ChildrenProps {
	className?: string;
}

export const Medium: React.FC<IMediumProps> = ({ children, className }) => (
	<Grid xs={12} md={6} item className={className}>
		{children}
	</Grid>
);
// onniman
const useStyles = makeStyles((theme) => ({
	alignment: {
		textAlign: 'left',
	},
	heading: {
		fontSize: '3rem',
		color: '#424242',
		fontWeight: 'bold',
		'& span': {
			//color: primary.main,
		},
	},
	paddined: {
		paddingTop: '6rem !important',
	},
	subtitle: {
		fontSize: '1.5rem',
		color: '#666667',
	},
	hint: {
		fontSize: '1rem',
		color: '#666667',
	},

	buttonW: {
		border: '2px solid #424242',
		color: '#424242',
		'&:hover': {
			border: '2px solid #424242',
		},
	},

	buttonA: {
		borderWidth: '2px',
		color: '#424242',
		'&:hover': {
			borderWidth: '2px',
		},
	},
}));

export interface IBaseTextProps {
	children: JSX.Element;
	component: string;
	textClass: string;
}

export const BaseText: React.FC<IBaseTextProps> = ({
	children,
	component,
	textClass,
}) => {
	const classes = useStyles();

	return (
		// <Typography
		//   component={component}
		//   className={clsx(classes.alignment, classes[textClass])}
		// >
		//   {children}
		// </Typography>
		<span></span>
	);
};

export const Head: React.FC<ChildrenProps> = ({ children }) => (
	<BaseText component='h1' textClass='heading'>
		{children}
	</BaseText>
);

export const SubTitle: React.FC<ChildrenProps> = ({ children }) => (
	<BaseText component='h2' textClass='subtitle'>
		{children}
	</BaseText>
);

export const Hint: React.FC<ChildrenProps> = ({ children }) => (
	<BaseText component='h2' textClass='hint'>
		{children}
	</BaseText>
);

export const Banner = () => {
	const classes = useStyles();

	return (
		<Box bgcolor='#f6f7fa' pt={3}>
			<Container maxWidth={false} sx={{ px: { md: '0!important' } }}>
				<Grid spacing={4} container>
					<Grid xs={12} lg={6} item>
						<Box
							height='100%'
							display='flex'
							justifyContent='center'
							alignItems={{ xs: 'start', lg: 'center' }}
							flexDirection='column'>
							<Box
								display='flex'
								flexDirection='column'
								gap={3}
								px={{ xs: 4, lg: 0 }}>
								<Typography fontSize={20} fontWeight={500} color='#555'>
									¿Necesitas ayuda con tu equipo?
								</Typography>
								<Typography
									variant='h1'
									color='#333'
									fontSize={36}
									fontWeight={700}
									mb={5}
									sx={{
										'& > span': {
											color: '#3655a5',
										},
									}}>
									<span>Soporte</span> técnico{' '}
									<span>
										<u>gratuito</u>
									</span>
									<br />
									¡Listos para ayudarte!
								</Typography>

								<Box display='flex' gap={2}>
									<Box flex={1}>
										<Button
											sx={{
												borderWidth: '2px',
												color: '#333',
												borderColor: '#333',
												px: 5,
												'&:hover': {
													borderWidth: '2px',
													borderColor: '#333',
												},
											}}
											variant='outlined'
											target='_blank'
											size='large'
											href='https://api.whatsapp.com/send?phone=5215634076339&text=Pedidos.com%20necesito%20ayuda'>
											<WhatsAppIcon /> &nbsp; WhatsApp
										</Button>
									</Box>
									<Box flex={1}>
										<Button
											sx={{
												borderWidth: '2px',
												color: '#3655a5',
												borderColor: '#3655a5',
												backgroundColor: '#e4e8f3',
												px: 5,
												'&:hover': {
													borderWidth: '2px',
													backgroundColor: '#dee5fb',
												},
											}}
											target='_blank'
											href='https://calendly.com/pedidoscom/60min?back=1&month=2021-09'
											variant='outlined'
											size='large'>
											Agendar cita
										</Button>
									</Box>
								</Box>

								<Typography fontSize={14} color='#333'>
									Exclusivo para clientes con compras realizadas.
								</Typography>
							</Box>
						</Box>
					</Grid>

					<Grid xs={12} lg={6} item>
						<Box textAlign={{ xs: 'center', md: 'right' }}>
							<Box component='picture'>
								<Box
									component='source'
									data-srcset='https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/sp-day-xs.webp'
									media='(max-width: 855px)'
									sizes='457px'
									srcSet='https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/sp-day-xs.webp'
								/>
								<Box
									component='source'
									data-srcset='https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/sp-day.webp'
									media='(max-width: 1200px)'
									sizes='457px'
									srcSet='https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/sp-day.webp'
								/>
								<Box
									component='img'
									data-sizes='auto'
									src='https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/sp-day.webp'
									data-src='https://pedidos.com/myfotos/pedidos-com/pagina/soporte-tecnico/sp-day.webp'
									alt='Pedidos.com, servicio, soporte'
									sizes='457px'
									sx={{
										height: ' 100%',
										maxWidth: '100%',
										display: 'block',
										mx: 'auto',
									}}
								/>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Banner;
