import Link from 'next/link';
import { Icon, Button, Grid, Box } from '@mui/material';
import { COLORS } from '/themes/light-theme';

export const Item = ({ icon: IconItem, title, path }) => {
	return (
		<Box py={1}>
			<Grid container 
					direction="row"
					justifyContent="center"
					alignItems="center">
					<Grid item px={1}> 
						<Link href={path} passHref >
							<Button variant="outlined" color="primary" fullWidth size="large" startIcon={<IconItem />}>
								<span>{title}</span>
							</Button>
						</Link>
					</Grid>
			</Grid>
		</Box>
		//  <Link
	// 	style={{
	// 		// border: `solid ${isActive ? '3px' : '1px'}`,
	// 		display: 'flex',
	// 		justifyContent: 'center',
	// 		alignItems: 'center',
	// 		gridGap: '5px',
	// 		padding: '1em 1.5em',
	// 		minWidth: '230px',
	// 		borderColor: COLORS.primary,
	// 		cursor: 'pointer',
	// 		borderRadius: '10px',
	// 	}}>
	// 	<Icon>
	// 		<IconItem />
	// 	</Icon>
	// 	<span>{title}</span>
	// </Link>
	);
};
