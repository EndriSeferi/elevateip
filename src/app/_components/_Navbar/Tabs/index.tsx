import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { TABS } from '@/app/_utils/contants';

import { Content } from './Content';
import { Tab } from './Tab';

export const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | 'left' | 'right'>(null);
  const handleSetSelected = (val: number | null) => {
    if (typeof selected === 'number' && typeof val === 'number') {
      setDir(selected > val ? 'right' : 'left');
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((tab) => (
        <Tab
          key={tab.id}
          tab={tab.id}
          selected={selected}
          handleSelected={handleSetSelected}
        >
          {tab.title}
        </Tab>
      ))}

      {selected && (
        <AnimatePresence>
          <Content dir={dir} selected={selected} />
        </AnimatePresence>
      )}
    </div>
  );
};
