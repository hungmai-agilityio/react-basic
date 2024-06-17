import { ChangeEvent, FormEvent } from 'react';

// Constants
import { TYPE } from '@/constants';

export interface ProductProps {
  author?: string;
  createdAt?: string;
  id?: string;
  image?: string;
  onPreview?: (id: string) => void;
  rating?: number;
  title?: string;
}

export interface AuthorProps extends Pick<ProductProps, 'author' | 'title'> { }

export interface BorrowProps extends ProductProps {
  borrowDate?: string;
  borrowId: string;
  onClick: (borrowId: string) => void;
}

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
