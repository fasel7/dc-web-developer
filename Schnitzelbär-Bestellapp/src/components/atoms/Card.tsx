import "./Card.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card(props: CardProps) {
  return <div className={props.className}>{props.children}</div>;
}
