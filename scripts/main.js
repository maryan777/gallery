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

function displayPhotos()    {
    console.log('displayPhotos()')
    const photos = [
        'https://picsum.photos/300/150?random=1',
        'https://picsum.photos/300/150?random=2',
        'https://picsum.photos/300/150?random=3',
    ];
    console.log(photos)

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

function renderPhoto( url )  {
    console.log(url);
    const $photo = document.createElement('img');
    $photo.src = url;
    const $main = document.querySelector('main');
    $main.appendChild($photo);
}

function main() {
    console.log('main()');
    displayPhotos();

 
}

console.log(1)
window.addEventListener('DOMContentLoaded', main);
console.log(2)

