// Components
import { Item } from '@/components/Sidebar/Item';

// Components
interface ListProps {
  items: {
    name: string;
    icon: string;
    path: string;
  }[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul className="mt-24">
      {items.map((item) => (
        <Item
          key={item.name}
          name={item.name}
          icon={item.icon}
          path={item.path}
        />
      ))}
    </ul>
  );
};

export default List;
