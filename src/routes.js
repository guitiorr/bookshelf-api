const getAllBooksHandler = require("./handler/getAllBooksHandler");
const { insertNewBookHandler } = require("./handler/insertNewBookHandler");

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: insertNewBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  }
];

module.exports = routes;  // or use `module.exports = { routes };` if you prefer