
// check the script is running
console.log("script is running!");

const replay_button = document.getElementById("replay-song");
const reset_button = document.getElementById("reset");

const blow = new Audio('freesound_community-blowing-out-candlewav-14441.mp3');
function blowCandle(){
    blow.play();
}

const song = new Audio('Heather_S_Roe-Daniel_Padgett_Birthday_Wishes.mp3');
function playSong(){
    song.play();
}
// start off telling user to make a wish
// as each flame is clicked, count down
// on click replace flame with smoke
// when all flames are clicked or flame amount = 0, change text to say "Happy birthday!" 
const top_message = document.getElementById("top-text");
const top2_message = document.getElementById("top2-text");
const top_message2 = document.getElementById("top-text2");
const countdown = document.getElementById("countdown");
console.log(countdown);

// creates an array of all ids on page including flame
const flames = document.querySelectorAll('[id^="flame"]');
console.log("flames found:", flames.length); // checks all flames are accounted
let flames_remaining= flames.length; // counter for how many flames are left

const bottom_message = document.getElementById("bottom-text");
const bottom_message2 = document.getElementById("bottom-text2");

// for each flame in the array, if its clicked then add it to out (makes it transparent)
flames.forEach(flame => {
  flame.addEventListener('click', () => {
    console.log("clicked", flame.id); // tracks which candle is clicked
    blowCandle(); 
    if(flame.classList.contains('out')){
        return;
    }
    // count down on screen as candle is blown out
    flames_remaining--; // adjust amount of flames left
    countdown.textContent = flames_remaining + " !!";
    if(flames_remaining == 0){
        top_message.textContent = null;
        top2_message.textContent = null;
        top_message2.textContent = "🎈 HAPPY BIRTHDAY JACK 🎈"
        countdown.textContent = null;
        bottom_message.textContent = "Something special for a special day. Please accept my digital cake.";
        bottom_message2.textContent = "I hope you have had a wonderful birthday!!! 🥳";
        replay_button.hidden = false;
        reset_button.hidden = false;

        setTimeout(() =>{ // NEED TO DELAY BY A SECOND OR TWO
            playSong(); 
        }, 1000);
    
        // have the replay button appear

    }

    console.log("flames left = ", flames_remaining);
    flame.classList.add('out');
  });
});


reset_button.addEventListener('click', () =>{
    // relight flames
    flames.forEach(flame => {
        flame.classList.remove('out');
    });
    // put back text for wishes
    top_message.textContent = "Blow out your candles and make a wish!";
    top2_message.textContent = "(Tap on flames to blow them out)";
    top_message2.textContent = ""; 
    
    // reset count
    flames_remaining = 5; 
    // hide bottom text again
    bottom_message.textContent = "";
    bottom_message2.textContent = "";
    // stop the song
    song.pause();
    song.currentTime = 0;
    // reset buttons
    replay_button.hidden = true;
    reset_button.hidden = true;
});

replay_button.addEventListener('click', () => {
    playSong();
});




// on top and personal birthday note on bottom
// reset button to do it again