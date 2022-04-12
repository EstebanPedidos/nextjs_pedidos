import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


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
      borderColor: theme.palette.common.lightgray,
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
                        <ListItem fullWidth>
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