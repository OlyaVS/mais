import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { State } from '../store';

const selectSelf = (state: State) => state.search;

// library

export const selectDisplaySearchResults = createDraftSafeSelector(
  selectSelf,
  (state) => state.isSearchResultsListOpen
);

export const selectSearchResults = createDraftSafeSelector(
  selectSelf,
  (state) => state.searchResults
);
