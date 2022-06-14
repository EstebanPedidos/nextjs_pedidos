import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Link from 'components/Link';

const FloatingToutCard = (props) => {
	const {
		title,
		subtitle,
		src,
		href,
		cta,
		floatingTitle,
		centeredTitle,
		links,
		sx,
		children,
	} = props;
	return (
		<Box component={href ? Link : 'div'} href={href} underline='none'>
			<Box
				sx={{
					height: 260,
					boxShadow: 'rgb(0 0 0 / 5%) 0 10px 20px, rgb(0 0 0 / 20%) 0 0 1px',
					borderRadius: 2,
					overflow: 'hidden',
					transition: 'all 0.2s ease-in-out',
					backgroundImage: `url(${src})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100%',
					backgroundPosition: 'top right',
					position: 'relative',
					...sx,

					'&:hover': {
						boxShadow: '0px 15px 14px #75757540, 0px 15px 25px rgb(0 0 0 / 3%)',
						transform: 'translateY(-1px)',

						'& .cta-text': {
							transform: 'translateY(0)',
						},
					},
				}}>
				{floatingTitle && (
					<Typography
						variant='h4'
						fontSize={18}
						color='#757575'
						lineHeight={1.5}
						dangerouslySetInnerHTML={{
							__html: title,
						}}
						sx={{
							position: 'absolute',
							top: '40%',
							left: centeredTitle ? '37%' : '10%',

							'& > strong': {
								display: 'block',
								color: '#424242',
								fontWeight: 700,
								fontSize: 21,
							},

							'& > span': {
								color: 'orange',
								fontWeight: 700,
								fontSize: 20,
							},
						}}
					/>
				)}

				{links && (
					<Box
						position='absolute'
						sx={{
							top: '2.3rem',
							left: '32%',
							right: 0,
						}}>
						{links.map((link) => (
							<Box key={link.label} mb={1}>
								<Link
									href={link.url}
									underline='none'
									sx={{
										color: '#717171',
										fontSize: 15,
										fontWeight: 500,

										'&:hover': {
											color: '#325ac3',
										},
									}}>
									{link.label}
								</Link>
							</Box>
						))}
					</Box>
				)}

				{children}

				<Box
					className='cta-text'
					sx={{
						bgcolor: 'white',
						position: 'absolute',
						width: '100%',
						left: 0,
						bottom: 0,
						transform: 'translateY(2.25rem)',
						transition: '0.4s',
						px: 2,
						pt: 2,
						pb: 2,
					}}>
					{!floatingTitle && (
						<Typography
							variant='h4'
							fontSize={16}
							color='#333'
							lineHeight={1.5}
							fontWeight={700}
							dangerouslySetInnerHTML={{
								__html: title,
							}}
							sx={{
								'& > span': {
									color: 'orange',
								},
							}}
						/>
					)}

					{subtitle && (
						<Typography
							fontSize={15}
							color='#757575'
							mb={1.5}
							dangerouslySetInnerHTML={{
								__html: subtitle,
							}}
						/>
					)}

					<Box
						display='flex'
						alignItems='center'
						gap={1}
						mt={!floatingTitle && title ? 2 : 0}>
						<Typography variant='caption' color='#717171' fontWeight={500}>
							{cta ?? 'Ver más'}
						</Typography>
						<ArrowRightAltIcon sx={{ color: '#717171' }} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default FloatingToutCard;
