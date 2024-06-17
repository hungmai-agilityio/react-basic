import { api } from "@/configs";

/**
 * Get data from server
 * @param {String} data
 * @returns {Object}
 */
export const getData = async (data: string) => {
  try {
    const response = await api.get(`/${data}`);

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