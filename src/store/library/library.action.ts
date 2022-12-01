import { createAction, nanoid } from '@reduxjs/toolkit';
import { Book, BookStatus, BookTypes, LIBRARY_ACTION_TYPES, Shelf } from './libary.types';

export const addBookcase = createAction(
  LIBRARY_ACTION_TYPES.BOOKCASE_ADD,
  function prepare(name: string) {
    return {
      payload: {
        title: name,
        id: nanoid(),
        favourite: false,
        books: 0,
        pages: 0,
        pages_read: 0,
        days_to_complete: 0,
        shelves: [] as Shelf[],
      },
    };
  }
);

export const editBookcase = createAction(
  LIBRARY_ACTION_TYPES.BOOKCASE_EDIT,
  function prepare(id: string, title: string) {
    return {
      payload: {
        id,
        title,
      },
    };
  }
);

export const deleteBookcase = createAction(
  LIBRARY_ACTION_TYPES.BOOKCASE_DELETE,
  function prepare(id: string) {
    return {
      payload: id,
    };
  }
);

export const addShelf = createAction(
  LIBRARY_ACTION_TYPES.SHELF_ADD,
  function prepare(title: string, speed: number, bookcaseId: string) {
    return {
      payload: {
        bookcaseId,
        shelf: {
          title,
          id: nanoid(),
          pages: 0,
          favourite: false,
          start_date: null,
          end_date: null,
          speed: speed,
          days_to_complete: 0,
          pages_read: 0,
          books: [] as Book[],
        },
      },
    };
  }
);

export const editShelf = createAction(
  LIBRARY_ACTION_TYPES.SHELF_EDIT,
  function prepare(bookcaseId: string, shelfId: string, title: string, speed: number) {
    return {
      payload: {
        bookcaseId,
        shelfId,
        title,
        speed,
      },
    };
  }
);

export const moveShelf = createAction(
  LIBRARY_ACTION_TYPES.SHELF_MOVE,
  function prepare(sourceBookcaseId: string, shelfId: string, targetBookcaseId: string) {
    return {
      payload: {
        sourceBookcaseId,
        shelfId,
        targetBookcaseId,
      },
    };
  }
);

export const deleteShelf = createAction(
  LIBRARY_ACTION_TYPES.SHELF_DELETE,
  function prepare(bookcaseId: string, shelfId: string) {
    return {
      payload: {
        bookcaseId,
        shelfId,
      },
    };
  }
);

export const addBookStart = createAction(
  LIBRARY_ACTION_TYPES.BOOK_ADD_START,
  function prepare(book, shelfId) {
    return {
      payload: {
        book,
        shelfId,
      },
    };
  }
);

export const addBookSuccess = createAction(
  LIBRARY_ACTION_TYPES.BOOK_ADD_SUCCESS,
  function prepare(book, shelfId) {
    const { title, author, pages, image, type } = book;

    return {
      payload: {
        shelfId,
        book: {
          id: nanoid(),
          title,
          author,
          pages,
          image,
          type: type ? type : ('ebook' as BookTypes),
          status: 'new' as BookStatus,
          pages_read: 0,
        },
      },
    };
  }
);

export const addBookFailure = createAction(
  LIBRARY_ACTION_TYPES.BOOK_ADD_FAILED,
  function prepare(error: Error) {
    return { payload: error };
  }
);

export const startBook = createAction(
  LIBRARY_ACTION_TYPES.BOOK_START,
  function prepare(bookId: string) {
    return { payload: bookId };
  }
);

export const setCurrentPage = createAction(
  LIBRARY_ACTION_TYPES.BOOK_SET_PAGE,
  function prepare(bookId: string, currentPage: number) {
    return { payload: { bookId, currentPage } };
  }
);

export const pauseBook = createAction(
  LIBRARY_ACTION_TYPES.BOOK_PAUSE,
  function prepare(bookId: string) {
    return { payload: bookId };
  }
);

export const editBook = createAction(
  LIBRARY_ACTION_TYPES.BOOK_EDIT,
  function prepare(bookId: string, title: string, author: string, type: string, pages: number) {
    return { payload: { bookId, title, author, type, pages } };
  }
);

export const moveBook = createAction(
  LIBRARY_ACTION_TYPES.BOOK_MOVE,
  function prepare(sourceShelfId: string, bookId: string, targetShelfId: string) {
    return {
      payload: {
        sourceShelfId,
        bookId,
        targetShelfId,
      },
    };
  }
);

export const deleteBook = createAction(
  LIBRARY_ACTION_TYPES.BOOK_DELETE,
  function prepare(bookId: string) {
    return { payload: bookId };
  }
);
