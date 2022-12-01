import { createAction } from '@reduxjs/toolkit';
import { BookSearchItem, SEARCH_ACTION_TYPES } from './search.types';

export const searchStart = createAction(
  SEARCH_ACTION_TYPES.SEARCH_START,
  function prepare(searchQuery) {
    return { payload: searchQuery };
  }
);

export const searchSuccess = createAction(
  SEARCH_ACTION_TYPES.SEARCH_SUCCESS,
  function prepare(searchResults: BookSearchItem[]) {
    return { payload: searchResults };
  }
);

export const searchFailure = createAction(
  SEARCH_ACTION_TYPES.SEARCH_FAILURE,
  function prepare(error: Error) {
    return { payload: error };
  }
);

export const toggleSearchResultList = createAction(
  SEARCH_ACTION_TYPES.TOGGLE_SEARCH_RESULT_LIST,
  function prepare(isSearchResultsListOpen: boolean) {
    return {
      payload: isSearchResultsListOpen,
    };
  }
);
