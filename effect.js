/* =================================
 Dinner Roulette Chompu V19 ❤️
 Love Effect
 PART 4.4
================================= */


function winEffect(){


for(let i=0;i<15;i++){



let heart =
document.createElement("div");



heart.innerHTML=
"❤️";



heart.style.position=
"fixed";


heart.style.left=
Math.random()*100+"%";


heart.style.bottom=
"0";


heart.style.fontSize=
"25px";


heart.style.animation=
"heartUp 2s linear";



document.body.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},2000);



}



}



window.winEffect=
winEffect;







const style =
document.createElement("style");


style.innerHTML=

`
@keyframes heartUp{

from{

transform:translateY(0);
opacity:1;

}


to{

transform:translateY(-500px);
opacity:0;

}

}
`;



document.head.appendChild(style);
