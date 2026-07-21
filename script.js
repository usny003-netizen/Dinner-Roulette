/* =================================
 Dinner Roulette Chompu V17 ❤️
 Main Controller FINAL
================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


// ===============================
// GLOBAL
// ===============================


window.currentMode = "ฉัน";




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



// MUSIC

const music =
document.getElementById("bgMusic");


if(music){


music.volume=0.5;


music.play()
.catch(()=>{});


}



// MISSION

if(typeof completeOpenMission==="function"){

completeOpenMission();

}



createHeart();


};



}





// ===============================
// MODE SELECT 👫
// ===============================


const modeButtons =
document.querySelectorAll(".mode");


const chooserMessage =
document.getElementById(
"chooserMessage"
);



modeButtons.forEach(btn=>{


btn.onclick=()=>{


modeButtons.forEach(b=>{

b.classList.remove(
"active"
);

});



btn.classList.add(
"active"
);



window.currentMode =
btn.dataset.mode;



updateChooser();



};



});




function updateChooser(){


let name =

document.getElementById(
"partnerName"
)?.value
||
"Chompu";



if(!chooserMessage)
return;



if(window.currentMode==="ฉัน"){


chooserMessage.innerHTML =

`🌸 วันนี้ฉันเลือกให้ ${name}`;


}


else if(window.currentMode==="แฟน"){


chooserMessage.innerHTML =

`💕 วันนี้ ${name} เลือกให้`;


}


else{


chooserMessage.innerHTML =

`🎲 ให้โชคชะตาเลือกให้เรา ❤️`;


}


}



updateChooser();





// ===============================
// PARTNER NAME
// ===============================


const partnerName =
document.getElementById(
"partnerName"
);



if(partnerName){


partnerName.oninput=()=>{


localStorage.setItem(
"partnerName",
partnerName.value
);


updateChooser();


};



const saveName =

localStorage.getItem(
"partnerName"
);



if(saveName){


partnerName.value =
saveName;


}


}





// ===============================
// SPIN BUTTON 🎡
// ===============================


const spinBtn =
document.getElementById(
"spinBtn"
);



if(spinBtn){


spinBtn.onclick=()=>{


if(typeof spinWheel==="function"){


spinWheel();


}



};


}






// ===============================
// AUTO SPIN 💖
// ===============================


const autoBtn =
document.getElementById(
"autoBtn"
);



let autoRunning=false;



if(autoBtn){


autoBtn.onclick=()=>{


if(autoRunning)
return;



autoRunning=true;



autoBtn.innerHTML =
"🎡 กำลังสุ่ม...";



let count=0;



let timer=setInterval(()=>{


if(typeof spinWheel==="function"){


spinWheel();


}



count++;



if(count>=3){


clearInterval(timer);


autoRunning=false;


autoBtn.innerHTML =
"💖 สุ่มจนกว่าจะถูกใจ";


}



},3000);



};



}





// ===============================
// LIKE 👍
// ===============================


const likeBtn =
document.getElementById(
"likeBtn"
);



if(likeBtn){


likeBtn.onclick=()=>{


const food =

document.getElementById(
"foodResult"
)?.innerText;



if(!food || food==="-")


return;



if(typeof saveLikeFood==="function"){


saveLikeFood(food);


}



if(typeof completeLikeMission==="function"){


completeLikeMission();


}



showToast(
`❤️ ชอบ ${food}`
);



createHeart();


};



}





// ===============================
// REROLL 🚫
// ===============================


const rerollBtn =
document.getElementById(
"rerollBtn"
);



if(rerollBtn){


rerollBtn.onclick=()=>{


const food =

document.getElementById(
"foodResult"
)?.innerText;



if(food && food!=="-"){


if(typeof addAvoid==="function"){


addAvoid(food);


}


}



if(typeof spinWheel==="function"){


spinWheel();


}



};


}





// ===============================
// FAVORITE ⭐
// ===============================


const favoriteBtn =
document.getElementById(
"favoriteBtn"
);



if(favoriteBtn){


favoriteBtn.onclick=()=>{


const food =

document.getElementById(
"foodResult"
)?.innerText;



if(!food || food==="-")
return;



if(typeof saveFavorite==="function"){


saveFavorite(food);


}



showToast(
"⭐ เพิ่มเมนูโปรดแล้ว"
);



createHeart();


};



}





// ===============================
// MUSIC 🎵
// ===============================


const music =
document.getElementById(
"bgMusic"
);



const musicBtn =
document.getElementById(
"musicBtn"
);



const musicSelect =
document.getElementById(
"musicSelect"
);



if(musicBtn && music){


musicBtn.onclick=()=>{


if(music.paused){


music.play();


musicBtn.innerHTML =
"⏸️ ปิดเพลง";


}


else{


music.pause();


musicBtn.innerHTML =
"🎵 เปิดเพลง";


}


};


}




if(musicSelect && music){


musicSelect.onchange=()=>{


music.src =
musicSelect.value;


music.play();


};


}





// ===============================
// SHARE 📤
// ===============================


const shareBtn =
document.getElementById(
"shareBtn"
);



if(shareBtn){


shareBtn.onclick=()=>{


if(typeof shareToChompu==="function"){


shareToChompu();


}



};


}





// ===============================
// THEME 🌙
// ===============================


const themeBtn =
document.getElementById(
"themeBtn"
);



if(themeBtn){


themeBtn.onclick=()=>{


if(typeof toggleTheme==="function"){


toggleTheme();


}



};



}






});






// ===============================
// HEART EFFECT ❤️
// ===============================


function createHeart(){


const heart =
document.createElement(
"div"
);



heart.className =
"heart";



heart.innerHTML =

[
"❤️",
"💕",
"💖",
"💗"
]

[
Math.floor(
Math.random()*4
)
];



heart.style.left =
Math.random()*90+"%";



document.body.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},2000);



}



window.createHeart =
createHeart;






// ===============================
// TOAST
// ===============================


function showToast(text){


const toast =
document.createElement(
"div"
);



toast.className =
"favorite-toast";



toast.innerHTML =
text;



document.body.appendChild(
toast
);



setTimeout(()=>{


toast.remove();


},2000);



}



window.showToast =
showToast;
