const LIST_SEARCH = [
  'Title',
  'Author',
  'Text',
  'Subjects'
];

const USER_OPTION = [
  'Profile',
  'Favorite',
  'Logout'
];

const VALID_IMAGE = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/svg+xml'
];

const LIST_ITEM = [
  {
    name: 'Home',
    icon: '/images/home.svg',
    path: '/'
  },
  {
    name: 'Search',
    icon: '/images/search.svg',
    path: '/search'
  },
  {
    name: 'My Shelf',
    icon: '/images/shelf.svg',
    path: '/shelf'
  }
];

export {
  LIST_SEARCH,
  USER_OPTION,
  LIST_ITEM,
  VALID_IMAGE
};
