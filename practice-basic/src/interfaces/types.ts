import { ChangeEvent, FormEvent } from 'react';

// Constants
import { TYPE } from '@/constants';

export interface ProductProps {
  image?: string;
  title?: string;
  author?: string;
  createdAt?: string;
  rating?: number;
}

export interface AuthorProps extends Pick<ProductProps, 'author' | 'title'> {}

export interface ToastProps {
  type: TYPE.SUCCESS | TYPE.ERROR;
  message: string;
}

export interface ShowToastProps {
  showToast: (toast: ToastProps) => void;
}

export interface AuthenProps {
  nameValue?: string;
  mailValue: string;
  passwordValue: string;
  confirmValue?: string;
  onNameChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onMailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onConfirmChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
  message?: { [key: string]: string };
}

export interface ApiResponse<T> {
  data: T | null;
  error: unknown;
}
