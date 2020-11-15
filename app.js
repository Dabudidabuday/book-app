import Ui from './js/components/Ui.js';
import Book from './js/components/Book.js';
import BookList from './js/components/BookList.js';
import FormAdd from './js/components/forms/FormAdd.js';
import Navbar from './js/components/header/Navbar.js';
import Store from './js/Store.js';
import Modes from './js/components/header/Modes.js';

class App {
    constructor() {
        // инициализация подключенных классов this.section = new Section(document.querySelector('.section'))
        this.app = document.querySelector('#app');
        this.navbar = new Navbar(app);
        this.bookList = new BookList();
        this.store = new Store();
        this.modes = new Modes();
    }

    run() {
        // методы run() подключенных классов(секций)
        this.bookList.run();
        this.navbar.run();
        this.modes.run();
    }
}

document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#input-title').value;
    const author = document.querySelector('#input-author').value;
    const genre = document.querySelector('#input-genre').value;

    if(title === '' || author === '' || genre === '') {
        Ui.showAlert('Please fill all fields', 'warning');
    } else {
        const book = new Book(title, author, genre);
        BookList.renderBook(book);

        FormAdd.clearFields();       
        // Store.setBook(book);
        let getStoredBooks = [];
        getStoredBooks = JSON.parse(localStorage.getItem('books'));
        console.log(getStoredBooks);
        getStoredBooks.splice(0, 1)

        getStoredBooks.push(book)

        localStorage.setItem('books', JSON.stringify(getStoredBooks));
    }
});




window.onload = () => {
    let app = new App();
    app.run();
}


const store = window.localStorage;
console.log('Stored length:', store.length);
console.log('Stored key:', store.key(''));
console.log('Store getItem:', store.getItem('books'));

// let books = [];

// books.push(JSON.parse(store.getItem('books')));
// store.setItem('books', JSON.stringify(books));

// // store.clear()

store.removeItem('')