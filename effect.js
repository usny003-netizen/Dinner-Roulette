/* =================================
 Dinner Roulette V13 ❤️
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



if(!food || food==="-")

return;




createWinPopup(food);


createHeartBurst();


createConfetti();



}





window.winEffect =
winEffect;









// ===============================
// POPUP
// ===============================


function createWinPopup(food){



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



popup.className="win-popup";



popup.innerHTML=

`

<div class="win-icon">

🎉

</div>


<h1>

ได้แล้ว!

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







const close =

document.getElementById(
"closeWin"
);



if(close){



close.onclick=()=>{


popup.remove();


};



}







setTimeout(()=>{


popup.remove();


},5000);



}









// ===============================
// HEART BURST ❤️
// ===============================


function createHeartBurst(){



for(let i=0;i<20;i++){



setTimeout(()=>{



let heart=

document.createElement(
"div"
);



heart.className="heart";



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


},2500);



},i*70);



}



}





window.createHeartBurst=
createHeartBurst;









// ===============================
// CONFETTI ✨
// ===============================


function createConfetti(){



for(let i=0;i<50;i++){



let item=

document.createElement(
"div"
);



item.className=
"confetti";



item.innerHTML=

[

"✨",

"⭐",

"🌸",

"💗"

]

[

Math.floor(
Math.random()*4
)

];



item.style.left=

Math.random()*100+"%";



item.style.fontSize=

Math.random()*20+15+"px";



item.style.animationDuration=

(2+Math.random()*2)+"s";





document.body.appendChild(
item
);






setTimeout(()=>{


item.remove();


},4000);



}



}









window.createConfetti=
createConfetti;









// ===============================
// CSS EFFECT ONCE
// ===============================


if(
!document.getElementById(
"effectStyle"
)
){



const style=

document.createElement(
"style"
);



style.id="effectStyle";



style.innerHTML=

`

.win-popup{

position:fixed;

top:50%;

left:50%;

transform:translate(-50%,-50%) scale(.8);

background:white;

padding:30px;

border-radius:30px;

text-align:center;

z-index:9999;

animation:popupShow .4s forwards;

box-shadow:0 20px 50px rgba(0,0,0,.2);

}


.win-popup button{

border:none;

padding:12px 25px;

border-radius:20px;

background:#ff8fab;

color:white;

font-size:18px;

}



.confetti{

position:fixed;

top:-30px;

z-index:9999;

pointer-events:none;

animation:fall linear forwards;

}



@keyframes popupShow{


to{

transform:
translate(-50%,-50%)
scale(1);

}

}



@keyframes fall{


from{

transform:
translateY(0)
rotate(0);

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



}
