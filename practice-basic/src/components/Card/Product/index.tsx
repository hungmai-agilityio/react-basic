import { ProductProps } from '@/interfaces';

const Product = ({
  author,
  createdAt,
  id,
  image,
  onPreview,
  rating,
  title
}: ProductProps) => {
  const publishYear = createdAt ? createdAt.substring(0, 4) : '';

  // Handle click for get data
  const handleClick = () => {
    if (id) {
      onPreview!(id);
    }
  };

  return (
    <div
      className="py-4 p-4 w-40 h-64 rounded-xl bg-white mb-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-140 h-170 object-fill capitalize"
        />
      </div>
      <div className="text-dark mt-2 text-sm font-medium w-32">
        <p className="truncate font-bold text-xs">{title}</p>
        <p className="mb-1 truncate text-xs-2">
          {author}, {publishYear}
        </p>
        <p className="text-xs-2">
          {rating}
          <span className="text-gray-350">/5</span>
        </p>
      </div>
    </div>
  );
};

export default Product;
