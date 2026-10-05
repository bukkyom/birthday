
// check the script is running
console.log("script is running!");
// creates an array of all ids on page including flame
const flames = document.querySelectorAll('[id^="flame"]');
console.log("flames found:", flames.length); // checks all flames are accounted

// for each flame in the array, if its clicked then add it to out (makes it transparent)
flames.forEach(flame => {
  flame.addEventListener('click', () => {
    console.log("clicked", flame.id); // tracks which candle is clicked
    flame.classList.add('out');
  });
});


 // start off telling user to make a wish
// as each flame is clicked, count down
// when all flames are clicked or flame amount = 0, change text to say "Happy birthday!" 
// on top and personal birthday note on bottom