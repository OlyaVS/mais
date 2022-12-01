import { DEFAULT_BOOKCASE_ID, DEFAULT_SHELF_ID } from './constants';
import { BookStatus, BookTypes } from './store/library/libary.types';

export const LIBRARY_DATA = [
  {
    id: DEFAULT_BOOKCASE_ID,
    title: 'Default',
    favourite: true,
    books: 0,
    pages: 0,
    pages_read: 0,
    days_to_complete: 0,
    shelves: [
      {
        id: DEFAULT_SHELF_ID,
        title: 'Default',
        pages: 0,
        favourite: true,
        start_date: null,
        end_date: null,
        speed: 20,
        days_to_complete: 0,
        pages_read: 0,
        books: [],
      },
    ],
  },
  {
    title: 'IT',
    id: 'NO-soKjuyypEXmonaQeJK',
    favourite: false,
    books: 23,
    pages: 8188,
    pages_read: 453,
    days_to_complete: 273,
    shelves: [
      {
        title: 'IT Must Read',
        id: '9C5z21azYnEkiQpKxxcDm',
        pages: 4279,
        favourite: false,
        start_date: null,
        end_date: null,
        speed: 30,
        days_to_complete: 142,
        pages_read: 205,
        books: [
          {
            id: '8paec8UkqUIues8yzBXzp',
            title: 'Code: The Hidden Language of Computer Hardware and Software',
            author: 'Charles Petzold',
            pages: 551,
            image:
              'http://books.google.com/books/content?id=iptCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'paper' as BookTypes,
            status: 'active' as BookStatus,
            pages_read: 205,
          },
          {
            id: 'ZfHoxcS1dFaYWbLIEK3Er',
            title: 'The Psychology of Computer Programming',
            author: 'Gerald M. Weinberg',
            pages: 292,
            image:
              'http://books.google.com/books/content?id=j_MJAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'vblFhxoQ5VxwJ0DuBaxPV',
            title: 'The Mythical Man-Month: Essays on Software Engineering, Anniversary Edition',
            author: 'Frederick P. Brooks Jr.',
            pages: 336,
            image:
              'http://books.google.com/books/content?id=Yq35BY5Fk3gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'KCdEAkejEDm_IKF96TMhT',
            title: 'The Pragmatic Programmer: From Journeyman to Master',
            author: 'Andrew Hunt, David Thomas',
            pages: 352,
            image:
              'http://books.google.com/books/content?id=5wBQEp6ruIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: '-fmGu05mUz6gelpHdDOiQ',
            title:
              'The Passionate Programmer: Creating a Remarkable Career in Software Development',
            author: 'Chad Fowler',
            pages: 191,
            image:
              'http://books.google.com/books/content?id=ig9QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'ZBpVTmtgW11EjPs1XUtWa',
            title: 'Structure and Interpretation of Computer Programs: JavaScript Edition',
            author: 'Harold Abelson, Gerald Jay Sussman',
            pages: 642,
            image:
              'http://books.google.com/books/content?id=4rtNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'Y7I9nCsfLhimeiChPwTol',
            title: 'Code Complete: A Practical Handbook of Software Construction',
            author: 'Steve McConnell, Steve M. McConnell',
            pages: 894,
            image:
              'http://books.google.com/books/content?id=lohA2aY9gu0C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            type: 'paper' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: '5WDaa5SFJxflh_jQJLzma',
            title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
            author: 'Robert C. Martin',
            pages: 464,
            image:
              'http://books.google.com/books/content?id=_i6bDeoCQzsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: '4Tebmh2Nwb4N8-jrnGQko',
            title: 'Patterns of Enterprise Application Architecture',
            author: 'Martin Fowler',
            pages: 557,
            image:
              'http://books.google.com/books/content?id=vqTfNFDzzdIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
        ],
      },
      {
        title: 'Product Management',
        id: 'bparaOOIBXbUoYRCZ3WSv',
        pages: 1944,
        favourite: false,
        start_date: null,
        end_date: null,
        speed: 30,
        days_to_complete: 65,
        pages_read: 0,
        books: [
          {
            id: 'KAnz6Z-pT6OqjK2lMtYf4',
            title: 'INSPIRED: How to Create Tech Products Customers Love',
            author: 'Marty Cagan',
            pages: 370,
            image:
              'http://books.google.com/books/content?id=QkY_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'paper' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'o793dTCgyeiqT-0yDJ6YE',
            title: 'Hooked: How to Build Habit-Forming Products',
            author: 'Nir Eyal',
            pages: 256,
            image:
              'http://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'paper' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'cXVFkUbnuNOZnpuyjWgiv',
            title:
              'The Mom Test: How to talk to customers & learn if your business is a good idea when everyone is lying to you',
            author: 'Rob Fitzpatrick',
            pages: 130,
            image:
              'http://books.google.com/books/content?id=Z5nYDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'paper' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'ChMfKDuxOgw0bwL96uQZ4',
            title: 'Designing Products People Love',
            author: 'Scott Hurff',
            pages: 300,
            image:
              'http://books.google.com/books/content?id=LazesgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            type: 'paper' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'FCKUhLf2y0y9ygfHJGUpN',
            title: 'The Design of Everyday Things: Revised and Expanded Edition',
            author: 'Don Norman',
            pages: 384,
            image:
              'http://books.google.com/books/content?id=I1o4DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'a-HeT9Z-ZYn_s9ndy9axS',
            title: 'Why High-tech Products Drive Us Crazy and how to Restore the Sanity',
            author: 'Alan Cooper',
            pages: 288,
            image:
              'http://books.google.com/books/content?id=04cFCVXC_AUC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'RlgncolN-Z-EUWllXP64s',
            title: "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
            author: 'Steve Krug',
            pages: 216,
            image:
              'http://books.google.com/books/content?id=QlduAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
        ],
      },
      {
        title: 'Project Management',
        id: 'gNmDoy3FV9F29TZYJsSYQ',
        pages: 1965,
        favourite: false,
        start_date: null,
        end_date: null,
        speed: 30,
        days_to_complete: 66,
        pages_read: 248,
        books: [
          {
            id: 's5aZuYf__aoehAd_FWuHk',
            title:
              'Scrum: A Revolutionary Approach to Building Teams, Beating Deadlines and Boosting Productivity',
            author: 'Jeff Sutherland',
            pages: 248,
            image:
              'http://books.google.com/books/content?id=L13frQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            type: 'paper' as BookTypes,
            status: 'finished' as BookStatus,
            pages_read: 248,
          },
          {
            id: 'jGX8up4F-XN6tVWOgxiPH',
            title: 'Kanban: Successful Evolutionary Change for Your Technology Business',
            author: 'David J. Anderson',
            pages: 261,
            image:
              'http://books.google.com/books/content?id=RJ0VUkfUWZkC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: '9fcSm-mnX7D4R-a1gvjqF',
            title:
              'Managers, Can You Hear Me Now?: Hard-Hitting Lessons on How to Get Real Results',
            author: 'Denny Strigl, Frank Swiatek',
            pages: 224,
            image:
              'http://books.google.com/books/content?id=zOwowgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'MGP_qn45X2kMoSFdTNHBb',
            title:
              "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
            author: 'Eric Ries',
            pages: 336,
            image:
              'http://books.google.com/books/content?id=tvfyz-4JILwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'paper' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'tkdDAJiXQHOjB7aGbhclA',
            title: 'ReWork: Change the Way You Work Forever',
            author: 'David Heinemeier Hansson, Jason Fried',
            pages: 288,
            image:
              'http://books.google.com/books/content?id=4N4_MUkcQy4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'nU6k0chiv8-YJrAWtXWxH',
            title: 'The Goal: A Process of Ongoing Improvement',
            author: 'Eliyahu M. Goldratt, Jeff Cox, David Whitford',
            pages: 408,
            image:
              'http://books.google.com/books/content?id=6vdJLwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            type: 'ebook' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
          {
            id: 'WAB7WUtt_ib-MM1VF2vuL',
            title: 'The Pyramid Principle: Logic in Writing and Thinking',
            author: 'Barbara Minto',
            pages: 200,
            image:
              'http://books.google.com/books/content?id=cpUowkjMX_gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            type: 'paper' as BookTypes,
            status: 'new' as BookStatus,
            pages_read: 0,
          },
        ],
      },
    ],
  },
];
