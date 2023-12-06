import React, { useState, FC } from 'react';
import Modal from '../../UI/Modal';
import img from '../../../assets/barista/signIn/img.png';
import back from '../../../assets/barista/signIn/back.svg';

const SignIn: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState<number>(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');

  const handleClose = () => setIsOpen(true);

  const handlePhoneNumberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim() === '') {
      // Вывод ошибки о пустом номере телефона или другую логику валидации
      return;
    }
    // Здесь можно добавить логику отправки запроса для отправки сообщения на номер телефона
    // и переход к следующему шагу после успешной отправки сообщения
    setStep(2);
  };

  const handleVerificationCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode.trim() === '') {
      // Вывод ошибки о пустом коде подтверждения или другую логику валидации
      return;
    }
    // Здесь можно добавить логику проверки полученного кода и переход к следующему шагу при успешной верификации
    setStep(3);
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((name && surname.trim() === '') || birthDate.trim() === '') {
      // Вывод ошибки о незаполненных полях или другую логику валидации
      return;
    }
    // Здесь можно добавить логику отправки данных регистрации
    alert('Вы успешно зарегистрировались!');
  };
  return (
    <div
      className="bg-cover bg-center w-full h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <Modal
        open={isOpen}
        onClose={handleClose}
        width="614px"
        height="auto"
        borderRadius="20px"
      >
        <div className="flex flex-col items-center justify-between ">
          <div className="w-full h-20 " style={{ backgroundColor: '#FF8B5B' }}>
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="absolute top-6 left-4"
              >
                <img src={back} alt="" />
              </button>
            )}
            {step === 3 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="absolute top-6 left-4"
              >
                <img src={back} alt="" />
              </button>
            )}
            <h2 className="text-center text-white text-2xl font-bold mt-2">
              Шаг {step} из 3
            </h2>
            <p className="text-center text-white font-semibold text-lg ">
              {step === 1 && 'Укажите номер телефона'}
              {step === 2 && 'Введите код подтверждения'}
              {step === 3 && 'Заполните личные данные'}
            </p>
          </div>

          {step === 1 && (
            <div className="pb-[85px] flex flex-col items-center">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-black text-7xl font-bold mt-12">Вход</h1>
                <p className="text-black text-2xl font-bold w-[80%] mt-[24px]">
                  Введите номер телефона, на который придет код
                </p>
              </div>
              <form onSubmit={handlePhoneNumberSubmit} className="">
                <div className="mb-4 text-center mt-[32px]">
                  <label
                    htmlFor="phone-number"
                    className="text-lg font-semibold "
                  >
                    Номер телефона
                    <input
                      type="text"
                      id="phone-number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="block rounded-xl py-5 px-40 text-center outline-none text-black text-xl font-semibold"
                      placeholder="(555) 555 555"
                      required
                      style={{ backgroundColor: '#EDEDED', width: '534px' }}
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="rounded-xl py-5 text-white"
                  style={{ backgroundColor: '#FF8B5B', width: '534px' }}
                >
                  Получить код
                </button>
              </form>
            </div>
          )}
          {step === 2 && (
            <div className="pb-[85px] flex flex-col items-center">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-black text-7xl font-bold mt-12">Вход</h1>
                <p className="text-black text-2xl font-bold w-[80%] mt-[24px]">
                  Код подтверждения был отправлен на номер {phoneNumber}
                </p>
              </div>
              <form onSubmit={handleVerificationCodeSubmit} className="">
                <div className="mb-4 text-center mt-[32px]">
                  <label
                    htmlFor="verificationCode"
                    className="text-lg font-semibold"
                  >
                    Код подтверждения:
                  </label>
                  <input
                    type="text"
                    id="verificationCode"
                    name="verificationCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="block rounded-xl py-5 px-40 text-center outline-none text-black text-xl font-semibold appearance-none"
                    placeholder="0 0 0 0"
                    style={{ backgroundColor: '#EDEDED', width: '534px' }}
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-xl py-5 text-white"
                  style={{ backgroundColor: '#FF8B5B', width: '534px' }}
                >
                  Подтвердить
                </button>
              </form>
            </div>
          )}
          {step === 3 && (
            <div className="pb-[85px] flex flex-col items-center">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-black text-7xl font-bold mt-12">Вход</h1>
              </div>
              <form onSubmit={handleRegistrationSubmit} className="">
                <div className="mb-4 text-center mt-[32px]">
                  <label htmlFor="name" className="text-lg font-semibold">
                    Имя
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block rounded-xl py-5 px-40 text-center outline-none text-black text-xl font-semibold"
                      placeholder="Как вас зовут?"
                      style={{ backgroundColor: '#EDEDED', width: '534px' }}
                    />
                  </label>
                  <label htmlFor="surname" className="text-lg font-semibold">
                    Фамилия
                    <input
                      type="text"
                      id="surname"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      className="block rounded-xl py-5 px-40 text-center outline-none text-black text-xl font-semibold"
                      placeholder="Ваша фамилия?"
                      style={{ backgroundColor: '#EDEDED', width: '534px' }}
                    />
                  </label>
                  <label htmlFor="birthDate" className="text-lg font-semibold">
                    Дата рождения:
                    <input
                      type="date"
                      id="birthDate"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="block rounded-xl py-5 px-40 text-center outline-none text-black text-xl font-semibold"
                      placeholder="01.01.1991"
                      style={{ backgroundColor: '#EDEDED', width: '534px' }}
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="rounded-xl py-5 text-white"
                  style={{ backgroundColor: '#FF8B5B', width: '534px' }}
                >
                  Зарегистрироваться
                </button>
              </form>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default SignIn;
