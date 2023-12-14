import Modal from './UI/Modal';
import { useState } from 'react';
import closeIcon from '../assets/closeIcon.svg';
import Input from '../components/UI/Input';
import CustomSelect from '../components/UI/CustomSelect';
import Button from './UI/Button';
import PhotoInput from './UI/PhotoInput';
import plusIcon from '../assets/plusIcon.svg';

const CreateNewMenu: React.FC<{ title: string }> = ({ title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => setIsOpen(false);
  const selectOptions = [
    { value: 'Кофе', label: 'Кофе' },
    { value: 'Десерты', label: 'Десерты' },
    { value: 'Выпечка', label: 'Выпечка' },
    { value: 'Коктейли', label: 'Коктейли' },
    { value: 'Чай', label: 'Чай' },
  ];

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        width="500px"
        height="700px"
        borderRadius="30px"
      >
        <div className="px-8 py-8">
          <div className="flex justify-between">
            <p className="text-black text-xl font-semibold">{title}</p>
            <img src={closeIcon} />
          </div>
          <p className="text-black text-base font-semibold mt-2">
            Добавьте фотографию к позиции
          </p>
          <PhotoInput height="160px" />

          <p className="text-black text-lg font-semibold mt-2">
            Наименование, категория и стоимость
          </p>
          <Input
            id="productName"
            placeholder="Введите название новой позиции"
            type="text"
            label="Наименования"
            // style={{ width: '435px', padding: '8px 16px', marginBottom: '5px' }}
          />
          <div className="w-100 flex justify-between">
            <CustomSelect
              label="Категория"
              options={selectOptions}
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: '200px',
                  padding: '1px 16px',
                  borderRadius: '0.375rem;',
                  backgroundColor: '#EDEDED',
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: '#EDEDED',
                }),
              }}
            />
            <Input
              placeholder="Введите стоимость"
              type="text"
              label="Стоимость"
            />
          </div>
          <p className="text-black text-base font-semibold mt-2 ">
            Состав блюда и граммовка
          </p>
          <div className="w-100 flex justify-between">
            <Input
              placeholder="Например: Молоко"
              type="text"
              label="Наименование"
            />
            <Input
              placeholder="Кол-во"
              type="text"
              label="Кол-во ( в гр, мл, л, кг)"
              // style={{ width: '200px', borderRadius: '10px' }}
            />
          </div>
          <Button
            className={
              'w-[200px] border border-solid border-1 border-[#00315D] h-10 bg-[#00315D] text-white mt-3 flex items-center justify-center'
            }
            type={'submit'}
            disabled={false}
          >
            Добавить еще
            <img src={plusIcon} className="ml-2" />
          </Button>
          <div className="w-100 flex justify-between mt-3">
            <Button
              className={
                'w-[200px] bg-white border border-solid border-1 border-[#00315D] text-#00315D h-10'
              }
              type={'submit'}
              disabled={false}
            >
              Отмена
            </Button>
            <Button
              className={
                'w-[200px] border border-solid border-1 border-[#00315D] h-10 bg-[#00315D] text-white'
              }
              type={'submit'}
              disabled={false}
            >
              Создать
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateNewMenu;
