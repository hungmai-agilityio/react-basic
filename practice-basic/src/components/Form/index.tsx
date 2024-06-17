import clsx from 'clsx';
import { ReactNode } from 'react';

interface FormProps {
  title: string;
  sub: string;
  children: ReactNode;
  height: string;
}

const Form = ({ title, sub, children, height }: FormProps) => {
  return (
    <div className="h-screen bg-form bg-no-repeat bg-cover overflow-hidden">
      <div
        className={clsx(
          'max-w-450 m-form bg-white p-8 rounded-xl shadow-form',
          height
        )}>
        <img
          src="src/assets/images/logo.png"
          alt="Logo"
          className="block my-0 mx-auto"
        />
        <div className="text-center my-12 mx-0">
          <h1 className="text-lg mb-4">{title}</h1>
          <p className="text-sm text-silver-250">{sub}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Form;
