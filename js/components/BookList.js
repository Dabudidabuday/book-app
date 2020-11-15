class BookList {
    constructor(book) {
        this.book = book;
    }

    _initBookList() {
        const bookListParent = document.querySelector('#bookListParent');
        const table = document.createElement('table');

        table.classList.add('table', 'table-striped');
        table.innerHTML = 
        `
            <thead class="thead-light">
                <tr>
                    <th scope="col" class="h4">Title</th>
                    <th scope="col" class="h4">Author</th>
                    <th scope="col" class="h4">Genre</th>
                    <th></th>
                </tr>
            </thead>

            <tbody class="book-list"></tbody>
        `

        bookListParent.appendChild(table);
    }

    _handleRemoveBook() {
        let list = document.querySelector('.book-list');

        list.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete')) {
                e.target.parentNode.parentNode.remove();
            }
        })
    }

    _getStoredBooks() {
        const store = window.localStorage;
        let books = [];
        books = JSON.parse(store.getItem('books')) || [];

        books.forEach(book => {
            this.renderBook(book);
        });
    }

    
    renderBook(book) {
        let list = document.querySelector('.book-list');
        let row = document.createElement('tr');

        row.innerHTML = `
            <td class="book-title">${book.title}</td>
            <td class="book-author">${book.author}</td>
            <td class="book-genge">${book.genre}</td>
            <td><a class="btn btn-primary btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }

    run() {
        this._initBookList();
        this._getStoredBooks();
        this._handleRemoveBook();
    }

}

export default BookList