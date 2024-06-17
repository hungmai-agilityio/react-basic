// Configs
import { api } from '@/configs';

// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IUserAction } from '@/interfaces';

// Services

const { FAVORITE } = END_POINT;

/**
 * Add new favorite user
 * @param {IUserAction} data - data from account
 *
 * @returns {Object}
 */
export const addFavorite = async (data: IUserAction) => {
  try {
    const response = await api.post(`/${FAVORITE}`, data);

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
 * Remove borrowed book
 * @param {String} favoriteId
 * @return {Object}
 */
export const removeFavorite = async (favoriteId: string) => {
  try {
    await api.delete(`/${FAVORITE}/${favoriteId}`);

    return {
      data: favoriteId,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};