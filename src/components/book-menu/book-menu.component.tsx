import { Fragment, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import { selectShelvesTitles } from '../../store/library/library.selector';
import { selectActiveShelfId } from '../../store/selected/selected.selector';
import { deleteBook, moveBook, pauseBook, startBook } from '../../store/library/library.action';

import MenuItem from '../menu-item/menu-item.component';
import IconButton from '../buttons/icon-button/icon-button.component';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

import './book-menu.styles.scss';

type BookMenuProps = {
  isMenuOpen: boolean;
  bookId: string;
  status: string;
  editHandler: () => void;
};

const BookMenu = ({ isMenuOpen, bookId, status, editHandler }: BookMenuProps) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  const activeShelfId = useSelector(selectActiveShelfId);
  const userShelves = useSelector(selectShelvesTitles);
  const disabledStart = status === 'active' || status === 'finished';
  const disabledPaused = status !== 'active';
  const disableEdit = status !== 'new';

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      const element = ref.current;
      // @ts-ignore
      if (element?.contains(evt.target)) {
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

  const handleStartReading = () => {
    store.dispatch(startBook(bookId));
    setIsOpen(false);
  };

  const handlePauseReading = () => {
    store.dispatch(pauseBook(bookId));
    setIsOpen(false);
  };

  const handleEdit = () => {
    editHandler();
  };

  const handleMove = (evt: React.MouseEvent) => {
    const target = evt.target as HTMLInputElement;

    if (target.value.length > 0) {
      const targetShelfId = target.value;
      store.dispatch(moveBook(activeShelfId, bookId, targetShelfId));
      setIsOpen(false);
    }
  };

  const handleDelete = () => {
    store.dispatch(deleteBook(bookId));
    setIsOpen(false);
  };

  return (
    <Fragment>
      <IconButton onClick={openMenu} title="Book menu">
        <MenuIcon />
      </IconButton>

      <ul className={isOpen ? 'book__menu' : 'visually-hidden'} ref={ref}>
        <MenuItem disabled={false} title="Move to shelf">
          <ul className="book__menu book__submenu" onClick={handleMove}>
            {userShelves.map((shelf) => (
              <MenuItem
                key={shelf.id}
                disabled={shelf.id === activeShelfId}
                title={shelf.title}
                value={shelf.id}
              />
            ))}
          </ul>
        </MenuItem>
        <MenuItem onClick={handleStartReading} disabled={disabledStart} title="Start" />
        <MenuItem onClick={handlePauseReading} disabled={disabledPaused} title="Pause" />
        <MenuItem onClick={handleEdit} disabled={disableEdit} title="Edit" />
        <MenuItem onClick={handleDelete} disabled={false} title="Delete" />
      </ul>
    </Fragment>
  );
};

export default BookMenu;
