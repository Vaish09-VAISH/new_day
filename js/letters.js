// =======================================
// letters.js
// =======================================

// Letter Data

const letters = [

,

{
title:"😂 Open When You Need A Smile",
text:`Hey!

hee school alli eshtu vishya agide
* Samarth mummy vishya nenpisko
* sister teresa torture na nenpisko....
* nam house jagala,sports day journey...
* gautham hendthi joke nenpisko...
* namdu sibili du takraru....
* vinutha ma'am nan bogidakke regsiddu...
ennu heladashtu ede.............

Now smile...

Mission accomplished? 😄`
},

{
title:"⭐ Open When You Need to laugh",
text: `

R u pencil by any chance
think na....
because you are looking like an apsara. 

engide nan line....?🌟`
},


];

// =============================
// Elements
// =============================

const popup = document.getElementById("popup");
const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");

// =============================
// Open Letter
// =============================

function openLetter(index){

popup.style.display="flex";

letterTitle.innerHTML=letters[index-1].title;

letterText.innerHTML=letters[index-1].text;

popup.style.animation="fadeIn .4s";

}

// =============================
// Close Letter
// =============================

function closeLetter(){

popup.style.display="none";

}

// =============================
// Close Popup Outside
// =============================

window.addEventListener("click",function(e){

if(e.target===popup){

popup.style.display="none";

}

});

// =============================
// Escape Key Support
// =============================

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

popup.style.display="none";

}

});

// =============================
// Simple Fade Animation
// =============================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fadeIn{

from{

opacity:0;
transform:scale(.8);

}

to{

opacity:1;
transform:scale(1);

}

}

`;

document.head.appendChild(style);