import Modal from './UI/Modal';
import { useState } from 'react';
import Input from './UI/Input';
import closeIcon from '../assets/newBranchIcons/close.svg';
import Button from './UI/Button';
import PhotoInput from './UI/PhotoInput';
import WeekSchedule from './createNewEmployees/WeekSchedule';

const NewBranch: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Modal
      width="600px"
      open={isOpen}
      onClose={handleClose}
      borderRadius="30px"
      padding="32px"
    >
      <div className="flex items-center justify-between">
        <h5 className="font-bold text-[24px]">Новый филиал</h5>
        <img className="mb-[9px]" src={closeIcon} />
      </div>
      <p className="font-semibold mt-[24px] text-[22px]">
        Добавьте фотографию филиала
      </p>

      <PhotoInput />

      <p className="text-[22px] font-semibold uppercase mt-6">
        Название и адрес
      </p>
      <div className="mt-4">
        <p className="text-[#C1C1C3] mb-2">Название кофейни</p>
        <Input
          id="29"
          name="name of branch"
          placeholder="Название филиала"
          type="text"
          // label="Название кофейни"
          style={{
            padding: '16px 18px',
            backgroundColor: '#EDEDED',
            width: '100%',
            borderRadius: '10px',
          }}
        />
      </div>
      <div>
        <p className="text-[#C1C1C3] mb-2">Адрес</p>
        <Input
          id="29"
          name="adress of branch"
          placeholder="Адрес нового филиала"
          type="text"
          style={{
            padding: '16px 18px',
            backgroundColor: '#EDEDED',
            width: '100%',
            borderRadius: '10px',
          }}
        />
      </div>
      <div>
        <p className="text-[#C1C1C3] mb-2">Номер телефона</p>
        <Input
          id="29"
          name="phone number of branch"
          placeholder="Введите номер телефона"
          type="tel"
          style={{
            padding: '16px 18px',
            backgroundColor: '#EDEDED',
            width: '100%',
            borderRadius: '10px',
          }}
        />
      </div>
      <p className='font-bold mt-10 mb-6 text-2xl'>Заполните график работы</p>

      <WeekSchedule />
      <div className="flex gap-6 mt-12">
        <Button styles="border border-[#00315D] py-4 w-[100%] rounded-md type='submit' text-[#00315D] font-semibold">
          Отмена
        </Button>
        <Button styles="bg-[#00315D] py-4 w-[100%] rounded-md type='submit' text-white font-semibold">
          Сохранить
        </Button>
      </div>
    </Modal>
  );
};

export default NewBranch;
