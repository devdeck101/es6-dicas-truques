/**
 * Arrow Function =>
 * Executanto utilizando Visual Studio code e Node JS
 */
/*
var wordList = function(words){
    console.log(words)
}
var wordList = (words) => console.log(words)

var wordList = words => console.log(words)

var arrOfWords = ["Developer", "Deck", "101"]

wordList(arrOfWords)
*/


var channel = {
    name: "DeveloperDeck101",
    videos: ["Angular 4 Aplicação completa", "React JS e Bootstrap 4", "Tutorial de Node JS e Express"],
    printVideos: function(){
        //var _this = this;
        this.videos.forEach((video) => {
            var str = this.name + ' recorded ' + video
            console.log(str)
        }/*.bind(this)*/)
    }
}

channel.printVideos()
