import { Fragment, useEffect, useRef, useState } from 'react';
import { store } from '../../store/store';
import { deleteBookcase } from '../../store/library/library.action';

import MenuItem from '../menu-item/menu-item.component';
import IconButton from '../buttons/icon-button/icon-button.component';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

import './bookcase-card-menu.styles.scss';

type BookcaseCardMenuProps = {
  isMenuOpen: boolean;
  bookcaseId: string;
  editHandler: () => void;
  disabledDelete: boolean;
};

const BookcaseCardMenu = ({
  isMenuOpen,
  bookcaseId,
  editHandler,
  disabledDelete,
}: BookcaseCardMenuProps) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      const element = ref.current;
      // @ts-ignore
      if (!element && element?.contains(evt.target)) {
        return;
      }
      setIsOpen(false);
    };

    const handleEscapeClick = (evt: KeyboardEvent) => {
      if (evt.key !== 'Escape') {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscapeClick);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.addEventListener('keydown', handleEscapeClick);
    };
  }, [ref]);

  const openMenu = () => {
    setIsOpen(true);
  };

  const handleEdit = () => {
    editHandler();
  };

  const handleDelete = () => {
    store.dispatch(deleteBookcase(bookcaseId));
    setIsOpen(false);
  };

  return (
    <Fragment>
      <IconButton onClick={openMenu} title="Bookcase menu">
        <MenuIcon />
      </IconButton>

      <ul className={isOpen ? 'bookcase__menu' : 'visually-hidden'} ref={ref}>
        <MenuItem onClick={handleEdit} disabled={false} title="Edit" />
        <MenuItem onClick={handleDelete} disabled={disabledDelete} title="Delete" />
      </ul>
    </Fragment>
  );
};

export default BookcaseCardMenu;
