/* =================================
   Dinner Roulette V2 ❤️
   script.js V3.1
================================= */



// ===============================
// START SCREEN ❤️
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



        // เริ่มเพลงหลังผู้ใช้กด

        if(bgMusic){

            bgMusic.play()
            .catch(()=>{});

        }


    });

}







// ===============================
// MUSIC SYSTEM 🎵
// ===============================


const musicBtn =
document.getElementById("musicBtn");


const musicSelect =
document.getElementById("musicSelect");



let musicPlaying = false;





if(musicBtn){


musicBtn.addEventListener("click",()=>{


    if(!bgMusic) return;



    if(musicPlaying){


        bgMusic.pause();


        musicBtn.innerHTML =
        "🎵 เปิดเพลง";


        musicPlaying=false;



    }

    else{


        bgMusic.play();


        musicBtn.innerHTML =
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
// PARTNER MODE 👫
// ===============================



const modeButtons =
document.querySelectorAll(".mode");


const partnerInput =
document.getElementById("partnerName");


const chooserMessage =
document.getElementById("chooserMessage");





let chooseMode="ฉัน";



// ตั้งชื่อแฟนเริ่มต้น

let partnerName =

localStorage.getItem("partnerName")

|| "Chompu";





if(partnerInput){


    partnerInput.value = partnerName;



    partnerInput.addEventListener("input",()=>{


        partnerName = partnerInput.value;



        localStorage.setItem(

            "partnerName",

            partnerName

        );


    });


}








modeButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


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





    updateChooser();


});



});








function updateChooser(){


const name =

partnerName || "Chompu";




if(chooseMode==="แฟน"){


chooserMessage.innerHTML =


`❤️ วันนี้คุณ ${name}

เลือกให้กินนะ 🍽️

<br>

<small>

เตรียมท้องไว้เลยนะที่รัก 💕

</small>`;


}



else if(chooseMode==="ฉัน"){


chooserMessage.innerHTML =


"💕 วันนี้ฉันเลือกให้เองนะ 🍜";


}



else{


chooserMessage.innerHTML =


"🎲 ให้โชคชะตาเลือกให้เรา ❤️";


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
// RESULT BUTTONS
// ===============================



const likeBtn =
document.getElementById("likeBtn");



if(likeBtn){


likeBtn.addEventListener("click",()=>{


createHearts();



const status =
document.getElementById("statusMessage");



if(status){

status.innerHTML =
"❤️ เมนูนี้แหละ ถูกใจแล้ว!";

}



});


}








const rerollBtn =
document.getElementById("rerollBtn");



if(rerollBtn){


rerollBtn.addEventListener("click",()=>{



const status =
document.getElementById("statusMessage");



if(status){

status.innerHTML =
"🙅 ไม่เป็นไร สุ่มใหม่กัน 💕";

}




if(typeof spinWheel==="function"){

    spinWheel();

}



});


}









// ===============================
// SHARE 📤
// ===============================



const shareBtn =
document.getElementById("shareBtn");



if(shareBtn){


shareBtn.addEventListener("click",()=>{



const set =
window.currentDinnerSet;



let message =

"❤️ Dinner Roulette\n\n";





if(set){


message +=

set.food+"\n"+

set.drink+"\n"+

set.dessert;



}

else{


message +=

"ยังไม่ได้สุ่มเมนู 🍽️";


}






if(navigator.share){


navigator.share({

title:"Dinner Roulette ❤️",

text:message


});



}

else{


alert(message);


}



});


}
