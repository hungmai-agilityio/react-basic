// Configs
import { api } from '@/configs';

// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { ApiResponse, IAccount, IProfile, IUserAction } from '@/interfaces';

// Service
import { getData } from './data';

const { ACCOUNT, PROFILE } = END_POINT;

/**
 * Get the user's profile
 * @param {String} userId
 * @returns
 */
export const getUserProfileById = async (userId: string) => {
  try {
    const response = await api.get(`/${PROFILE}?user_id=${userId}`);

    return {
      data: response.data[0],
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
 * Get email from server
 * @param {String} email
 * @returns {String}
 */
export const getUserByEmail = async (email: string) => {
  try {
    const response = await api.get(`/${ACCOUNT}?email=${email}`);

    return response.data;
  } catch (error) {
    return error;
  }
};

/**
 * Add a new user account
 * @param {IAccount} data
 *
 * @returns {Promise<ApiResponse<IAccount>>}
 */
export const addAccount = async (
  data: IAccount
): Promise<ApiResponse<IAccount>> => {
  try {
    const response = await api.post(`/${ACCOUNT}`, data);

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
 * Add a new profile user
 * @param {IProfile} data
 *
 * @returns {Promise<ApiResponse<IProfile>>}
 */
export const addProfileUser = async (
  data: IProfile
): Promise<ApiResponse<IProfile>> => {
  try {
    const response = await api.post(`/${PROFILE}`, data);

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

/** Check email exist and login if valid
 * @param {String} email
 * @param {String} password
 * @returns {Object}
 */
export const login = async (email: string, password: string) => {
  try {
    const response = await api.get(
      `/${ACCOUNT}?email=${email}&password=${password}`
    );
    if (response.data.length > 0) {
      return {
        data: response.data,
        error: null
      };
    }
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};

/**
 * Get Books borrowed from users
 * @param {string} userId
 * @param {string} endpoint
 *
 * @returns {Promise<ApiResponse<IUserAction[]>>}
 */
export const getUserData = async (
  userId: string,
  endpoint: string,
): Promise<ApiResponse<IUserAction[]>> => {
  try {
    const response: ApiResponse<IUserAction[]> = await getData(endpoint);

    const result: IUserAction[] = response.data!.filter(
      (item) => item.user_id === userId
    );

    return {
      data: result,
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
 * Update user by id
 * @param {String} endpoint - link to endpoint request
 * @param {String} id - id of the data to be updated
 * @param {Object} data - transmission data
 *
 * @returns {Object}
 */
export const updateUser = async (endpoint: string, id: string, data: object) => {
  try {
    const response = await api.patch(`/${endpoint}/${id}`, data);

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};