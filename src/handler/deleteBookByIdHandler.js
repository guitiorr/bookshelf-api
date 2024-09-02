const books = require("../object/books");

const deleteBookByIdHandler = (request, h) => {
    const { id } = request.params;

    const index = books.findIndex((book) => book.id === id);

    if(index !== -1){
        books.splice(index, 1);

        const response = h.response({
            status: 'success',
            code: 200,
            message: `Book ${id} deleted successfully`
        })
        return response;
    }
    else{
        const response = h.response({
            status: 'fail',
            code: 404,
            message: `Book ${id} not found`
        })
        return response;
    }


}

module.exports = deleteBookByIdHandler