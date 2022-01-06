// let catApiKey = "VXnSXclVjuSvQqVLtihJCbZ8Fz66qAOhMc4pyYy0";
// let catUrl = "http://cataas.com/#/cat/gif";


// function returnCatGif() {
//     fetch(catUrl + catApiKey)
//     .then(function(response) {
//         return response.json();
//     })
// }

var Cataas = require('cataas-api')
var cataas = new Cataas()

var gif = {
    Gif: true,
    Size: 'md',
    Text: "hey dude",
    Filter: "paint",
    TextSize: 35,
    TextColor: "LightBlue",
}
var resized = {
    Width: 300,
    Height: 200,
}
cataas.options = gif
cataas.options = resized


cataas.encode()
cataas.get()
    .then(readable => {
        const stream = new fs.createWriteStream('cat.png')
        readable.pipe(stream)
    })
    .catch(e => console.error(e))

    



