import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import Link from 'components/Link';

const BrandCard = (props) => {
	const { brand } = props;

	return (
		<Box
			sx={{
				boxShadow: '-1px 2px 7px 1px rgb(100 100 100 / 10%)',
				borderRadius: 2,
				p: 2.5,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 3,
				mb: {
					xs: 0,
					md: 4,
				},
			}}>
			<Box
				component='img'
				src={brand.logo}
				sx={{
					borderRadius: '50%',
					width: 90,
					height: 90,
					border: '3px solid white',
					boxShadow: '2px 6px 6px 1px rgb(0 0 0 / 9%)',
					marginTop: '-65px',
				}}
			/>

			<Box component='img' src={brand.img} width='100%' />

			<Divider
				sx={{ borderBottom: '2px solid rgba(0, 0, 0, 0.05)', width: '100%' }}
			/>

			<Box width='100%' px={2}>
				<Typography textTransform='uppercase' color='#999'>
					{brand.title}
				</Typography>

				<Box
					py={2.5}
					my={0}
					display='flex'
					flexDirection='column'
					sx={{
						listStyle: 'none',
						px: 0,
					}}>
					{brand.links.map((link) => (
						<Box
							key={link.label}
							sx={{
								py: 1,

								'&:hover': {
									bgcolor: '#f9f9f9b5',
									borderRadius: 5,
									textDecoration: 'underline',
									color: '#3655a5',
								},
							}}>
							<Link underline='none' target='_blank' href={link.href}>
								<Typography
									sx={{
										color: '#3c4043',
										fontWeight: 500,
										fontSize: 15,
									}}>
									{link.label}
								</Typography>
							</Link>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default BrandCard;
