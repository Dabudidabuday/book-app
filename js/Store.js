class Store {
    constructor() {
        this.store = window.localStorage;
    }

    static getBooks() {
        let books = localStorage.getItem('book');

        return books;
    }

    static setBook(book) {
        let books = [];
        books = JSON.parse(localStorage.getItem('books')) || [];
        
        books.push(book);
        this.store.setItem('books', JSON.stringify(books));
    }
}

export default Store