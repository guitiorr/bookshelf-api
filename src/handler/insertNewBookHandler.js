const { nanoid } = require("nanoid");
const books = require("../object/books.js");

const insertNewBookHandler = (request, h) => {
  const { name, publisher, pageCount, pageRead} = request.payload;
  const id = "BK-" + nanoid(3).toString();
  // const id = nanoid(3);

  //Klo gak ada title
  if (!name) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku.",
    });
    response.code(400);
    return response;
  }

  if (pageRead > pageCount) {
    const response = h.response({
      status: "fail",
      message: "Jumlah halaman yang sudah dibaca lebih dari total halaman.",
    });
    response.code(400);
    return response;
  }

  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    publisher,
    insertedAt,
    updatedAt,
    pageCount,
    pageRead
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
