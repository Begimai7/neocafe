import React, { useState, ChangeEvent } from 'react';
import show from '../../assets/passportInput/noEye.svg';
import hide from '../../assets/passportInput/eye.svg';

interface PasswordInputProps {
  id: string;
  label?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  style,
  placeholder,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="relative inline-block">
        <input
          className="text-center text-black font-semibold text-lg"
          type={showPassword ? 'text' : 'password'}
          id={id}
          onChange={handleChange}
          placeholder={placeholder}
          style={style}
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className=" absolute inset-y-0 right-4 flex items-center justify-center px-0 mt-[30px]"
        >
          {showPassword ? <img src={hide} /> : <img src={show} />}
        </button>
      </div>
    </div>
  );
};

export default PassportInput;
