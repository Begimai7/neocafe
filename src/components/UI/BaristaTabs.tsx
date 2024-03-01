// import { FC } from 'react';
import { Tabs, Tab, Box, Typography, styled } from '@mui/material';
import React, { FC } from 'react';
// import { Link } from 'react-router-dom';
import { TabsData } from '../../utils/constants/constants';
// import OrderNavlink from '../barista/orders/OrderNavlink';

interface BaristaTabsProps {
  children?: React.ReactNode;
  labels: TabsData[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
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

const BaristaTabs: FC<BaristaTabsProps> = ({ children, labels }) => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (
      event.type !== 'click' ||
      (event.type === 'click' &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        ))
    ) {
      setValue(newValue);
    }
  };

  const tabs = labels.map((label) => {
    console.log(label, 'label');
    
    return <StyledTab label={label.title} href={label.path} />;
  });

  return (
    <div className="w-full">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          role="navigation"
        >
          {tabs}
        </StyledTabs>
      </Box>
      <StyledCustomTabPanel value={value} index={0}>
        {children}
      </StyledCustomTabPanel>
      {/* <StyledCustomTabPanel value={value} index={1}>
        {children}
      </StyledCustomTabPanel> */}
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

const StyledTab = styled(LinkTab)(() => ({
  width: '50%',
  maxWidth: '100%',
  textTransform: 'none',
  fontSize: '26px',
  color: '#000000',
}));

const StyledCustomTabPanel = styled(CustomTabPanel)(() => ({
  '.css-19kzrtu': {
    padding: '0px',
  },
}));
