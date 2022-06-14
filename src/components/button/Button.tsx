type Props = {
  children?: React.ReactNode;
  rest?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, ...rest }: Props) => {
  return (
    <button
      className="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
