import InventoryIcon from '@mui/icons-material/Inventory';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Person2Icon from '@mui/icons-material/Person2';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import menuIcon from '../../assets/sideBar/bookOpen.svg';
import orderIcon from '../../assets/sideBar/notepad.svg';
import profileOcon from '../../assets/sideBar/userCircle.svg';
// import capuccino from '../../assets/orderIcons/cappuccino.png';
// import latte from '../../assets/orderIcons/latte.png';
// import americano from '../../assets/orderIcons/americano.png';

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

export const sidebarBarista = [
  {
    id: 1,
    title: 'Заказы',
    icon: orderIcon,
    path: 'orders',
  },
  {
    id: 2,
    title: 'Меню',
    icon: menuIcon,
    path: 'menu',
  },
  {
    id: 3,
    title: 'Профиль',
    icon: profileOcon,
    path: 'profile',
  },
];

export const ordersData = [
  {
    id: 1,
    placeFood: 'На вынос',
    numberTable: 'M-47',
    status: 'new',
    nameOfWaiters: 'Valerinaaaaaa',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 2,
    placeFood: 'В заведении',
    numberTable: 'M-47',
    status: 'new',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 3,
    placeFood: 'На вынос',
    numberTable: 'M-47',
    status: 'inProgress',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 4,
    placeFood: 'В заведении',
    numberTable: 'M-47',
    status: 'done',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 5,
    placeFood: 'В заведении',
    numberTable: 'M-47',
    status: 'refuce',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 6,
    placeFood: 'В заведении',
    numberTable: 'M-47',
    status: 'finished',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 7,
    placeFood: 'На вынос',
    numberTable: 'M-47',
    status: 'new',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 8,
    placeFood: 'На вынос',
    numberTable: 'M-47',
    status: 'new',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 9,
    placeFood: 'На вынос',
    numberTable: 'M-47',
    status: 'new',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 10,
    placeFood: 'В заведении',
    numberTable: 'M-47',
    status: 'new',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 11,
    placeFood: 'В заведении',
    numberTable: 'M-47',
    status: 'new',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 12,
    placeFood: 'На вынос',
    numberTable: 'M-47',
    status: 'new',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 13,
    placeFood: 'На вынос',
    numberTable: 'M-47',
    status: 'new',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 14,
    placeFood: 'На вынос',
    numberTable: 'M-47',
    status: 'new',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
  {
    id: 15,
    placeFood: 'В заведении',
    numberTable: 'M-47',
    status: 'new',
    nameOfWaiters: 'Valerina',
    foods: {
      id: 1,
      name: 'Kappuchinos',
    },
  },
];

export const ordersStatus = [
  {
    id: 1,
    title: 'Новый',
    path: 'new',
    color: '#FF5151',
  },
  {
    id: 2,
    title: 'В процессе',
    path: 'inProgress',
    color: '#F9B70F',
  },
  {
    id: 3,
    title: 'Готово',
    path: 'done',
    color: '#37D400',
  },
  {
    id: 4,
    title: 'Отменено',
    path: 'refuce',
    color: '#171717',
  },
  {
    id: 5,
    title: 'Завершено',
    path: 'finished',
    color: '#717171',
  },
];

export const notificationData = [
  {
    id: 1,
    table: 'Стол №5',
    numberOfTable: 'М-47',
    time: '19:05',
    placeOfFood: 'В заведении',
    orders: [
      {
        id: 1,
        food: 'Капучино',
        count: 1,
      },
      {
        id: 2,
        food: 'Латте',
        count: 2,
      },
      {
        id: 3,
        food: 'Чизкейк',
        count: 1,
      },
    ],
  },
  {
    id: 2,
    table: 'Стол №7',
    numberOfTable: 'М-49',
    time: '20:00',
    placeOfFood: 'На вынос',
    orders: [
      {
        id: 1,
        food: 'Капучино',
        count: 1,
      },
      {
        id: 2,
        food: 'Латте',
        count: 2,
      },
      {
        id: 3,
        food: 'Чизкейк',
        count: 1,
      },
    ],
  },
  {
    id: 3,
    table: 'Стол №8',
    numberOfTable: 'М-45',
    time: '21:05',
    placeOfFood: 'На вынос',
    orders: [
      {
        id: 1,
        food: 'Капучино',
        count: 1,
      },
      {
        id: 2,
        food: 'Латте',
        count: 2,
      },
      {
        id: 3,
        food: 'Чизкейк',
        count: 1,
      },
    ],
  },
];

export const panelData = [
  // {
  //   id: 1,
  //   order: 'Капучино',
  //   img: capuccino,
  //   price: 140,
  //   milk: 'коровье молоко',
  //   syrup: 'клубничный сироп',
  //   cost: 0,
  // },
  // {
  //   id: 2,
  //   order: 'Латте',
  //   img: latte,
  //   price: 140,
  //   milk: 'коровье молоко',
  //   syrup: 'клубничный сироп',
  //   cost: 0,
  // },
  // {
  //   id: 3,
  //   order: 'Американо',
  //   img: americano,
  //   price: 140,
  //   milk: 'коровье молоко',
  //   syrup: 'клубничный сироп',
  //   cost: 0,
  // },
  // {
  //   id: 4,
  //   order: 'Американо',
  //   img: americano,
  //   price: 140,
  //   milk: 'коровье молоко',
  //   syrup: 'клубничный сироп',
  //   cost: 0,
  // },
];


