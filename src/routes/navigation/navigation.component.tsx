import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { store } from '../../store/store';
import { BookTypes } from '../../store/library/libary.types';
import { addBookStart } from '../../store/library/library.action';
import { selectActiveShelfId } from '../../store/selected/selected.selector';
import { processManualData } from '../../utils/search/search.utils';
import IconButton from '../../components/buttons/icon-button/icon-button.component';
import ModalPortal from '../../components/modals/modal-portal/modal-portal.component';
import AddBookDialogDialog from '../../components/modals/add-book-dialog/add-book-dialog.component';
import { ReactComponent as BooksIcon } from '../../assets/icons/books.svg';
import { ReactComponent as AddBookIcon } from '../../assets/icons/add-book.svg';
import { ReactComponent as ShelvesIcon } from '../../assets/icons/shelves.svg';
import { ReactComponent as BookcaseIcon } from '../../assets/icons/library.svg';

import './navigation.styles.scss';

const Navigation = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const activeShelfId = useSelector(selectActiveShelfId);

  const handleOpenBookModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseBookModal = () => {
    setIsEditModalOpen(false);
  };

  const handleBookAdd = (title: string, author: string, type: BookTypes, pages: number) => {
    const book = processManualData({ title, author, type, pages });
    store.dispatch(addBookStart(book, activeShelfId));
  };

  return (
    <Fragment>
      <nav className="navigation">
        <IconButton onClick={handleOpenBookModal} title="Add Book Manually" accent={true}>
          <AddBookIcon />
        </IconButton>

        <ul className="navigation__links">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navigation__link navigation__link--active' : 'navigation__link'
              }
              to="/"
            >
              <BooksIcon />
              <span>Books</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navigation__link navigation__link--active' : 'navigation__link'
              }
              to="/shelves"
            >
              <ShelvesIcon />
              <span>Shelves</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navigation__link navigation__link--active' : 'navigation__link'
              }
              to="/library"
            >
              <BookcaseIcon />
              <span>Library</span>
            </NavLink>
          </li>
          <li className="navigation__link navigation__about">
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />

      <ModalPortal
        open={isEditModalOpen}
        title="Add New Book to Default Shelf"
        onClose={handleCloseBookModal}
      >
        <AddBookDialogDialog onCancel={handleCloseBookModal} onSubmit={handleBookAdd} />
      </ModalPortal>
    </Fragment>
  );
};

export default Navigation;
