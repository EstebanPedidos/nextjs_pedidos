import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';


import AppBar from '@mui/material/AppBar';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    borderBottom: '1px solid #e8e8e8',
  },
});

export default function ProductTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={0} className={classes.root}>
      
      <div className={classes.root}>
      <TabContext value={value}>
        <AppBar elevation={0} position="static" color="transparent"  >
          <TabList onChange={handleChange} indicatorColor="primary" textColor="primary" variant="outlined" centered aria-label="Detalles de producto">
            <Tab label="Detalles" value="1" />
            <Tab label="Reseñas" value="2" />
            <Tab label="Q&A" value="3" />
          </TabList>
        </AppBar>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">
            2
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </div>
    </Paper>
  );
} 