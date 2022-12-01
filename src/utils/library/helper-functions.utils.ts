import { MIN_TEXT_FIELD_LENGTH } from '../../constants';
import { Bookcase, BookcaseTitle, ShelfTitle } from '../../store/library/libary.types';

export const isTextFieldLengthValid = (value: string) => {
  return Boolean(value.length >= MIN_TEXT_FIELD_LENGTH);
};

export const getLibraryData = (library: Bookcase[]) => {
  let bookcaseCount = 0;
  let booksCount = 0;
  let pagesCount = 0;
  let daysCount = 0;

  library.forEach((bookcase) => {
    const { books, pages, days_to_complete } = bookcase;
    bookcaseCount += 1;
    if (books) {
      booksCount += books;
      pagesCount += pages;
      daysCount += days_to_complete;
    }
  });

  return {
    count: `${bookcaseCount} ${bookcaseCount === 1 ? 'bookcase' : 'bookcases'}`,
    books: `${booksCount} ${booksCount === 1 ? 'book' : 'books'}`,
    pages: `${pagesCount} ${pagesCount === 1 ? 'page' : 'pages'}`,
    daysToComplete: `Days to complete: ${daysCount}`,
  };
};

export const getBookcasesTitles = (library: Bookcase[]) => {
  const titles: BookcaseTitle[] = [];

  library.map((bookcase) => {
    return titles.push({ title: bookcase.title, id: bookcase.id });
  });

  return titles;
};

export const getShelvesTitles = (library: Bookcase[]) => {
  const titles: ShelfTitle[] = [];

  library.map((bookcase) =>
    bookcase.shelves.map((shelf) =>
      titles.push({
        bookcaseTitle: bookcase.title,
        bookcaseId: bookcase.id,
        id: shelf.id,
        title: shelf.title,
      })
    )
  );

  return titles;
};
