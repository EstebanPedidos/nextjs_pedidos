import React from 'react';
import clsx from 'clsx';
 //MUI
 import {Container,Box, Grid, Paper, Typography, Button, Divider, Card, 
    CardActionArea, CardContent, CardActions,CardMedia
   } from '@mui/material';
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
		
		<Paddined>
			<Grid container spacing={2}>
				 <Medium>{/*className={classes.paddined}*/}
					<Container>
						<SubTitle>Entregas PickUp Center</SubTitle>
						<Head>
							<>
								<span>Pide</span> en l??nea y recoge en nuestro centro de
								atenci??n
								<span>.</span>
							</>
						</Head>
						<SubTitle>??Desc??bre esta forma de entrega en Polanco!</SubTitle>
					</Container>
				</Medium>
				<Medium>
					<img
						src='/pickupcenter-lp.png'
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
