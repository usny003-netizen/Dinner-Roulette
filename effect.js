/* =================================
 Dinner Roulette V12 ❤️
 Couple Love Effect System 🎉
================================= */



// ===============================
// WIN EFFECT
// ===============================


function winEffect(){



const food =

document.getElementById(
"foodResult"
)?.innerText;



if(!food)

return;





// Popup


createWinPopup(food);



// Hearts


createHeartBurst();



// Confetti


createConfetti();





}







window.winEffect = winEffect;









// ===============================
// WIN POPUP
// ===============================


function createWinPopup(food){



// กันซ้ำ


const old =

document.querySelector(
".win-popup"
);



if(old)

old.remove();







const popup =

document.createElement(
"div"
);



popup.className =
"win-popup";





popup.innerHTML =

`

<h1>
🎉 ได้แล้ว!
</h1>


<h2>
${food}
</h2>


<p>
💕 วันนี้ Chompu กินเมนูนี้กัน
</p>


<button id="closeWin">

❤️ ตกลง

</button>

`;






document.body.appendChild(
popup
);







document

.getElementById(
"closeWin"
)

.onclick=()=>{


popup.remove();


};






setTimeout(()=>{


if(popup)

popup.remove();


},5000);





}









// ===============================
// HEART BURST ❤️
// ===============================


function createHeartBurst(){



for(let i=0;i<15;i++){



setTimeout(()=>{



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
"💖",
"💘"
]

[
Math.floor(
Math.random()*5
)
];



heart.style.left=

Math.random()*100+"%";



heart.style.bottom="0";



document.body.appendChild(
heart
);




setTimeout(()=>{


heart.remove();


},2000);



},i*80);



}



}








window.createHeartBurst =
createHeartBurst;









// ===============================
// CONFETTI ✨
// ===============================


function createConfetti(){



for(let i=0;i<40;i++){



let confetti=

document.createElement(
"div"
);



confetti.innerHTML=

[
"✨",
"⭐",
"💗",
"🌸"
]

[
Math.floor(
Math.random()*4
)
];



confetti.style.position=
"fixed";



confetti.style.left=

Math.random()*100+"%";



confetti.style.top="-20px";



confetti.style.fontSize=

Math.random()*20+15+"px";



confetti.style.zIndex="9999";



confetti.style.pointerEvents="none";



confetti.style.animation=

"fall 3s linear forwards";





document.body.appendChild(
confetti
);




setTimeout(()=>{


confetti.remove();


},3000);



}


}









// ===============================
// FALL ANIMATION
// ===============================


const style =

document.createElement(
"style"
);



style.innerHTML=

`

@keyframes fall {


from{


transform:
translateY(0)
rotate(0deg);


opacity:1;


}



to{


transform:

translateY(100vh)

rotate(360deg);


opacity:0;


}


}

`;



document.head.appendChild(
style
);
