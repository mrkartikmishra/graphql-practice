const data = {
  author: [
    { id: 1, name: "Jeff Keller", bookIds: [101] },
    { id: 2, name: "Chinua Achebe", bookIds: [201] },
    { id: 3, name: "Hans Christian Andersen", bookIds: [301, 401] },
  ],
  books: [
    {
      id: 101,
      title: "Atitude is Everything",
      publishedYear: 1999,
      authorId: 1,
    },
    { id: 201, title: "Things Fall Apart", publishedYear: 1958, authorId: 2 },
    { id: 301, title: "Fairy tales 1", publishedYear: 1836, authorId: 3 },
    { id: 401, title: "Fairy tales 2", publishedYear: 1836, authorId: 3 },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.author.find(
        (anuthorDetails) => anuthorDetails.id === parent.authorId
      );
    },
  },

  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter((book) => parent.bookIds.includes(book.id));
    },
  },

  Query: {
    books: () => {
      return data.books;
    },

    authors: () => {
      return data.author;
    },
  },

  Mutation: {
    addBook: (parent, args, context, info) => {
      const newBook = { ...args, id: data.books.length + 1 };
      data.books.push(newBook);
      return newBook;
    },
  },
};
