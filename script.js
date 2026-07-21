/* =================================
   Dinner Roulette V4 ❤️
   Main Controller
================================= */



// ===============================
// SOUND
// ===============================


const clickSound =

new Audio(
"sounds/click.mp3"
);





// ===============================
// START
// ===============================


const startBtn =

document.getElementById(
"startBtn"
);



const startScreen =

document.getElementById(
"startScreen"
);



const bgMusic =

document.getElementById(
"bgMusic"
);





if(startBtn){


startBtn.onclick = ()=>{


    startScreen.style.display="none";


    if(bgMusic){

        bgMusic.play()
        .catch(()=>{});

    }



    createHearts();



};



}









// ===============================
// MODE SYSTEM 👫
// ===============================



const modeButtons =

document.querySelectorAll(
".mode"
);



const partnerNameInput =

document.getElementById(
"partnerName"
);



const chooserMessage =

document.getElementById(
"chooserMessage"
);



const mainMessage =

document.getElementById(
"mainMessage"
);





let chooseMode = "ฉัน";

window.chooseMode="ฉัน";





let partnerName =

localStorage.getItem(
"partnerName"
)

|| "Chompu";







if(partnerNameInput){


partnerNameInput.value = partnerName;



partnerNameInput.oninput = ()=>{


partnerName =

partnerNameInput.value;


localStorage.setItem(

"partnerName",

partnerName

);


updateMessage();



};



}









modeButtons.forEach(btn=>{


btn.onclick = ()=>{



clickSound.currentTime=0;

clickSound.play();




modeButtons.forEach(b=>{

b.classList.remove("active");

});



btn.classList.add("active");






if(btn.innerText.includes("ฉัน")){


chooseMode="ฉัน";


}

else if(btn.innerText.includes("แฟน")){


chooseMode="แฟน";


}

else{


chooseMode =

Math.random()>0.5

?

"ฉัน"

:

"แฟน";


}






window.chooseMode = chooseMode;






updateMessage();






if(typeof drawWheel==="function"){

drawWheel();

}




createHearts();



};



});









// ===============================
// MESSAGE ❤️
// ===============================



function updateMessage(){



if(!chooserMessage)

return;




if(chooseMode==="แฟน"){



chooserMessage.innerHTML =


`
❤️ วันนี้คุณ ${partnerName}

เลือกให้กินนะ

<br>

🍽️ ลุ้นกันเลย
`;



mainMessage.innerHTML =


`
💖 ${partnerName}

กำลังเลือกเมนูให้คุณ

`;



}





else if(chooseMode==="ฉัน"){



chooserMessage.innerHTML =


`
🌸 วันนี้ฉันเลือกให้เอง

<br>

💕 ขอให้ถูกใจนะ
`;



mainMessage.innerHTML =


`
🌸 วันนี้ฉันขอเลือกเอง

`;



}





else{



chooserMessage.innerHTML =


`
🎲 ให้โชคชะตาเลือก

`;



mainMessage.innerHTML =


`
💜 มาลุ้นพร้อมกัน

`;



}




}










// ===============================
// AUTO REROLL 💖
// ===============================



const autoBtn =

document.getElementById(
"autoBtn"
);





let autoRunning=false;






if(autoBtn){


autoBtn.onclick = ()=>{


if(autoRunning)

return;



autoRunning=true;




let count=0;





let timer = setInterval(()=>{



if(typeof spinWheel==="function"){

spinWheel();

}



count++;





if(count>=3){


clearInterval(timer);


autoRunning=false;



document.getElementById(

"statusMessage"

).innerHTML =


"❤️ ได้แล้ว เมนูนี้น่าจะใช่";


}



},5500);




};



}









// ===============================
// LIKE BUTTON 👍
// ===============================


const likeBtn =

document.getElementById(
"likeBtn"
);




if(likeBtn){


likeBtn.onclick=()=>{


createHearts();


document.getElementById(

"statusMessage"

).innerHTML =


"❤️ เยี่ยมเลย กินเมนูนี้กัน";



};



}









// ===============================
// REROLL 🙅
// ===============================



const rerollBtn =

document.getElementById(
"rerollBtn"
);



if(rerollBtn){



rerollBtn.onclick=()=>{


document.getElementById(

"statusMessage"

).innerHTML =


"🎡 ลองใหม่อีกครั้งนะ";




if(typeof spinWheel==="function"){

spinWheel();

}



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



let dinner =

window.currentDinnerSet;




let text =

`
❤️ Dinner Roulette

วันนี้ ${partnerName} เลือกให้ 🍽️

${dinner ? dinner.food:"ยังไม่ได้สุ่ม"}

${dinner ? dinner.drink:""}

${dinner ? dinner.dessert:""}

💕 กินด้วยกันนะ
`;







if(navigator.share){



navigator.share({

title:"Dinner Roulette ❤️",

text:text


});



}

else{


alert(text);


}



};



}









// ===============================
// HEART EFFECT ❤️
// ===============================



function createHeart(){



const heart =

document.createElement(
"div"
);



heart.className="heart";


heart.innerHTML="❤️";



heart.style.left=

Math.random()*100+"%";



document.body.appendChild(heart);





setTimeout(()=>{


heart.remove();


},2000);



}






function createHearts(){



for(let i=0;i<12;i++){



setTimeout(()=>{


createHeart();


},i*100);



}



}









// START

updateMessage();
