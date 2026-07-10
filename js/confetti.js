// =====================================
// confetti.js
// =====================================

function createConfetti(){

for(let i=0;i<180;i++){

const confetti=document.createElement("div");

confetti.classList.add("confetti");

// Random Position
confetti.style.left=Math.random()*100+"vw";

// Random Delay
confetti.style.animationDelay=Math.random()*3+"s";

// Random Duration
confetti.style.animationDuration=
(2+Math.random()*3)+"s";

// Random Rotation
confetti.style.transform=
`rotate(${Math.random()*360}deg)`;

// Random Size
const size=6+Math.random()*8;

confetti.style.width=size+"px";
confetti.style.height=size+"px";

// Random Colors

const colors=[

"#FFD166",
"#EF476F",
"#06D6A0",
"#118AB2",
"#FFFFFF",
"#F78FB3",
"#A29BFE",
"#55EFC4"

];

confetti.style.background=
colors[Math.floor(Math.random()*colors.length)];

document.body.appendChild(confetti);

// Remove

setTimeout(()=>{

confetti.remove();

},5000);

}

}