import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from 'components/Link';

const ToutCard = (props) => {
	const { title, href, src, sx, innerSx, mediaSx, floating } = props;
	return (
		<Link href={href} underline='none' sx={{ ...sx }}>
			<Box
				sx={{
					border: '1px solid rgb(229 229 229 / 55%)',
					borderRadius: 2,
					transition: 'all 0.2s ease-in-out',
					overflow: 'hidden',
					...innerSx,

					'&:hover': {
						boxShadow: floating
							? '0px 15px 14px #75757540, 0px 15px 25px rgb(0 0 0 / 3%)'
							: 'inherit',
						transform: floating ? 'translateY(-1px)' : 'inherit',

						'& img': {
							transform: 'scale(1.02)',
						},
					},
				}}>
				<Box
					height='200px'
					overflow='hidden'
					bgcolor='#fbfbfb'
					textAlign='center'
					sx={{
						...mediaSx,
					}}>
					<Box
						component='img'
						sx={{
							transition: 'all 0.3s ease-in-out',
							maxWidth: '100%',
							width: '100%',
							verticalAlign: 'middle',
						}}
						src={src}
						alt={title}
					/>
				</Box>
				<Box
					sx={{
						borderTop: '1px solid #e5e5e5',
						p: '1rem 0.5rem',
						bgcolor: 'white',
					}}>
					<Typography
						variant='h5'
						fontSize={18}
						fontWeight={700}
						color='#3f3f3f'
						p='0 1.5em'>
						{title}
					</Typography>
				</Box>
			</Box>
		</Link>
	);
};

export default ToutCard;
