import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_SUPER_ADMIN: NbMenuItem[] = [
  
    {
    title: 'Navigation',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard'
  },
  {
    title: 'Pages',
    icon: 'nb-locked',
    children: [
      {
        title: 'All Schools',
        link: 'schools',
      },
      {
        title: 'Add school',
        link: 'addschool',
      },
      {
        title: 'All classes',
        link: 'classes',
      },
      {
        title: 'Add class',
        link: 'addclass',
      },      
    ],
  },
];

export const MENU_ITEMS_ORGANIZATION_ADMIN: NbMenuItem[] = [
  
  {
  title: 'Navigation',
  group: true,
},
{
  title: 'Dashboard',
  icon: 'nb-home',
  link: '/pages/dashboard'
},
{
  title: 'Pages',
  icon: 'nb-locked',
  children: [
    {
      title: 'All classes',
      link: 'classes',
    },
    {
      title: 'Add class',
      link: 'addclass',
    },    
  ],
},
];

export const MENU_ITEMS_DEPARTMENT_ADMIN: NbMenuItem[] = [
  
  {
  title: 'Navigation',
  group: true,
},
{
  title: 'Dashboard',
  icon: 'nb-home',
  link: '/pages/dashboard'
},
{
  title: 'Pages',
  icon: 'nb-locked',
  children: [
    {
      title: 'All classes',
      link: 'classes',
    }   
  ],
},
];

