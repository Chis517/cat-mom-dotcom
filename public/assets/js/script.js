let catGifApiKey = "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244";
let catGifUrl = "https://api.thecatapi.com/v1/images/search?mime_types=gif";
let catBreedApi = "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244";
let catBreedUrl = "https://api.thecatapi.com/v1/breeds?";
let breedList = document.getElementById("breed-list");

// return cat pictures from cat gif api

function returnCatGif() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "image/");
  myHeaders.append("Authorization", "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244");
}
fetch(catGifUrl)
.then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);

for (var i = 0; i < response.length; i++) {
    {
        
        var responseContainerEl = document.querySelector('#catGif');
        responseContainerEl.innerHTML = '';

        var catImg = document.createElement('img');
        catImg.setAttribute("style","width:450px; hight:450px; ");
        catImg.setAttribute('src', response[i].url);

    //   Append 'catImg' to the <div>
      responseContainerEl.appendChild(catImg);
}
}
  })


function returnBreedGif() {

  var gifByBreed = data[i].id
  var breedUrl = "https://api.thecatapi.com/v1/images/search?breed_id=" + gifByBreed;

  fetch(breedUrl)
  .then(function(response){
if (response.ok){
  return response.json()

  .then(function(data) {
    console.log(data);
  })
}
else {
  alert("fetch error");
}
  }
  
  )}


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
      let breedName = document.createElement("option");
      breedName.setAttribute("id", data[i].name);
      breedName.textContent = data[i].name;
      breedList.appendChild(breedName);
      console.log(breedName);

      breedName.addEventListener("click", function(event){
        returnCatGif(event.target.id);

        console.log(event);
      })
    }

  });

//     breedName.forEach(function (name) {
//         let breedSelect = document.getElementById("breed-select");
// //         document.breedSelect.appendChild(breedName);
//     })
// }

fetch(catBreedUrl + catBreedApi)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log(data);
    for (var i = 0; i < response.length; i++) {
      // let breedImage = data.image;

      // breedName.map(function (name) {

      // })

      // picture for breed
      var responseContainerEl = document.querySelector("#catPic");
      responseContainerEl.innerHTML = "";

      var catImg = document.createElement("img");
      catImg.setAttribute("style", "width:200px; hight:200px;");
      catImg.setAttribute("src", response[0].image.url);

      //   Append 'catImg' to the <div>
      responseContainerEl.appendChild(catImg);
    

  }


  });


  //results based on breed

  function breedResults() {
    const pet = document.querySelectorAll('#breed-list');
    let selectedValue;
    for (const type of cat){
      if (type.select){
        selectedValue = type.value;
        break;
      }
  }

if (selectedValue === "breed-list"){
  return 
}
console.log(selectedValue);
} 