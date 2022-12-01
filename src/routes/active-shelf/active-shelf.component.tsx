import { ChangeEvent, Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import {
  selectBooks,
  selectBookcaseIdByShelfId,
  selectShelf,
  selectShelvesTitles,
} from '../../store/library/library.selector';
import { editShelf } from '../../store/library/library.action';
import { changeShelf, setFavouriteShelf } from '../../store/selected/selected.reducers';
import { selectFavouriteShelfId } from '../../store/selected/selected.selector';

import Select from '../../components/select/select.component';
import SearchBook from '../../components/search/search.component';
import BookCard from '../../components/book-card/book-card.component';
import IconButton from '../../components/buttons/icon-button/icon-button.component';
import ModalPortal from '../../components/modals/modal-portal/modal-portal.component';
import AddShelfDialog from '../../components/modals/add-shelf-dialog/add-shelf-dialog.component';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { ReactComponent as FavIcon } from '../../assets/icons/fav-icon.svg';
import { ReactComponent as FavActiveIcon } from '../../assets/icons/fav-icon-active.svg';
import library from '../../assets/pictures/library.jpg';

import './active-shelf.styles.scss';

const ActiveShelf = () => {
  const favouriteShelfId = useSelector(selectFavouriteShelfId);
  const shelvesTitles = useSelector(selectShelvesTitles);
  const [shelfId, setShelfId] = useState<string>(favouriteShelfId);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isFavourite = shelfId === favouriteShelfId;

  const selectedShelf = useSelector(selectShelf(shelfId))!;
  const selectedBookcaseId = useSelector(selectBookcaseIdByShelfId(shelfId));
  const { title, pages, speed, pages_read, days_to_complete } = selectedShelf;
  const books = useSelector(selectBooks(shelfId));
  const booksCount = books?.length;

  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const id = evt.currentTarget.value;
    setShelfId(id);
    store.dispatch(changeShelf(id, selectedBookcaseId));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (title: string, speed: number): void => {
    store.dispatch(editShelf(selectedBookcaseId, shelfId, title, speed));
  };

  const handleFavClick = () => {
    store.dispatch(setFavouriteShelf(shelfId, selectedBookcaseId));
  };

  return (
    <Fragment>
      <div className="shelf">
        <header className="shelf__header">
          <div className="shelf__title">
            <h1>{title} Shelf</h1>
            <IconButton onClick={handleFavClick} title="Favourite shelf">
              {isFavourite ? <FavActiveIcon /> : <FavIcon />}
            </IconButton>
          </div>
          <SearchBook />
        </header>

        <div className="shelf__status">
          <div className="shelf__actions">
            <Select
              label="Select Shelf"
              items={shelvesTitles}
              onChange={handleChange}
              selectedId={shelfId}
            />
            <IconButton onClick={openModal} title="Edit shelf">
              <EditIcon />
            </IconButton>
          </div>

          <div className="shelf__data">
            <span>
              {booksCount}
              {booksCount === 1 ? ` book ` : ` books `}
              containing {pages} pages ~ {days_to_complete} days of daily reading {speed} pages
            </span>
            <span>Pages read: {pages_read} </span>
          </div>
        </div>

        {books?.length ? (
          <ul className="shelf__cards">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </ul>
        ) : (
          <div className="shelf__placeholder">
            <p>Let's add some of good books to your library</p>
            <img src={library} alt="library" />
          </div>
        )}

        <ModalPortal open={isModalOpen} title="Edit bookshelf" onClose={closeModal}>
          <AddShelfDialog
            onCancel={handleCancel}
            onSubmit={handleSubmit}
            updatedShelf={selectedShelf}
          />
        </ModalPortal>
      </div>
    </Fragment>
  );
};

export default ActiveShelf;
