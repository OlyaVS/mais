import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import { addBookcase } from '../../store/library/library.action';
import { selectLibrary } from '../../store/library/library.selector';

import BookcaseCard from '../../components/bookcase-card/bookcase-card.component';
import IconButton from '../../components/buttons/icon-button/icon-button.component';
import ModalPortal from '../../components/modals/modal-portal/modal-portal.component';
import AddBookcaseDialog from '../../components/modals/add-bookcase-dialog/add-bookcase-dialog.component';
import { getLibraryData } from '../../utils/library/helper-functions.utils';
import { ReactComponent as AddBookcaseIcon } from '../../assets/icons/add-bookcase.svg';

import './library.styles.scss';

const Library = () => {
  const library = useSelector(selectLibrary);
  //redo
  const libraryData = getLibraryData(library);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (name: string): void => {
    store.dispatch(addBookcase(name));
  };

  return (
    <Fragment>
      <div className="library">
        <header className="library__header">
          <h1>Library</h1>
        </header>

        <div className="library__status">
          <IconButton onClick={openModal} title="Add New Bookcase">
            <AddBookcaseIcon />
          </IconButton>

          {library.length && (
            <div className="library__data">
              <span>In your library: </span>
              <span>
                {libraryData.count} with {libraryData.books} containing {libraryData.pages}
              </span>
              <span>{libraryData.daysToComplete}</span>
            </div>
          )}
        </div>

        {library.length && (
          <ul className="library__cards">
            {library.map((bookcase) => (
              <BookcaseCard bookcase={bookcase} key={bookcase.id} />
            ))}
          </ul>
        )}
      </div>

      <ModalPortal open={isModalOpen} title="Create New Library Bookcase" onClose={closeModal}>
        <AddBookcaseDialog onCancel={handleCancel} onSubmit={handleSubmit} />
      </ModalPortal>
    </Fragment>
  );
};

export default Library;
