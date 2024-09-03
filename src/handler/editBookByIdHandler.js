const books = require("../object/books");

const editBookByIdHandler = (request, h) => {
  const { id } = request.params;
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

  let finished = false;

  //Klo gaada nama
  if (!name) {
    const response = h.response({
      status: "fail",
      message: "Gagal memperbarui buku. Mohon isi nama buku",
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: "fail",
      message: "Jumlah halaman yang sudah dibaca lebih dari total halaman.",
    });
    response.code(400);
    return response;
  } else if (readPage === pageCount) {
    finished = true;
  }

  const updatedAt = new Date().toISOString();

  //Find index
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      updatedAt,
    };

    const response = h.response({
      status: "success",
      message: "Buku berhasil diperbarui",
    });
    response.code(200);
    return response;
  } else {
    const response = h.response({
      status: "fail",
      message: "Gagal memperbarui buku. Id tidak ditemukan",
    });
    response.code(404);
    return response;
  }
};

module.exports = editBookByIdHandler;
