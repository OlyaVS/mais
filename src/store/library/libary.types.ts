import { BookSearchItem } from '../search/search.types';

export enum LIBRARY_ACTION_TYPES {
  BOOKCASE_ADD = 'bookcase/BOOKCASE_ADD',
  BOOKCASE_EDIT = 'bookcase/BOOKCASE_EDIT',
  BOOKCASE_DELETE = 'bookcase/BOOKCASE_DELETE',
  SHELF_ADD = 'shelf/SHELF_ADD',
  SHELF_EDIT = 'shelf/SHELF_EDIT',
  SHELF_MOVE = 'shelf/SHELF_MOVE',
  SHELF_DELETE = 'shelf/SHELF_DELETE',
  BOOK_ADD_START = 'book/BOOK_ADD_START',
  BOOK_ADD_SUCCESS = 'book/BOOK_ADD_SUCCESS',
  BOOK_ADD_FAILED = 'book/BOOK_ADD_FAILED',
  BOOK_START = 'book/BOOK_START',
  BOOK_PAUSE = 'book/BOOK_PAUSE',
  BOOK_EDIT = 'book/BOOK_EDIT',
  BOOK_MOVE = 'book/BOOK_MOVE',
  BOOK_SET_PAGE = 'book/BOOK_SET_PAGE',
  BOOK_DELETE = 'book/DELETE',
}

export type BookTypes = 'paper' | 'ebook';
export type BookStatus = 'new' | 'active' | 'paused' | 'finished';

export type BookManualItem = BookSearchItem & {
  type: BookTypes;
};

export type Book = BookSearchItem & {
  type: BookTypes;
  status: BookStatus;
  pages_read: number;
};

export type Shelf = {
  id: string;
  title: string;
  pages: number;
  favourite: boolean;
  start_date: null | Date;
  end_date: null | Date;
  speed: number;
  days_to_complete: number;
  pages_read: number;
  books: Book[];
};

export type Bookcase = {
  id: string;
  title: string;
  favourite: boolean;
  books: number;
  pages: number;
  pages_read: number;
  days_to_complete: number;
  shelves: Shelf[];
};

export type BookcaseTitle = {
  id: Bookcase['id'];
  title: Bookcase['title'];
};

export type ShelfTitle = {
  bookcaseId: BookcaseTitle['id'];
  bookcaseTitle: BookcaseTitle['title'];
  id: Shelf['id'];
  title: Shelf['title'];
};
