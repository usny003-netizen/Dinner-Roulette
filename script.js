/* =================================
   Dinner Roulette V2.5 ❤️
   script.js
================================= */



// ===============================
// SOUND
// ===============================

const clickSound = 
new Audio("sounds/click.mp3");





// ===============================
// START SCREEN
// ===============================


const startBtn =
document.getElementById("startBtn");


const startScreen =
document.getElementById("startScreen");


const bgMusic =
document.getElementById("bgMusic");




if(startBtn){

startBtn.addEventListener("click",()=>{


    if(startScreen){

        startScreen.style.display="none";

    }



    if(bgMusic){

        bgMusic.play()
        .catch(()=>{});

    }



    createHearts();



});

}









// ===============================
// MUSIC SYSTEM 🎵
// ===============================



const musicBtn =
document.getElementById("musicBtn");


const musicSelect =
document.getElementById("musicSelect");



let musicPlaying=false;





if(musicBtn){


musicBtn.addEventListener("click",()=>{


    if(!bgMusic)return;



    if(musicPlaying){


        bgMusic.pause();


        musicBtn.innerHTML=
        "🎵 เปิดเพลง";


        musicPlaying=false;


    }

    else{


        bgMusic.play();


        musicBtn.innerHTML=
        "🔇 ปิดเพลง";


        musicPlaying=true;


    }



});


}







if(musicSelect){


musicSelect.addEventListener("change",()=>{


    bgMusic.src =
    musicSelect.value;



    if(musicPlaying){

        bgMusic.play();

    }


});


}









// ===============================
// MODE SELECT 👫
// ===============================



const modeButtons =
document.querySelectorAll(".mode");


const partnerInput =
document.getElementById("partnerName");


const chooserMessage =
document.getElementById("chooserMessage");




let chooseMode="ฉัน";


// ส่งให้ wheel.js ใช้

window.chooseMode="ฉัน";





// ชื่อแฟน

let partnerName =

localStorage.getItem("partnerName")

|| "Chompu";






if(partnerInput){


partnerInput.value = partnerName;



partnerInput.addEventListener("input",()=>{


partnerName =

partnerInput.value;



localStorage.setItem(

"partnerName",

partnerName

);



updateChooser();


});



}








modeButtons.forEach(btn=>{


btn.addEventListener("click",()=>{



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





updateChooser();


cuteMessage();


createHearts();





// วาดวงล้อใหม่ตามสี

if(typeof drawWheel==="function"){

drawWheel();

}



});



});









// ===============================
// SWEET MESSAGE 💕
// ===============================



function updateChooser(){


if(!chooserMessage)return;



let name =

partnerName || "Chompu";





if(chooseMode==="แฟน"){


chooserMessage.innerHTML =


`
❤️ วันนี้คุณ ${name}

เลือกให้กินนะ 🍽️

<br>

💕

เตรียมท้องไว้เลยนะ
`;



}



else if(chooseMode==="ฉัน"){


chooserMessage.innerHTML =


`
🌸 วันนี้ฉันเลือกให้เอง

<br>

❤️ ขอให้ถูกใจนะ
`;



}



else{


chooserMessage.innerHTML =


`
🎲 ให้โชคชะตาเลือก

<br>

✨ ลุ้นไปด้วยกัน
`;



}



}








function cuteMessage(){


const message =

document.getElementById(

"mainMessage"

);



if(!message)return;





if(chooseMode==="แฟน"){


message.innerHTML =


`
❤️ วันนี้ ${partnerName}

เป็นคนเลือกให้

<br>

🍽️ มาดูกันว่าจะได้อะไรนะ
`;



}





else if(chooseMode==="ฉัน"){



message.innerHTML =


`
🌸 วันนี้ฉันเลือกให้เอง

<br>

💕 ขอให้เป็นมื้อพิเศษ
`;



}




else{


message.innerHTML =


`
💜 ให้โชคชะตาเลือก

<br>

✨ ลุ้นพร้อมกัน
`;



}



}









// ===============================
// HEART EFFECT ❤️
// ===============================



function createHeart(){



const heart =

document.createElement("div");



heart.className="heart";


heart.innerHTML="❤️";



heart.style.left =

Math.random()*100+"%";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},2000);



}






function createHearts(){



for(let i=0;i<15;i++){



setTimeout(()=>{


createHeart();


},i*100);



}



}










// ===============================
// RESULT BUTTON
// ===============================



const likeBtn =
document.getElementById("likeBtn");



if(likeBtn){


likeBtn.onclick=()=>{


createHearts();


document.getElementById(

"statusMessage"

).innerHTML =


"❤️ เยี่ยมเลย เมนูนี้แหละ!";



};


}







const rerollBtn =
document.getElementById("rerollBtn");



if(rerollBtn){


rerollBtn.onclick=()=>{


document.getElementById(

"statusMessage"

).innerHTML =


"🎡 สุ่มใหม่กันนะที่รัก ❤️";





if(typeof spinWheel==="function"){


spinWheel();


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



let dinner =

window.currentDinnerSet;



let text =

"❤️ Dinner Roulette\n\n";





if(dinner){


text +=

dinner.food+"\n"+

dinner.drink+"\n"+

dinner.drink+"\n"+

dinner.dessert;


}

else{


text +=

"ยังไม่ได้สุ่มเมนู 🍽️";


}






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






// โหลดข้อความแรก

updateChooser();

cuteMessage();
