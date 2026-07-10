// ==============================
// Memories
// ==============================

const memories = [

{

title:"Our First Memory ❤️",

image:"images/memory1.jpg",

text:"Write your first beautiful memory here."

},

{

title:"The Funniest Day 😂",

image:"images/memory2.jpg",

text:"Describe one funny incident you both still laugh about."

},

{

title:"A Special Moment 🌸",

image:"images/memory3.jpg",

text:"Write another unforgettable memory."

},

{

title:"Thank You 💖",

image:"images/memory4.jpg",

text:"Tell her why she means so much to you."

},

{

title:"Forever Friends ✨",

image:"images/memory5.jpg",

text:"Write your heartfelt birthday message."

}

];

// ==============================
// Count Opened Stars
// ==============================

let opened = [];

// ==============================
// Open Memory
// ==============================

function showMemory(index){

    document.getElementById("memoryPopup").style.display="flex";

    document.getElementById("memoryImage").src=memories[index-1].image;

    document.getElementById("memoryTitle").innerHTML=memories[index-1].title;

    document.getElementById("memoryText").innerHTML=memories[index-1].text;

    if(!opened.includes(index)){

        opened.push(index);

    }

    if(opened.length===5){

        document.getElementById("finalStar").style.display="block";

    }

}

// ==============================
// Close Popup
// ==============================

function closePopup(){

    document.getElementById("memoryPopup").style.display="none";

}

// ==============================
// Close Popup Outside Click
// ==============================

window.onclick=function(event){

    const popup=document.getElementById("memoryPopup");

    if(event.target===popup){

        popup.style.display="none";

    }

}