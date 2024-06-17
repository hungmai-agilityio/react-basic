import { MESSAGE_VALID } from '@/constants/message';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/regex';

interface FormValues {
  [key: string]: string;
}

interface FieldErrors {
  [key: string]: string;
}

/**
 * Function check validation
 * @param {object} data
 * @returns {object}
 */
const validation = (data: FormValues): FieldErrors => {
  const errors: FieldErrors = {};

  Object.keys(data).forEach((key) => {
    const value = data[key];

    // Check for empty fields
    if (!value.trim()) {
      const fieldName = key.charAt(0).toUpperCase() + key.slice(1);
      errors[key] = MESSAGE_VALID.INPUT_REQUIRED.replace('{field}', fieldName);
    } else {
      if (key === 'email' && !EMAIL_REGEX.test(value)) {
        errors[key] = MESSAGE_VALID.EMAIL_ERROR;
      }
      if (key === 'password' && !PASSWORD_REGEX.test(value)) {
        errors[key] = MESSAGE_VALID.PASSWORD_ERROR;
      }

      if (key === 'confirm' && data.password !== value) {
        errors[key] = MESSAGE_VALID.CONFIRM_ERROR;
      }
    }
  });

  return errors;
};

export default validation;
