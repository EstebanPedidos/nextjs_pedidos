import React,{useState} from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btnService: { 
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      borderColor: 'rgba(166, 173, 185, 0.48)',
      },
    }, 
  boxEjecutivo: {
    
    fontWeight:"fontWeightBold",
  }, 
})); 

export default function ModalExecutive({resenapedidos,setEjecutivo,ejecutivo}) {
  const classes         = useStyles();
  const [modalStyle]    = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Box component="div" pb={2}>
        {(ejecutivo === '')?        
        <Button variant="outlined" color="primary" type="button" fullWidth size="large" onClick={()=>{setOpen(true);}} >
            ¿Te atendieron?
        </Button>    
        :
        <Button variant="outlined" type="button" fullWidth onClick={()=>{setOpen(true);}}>
            Te atiende {ejecutivo}
        </Button> 
        }
      </Box>  
        <Modal
            open={open}
            onClose={()=>{setOpen(false);}}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
        <div style={modalStyle} className={classes.paper}>
            <Box component="div" textAlign="center" m={1} py={2}>
              <Typography component="h3" variant="h5">
                  <Box component="span" fontWeight="fontWeightMedium">
                  ¿Quién te atendio?
                  </Box>
              </Typography>
              <Box component="div" py={1}>
                <Divider/>
              </Box>
            </Box>
            
            {(resenapedidos.length > 0)&&
            
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">Selecciona el ejecutivo que te atendio</FormLabel>
                <Box component="div" py={2}>
                  <RadioGroup aria-label="gender" name="ejecutivo" value={ejecutivo} onChange={(event)=>{setEjecutivo({ejecutivo:event.target.value,slmn:event.target.id});setOpen(false);}}>
                    <List dense fullWidth>
                      {
                      resenapedidos.map((ejecu, index) => (
                        <ListItem key={index} fullWidth>
                          <FormControlLabel key={index} value={ejecu.nombre} control={<Radio id={ejecu.slmn}/>} label={ejecu.nombre} fullWidth/>
                        </ListItem>
                      )) 
                      }
                    </List>
                  </RadioGroup>
                </Box>
            </FormControl>
            
            }            
        </div>
      </Modal>
    </div>
  );
}