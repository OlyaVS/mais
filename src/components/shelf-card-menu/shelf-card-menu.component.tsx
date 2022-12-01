import { Fragment, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import { deleteShelf, moveShelf } from '../../store/library/library.action';
import { selectBookcasesTitles } from '../../store/library/library.selector';
import { selectActiveBookcaseId } from '../../store/selected/selected.selector';

import MenuItem from '../menu-item/menu-item.component';
import IconButton from '../buttons/icon-button/icon-button.component';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

import './shelf-card-menu.styles.scss';

type ShelfCardMenuProps = {
  isMenuOpen: boolean;
  shelfId: string;
  editHandler: () => void;
  disabledDelete: boolean;
};

const ShelfCardMenu = ({
  isMenuOpen,
  shelfId,
  editHandler,
  disabledDelete,
}: ShelfCardMenuProps) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  const activeBookcaseId = useSelector(selectActiveBookcaseId);
  const userLibrary = useSelector(selectBookcasesTitles);

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

  const handleMove = (evt: React.MouseEvent) => {
    const target = evt.target as HTMLInputElement;

    if (target.value.length > 0) {
      const targetShelfId = target.value;
      store.dispatch(moveShelf(activeBookcaseId, shelfId, targetShelfId));
      setIsOpen(false);
    }
  };

  const handleDelete = () => {
    store.dispatch(deleteShelf(activeBookcaseId, shelfId));
    setIsOpen(false);
  };

  return (
    <Fragment>
      <IconButton onClick={openMenu} title="Shelf Menu">
        <MenuIcon />
      </IconButton>

      <ul className={isOpen ? 'shelf__menu' : 'visually-hidden'} ref={ref}>
        <MenuItem disabled={false} title="Move to bookcase">
          <ul className="shelf__menu shelf__submenu" onClick={handleMove}>
            {userLibrary.map((bookcase) => (
              <MenuItem
                key={bookcase.id}
                disabled={bookcase.id === activeBookcaseId}
                title={bookcase.title}
                value={bookcase.id}
              />
            ))}
          </ul>
        </MenuItem>
        <MenuItem onClick={handleEdit} disabled={false} title="Edit" />
        <MenuItem onClick={handleDelete} disabled={disabledDelete} title="Delete" />
      </ul>
    </Fragment>
  );
};

export default ShelfCardMenu;
