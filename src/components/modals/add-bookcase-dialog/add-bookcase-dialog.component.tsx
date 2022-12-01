import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Bookcase } from '../../../store/library/libary.types';

import DialogActions from '../dialog-actions/dialog-actions.components';
import TextInputField from '../../form-fields/text-input-field/text-input-field.component';
import { isTextFieldLengthValid } from '../../../utils/library/helper-functions.utils';

type AddBookcaseDialogProps = {
  onCancel: () => void;
  onSubmit: (title: string) => void;
  updatedBookcase?: Bookcase;
};

const AddBookcaseDialog = ({ onCancel, onSubmit, updatedBookcase }: AddBookcaseDialogProps) => {
  const { title: bookcaseTitle } = updatedBookcase || { title: '' };
  const [title, setTitle] = useState(bookcaseTitle);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(isTextFieldLengthValid(title));
  }, [title]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setTitle(value);
  };

  const handleAddBookcase = (evt: FormEvent) => {
    evt.preventDefault();
    onSubmit(title);
    onCancel();
  };

  return (
    <form onSubmit={handleAddBookcase}>
      <TextInputField
        label="Title"
        fieldName="Title"
        placeholder="Enter Bookcase Title"
        handleChange={handleChange}
        value={title}
      />
      <DialogActions onCancel={onCancel} disableAction={!isValid} />
    </form>
  );
};

export default AddBookcaseDialog;
