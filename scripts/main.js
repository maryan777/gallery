// 3 requesty http (3 reazy uruchomić) i połączyć w jedną tablicę


function render()   {   /*ma wyswietlic wszystkie zdjecia*/

}


async function main() {
    
    const url = 'https://fakes.herokuapp.com/users';

    const urls = [];

    for (let i = 0; i < 3; i++)  {
            console.log(i);
            let oneUrl = await makeRequest(url);
            urls.concat(oneUrl);
        }
    console.log(urls)
        
}


// window.addEventListener('DOMContentLoaded', main);

main();