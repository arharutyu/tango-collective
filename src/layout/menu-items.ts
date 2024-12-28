export interface IMenuItem {
  display: string;
  path: string;
}

export const MenuConfig: IMenuItem[] = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'About',
    path: '/about'
  },
  {
    display: 'Tango Journey',
    path: '/tango-journey'
  },
  {
    display: 'Contact Us',
    path: '/contact-us'
  },
  {
    display: 'Upcoming Events',
    path: '/upcoming-events'
  },
]