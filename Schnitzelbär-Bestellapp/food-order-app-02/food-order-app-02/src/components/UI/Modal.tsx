import { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

// interface BackdropProps {
//   onClose: () => void;
// }

interface ModalOverlayProps {
  children?: ReactElement[];
}

interface ModalProps {
  onClose: () => void;
  children?: ReactElement[];
}

const Backdrop = (props: any) => {
  return <div className={classes.Backdrop}></div>;
};

const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = (props: ModalProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
