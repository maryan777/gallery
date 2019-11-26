// // console.log('plik załadowany');

// const title = "Galeria zdjęć"
// console.log(title);

// const photos = [
//     'ciasteczko',
//     123456,
//     3.14,
//     title,
// ]
// photos.push( 'sernik' );
// console.log (photos)

// const photos = [
//     // 'https://picsum.photos/300/150?random=1',
//     // 'https://picsum.photos/300/150?random=2',
//     // 'https://picsum.photos/300/150?random=3',
// ];

function displayPhotos(photos)    {
    console.log('displayPhotos()')
    

    // renderPhoto(photos[0]);
    // renderPhoto(photos[1]);
    // renderPhoto(photos[2]);

    // for (let i = 0; i < 3; i++)  {
    //     console.log(i);
    //     renderPhoto(photos[i]);
    // }

    // for (let photo of photos)   {
    //     console.log(photo);
    //     renderPhoto(photo);
    // }

    // photos.forEach(
    //     // Callback (synchroniczny) -> Wywoanie zwrotne
    //     function(photo)  {
    //         renderPhoto(photo);
    //     }
    // );

    photos.forEach(renderPhoto);

}


const ONE_SECOND = 1000

function renderPhoto( url )  {
    console.log(url);
    const $photo = document.createElement('img');
    $photo.src = url;
    const $main = document.querySelector('main');
    $main.appendChild($photo);
}
function displayMessage( alertOutside, outsideClass ){
    const $text = document.createElement('p')
    $text.textContent = alertOutside;
    $text.classList.add('alert', outsideClass)
;
    const $main = document.querySelector('main')
    $main.appendChild($text);
}


// function sleep()    {

//    const start = Date.now();
//    while (Date.now() > start + delay)   {}
            
//         console.log(i+1);
//     }


function main() {
    console.log('main()');

    const photos = [
        'https://picsum.photos/300/150?random=1',
        'https://picsum.photos/300/150?random=2',
        'https://picsum.photos/300/150?random=3',
    ];
    console.log(photos)

    if (photos.length > 0 )  {
        displayPhotos(photos)
    }
    else    {
        displayMessage('Brak zdjec', 'alert-danger')
    }
    

    // displayPhotos();
    
    
    
    // setTimeout(function()   {
    //     displayMessage('Nie ma zdj w galerii', 'alert-danger')

    // }, 2 * ONE_SECOND);
 
}


console.log(1)
window.addEventListener('DOMContentLoaded', main);
console.log(2)

