import { ReactNode } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export const Tab = ({
  children,
  tab,
  handleSelected,
  selected,
}: {
  children: ReactNode;
  tab: number;
  handleSelected: (_val: number | null) => void;
  selected: number | null;
}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSelected(tab)}
      onClick={() => handleSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? 'bg-neutral-800 text-neutral-100'
          : 'text-neutral-300'
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? 'rotate-180 text-neutral-100' : ''
        }`}
      />
    </button>
  );
};
