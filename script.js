/* =================================
 Dinner Roulette Chompu V19 ❤️
 Main Controller CLEAN
 PART 2
================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


// ===============================
// START SCREEN 💕
// ===============================


const startBtn =
document.getElementById("startBtn");


const startScreen =
document.getElementById("startScreen");



if(startBtn){


startBtn.onclick=()=>{


if(startScreen){

startScreen.style.display="none";

}



const music =
document.getElementById("bgMusic");



if(music){

music.volume=0.5;

music.play()
.catch(()=>{});

}



if(typeof createHeart==="function"){

createHeart();

}



if(typeof completeOpenMission==="function"){

completeOpenMission();

}



};


}





// ===============================
// SPIN BUTTON 🎡
// ===============================


const spinBtn =
document.getElementById("spinBtn");



if(spinBtn){



spinBtn.onclick=()=>{


console.log(
"🎡 CLICK SPIN"
);



if(typeof window.spinWheel==="function"){


window.spinWheel();



}

else{


console.error(
"ไม่พบ wheel.js"
);



}



};



}







// ===============================
// MODE SYSTEM 👫
// ===============================


const modeButtons =
document.querySelectorAll(".mode");



modeButtons.forEach(btn=>{



btn.onclick=function(){



modeButtons.forEach(b=>{


b.classList.remove("active");


});



this.classList.add("active");



window.currentMode =
this.dataset.mode;



const name =
document.getElementById(
"partnerName"
)?.value
||
"Chompu";



const msg =
document.getElementById(
"chooserMessage"
);



if(msg){



if(window.currentMode==="ฉัน"){


msg.innerHTML=
"🌸 วันนี้ฉันเลือกให้";


}


else if(window.currentMode==="แฟน"){


msg.innerHTML=
`💕 วันนี้ ${name} เลือกให้`;


}


else{


msg.innerHTML=
"🎲 ให้หัวใจเลือก";


}



}



};



});







// ===============================
// MUSIC 🎵
// ===============================


const music =
document.getElementById("bgMusic");


const musicBtn =
document.getElementById("musicBtn");



if(musicBtn && music){



musicBtn.onclick=()=>{



if(music.paused){


music.play();


musicBtn.innerHTML=
"⏸️ ปิดเพลง";


}

else{


music.pause();


musicBtn.innerHTML=
"🎵 เปิดเพลง";


}



};



}







// ===============================
// SAVE IMAGE BUTTON
// ===============================


const saveBtn =
document.getElementById("saveImageBtn");



if(saveBtn){



saveBtn.onclick=()=>{



if(typeof saveShareImage==="function"){


saveShareImage();


}



};



}







// ===============================
// SHARE BUTTON
// ===============================


const shareBtn =
document.getElementById("shareBtn");



if(shareBtn){



shareBtn.onclick=()=>{


if(typeof shareToChompu==="function"){


shareToChompu();


}



};



}







// ===============================
// THEME
// ===============================


const themeBtn =
document.getElementById("themeBtn");



if(themeBtn){



themeBtn.onclick=()=>{


if(typeof toggleTheme==="function"){


toggleTheme();


}



};



}







// ===============================
// HEART EFFECT
// ===============================


window.createHeart=function(){



const heart =
document.createElement("div");



heart.className="heart";


heart.innerHTML=
"❤️";



heart.style.left=
Math.random()*90+"%";



heart.style.bottom=
"20px";



document.body.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},2000);



};





console.log(
"❤️ Script V19 Ready"
);



});
