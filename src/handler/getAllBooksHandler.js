const books = require("../object/books");

const getAllBooksHandler = (request, h) => {
  const response = h.response({
    data: {
      books,
    },
  });
  return response;
};

module.exports = getAllBooksHandler;
