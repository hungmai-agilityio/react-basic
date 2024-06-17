import { memo } from 'react';

// Components
import Message from '@/components/Toast/Message';

// Interfaces
import { ToastProps } from '@/interfaces';

interface ToastManagerProps {
  toasts: ToastProps[];
}

export const Toast = memo(({ toasts }: ToastManagerProps) => {
  return (
    <div className="fixed right-5 top-8">
      {toasts.reverse().map((toast, index) => (
        <Message key={index} type={toast.type} message={toast.message} />
      ))}
    </div>
  );
});
