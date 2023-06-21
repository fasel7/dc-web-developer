interface ButtonProps {
  value: string;
  type?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const type = props.type || 'button';

  return (
    <input
      className={`${props.className} mb-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer mx-4`}
      type={type}
      value={props.value}
      onClick={props.onClick}
    />
  );
};

export default Button;
