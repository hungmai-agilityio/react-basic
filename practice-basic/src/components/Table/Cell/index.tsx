import clsx from 'clsx';
import { memo, ReactNode } from 'react';

// Constants
import { CELL, SIZE } from '@/constants';

interface IProps {
  children?: ReactNode;
  type: CELL.TD | CELL.TH;
  size?: SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
}

export const Cell = memo(({ children, type, size }: IProps) => {
  const TagName = type;

  const sizeClasses = {
    [SIZE.SMALL]: 'w-tb-sm',
    [SIZE.MEDIUM]: 'w-tb-md',
    [SIZE.LARGE]: 'w-tb-lg'
  };

  const sizeClass = sizeClasses[size || SIZE.SMALL];

  return <TagName className={clsx('p-3', sizeClass)}>{children}</TagName>;
});
