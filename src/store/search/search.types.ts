export enum SEARCH_ACTION_TYPES {
  SEARCH_START = 'search/SEARCH_START',
  SEARCH_SUCCESS = 'search/SEARCH_SUCCESS',
  SEARCH_FAILURE = 'search/SEARCH_FAILURE',
  TOGGLE_SEARCH_RESULT_LIST = 'search/TOGGLE_SEARCH_RESULT_LIST',
}

export type BookSearchItem = {
  id: string;
  title: string;
  author: string;
  pages: number;
  image: string;
};
