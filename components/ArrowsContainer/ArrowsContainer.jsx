import Box from '@mui/material/Box';

const ArrowBox = () => (
	<Box
		sx={{
			transform: 'rotate(135deg)',
			bgcolor: 'white',
			width: '150px',
			height: '150px',
			borderRadius: ' 0 10px',
		}}
	/>
);

const ArrowsContainer = (props) => {
	const { children } = props;

	return (
		<Box>
			<Box
				py={18}
				mt={12}
				mb={7}
				sx={{
					bgcolor: '#F6F7F9',
					position: 'relative',
				}}>
				<Box
					sx={{
						position: 'absolute',
						zIndex: 0,
						transform: 'translateX(-50%) translateY(-50%)',
						left: '50%',
						top: 0,

						'& > div': {
							boxShadow: '0px -1px 5px 0px rgba(0, 0, 0,.03)',
						},
					}}>
					<ArrowBox />
				</Box>

				{children}

				<Box
					sx={{
						position: 'absolute',
						zIndex: 0,
						bottom: 0,
						transform: 'translateX(-50%) translateY(50%)',
						left: '50%',

						'& > div': {
							boxShadow: '-1px 0px 5px 0px rgba(0, 0, 0,.03)',
						},
					}}>
					<ArrowBox />
				</Box>
			</Box>
		</Box>
	);
};

export default ArrowsContainer;
