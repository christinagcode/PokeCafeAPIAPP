console.log('whats up')

fetch("https://pokeapi.co/api/v2/pokemon")
// fetch info from the url, fetch function also returns a promise
.then(results => results.json())

.then(data => {
    let list = document.getElementById('pokeMenu')
    data.results.map(pokemon => {
        let li = document.createElement('li')
        console.log(pokemon)

        fetch(pokemon.url).then(response => response.json()).then(data => {
            console.log(data)
            li.innerHtml =
                `<p>${pokemon.name}</p>
                <img src="${data.sprites.front_default}" />`

            let searchButton = document.getElementById("searchButton");
            searchButton.addEventListener("click", function(){
                let input = document.getElementById("input");
                let getPokemonInfo = input.value;
                console.log("text = ", getPokemonInfo);
            })
        })
    })

})
