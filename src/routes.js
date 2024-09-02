const deleteBookByIdHandler = require("./handler/deleteBookByIdHandler");
const editBookByIdHandler = require("./handler/editBookByIdHandler");
const getAllBooksHandler = require("./handler/getAllBooksHandler");
const getBookByIdHandler = require("./handler/getBookByIdHandler");
const { insertNewBookHandler } = require("./handler/insertNewBookHandler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: insertNewBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes; // or use `module.exports = { routes };` if you prefer
