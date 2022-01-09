let catGifApiKey = "VXnSXclVjuSvQqVLtihJCbZ8Fz66qAOhMc4pyYy0";
let catGifUrl = "https://cataas.com/cat/gif";
let catBreedApi = "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244";
let catBreedUrl = "https://api.thecatapi.com/v1/breeds?";
let breedList = document.getElementById("breed-list");

function returnCatBreed() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244");
}

// return breed information from catApi 
fetch(catBreedUrl + catBreedApi)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        // get list of names from api and append it to the search bar
        for (var i = 0; i < data.length; i++) {
            let breedNameEl = document.createElement("option");
            breedNameEl.textContent = data[i].name;
            breedList.appendChild(breedNameEl);

            var breedNames = breedNameEl.textContent;
            console.log(breedNames);

            
            
            breedList.addEventListener('change', (event) => {
                console.log('change');
            })
        }
    })

    //     breedName.forEach(function (name) {
    //         let breedSelect = document.getElementById("breed-select");
    // //         document.breedSelect.appendChild(breedName);
    //     })
    // }





    // fetch(catBreedUrl + catBreedApi)
    // .then(function (response) {
    //     return response.json();
    // })

    // .then(function (data) {
    //     console.log(data);
    //     for (var i = 0; i < response.length; i++) {
    //         // let breedImage = data.image;


    //         // breedName.map(function (name) {

    //         // })

    //         // picture for breed 
    //         var responseContainerEl = document.querySelector('#catPic');
    //         responseContainerEl.innerHTML = '';

    //         var catImg = document.createElement('img');
    //         catImg.setAttribute("style", "width:200px; hight:200px; ");
    //         catImg.setAttribute('src', response[0].image.url);

    //         //   Append 'catImg' to the <div>
    //         responseContainerEl.appendChild(catImg);

    //     }
    // })

