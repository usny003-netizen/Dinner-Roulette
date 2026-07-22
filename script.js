/* =================================
 Dinner Roulette Chompu V21 ❤️
 Main Controller FINAL CLEAN
================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"❤️ Script V21 Ready"
);



// ===============================
// START SCREEN 💕
// ===============================


const startBtn =
document.getElementById("startBtn");


const startScreen =
document.getElementById("startScreen");


const music =
document.getElementById("bgMusic");



if(startBtn){


startBtn.onclick=()=>{


if(startScreen){

startScreen.style.display="none";

}



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
// LIKE BUTTON ⭐
// ===============================


const likeBtn =
document.getElementById("likeBtn");



if(likeBtn){


likeBtn.onclick=()=>{


if(!window.currentFood){


alert(
"❤️ กรุณาหมุนวงล้อก่อน"
);


return;


}



if(typeof saveFavorite==="function"){


saveFavorite({

food:
window.currentFood.name,

drink:
window.currentFood.drink,

dessert:
window.currentFood.dessert

});


}



if(typeof completeLikeMission==="function"){

completeLikeMission();

}



};



}





// ===============================
// REROLL 🙅
// ===============================


const rerollBtn =
document.getElementById("rerollBtn");



if(rerollBtn){


rerollBtn.onclick=()=>{


if(typeof window.spinWheel==="function"){


window.spinWheel();


}



};



}





// ===============================
// SAVE IMAGE 📸
// ===============================


const saveBtn =
document.getElementById("saveImageBtn");



if(saveBtn){


saveBtn.onclick=()=>{


console.log(
"📸 SAVE IMAGE"
);



if(typeof saveShareImage==="function"){


saveShareImage();


}

else{


console.error(
"ไม่มี share.js saveShareImage"
);


}



};



}





// ===============================
// SHARE 📤
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
// MUSIC SYSTEM 🎵
// ===============================


const musicBtn =
document.getElementById("musicBtn");


const musicSelect =
document.getElementById("musicSelect");




// เปิดปิดเพลง


if(musicBtn && music){


musicBtn.onclick=()=>{


if(music.paused){


music.play()
.catch(()=>{});


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





// เปลี่ยนเพลง


if(musicSelect && music){


musicSelect.onchange=function(){



music.src=this.value;


music.load();



music.play()
.catch(()=>{});



if(musicBtn){

musicBtn.innerHTML=
"⏸️ ปิดเพลง";

}



if(typeof showToast==="function"){

showToast(
"🎵 เปลี่ยนเพลงแล้ว"
);

}



};



}





// ===============================
// MODE SYSTEM 👫
// ===============================


const modes =
document.querySelectorAll(".mode");



modes.forEach(btn=>{


btn.onclick=function(){



modes.forEach(b=>{

b.classList.remove("active");

});



this.classList.add("active");



window.currentMode =
this.dataset.mode;



const name =
document.getElementById("partnerName")
?.value
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
// THEME 🌙
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
// HEART EFFECT ❤️
// ===============================


window.createHeart=function(){



const heart =
document.createElement("div");



heart.className="heart";


heart.innerHTML=
"❤️";



heart.style.left =
Math.random()*90+"%";


heart.style.bottom =
"20px";



document.body.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},2500);



};





});
