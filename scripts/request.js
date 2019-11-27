function makeRequest(url)   {
    return fetch(url)
    .then(function (response)   {
        console.log ('udalo sie');
        return response.json();
    }
        )
}

module.exports = makeRequest;