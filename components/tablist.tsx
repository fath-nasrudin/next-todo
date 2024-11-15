'use client';

import { TablistItem } from '@/types';
import { TabItem } from './tab-item';

interface TablistProps {
  items: TablistItem[];
}

export const Tablist = ({ items }: TablistProps) => {
  return (
    <>
      <ul className="flex flex-col">
        {items.map((item, index: number, arr) => (
          <TabItem item={item} key={item.id} index={index} arr={arr} />
        ))}
      </ul>
    </>
  );
};
