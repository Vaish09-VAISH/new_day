// =======================================
// letters.js
// =======================================

// Letter Data

const letters = [

{
title:"💙 Open When You're Sad",
text:`Remember...

Bad days don't last forever.

You are much stronger than you think.

Whenever life feels difficult,
please remember there is always
someone who believes in you.

Take a deep breath.

Smile.

Everything will be alright. ❤️`
},

{
title:"😂 Open When You Need A Smile",
text:`Hey!

If you're reading this,

I'm officially trying to make you smile.

Remember all the silly moments
we laughed until our stomachs hurt?

Now smile...

Mission accomplished? 😄`
},

{
title:"🌸 Open When You Miss Me",
text:`Distance only separates places.

Never hearts.

Whenever you miss me,

look at the sky,

listen to your favorite song,

or simply remember our memories.

I'll always be there for you. ❤️`
},

{
title:"⭐ Open When You Need Motivation",
text:`Don't underestimate yourself.

You've already overcome so many things.

Keep believing.

Keep smiling.

Keep moving forward.

I know you'll achieve everything
you dream of.

I'm always cheering for you. 🌟`
},

{
title:"❤️ Open Anytime",
text:`Happy Birthday!

Thank you for being such an amazing person.

Thank you for every laugh,
every conversation,
every memory,
and every moment.

May your life always be filled
with happiness and love.

You truly deserve it. ❤️`
}

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