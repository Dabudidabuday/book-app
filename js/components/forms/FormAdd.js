class FormAdd {
    
    static clearFields() {
        const title = document.querySelector('#input-title');
        const author = document.querySelector('#input-author');
        const genre = document.querySelector('#input-genre');

        title.value = '';
        author.value = '';
        genre.value = '';
    }

    _handleSubmit() {
        // document.querySelector('#book-form').addEventListener('submit', (e) => {
        //     e.preventDefault();
        
        //     const title = document.querySelector('#input-title').value;
        //     const author = document.querySelector('#input-author').value;
        //     const genre = document.querySelector('#input-genre').value;
        
        //     if(title === '' || author === '' || genre === '') {
        //         Ui.showAlert('Please fill all fields', 'warning');
        //     } else {
        //         const book = new Book(title, author, genre);
        //         BookList.renderBook(book);
        
        //         FormAdd.clearFields();
        //         localStorage.setItem('book', book);
        //         // console.log(localStorage.getItem('book'));
        //     }
        // });
    }
}

export default FormAdd