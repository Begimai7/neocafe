import React from 'react';
import Modal from '../UI/Modal';
import img from '../../assets/adminSignIn/admin.png'
import Button from '../UI/Button';
import PassportInput from '../UI/PassportInput';
const SignIn = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleClose = () => setIsOpen(true);

  return (
    <div>
      <div
        className="bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <Modal
          open={isOpen}
          onClose={handleClose}
          width="auto"
          height="auto"
          borderRadius="20px"
        >
          <div className="p-[40px]">
            <div className="text-center">
              <h1 className="text-black text-7xl font-bold ">Вход</h1>
            </div>
            <form className="">
              <div className="mb-4 text-center mt-[32px]">
                <label
                  htmlFor="phone-number"
                  className="text-lg font-semibold "
                >
                  <input
                    type="text"
                    id="phone-number"
                    className="block rounded-xl py-[22px] mt-[48px] text-center outline-none text-black text-xl font-semibold"
                    placeholder="Логин"
                    required
                    style={{ backgroundColor: '#EDEDED', width: '100%' }}
                  />
                </label>
                <PassportInput
                  placeholder="Пароль"
                  id="passport-input"
                  style={{
                    width: '534px',
                    background: '#EDEDED',
                    borderRadius: '10px',
                    padding: '22px',
                    outline: 'none',
                    marginTop: '32px',
                  }}
                />
              </div>
              <Button styles={'w-full bg-[#5C7994] border mt-[33px] py-[19px]'}>Войти</Button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SignIn;
