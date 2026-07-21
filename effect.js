/* =================================
   Dinner Roulette V7 ❤️
   Winner Effect System 🎉
================================= */


function winnerEffect(food){



// สั่นมือถือ

if(navigator.vibrate){

navigator.vibrate([100,50,100]);

}




// สร้างข้อความชนะ


const popup = document.createElement("div");


popup.className="winner-popup";


popup.innerHTML=


`
<div>
🎉 วันนี้กิน...
</div>

<h1>
${food}
</h1>

<p>
❤️ Chompu เลือกได้แล้ว
</p>
`;



document.body.appendChild(popup);






// หายไป

setTimeout(()=>{


popup.remove();


},4000);







// หัวใจ

createHearts();



// พลุ

createConfetti();



}









// =======================
// HEART EFFECT
// =======================


function createHearts(){



for(let i=0;i<35;i++){



let heart=document.createElement("div");


heart.className="floating-heart";


heart.innerHTML=

["❤️","💖","💕","✨"][

Math.floor(

Math.random()*4

)

];



heart.style.left=

Math.random()*100+"%";



heart.style.animationDelay=

Math.random()*1+"s";




document.body.appendChild(heart);





setTimeout(()=>{


heart.remove();


},3000);



}



}









// =======================
// CONFETTI
// =======================


function createConfetti(){



for(let i=0;i<60;i++){



let item=document.createElement("div");


item.className="confetti";



item.innerHTML=

["🎉","⭐","✨","💗"][

Math.floor(

Math.random()*4

)

];



item.style.left=

Math.random()*100+"%";



item.style.animationDelay=

Math.random()*1+"s";




document.body.appendChild(item);




setTimeout(()=>{


item.remove();


},4000);



}



}
