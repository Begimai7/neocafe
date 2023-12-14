import { useState } from 'react';
import Modal from '../../UI/Modal';
// import cross from '../../assets/admineEmployeesCreate/cross.svg';
import cross from '../../../assets/admineEmployeesCreate/cross.svg'
import Input from '../../UI/Input';
import CustomSelect from '../../UI/CustomSelect';
import WeekSchedule from './WeekSchedule';

const CreateNewEmployees = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);

  const selectOptions = [
    { value: 'повар', label: 'повар' },
    { value: 'официант', label: 'официант' },
  ];

  const selectBranch = [{ value: 'bishkek', label: 'bishkek' }];

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        className="w=[551px] rounded-[30px] bg-[#FEFEFE]"
      >
        <div className="m-5">
          <div className="flex justify-between items-center">
            <p className=" text-[#000] text-2xl font-bold">Новый сотрудник</p>
            <button onClick={() => handleClose()}>
              <img src={cross} />
            </button>
          </div>
          <div>
            <p className=" text-[#000] text-[22px] font-semibold">
              Личные данные
            </p>
            <form action="">
              <div>
                <Input
                  label="Имя"
                  placeholder="Как зовут сотрудника"
                  className="py-6 rounded-xl text-black"
                />
                <CustomSelect
                  label="Должность"
                  options={selectOptions}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      borderRadius: '12px',
                      padding: '14px ',
                      background: '#EDEDED',
                      marginBottom: '16px',
                    }),
                    menu: (provided) => ({
                      ...provided,
                    }),
                  }}
                />
                <Input
                  type="date"
                  label="День рождения"
                  placeholder="01.01.1991"
                  className="py-6 rounded-xl text-black"
                />
                <Input
                  type="text"
                  label="Номер телефона"
                  placeholder="Введите номер телефона"
                  className="py-6 rounded-xl text-black"
                />
                <CustomSelect
                  label="Филиал"
                  options={selectBranch}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      borderRadius: '12px',
                      padding: '14px ',
                      background: '#EDEDED',
                      marginBottom: '16px',
                    }),
                    menu: (provided) => ({
                      ...provided,
                    }),
                  }}
                />
              </div>
              <div>
                <p className="text-[#000] text-2xl font-bold mb-2">
                  Составьте сотруднику график работы
                </p>
                <div className="flex justify-between  text-[#000] text-[22px] font-semibold border-b-2 border-black mb-2 pb-2">
                  <p>День недели</p>
                  <p>Время работы</p>
                </div>
                <WeekSchedule />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateNewEmployees;
