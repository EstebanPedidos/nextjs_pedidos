import React from 'react';

// @meterial-ui/icons
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// components @mui/material

import { Box, Typography, Button, Hidden } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
//Nextjs
import Link from 'next/link';

export const SubNav = () => {
	function handleClick(event) {
		event.preventDefault();
		console.info('You clicked a breadcrumb.');
	}

	return (
		<>
			<Box
				display='flex'
				flexDirection='column'
				paddingX='5%'
				justifyContent='center'
				bgcolor='#f6f7f9'
				py={1}>
				<Box display='flex' justifyContent='space-between' alignItems='center'>
					<Hidden smDown={true}>
						<Box>
							<Box display={'flex'} alignItems='center'>
								<span
									style={{
										background: 'rgb(116, 195, 12)',
										borderRadius: '50%',
										display: 'inline-block',
										width: '0.6rem',
										height: '0.6rem',
										marginRight: '0.3rem',
									}}></span>
								<Typography variant='body2'>
									Atención Lunes a Domingo de 9 a 18:30hrs
								</Typography>
							</Box>
						</Box>
						<Box display={'flex'} alignItems='center' justifyContent='center'>
							<LocalPhoneOutlinedIcon/>
							<Typography variant="subtitle2" component="p">
								¡Llámanos! 55 5015-8100
							</Typography>
						</Box>
					</Hidden>
				</Box>
			</Box>

		</>
	);
};

const SubNavItem = ({ url, icon, title, description }) => {
	return (
        <Link href={url !== undefined ? url : ''}>
            <a>
                <Box component={'div'} width={'350px'} marginY='5px' marginRight={'5px'}>
                    <Box
                        display='flex'
                        borderRight={'0.5px solid rgb(229, 229, 229)'}
                        justifyContent='center'>
                        <Box display={'flex'} alignItems='center'>
                            <img
                                style={{
                                    padding: '8px',
                                    height: '50px',
                                }}
                                src={icon}
                                alt={title}
                            />
                        </Box>
                        <Box minHeight={'90px'}>
                            <p>
                                <Typography component={'span'} variant='subtitle2'>
                                    {title}
                                </Typography>
                                <br />
                                <Typography
                                    style={{
                                        opacity: '0.8',
                                        fontSize: '1',
                                    }}
                                    componen='span'
                                    variant='body2'>
                                    {description}
                                </Typography>
                            </p>
                        </Box>
                    </Box>
                </Box>
            </a>
        </Link>
	);
};
