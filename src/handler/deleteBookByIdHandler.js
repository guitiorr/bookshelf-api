const books = require("../object/books");

const deleteBookByIdHandler = (request, h) => {
    const { id } = request.params;

    const index = books.findIndex((book) => book.id === id);

    if(index !== -1){
        books.splice(index, 1);

        const response = h.response({
            status: 'success',
            message: `Buku berhasil dihapus`
        })
        response.code(201);
        return response;
    }
    else{
        const response = h.response({
            status: 'fail',
            message: `Buku gagal dihapus. Id tidak ditemukan`
        })
        response.code(404);
        return response;
    }


}

module.exports = deleteBookByIdHandler