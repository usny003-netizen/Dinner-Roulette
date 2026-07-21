/* =================================
 Dinner Roulette V10 ❤️
 Main Controller
================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{



// =========================
// START SCREEN
// =========================


const startScreen =
document.getElementById(
"startScreen"
);



const startBtn =
document.getElementById(
"startBtn"
);



if(startBtn){


startBtn.onclick=()=>{


startScreen.style.display="none";



// เปิดเพลง

const music =
document.getElementById(
"bgMusic"
);



if(music){


music.volume=0.5;


music.play()

.catch(()=>{});


}



createHeart();


};


}









// =========================
// MUSIC SYSTEM 🎵
// =========================



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









// =========================
// AUTO SPIN ❤️
// =========================


const autoBtn=

document.getElementById(
"autoBtn"
);



if(autoBtn){



autoBtn.onclick=()=>{


let count=0;



let timer=setInterval(()=>{


if(typeof spinWheel==="function"){


spinWheel();


}



count++;



if(count>=3){


clearInterval(timer);


}



},5500);




};



}









// =========================
// LIKE BUTTON 👍
// =========================


const likeBtn=

document.getElementById(
"likeBtn"
);



if(likeBtn){



likeBtn.onclick=()=>{



let food=

document.getElementById(
"foodResult"
).innerHTML;



if(food==="-")


return;




// Smart

if(typeof saveLikeFood==="function"){


saveLikeFood(food);


}




// Favorite

if(typeof saveFavorite==="function"){


saveFavorite({

food:food,

drink:"🥤 น้ำหวาน",

dessert:"🍰 ของหวาน"

});


}






if(typeof completeLikeMission==="function"){


completeLikeMission();


}




createHeart();



alert(

`❤️ บันทึกแล้ว ${food}`

);



};



}









// =========================
// REROLL BUTTON 🚫
// =========================


const rerollBtn=

document.getElementById(
"rerollBtn"
);



if(rerollBtn){



rerollBtn.onclick=()=>{



let food=

document.getElementById(
"foodResult"
).innerHTML;




if(food!=="-"){



if(typeof addAvoid==="function"){


addAvoid(food);


}



}




if(typeof spinWheel==="function"){


spinWheel();


}



};



}









// =========================
// SHARE
// =========================


const shareBtn=

document.getElementById(
"shareBtn"
);



if(shareBtn){



shareBtn.onclick=()=>{



let food=

document.getElementById(
"foodResult"
).innerHTML;



let text=


`
❤️ Dinner Roulette

วันนี้ Chompu เลือกให้ 💕

🍜 ${food}

กินด้วยกันอร่อยกว่า ❤️
`;





if(navigator.share){



navigator.share({

title:"Dinner Roulette",

text:text

});



}

else{


navigator.clipboard.writeText(text);



alert(

"คัดลอกข้อความแล้ว ❤️"

);


}





if(typeof completeShareMission==="function"){


completeShareMission();


}




};



}









// =========================
// FAVORITE BUTTON ⭐
// =========================



const favoriteBtn=

document.getElementById(
"favoriteBtn"
);



if(favoriteBtn){



favoriteBtn.onclick=()=>{



let food=

document.getElementById(
"foodResult"
).innerHTML;



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









// =========================
// HEART EFFECT
// =========================



function createHeart(){



let heart=

document.createElement(
"div"
);



heart.className="heart";


heart.innerHTML="❤️";



heart.style.left=

Math.random()*90+"%";



heart.style.bottom="20px";



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
