const { insertNewBookHandler } = require("./handler/insertNewBookHandler");

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: insertNewBookHandler,
  },
];

module.exports = routes;  // or use `module.exports = { routes };` if you prefer