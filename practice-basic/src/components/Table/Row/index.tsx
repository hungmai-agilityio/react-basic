import clsx from 'clsx';
import { memo, ReactNode } from 'react';

// Constants
import { CELL } from '@/constants';

interface IProps {
  children: ReactNode;
  id?: string;
  type: CELL.TH | CELL.TD;
}

export const Row = memo(({ children, id, type }: IProps) => {
  const typeClasses = {
    [CELL.TH]: 'bg-silver-350 text-lg',
    [CELL.TD]: 'text-sm bg-white'
  };

  const typeClass = typeClasses[type || CELL.TD];
  return (
    <tr data-id={id} className={clsx(typeClass)}>
      {children}
    </tr>
  );
});
