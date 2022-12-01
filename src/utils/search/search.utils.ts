import { nanoid } from '@reduxjs/toolkit';
import { BookSearchItem } from '../../store/search/search.types';
import { GOOGLE_BOOKS_API_KEY } from '../../constants';
import imagePlaceholder from '../../assets/pictures/books.jpg';
import { BookManualItem, BookTypes } from '../../store/library/libary.types';

type SearchResultsProps = {
  etag: string;
  volumeInfo: {
    authors?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
    pageCount: number;
    subtitle?: string;
    title: string;
  };
};

export const getBooksData = async (queryString: string): Promise<SearchResultsProps[]> => {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${queryString}&key=${GOOGLE_BOOKS_API_KEY}&maxResults=40`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const processSearchData = (searchResults: SearchResultsProps[]): BookSearchItem[] => {
  const rawData = searchResults.slice();
  const processedData = [] as BookSearchItem[];

  rawData.forEach((item) => {
    const { authors, imageLinks, pageCount, title, subtitle } = item.volumeInfo;

    if (!pageCount || !title) {
      return;
    }

    processedData.push({
      id: item.etag,
      title: subtitle ? `${title}: ${subtitle}` : title,
      author: authors?.join(', ') || '',
      pages: pageCount,
      image: imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : '',
    });
  });

  return processedData;
};

type ManualDataProps = {
  title: string;
  author: string;
  type: BookTypes;
  pages: number;
  image?: string;
};

export const processManualData = ({
  title,
  author,
  type,
  pages,
  image,
}: ManualDataProps): BookManualItem => {
  const imageLink = image ? image : imagePlaceholder;
  return {
    id: nanoid(),
    title,
    author,
    pages,
    type,
    image: imageLink,
  };
};
