/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v1 as uuidv4 } from 'uuid';

// Font Awesome
import {
  faArrowLeft,
  faCheckCircle,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Constants
import {
  END_POINT,
  SIZE,
  TYPE,
  MESSAGE_VALID,
  MESSAGE_API,
  URLS
} from '@/constants';

// Services
import { getBookById, getUserData, borrowBook } from '@/services';

// Interfaces
import { IAccount, IBook, ShowToastProps } from '@/interfaces';

// Utils
import { currentUser } from '@/utils';

// Components
import ButtonIcon from '@/components/Button/Icon';
import { Preview } from '@/components/Card/Preview';
import Label from '@/components/Label';
import Button from '@/components/Button/Default';
import Author from '@/components/Card/Author';

const BookPreview = ({ showToast }: ShowToastProps) => {
  const [book, setBook] = useState<IBook | null>(null);
  const [isBorrow, setIsBorrow] = useState<boolean | undefined>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const navigate = useNavigate();
  const userData = currentUser() as IAccount;

  useEffect(() => {
    // TODO: Refactor later
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('bookId');

    const fetchBookId = async () => {
      const response = await getBookById(bookId!);
      setBook(response.data);

      if (response.error) {
        showToast({ type: TYPE.ERROR, message: MESSAGE_VALID.PREVIEW_EMPTY });
        setTimeout(() => {
          navigate(`${URLS.SEARCH}`);
        }, 1000);
      }

      if (userData?.id) {
        const borrowed = await getUserData(userData.id, END_POINT.BORROWED);
        const isBorrowed = borrowed.data?.some(
          (borrow) => borrow.book_id === book?.id
        );
        setIsBorrow(isBorrowed);
      }
    };

    fetchBookId();
  }, [book?.id]);

  const publishYear = book?.created_at.toString().substring(0, 4);
  const starIcons = Array.from(
    { length: book ? book.rating : 0 },
    (_, index) => <FontAwesomeIcon key={index} icon={faStar} />
  );

  // Handle returns to the previous page
  const handleBackToResult = () => {
    navigate(-1);
  };

  // Handle borrow book
  const handleBorrowBook = async () => {
    setIsSubmitting(true);

    if (isBorrow) {
      showToast({
        type: TYPE.ERROR,
        message: MESSAGE_VALID.BORROW_EXIST
      });

      return;
    } else {
      const data = {
        id: uuidv4(),
        user_id: userData.id,
        book_id: book!.id,
        created_at: new Date()
      };

      const response = await borrowBook(data);

      if (response.data) {
        setIsBorrow(true);
        showToast({
          type: TYPE.SUCCESS,
          message: MESSAGE_API.BORROW_SUCCESS
        });
      } else {
        showToast({
          type: TYPE.ERROR,
          message: MESSAGE_API.NETWORK_ERROR
        });
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-10">
      <ButtonIcon
        icon={faArrowLeft}
        text="Back to results"
        onClick={handleBackToResult}
        styles="w-40 hover:text-orange-550"
      />
      <div className="flex items-center justify-between mt-5">
        <Preview image={book?.image} title={book?.title} />

        <div className="text-dark">
          <h1 className="text-xxl capitalize">{book?.title}</h1>
          <p className="text-sm mt-4">
            By{' '}
            <a href="#" className="underline">
              {book?.author}
            </a>
            , {publishYear}
          </p>
          <div className="flex mt-14 gap-7 font-medium text-xsm">
            <div className="flex gap-3">
              <div className="text-rating">
                <p>{starIcons}</p>
              </div>
              <p className="font-semibold">{book?.rating} Ratings</p>
            </div>
            <div className="flex gap-3">
              <p className="font-semibold">{book?.reading} Currently reading</p>
            </div>
            <div className="flex gap-3">
              <p className="font-semibold">{book?.have_read} Have read</p>
            </div>
          </div>
          <div className="flex mt-9 gap-14">
            <div>
              <p className="font-bold">Availability</p>
              <div className="flex gap-1 mt-2">
                <div className="text-green-450">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <p>Hard copy</p>
              </div>
              <div className="flex gap-1 mt-2">
                <div className="text-green-450">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <p>E-book</p>
              </div>
              <div className="flex gap-1 mt-2">
                <div className="text-green-450">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <p>Audio book</p>
              </div>
            </div>
            <div>
              <p className="font-bold">Status</p>
              <div className="mt-2">
                {isBorrow ? <Label isBorrow /> : <Label />}
              </div>
            </div>
          </div>
          <div className="mt-11">
            <Button
              name="BORROW"
              onClick={handleBorrowBook}
              type={TYPE.PRIMARY}
              size={SIZE.MEDIUM}
              isDisabled={isSubmitting}
            />
          </div>
        </div>
        <Author author={book?.author} title={book?.title} />
      </div>
    </div>
  );
};

export default BookPreview;
