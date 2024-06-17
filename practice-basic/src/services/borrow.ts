// Configs
import { api } from '@/configs';

// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IBook, IUserAction } from '@/interfaces';

// Services
import { getBookById } from './books';

/**
 * Users borrow books
 * @param {IUserAction} data
 *
 * @returns {Object}
 */
export const borrowBook = async (data: IUserAction) => {
  try {
    const response = await api.post(`/${END_POINT.BORROWED}`, data);

    return {
      data: response.data,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};

/**
 * Get detailed information about borrowed books.
 * @param {IUserAction[]} borrowedBooks
 * @returns {Promise<(IBook & { borrowId: string, borrowDate: Date })[]>}
 */
export const getBorrowedBook = async (
  borrowedBooks: IUserAction[]
): Promise<(IBook & { borrowId: string; borrowDate: Date })[]> => {
  const bookDetail = borrowedBooks.map(async (borrowedBook) => {
    const bookResponse = await getBookById(borrowedBook.book_id);
    const book = bookResponse.data;

    if (book && book.id) {
      return {
        ...book,
        borrowId: borrowedBook.id,
        borrowDate: borrowedBook.created_at
      };
    } else {
      throw Error;
    }
  });

  return Promise.all(bookDetail);
};

/**
 * Remove books borrowed
 * @param {String} borrowedId
 * @return {Object}
 */
export const removeBorrowedBook = async (borrowedId: string) => {
  try {
    await api.delete(`/${END_POINT.BORROWED}/${borrowedId}`);

    return {
      data: borrowedId,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};
