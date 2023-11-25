import React from 'react';
import Select, { StylesConfig } from 'react-select';

interface CustomSelectProps {
  options: { value: string; label: string }[];
  selectedOption?: { value: string; label: string } | null;
  onChange?: (selectedValue: { value: string; label: string } | null) => void;
  containerClassName?: string;
  menuWidth?: string;
  label?: string;
  styles?: StylesConfig;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  selectedOption,
  onChange = () => {},
  containerClassName,
  menuWidth = '200px',
  label,
  styles: customStyles = {},
}) => {
  const defaultStyles: StylesConfig = {
    option: (provided) => ({
      ...provided,
      borderBottom: '1px solid #ccc',
      padding: 10,
      background: '#EDEDED',
      hover: 'none',
      color: 'black',
      '&:hover': {
        background: '#EDEDED',
        color: 'black',
        textTransform: 'none',
      },
    }),
    control: (provided) => ({
      ...provided,
      background: '#EDEDED',
      width: menuWidth,
      marginTop: '5px',
    }),
    menu: (provided) => ({
      ...provided,
      width: menuWidth,
      background: 'none',
      borderRadius: 'none',
      boxShadow: 'none',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'black',
      textAlign: 'center',
    }),
  };
  const mergedStyles: StylesConfig = {
    ...defaultStyles,
    ...customStyles, // Merge with custom styles
  };

  return (
    <div>
      {label && (
        <label className="block text-base text-gray-500 mb-2">{label}</label>
      )}
      <Select
        options={options}
        value={selectedOption}
        onChange={(selectedValue) =>
          onChange(selectedValue as { value: string; label: string } | null)
        }
        styles={mergedStyles}
        className={containerClassName}
        placeholder="Kатегория"
      />
    </div>
  );
};

export default CustomSelect;
