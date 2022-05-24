import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const TipsBanner = (props) => {
	const { items } = props;

	return (
		<Grid spacing={5} justifyContent='center' container>
			{items.map((item) => (
				<Grid xs={12} sm={4} md={3} key={item.label} item>
					<Box
						display='flex'
						gap={2}
						flexDirection={{ sm: 'column', lg: 'row' }}
						alignItems='center'>
						<img
							width={45}
							height={45}
							data-sizes='auto'
							src={item.img}
							data-src={item.img}
							alt={item.label}
						/>
						<Box>
							<Typography
								fontWeight={700}
								color='#333'
								textAlign={{ sm: 'center', lg: 'left' }}
								dangerouslySetInnerHTML={{
									__html: item.label,
								}}
								sx={{
									'& > span': {
										color: '#3655a5',
									},
								}}
							/>
							<Typography
								color='#333'
								textAlign={{ sm: 'center', lg: 'left' }}
								dangerouslySetInnerHTML={{
									__html: item.description,
								}}
							/>
						</Box>
					</Box>
				</Grid>
			))}
		</Grid>
	);
};

export default TipsBanner;
