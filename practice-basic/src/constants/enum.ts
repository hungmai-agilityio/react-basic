enum SIZE {
  MINI = 'extra-small',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

enum STATUS {
  IN_SHELF = 'in-shelf',
  NONE = 'none'
}

enum TYPE {
  PRIMARY = 'primary',
  SECOND = 'second',
  PASSWORD = 'password',
  FILE = 'file',
  TEXT = 'text',
  ALL = 'all',
  SHELF = 'shelf',
  SUCCESS = 'success',
  ERROR = 'error'
}

enum CELL {
  TH = 'th',
  TD = 'td'
}

enum STORAGE_KEY {
  USER = 'currentUser'
}

export { SIZE, STATUS, TYPE, CELL, STORAGE_KEY };
