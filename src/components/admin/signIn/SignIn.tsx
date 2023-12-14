import Modal from '../../UI/Modal';
import Button from '../../UI/Button';
import PassportInput from '../../UI/PassportInput';
import { useState } from 'react';
import Input from '../../UI/Input';

const SignIn = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <div className="bg-cover bg-center w-full h-screen bg-adminImg">
        <Modal
          open={isOpen}
          onClose={handleClose}
          className="w-[614px] h-[548px] rounded-3xl"
        >
          <div className="p-[40px]">
            <div className="text-center">
              <h1 className="text-black text-7xl font-bold ">Вход</h1>
            </div>
            <form className="">
              <div className="mb-4 text-center mt-[32px]">
                <Input
                  placeholder="Логин"
                  className=" py-6 w-full rounded-xl text-black text-center"
                />
                <PassportInput
                  placeholder="Пароль"
                  id="passport-input"
                  className="w-[534px] rounded-xl bg-[#EDEDED] py-6 mt-[32px] outline-none text-center text-black"
                />
              </div>
              <Button className="w-full bg-[#00315D] mt-[33px] py-6 text-white">
                Войти
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SignIn;
