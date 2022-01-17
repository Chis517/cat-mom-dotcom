let catGifApiKey = "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244";
let catGifUrl = "https://api.thecatapi.com/v1/images/search?mime_types=gif";
let catBreedApi = "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244";
let catBreedUrl = "https://api.thecatapi.com/v1/breeds?";
let breedList = document.getElementById("breed-list");
let catFactContainer = document.querySelector("#cat-fact");
let factBtn = document.getElementById("factBtn");
let catGifContainer = document.querySelector('#catGif');
let gifBtn = document.getElementById("gifBtn");
let catInfoContainer = document.querySelector('#catBreed');

gifBtn.addEventListener('click', returnCatGif);
factBtn.addEventListener('click', returnCatFact);

// function that displays random cat facts!
function returnCatFact() {
  var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  catFactContainer.textContent = ''
  fetch("https://catfact.ninja/fact?limit=1&max_length=140", requestOptions)
    .then(response => response.text())
    .then(result => {
      showResult = result => {
        var catFactSplit = result.split(/[""""""]/);
        let catFact = document.createElement("p");
        catFact.innerHTML = catFactSplit[3];
        catFact.className = "cat-fact-display";
        catFactContainer.appendChild(catFact);
      }
    showResult(result);
    });
};

returnCatFact()

// return cat pictures from cat gif api
function returnCatGif() {
  catGifContainer.textContent = ''
  fetch(catGifUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      for (var i = 0; i < response.length; i++) {
        var catImg = document.createElement('img');
        catImg.setAttribute("style", "width:450px; hight:450px; ");
        catImg.setAttribute('src', response[i].url);
        catImg.className = "cat-gif";
        catGifContainer.appendChild(catImg);
      }
    });
};

returnCatGif()

function returnCatBreed() {
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "a41b1fc9-3c83-4302-a5d5-4f2c67c5c244");
};

// return breed information from catApi
fetch(catBreedUrl + catBreedApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // get list of names from api and append it to the search bar
    for (var i = 0; i < data.length; i++) {
      let breedNameEl = document.createElement("option");
      breedNameEl.setAttribute("value", data[i].id);
      breedNameEl.textContent = data[i].name;
      breedList.appendChild(breedNameEl);
      breedNameEl.addEventListener("click", function (event) {
      returnCatGif(event.target.id);
      console.log(event);
      })
    }
});

// Displays selected breed data
function breedResults() {
  var selectedValue = document.getElementById("breed-list").value;

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  catInfoContainer.textContent = ''
  fetch("https://api.thecatapi.com/v1/images/search?breed_ids=" + selectedValue, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
        showResult = data => {
          for (var i = 0; i < data.length; i++) {
            let catCard = document.createElement("div");
            catCard.className = "tile is-parent"

            let catName = document.createElement("p");
            catName.className = "has-text-centered is-size-2"
            catName.innerHTML = data[i].breeds[i].name;

            let catInfoContainer = document.querySelector('#catBreed');
            catInfoContainer.appendChild(catName);

            let catBreedImg = document.createElement("img");
            catBreedImg.src = data[i].url;
            catBreedImg.className = "image is-4by3 mb-3 pt-3 pb-3"
            catInfoContainer.appendChild(catBreedImg)

            let catDesc = document.createElement("p");
            catDesc.innerHTML = data[i].breeds[i].description;
            catInfoContainer.appendChild(catDesc);

            let catLife = document.createElement("p");
            catLife.innerHTML = "Temperament: " + data[i].breeds[i].temperament;
            catInfoContainer.appendChild(catLife);

            let catTemp = document.createElement("p");
            catTemp.innerHTML = "Lifespan: " + data[i].breeds[i].life_span + " years";
            catInfoContainer.appendChild(catTemp);

            let catOrg = document.createElement("p");
            catOrg.innerHTML = "Origin: " + data[i].breeds[i].origin;
            catInfoContainer.appendChild(catOrg);

            let catHypo = document.createElement("p");
            catHypo.innerHTML = "Hypoallergenic: " + data[i].breeds[i].hypoallergenic;
            catInfoContainer.appendChild(catHypo);

            let catMore = document.createElement("a");
            catMore.setAttribute('href', data[i].breeds[i].vcahospitals_url);
            catMore.innerHTML = "Learn more at here!";
            catInfoContainer.appendChild(catMore);
          }
        }
        showResult(data);
    });
};