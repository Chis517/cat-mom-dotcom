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
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            {
                var responseContainerEl = document.querySelector('#catGif');
                responseContainerEl.innerHTML = '';
                var catImg = document.createElement('img');
                catImg.setAttribute("style", "width:450px; hight:450px; ");
                catImg.setAttribute('src', response[i].url);
                //   Append 'catImg' to the <div>
                responseContainerEl.appendChild(catImg);
            }
        }
    })

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
            breedNameEl.setAttribute("value", data[i].id);
            breedNameEl.textContent = data[i].name;
            breedList.appendChild(breedNameEl);
            console.log(breedNameEl);
            
        }
    });

//results based on breed
function breedResults() {
    var selectedValue = document.getElementById("breed-list").value;
    console.log(selectedValue);

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://api.thecatapi.com/v1/breeds/" + selectedValue, requestOptions)
   .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        showResult = data => {
      let catCard = document.createElement("div");
      catCard.className = "tile is-parent"
     
      let catName = document.createElement("p");
      catName.innerHTML = data.name;
      let catInfoContainer = document.querySelector('#catBreed');
      catInfoContainer.appendChild(catName);
      let catDesc = document.createElement("li");
      catDesc.innerHTML = data.description;
      catInfoContainer.appendChild(catDesc);
      let catTemp = document.createElement("li");
      catTemp.innerHTML = "Temperament: " + data.temperament;
      catInfoContainer.appendChild(catTemp);
      let catOrg = document.createElement("li");
      catOrg.innerHTML = "Origin: " + data.origin;
      catInfoContainer.appendChild(catOrg);
      let catHypo = document.createElement("li");
      catHypo.innerHTML = "Hypoallergenic: " + data.hypoallergenic;
      catInfoContainer.appendChild(catHypo);
      let catBreedImg = document.createElement("img");
      catBreedImg.src = data.image.url;
      document.getElementById("#catBreed").appendChild(img);
      
    }
    showResult(data);
    
  })
      
};




var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
fetch("https://catfact.ninja/fact?limit=1&max_length=140", requestOptions)
    .then(response => response.text())
    .then(result => {
        showResult = result => {
            var catFactSplit = result.split(/[""""""]/);
            let catFact = document.createElement("p");
            catFact.innerHTML = catFactSplit[3];
            catFact.className = "cat-fact-text";
            console.log(catFact);
            let catFactContainer = document.querySelector('#cat-fact');
            catFactContainer.appendChild(catFact);
        }
        showResult(result);
    })
