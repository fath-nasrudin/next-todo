'use client';

import { cn } from '@/lib/utils';
import { TablistItem } from '@/types';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

interface TablistProps {
  items: TablistItem[];
}

export const Tablist = ({ items }: TablistProps) => {
  const segment = useSelectedLayoutSegments();
  return (
    <ul className="flex flex-col">
      {items.map((item) => (
        <Link
          key={item.href}
          className={cn(
            'py-2 px-4 rounded-md ',
            item.href.startsWith(`/${segment.join('/')}`)
              ? 'bg-red-100 text-red-600'
              : 'hover:bg-foreground/5'
          )}
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
};
