export const apiKey = 'https://softuni-remotedatabase.firebaseio.com/';

export const getAllBooks = () => {
    return fetch(apiKey + 'books.json').then(x => x.json());
};

export const getBookById = (bookId) => {
    return fetch(`${apiKey}books/${bookId}.json`).then(x => x.json());
};

export const createNewBook = (bookBody) => {
    return fetch(apiKey + 'books.json', {
        method: 'POST',
        body: JSON.stringify(bookBody)
    }).then(x => x.json());
};

export const updateBook = (bookBody, bookId) => {
    return fetch(`${apiKey}books/${bookId}.json`, {
        method: 'PUT',
        body: JSON.stringify(bookBody)
    }).then(x => x.json());
};

export const deleteBook = (bookId) => {
    return fetch(`${apiKey}books/${bookId}.json`, {
        method: 'DELETE'
    }).then(x => x.json());
};