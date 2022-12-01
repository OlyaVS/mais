import { takeLatest, all, call, put } from 'typed-redux-saga/macro';

import { SEARCH_ACTION_TYPES } from './search.types';
import { searchFailure, searchStart, searchSuccess } from './search.action';
import { getBooksData, processSearchData } from '../../utils/search/search.utils';

export function* searchBooksAsync({ payload }: ReturnType<typeof searchStart>) {
  try {
    const searchResultsArray = yield* call(getBooksData, payload);
    const processedData = yield* call(processSearchData, searchResultsArray);
    yield* put(searchSuccess(processedData));
  } catch (error) {
    yield* put(searchFailure(error as Error));
  }
}

export function* onSearchBooks() {
  yield* takeLatest(SEARCH_ACTION_TYPES.SEARCH_START, searchBooksAsync);
}

export function* searchSagas() {
  yield* all([call(onSearchBooks)]);
}
