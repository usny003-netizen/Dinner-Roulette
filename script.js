/* =================================
 Dinner Roulette Chompu V17 ❤️
 Main Controller FIX FINAL
================================= */


document.addEventListener(

"DOMContentLoaded",

()=>{



// ===============================
// START SCREEN 💕
// ===============================


const startBtn =

document.getElementById(
"startBtn"
);



const startScreen =

document.getElementById(
"startScreen"
);





if(startBtn){



startBtn.onclick=()=>{



if(startScreen){


startScreen.style.display="none";


}





const music =

document.getElementById(
"bgMusic"
);



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


const spinBtn=

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


const autoBtn=

document.getElementById(
"autoBtn"
);



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

document.getElementById(
"likeBtn"
);



if(likeBtn){



likeBtn.onclick=()=>{



const food=

document.getElementById(
"foodResult"
)?.innerText;





if(!food || food==="-")


return;







if(typeof saveLikeFood==="function"){



saveLikeFood(
food
);


}






if(typeof completeLikeMission==="function"){



completeLikeMission();


}






if(typeof createHeart==="function"){



createHeart();


}







if(typeof showToast==="function"){



showToast(

`❤️ ชอบ ${food}`

);


}




};



}









// ===============================
// REROLL 🚫
// ===============================


const rerollBtn=

document.getElementById(
"rerollBtn"
);



if(rerollBtn){



rerollBtn.onclick=()=>{



const food=

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


const favoriteBtn=

document.getElementById(
"favoriteBtn"
);



if(favoriteBtn){



favoriteBtn.onclick=()=>{



const food=

document.getElementById(
"foodResult"
)?.innerText;



const drink=

document.getElementById(
"drinkResult"
)?.innerText;



const dessert=

document.getElementById(
"dessertResult"
)?.innerText;






if(!food || food==="-")

return;







if(typeof saveFavorite==="function"){



saveFavorite({

food:food,

drink:drink,

dessert:dessert

});



}







};



}









// ===============================
// MUSIC 🎵
// ===============================


const music=

document.getElementById(
"bgMusic"
);



const musicBtn=

document.getElementById(
"musicBtn"
);



const musicSelect=

document.getElementById(
"musicSelect"
);







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



};



}









// ===============================
// SHARE 📤
// ===============================


const shareBtn=

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


const themeBtn=

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
