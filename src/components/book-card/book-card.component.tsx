import { Book } from '../../store/library/libary.types';

import BookHeader from '../book-header/book-header.component';
import BookFooter from '../book-footer/book-footer.component';

import './book-card.styles.scss';

type BookProps = {
  book: Book;
};

const BookCard = ({ book }: BookProps) => {
  const { id, title, author, image, pages, pages_read, status } = book;

  return (
    <div className={`book-card book-card--${status}`}>
      <div className="book-card__container">
        <BookHeader book={book} />

        <div className="book-card__info">
          <span className="book-card__title">{title}</span>
          {author && <span className="book-card__author">{author}</span>}
        </div>

        <BookFooter pages={pages} pages_read={pages_read} status={status} id={id} />
      </div>
      <div className="book-card__image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default BookCard;
