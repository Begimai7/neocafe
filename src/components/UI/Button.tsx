type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  styles: string;
  type?: ButtonType;
  disabled?: boolean;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props?.onClick}
      className={`${props.styles} px-3 py-2 rounded-lg font-medium `}
      type={props?.type}
      disabled={props?.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
