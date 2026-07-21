/* =================================
 Dinner Roulette V15 ❤️
 Main Controller FINAL
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



if(startScreen)

startScreen.style.display="none";





const music=

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




if(musicBtn)


musicBtn.innerHTML=

"⏸️ ปิดเพลง";



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
// LIKE BUTTON 👍
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








// SMART


if(typeof saveLikeFood==="function"){



saveLikeFood(food);



}






// MISSION


if(typeof completeLikeMission==="function"){



completeLikeMission();



}







showToast(

`❤️ ชอบ ${food}`

);







if(typeof createHeart==="function"){



createHeart();



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

"⭐ บันทึกเมนูโปรดแล้ว"

);







if(typeof createHeart==="function"){



createHeart();



}





};



}









// ===============================
// SHARE
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









// ===============================
// HEART EFFECT ❤️
// ===============================


function createHeart(){



const heart=

document.createElement(
"div"
);




heart.className=

"heart";



heart.innerHTML=

[

"❤️",

"💕",

"💗",

"💖"

]

[

Math.floor(

Math.random()*4

)

];







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




}





window.createHeart=

createHeart;









// ===============================
// TOAST
// ===============================


function showToast(text){



const toast=

document.createElement(
"div"
);




toast.className=

"favorite-toast";



toast.innerHTML=text;





document.body.appendChild(
toast
);






setTimeout(()=>{



toast.remove();



},2000);



}





window.showToast=

showToast;









});
