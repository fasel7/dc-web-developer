export interface ListItemProps {
  id: string;
  title: string;
  buttonTitle: string;
  onClick: (id: string) => void;
}

export function ListItem(props: ListItemProps) {
  return (
    <li
      key={props.title}
      className="font-bold rounded border-4 border-white opacity-60 w-40 h-40 grid place-items-center hover:bg-white"
    >
      <button className="group p-4 h-full w-full" onClick={() => props.onClick(props.id)}>
        <p className="text-5xl text-center block group-hover:hidden">{props.title}</p>
        <p className="text-center hidden group-hover:block">{props.buttonTitle}</p>
      </button>
    </li>
  );
}
