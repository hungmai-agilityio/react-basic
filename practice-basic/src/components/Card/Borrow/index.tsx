import { memo } from 'react';

// Utils
import { convertDate } from '@/utils';

// Constants
import { SIZE, TYPE } from '@/constants';

// Components
import Button from '@/components/Button/Default';

interface BorrowProps {
  title?: string;
  image?: string;
  author?: string;
  rating?: number;
  createdAt?: string;
  borrowDate?: string;
  borrowId: string;
  onClick: (borrowId: string) => void;
}

export const Borrow = memo(
  ({
    title,
    image,
    author,
    rating,
    createdAt,
    borrowDate,
    borrowId,
    onClick
  }: BorrowProps) => {
    const handleClick = () => {
      onClick(borrowId);
    };

    const publishYear = createdAt?.substring(0, 4);
    const borrowedDate = borrowDate && convertDate(borrowDate);

    return (
      <div className="w-card-borrow h-card-borrow p-4 bg-white rounded-xl">
        <div className="flex items-start gap-8">
          <img
            src={image}
            alt={title}
            className="w-shelf h-shelf border-silver-250 rounded"
          />
          <div>
            <p className="mt-2">Borrowed on</p>
            <span className="text-xs-2">{borrowedDate}</span>
          </div>
        </div>
        <div className="space--small flex items-center gap-8 ">
          <div className="mt-3 w-shelf">
            <p className="text-xs truncate">{title}</p>
            <p className="text-xs-2 truncate">
              {author}, {publishYear}
            </p>
            <span className="text-xs-2">
              {rating}
              <span className="text-silver-250">/5</span>
            </span>
          </div>
          <Button
            name="Return"
            onClick={handleClick}
            type={TYPE.SECOND}
            size={SIZE.SMALL}
          />
        </div>
      </div>
    );
  }
);
