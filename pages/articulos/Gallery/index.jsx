import {useState} from 'react';
import {List,Container,DialogTitle, Dialog,Box, Grid, Fab} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Carrusel from './Carrusel';



export default function Gallery({item_num,indice,estatus_img,link,links}) {
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        {(indice === 0)?
        <img width={'100%'}  onClick={handleClickOpen} height={'100%'} layout="responsive" src={`https://pedidos.com/myfotos/xLarge/(X)${item_num}.webp`}  alt={item_num} />
        :
        (indice === 1)?
        <img width={'100%'}  onClick={handleClickOpen} height={'100%'} layout="responsive" src={(estatus_img === "A")?`https://pedidos.com/myfotos/xLarge_v2/(v2)(X)${item_num}.webp`:`https://pedidos.com/myfotos/xLarge/(X)${item_num}.webp`} alt={item_num}/>
        :
        (indice === 2)?
        <img width={'100%'}  onClick={handleClickOpen} height={'100%'} layout="responsive" src={(estatus_img === "A")?`https://pedidos.com/myfotos/xLarge_v3/(v3)(X)${item_num}.webp`:`https://pedidos.com/myfotos/xLarge/(X)${item_num}.webp`} alt={item_num}/>
        :
        <img width={'100%'}  onClick={handleClickOpen} height={'100%'} layout="responsive" src={`https://img.youtube.com/vi${(link)?(link.includes('='))?link.substring(link.lastIndexOf('='),link.length):link.substring(link.lastIndexOf('/'),link.length):''}/0.jpg`} alt={item_num}/>
        }
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="scroll-dialog-title">
            <Box component="div" pt={1}>
                <Grid container 
                direction="row"
                justifyContent="space-between"textAlign="center">
                    <Grid item xs={9}>
                    </Grid>
                    <Grid item xs={3}>
                        <Fab aria-label="close"
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            
                        >
                            <CloseIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </Box>
        </DialogTitle>
       
        {(open)&&
        <Box justifyContent='center' alignItems='center'>
            <Carrusel item_num={item_num} indice={indice} links={links}/>
        </Box>
        }
      </Dialog>
    </div>
  );
}