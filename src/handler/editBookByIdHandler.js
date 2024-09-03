const books = require("../object/books");


const editBookByIdHandler = (request, h) => {
    const { id } = request.params;
    const { name, publisher, pageCount, pageRead } = request.payload;

    //Klo gaada nama
    if(!name){
        const response = h.response({
            status: 'fail',
            message: 'Tidak ada nama buku'
        })
        response.code(400);
        return response;
    }

    if(pageCount < pageRead){
        const response = h.response({
            status: 'fail',
            message: 'pageRead larger than pageCount'
        })
        response.code(400);
        return response;
    }
    
    const updatedAt = new Date().toISOString();

    //Find index
    const index = books.findIndex((book) => book.id === id);


    if(index !== -1){
        books[index] = {
            ...books[index],
            name, publisher, pageCount, pageRead,
            updatedAt
        }

        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui'
        })
        response.code(201);
        return response;
    }
    else{
        const response = h.response({
            status: 'fail',
            message: "Gagal memperbarui buku. Id tidak ditemukan"
        })
        response.code(404);
        return response;
    }


}

module.exports = editBookByIdHandler