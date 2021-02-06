function changeColor() {

  document.querySelector('.shorts').style.backgroundColor = randomTopColor;

}


let topColor;
let shortsColor;


topColor = [

  "Blue",
  "Red",
  "Green",
  "Yellow",

];


shortsColor = [

  "Orange",
  "Purple",
  "Dark Blue",
  "White",

];


function matchColor() {

  // Change top color let dechange 
  const randomTopColorIndex = Math.floor(Math.random() * topColor.length);
  let randomTopColor = topColor[randomTopColorIndex];
  document.querySelector('.top').style.backgroundColor = randomTopColor;

  // dechange.style.backgroundColor;
  const randomShortsColorIndex = Math.floor(Math.random() * shortsColor.length);
  let randomShortsColor = shortsColor[randomShortsColorIndex];
  document.querySelector('.shorts').style.backgroundColor = randomShortsColor;

}
