import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  ButtonBase,
} from '@mui/material'

import VideoModal from './VideoModal';

const images = [
  {
    url: 'https://pedidos.com/myfotos/pedidos-com/pagina/mi-cuenta/facturas/facturas.jpg',
    title: 'Modificar Factura',
    width: '100%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 400,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
        opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
        opacity: 0,
    },
    '& .MuiTypography-root': {
        opacity: 0,
        border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.white,
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonModal() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(true)

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          onClick={handleClick}
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                  <span
                      className="MuiTypography-root"
                  >
                    <span
                        style={{
                            color: '#282828',
                            fontWeight: 'bold',
                            fontSize: '20pt',
                            letterSpacing: '3pt',
                        }}
                    >
                        MODIFICAR
                    </span>
                    <span
                        style={{
                            color: '#282828',
                            fontSize: '20pt',
                            letterSpacing: '3pt',
                        }}
                    >
                        &nbsp; FACTURA
                    </span>
                  </span>
          </Image>
        </ImageButton>
      ))}
      <VideoModal open={open} setOpen={setOpen}></VideoModal>
    </Box>
  );
}