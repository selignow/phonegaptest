// Play audio
//
alert("playmedia.js aufgerufen");

function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio
    my_media.play();
   
}

playAudio("http://one.delius-books.de/sixcms/media.php/166/ENG%20108.mp3");
 alert("playmedia.js function ende" + (url));
