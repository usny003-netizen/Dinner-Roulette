/* =================================
   Dinner Roulette ❤️
   Main Controller 
================================= */



// =========================
// ELEMENT
// =========================


const startBtn = document.getElementById("startBtn");

const startScreen = document.getElementById("startScreen");

const app = document.getElementById("app");


const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

const muteBtn = document.getElementById("muteBtn");

const musicSelect = document.getElementById("musicSelect");



const clickSound = new Audio("click.mp3");






// =========================
// START APP
// =========================


if(startBtn){


startBtn.addEventListener("click",()=>{


    playClick();


    startScreen.style.display="none";


    app.style.display="block";


    music.play()
    .catch(()=>{});



});


}







// =========================
// MUSIC CONTROL
// =========================



if(musicBtn){


musicBtn.addEventListener("click",()=>{


    playClick();


    if(music.paused){


        music.play();


        musicBtn.innerHTML =
        "⏸️ หยุดเพลง";


    }

    else{


        music.pause();


        musicBtn.innerHTML =
        "🎵 เปิดเพลง";


    }



});



}





if(muteBtn){


muteBtn.addEventListener("click",()=>{


    playClick();


    music.muted = !music.muted;



    muteBtn.innerHTML =

    music.muted

    ?

    "🔊 เปิดเสียง"

    :

    "🔇 ปิดเสียง";



});



}







// =========================
// CHANGE MUSIC
// =========================



if(musicSelect){


musicSelect.addEventListener("change",()=>{


    playClick();


    music.src =

    musicSelect.value;



    music.play()
    .catch(()=>{});



});



}









// =========================
// BUTTON SOUND
// =========================



function playClick(){


    clickSound.currentTime = 0;


    clickSound.play()

    .catch(()=>{});


}









// =========================
// ALL BUTTON CLICK EFFECT
// =========================



document.querySelectorAll("button")

.forEach(button=>{


    button.addEventListener(

    "click",

    ()=>{


        playClick();


    }

    );


});










// =========================
// REROLL
// =========================



const rerollBtn =

document.getElementById("rerollBtn");



if(rerollBtn){


rerollBtn.addEventListener(

"click",

()=>{


    playClick();



    const spin =

    document.getElementById("spinBtn");



    if(spin){

        spin.click();

    }



});


}








// =========================
// AUTO RANDOM
// =========================



const autoBtn =

document.getElementById("autoBtn");



if(autoBtn){



autoBtn.addEventListener(

"click",

()=>{


    playClick();



    let count = 0;



    let timer = setInterval(()=>{


        const spin =

        document.getElementById("spinBtn");



        if(spin){

            spin.click();

        }



        count++;




        if(count>=3){


            clearInterval(timer);


        }



    },5500);



});


}








// =========================
// LIKE RESULT
// =========================



const likeBtn =

document.getElementById("likeBtn");



if(likeBtn){


likeBtn.addEventListener(

"click",

()=>{


    playClick();


    alert(

    "❤️ ตกลง! วันนี้กินเมนูนี้กัน"

    );


});


}







// =========================
// SHARE
// =========================



const shareBtn =

document.getElementById("shareBtn");



if(shareBtn){


shareBtn.addEventListener(

"click",

()=>{


const food =

window.currentFood ||

"อาหารอร่อย";



if(navigator.share){


navigator.share({

title:"❤️ Dinner Roulette",

text:

`วันนี้กิน ${food} กัน 🍽️`

});


}

else{


alert(

`❤️ วันนี้กิน ${food}`

);


}



});


}
