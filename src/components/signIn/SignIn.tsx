import React from 'react';
import Modal from '../UI/Modal';
import img from '../../assets/adminSignIn/admin.png';
import Button from '../UI/Button';
import PassportInput from '../UI/PassportInput';
import styled from 'styled-components';
const SignIn = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleClose = () => setIsOpen(true);

  return (
    <SignInStyled>
      <Modal
        open={isOpen}
        onClose={handleClose}
        width="auto"
        height="auto"
        borderRadius="20px"
      >
        <Box>
          <TextCenter>
            <Text className="">Вход</Text>
          </TextCenter>
          <form>
            <InputBox>
              <label htmlFor="phone-number" className="text-lg font-semibold ">
                {/* Номер телефона */}
              </label>
              <input
                type="text"
                id="phone-number"
                className="block rounded-xl py-[22px] mt-[48px] text-center outline-none text-black text-xl font-semibold"
                placeholder="Логин"
                required
                style={{ backgroundColor: '#EDEDED', width: '100%' }}
              />
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
            </InputBox>
            <Button styles={'w-full bg-[#5C7994] border mt-[33px] py-[19px]'}>
              Войти
            </Button>
          </form>
        </Box>
      </Modal>
    </SignInStyled>
  );
};

export default SignIn;

const SignInStyled = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

const Box = styled.div`
  padding: 0 40px 40px;
`;

const TextCenter = styled.div`
  text-align: center;
`;

const Text = styled.h1`
  color: black;
  font-weight: 700;
  font-size: 72px;
`

const InputBox = styled.div`
  margin-bottom: 16px;
`