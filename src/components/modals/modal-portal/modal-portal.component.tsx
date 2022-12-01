import { createPortal } from 'react-dom';
import { Fragment, useEffect, useRef } from 'react';

import IconButton from '../../buttons/icon-button/icon-button.component';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';

import './modal-portal.styles.scss';

type ModalPortalProps = {
  open: boolean;
  title: string;
  children?: JSX.Element;
  onClose: () => void;
};

const ModalPortal = ({ open, title, children, onClose }: ModalPortalProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleEscapeClick = (evt: KeyboardEvent) => {
      if (evt.key !== 'Escape') {
        return;
      }
      onClose();
    };

    document.addEventListener('keydown', handleEscapeClick);
    return () => {
      document.removeEventListener('keydown', handleEscapeClick);
    };
  }, [ref, onClose]);

  if (!open) {
    return null;
  }

  return createPortal(
    <Fragment>
      <div className="overlay" />
      <div className="modal-portal" ref={ref}>
        <header className="modal-portal__header">
          <h2>{title}</h2>
          <IconButton onClick={onClose} title="Close modal">
            <CloseIcon />
          </IconButton>
        </header>
        <div className="modal-portal__content">{children}</div>
      </div>
    </Fragment>,
    document.getElementById('modal-root')!
  );
};

export default ModalPortal;
