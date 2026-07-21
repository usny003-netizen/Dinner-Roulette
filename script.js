/* =================================
 Dinner Roulette V12 ❤️
 Main Controller FINAL
================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{



// =====================
// START SCREEN 💕
// =====================


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



createHeart();



};


}









// =====================
// MUSIC SYSTEM 🎵
// =====================


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


music.src =

musicSelect.value;


music.play();



if(musicBtn){

musicBtn.innerHTML=

"⏸️ ปิดเพลง";

}


};


}











// =====================
// AUTO SPIN 🎡
// =====================


const autoBtn =
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




if(count>=5){



clearInterval(timer);



autoRunning=false;



autoBtn.innerHTML=

"💖 สุ่มจนกว่าจะถูกใจ";



}



},5200);



};



}











// =====================
// LIKE BUTTON 👍
// =====================



const likeBtn =

document.getElementById(
"likeBtn"
);



if(likeBtn){



likeBtn.onclick=()=>{



let food =

document.getElementById(
"foodResult"
).innerText;




if(food==="-" || !food)

return;






// SMART

if(typeof saveLikeFood==="function"){


saveLikeFood(food);


}





// MISSION

if(typeof completeLikeMission==="function"){


completeLikeMission();


}






createHeart();



};



}











// =====================
// REROLL / AVOID 🚫
// =====================



const rerollBtn =

document.getElementById(
"rerollBtn"
);



if(rerollBtn){



rerollBtn.onclick=()=>{



let food =

document.getElementById(
"foodResult"
).innerText;





if(food!=="-" && 
typeof addAvoid==="function"){



addAvoid(food);



}






if(typeof spinWheel==="function"){



spinWheel();



}




};



}











// =====================
// FAVORITE ⭐
// =====================


const favoriteBtn =

document.getElementById(
"favoriteBtn"
);



if(favoriteBtn){



favoriteBtn.onclick=()=>{



let food =

document.getElementById(
"foodResult"
).innerText;




if(food==="-")


return;






if(typeof saveFavorite==="function"){



saveFavorite({


food:food,


drink:"🥤 น้ำหวาน",


dessert:"🍰 ของหวาน"



});



}





createHeart();



};



}











// =====================
// RESET SMART 🧠
// =====================


const resetSmartBtn =

document.getElementById(
"resetSmartBtn"
);




if(resetSmartBtn){



resetSmartBtn.onclick=()=>{



if(typeof resetSmart==="function"){


resetSmart();


}



else{


localStorage.removeItem(
"smartFood"
);



location.reload();


}



};



}











// =====================
// HEART EFFECT ❤️
// =====================



function createHeart(){



let heart =

document.createElement(
"div"
);



heart.className="heart";



heart.innerHTML="❤️";



heart.style.left =

Math.random()*90+"%";



heart.style.bottom=

"20px";



document.body.appendChild(
heart
);





setTimeout(()=>{


heart.remove();



},2000);



}





window.createHeart=

createHeart;





});
