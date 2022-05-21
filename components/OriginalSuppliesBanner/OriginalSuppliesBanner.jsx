import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const OriginalSuppliesBanner = () => {
	return (
		<Grid spacing={8} alingItems='center' justifyContent='center' container>
			<Head>
				<style>
					{`
            @keyframes highlight-left {
              0% {
                  opacity:0;
                  top:100%;
                  transform:scale(0);
              }
              70% {
                  opacity:1;
                  transform:scale(1);
              }
              100% {
                  opacity:0;
                  top:0;
                  transform:scale(0);
              }
            }
            @keyframes highlight-right {
              0% {
                  opacity:0;
                  top:0;
                  transform:scale(0)
              }
              70% {
                  opacity:1;
                  transform:scale(1)
              }
              100% {
                  opacity:0;
                  top:100%;
                  transform:scale(0)
              }
            }
          `}
				</style>
			</Head>

			<Grid xs={12} md={4} display={{ xs: 'none', md: 'block' }} item>
				<Box
					display='flex'
					flexDirection='column'
					height='100%'
					alignItems='end'
					justifyContent='center'
					gap={5}>
					<Typography
						variant='h3'
						fontWeight={300}
						textAlign='right'
						letterSpacing={2}
						fontSize={24}>
						CALIDAD
					</Typography>
					<Typography
						variant='h3'
						fontWeight={300}
						textAlign='right'
						letterSpacing={2}
						fontSize={24}>
						RENDIMIENTO
					</Typography>
					<Typography
						variant='h3'
						fontWeight={300}
						textAlign='right'
						letterSpacing={2}
						fontSize={24}>
						TEXTOS LLAMATIVOS
					</Typography>
				</Box>
			</Grid>

			<Grid xs={12} md={4} item>
				<Box position='relative'>
					<Box
						position='absolute'
						sx={{
							animation: 'highlight-left 4s ease-in 0s infinite',
							left: '-2!important',
							marginTop: '-100px',
						}}>
						<img
							src='https://pedidos.com/include/css/responsivo/imagenes/HP/spark.png'
							height='192'
							width='48'
							alt=''
						/>
					</Box>
					<Box
						position='absolute'
						sx={{
							animation: 'highlight-right 4s ease-in 0s infinite',
							right: '-10px!important',
							marginTop: '-100px',
						}}>
						<img
							className='highlight-right wow animated animated'
							src='https://pedidos.com/include/css/responsivo/imagenes/HP/spark.png'
							height='192'
							width='48'
							alt=''
						/>
					</Box>
					<img
						className='screen'
						src='https://pedidos.com/include/css/responsivo/imagenes/HP/toners4.png'
						alt='Tienda en Línea de Cartuchos de Tinta y Tóner Originales HP.'
						width='100%'
					/>
				</Box>
			</Grid>

			<Grid xs={12} md={4} display={{ xs: 'none', md: 'block' }} item>
				<Box
					display='flex'
					flexDirection='column'
					height='100%'
					alignItems='start'
					justifyContent='center'
					gap={5}>
					<Typography
						variant='h3'
						fontWeight={300}
						textAlign='left'
						letterSpacing={2}
						fontSize={24}>
						COLORES FIELES
					</Typography>
					<Typography
						variant='h3'
						fontWeight={300}
						textAlign='left'
						letterSpacing={2}
						fontSize={24}>
						IMÁGENES NÍTIDAS
					</Typography>
					<Typography
						variant='h3'
						fontWeight={300}
						textAlign='left'
						letterSpacing={2}
						fontSize={24}>
						RESISTEN MARCADORES
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default OriginalSuppliesBanner;
