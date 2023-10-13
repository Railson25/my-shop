'use client';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

interface SideBarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SideBarItem = ({ href, icon: Icon, label }: SideBarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === '/' && href === '/') || // checando se estamos na pagina root
    pathname === href || //checando se estamos exatamente na mesma pagina
    pathname?.startsWith(`${href}/`); //checando se estamos numa pagina parente desta pagina especifica

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type='button'
      className={cn(
        'flex items-center gap-x-2 pl-6 text-sm font-medium text-slate-500 transition-all hover:bg-slate-300/20 hover:text-slate-600',
        isActive && 'bg-sky-200/20 text-sky-700 hover:text-sky-700'
      )}
    >
      <div className='flex items-center gap-x-2 py-4 '>
        <Icon
          size={22}
          className={cn('text-slate-500', isActive && 'text-sky-700')}
        />
        {label}
      </div>
      <div
        className={cn(
          'ml-auto h-full border-2 border-sky-700 opacity-0 transition-all',
          isActive && 'opacity-100'
        )}
      />
    </button>
  );
};
