/* =================================
 Dinner Roulette Chompu V17 ❤️
 Couple Love Effect FINAL 🎉💕
================================= */



// ===============================
// WIN EFFECT 🎉
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
// WIN POPUP 💕
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



popup.className=

"win-popup";



popup.innerHTML=

`

<div class="win-love">

❤️

</div>


<h1>
เลือกได้แล้ว!
</h1>


<h2>
${food}
</h2>


<p>
💕 คืนนี้กินด้วยกันนะ Chompu
</p>


<button id="closeWin">
ตกลง ❤️
</button>

`;





document.body.appendChild(
popup
);







const close =

popup.querySelector(
"#closeWin"
);



if(close){



close.onclick=()=>{


popup.remove();


};



}





setTimeout(()=>{


if(popup)

popup.remove();


},5000);





}









// ===============================
// HEART BURST ❤️
// ===============================


function createHeartBurst(){



for(let i=0;i<25;i++){



setTimeout(()=>{



const heart=

document.createElement(
"div"
);



heart.className=
"heart-burst";




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



heart.style.bottom="0px";



document.body.appendChild(
heart
);







setTimeout(()=>{


heart.remove();


},2500);





},i*60);




}




}



window.createHeartBurst =
createHeartBurst;









// ===============================
// CONFETTI ✨
// ===============================


function createConfetti(){



for(let i=0;i<40;i++){



const item=

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

"💕"

]

[

Math.floor(
Math.random()*4
)

];



item.style.left=

Math.random()*100+"%";



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



window.createConfetti =
createConfetti;









// ===============================
// EFFECT CSS
// ===============================


if(!document.getElementById("effectStyle")){



const style=

document.createElement(
"style"
);



style.id=
"effectStyle";



style.innerHTML=

`

.win-popup{

position:fixed;

top:50%;

left:50%;

transform:
translate(-50%,-50%)
scale(.7);

width:85%;

max-width:350px;

background:white;

padding:30px;

border-radius:35px;

text-align:center;

z-index:99999;

box-shadow:
0 20px 60px rgba(0,0,0,.25);

animation:
popupShow .4s forwards;

}



.win-love{

font-size:60px;

animation:
loveBeat 1s infinite;

}



.win-popup h1{

color:#ff5d8f;

margin:10px;

}



.win-popup h2{

font-size:26px;

}



.win-popup button{

border:none;

background:#ff8fab;

color:white;

padding:12px 30px;

border-radius:25px;

font-size:18px;

}



.heart-burst{

position:fixed;

font-size:28px;

z-index:99999;

pointer-events:none;

animation:
heartFly 2.5s forwards;

}



.confetti{

position:fixed;

top:-30px;

font-size:25px;

z-index:99998;

pointer-events:none;

animation:
confettiFall linear forwards;

}



@keyframes popupShow{


to{

transform:
translate(-50%,-50%)
scale(1);

}

}




@keyframes loveBeat{


50%{

transform:
scale(1.2);

}

}




@keyframes heartFly{


from{

transform:
translateY(0)
scale(.5);

opacity:1;

}


to{

transform:
translateY(-80vh)
scale(1.5)
rotate(360deg);

opacity:0;

}

}




@keyframes confettiFall{


from{

transform:
translateY(0)
rotate(0);

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
