import React from 'react';
import clsx from 'clsx';
//MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { makeStyles } from '@mui/styles';

export interface ChildrenProps {
	children: JSX.Element | JSX.Element[] | string;
}

const usePaddinedStyles = makeStyles({
	container: {
		margin: '2rem 3.5rem',
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

const useStyles = makeStyles((theme) => ({
	alignment: {
		textAlign: 'left',
	},
	heading: {
		fontSize: '2.5rem',
		fontWeight: 'bold',
		'& span': {
			//@ts-ignore
			color: theme.palette.primary.main,
		},
	},
	paddined: {
		paddingTop: '6rem !important',
	},
	subtitle: {
		fontSize: '1.5rem',
		color: '#424242',
	},
}));

export interface IBaseTextProps {
	children: JSX.Element | JSX.Element[] | string;
	component: React.ElementType<any>;
	textClass: string;
}

export const BaseText: React.FC<IBaseTextProps> = ({
	children,
	component,
	textClass,
}) => {
	const classes = useStyles();

	return (
		<Typography
			component={component}
			className={clsx(classes.alignment, classes[textClass])}>
			{children}
		</Typography>
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

export const Banner = () => {
	//const classes = useStyles();

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
									Entregas PickUp Center
								</Typography>
								<Typography
									variant='h1'
									color='#424242'
									fontSize={36}
									fontWeight={700}
									mb={2}
									sx={{
										'& > span': {
											color: '#3655a5',
										},
									}}>
									<span>Pide</span> en linea
									<br />y recoge en nuestro centro
									<br />
									de atención
									<span>.</span>
								</Typography>

								<Typography color='#555'>
									¡Descúbre esta forma de entrega en Polanco!
								</Typography>
							</Box>
						</Box>
					</Grid>

					<Grid xs={12} lg={6} item>
						<Box textAlign={{ xs: 'center', md: 'right' }}>
							<Box component='picture'>
								<Box
									component='source'
									data-srcset='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/pickupcenter-lp.webp'
									media='(max-width: 855px)'
									sizes='457px'
									srcSet='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/pickupcenter-lp.webp'
								/>
								<Box
									component='source'
									data-srcset='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/pickupcenter-lp.webp'
									media='(max-width: 1200px)'
									sizes='457px'
									srcSet='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/pickupcenter-lp.webp'
								/>
								<Box
									component='img'
									data-sizes='auto'
									src='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/pickupcenter-lp.webp'
									data-src='https://pedidos.com/myfotos/pedidos-com/pagina/servicios/pickupcenter-lp.webp'
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
