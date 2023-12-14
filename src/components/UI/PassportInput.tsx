import React, { useState, ChangeEvent } from 'react';
import show from '../../assets/passportInput/noEye.svg';
import hide from '../../assets/passportInput/eye.svg';

interface PasswordInputProps {
  id: string;
  label?: string;
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  className,
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
          className={className}
          type={showPassword ? 'text' : 'password'}
          id={id}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className=" absolute inset-y-0 right-4 flex items-center justify-center px-0"
        >
          {showPassword ? <img src={hide} /> : <img src={show} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;