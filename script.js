/* =================================
   Dinner Roulette V7 ❤️
   Main Controller
================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{



// ===============================
// START SCREEN
// ===============================


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



// เปิดเพลงหลังผู้ใช้กด

const music =

document.getElementById(
"bgMusic"
);



if(music){


music.volume=0.5;


music.play()
.catch(()=>{});


}



};


}









// ===============================
// MODE SYSTEM ❤️
// ===============================


const modes =

document.querySelectorAll(
".mode"
);



window.chooseMode="ฉัน";




modes.forEach(btn=>{


btn.onclick=()=>{



modes.forEach(b=>{

b.classList.remove(
"active"
);

});



btn.classList.add(
"active"
);



let mode =

btn.dataset.mode;



window.chooseMode=mode;




const name =

document.getElementById(
"partnerName"
).value || "Chompu";




const message =

document.getElementById(
"chooserMessage"
);





if(message){



if(mode==="แฟน"){


message.innerHTML=

`❤️ วันนี้ ${name} เลือกให้`;


}

else if(mode==="สุ่ม"){


message.innerHTML=

"🎲 วันนี้ให้โชคเป็นคนเลือก";


}

else{


message.innerHTML=

"🌸 วันนี้ฉันเลือกให้";


}



}




// วาดวงล้อใหม่

if(typeof drawWheel==="function"){


drawWheel();


}



};



});









// ===============================
// AUTO ROLL
// ===============================


const autoBtn =

document.getElementById(
"autoBtn"
);



if(autoBtn){



autoBtn.onclick=()=>{



if(typeof spinWheel==="function"){



spinWheel();



}



};


}









// ===============================
// LIKE BUTTON ❤️
// ===============================


const likeBtn =

document.getElementById(
"likeBtn"
);




if(likeBtn){



likeBtn.onclick=()=>{



let dinner =

window.currentDinnerSet;



if(!dinner)

return;





// Smart

if(typeof saveLikedFood==="function"){



saveLikedFood(
dinner.food
);



}





// Favorite

if(typeof saveFavorite==="function"){



saveFavorite(
dinner
);



}





alert(

`❤️ จำแล้วว่า Chompu ชอบ ${dinner.food}`

);



};



}









// ===============================
// REROLL BUTTON 🚫
// ===============================


const rerollBtn =

document.getElementById(
"rerollBtn"
);




if(rerollBtn){



rerollBtn.onclick=()=>{



let dinner =

window.currentDinnerSet;



if(dinner && typeof addAvoid==="function"){


addAvoid(
dinner.food
);


}



if(typeof spinWheel==="function"){


spinWheel();


}




};



}









// ===============================
// MUSIC SYSTEM 🎵
// ===============================


const musicBtn =

document.getElementById(
"musicBtn"
);



const music =

document.getElementById(
"bgMusic"
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








// เปลี่ยนเพลง


const musicSelect =

document.getElementById(
"musicSelect"
);





if(musicSelect && music){



musicSelect.onchange=()=>{



music.src=

musicSelect.value;



music.play();



};



}









// ===============================
// SHARE ❤️
// ===============================


const shareBtn =

document.getElementById(
"shareBtn"
);




if(shareBtn){



shareBtn.onclick=()=>{



let dinner=

window.currentDinnerSet;



if(!dinner){


alert(
"หมุนวงล้อก่อนนะ ❤️"
);


return;

}





let text =


`
❤️ Dinner Roulette

วันนี้กิน ${dinner.food}

🥤 ${dinner.drink}

🍰 ${dinner.dessert}

เลือกโดย Chompu 💕
`;





if(navigator.share){



navigator.share({

title:"Dinner Roulette ❤️",

text:text


});



}

else{


navigator.clipboard.writeText(text);



alert(
"คัดลอกข้อความแชร์แล้ว ❤️"
);



}



};



}








// ===============================
// SCROLL
// ===============================


window.scrollFavorite=()=>{


document
.getElementById(
"favoriteList"
)
.scrollIntoView({

behavior:"smooth"

});


};





window.scrollHistory=()=>{


document
.getElementById(
"historyList"
)
.scrollIntoView({

behavior:"smooth"

});


};







});
