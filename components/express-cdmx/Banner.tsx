import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { COLORS } from '../../themes/light-theme';

export interface ChildrenProps {
	children: JSX.Element;
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

export const Medium = ({ children, className }: any) => (
	<Grid xs={12} md={6} item className={className}>
		{children}
	</Grid>
);

const useStyles = makeStyles((theme) => ({
	alignment: {
		textAlign: 'left',
	},
	heading: {
		fontSize: '3rem',
		fontWeight: 'bold',
		color: COLORS.primary,
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
	children: JSX.Element;
	component: string;
	textClass: string;
}

export const BaseText: React.FC<IBaseTextProps> = ({
	children,
	component,
	textClass,
}: any) => {
	const classes = useStyles();

	return (
		<Typography
			component={component}
			className={clsx(classes.alignment, classes[textClass])}>
			{children}
		</Typography>
	);
};

export const Head = ({ children }: any) => (
	<BaseText component='h1' textClass='heading'>
		{children}
	</BaseText>
);

export const SubTitle = ({ children }: any) => (
	<BaseText component='h2' textClass='subtitle'>
		{children}
	</BaseText>
);

const subtitle = {
	fontSize: '1.5rem',
	color: '#424242',
};

export const Banner = () => {
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
									Envíos rápidos CDMX
								</Typography>
								<Typography
									variant='h1'
									color='#333'
									fontSize={36}
									fontWeight={700}
									sx={{
										'& > span': {
											color: '#3655a5',
										},
									}}>
									Pedidos <span>Express</span> CD<span>MX</span>
								</Typography>
								<Typography fontSize={18} color='#333'>
									Tu pedido en 3 horas o menos
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
