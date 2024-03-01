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
import neocafe from '../assets/sideBar/neocafe.svg';
import signOut from '../assets/signOut.svg';
import Button from '../components/UI/Button';


  

const Drawer = styled(MuiDrawer)(() => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '.MuiDrawer-paper': {
    position: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
  },
}));

export default function AdminSideBar() {
  const signOutClick = () => {
    console.log('sign out');
  };
  
  return (
    <div className="">
      <Box className="text-white text">
        <Drawer
          variant="permanent"
        >
          <div>
            <div style={{ marginTop: '2rem', marginLeft: '1rem' }}>
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

          <Button className="flex items-center gap-2" onClick={signOutClick}>
            Выход
            <img className="h-6 w-6" src={signOut} />
          </Button>
        </Drawer>
      </Box>
    </div>
  );
}
