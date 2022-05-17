import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CategoryGrid = (props) => {
	const { categories } = props;

	return (
		<Grid spacing={8} container>
			{categories.map((category, index) => (
				<Grid key={category.name} xs={6} md={3} item>
					<Box
						component='a'
						href={category.url}
						display='block'
						sx={{
							'&:hover > p': {
								color: '#3655a5!important',
							},
						}}>
						<Box
							px={4}
							mb={2}
							sx={{
								'& > img': {
									width: '100%',
									position: 'relative',
									display: 'block',
									margin: '0 auto',
									transition: 'transform 0.1s ease',
								},
								'&:hover > img': {
									transform: 'translateY(-0.25rem)',
								},
							}}>
							<img src={category.img} alt={category.label} />
						</Box>
						<Typography
							textAlign='center'
							fontWeight='700'
							fontSize={18}
							color='#3F3F3F'>
							{category.label}
						</Typography>
					</Box>
				</Grid>
			))}
		</Grid>
	);
};

export default CategoryGrid;
