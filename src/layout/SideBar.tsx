import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { sideBarMenu } from '../utils/constants/constants';
import neocafe from '../assets/sideBar/neocafe.svg'


const drawerWidth = 300;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer)(() => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
}));

export default function SideBar() {

  return (
    <>
      <Box className="flex justify-between text-white text">
        <Drawer variant="permanent" className=' justify-between'>
          <div>
            <div style={{ marginTop: '2rem', marginLeft:'1rem'}}>
              <img src={neocafe} alt="" />
            </div>
            <List>
              {sideBarMenu.map((item) => (
                <NavLink to={item.path} key={item.id}>
                  <List
                    key={item.id}
                    disablePadding
                    sx={{
                      display: 'block',
                      margin: '1rem 0',
                      fontSize: '18px',
                    }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: 'center',
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: 3,
                          justifyContent: 'center',
                          color: '#252424',
                        }}
                      >
                        {<item.icon />}
                      </ListItemIcon>
                      <ListItemText primary={item.title} sx={{ opacity: 1 }} />
                    </ListItemButton>
                  </List>
                </NavLink>
              ))}
            </List>
          </div>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
          <DrawerHeader className='ml-12'/>
        </Box>
      </Box>
    </>
  );
}
