import { useState, Dispatch, SetStateAction } from 'react';
import Modal from '../../UI/Modal';
import Button from '../../UI/Button';

interface deleteModalProps {
  close: Dispatch<SetStateAction<boolean>>;
}

const DeleteModal: React.FC<deleteModalProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      width="600px"
      open={isOpen}
      onClose={handleClose}
      borderRadius="30px"
      padding="32px"
    >
      <div className="flex flex-col items-center">
        <p className="font-bold text-2xl">Отменить заказ</p>
        <p className="font-semibold mt-4">
          Вы действительно хотите отменить заказ М-47?
        </p>
        <div className="flex justify-center gap-10 pt-6 px-[83px] w-full">
          <Button className="py-3 w-2/5 border border-[#FF8B5B] active:bg-[#FF8B5B] active:text-[#FEFEFE] text-[#FF8B5B]">
            Да
          </Button>
          <Button
            onClick={handleClose}
            className="py-3 w-2/5  border border-[#FF8B5B] active:bg-[#FF8B5B] active:text-[#FEFEFE] text-[#FF8B5B]"
          >
            Нет
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
