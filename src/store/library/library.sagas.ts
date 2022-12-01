import { takeLatest, all, call, put } from 'typed-redux-saga/macro';
import { LIBRARY_ACTION_TYPES } from './libary.types';
import { addBookFailure, addBookStart, addBookSuccess } from './library.action';

export function* addBookAsync({ payload }: ReturnType<typeof addBookStart>) {
  try {
    yield* put(addBookSuccess(payload.book, payload.shelfId));
  } catch (error) {
    yield* put(addBookFailure(error as Error));
  }
}

export function* onAddBookFromSearch() {
  yield* takeLatest(LIBRARY_ACTION_TYPES.BOOK_ADD_START, addBookAsync);
}

export function* librarySaga() {
  yield* all([call(onAddBookFromSearch)]);
}
