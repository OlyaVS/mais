export enum SELECTED_ACTION_TYPES {
  CHANGE_SHELF = 'selected/CHANGE_SHELF',
  CHANGE_BOOKCASE = 'selected/CHANGE_BOOKCASE',
  SET_FAVOURITE_SHELF = 'selected/SET_FAVOURITE_SHELF',
}

export type Selected = {
  bookcaseId: string;
  shelfId: string;
  favouriteBookcaseId: string;
  favouriteShelfId: string;
};
