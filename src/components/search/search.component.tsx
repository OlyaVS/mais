import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../store/store';
import {
  selectDisplaySearchResults,
  selectSearchResults,
} from '../../store/search/search.selectors';
import { searchStart, toggleSearchResultList } from '../../store/search/search.action';
import SearchResults from '../search-results/search-results.component';

import './search.styles.scss';

const SearchBook = () => {
  const ref = useRef(null);
  const isOpen = useSelector(selectDisplaySearchResults);
  const searchResults = useSelector(selectSearchResults);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery.length === 0) {
      store.dispatch(toggleSearchResultList(false));
    }
  }, [searchQuery.length]);

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      const element = ref.current;
      // @ts-ignore
      if (element?.contains(evt.target)) {
        return;
      }

      store.dispatch(toggleSearchResultList(false));
      setSearchQuery('');
    };

    const handleEscapeClick = (evt: KeyboardEvent) => {
      if (evt.key !== 'Escape') {
        return;
      }
      store.dispatch(toggleSearchResultList(false));
      setSearchQuery('');
    };

    document.addEventListener('keydown', handleEscapeClick);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.addEventListener('keydown', handleEscapeClick);
    };
  }, [ref]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setSearchQuery(value);
  };

  const handleSearch = async (evt: FormEvent) => {
    evt.preventDefault();
    try {
      store.dispatch(searchStart(searchQuery));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setSearchQuery('');
    store.dispatch(toggleSearchResultList(false));
  };

  return (
    <div
      className={isOpen ? 'search__container search__container--active' : 'search__container'}
      ref={ref}
    >
      <form
        className={isOpen ? 'search__form search__form--active' : 'search__form'}
        onSubmit={handleSearch}
      >
        <label htmlFor="search" className="visually-hidden">
          Book Search
        </label>
        <input
          className={isOpen ? 'search__field search__field--active' : 'search__field'}
          type="search"
          id="search"
          name="search"
          placeholder="Search book"
          value={searchQuery}
          onChange={handleChange}
          minLength={2}
          required
        />
        {isOpen && (
          <button className="search__cancel" type="button" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </form>

      <SearchResults isOpen={isOpen} searchResults={searchResults} />
    </div>
  );
};

export default SearchBook;
