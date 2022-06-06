import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';

const AnimatedFigures = (props) => {
	const { extended, figures } = props;

	const getImage = React.useCallback(
		(index) => {
			const defaultImages = [
				'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/triangle1.svg',
				'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/triangle2.svg',
				'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/triangle3.svg',
				'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/triangle4.svg',
				'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/triangle5.svg',
			];

			if (!figures || !figures[index]) {
				return defaultImages[index];
			}

			return figures[index];
		},
		[figures]
	);

	return (
		<Box>
			<Box
				sx={{
					backfaceVisibility: 'hidden',
					animation: 'jumping 9s ease-in-out 2s infinite alternate',
					animationDelay: '1s',
					transition: 'all .9s ease 5s',
					userSelect: 'none',
					position: 'absolute',
					zIndex: 1,
					right: '4%',
					top: '7%',
				}}>
				<img src={getImage(0)} alt='Uniclick' />
			</Box>

			<Box
				sx={{
					backfaceVisibility: 'hidden',
					animation: 'jumping 9s ease-in-out 2s infinite alternate',
					animationDelay: '1s',
					transition: 'all .9s ease 5s',
					userSelect: 'none',
					position: 'absolute',
					zIndex: 1,
					left: '0%',
					top: '5%',
				}}>
				<img src={getImage(1)} alt='Uniclick' />
			</Box>

			<Box
				sx={{
					backfaceVisibility: 'hidden',
					animation: 'jumping4 9s ease-in-out 2s infinite alternate',
					animationDelay: '1s',
					transition: 'all .9s ease 5s',
					userSelect: 'none',
					position: 'absolute',
					zIndex: 1,
					left: figures ? '50%' : '20%',
					bottom: figures ? '20%' : '0%',
				}}>
				<img src={extended ? getImage(3) : getImage(2)} alt='Uniclick' />
			</Box>

			{extended && (
				<>
					<Box
						sx={{
							backfaceVisibility: 'hidden',
							animation: 'jumping 9s ease-in-out 2s infinite alternate',
							animationDelay: '1s',
							transition: 'all .9s ease 5s',
							userSelect: 'none',
							position: 'absolute',
							zIndex: 1,
							bottom: '20%',
							left: '50%',
						}}>
						<img src={getImage(1)} alt='Uniclick' />
					</Box>

					<Box
						sx={{
							backfaceVisibility: 'hidden',
							animation: 'jumping 9s ease-in-out 2s infinite alternate',
							animationDelay: '1s',
							transition: 'all .9s ease 5s',
							userSelect: 'none',
							position: 'absolute',
							zIndex: 1,
							top: '4%',
							right: '7%',
						}}>
						<img src={getImage(2)} alt='Uniclick' />
					</Box>
				</>
			)}
		</Box>
	);
};

export default AnimatedFigures;
