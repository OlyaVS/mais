import { Store } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import librarySlice, { LibraryState } from './library/library.reducer';
import { Selected } from './selected/selected.types';
import selectedSlice from './selected/selected.reducers';
import { DEFAULT_BOOKCASE_ID, DEFAULT_SHELF_ID } from '../constants';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import searchSlice, { SearchState } from './search/search.reducers';
import { BookSearchItem } from './search/search.types';
import { LIBRARY_DATA } from '../books-data';

export type State = {
  library: LibraryState;
  selected: Selected;
  search: SearchState;
};

const reducers = combineReducers({
  library: librarySlice.reducer,
  selected: selectedSlice.reducer,
  search: searchSlice.reducer,
});

const preloadedState: State = {
  library: {
    library: LIBRARY_DATA,
    isLoading: false,
    isAddingBook: false,
    error: null,
  },
  selected: {
    shelfId: '04b679ee-c6e9-4a58-8de6-0b4cb83bff81',
    bookcaseId: 'd65402d0-9672-4dc4-9988-72cdc7d9626e',
    favouriteShelfId: '04b679ee-c6e9-4a58-8de6-0b4cb83bff81',
    favouriteBookcaseId: 'd65402d0-9672-4dc4-9988-72cdc7d9626e',
  },
  search: {
    searchResults: [] as BookSearchItem[],
    isLoading: false,
    isSearchResultsListOpen: false,
    error: null,
  },
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['library', 'selected'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();

export const store: Store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: false,
    }).prepend(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
