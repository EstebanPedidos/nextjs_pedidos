import Head from 'next/head';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const AnimatedFigures = (props) => {
	const { extended } = props;

	return (
		<Box>
			<Head>
				<style>
					{`
            @keyframes jumping {
              0%{transform:translateY(0px) translateX(0) rotate(0) scale(1);opacity:.8}
              25%{transform:translateY(-10px) translateX(-10px) rotate(20deg) scale(0.8);opacity:.9}
              50%{transform:translateY(-15px) translateX(-15px) rotate(10deg) scale(0.9);opacity:.8}
              75%{transform:translateY(-20px) translateX(-20px) rotate(20deg) scale(0.75);opacity:.6}
              85%{transform:translateY(-25px) translateX(-25px) rotate(20deg) scale(0.9);opacity:.7}
              100%{transform:translateY(-15px) translateX(-15px) rotate(0) scale(0.95);opacity:.85}
              }
              @keyframes jumping2 {
              0%{transform:translateY(0px) translateX(0) rotate(0) scale(1);opacity:.5}
              25%{transform:translateY(-30px) translateX(10px) rotate(20deg) scale(0.8);opacity:.8}
              50%{transform:translateY(15px) translateX(-15px) rotate(10deg) scale(0.7);opacity:.8}
              75%{transform:translateY(30px) translateX(20px) rotate(20deg) scale(0.75);opacity:.7}
              100%{transform:translateY(-15px) translateX(15px) rotate(0) scale(0.75);opacity:.9}
              }
              @keyframes jumping3 {
              0%{transform:translateY(10px) translateX(0) rotate(0) scale(1);opacity:.9}
              20%{transform:translateY(20px) translateX(10px) rotate(-20deg) scale(0.8);opacity:.8}
              40%{transform:translateY(15px) translateX(-15px) rotate(10deg) scale(0.75);opacity:.8;transform:translateY(-15px) translateX(-25px) rotate(10deg) scale(0.5);opacity:1}
              80%{transform:translateY(-30px) translateX(20px) rotate(-20deg) scale(0.75);opacity:.6}
              100%{transform:translateY(15px) translateX(15px) rotate(0) scale(0.95);opacity:.7}
              }
              @keyframes jumping4 {
              0%{transform:translateY(-30px) translateX(20px) rotate(0) scale(1.2);opacity:.7}
              25%{transform:translateY(-20px) translateX(10px) rotate(50deg) scale(0.6);opacity:.8}
              50%{transform:translateY(15px) translateX(-15px) rotate(20deg) scale(0.5);opacity:.9}
              75%{transform:translateY(30px) translateX(20px) rotate(50deg) scale(0.75);opacity:.7}
              100%{transform:translateY(-15px) translateX(15px) rotate(0) scale(0.5);opacity:.9}
              }
              @keyframes jumping10 {
              0%{transform:rotate(180deg);display:block}
              100%{transform:rotate(30deg);display:block}
              }
              @keyframes jumping11 {
              0%{transform:rotate(180deg) translate(-20px,20px);display:block}
              100%{transform:rotate(30deg) translate(0px,0px);display:block}
            }
          `}
				</style>
			</Head>

			<Box
				sx={{
					backfaceVisibility: 'hidden',
					animation: 'jumping 9s ease-in-out 2s infinite alternate',
					animationDelay: '1s',
					transition: 'all .9s ease 5s',
					userSelect: 'none',
					position: 'absolute',
					right: '4%',
					top: '7%',
				}}>
				<img
					src='https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/triangle1.svg'
					alt='Uniclick'
				/>
			</Box>

			<Box
				sx={{
					backfaceVisibility: 'hidden',
					animation: 'jumping 9s ease-in-out 2s infinite alternate',
					animationDelay: '1s',
					transition: 'all .9s ease 5s',
					userSelect: 'none',
					position: 'absolute',
					left: '0%',
					top: '5%',
				}}>
				<img
					src='https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/triangle2.svg'
					alt='Uniclick'
				/>
			</Box>

			<Box
				sx={{
					backfaceVisibility: 'hidden',
					animation: 'jumping4 9s ease-in-out 2s infinite alternate',
					animationDelay: '1s',
					transition: 'all .9s ease 5s',
					userSelect: 'none',
					position: 'absolute',
					left: '20%',
					bottom: '0%',
				}}>
				<img
					src={
						extended
							? 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/triangle4.svg'
							: 'https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/triangle5.svg'
					}
					alt='Uniclick'
				/>
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
							bottom: '20%',
							left: '50%',
						}}>
						<img
							src='https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/triangle2.svg'
							alt='Uniclick'
						/>
					</Box>

					<Box
						sx={{
							backfaceVisibility: 'hidden',
							animation: 'jumping 9s ease-in-out 2s infinite alternate',
							animationDelay: '1s',
							transition: 'all .9s ease 5s',
							userSelect: 'none',
							position: 'absolute',
							top: '4%',
							right: '7%',
						}}>
						<img
							src='https://pedidos.com/myfotos/pedidos-com/pagina/uniclick/triangle3.svg'
							alt='Uniclick'
						/>
					</Box>
				</>
			)}
		</Box>
	);
};

export default AnimatedFigures;
