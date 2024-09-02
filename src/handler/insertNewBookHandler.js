const { nanoid } = require("nanoid");
const books = require("../object/books.js");

const insertNewBookHandler = (request, h) => {
  const { title, author, genre, language} = request.payload;
  const id = "BK-" + nanoid(3).toString();
  // const id = nanoid(3);

  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    title,
    author,
    genre,
    language,
    insertedAt,
    updatedAt
  };

  books.push(newBook);

  const isSuccess = books.some((book) => book.id === id); // Updated from filter to some


  if (isSuccess) {
    const response = h.response({
      status: "success",
      code: 201,
      message: "Book added successfully",
      data: {
        bookId: id,
      },
    });
    return response;
  } else {
    const response = h.response({
      status: "fail",
      message: "Fail to add new book",
      code: 500,
    });
    return response;
  }
};

module.exports = { insertNewBookHandler };
