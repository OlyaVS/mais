import { State } from '../store';
import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { DEFAULT_SHELF_ID } from '../../constants';

const selectSelf = (state: State) => state.selected;

export const selectActiveShelfId = createDraftSafeSelector(selectSelf, (state) =>
  state.shelfId ? state.shelfId : DEFAULT_SHELF_ID
);

export const selectFavouriteShelfId = createDraftSafeSelector(selectSelf, (state) =>
  state.favouriteShelfId ? state.favouriteShelfId : DEFAULT_SHELF_ID
);

export const selectActiveBookcaseId = createDraftSafeSelector(
  selectSelf,
  (state) => state.bookcaseId
);
