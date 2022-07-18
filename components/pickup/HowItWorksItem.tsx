import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

export interface DataItem {
	title: string;
	bigTitle: boolean;
	text: string;
	icon?: string;
	iconWidth?: number;
	fontSize?: number;
}

export interface IHowItWorksItemProps {
	item: DataItem;
}

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

export const HowItWorksItem = ({ item }: any) => {
	const classes = useStyles();
	const titleClassName = clsx({
		[classes.bigTitle]: item.bigTitle,
		[classes.title]: !item.bigTitle,
	});

	return (
		<Grid item xs={12} md={6} lg={4}>
			<Box display='flex' gap={1.5} py={2.5}>
				{item.icon && (
					<Box
						display='flex'
						justifyContent={'center'}
						alignItems='center'
						height={'100px'}>
						{/* {item.icon && <item.icon />} */}
						<Box
							component='img'
							src={item.icon}
							alt={item.title}
							sx={{
								width: item.iconWidth,
								height: 'auto',
								border: 0,
								px: 1.5,
								py: 2.5,
							}}
						/>
					</Box>
				)}
				<Box>
					<Typography
						component={item.bigTitle ? 'h1' : 'h4'}
						variant={item.bigTitle ? 'h1' : 'h6'}
						fontSize={item.bigTitle ? 32 : 18}
						fontWeight={item.bigTitle ? 700 : 500}
						gutterBottom>
						{item.title}
					</Typography>
					<Typography
						component='p'
						fontSize={item.fontSize ?? 14}
						dangerouslySetInnerHTML={{ __html: item.text }}
					/>
				</Box>
			</Box>
		</Grid>
	);
};

export default HowItWorksItem;
