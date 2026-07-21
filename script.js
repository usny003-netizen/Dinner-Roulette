/* =================================
   Dinner Roulette ❤️
   Main Script V3
================================= */



// ==========================
// START SCREEN
// ==========================


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



    // เริ่มเพลง

    if(bgMusic){


        bgMusic.play()

        .catch(()=>{});


    }



});


}









// ==========================
// MUSIC SYSTEM 🎵
// ==========================



const musicBtn =

document.getElementById("musicBtn");


const musicSelect =

document.getElementById("musicSelect");





let musicPlaying=false;






if(musicBtn){



musicBtn.addEventListener("click",()=>{


    if(!bgMusic)

    return;



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


    if(!bgMusic)

    return;



    bgMusic.src =

    musicSelect.value;



    if(musicPlaying){


        bgMusic.play();


    }



});


}









// ==========================
// CHOOSE MODE 👫
// ==========================



const modeButtons =

document.querySelectorAll(".mode");



const partnerNameInput =

document.getElementById("partnerName");


const chooserMessage =

document.getElementById("chooserMessage");





let chooseMode="ฉัน";

let partnerName =

localStorage.getItem("partnerName")

|| "";






if(partnerNameInput){


    partnerNameInput.value =
    partnerName;



    partnerNameInput.addEventListener(

    "input",

    ()=>{


        partnerName =

        partnerNameInput.value;



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

partnerName || "คนพิเศษ";






if(chooseMode==="แฟน"){



    chooserMessage.innerHTML=


    `❤️ วันนี้คุณ ${name} เลือกให้กินนะ 🍽️

    <br>

    <small>

    เตรียมท้องไว้เลยนะที่รัก 💕

    </small>`;



}

else if(chooseMode==="ฉัน"){



    chooserMessage.innerHTML=


    "💕 วันนี้ฉันเลือกให้เองนะ 🍜";



}

else{


    chooserMessage.innerHTML=


    "🎲 ให้โชคชะตาเลือกให้เรา ❤️";


}



}










// ==========================
// AUTO REROLL 💖
// ==========================


const autoBtn =

document.getElementById("autoBtn");




if(autoBtn){



autoBtn.addEventListener("click",()=>{


    if(typeof spinWheel==="function"){


        spinWheel();


    }


});


}
