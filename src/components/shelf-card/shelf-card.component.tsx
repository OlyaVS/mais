import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import { Shelf } from '../../store/library/libary.types';
import { editShelf } from '../../store/library/library.action';
import { selectActiveBookcaseId } from '../../store/selected/selected.selector';

import { DEFAULT_SHELF_ID } from '../../constants';
import shelfImage from '../../assets/pictures/shelf.jpg';
import IconButton from '../buttons/icon-button/icon-button.component';
import ModalPortal from '../modals/modal-portal/modal-portal.component';
import ShelfCardMenu from '../shelf-card-menu/shelf-card-menu.component';
import AddShelfDialog from '../modals/add-shelf-dialog/add-shelf-dialog.component';
import { ReactComponent as ExpandIcon } from '../../assets/icons/expand.svg';
import { ReactComponent as CollapseIcon } from '../../assets/icons/collapse.svg';

import './shelf-card.styles.scss';

type ShelfCardProps = {
  shelf: Shelf;
};

const ShelfCard = ({ shelf }: ShelfCardProps) => {
  const { id, title, books } = shelf;
  const booksCount = books.length;
  const [isShelfOpen, setIsShelfOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const activeBookcaseId = useSelector(selectActiveBookcaseId);
  const disableMenu = id === DEFAULT_SHELF_ID;

  const toggleBookShelf = () => {
    setIsShelfOpen(!isShelfOpen);
  };

  const handleOpenShelfModal = () => {
    setIsEditModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleCloseShelfModal = () => {
    setIsEditModalOpen(false);
  };

  const handleShelfEdit = (title: string, speed: number) => {
    store.dispatch(editShelf(activeBookcaseId, id, title, speed));
  };

  return (
    <Fragment>
      <li className="shelf-card" key={id}>
        <div className="shelf-card__image">
          <img src={shelfImage} alt="shelf-card" />
        </div>

        <header className="shelf-card__header">
          <h3>{title} Shelf</h3>
          {!disableMenu ? (
            <ShelfCardMenu
              isMenuOpen={isMenuOpen}
              shelfId={id}
              editHandler={handleOpenShelfModal}
              disabledDelete={!shelf.books.length}
            />
          ) : null}
        </header>
        <div className="shelf-card__info">
          <span>{booksCount} books</span>
          <IconButton onClick={toggleBookShelf} disabled={!booksCount} title="View Books">
            {isShelfOpen ? <CollapseIcon /> : <ExpandIcon />}
          </IconButton>
        </div>

        <form
          className={
            isShelfOpen
              ? 'shelf-card__books-container'
              : 'shelf-card__books-container visually-hidden'
          }
        >
          <ul className="shelf-card__books">
            {books &&
              books.map((book) => (
                <li className="shelf-card__book" key={book.id}>
                  <p>{book.title}</p>
                </li>
              ))}
          </ul>
        </form>
      </li>

      <ModalPortal
        open={isEditModalOpen}
        title="Edit Bookshelf Information"
        onClose={handleCloseShelfModal}
      >
        <AddShelfDialog
          onCancel={handleCloseShelfModal}
          onSubmit={handleShelfEdit}
          updatedShelf={shelf}
        />
      </ModalPortal>
    </Fragment>
  );
};

export default ShelfCard;
