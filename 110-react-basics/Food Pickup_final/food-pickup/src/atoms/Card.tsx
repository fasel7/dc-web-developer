interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card(props: CardProps) {
  return <div className={`${props.className} bg-white shadow-md rounded p-8`}>{props.children}</div>;
}
