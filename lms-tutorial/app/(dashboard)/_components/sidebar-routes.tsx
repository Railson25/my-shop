'use client';

import { Layout, Compass } from 'lucide-react';
import { SideBarItem } from './sidebar-item';

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/search',
  },
];

export const SideBarRoutes = () => {
  const routes = guestRoutes;
  return (
    <div className='flex w-full flex-col'>
      {routes.map((route) => (
        <SideBarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
