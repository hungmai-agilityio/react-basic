import { URLS } from '@/constants';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  children?: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate(URLS.HOME);
  };

  return (
    <aside className="bg-white w-sidebar h-screen">
      <img
        src="/images/logo.png"
        alt="Logo"
        className="w-32 pt-10 ml-14"
        onClick={handleNavigateHome}
      />
      {children}
    </aside>
  );
};

export default Sidebar;
