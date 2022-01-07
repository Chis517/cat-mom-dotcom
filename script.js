let catGifApiKey = "VXnSXclVjuSvQqVLtihJCbZ8Fz66qAOhMc4pyYy0";
let catGifUrl = "https://cataas.com/cat#/cat/gif";
let catBreedApi = "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244";
let catBreedUrl = "https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc";

// return cat pictures from cat gif api 

function returnCatGif() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "image/gif");
    myHeaders.append("Authorization", "VXnSXclVjuSvQqVLtihJCbZ8Fz66qAOhMc4pyYy0");
}

    fetch(catGifUrl + catGifApiKey)
    .then(function(image) {
        return image;
      })
      .then(function(image) {
        console.log(image);
        
    //         {
                
    //             var responseContainerEl = document.querySelector('#catGif');
    //             responseContainerEl.innerHTML = '';
        
    //             var catGif = document.createElement('img');
    //             catGif.setAttribute("style","width:200px; hight:200px; ");
    //             catGif.setAttribute('src', image);
        
    //         //   Append 'catImg' to the <div>
    //           responseContainerEl.appendChild(catGif);
        
    // }

    })




//return cat breed from second api key
// function returnCatBreed() {
//     var breedSearch = document.querySelector("breedSearch").value;

//     fetch(
//         catBreedUrl + breedSearch + catBreedApi)
//         .then(function (response) {
//             return response.json();
//         })
// }


function returnCatBreed() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244");
    
    
    }

    fetch(catBreedUrl + catBreedApi)
    .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);

    for (var i = 0; i < response.length; i++) {
        {
            
            var responseContainerEl = document.querySelector('#catPic');
            responseContainerEl.innerHTML = '';
            
    
            var catImg = document.createElement('img');
            catImg.setAttribute("style","width:200px; hight:200px; ");
            catImg.setAttribute('src', response[0].url);
    
        //   Append 'catImg' to the <div>
          responseContainerEl.appendChild(catImg);
   }
}
      })

      returnCatBreed(); 


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






