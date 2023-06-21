import "./Button.css";

interface ButtonProps {
  value: string;
  type?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}

export function Button(props: ButtonProps) {
  const type = props.type || "button";

  return <input className={props.className} type={type} value={props.value} onClick={props.onClick}></input>;
}

export default Button;
