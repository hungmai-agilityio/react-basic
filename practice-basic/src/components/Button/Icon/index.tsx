import clsx from 'clsx';

// FontAwesome
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Constants
import { SIZE } from '@/constants';

interface ButtonIconProps {
  icon: IconDefinition;
  text?: string;
  circle?: boolean;
  size?: SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
  onClick?: () => void;
  data?: string;
  onClickSecond?: (data: string) => void;
  styles?: string;
}

const ButtonIcon = ({
  icon,
  text,
  circle,
  size,
  styles,
  data,
  onClick,
  onClickSecond
}: ButtonIconProps) => {
  const sizeClasses = {
    [SIZE.SMALL]: 'text-sm',
    [SIZE.MEDIUM]: 'text-md',
    [SIZE.LARGE]: 'text-2xl'
  };

  // Handle click for get data
  const handleClick = () => {
    if (data) {
      onClickSecond!(data);
    }
  };

  const sizeClass = sizeClasses[size || SIZE.SMALL];

  return (
    <div
      className={clsx(
        'flex items-center gap-3 cursor-pointer text-dark',
        sizeClass,
        styles
      )}
      onClick={data ? handleClick : onClick}
    >
      <span>
        <FontAwesomeIcon
          icon={icon}
          className={clsx(
            circle &&
              `cursor-pointer bg-white rounded-2x2 w-6 h-6 p-3 shadow-big hover:bg-orange-250 hover:text-white`
          )}
        />
      </span>
      {text && <span>{text}</span>}
    </div>
  );
};

export default ButtonIcon;
