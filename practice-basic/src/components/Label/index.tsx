import clsx from 'clsx';

// Constants
import { STATUS } from '@/constants';

interface LabelProps {
  isBorrow?: boolean;
}

const Label = ({ isBorrow }: LabelProps) => {
  return (
    <div
      className={clsx(
        'w-20 h-7 py-1 px-2 rounded text-white text-center leading-5 capitalize',
        {
          'bg-silver': !isBorrow,
          'bg-green-450': isBorrow
        }
      )}
    >
      {isBorrow ? STATUS.IN_SHELF : STATUS.NONE}
    </div>
  );
};

export default Label;
