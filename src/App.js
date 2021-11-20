import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 800, margin: '100px auto' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Golden Video" {...a11yProps(0)} />
          <Tab label="Take Video" {...a11yProps(1)} />
          <Tab label="View Results" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <iframe style={{ width: "100%", height: 400 }} src="https://docs.nestjs.com/exception-filters" frameBorder="0"></iframe>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <iframe allow="camera;microphone" style={{ width: "100%", height: 400 }} src="https://dance-motion.web.app/" frameBorder="0"></iframe>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <iframe style={{ width: "100%", height: 400 }} src="https://dance-motion.web.app/analysis/123" frameBorder="0"></iframe>

      </TabPanel>
    </Box>
  );
}