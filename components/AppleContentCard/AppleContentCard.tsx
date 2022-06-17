import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const AppleContentCard = (props) => {
	const { title, description, icon, img, inverse } = props;

	return (
		<Box
			width='100%'
			sx={{
				borderRadius: 2,
				border: '1px solid #f5f5f5',
				boxShadow: '0 8px 16px 0 rgb(51 51 51 / 8%)',
				px: 2,
				py: 2.5,
			}}>
			<Grid spacing={4} container>
				{inverse && (
					<Grid xs={12} md={6} item>
						<Box component='img' src={img} width='100%' />
					</Grid>
				)}

				<Grid xs={12} md={6} item>
					<Box p={5}>
						<Box display='flex' gap={2} mb={3}>
							<Box component='img' src={icon} width={90} height='auto' />
							<Typography fontWeight={700} fontSize={24} lineHeight={1.2}>
								{title}
							</Typography>
						</Box>
						<Typography>{description}</Typography>
					</Box>
				</Grid>

				{!inverse && (
					<Grid xs={12} md={6} item>
						<Box component='img' src={img} width='100%' />
					</Grid>
				)}
			</Grid>
		</Box>
	);
};

export default AppleContentCard;
