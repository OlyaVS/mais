import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Shelf } from '../../../store/library/libary.types';

import DialogActions from '../dialog-actions/dialog-actions.components';
import { isTextFieldLengthValid } from '../../../utils/library/helper-functions.utils';
import TextInputField from '../../form-fields/text-input-field/text-input-field.component';
import SpeedInputField from '../../form-fields/speed-input-field/speed-input-field.component';

type AddShelfDialogProps = {
  onCancel: () => void;
  onSubmit: (title: string, speed: number) => void;
  updatedShelf?: Shelf;
};

const AddShelfDialog = ({ onCancel, onSubmit, updatedShelf }: AddShelfDialogProps) => {
  const { title, speed } = updatedShelf || { title: '', speed: 1 };
  const [shelfTitle, setShelfTitle] = useState(title);
  const [isValid, setIsValid] = useState(true);
  const [shelfSpeed, setShelfSpeed] = useState(speed);

  useEffect(() => {
    setIsValid(isTextFieldLengthValid(shelfTitle));
  }, [shelfTitle]);

  const handleTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setShelfTitle(value);
  };

  const handleSpeedChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = +evt.target.value;
    setShelfSpeed(value);
  };

  const handleAddShelf = (evt: FormEvent) => {
    evt.preventDefault();
    onSubmit(shelfTitle, shelfSpeed);
    onCancel();
  };

  return (
    <form onSubmit={handleAddShelf}>
      <TextInputField
        label="Title"
        fieldName="Title"
        placeholder="Enter Bookshelf Title"
        handleChange={handleTitleChange}
        value={shelfTitle}
      />
      <SpeedInputField
        label="Number of pages"
        fieldName="speed"
        handleChange={handleSpeedChange}
        value={shelfSpeed}
      />

      <DialogActions onCancel={onCancel} disableAction={!isValid} />
    </form>
  );
};

export default AddShelfDialog;
