import React, { ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  id?: string;
  name?: string;
  label?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  style,
  placeholder,
  type,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-base text-gray-500">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        style={style}
        className="mt-1 p-2 border rounded-md w-full focus:outline-none bg-[#EDEDED]"
      />
    </div>
  );
};

export default Input;
