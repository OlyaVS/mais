import { Fragment, useState } from 'react';
import { Bookcase } from '../../store/library/libary.types';
import { store } from '../../store/store';
import { editBookcase } from '../../store/library/library.action';

import ModalPortal from '../modals/modal-portal/modal-portal.component';
import BookcaseCardMenu from '../bookcase-card-menu/bookcase-card-menu.component';
import AddBookcaseDialog from '../modals/add-bookcase-dialog/add-bookcase-dialog.component';
import bookcaseImage from '../../assets/pictures/bookcase.jpg';
import { DEFAULT_BOOKCASE_ID } from '../../constants';

import './bookcase-card.styles.scss';

type BookcaseCardTypes = {
  bookcase: Bookcase;
};

const BookcaseCard = ({ bookcase }: BookcaseCardTypes) => {
  const { title, books, id } = bookcase;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const disableMenu = id === DEFAULT_BOOKCASE_ID;

  const openBookcaseModal = () => {
    setIsEditModalOpen(true);
    setIsMenuOpen(false);
  };

  const closeBookcaseModal = () => {
    setIsEditModalOpen(false);
  };

  const handleBookcaseEdit = (title: string) => {
    store.dispatch(editBookcase(id, title));
  };

  return (
    <Fragment>
      <li className="bookcase-card" key={bookcase.id}>
        <div className="bookcase-card__image">
          <img src={bookcaseImage} alt="bookcase" />
        </div>
        <header className="bookcase-card__header">
          <h3>{title}</h3>
          {!disableMenu ? (
            <BookcaseCardMenu
              isMenuOpen={isMenuOpen}
              bookcaseId={id}
              editHandler={openBookcaseModal}
              disabledDelete={bookcase.shelves.length > 0}
            />
          ) : null}
        </header>
        <p>{books} books</p>
      </li>

      <ModalPortal
        open={isEditModalOpen}
        title="Edit Bookcase Information"
        onClose={closeBookcaseModal}
      >
        <AddBookcaseDialog
          onCancel={closeBookcaseModal}
          onSubmit={handleBookcaseEdit}
          updatedBookcase={bookcase}
        />
      </ModalPortal>
    </Fragment>
  );
};

export default BookcaseCard;
