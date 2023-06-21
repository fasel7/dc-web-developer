import { ListItem, ListItemProps } from '../atoms/ListItem';

interface ListProps {
  items: ListItemProps[];
}

export function List(props: ListProps) {
  return (
    <ul className="flex gap-4 flex-wrap justify-center">
      {props.items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          title={item.title}
          buttonTitle={item.buttonTitle}
          onClick={item.onClick}
        ></ListItem>
      ))}
    </ul>
  );
}
