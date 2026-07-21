/* =================================
 Dinner Roulette V15 ❤️
 Main Controller FINAL 🎮💕
================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{



// ===============================
// START SCREEN ❤️
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



if(typeof completeOpenMission==="function"){

completeOpenMission();

}



if(typeof createHeart==="function"){

createHeart();

}


};


}








// ===============================
// MUSIC SYSTEM 🎵
// ===============================


const music =
document.getElementById("bgMusic");


const musicBtn =
document.getElementById("musicBtn");


const musicSelect =
document.getElementById("musicSelect");





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







if(musicSelect && music){


musicSelect.onchange=()=>{


music.src=

musicSelect.value;


music.play();



if(musicBtn)

musicBtn.innerHTML=

"⏸️ ปิดเพลง";


};



}








// ===============================
// AUTO SPIN 💖
// ===============================


const autoBtn=

document.getElementById("autoBtn");



let autoRunning=false;



if(autoBtn){



autoBtn.onclick=()=>{


if(autoRunning)

return;



autoRunning=true;


autoBtn.innerHTML=

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


autoBtn.innerHTML=

"💖 สุ่มจนกว่าจะถูกใจ";


}



},6500);



};



}








// ===============================
// LIKE 👍
// ===============================


const likeBtn=

document.getElementById("likeBtn");



if(likeBtn){



likeBtn.onclick=()=>{


let food=

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
// FAVORITE ⭐
// ===============================


const favoriteBtn=

document.getElementById("favoriteBtn");



if(favoriteBtn){



favoriteBtn.onclick=()=>{


let food=

document.getElementById(
"foodResult"
)?.innerText;



if(!food || food==="-")

return;





if(typeof saveFavorite==="function"){


saveFavorite({

food:food,

drink:"🥤 น้ำหวาน",

dessert:"🍰 ของหวาน"

});


}




showToast(

"⭐ เพิ่มเมนูโปรดแล้ว"

);



createHeart();



};



}










// ===============================
// REROLL 🚫
// ===============================


const rerollBtn=

document.getElementById("rerollBtn");



if(rerollBtn){



rerollBtn.onclick=()=>{



let food=

document.getElementById(
"foodResult"
)?.innerText;



if(food && food!=="-" &&

typeof addAvoid==="function"){



addAvoid(food);


}




if(typeof spinWheel==="function"){


spinWheel();


}



};



}










// ===============================
// SHARE 📤
// ===============================


const shareBtn=

document.getElementById("shareBtn");



if(shareBtn){



shareBtn.onclick=()=>{


if(typeof shareToChompu==="function"){


shareToChompu();


}


};



}









// ===============================
// SAVE SHARE IMAGE 📸
// ===============================


const saveImageBtn=

document.getElementById(
"saveImageBtn"
);



if(saveImageBtn){



saveImageBtn.onclick=()=>{


if(typeof saveShareImage==="function"){


saveShareImage();


}



};



}









// ===============================
// HEART EFFECT ❤️
// ===============================


function createHeart(){



let heart=

document.createElement("div");



heart.className="heart";


heart.innerHTML=

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





heart.style.left=

Math.random()*90+"%";



document.body.appendChild(
heart
);





setTimeout(()=>{


heart.remove();



},2000);



}




window.createHeart=

createHeart;









// ===============================
// TOAST
// ===============================


function showToast(text){



const toast=

document.createElement("div");



toast.className=

"favorite-toast";


toast.innerHTML=text;



document.body.appendChild(toast);





setTimeout(()=>{


toast.remove();


},2000);



}



window.showToast=

showToast;





});
