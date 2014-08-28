// Play audio
//
//

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
alert("playAudio function definiert");

function bla() {alert("bla");}

// alert('DEU_ERW_108.mp3')