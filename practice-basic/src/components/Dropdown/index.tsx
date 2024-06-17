import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

interface DropdownProps {
  title: string;
  items: string[];
  onSelect?: (item: string) => void;
  styles?: string;
  spacing?: string;
}

const Dropdown = ({
  title,
  items,
  onSelect,
  styles,
  spacing
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCloseDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('click', handleCloseDropdown);
    }

    return () => {
      window.removeEventListener('click', handleCloseDropdown);
    };
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemSelect = (item: string) => {
    setIsOpen(false);
    onSelect?.(item);
  };

  return (
    <div className={clsx('relative', styles)} ref={dropdownRef}>
      <div
        className={clsx('flex items-center cursor-pointer px-4 py-2', spacing)}
        onClick={toggleDropdown}
      >
        <span className="text-lg inline-flex max-w-sm truncate">{title}</span>
        <FontAwesomeIcon
          icon={faCaretDown}
          className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      {isOpen && (
        <ul className="w-40 absolute mt-2 bg-white shadow-lg rounded-md z-20">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleItemSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
