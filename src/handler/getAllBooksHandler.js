const books = require("../object/books");

// const getAllBooksHandler = (request, h) => {
//   const response = h.response({
//     data: {
//       books,
//     },
//   });
//   return response;
// };

const getAllBooksHandler = (request, h) => {
  const filterBook = books.map(book => {
    return {
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    };
  });

  const response = h.response({
    status: 'success',
    data: {
      books: filterBook,
    },
  });

  return response;
};

module.exports = getAllBooksHandler;
