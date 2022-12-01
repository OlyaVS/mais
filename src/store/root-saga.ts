import { all, call } from 'typed-redux-saga/macro';
import { librarySaga } from './library/library.sagas';
import { searchSagas } from './search/search.sagas';

export function* rootSaga() {
  yield* all([call(librarySaga), call(searchSagas)]);
}
