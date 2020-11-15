class Navbar {
    constructor(parentElement) {
        this.parentElement = parentElement;
    }

    _initNavbar(navbar) {
         this.parentElement.appendChild(navbar);
    }

    _renderNavbar() {
        let nav = document.createElement('nav');
        nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark')
        nav.innerHTML = 
        `
            <a class="navbar-brand" href="/">
                <i class="fas fa-book-reader mr-2"></i>
                Book App
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto ml-3">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="/catalog">Catalog</a>
                    </li>
                </ul>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        `
        return nav;
    }



    run() {
        this._initNavbar(this._renderNavbar());
    }
}

export default Navbar