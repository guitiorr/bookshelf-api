const books = require("../object/books");

const getBookByIdHandler = (request, h) =>{
    const { id } = request.params

    const book = books.filter((n) => n.id === id)[0]; //check undefined book

    if(book !== undefined){
        const response = h.response({
            status: 'success',
            message : `Book ID ${id} found`,
            data: {
                book
            }
        });
        response.code(201);
        return response;
    }
    else{
        const response = h.response({
            status: 'fail',
            message: `Buku tidak ditemukan`,
        })
        response.code(404);
        return response;
    }


}

module.exports = getBookByIdHandler