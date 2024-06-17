import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// Constants
import { LIST_ITEM, URLS } from '@/constants';

// Utils
import { currentUser } from '@/utils';

// Interfaces
import { IAccount, IProfile } from '@/interfaces';

// Services
import { getUserProfileById } from '@/services';

// Components
import Sidebar from '@/components/Sidebar';
import List from '@/components/Sidebar/List';
import { Search } from '@/components/Search';
import UserMenu from '@/components/Dropdown/User';
import Modal from '@/components/Modal';

const Layout = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchOption, setSearchOption] = useState<string>('Title');
  const [user, setUser] = useState<IAccount | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [profile, setProfile] = useState<IProfile | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = currentUser() as IAccount;
    if (!userData) {
      navigate(URLS.SIGN_IN);
    } else {
      setUser(userData);
    }

    const fetchData = async () => {
      const response = await getUserProfileById(userData?.id);
      if (response.data) {
        setProfile(response.data);
      }
    };
    fetchData();
  }, [navigate]);

  const handleSearch = (value: string, option: string) => {
    setSearchValue(value);
    setSearchOption(option);
    navigate(`${URLS.SEARCH}?query=${value}`);
  };

  const handleSelect = (item: string) => {
    setIsModalOpen(false);

    switch (item) {
      case 'Profile':
        navigate(`${URLS.ACCOUNT}`);
        break;
      case 'Favorite':
        navigate(`${URLS.FAVORITE}`);
        break;
      case 'Logout':
        setIsModalOpen(true);
        break;
      default:
        break;
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    setIsModalOpen(false);
    localStorage.clear();
    navigate(`${URLS.SIGN_IN}`);
  };

  return (
    <>
      <div className="flex gap-12">
        <Sidebar>
          <List items={LIST_ITEM} />
        </Sidebar>
        <div className="w-full overflow-hidden mt-10">
          <div className="flex justify-between items-start h-16">
            <Search value={searchValue} onChange={handleSearch} option />
            <div className="mr-11">
              {user && (
                <UserMenu
                  avatar={profile?.avatar || ''}
                  name={user.userName}
                  onSelect={handleSelect}
                />
              )}
            </div>
          </div>
          <div className="h-main overflow-y-auto scrollbar">
            <Outlet context={{ searchValue, searchOption }} />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onCloseModal={handleCloseModal}
        title="Logout"
        btnNamePrimary="Yes"
        btnNameSecondary="No"
        onClickBtnPrimary={handleLogout}
        onClickBtnSecondary={handleCloseModal}
      >
        <p>Are you sure want to logout?</p>
      </Modal>
    </>
  );
};

export default Layout;
