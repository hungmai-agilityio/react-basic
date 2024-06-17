import { STORAGE_KEY } from '@/constants';
import { IAccount } from '@/interfaces';

/** Set data to localStorage
 * @param {string} key
 * @param {IAccount} user
 */
export const setCurrentData = (key: string, user: IAccount) => {
  localStorage.setItem(key, JSON.stringify(user));
};

/**
 * Get data local storage
 * @param {string} key
 * @returns {unknown}
 */
export const getDataStorage = (key: string): unknown | null => {
  const data = localStorage.getItem(key);
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

// Get data user login
export const currentUser = () => {
  return getDataStorage(STORAGE_KEY.USER);
};
