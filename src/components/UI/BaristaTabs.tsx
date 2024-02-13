// import { FC } from 'react';
import { Tabs, Tab, Box, Typography, styled } from '@mui/material';
import React from 'react';
import OrderNavlink from '../barista/orders/OrderNavlink';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BaristaTabs = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="w-[100%]">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <StyledTab label="На вынос" {...a11yProps(0)} />
          <StyledTab label="В заведении" {...a11yProps(1)} />
        </StyledTabs>
      </Box>
      <StyledCustomTabPanel value={value} index={0}>
        <OrderNavlink />
      </StyledCustomTabPanel>
      <StyledCustomTabPanel value={value} index={1}>
        <OrderNavlink />
      </StyledCustomTabPanel>
    </div>
  );
};

export default BaristaTabs;

const StyledTabs = styled(Tabs)(() => ({
  backgroundColor: '#DCEDFF',
  width: '100%',
  '.MuiTab-root.Mui-selected': {
    backgroundColor: '#FF8B5B',
    color: '#FEFEFE',
  },
  '.MuiTabs-indicator': {
    display: 'none',
  },
}));

const StyledTab = styled(Tab)(() => ({
  width: '50%',
  maxWidth: '100%',
  textTransform: 'none',
  fontSize: '26px',
  color: '#000000',
}));

const StyledCustomTabPanel = styled(CustomTabPanel)(() => ({
  '.css-19kzrtu': {
    padding: '0px'
  }
}))
