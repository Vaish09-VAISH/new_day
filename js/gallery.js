// ==============================
// Gallery Page
// ==============================

// Flip cards on mobile/tablet
const cards = document.querySelectorAll(".flip-card");

cards.forEach((card) => {

    card.addEventListener("click", function () {

        const inner = this.querySelector(".flip-card-inner");

        if (inner.style.transform === "rotateY(180deg)") {

            inner.style.transform = "rotateY(0deg)";

        } else {

            inner.style.transform = "rotateY(180deg)";

        }

    });

});


// ==============================
// Fade-in Animation
// ==============================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    document.body.style.transition = "opacity 1s";

    setTimeout(() => {

        document.body.style.opacity = "1";

    }, 200);

});


// ==============================
// Continue Button Animation
// ==============================

const button = document.querySelector("button");

if(button){

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

}