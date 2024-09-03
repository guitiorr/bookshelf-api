const books = require("../object/books");

const editBookByIdHandler = (request, h) => {
  const { id } = request.params;
  const { name, publisher, year, author, pageCount, readPage, summary } =
    request.payload;

  //Klo gaada nama
  if (!name) {
    const response = h.response({
      status: "fail",
      message: "Gagal memperbarui buku. Mohon isi nama buku",
    });
    response.code(400);
    return response;
  } else if (pageRead > pageCount) {
    const response = h.response({
      status: "fail",
      message: "Jumlah halaman yang sudah dibaca lebih dari total halaman.",
    });
    response.code(400);
    return response;
  } else if (readPage === pageCount) {
    const finished = true;
  } else {
    const finished = false;
  }

  const updatedAt = new Date().toISOString();

  //Find index
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      publisher,
      year,
      author,
      pageCount,
      readPage,
      finished,
      summary,
      insertedAt,
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
