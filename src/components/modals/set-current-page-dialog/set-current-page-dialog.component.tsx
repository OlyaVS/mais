import { ChangeEvent, FormEvent, useState } from 'react';

import DialogActions from '../dialog-actions/dialog-actions.components';
import PageInputField from '../../form-fields/page-input-fied/page-input-field.component';

type SetCurrentPageDialogProps = {
  page: number;
  pagesCount: number;
  onCancel: () => void;
  onSubmit: (page: number) => void;
};

const SetCurrentPageDialog = ({
  onCancel,
  onSubmit,
  page,
  pagesCount,
}: SetCurrentPageDialogProps) => {
  const [currentPage, setCurrentPage] = useState(page);

  const handlePageNumberChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = +evt.target.value;
    setCurrentPage(value);
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    onSubmit(currentPage);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <PageInputField
        label="Page Number"
        fieldName="Current Page Number"
        handleChange={handlePageNumberChange}
        currentPage={currentPage}
        maxPageCount={pagesCount}
        helperText="Enter page number your are currently at"
      />

      <DialogActions onCancel={onCancel} disableAction={page === currentPage} />
    </form>
  );
};

export default SetCurrentPageDialog;
