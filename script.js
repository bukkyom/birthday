
// check the script is running
console.log("script is running!");

const blow = new Audio('freesound_community-blowing-out-candlewav-14441.mp3');
function blowCandle(){
    blow.play();
}

const song = new Audio('Heather S. Roe & Daniel Padgett - Birthday Wishes.mp3');
function playSong(){
    song.play();
}
// start off telling user to make a wish
// as each flame is clicked, count down
// on click replace flame with smoke
// when all flames are clicked or flame amount = 0, change text to say "Happy birthday!" 
const top_message = document.getElementById("top-text");
const countdown = document.getElementById("countdown");
console.log(countdown);

// creates an array of all ids on page including flame
const flames = document.querySelectorAll('[id^="flame"]');
console.log("flames found:", flames.length); // checks all flames are accounted
let flames_remaining= flames.length; // counter for how many flames are left

const bottom_message = document.getElementById("bottom-text");

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
    top_message.textContent = "HAPPY BIRTHDAY JACK 🥳"
    countdown.textContent = null;
    bottom_message.textContent = "Something special for a special day. Please accept my digital cake." + '\n' + "I hope you have/had a wonderful birthday!!!";
    playSong();
    }

    console.log("flames left = ", flames_remaining);
    flame.classList.add('out');

    
  });
});






// on top and personal birthday note on bottom
// reset button to do it again