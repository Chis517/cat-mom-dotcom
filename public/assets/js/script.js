let catGifApiKey = "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244";
let catBreedApi = "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244";
let catBreedUrl = "https://api.thecatapi.com/v1/breeds?";
let catFactUrl = "https://catfact.ninja/fact?limit=1&max_length=140";
let catGifUrl = "https://api.thecatapi.com/v1/images/search?mime_types=gif";
let factContainer = document.getElementById("fact-container")
let factBtn = document.getElementById("factBtn");
let gifContainer = document.getElementById("catGif")
let gifBtn = document.getElementById("gifBtn");
let breedList = document.getElementById("breed-list");
let breedImgContainer = document.getElementById("breedImg");
let breedInfoContainer = document.getElementById("breedInfo");

gifBtn.addEventListener('click', returnCatGif);
factBtn.addEventListener('click', returnCatFact);

// function to display a random cat fact 
function returnCatFact() {
    factContainer.textContent = ''
    fetch(catFactUrl, requestOptions)
        .then(response => response.text())
        .then(result => {
            showResult = result => {
                var catFactSplit = result.split(/[""""""]/);
                let catFact = document.createElement("p");
                catFact.innerHTML = catFactSplit[3];
                catFact.className = "cat-fact-text";
                factContainer.appendChild(catFact);
            }
            showResult(result);
        });
};

// return cat pictures from cat gif api
function returnCatGif() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "image/");
    myHeaders.append("Authorization", "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244");

    gifContainer.textContent = ''
    fetch(catGifUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response)
            for (var i = 0; i < response.length; i++) {
                {
                    var catGif = document.createElement('img')
                    catGif.setAttribute("style", "width:450px; height:450px; ");
                    catGif.setAttribute('src', response[i].url);
                    gifContainer.appendChild(catGif);
                }
            }
        });
};

function returnCatBreed() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244");
};

// calls the catAPI to display breed names in the drop down
fetch(catBreedUrl + catBreedApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        // for loop that creates each breed option
        for (var i = 0; i < data.length; i++) {
            let breedNameEl = document.createElement("option");
            breedNameEl.setAttribute("id", data[i].name);
            breedNameEl.textContent = data[i].name;
            breedList.appendChild(breedNameEl);
        }
    });

// function that gets clicked cat breed from the drop down
// function getCatBreed() {
//     var selectedBreed = breedList.value
//     displayCatBreed(selectedBreed)
// };

// function to display cat breed information by click
// function displayCatBreed(breed) {
//     breedImgContainer.textContent = ''
//     breedInfoContainer.textContent = ''
//     fetch(catBreedUrl + catBreedApi)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//         console.log(data);
        
//             var breedImg = document.createElement('img')
//             breedImg.setAttribute("style", "width:450px; height:450px; ");
//             breedImg.setAttribute('src', 'https://cdn2.thecatapi.com/images/' + data.reference_image_id + '.jpg');
//             breedImgContainer.appendChild(breedImg);

            
    
//     });
// };



// fetch(catBreedUrl + catBreedApi)
//     .then(function (response) {
//         return response.json();
//     })

//     .then(function (data) {
//         console.log(data);
//         for (var i = 0; i < response.length; i++) {
//             // let breedImage = data.image;

//             // breedName.map(function (name) {

//             // })

//             // picture for breed
//             var responseContainerEl = document.querySelector("#catImg");
//             responseContainerEl.innerHTML = "";

//             var catImg = document.createElement("img");
//             catImg.setAttribute("style", "width:200px; hight:200px;");
//             catImg.setAttribute("src", response[0].image.url);

//             //   Append 'catImg' to the <div>
//             responseContainerEl.appendChild(catImg);



// results based on breed

function displayCatBreed() {
    var selectedValue = document.getElementById("breed-list").value
    console.log(selectedValue);

    breedImgContainer.textContent = ''
    breedInfoContainer.textContent = ''
    fetch(catBreedUrl + catBreedApi)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
            var breedImg = document.createElement('img')
            breedImg.setAttribute("style", "width:450px; height:450px; ");
            breedImg.setAttribute('src', 'https://cdn2.thecatapi.com/images/' + data[i].reference_image_id + '.jpg');
            breedImgContainer.appendChild(breedImg);
            }
        })
    
        //     for (var i = 0; i < data.length; i++) {
        //         let catNameEl = data[i].name;

        //         // if (selectedValue = catNameEl) {
        //         //     console.log("match");
        //         // }
        //     }
        // })
    //         for (var i = 0; i < data.length; i++) {
    //         let catId = document.createElement("div");
    //         let catDescription = document.createElement("div");
    //         let catTemperament = document.createElement("div");
    //         let catBreedImg = document.createElement("img");

    //         catId.setAttribute = ("id", data[i].id);
    //         catDescription.setAttribute = ("id", data[i].description);
    //         catTemperament.setAttribute = ("id", data[i].temperament);
    //         catBreedImg.setAttribute = ("id", data[i].image);

    //         catId.textContent= data[i].id;
    //         catDescription.textContent = data[i].description;
    //         catTemperament.textContent = data[i].temperament;
    //         catBreedImg.textContent = data[i].image;

    //         console.log(catDescription);
    //     }
    //  } )


    // var firstFour = selectedValue.substring(0, 4);

    // if (firstFour === "Amer") {
    //   return selectedValue.substring(8, 4);
    // }
    // console.log(firstFour);



    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };

    // fetch("https://api.thecatapi.com/v1/breeds/" + firstFour, requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
}


var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");


var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};