// ==============================
// Loading Screen
// ==============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.display = "none";

        }, 2500);

    }

});

// ==============================
// Background Music
// ==============================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

if (musicBtn && music) {

    musicBtn.addEventListener("click", function () {

        if (!playing) {

            music.play();
            playing = true;
            musicBtn.innerHTML = "🔊";

        } else {

            music.pause();
            playing = false;
            musicBtn.innerHTML = "🎵";

        }

    });

}

// ==============================
// Begin Journey Button
// ==============================

function startJourney(){

    document.body.style.opacity="0";

    setTimeout(function(){

        window.location.href="memories.html";

    },700);

}

// ==============================
// Fade In
// ==============================

document.body.style.opacity=0;

window.onload=function(){

    document.body.style.transition="opacity 1s";

    document.body.style.opacity=1;

}