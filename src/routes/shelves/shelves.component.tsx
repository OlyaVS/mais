import { ChangeEvent, Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import { selectBookcase, selectBookcasesTitles } from '../../store/library/library.selector';
import { addShelf } from '../../store/library/library.action';
import { changeBookcase } from '../../store/selected/selected.reducers';
import { selectActiveBookcaseId } from '../../store/selected/selected.selector';

import Select from '../../components/select/select.component';
import ShelfCard from '../../components/shelf-card/shelf-card.component';
import IconButton from '../../components/buttons/icon-button/icon-button.component';
import ModalPortal from '../../components/modals/modal-portal/modal-portal.component';
import AddShelfDialog from '../../components/modals/add-shelf-dialog/add-shelf-dialog.component';
import { ReactComponent as AddShelfIcon } from '../../assets/icons/add-shelf.svg';

import './shelves.styles.scss';

const Shelves = () => {
  const activeBookcaseId = useSelector(selectActiveBookcaseId);
  const bookcaseTitles = useSelector(selectBookcasesTitles);
  const [bookcaseId, setBookcaseId] = useState(activeBookcaseId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedBookcase = useSelector(selectBookcase(bookcaseId))!;
  const { title, shelves, books, pages, days_to_complete } = selectedBookcase;
  const shelvesCount = shelves.length;

  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setBookcaseId(evt.currentTarget.value);
    store.dispatch(changeBookcase(evt.currentTarget.value));
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

  const handleSubmit = (title: string, speed: number) => {
    store.dispatch(addShelf(title, speed, bookcaseId));
  };

  return (
    <Fragment>
      <div className="shelves">
        <header className="shelves__header">
          <h1>{title} Bookcase</h1>
        </header>

        <div className="shelves__status">
          <div className="shelves__actions">
            <Select
              label="Select Bookcase"
              items={bookcaseTitles}
              onChange={handleChange}
              selectedId={bookcaseId}
            />
            <IconButton onClick={openModal} title="Add new shelf">
              <AddShelfIcon />
            </IconButton>
          </div>

          <div className="shelves__data">
            <span>
              {shelvesCount}
              {shelvesCount === 1 ? ' shelf ' : ' shelves '}
              with {books}
              {books === 1 ? ' book ' : ' books '}
              containing {pages} pages
            </span>
            <span>Days to complete: {days_to_complete} </span>
          </div>
        </div>

        <ul className="shelves__cards">
          {shelves?.length && shelves.map((shelf) => <ShelfCard shelf={shelf} key={shelf.id} />)}
        </ul>
      </div>

      <ModalPortal open={isModalOpen} title={`Add shelf to ${title} bookcase`} onClose={closeModal}>
        <AddShelfDialog onCancel={handleCancel} onSubmit={handleSubmit} />
      </ModalPortal>
    </Fragment>
  );
};

export default Shelves;
