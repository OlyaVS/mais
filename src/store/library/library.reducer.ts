import { createSlice } from '@reduxjs/toolkit';
import { Bookcase } from './libary.types';
import {
  addBookcase,
  deleteBookcase,
  editBookcase,
  addShelf,
  deleteShelf,
  editShelf,
  moveShelf,
  editBook,
  deleteBook,
  moveBook,
  pauseBook,
  startBook,
  setCurrentPage,
  addBookStart,
  addBookSuccess,
  addBookFailure,
} from './library.action';

export type LibraryState = {
  readonly library: Bookcase[];
  readonly isLoading: boolean;
  readonly isAddingBook: boolean;
  readonly error: Error | null;
};

const initialState: LibraryState = {
  library: [],
  isLoading: false,
  isAddingBook: false,
  error: null,
};

const librarySlice = createSlice({
  name: 'library',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBookcase, (state, action) => {
      state.library.push(action.payload);
    });
    builder.addCase(editBookcase, (state, action) => {
      state.library.find((bookcase) => bookcase.id === action.payload.id)!.title =
        action.payload.title;
    });
    builder.addCase(deleteBookcase, (state, action) => {
      const index = state.library.findIndex((bookcase) => bookcase.id === action.payload);
      state.library.splice(index, 1);
    });
    builder.addCase(addShelf, (state, action) => {
      const { shelf, bookcaseId } = action.payload;
      state.library.find((bookcase) => bookcase.id === bookcaseId)!.shelves.push(shelf);
    });
    builder.addCase(editShelf, (state, action) => {
      const { bookcaseId, shelfId, title, speed } = action.payload;

      for (let bookcase of state.library) {
        if (bookcase.id === bookcaseId) {
          let updatedShelf = bookcase.shelves.find((shelf) => shelf.id === shelfId)!;
          Object.assign(updatedShelf, { title, speed });
        }
      }
    });
    builder.addCase(deleteShelf, (state, action) => {
      const { bookcaseId, shelfId } = action.payload;

      for (let bookcase of state.library) {
        if (bookcase.id === bookcaseId) {
          let index = bookcase.shelves.findIndex((shelf) => shelf.id === shelfId)!;
          bookcase.shelves.splice(index, 1);
        }
      }
    });
    builder.addCase(moveShelf, (state, action) => {
      const { sourceBookcaseId, shelfId, targetBookcaseId } = action.payload;
      let shelf;

      for (let bookcase of state.library) {
        if (bookcase.id === sourceBookcaseId) {
          let source = bookcase;
          let index = bookcase.shelves.findIndex((shelf) => shelf.id === shelfId)!;
          shelf = source.shelves.splice(index, 1)[0]!;
          bookcase.books -= shelf.books.length;
          bookcase.pages -= shelf.pages;
          bookcase.pages_read -= bookcase.pages_read;
        }
      }

      for (let bookcase of state.library) {
        if (bookcase.id === targetBookcaseId && shelf) {
          bookcase.shelves.push(shelf);
          bookcase.books += shelf.books.length;
          bookcase.pages += shelf.pages;
          bookcase.pages_read += bookcase.pages_read;
        }
      }
    });
    builder.addCase(addBookStart, (state, action) => {
      state.isAddingBook = true;
    });
    builder.addCase(addBookSuccess, (state, action) => {
      const { book, shelfId } = action.payload;

      for (let bookcase of state.library) {
        for (let shelf of bookcase.shelves) {
          if (shelf.id === shelfId) {
            shelf.books.push(book);
            shelf.pages += book.pages;
            shelf.days_to_complete += Math.round(book.pages / shelf.speed);
            bookcase.books += 1;
            bookcase.pages += book.pages;
            bookcase.days_to_complete += Math.round(book.pages / shelf.speed);
            state.isAddingBook = false;
          }
        }
      }
    });
    builder.addCase(addBookFailure, (state, action) => {
      state.isAddingBook = false;
      state.error = action.payload;
    });
    builder.addCase(startBook, (state, action) => {
      const bookId = action.payload;

      for (let bookcase of state.library) {
        for (let shelf of bookcase.shelves) {
          if (shelf.books.some((book) => book.id === bookId)) {
            shelf.books.find((book) => book.id === bookId)!.status = 'active';
          }
        }
      }
    });
    builder.addCase(pauseBook, (state, action) => {
      const bookId = action.payload;

      for (let bookcase of state.library) {
        for (let shelf of bookcase.shelves) {
          if (shelf.books.some((book) => book.id === bookId)) {
            shelf.books.find((book) => book.id === bookId)!.status = 'paused';
          }
        }
      }
    });
    builder.addCase(editBook, (state, action) => {
      const { bookId, title, author, type, pages } = action.payload;

      for (let bookcase of state.library) {
        for (let shelf of bookcase.shelves) {
          if (shelf.books.some((book) => book.id === bookId)) {
            let updatedBook = shelf.books.find((book) => book.id === bookId)!;
            const pagesDiff = pages - updatedBook.pages;
            Object.assign(updatedBook, { title, author, pages, type });

            let updatedShelf = shelf;
            updatedShelf.pages += pagesDiff;
            updatedShelf.days_to_complete += Math.round(pagesDiff / shelf.speed);

            let updatedBookcase = bookcase;
            updatedBookcase.pages += pagesDiff;
            updatedBookcase.days_to_complete += Math.round(pagesDiff / shelf.speed);
          }
        }
      }
    });
    builder.addCase(moveBook, (state, action) => {
      const { sourceShelfId, bookId, targetShelfId } = action.payload;
      let book;

      for (let bookcase of state.library) {
        if (bookcase.shelves.some((shelf) => shelf.id === sourceShelfId)) {
          let source = bookcase.shelves.find((shelf) => shelf.id === sourceShelfId)!;
          let index = source.books.findIndex((book) => book.id === bookId)!;
          book = source.books.splice(index, 1)[0];
          source.pages -= book.pages;
          source.pages_read -= book.pages_read;
          source.days_to_complete -= Math.round(book.pages / source.speed);

          bookcase.books -= 1;
          bookcase.pages -= book.pages;
          bookcase.pages -= book.pages_read;
          bookcase.days_to_complete -= Math.round(book.pages / source.speed);
        }
      }

      for (let bookcase of state.library) {
        if (bookcase.shelves.some((shelf) => shelf.id === targetShelfId) && book) {
          let target = bookcase.shelves.find((shelf) => shelf.id === targetShelfId)!;
          target.books.push(book);

          target.pages += book.pages;
          target.pages_read += book.pages_read;
          target.days_to_complete += Math.round(book.pages / target.speed);

          bookcase.books += 1;
          bookcase.pages += book.pages;
          bookcase.pages_read += book.pages_read;
          bookcase.days_to_complete += Math.round(book.pages / target.speed);
        }
      }
    });
    builder.addCase(setCurrentPage, (state, action) => {
      const { bookId, currentPage } = action.payload;

      for (let bookcase of state.library) {
        for (let shelf of bookcase.shelves) {
          if (shelf.books.some((book) => book.id === bookId)) {
            const updatedBook = shelf.books.find((book) => book.id === bookId)!;
            const pagesDiff = currentPage - updatedBook.pages_read;

            updatedBook.pages_read = currentPage;
            shelf.pages_read += pagesDiff;
            bookcase.pages_read += pagesDiff;

            if (updatedBook.pages_read === updatedBook.pages) {
              updatedBook.status = 'finished';
            }
          }
        }
      }
    });
    builder.addCase(deleteBook, (state, action) => {
      const bookId = action.payload;

      for (let bookcase of state.library) {
        for (let shelf of bookcase.shelves) {
          if (shelf.books.some((book) => book.id === bookId)) {
            const index = shelf.books.findIndex((book) => book.id === bookId);
            let book = shelf.books.splice(index, 1)[0];

            shelf.pages -= book.pages;
            shelf.pages_read -= book.pages_read;
            shelf.days_to_complete -= Math.round(book.pages / shelf.speed);
            bookcase.books -= 1;
            bookcase.pages -= book.pages;
            bookcase.pages_read -= book.pages_read;
            bookcase.days_to_complete -= Math.round(book.pages / shelf.speed);
          }
        }
      }
    });
    builder.addDefaultCase((state, action) => {
      return state;
    });
  },
});

export default librarySlice;
