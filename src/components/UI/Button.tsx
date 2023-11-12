type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  styles: string;
  type?: ButtonType;
  title: string;
  disabled?: boolean;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props?.handleClick}
      className={`${props.styles} px-3 py-2 rounded-lg hover:bg-blue font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-blue hover:bg-blue-500`}
      type={props?.type}
      title={props.title}
      disabled={props?.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
