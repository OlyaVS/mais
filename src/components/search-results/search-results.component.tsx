import { Fragment } from 'react';

import { BookSearchItem } from '../../store/search/search.types';

import './search-results.styles.scss';
import SearchResultsItem from '../search-results-item/search-results-item.component';

type SearchResultsProps = {
  isOpen: boolean;
  searchResults: BookSearchItem[];
};

const SearchResults = ({ isOpen, searchResults }: SearchResultsProps) => {
  return (
    <Fragment>
      {isOpen && (
        <ul className={isOpen ? 'search__results' : 'visually-hidden'}>
          {searchResults.map((item) => (
            <SearchResultsItem item={item} key={item.id} />
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default SearchResults;
