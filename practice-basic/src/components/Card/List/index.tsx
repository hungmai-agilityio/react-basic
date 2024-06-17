import clsx from 'clsx';
import { ReactNode } from 'react';

// Constants
import { TYPE } from '@/constants';

interface ListCardProps {
  children: ReactNode;
  type: TYPE.ALL | TYPE.SHELF;
}

const ListCard = ({ children, type }: ListCardProps) => {
  const typeClasses = {
    [TYPE.ALL]: 'gap-10 overflow-x-auto mt-8 scrollbar',
    [TYPE.SHELF]: 'mb-10 flex-wrap gap-14'
  };

  const typeClass = typeClasses[type || TYPE.ALL];

  return (
  <div className={clsx('flex', typeClass)}>{children}</div>
);
};

export default ListCard;
