import { ChangeEvent, FormEvent, useState } from 'react';
import { Book, BookTypes } from '../../../store/library/libary.types';

import DialogActions from '../dialog-actions/dialog-actions.components';
import PageInputField from '../../form-fields/page-input-fied/page-input-field.component';
import TextInputField from '../../form-fields/text-input-field/text-input-field.component';

import './add-book-dialog.styles.scss';

type AddBookDialogProps = {
  book?: Book;
  onCancel: () => void;
  onSubmit: (bookTitle: string, bookAuthor: string, bookType: BookTypes, pageCount: number) => void;
};

const AddBookDialogDialog = ({ onCancel, onSubmit, book }: AddBookDialogProps) => {
  const { title, author, pages, type } = book || { title: '', author: '', pages: 0, type: 'ebook' };
  const [pageCount, setPageCount] = useState(pages);
  const [bookTitle, setBookTitle] = useState(title);
  const [bookAuthor, setBookAuthor] = useState(author);
  const [bookType, setBookType] = useState<BookTypes>(type);

  const handleTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setBookTitle(value);
  };

  const handleAuthorChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setBookAuthor(value);
  };

  const handlePageChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = +evt.target.value;
    setPageCount(value);
  };

  const handleTypeChange = (evt: React.MouseEvent) => {
    const element = evt.target as HTMLInputElement;
    const value = element.value;
    setBookType(value as BookTypes);
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    onSubmit(bookTitle, bookAuthor, bookType, pageCount);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInputField
        label="Book Title"
        fieldName="Book Title"
        placeholder="Enter Book Title"
        handleChange={handleTitleChange}
        value={bookTitle}
      />
      <TextInputField
        label="Book Author"
        fieldName="Book Author"
        placeholder="Enter Book Author"
        handleChange={handleAuthorChange}
        value={bookAuthor}
      />
      <PageInputField
        label="Pages in the book"
        fieldName="Total pages"
        handleChange={handlePageChange}
        totalPage={pageCount}
        helperText="Enter number of pages in the book"
      />

      <div className="radio">
        <legend className="radio__label">Select book type</legend>
        <div>
          <input
            type="radio"
            id="ebook"
            name="book_type"
            value="ebook"
            defaultChecked={type === 'ebook'}
            onClick={handleTypeChange}
          />
          <label htmlFor="ebook">Ebook</label>
        </div>

        <div>
          <input
            type="radio"
            id="paper"
            name="book_type"
            value="paper"
            defaultChecked={type === 'paper'}
            onClick={handleTypeChange}
          />
          <label htmlFor="paper">Paper Book</label>
        </div>
      </div>

      <div className="file">
        <legend className="file__label">Choose picture to upload</legend>
        <label htmlFor="file" className="visually-hidden">
          Choose picture to upload
        </label>
        <input name="picture" type="file" accept=".png, .jpg, .jpeg, .svg" disabled />
      </div>

      <DialogActions onCancel={onCancel} />
    </form>
  );
};

export default AddBookDialogDialog;
