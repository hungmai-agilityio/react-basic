import { ReactNode } from 'react';

// Font Awesome
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Constants
import { SIZE, TYPE } from '@/constants';

// Components
import ButtonIcon from '@/components/Button/Icon';
import Button from '@/components/Button/Default';

interface ModalProps {
  isOpen: boolean;
  title: string;
  btnNamePrimary?: string;
  btnNameSecondary?: string;
  onClickBtnPrimary?: () => void;
  onClickBtnSecondary?: () => void;
  onCloseModal: () => void;
  children?: ReactNode;
}

const Modal = ({
  isOpen,
  title,
  btnNamePrimary,
  btnNameSecondary,
  onCloseModal,
  onClickBtnPrimary,
  onClickBtnSecondary,
  children
}: ModalProps) => {
  const toggleModal = () => {
    onCloseModal();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-600 bg-opacity-50">
          <div className="bg-white w-full max-w-md p-4 rounded-md border-b-2 border-orange-500">
            <div className="flex items-center justify-between mb-4 border-b-2 border-orange-500">
              <h3 className="text-orange-550 text-lg font-semibold">{title}</h3>
              <ButtonIcon
                icon={faTimes}
                onClick={toggleModal}
                size={SIZE.LARGE}
                styles="hover:text-orange-550"
              />
            </div>
            <div className="mt-10 flex justify-center text-lg">{children}</div>
            <div className="mt-10 flex gap-6 justify-center">
              {btnNameSecondary && onClickBtnSecondary && (
                <Button
                  name={btnNameSecondary}
                  size={SIZE.SMALL}
                  type={TYPE.SECOND}
                  onClick={onClickBtnSecondary}
                />
              )}
              {btnNamePrimary && onClickBtnPrimary && (
                <Button
                  name={btnNamePrimary}
                  size={SIZE.SMALL}
                  type={TYPE.PRIMARY}
                  onClick={onClickBtnPrimary}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
