class Ui {

    static showAlert(message, type) {
        const div = document.createElement('div');

        div.innerHTML = message;
        div.classList.add('alert', `alert-${type}`, 'mt-4');

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        
        form.appendChild(div);

        setTimeout(() => {
            div.remove()
        }, 3000)
    };
}

export default Ui