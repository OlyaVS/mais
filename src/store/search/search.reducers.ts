import { createSlice } from '@reduxjs/toolkit';
import { BookSearchItem } from './search.types';
import { searchFailure, searchStart, searchSuccess, toggleSearchResultList } from './search.action';

export type SearchState = {
  readonly searchResults: BookSearchItem[];
  readonly isLoading: boolean;
  readonly isSearchResultsListOpen: boolean;
  readonly error: Error | null;
};

const initialState: SearchState = {
  searchResults: [] as BookSearchItem[],
  isLoading: false,
  isSearchResultsListOpen: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchStart, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchSuccess, (state, action) => {
      state.isLoading = false;
      state.searchResults = action.payload;
      state.isSearchResultsListOpen = true;
    });
    builder.addCase(searchFailure, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(toggleSearchResultList, (state, action) => {
      const displayResults = action.payload;
      state.isSearchResultsListOpen = displayResults;

      if (!displayResults) {
        state.searchResults.length = 0;
      }
    });
    builder.addDefaultCase((state, action) => {
      return state;
    });
  },
});

export default searchSlice;
