import { ReactElement } from 'react';
import classes from './Card.module.css';

interface CardProps {
  children: ReactElement;
}

const Card = (props: CardProps) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
