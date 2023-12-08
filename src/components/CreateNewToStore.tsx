import { useState } from 'react';
import Input from './UI/Input';
import Modal from './UI/Modal';
import closeIcon from '../assets/closeIcon.svg';
import CustomSelect from './UI/CustomSelect';
import Button from './UI/Button';

const CreateNewToStore: React.FC<{ title: string }> = ({ title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => setIsOpen(false);

  const selectOptions = [
    { value: 'Готовая продукция', label: 'Готовая продукция' },
    { value: 'Сырье', label: 'Сырье' },
  ];

  return (
    <div>
      <Modal
        width="600px"
        open={isOpen}
        onClose={handleClose}
        borderRadius="30px"
      >
        <div className="px-8 py-8">
          <form>
            <div className="flex justify-between">
              <p className="text-black text-2xl font-bold">{title}</p>
              <img src={closeIcon} />
            </div>
            <p className="text-black text-xl font-semibold mt-4 mb-2.5 ">
              Наименование, категория и стоимость
            </p>
            <Input
              id="productName"
              placeholder="Введите название продукции"
              type="text"
              label="Наименования"
            />
            <div className="w-100 flex justify-between mb-5 mt-5">
              <Input
                id="quantity"
                placeholder="Например: 50кг"
                type="text"
                label="Кол-во (в гр, мл, л, кг)"
                className="w-[252px]"
              />
              <CustomSelect
                label="Категория"
                options={selectOptions}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    width: '252px',
                    padding: '2px 16px',
                    borderRadius: '0.375rem;',
                    background: '#EDEDED',
                  }),
                  menu: (provided) => ({
                    ...provided,
                    width: '252px',
                  }),
                }}
              />
            </div>
            <div className="w-100 flex justify-between">
              <Input
                id="minLimit"
                placeholder="Например: 2кг"
                type="text"
                label="Минимальный лимит"
                className="w-[252px]"
              />
              <Input
                id="arrivalDate"
                placeholder="дд.мм.гггг"
                type="text"
                label="Дата прихода"
                // style={{
                //   width: '252px',
                //   padding: '10px 16px',
                //   borderRadius: '10px',
                // }}
                className="w-[252px]"
              />
            </div>
            <div className="w-100 flex justify-between mt-8">
              <Button
                // handleClick={() => {}}
                className={
                  'w-[252px] bg-white border border-solid border-1 border-[#00315D] text-#00315D h-10'
                }
                type={'submit'}
                disabled={false}
              >
                Отмена
              </Button>
              <Button
                className={
                  'w-[252px] border border-solid border-1 border-[#00315D] h-10 bg-[#00315D] text-white'
                }
                type={'submit'}
                disabled={false}
              >
                Сохранить
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateNewToStore;
