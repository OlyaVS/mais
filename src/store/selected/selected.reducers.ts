import { createAction, createSlice } from '@reduxjs/toolkit';
import { Selected, SELECTED_ACTION_TYPES } from './selected.types';

const initialState: Selected = {
  shelfId: '04b679ee-c6e9-4a58-8de6-0b4cb83bff81',
  bookcaseId: 'd65402d0-9672-4dc4-9988-72cdc7d9626e',
  favouriteShelfId: '04b679ee-c6e9-4a58-8de6-0b4cb83bff81',
  favouriteBookcaseId: 'd65402d0-9672-4dc4-9988-72cdc7d9626e',
};

export const changeShelf = createAction(
  SELECTED_ACTION_TYPES.CHANGE_SHELF,
  function prepare(shelfId: string, selectedBookcaseId: string) {
    return {
      payload: {
        shelfId,
        selectedBookcaseId,
      },
    };
  }
);

export const setFavouriteShelf = createAction(
  SELECTED_ACTION_TYPES.SET_FAVOURITE_SHELF,
  function prepare(shelfId: string, selectedBookcaseId: string) {
    return {
      payload: {
        shelfId,
        selectedBookcaseId,
      },
    };
  }
);

export const changeBookcase = createAction(
  SELECTED_ACTION_TYPES.CHANGE_BOOKCASE,
  function prepare(selectedBookcaseId: string) {
    return {
      payload: {
        selectedBookcaseId,
      },
    };
  }
);

const selectedSlice = createSlice({
  name: 'selected',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changeShelf, (state, action) => {
      const { shelfId, selectedBookcaseId } = action.payload;
      state.shelfId = shelfId;
      state.bookcaseId = selectedBookcaseId;
    });
    builder.addCase(setFavouriteShelf, (state, action) => {
      const { shelfId, selectedBookcaseId } = action.payload;
      state.favouriteShelfId = shelfId;
      state.favouriteBookcaseId = selectedBookcaseId;
    });
    builder.addCase(changeBookcase, (state, action) => {
      const { selectedBookcaseId } = action.payload;
      state.shelfId = '';
      state.bookcaseId = selectedBookcaseId;
    });
    builder.addDefaultCase((state, action) => {});
  },
});

export default selectedSlice;
