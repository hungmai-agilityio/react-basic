import { ReactNode } from 'react';

interface FormProps {
  title: string;
  sub: string;
  children: ReactNode;
}

const Form = ({ title, sub, children }: FormProps) => {
  return (
    <div className="h-screen bg-form bg-no-repeat bg-cover overflow-hidden">
      <div
        className={'w-form m-form bg-white p-8 rounded-xl shadow-form h-form'}
      >
        <img src="/images/logo.png" alt="Logo" className="block my-0 mx-auto" />
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
