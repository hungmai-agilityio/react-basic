import clsx from 'clsx';

// Constant
import { SIZE } from '@/constants/';

interface AvatarProps {
  avatar?: string;
  name: string;
  size?: SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
  style?: string;
}

const Avatar = ({ avatar, name, size, style }: AvatarProps) => {
  const nameAvatar = name ? name.charAt(0).toUpperCase() : '';

  const sizeClasses = {
    [SIZE.SMALL]: 'w-avatar-sm h-avatar-sm text-lg',
    [SIZE.MEDIUM]: 'w-avatar-md h-avatar-md text-xl',
    [SIZE.LARGE]: 'w-avatar-lg h-avatar-lg text-xxxl font-bold'
  };

  const sizeClass = sizeClasses[size || SIZE.SMALL];

  const hasAvatar = (
    <img
      src={avatar}
      alt={name}
      className={clsx('rounded-full object-cover', style, sizeClass)}
    />
  );

  const notAvatar = (
    <div
      className={clsx(
        'rounded-full text-white bg-green-450 flex items-center justify-center',
        style,
        sizeClass
      )}
    >
      {nameAvatar}
    </div>
  );

  return <>{avatar ? hasAvatar : notAvatar}</>;
};

export default Avatar;
