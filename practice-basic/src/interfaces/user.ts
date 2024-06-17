export interface IAccount {
  id: string;
  userName: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface IProfile {
  id: string;
  user_id: string;
  avatar: string;
  phone: string;
  bio: string;
}

export interface IUserAction {
  id: string,
  user_id: string,
  book_id: string,
  created_at: Date
}