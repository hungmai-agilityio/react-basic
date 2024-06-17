import clsx from 'clsx';
import { useEffect, useState } from 'react';

// Font Awesome
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Constants
import { TYPE } from '@/constants';

// Interfaces
import { ToastProps } from '@/interfaces';

const Message = ({ type, message }: ToastProps) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const typeClasses = {
    [TYPE.SUCCESS]:
      'bg-green-200 border-l-4 border-solid border-green-dark text-green-dark',
    [TYPE.ERROR]:
      'bg-red-200 border-l-4 border-solid border-red-550 text-red-550'
  };

  const icon = {
    [TYPE.SUCCESS]: <FontAwesomeIcon icon={faCheck} />,
    [TYPE.ERROR]: <FontAwesomeIcon icon={faCircleXmark} />
  };

  const typeClass = typeClasses[type];
  const typeIcon = icon[type];

  return (
    <div
      className={clsx(
        'rounded-md font-semibold flex gap-8 m-3 p-3 z-20 w-96 items-center',
        'animate-slideInLeft transition ease-in-out duration-300',
        typeClass
      )}
    >
      {typeIcon}
      <p>{message}</p>
    </div>
  );
};

export default Message;
