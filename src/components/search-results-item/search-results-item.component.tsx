import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import { BookSearchItem } from '../../store/search/search.types';
import { addBookStart } from '../../store/library/library.action';
import { selectActiveShelfId } from '../../store/selected/selected.selector';
import { selectLibraryIsAddingBook } from '../../store/library/library.selector';

import IconButton from '../buttons/icon-button/icon-button.component';
import { ReactComponent as AddBookIcon } from '../../assets/icons/add-book.svg';

import './search-results-item.styles.scss';

type SearchResultsItemProps = {
  item: BookSearchItem;
};

const SearchResultsItem = ({ item }: SearchResultsItemProps) => {
  const { id, title, author, image } = item;

  const shelfId = useSelector(selectActiveShelfId);
  const isDisabledAdding = useSelector(selectLibraryIsAddingBook);

  const handleAdd = (book: BookSearchItem) => {
    store.dispatch(addBookStart(book, shelfId));
  };

  return (
    <li className="search__item" key={id}>
      <div className="search__item-image">
        <img src={image} alt={title} />
      </div>
      <span className="search__item-data">
        {title} {author ? `- ${author}` : null}
      </span>
      <IconButton
        onClick={() => {
          handleAdd(item);
        }}
        disabled={isDisabledAdding}
        title="Add book"
        accent={true}
      >
        <AddBookIcon />
      </IconButton>
    </li>
  );
};

export default SearchResultsItem;
