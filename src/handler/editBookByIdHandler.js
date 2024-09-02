const books = require("../object/books");


const editBookByIdHandler = (request, h) => {
    const { id } = request.params;
    const { title, author, genre, language } = request.payload;
    
    const updatedAt = new Date().toISOString();

    //Find index
    const index = books.findIndex((book) => book.id === id);


    if(index !== -1){
        books[index] = {
            ...books[index],
            title,
            author, 
            genre, 
            language,
            updatedAt
        }

        const response = h.response({
            status: 'success',
            code: 200,
            message: `Book ${id} successfully updated`
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

module.exports = editBookByIdHandler