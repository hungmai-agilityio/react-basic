const MESSAGE_GREETING = {
  MORNING: 'Good Morning',
  DAY: 'Good day',
  EVENING: 'Good Evening'
};

const MESSAGE_VALID = {
  EMAIL_ERROR: 'Email is not valid',
  PASSWORD_ERROR:
    'Minimum 6 characters, one uppercase, one lowercase, one number',
  CONFIRM_ERROR: 'Password confirmation do not match password',
  INPUT_REQUIRED: '{field} is required',
  EMAIL_EXIST: 'Email has been registered, please try again!',
  LOGIN_ERROR: 'Email or password is incorrect',
  SEARCH_EMPTY: 'No books found',
  PREVIEW_EMPTY: 'Please select a book to preview',
  BORROW_EXIST: 'This book is already on the bookshelf',
  UPLOAD: 'Only file .png, .jpg, .jpeg, .svg allowed'
};

const MESSAGE_API = {
  GET_SUCCESS: 'Data has been retrieved successfully',
  GET_ERROR: 'Retrieve data failed',
  ADD_SUCCESS: 'User has been created successfully',
  ADD_ERROR: 'User initialization failed',
  LOGIN_ERROR: 'email or password is incorrect',
  UPDATE_SUCCESS: 'Your profile has been updated',
  UPDATE_ERROR: 'Your profile has not been updated',
  BORROW_SUCCESS: 'This book has been added to your bookshelf',
  NETWORK_ERROR: 'An error occurred, please try again!'
};

export { MESSAGE_GREETING, MESSAGE_VALID, MESSAGE_API };