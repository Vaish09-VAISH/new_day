// ==============================
// Gift Opening
// ==============================

const giftBox = document.getElementById("giftBox");

const videoSection = document.getElementById("videoSection");

const birthdayVideo = document.getElementById("birthdayVideo");

function openGift(){

    giftBox.style.transform="scale(0)";

    giftBox.style.opacity="0";

    setTimeout(()=>{

        giftBox.style.display="none";

        videoSection.style.display="block";

        videoSection.style.opacity="0";

        videoSection.style.transition="opacity 1s";

        setTimeout(()=>{

            videoSection.style.opacity="1";

        },100);

        birthdayVideo.play();

    },600);

}


// ==============================
// Video Finished
// ==============================

birthdayVideo.addEventListener("ended",()=>{

    alert("🎉 I hope you enjoyed the surprise! One more gift is waiting for you ❤️");

});


// ==============================
// Fade-in Animation
// ==============================

window.onload=function(){

document.body.style.opacity="0";

document.body.style.transition="opacity 1s";

setTimeout(()=>{

document.body.style.opacity="1";

},200);

};