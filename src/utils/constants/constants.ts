import WidgetsIcon from '@mui/icons-material/Widgets';
import InventoryIcon from '@mui/icons-material/Inventory';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Person2Icon from '@mui/icons-material/Person2';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

// Update the type definition for the icon property
type SideBarMenu = {
  id: number;
  title: string;
  path: string;
  icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>; // Update the type for the icon property
  muiName: string; // Optional - to store MUI icon name if needed
};

export const sideBarMenu: SideBarMenu[] = [
  {
    id: 1,
    title: 'Меню',
    icon: WidgetsIcon,
    path: '/menu/',
    muiName: 'WidgetsIcon', // Example to store the MUI icon name
  },
  {
    id: 2,
    title: 'Склад',
    icon: InventoryIcon,
    path: '/stock/',
    muiName: 'InventoryIcon', // Example to store the MUI icon name
  },
  {
    id: 3,
    title: 'Филиалы',
    icon: ApartmentIcon,
    path: '/branches/',
    muiName: 'ApartmentIcon', // Example to store the MUI icon name
  },
  {
    id: 4,
    title: 'Сотрудники',
    icon: Person2Icon,
    path: '/employees/',
    muiName: 'Person2Icon', // Example to store the MUI icon name
  },
];
