import { ChangeEvent, memo } from 'react';
import clsx from 'clsx';

// Font Awesome
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Constants
import { SIZE } from '@/constants';

// Components
import ButtonIcon from '@/components/Button/Icon';

interface InputProps {
  label?: string;
  value?: string;
  type?: string;
  htmlFor?: string;
  placeholder?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  message?: string;
  icon?: IconDefinition;
  styles?: string;
  disabled?: boolean;
}

export const Input = memo(
  ({
    label,
    value,
    type,
    htmlFor,
    placeholder,
    name,
    onChange,
    onClick,
    message,
    icon,
    styles,
    disabled
  }: InputProps) => {
    return (
      <>
        <div className="mb-5">
          {label && (
            <label
              htmlFor={htmlFor}
              className="font-bold leading-2-xs capitalize"
            >
              {label}
            </label>
          )}
          <div className="relative">
            <input
              id={htmlFor}
              name={name}
              value={value}
              onChange={onChange}
              type={type}
              placeholder={placeholder}
              className={clsx(
                'w-full mt-1.5 border border-solid border-silver rounded-md outline-none p-3',
                icon && 'pr-8',
                styles
              )}
              disabled={disabled}
            />

            {icon && (
              <ButtonIcon
                icon={icon}
                onClick={onClick!}
                size={SIZE.SMALL}
                styles="absolute top-5 right-2"
              />
            )}
          </div>

          {message && (
            <span className="text-red-550 mr-1 visible text-xs">{message}</span>
          )}
        </div>
      </>
    );
  }
);
