import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const useStyles = makeStyles({
	bigTitle: {
		fontSize: '1.8rem',
		fontWeight: 'bold',
	},
	title: {
		fontSize: '1rem',
		fontWeight: 'bold',
	},
});

// export interface DataItem {
// 	title: string;
// 	bigTitle: boolean;
// 	text: string;
// 	icon: string;
// }

// export interface IHowItWorksItemProps {
// 	item: DataItem;
// }

export const HowItWorksItem = ({ item }: any) => {
	const classes = useStyles();
	const titleClassName = clsx({
		[classes.bigTitle]: item.bigTitle,
		[classes.title]: !item.bigTitle,
	});

	return (
		<Grid item xs={12} md={6} lg={3}>
			<Grid container spacing={2}>
				<Grid item xs={1.5}>
					<Box
						display='flex'
						justifyContent={'center'}
						alignItems='center'
						height={'100px'}>
						{/* {item.icon && <item.icon />} */}
						{item.icon && (
							<img
								src={item.icon}
								alt={item.title}
								style={{
									width: '50px',
									height: 'auto',
									border: 0,
								}}
								sizes='50px'
							/>
						)}
					</Box>
				</Grid>
				<Grid item xs={10.5}>
					<Typography
						component={item.bigTitle ? 'h1' : 'h4'}
						variant={item.bigTitle ? 'h1' : 'h6'}
						className={titleClassName}
						gutterBottom>
						{item.title}
					</Typography>
					<Typography component='p'>{item.text}</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default HowItWorksItem;
