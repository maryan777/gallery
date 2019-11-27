const loader = {
    show()  {
        const $ciasteczko = document.createElement('img');
        $ciasteczko.src = 'images/loader.svg';
        $ciasteczko.id = 'loader';
        
        const $main = document.querySelector('main');
        $main.appendChild($ciasteczko);

    },
    hide()  {
        const $mufinka = document.querySelector('#loader');
        $mufinka.remove();
    }
}

module.exports = loader;