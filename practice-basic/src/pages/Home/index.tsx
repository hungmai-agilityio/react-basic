import { useEffect, useState } from 'react';

// Constants
import { END_POINT, TYPE, URLS } from '@/constants';

// interfaces
import { IAccount, IBook } from '@/interfaces';

// Services
import { getBorrowedBook, getData, getUserData } from '@/services';

// Utils
import { currentUser } from '@/utils';

// Components
import Quote from '@/components/Quote';
import Greeting from '@/components/Greeting';
import ListCard from '@/components/Card/List';
import Product from '@/components/Card/Product';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [borrows, setBorrows] = useState<
    (IBook & { borrowId: string; borrowDate: Date })[]
  >([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      const userData = currentUser() as IAccount;

      const response = await getData(END_POINT.BOOK);
      setBooks(response.data || []);
      setIsLoading(false);

      if (userData?.id) {
        // Get book borrowed
        const response = await getUserData(userData.id, END_POINT.BORROWED);
        const bookBorrowed = await getBorrowedBook(response.data!);
        setBorrows(bookBorrowed);
      }
    };

    fetchBooks();
  }, []);

  const handleShowAllBook = () => {
    navigate(`${URLS.SEARCH}`);
  };

  const handleShowAllReading = () => {
    navigate(`${URLS.SHELF}`);
  };

  const handleBookPreview = (bookId: string) => {
    navigate(`${URLS.BOOK_PREVIEW}?bookId=${bookId}`);
  };

  return (
    <div className="mt-12">
      <Quote />
      <div className="mt-11">
        <Greeting />
        <div className="mt-6 text-xl">
          <div className="flex justify-between">
            <h2>Recommended for You</h2>
            <button
              className="text-silver-250 mr-12 focus:outline-none text-lg"
              onClick={handleShowAllBook}
            >
              Show All
            </button>
          </div>
          <div className="mt-6">
            <ListCard type={TYPE.ALL}>
              {isLoading ? (
                <p className="text-md">Loading...</p>
              ) : (
                books.map((book) => (
                  <Product
                    author={book.author}
                    createdAt={book.created_at.toString()}
                    image={book.image}
                    key={book.id}
                    rating={book.rating}
                    title={book.title}
                    id={book.id}
                    onPreview={handleBookPreview}
                  />
                ))
              )}
            </ListCard>
          </div>
        </div>
        <div className="mt-6 text-xl">
          <div className="flex justify-between">
            <h2>Recent Readings</h2>
            <button
              className="text-silver-250 mr-12 focus:outline-none text-lg"
              onClick={handleShowAllReading}
            >
              Show All
            </button>
          </div>
          <div className="mt-6">
            <ListCard type={TYPE.ALL}>
              {isLoading ? (
                <p className="text-md">Loading...</p>
              ) : (
                borrows.map((book) => (
                  <Product
                    author={book.author}
                    createdAt={book.created_at.toString()}
                    image={book.image}
                    key={book.id}
                    rating={book.rating}
                    title={book.title}
                  />
                ))
              )}
            </ListCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
