import { ChangeEvent, memo, useState } from 'react';

// Font Awesome
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Constants
import { LIST_SEARCH, SIZE } from '@/constants';

// Components
import Dropdown from '@/components/Dropdown';
import ButtonIcon from '@/components/Button/Icon';

interface SearchProps {
  value: string;
  option?: boolean;
  onChange?: (value: string, option: string) => void;
}

export const Search = memo(({ value, option, onChange }: SearchProps) => {
  const [selected, setSelected] = useState<string>('Title');

  const handleOptionSelected = (option: string) => {
    setSelected(option);
    onChange?.('', option);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange?.(value, selected);
  };

  return (
    <div
      className="flex w-547 h-50 items-center bg-white border
     border-gray-300 rounded-3xl pr-3"
    >
      {option && (
        <Dropdown
          items={LIST_SEARCH}
          title={selected}
          styles="bg-gray-100 rounded-tl-[30px] rounded-bl-[30px]"
          onSelect={handleOptionSelected}
        />
      )}

      <div className="relative flex-1">
        <input
          onChange={handleInputChange}
          placeholder="Search"
          value={value}
          className="w-full outline-none rounded-l-md pl-3 pr-8"
        />
        <ButtonIcon
          icon={faSearch}
          size={SIZE.SMALL}
          styles="absolute top-0 right-2 text-orange-550"
        />
      </div>
    </div>
  );
});
