import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Services
import { getBorrowedBook, removeBorrowedBook, getUserData } from '@/services';

// Utils
import { currentUser } from '@/utils';

// Constants
import { END_POINT, TYPE, URLS } from '@/constants';

// Interfaces
import { IAccount, IBook } from '@/interfaces';

// Components
import { Borrow } from '@/components/Card/Borrow';
import ListCard from '@/components/Card/List';

const Shelf = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [books, setBooks] = useState<
    (IBook & { borrowId: string; borrowDate: Date })[]
  >([]);
  const navigate = useNavigate();

  const userData = currentUser() as IAccount;

  useEffect(() => {
    const fetchBorrowed = async () => {
      if (userData?.id) {
        // Get book borrowed
        const response = await getUserData(userData?.id, END_POINT.BORROWED);
        const bookBorrowed = await getBorrowedBook(response.data!);
        setBooks(bookBorrowed);
        setIsLoading(false);
      }
    };

    fetchBorrowed();
  }, [userData?.id]);

  // Handling the return of borrowed books
  const handleReturnBook = async (borrowId: string) => {
    const response = await removeBorrowedBook(borrowId);

    if (response.data) {
      const updatedBooks = books.filter((book) => book.borrowId !== borrowId);
      setBooks(updatedBooks);
    }
  };

  // Handle navigate Favorite page
  const handleNavigateFavoritePage = () => {
    navigate(`${URLS.FAVORITE}`);
  };

  // Handle navigate to book preview
  const handleBookPreview = (bookId: string) => {
    navigate(`${URLS.BOOK_PREVIEW}?bookId=${bookId}`);
  };

  return (
    <div className="mt-7">
      <h1 className="capitalize text-xl font-bold text-dark">
        your<span className="text-orange-250"> shelf</span>
      </h1>
      <div className="mt-9 flex gap-28 font-semibold text-lg">
        <h2 className="text-dark">All Books</h2>
        <h2
          className="text-silver-250 cursor-pointer"
          onClick={handleNavigateFavoritePage}
        >
          Favorite
        </h2>
      </div>
      <div className="mt-9">
        {isLoading ? (
          <p className="text-md">Loading...</p>
        ) : (
          <ListCard type={TYPE.SHELF}>
            {books.map((book) => (
              <Borrow
                key={book.id}
                image={book.image}
                title={book.title}
                author={book.author}
                createdAt={book.created_at.toString()}
                rating={book.rating}
                onClick={handleReturnBook}
                borrowDate={book.borrowDate.toString()}
                borrowId={book.borrowId}
                id={book.id}
                onPreview={handleBookPreview}
              />
            ))}
          </ListCard>
        )}
      </div>
    </div>
  );
};

export default Shelf;
