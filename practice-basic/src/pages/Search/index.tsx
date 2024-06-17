import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { v1 as uuidv4 } from 'uuid';

// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IAccount, IBook } from '@/interfaces';

// Services
import { getData, getUserData, addFavorite } from '@/services';

// Components
import TableBook from '@/components/Table/Book';

// Utils
import { debounce, searchBooks, currentUser } from '@/utils';

const SearchPage = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
  const [user, setUser] = useState<IAccount | undefined>(undefined);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [borrowedBooks, setBorrowedBooks] = useState<string[]>([]);

  const { searchValue, searchOption } = useOutletContext<{
    searchValue: string;
    searchOption: string;
  }>();

  const userData = currentUser() as IAccount;

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getData(END_POINT.BOOK);
      setBooks(response.data || []);
      setIsLoading(false);
      setUser(userData);

      if (userData?.id) {
        const borrowed = await getUserData(userData.id, END_POINT.BORROWED);
        setBorrowedBooks(borrowed.data?.map((borrow) => borrow.book_id) || []);

        const favorites = await getUserData(userData.id, END_POINT.FAVORITE);
        if (!favorites.error) {
          setFavorites(
            favorites.data?.map((favorite) => favorite.book_id) || []
          );
        }
      }
    };

    fetchBooks();
  }, []);

  // Handle users adding favorite books
  const handleAddFavorite = async (bookId: string) => {
    if (favorites.includes(bookId)) {
      return;
    }

    const data = {
      id: uuidv4(),
      user_id: user!.id,
      book_id: bookId,
      created_at: new Date()
    };

    await addFavorite(data);
    setFavorites([...favorites, bookId]);
  };

  useEffect(() => {
    const debouncedSearch = debounce((query: string, option: string) => {
      const results = searchBooks(books, query, option);
      setFilteredBooks(results);
    });

    debouncedSearch(searchValue, searchOption);
  }, [searchValue, searchOption, books]);

  return (
    <div className="mt-16">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TableBook
          data={filteredBooks}
          favorites={favorites}
          onFavoriteClick={handleAddFavorite}
          borrowedBooks={borrowedBooks}
        />
      )}
    </div>
  );
};

export default SearchPage;
