/* =================================
 Dinner Roulette V10 ❤️
 Winner Effect System 🎉
================================= */



// ===============================
// HEART FLOAT ❤️
// ===============================


function createHeartEffect(){


let heart =

document.createElement("div");



heart.className="heart";


heart.innerHTML="❤️";



heart.style.left=

Math.random()*90+"%";



heart.style.bottom=

"20px";



document.body.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},2000);



}





window.createHeartEffect=

createHeartEffect;









// ===============================
// CONFETTI 🎊
// ===============================


function createConfetti(){



for(let i=0;i<30;i++){



let confetti=

document.createElement(
"div"
);



confetti.innerHTML="✨";



confetti.style.position="fixed";



confetti.style.left=

Math.random()*100+"%";



confetti.style.top="-20px";



confetti.style.fontSize=

Math.random()*25+15+"px";



confetti.style.zIndex="9999";



confetti.style.transition=

"transform 2s ease, opacity 2s";



document.body.appendChild(
confetti
);





setTimeout(()=>{


confetti.style.transform=

`translateY(${window.innerHeight+200}px)
rotate(360deg)`;


confetti.style.opacity=0;



},100);






setTimeout(()=>{


confetti.remove();


},2500);



}


}









// ===============================
// WIN EFFECT 🎉
// ===============================


function winEffect(){



// หัวใจ

for(let i=0;i<8;i++){


setTimeout(()=>{


createHeartEffect();


},i*150);



}






// confetti


createConfetti();








// result animation


const result =

document.querySelector(
".result-box"
);



if(result){



result.classList.add(
"win"
);



setTimeout(()=>{


result.classList.remove(
"win"
);



},1000);



}









// เปลี่ยนข้อความ


const status =

document.getElementById(
"statusMessage"
);



if(status){


status.innerHTML=

"🎉 ได้แล้ว! กินเมนูนี้กัน ❤️";


}





}





window.winEffect=

winEffect;
