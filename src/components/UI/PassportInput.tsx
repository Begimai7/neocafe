import React, { useState, ChangeEvent } from 'react';
import show from "../../assets/passportInput/noEye.svg"
import hide from '../../assets/passportInput/eye.svg';

interface PassportInputProps {
  id: string;
  label?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const PassportInput: React.FC<PassportInputProps> = ({
  id,
  label,
  style,
  placeholder,
  onChange,
}) => {
  const [showPassport, setShowPassport] = useState<boolean>(false);

  const toggleShowPassport = () => {
    setShowPassport((prevState) => !prevState);
  };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          className="text-center text-black font-semibold text-lg"
          type={showPassport ? 'text' : 'password'}
          id={id}
          onChange={handleChange}
          placeholder={placeholder}
          style={style}
        />
        <button
          onClick={toggleShowPassport}
          className="relative right-10 top-1"
        >
          {showPassport ? <img src={hide} /> : <img src={show} />}
        </button>
      </div>
    </div>
  );
};

export default PassportInput;
