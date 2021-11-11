import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ChatHistoryTab from './ChatHistoryTab';
import MedicalRequestTab from './MedicalRequestTab';
import PersonalDataTab from './PersonalDataTab';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsControl({userID}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 'auto', paddingRight:'16px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Member" {...a11yProps(0)} />
          <Tab label="Medical requests" {...a11yProps(1)} />
          {/* <Tab label="Chat history" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <PersonalDataTab userID={userID} value={value} index={0}/>
      <MedicalRequestTab userID={userID} value={value} index={1}/>
      {/* <ChatHistoryTab userID={userID} value={value} index={2} /> */}
    </Box>
  );
}