import Modal from './UI/Modal';
import { useState } from 'react';
import closeIcon from '../assets/closeIcon.svg';
import cloudIcon from '../assets/cloudIcon.svg';
import Input from '../components/UI/Input';
import CustomSelect from '../components/UI/CustomSelect';
import Button from './UI/Button';

const CreateNewMenu = () => {
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
            <p className="text-black text-xl font-semibold ">Новая позиция</p>
            <img src={closeIcon} />
          </div>

          <div className="bg-red-500 w-93 h-30 ">
            <div className="border-2 border-dashed rounded">
              <img className="" src={cloudIcon} />
            </div>
            fkefe
          </div>

          <p className="text-black text-xl font-semibold mt-6 mb-2.5 ">
            Наименование, категория и стоимость
          </p>
          <Input
            id="productName"
            placeholder="Введите название новой позиции"
            type="text"
            label="Наименования"
            style={{ width: '440px', padding: '10px 16px' }}
          />
          <div className="w-100 flex justify-between">
            <CustomSelect
              label="Категория"
              options={selectOptions}
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: '200px',
                  padding: '2px 16px',
                  borderRadius: '10px',
                  background: '#EDEDED',
                }),
                menu: (provided) => ({
                  ...provided,
                  width: '200px',
                }),
              }}
            />
            <Input
              placeholder="Введите стоимость"
              type="text"
              label="Стоимость"
              style={{ width: '200px' }}
            />
          </div>
          <p className="text-black text-xl font-semibold  ">
            Состав блюда и граммовка
          </p>
          <div className="w-100 flex justify-between">
            <Input
              placeholder="Например: Молоко"
              type="text"
              label="Наименование"
              style={{ width: '200px' }}
            />
            <Input
              placeholder="Кол-во"
              type="text"
              label="Кол-во ( в гр, мл, л, кг)"
              style={{ width: '200px' }}
            />
          </div>
          <Button
            // handleClick={() => {}}
            styles={
              'w-[200px] border border-solid border-1 border-[#00315D] h-10 bg-[#00315D] text-white'
            }
            type={'submit'}
            disabled={false}
          >
            Добавить еще
          </Button>
          <div className="w-100 flex justify-between">
            <Button
              // handleClick={() => {}}
              styles={
                'w-[252px] bg-white border border-solid border-1 border-[#00315D] text-#00315D h-10'
              }
              type={'submit'}
              disabled={false}
            >
              Отмена
            </Button>
            <Button
              // handleClick={() => {}}
              styles={
                'w-[252px] border border-solid border-1 border-[#00315D] h-10 bg-[#00315D] text-white'
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
