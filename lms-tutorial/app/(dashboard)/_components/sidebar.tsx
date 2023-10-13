import { Logo } from './logo';
import { SideBarRoutes } from './sidebar-routes';

export const SideBar = () => {
  return (
    <div className='flex h-full flex-col overflow-y-auto border-r bg-white shadow-sm'>
      <div className='p-6'>
        <Logo />
      </div>
      <div className='flex w-full flex-col'>
        <SideBarRoutes />
      </div>
    </div>
  );
};
