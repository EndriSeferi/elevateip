import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

export const Nub = ({ selected }: { selected: number }) => {
  const [left, setLeft] = useState(0);

  const moveNub = useCallback(() => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById('overlay-content');

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();
      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
      setLeft(tabCenter);
    }
  }, [selected]);

  useEffect(() => {
    moveNub();
  }, [selected, moveNub]);

  return (
    <motion.span
      animate={{ left }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50% , 0 100%)' }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};
