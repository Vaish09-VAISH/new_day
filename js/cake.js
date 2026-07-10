// =====================================
// cake.js
// =====================================

const cake = document.querySelector(".cake");

let clicked = false;

if(cake){

cake.addEventListener("click",function(){

if(clicked) return;

clicked=true;

// Cake Animation
cake.style.transform="scale(1.2)";
cake.innerHTML="🎂";

createConfetti();

// Birthday Message
setTimeout(()=>{

alert("🎉 Happy Birthday! Make a beautiful wish! ❤️");

},1200);

// Move to Final Page
setTimeout(()=>{

window.location.href="capsule.html";

},5000);

});

}