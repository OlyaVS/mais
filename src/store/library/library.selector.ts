import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { State } from '../store';
import { Shelf } from './libary.types';
import { getBookcasesTitles, getShelvesTitles } from '../../utils/library/helper-functions.utils';

const selectSelf = (state: State) => state.library;

// library

export const selectLibraryIsLoading = createDraftSafeSelector(
  selectSelf,
  (state) => state.isLoading
);

export const selectLibraryIsAddingBook = createDraftSafeSelector(
  selectSelf,
  (state) => state.isAddingBook
);

export const selectLibrary = createDraftSafeSelector(selectSelf, (state) => state.library);

export const selectBookcasesTitles = createDraftSafeSelector(selectLibrary, (library) =>
  getBookcasesTitles(library)
);

export const selectBookcase = (id: string) =>
  createDraftSafeSelector(
    selectLibrary,
    (library) => library.find((bookcase) => bookcase.id === id)!
  );

export const selectBookcaseIdByShelfId = (id: string) =>
  createDraftSafeSelector(
    selectLibrary,
    (library) =>
      library.find((bookcase) => bookcase.shelves.some((shelf: Shelf) => shelf.id === id))!.id
  );

// shelves

export const selectShelves = createDraftSafeSelector(selectLibrary, (library) => {
  const shelves = [] as Shelf[];
  library.map((bookcase) => shelves.push(...bookcase.shelves));
  return shelves;
});

export const selectBookcaseShelves = (bookcaseId: string) =>
  createDraftSafeSelector(selectBookcase(bookcaseId), (bookcase) => bookcase.shelves);

export const selectShelvesTitles = createDraftSafeSelector(selectLibrary, (library) =>
  getShelvesTitles(library)
);

export const selectShelf = (shelfId: string) =>
  createDraftSafeSelector(selectShelves, (shelves) =>
    shelves.find((shelf: Shelf) => shelf.id === shelfId)
  );

export const selectBooks = (shelfId: string) =>
  createDraftSafeSelector(selectShelf(shelfId), (shelf) => shelf!.books);
