import Avatar from '@/components/Avatar';
import { SIZE, USER_OPTION } from '@/constants';
import Dropdown from '..';

interface UserMenuProps {
  name: string;
  avatar: string;
  onSelect?: (item: string) => void;
}

const UserMenu = ({ name, avatar, onSelect }: UserMenuProps) => {
  return (
    <>
      <div className="bg-white rounded-3xl shadow-light w-menu inline-flex p-1">
        <Avatar name={name} avatar={avatar} size={SIZE.SMALL} />

        <Dropdown
          items={USER_OPTION}
          title={name.substring(0, 5)}
          onSelect={onSelect}
          spacing="gap-9"
        />
      </div>
    </>
  );
};

export default UserMenu;
