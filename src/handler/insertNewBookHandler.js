const { nanoid } = require("nanoid");
const books = require("../object/books.js");

const insertNewBookHandler = (request, h) => {
  const {
    name,
    publisher,
    year,
    author,
    pageCount,
    readPage,
    summary,
    reading,
  } = request.payload;
  const id = "BK-" + nanoid(3).toString();
  let finished = false;
  // const id = nanoid(3);

  //Klo gak ada title
  if (!name) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
    response.code(400);
    return response;
  } else if (readPage === pageCount) {
    finished = true;
  }

  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  const isSuccess = books.some((book) => book.id === id);

  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  } else {
    const response = h.response({
      status: "fail",
      message: "Fail to add new book",
    });
    response.code(500);
    return response;
  }
};

module.exports = { insertNewBookHandler };
