import { ReactNode } from 'react';

interface IProps {
  message: ReactNode;
}

const Empty = ({ message }: IProps) => {
  return (
    <tr className="text-lg font-bold text-gray-400 absolute left-1/3">
      <td>
        <p className="text-center">{message}</p>
        <img
          src="/images/search.jpg"
          alt="search null"
          className="mt-10 w-445 h-auto my-0 mx-auto"
        />
      </td>
    </tr>
  );
};

export default Empty;
