import clsx from 'clsx';

// Constants
import { SIZE, TYPE } from '@/constants';

interface ButtonProps {
  name: string;
  size?: SIZE.MINI | SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
  type: TYPE.PRIMARY | TYPE.SECOND;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  data?: string;
  onClickSecond?: (data: string) => void;
  styles?: string;
  isDisabled?: boolean;
}

const Button = ({
  name,
  size,
  type,
  onClick,
  data,
  onClickSecond,
  styles,
  isDisabled
}: ButtonProps) => {
  const sizeClasses = {
    [SIZE.MINI]: 'w-20 h-8 font-normal',
    [SIZE.SMALL]: 'w-32 h-11 font-semibold',
    [SIZE.MEDIUM]: 'w-52 h-14 font-semibold text-lg',
    [SIZE.LARGE]: 'w-full h-12'
  };

  const typeClasses = {
    [TYPE.PRIMARY]: 'bg-orange-550 text-white hover:brightness-110',
    [TYPE.SECOND]:
      'hover:bg-orange-250 hover:text-white bg-white border border-orange-550 text-orange-550'
  };

  const sizeClass = sizeClasses[size || SIZE.SMALL];
  const typeClass = typeClasses[type || TYPE.PRIMARY];

  // Handle click for get data
  const handleClick = () => {
    if (data) {
      onClickSecond!(data);
    }
  };

  return (
    <button
      className={clsx(
        'rounded-md py-2 px-3 leading-2',
        typeClass,
        sizeClass,
        styles,
        isDisabled &&
          'bg-silver border border-silver text-white hover:filter-none'
      )}
      onClick={data ? handleClick : onClick}
      disabled={isDisabled}
    >
      {name}
    </button>
  );
};

export default Button;
