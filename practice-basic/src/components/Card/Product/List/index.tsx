import { ShowAllProps } from '@/interfaces';
import ListCard from '../../List';
import { TYPE } from '@/constants';

const ProductList = ({
  onClick,
  isLoading,
  heading,
  children
}: ShowAllProps) => {
  return (
    <>
      <div className="mt-6 text-xl">
        <div className="flex justify-between">
          <h2>{heading}</h2>
          <button
            className="text-silver-250 mr-12 focus:outline-none text-lg"
            onClick={onClick}
          >
            Show All
          </button>
        </div>
        <div className="mt-6">
          <ListCard type={TYPE.ALL}>
            {isLoading ? <p className="text-md">Loading...</p> : children}
          </ListCard>
        </div>
      </div>
    </>
  );
};

export default ProductList;
