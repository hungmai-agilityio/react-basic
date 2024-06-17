/**
 * Convert date time
 * @param {String} dateTime
 * @returns {String} Days after conversion
 */
export const convertDate = (dateTime: string): string => {
  const date = new Date(dateTime);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };

  return date.toLocaleString('en-AU', options).replace(',', ' ').replace(/AM|PM/, (match) => match.toLocaleUpperCase());
};

/**
 * Convert file image to base64
 * @param {Blob} file
 * @returns {ImageData/undefined}
 */
export const convertBase64 = (file: Blob) => {

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })
};
