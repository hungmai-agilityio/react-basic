import { memo, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const Body = memo(({ children }: IProps) => {
  return <tbody className='relative'>{children}</tbody>;
});
