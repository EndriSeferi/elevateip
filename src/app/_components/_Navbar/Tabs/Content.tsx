import { motion } from 'framer-motion';

import { TABS } from '@/app/_utils/contants';

import { Bridge } from '../Bridge';
import { Nub } from '../Nub';

export const Content = ({
  dir,
  selected,
}: {
  dir: null | 'left' | 'right';
  selected: number;
}) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />
      {TABS.map((tab) => {
        return (
          <div className="overflow-hidden" key={tab.id}>
            {selected === tab.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === 'left' ? 100 : dir === 'right' ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <tab.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};
