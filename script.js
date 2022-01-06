let catGifApiKey = "VXnSXclVjuSvQqVLtihJCbZ8Fz66qAOhMc4pyYy0";
let catGifUrl = "http://cataas.com/#/cat/gif";
let catBreedApi = "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244";
let catBreedUrl = "https://api.thecatapi.com/";

// return cat pictures from cat gif api 

function returnCatGif() {
    fetch(catUrl + catApiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            var catPic = document.getElementById("catPic");
            var catGif = document.createElement('img');
            catGif.setAttribute('src', response.data.image_url);
            catPic.appendChild(catGif);
        })
}


//return cat breed from second api key
function returnCatBreed() {
    var breedSearch = document.querySelector("breedSearch").value;

    fetch(
        catBreedUrl + breedSearch + catBreedApi)
        .then(function (response) {
            return response.json();
        })
}




// var Cataas = require('cataas-api')
// var cataas = new Cataas()

// var gif = {
//     Gif: true,
//     Size: 'md',
//     Text: "hey dude",
//     Filter: "paint",
//     TextSize: 35,
//     TextColor: "LightBlue",
// }
// var resized = {
//     Width: 300,
//     Height: 200,
// }
// cataas.options = gif
// cataas.options = resized


// cataas.encode()
// cataas.get()
//     .then(readable => {
//         const stream = new fs.createWriteStream('cat.png')
//         readable.pipe(stream)
//     })
//     .catch(e => console.error(e))






