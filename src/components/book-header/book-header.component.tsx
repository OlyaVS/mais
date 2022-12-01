import { Fragment, useState } from 'react';
import { store } from '../../store/store';
import { editBook } from '../../store/library/library.action';
import { Book, BookTypes } from '../../store/library/libary.types';

import BookMenu from '../book-menu/book-menu.component';
import ModalPortal from '../modals/modal-portal/modal-portal.component';
import AddBookDialogDialog from '../modals/add-book-dialog/add-book-dialog.component';
import { ReactComponent as BookIcon } from '../../assets/icons/book.svg';
import { ReactComponent as EbookIcon } from '../../assets/icons/e-book.svg';

import './book-header.styles.scss';

type BookHeaderProps = {
  book: Book;
};

const BookHeader = ({ book }: BookHeaderProps) => {
  const { type, status, pages_read, pages, id } = book;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const completedPercentAmount =
    status !== 'new' ? `${Math.round((pages_read / pages) * 100)}` : null;

  const openBookModal = () => {
    setIsEditModalOpen(true);
    setIsMenuOpen(false);
  };

  const closeBookModal = () => {
    setIsEditModalOpen(false);
  };

  const handleBookEdit = (
    bookTitle: string,
    bookAuthor: string,
    bookType: BookTypes,
    pageCount: number
  ) => {
    store.dispatch(editBook(id, bookTitle, bookAuthor, bookType, pageCount));
  };

  return (
    <Fragment>
      <header className="book-header">
        {type === 'ebook' ? <EbookIcon /> : <BookIcon />}

        {completedPercentAmount && (
          <div className="book-header__completed">{completedPercentAmount}%</div>
        )}

        <BookMenu isMenuOpen={isMenuOpen} bookId={id} status={status} editHandler={openBookModal} />
      </header>

      <ModalPortal open={isEditModalOpen} title="Edit book" onClose={closeBookModal}>
        <AddBookDialogDialog onCancel={closeBookModal} onSubmit={handleBookEdit} book={book} />
      </ModalPortal>
    </Fragment>
  );
};

export default BookHeader;
