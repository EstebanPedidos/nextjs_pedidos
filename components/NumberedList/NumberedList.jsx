import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const NumberedList = (props) => {
	const { items } = props;

	return (
		<List>
			{items.map((listItem, i) => (
				<ListItem
					key={listItem.label}
					sx={{
						mb: 2.5,
						transition: 'all .3s ease-in-out',
						position: 'relative',

						'&:hover': {
							transform: 'translateY(-1px)',
						},

						'&:hover .number': {
							borderColor: '#4116C4',
							color: '#33C1FF',
						},

						'&:hover .custom-tooltip': {
							display: 'block',
							animation: 'odsoky 1s ease-in-out infinite alternate',
						},
					}}>
					<Box pl={{ xs: 0, md: 5 }} pr={{ xs: 5 }}>
						<Box
							className='number'
							sx={{
								border: '3px solid #424242',
								padding: 0.5,
								width: 50,
								height: 50,
								borderRadius: '50%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'Center',
							}}>
							<Typography fontSize={20} fontWeight={700}>
								{i + 1}
							</Typography>
						</Box>
					</Box>
					<ListItemText
						primary={listItem.label}
						primaryTypographyProps={{
							fontSize: 18,
							fontWeight: 500,
							color: '#333',
						}}
					/>
					<Box
						className='custom-tooltip'
						sx={{
							display: 'none',
							position: 'absolute',
							left: { xs: '5rem', md: '9rem' },
							bgcolor: 'white',
							px: 2,
							py: 2,
							boxShadow: '1px 1px 5px 0px rgb(0 0 0 / 8%)',
							borderRadius: 1.5,
						}}>
						{listItem.tooltip}
						<Box
							sx={{
								borderStyle: 'solid',
								borderColor: '#FFF transparent transparent',
								position: 'absolute',
								top: '50%',
								left: '-10px',
								transform: 'rotate(90deg) translateX(-50%)',
								borderWidth: '5px',
							}}
						/>
					</Box>
				</ListItem>
			))}
		</List>
	);
};

export default NumberedList;
