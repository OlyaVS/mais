import { Fragment, useState } from 'react';
import { store } from '../../store/store';
import { BookStatus } from '../../store/library/libary.types';
import { setCurrentPage } from '../../store/library/library.action';

import ModalPortal from '../modals/modal-portal/modal-portal.component';
import SetCurrentPageDialog from '../modals/set-current-page-dialog/set-current-page-dialog.component';
import IconButton from '../buttons/icon-button/icon-button.component';
import { ReactComponent as UpdateIcon } from '../../assets/icons/update-page.svg';

import './book-footer.styles.scss';

type BookFooterProps = {
  pages: number;
  pages_read: number;
  status: BookStatus;
  id: string;
};

const BookFooter = ({ pages, pages_read, status, id }: BookFooterProps) => {
  const [isPageModalOpen, setIsPageModalOpen] = useState(false);
  const pagesWording = status === 'new' ? 'pages' : 'pages left';

  const openPageModal = () => {
    setIsPageModalOpen(true);
  };

  const closePageModal = () => {
    setIsPageModalOpen(false);
  };

  const handlePageUpdate = (page: number) => {
    store.dispatch(setCurrentPage(id, page));
  };
  return (
    <Fragment>
      <div className={`book-footer book-footer--${status}`}>
        <span className="book-footer__pages">
          {pages - pages_read} {pagesWording}
        </span>
        {status === 'active' ? (
          <IconButton onClick={openPageModal} title="Update current book page">
            <UpdateIcon />
          </IconButton>
        ) : null}
        {status !== 'active' ? <span className="book-footer__status">{status}</span> : null}
      </div>

      <ModalPortal open={isPageModalOpen} title="Set current page number" onClose={closePageModal}>
        <SetCurrentPageDialog
          onCancel={closePageModal}
          onSubmit={handlePageUpdate}
          page={pages_read}
          pagesCount={pages}
        />
      </ModalPortal>
    </Fragment>
  );
};

export default BookFooter;
