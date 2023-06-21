import { Fragment } from 'react';
import baerLogo from '../../assets/baer-logo.svg';
import mealsImage from '../../assets/schnitzel.webp';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

interface HeaderProps {
  onShowCart: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={baerLogo} className={classes.logo} alt="Schnitzelbär Logo" />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
