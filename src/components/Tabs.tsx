import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import ColumnGroupingTable from './Table';

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

const TableTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <StyledTab label="Готовая продукция" {...a11yProps(0)} />
          <StyledTab label="Сырье" {...a11yProps(1)} />
          <StyledTab label="Заканчивающиеся продукты" {...a11yProps(2)} />
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ColumnGroupingTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ColumnGroupingTable />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <ColumnGroupingTable />
      </CustomTabPanel>
    </Box>
  );
};

export default TableTabs;

const StyledTabs = styled(Tabs)(() => ({
  fontSize: '18px',
  '.MuiTabs-indicator': {
    backgroundColor: '#00315D',
  },
  '.MuiTab-root.Mui-selected': {
    color: '#00315D',
    fontWeight: '700',
  },
}));

const StyledTab = styled(Tab)(() => ({
  color: '#C1C1C3',
  fontWeight: '700',
}));
