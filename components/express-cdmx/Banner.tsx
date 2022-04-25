import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Typography, Grid, Box } from '@mui/material';
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
	const classes = useStyles();

	return (
		<Paddined>
			<Grid container spacing={2}>
				<Medium>
					<Box
						height={'100%'}
						display='flex'
						justifyContent='center'
						flexDirection='column'>
						<Typography style={subtitle}>
							Envíos rápidos CDMX
						</Typography>
						<Typography
							variant='h3'
							component='h2'
							color={'primary'}
							fontWeight='600'>
							Pedidos <span>Express</span> CD<span>MX</span>
						</Typography>
						<Typography style={subtitle}>
							Tu pedido en 3 horas o menos
						</Typography>
					</Box>
				</Medium>
				<Medium>
					<img
						src='/sp-day.png'
						alt='sp-day'
						width='100%'
						height='auto'
					/>
				</Medium>
			</Grid>
		</Paddined>
	);
};

export default Banner;
