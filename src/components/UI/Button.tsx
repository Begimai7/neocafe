type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface Props {
  children: React.ReactNode;
  onClick?:  (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: ButtonType;
  disabled?: boolean;
  id?: string;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props?.onClick}
      className={`${props.className} px-3 py-2 font-medium color`}
      type={props?.type}
      disabled={props?.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
