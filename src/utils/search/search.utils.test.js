import { getBooksData, processManualData, processSearchData } from './search.utils';

const rawSearchDataMock = [
  {
    kind: 'books#volume',
    id: 'Y_R5zQEACAAJ',
    etag: 'rTWZoFXGpJI',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/Y_R5zQEACAAJ',
    volumeInfo: {
      title: "You Don't Know JS Yet",
      subtitle: 'Scope & Closures',
      authors: ['Kyle Simpson'],
      publishedDate: '2020-03-03',
      description:
        'Are you looking for a better way to deeply learn the fundamentals of JavaScript? Look no further!The foundation of all programs is the organization of its variables and functions into different nested scopes. Yet, most developers haven\'t deeply contemplated how and why these decisions are made and the impacts on code maintainability.The worldwide best selling "You Don\'t Know JS" book series is back for a 2nd edition: "You Don\'t Know JS Yet". All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond."Scope & Closures" examines all aspects of lexical scope, then builds on these principles to leverage the power of closure, and finally digs into the module pattern for better program structure.',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9798621536459',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 279,
      printType: 'BOOK',
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=Y_R5zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=Y_R5zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.ru/books?id=Y_R5zQEACAAJ&dq=you+don%27t+know+js&hl=&cd=3&source=gbs_api',
      infoLink:
        'http://books.google.ru/books?id=Y_R5zQEACAAJ&dq=you+don%27t+know+js&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/You_Don_t_Know_JS_Yet.html?hl=&id=Y_R5zQEACAAJ',
    },
    saleInfo: {
      country: 'RU',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'RU',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: 'http://play.google.com/books/reader?id=Y_R5zQEACAAJ&hl=&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'Scope &amp; Closures, the second book in the new edition series, dives deep into how and why to organize variables into different buckets of scope, limiting scope over-exposure and improving code maintainability.',
    },
  },
  {
    kind: 'books#volume',
    id: 'ir_ZoAEACAAJ',
    etag: 'I4gH7pXPesk',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/ir_ZoAEACAAJ',
    volumeInfo: {
      title: "You Don't Know JS: Async and Performance",
      authors: ['Kyle Simpson'],
      publisher: 'Oreilly & Associates Incorporated',
      publishedDate: '2015-03-09',
      description:
        'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the "You Don’t Know JS" series, this concise yet in-depth guide focuses on new asynchronous features and performance techniques—including Promises, generators, and Web Workers—that let you create sophisticated single-page web applications and escape callback hell in the process. Like other books in this series, You Don’t Know JS: Async & Performance dives into trickier parts of the language that many JavaScript programmers simply avoid. Armed with this knowledge, you can become a true JavaScript master. With this book you will: Explore old and new JavaScript methods for handling asynchronous programming Understand how callbacks let third parties control your program’s execution Address the "inversion of control" issue with JavaScript Promises Use generators to express async flow in a sequential, synchronous-looking fashion Tackle program-level performance with Web Workers, SIMD, and asm.js Learn valuable resources and techniques for benchmarking and tuning your expressions and statements',
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '1491904224',
        },
        {
          type: 'ISBN_13',
          identifier: '9781491904220',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 296,
      printType: 'BOOK',
      categories: ['Computers'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=ir_ZoAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=ir_ZoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.ru/books?id=ir_ZoAEACAAJ&dq=you+don%27t+know+js&hl=&cd=5&source=gbs_api',
      infoLink:
        'http://books.google.ru/books?id=ir_ZoAEACAAJ&dq=you+don%27t+know+js&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/You_Don_t_Know_JS_Async_and_Performance.html?hl=&id=ir_ZoAEACAAJ',
    },
    saleInfo: {
      country: 'RU',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'RU',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: 'http://play.google.com/books/reader?id=ir_ZoAEACAAJ&hl=&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'This book focuses on the new asynchronous features in JavaScript, which are new and confusing to developers.',
    },
  },
  {
    kind: 'books#volume',
    id: 'iOc6CwAAQBAJ',
    etag: '28afDegDDgA',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/iOc6CwAAQBAJ',
    volumeInfo: {
      title: "You Don't Know JS: ES6 & Beyond",
      authors: ['Kyle Simpson'],
      publisher: '"O\'Reilly Media, Inc."',
      publishedDate: '2015-12-17',
      description:
        'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the "You Don’t Know JS" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built. Like other books in this series, You Don’t Know JS: ES6 & Beyond dives into trickier parts of the language that many JavaScript programmers either avoid or know nothing about. Armed with this knowledge, you can achieve true JavaScript mastery. With this book, you will: Learn new ES6 syntax that eases the pain points of common programming idioms Organize code with iterators, generators, modules, and classes Express async flow control with Promises combined with generators Use collections to work more efficiently with data in structured ways Leverage new API helpers, including Array, Object, Math, Number, and String Extend your program’s capabilities through meta programming Preview features likely coming to JS beyond ES6',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9781491905258',
        },
        {
          type: 'ISBN_10',
          identifier: '1491905255',
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 334,
      printType: 'BOOK',
      categories: ['Computers'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.3.3.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=iOc6CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=iOc6CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.ru/books?id=iOc6CwAAQBAJ&printsec=frontcover&dq=you+don%27t+know+js&hl=&cd=6&source=gbs_api',
      infoLink:
        'http://books.google.ru/books?id=iOc6CwAAQBAJ&dq=you+don%27t+know+js&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/You_Don_t_Know_JS_ES6_Beyond.html?hl=&id=iOc6CwAAQBAJ',
    },
    saleInfo: {
      country: 'RU',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'RU',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
      },
      pdf: {
        isAvailable: true,
      },
      webReaderLink: 'http://play.google.com/books/reader?id=iOc6CwAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'With this book, you will: Learn new ES6 syntax that eases the pain points of common programming idioms Organize code with iterators, generators, modules, and classes Express async flow control with Promises combined with generators Use ...',
    },
  },
];

const rawManualDataMock = {
  title: 'Eloquent JavaScript, 3rd Edition',
  author: 'Marijn Haverbeke ',
  pages: 472,
  type: 'paper',
};

jest.mock('@reduxjs/toolkit', () => {
  return { nanoid: () => 'koyhhGvpkeCxRGnn1H1uG' };
});

afterAll(() => {
  '@reduxjs/toolkit'.mockRestore();
});

it('get book search results from google books api', async () => {
  expect.assertions(2);
  const queryString = "You Don't Know JS";
  const results = await getBooksData(queryString);
  expect(results).toHaveLength(40);
  expect(results.some((item) => item.volumeInfo.title.includes(queryString))).toBe(true);
});

it('test processing raw book search data', () => {
  expect(processSearchData(rawSearchDataMock)).toStrictEqual([
    {
      id: 'rTWZoFXGpJI',
      title: "You Don't Know JS Yet: Scope & Closures",
      author: 'Kyle Simpson',
      pages: 279,
      image:
        'http://books.google.com/books/content?id=Y_R5zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    },
    {
      id: 'I4gH7pXPesk',
      title: "You Don't Know JS: Async and Performance",
      author: 'Kyle Simpson',
      pages: 296,
      image:
        'http://books.google.com/books/content?id=ir_ZoAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    },
    {
      id: '28afDegDDgA',
      title: "You Don't Know JS: ES6 & Beyond",
      author: 'Kyle Simpson',
      pages: 334,
      image:
        'http://books.google.com/books/content?id=iOc6CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    },
  ]);
});

it('test processing manually entered book data', () => {
  expect(processManualData(rawManualDataMock)).toStrictEqual({
    id: 'koyhhGvpkeCxRGnn1H1uG',
    title: 'Eloquent JavaScript, 3rd Edition',
    author: 'Marijn Haverbeke ',
    pages: 472,
    type: 'paper',
    image: 'books.jpg',
  });
});
