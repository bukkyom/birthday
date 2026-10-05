
// check the script is running
console.log("script is running!");

// start off telling user to make a wish
// as each flame is clicked, count down
// on click replace flame with smoke
// count down on screen as candle is blown out
// when all flames are clicked or flame amount = 0, change text to say "Happy birthday!" 
const top_message = document.getElementById("top-text");
console.log(top_message);

// creates an array of all ids on page including flame
const flames = document.querySelectorAll('[id^="flame"]');
console.log("flames found:", flames.length); // checks all flames are accounted
let counter= 0; // define counter for how many flames are clicked
let flames_remaining= flames.length; // counter for how many flames are left

// for each flame in the array, if its clicked then add it to out (makes it transparent)
flames.forEach(flame => {
  flame.addEventListener('click', () => {
    console.log("clicked", flame.id); // tracks which candle is clicked
    if(flame.classList.contains('out')){
        return;
    }
    counter++;  // increment counter for flames
    console.log("clicked =", counter);
    flames_remaining -= counter; // adjust amount of flames left
    console.log("flames left = ", flames_remaining);
    flame.classList.add('out');
  });
});



// on top and personal birthday note on bottom
// reset button to do it again