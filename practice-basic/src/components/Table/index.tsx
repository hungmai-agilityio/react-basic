import { memo, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}
export const Table = memo(({ children }: IProps) => {
  return (
    <table className="border-separate border-spacing-x-tb-0 border-spacing-y-tb-30 w-tb-full capitalize text-dark leading-30">
      {children}
    </table>
  );
});
