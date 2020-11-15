import * as modesLinks from '../../api/Modes.js';

class Modes {
    _createLink(mode) {
        const link = document.createElement('link');
        const head = document.querySelector('head');

        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', mode);
        link.setAttribute('id', 'modesLink');
        
        head.appendChild(link);
    }

    _handleMode() {
        const modesList = document.querySelector('.menu-modes');

        modesList.addEventListener('click', function(e) {
            if(e.target.classList.contains('mode')) {
                let mode = e.target.src;

                
            }
        })
    }

    _renderModesList() {
        let div = document.createElement('div');
        div.classList.add('dropdown');

        div.innerHTML = `
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Change mode
            </button>
            <div class="dropdown-menu menu-modes" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item mode" href="#">Action</a>
                <a class="dropdown-item mode" href="#">Another action</a>
                <a class="dropdown-item mode" href="#">Something else here</a>
            </div>
        `
    }

    _initStyleLink() {
        let modes = modesLinks;

        console.log('modes', modes.modes[0]);

        this._createLink(modesLinks.modes)
    }

    run() {
        this._initStyleLink();
    }
}

export default Modes