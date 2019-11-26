// @ts-nocheck
// // 3 requesty http (3 reazy uruchomić) i połączyć w jedną tablicę


// function render()   {   /*ma wyswietlic wszystkie zdjecia*/

// }


// async function main() {
    
//     const url = 'https://fakes.herokuapp.com/users';

//     var urls = [];

//     for (let i = 0; i < 3; i++)  {
//             console.log(i);
//             let oneUrl = await makeRequest(url);
//             console.log(oneUrl);
//             urls.push(oneUrl);
            
//         }
//     console.log(urls)
        
// }


// // window.addEventListener('DOMContentLoaded', main);

// main();


// function displayMessage(alertOutside, outsideClass) {
//     const $text = document.createElement('p')
//     $text.textContent = alertOutside;
//     $text.classList.add('alert', outsideClass)

async function main() {
    loader.show();

    function makeRequest(url) {    
        console.log('makeRequest()', url);
    
        return fetch(url) 
        .then(function (response) {
            console.log('udalo sie');
            return response.json();
        }) 
    }
    
    const url = 'https://fakes.herokuapp.com/users';
    
    const photos1 = await makeRequest(url);
    const photos2 = await makeRequest(url);
    const photos3 = await makeRequest(url);
    
    let photos = [].concat(photos1, photos2, photos3);
    
    console.log(photos);

    loader.hide();
    
    function renderPhoto(url) {
        const $photo = document.createElement('img');
        $photo.src = url.avatarUrl;
    
        const $main = document.querySelector('main');
        $main.appendChild($photo);
    }
    
    photos.forEach(renderPhoto);

    // displayMessage('Uwaga', 'alert-danger');
    
    
    
    // funkcja render ktora przyjme obrazek do renderowania i go wyswietli w domie wszystkie 9 elementow
    // dom musi byc zaladowany add event
    
    }
    
    window.addEventListener('DOMContentLoaded', main);