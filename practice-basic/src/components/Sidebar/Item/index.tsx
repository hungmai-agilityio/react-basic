import { memo } from 'react';
import { NavLink } from 'react-router-dom';

interface ItemProps {
  name: string;
  icon?: string;
  path: string;
}

export const Item = memo(({ name, icon, path }: ItemProps) => {
  return (
    <>
      <NavLink
        to={path}
        className="sidebar-item flex list-none no-underline py-2
        text-silver-250 gap-3 pl-14 hover:cursor-pointer mb-6 hover:bg-silver-350"
      >
        {icon && <img src={icon} alt={name} className="w-5 h-5" />}
        <p>{name}</p>
      </NavLink>
    </>
  );
});
