// utils/search.ts
import { IBook } from '@/interfaces';

export const searchBooks = (
  books: IBook[],
  query: string,
  option: string
): IBook[] => {
  if (!query) return books;

  return books.filter((book) => {
    const lowerQuery = query.toLowerCase();
    switch (option) {
      case 'Title':
        return book.title.toLowerCase().includes(lowerQuery);
      case 'Author':
        return book.author.toLowerCase().includes(lowerQuery);
      case 'Text':
        return book.text.toLowerCase().includes(lowerQuery);
      case 'Subjects':
        return book.subjects.some((subject) =>
          subject.toLowerCase().includes(lowerQuery)
        );
      default:
        return false;
    }
  });
};
