import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IAccount, IBook, IUserAction } from '@/interfaces';

// Services
import { getData, getUserData, removeFavorite } from '@/services';

// Components
import TableBook from '@/components/Table/Book';
import ButtonIcon from '@/components/Button/Icon';

// Utils
import { currentUser } from '@/utils';

// Font Awesome
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const FavoriteBooksPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [books, setBooks] = useState<IBook[]>([]);
  const [favorites, setFavorites] = useState<IUserAction[]>([]);
  const [borrowedBooks, setBorrowedBooks] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavoriteBooks = async () => {
      const userData = currentUser() as IAccount;
      const response = await getData(END_POINT.BOOK);

      if (userData?.id) {
        const favoriteData = await getUserData(userData.id, END_POINT.FAVORITE);

        if (!favoriteData.error) {
          setFavorites(favoriteData.data!);

          const favoriteBookIds =
            favoriteData.data?.map((favorite) => favorite.book_id) || [];

          const favoriteBooks = response.data.filter((book: { id: string }) =>
            favoriteBookIds.includes(book.id)
          );
          setBooks(favoriteBooks);

          const borrowed = await getUserData(userData.id, END_POINT.BORROWED);
          setBorrowedBooks(
            borrowed.data?.map((borrow) => borrow.book_id) || []
          );
        }
      }

      setIsLoading(false);
    };

    fetchFavoriteBooks();
  }, []);

  const handleRemoveFavorite = async (bookId: string) => {
    const data = favorites.find((favorite) => favorite.book_id === bookId);

    if (data) {
      const response = await removeFavorite(data.id);
      if (!response.error) {
        setBooks((prevFavorites) =>
          prevFavorites.filter((book) => book.id !== bookId)
        );
      }
    }
  };

  const handleBackToResult = () => {
    navigate(-1);
  };

  return (
    <div className="mt-10">
      <ButtonIcon
        icon={faArrowLeft}
        text="Back"
        onClick={handleBackToResult}
        styles="w-40 hover:text-orange-550"
      />

      <h1 className="mt-4 text-lg font-bold text-dark">Your Favorite</h1>
      <div className="mt-2">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TableBook
            data={books}
            favorites={books.map((book) => book.id)}
            onFavoriteClick={handleRemoveFavorite}
            borrowedBooks={borrowedBooks}
          />
        )}
      </div>
    </div>
  );
};

export default FavoriteBooksPage;
