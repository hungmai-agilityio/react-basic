// Configs
import { api } from '@/configs';

// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { ApiResponse, IBook } from '@/interfaces';

const { BOOK } = END_POINT;

/**
 * Get Book data
 * @returns { Promise<ApiResponse<IBook[]>>}
 */
export const getBooks = async (): Promise<ApiResponse<IBook[]>> => {
  try {
    const response = await api.get(`/${BOOK}`);

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
 * Get book by id
 * @param {string} bookId
 * @return {Promise<ApiResponse<IBook>>}
 */
export const getBookById = async (
  bookId: string
): Promise<ApiResponse<IBook>> => {
  try {
    const response = await api.get(`/${BOOK}/${bookId}`);

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
