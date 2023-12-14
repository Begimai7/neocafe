import Select, { StylesConfig } from 'react-select';
import OptionTypeBase from 'react-select';

interface CustomSelectProps {
  options: { value: string; label: string }[];
  selectedOption?: { value: string; label: string } | null;
  onChange?: (selectedValue: { value: string; label: string } | null) => void;
  containerClassName?: string;
  menuWidth?: string;
  label?: string;
  styles?: StylesConfig<OptionTypeBase, false>;
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
  const defaultStyles: StylesConfig<OptionTypeBase> = {
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
    // control: (provided) => ({
    //   ...provided,
    //   background: '#EDEDED',
    //   width: menuWidth,
    //   marginTop: '5px',
    //   '&:hover': {
    //     background: '#EDEDED',
    //   },
    // }),
    control: (provided, state) => ({
      ...provided,
      background: state.isFocused ? '#EDEDED' : '#EDEDED',
      width: menuWidth,
      marginTop: '5px',
      '&:hover, &:focus': {
        borderColor: 'none !important',
      },
    }),

    menu: (provided) => ({
      ...provided,
      width: menuWidth,
      // background: 'none',
      borderRadius: 'none',
      boxShadow: 'none',
      backgroundColor: '#9e2626',
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
        <label className="block text-base text-gray-500 mb-1.5">{label}</label>
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
