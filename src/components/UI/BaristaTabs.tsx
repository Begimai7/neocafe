// import { FC } from 'react';
import { Tabs, Tab, Box, Typography, styled } from '@mui/material';
import React from 'react';
import OrderNavlink from '../barista/orders/OrderNavlink';
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import {  useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

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
  const navigate = useNavigate()
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
          if (props.href) {
            navigate(props.href);
          }
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

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

const BaristaTabs = () => {
  const [value, setValue] = React.useState(0);

  // const params = useParams()
  // console.log(params, 'params')

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
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

  return (
    <div className="w-[100%]">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          role="navigation"
        >
          {/* <Tab  > */}
          <StyledTab  label="На вынос" href="takeaway/new" />
            {/* <NavLink to="/orders/takeaway">Нв вынос</NavLink> */}
  
          {/* </Tab> */}
          <StyledTab label="В заведении" href="inTheEstablishment/new" />
        </StyledTabs>
      </Box>
      <StyledCustomTabPanel value={value} index={0}>
        <OrderNavlink place="takeaway" />
      </StyledCustomTabPanel>
      <StyledCustomTabPanel value={value} index={1}>
        <OrderNavlink place="inTheEstablishment" />
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
