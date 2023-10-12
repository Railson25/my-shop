import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { SideBar } from './sidebar';

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='pr-4 transition hover:opacity-75 md:hidden'>
        <Menu />
        <SheetContent side='left' className='bg-white p-0'>
          <SideBar />
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  );
};
