/* =================================
   Dinner Roulette V3 ❤️
   Wheel Game System 🎡
================================= */


const canvas = document.getElementById("wheel");


if(canvas){



const ctx = canvas.getContext("2d");




// ===============================
// DATA
// ===============================


const foods = [

"🥘 หมูกระทะ",
"🍲 ชาบู",
"🐷 หมูย่างจิ้มแจ่ว",
"🍗 ไก่ทอด",
"🍜 ก๋วยเตี๋ยว",
"🍣 ซูชิ",
"🥩 ปิ้งย่าง",
"🍕 พิซซ่า",
"🍔 เบอร์เกอร์",
"🍱 อาหารญี่ปุ่น"

];





const drinks=[

"🧋 ชานมไข่มุก",
"🍵 ชาไทย",
"🥤 น้ำอัดลม",
"☕ กาแฟ",
"🍓 น้ำผลไม้"

];





const desserts=[

"🍰 เค้ก",
"🍧 บิงซู",
"🍨 ไอศกรีม",
"🍮 พุดดิ้ง",
"🍪 คุกกี้"

];








// ===============================
// SOUND
// ===============================


const clickSound =

new Audio(

"sounds/click.mp3"

);



const tickSound =

new Audio(

"sounds/tick.mp3"

);



const winSound =

new Audio(

"sounds/win.mp3"

);








// ===============================
// VARIABLE
// ===============================


let spinning=false;

let rotation=0;

let currentIndex=0;

let tickTimer;










// ===============================
// DRAW WHEEL
// ===============================



function drawWheel(){



const mode =

window.chooseMode || "ฉัน";





let colors;



if(mode==="แฟน"){


colors=[

"#a8dcff",

"#d9f3ff"

];


}

else if(mode==="สุ่ม"){


colors=[

"#d8b4fe",

"#f0abfc"

];


}

else{


colors=[

"#ffd1e5",

"#fff0f6"

];


}








const center =

canvas.width/2;


const radius=center;



const slice=

(Math.PI*2)/foods.length;






ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);






foods.forEach((food,i)=>{





ctx.beginPath();


ctx.moveTo(

center,

center

);



ctx.arc(

center,

center,

radius,

i*slice,

(i+1)*slice

);





ctx.fillStyle=

colors[i%2];



ctx.fill();







ctx.save();


ctx.translate(

center,

center

);



ctx.rotate(

i*slice+slice/2

);



ctx.textAlign="right";


ctx.fillStyle="#555";


ctx.font="18px Arial";



ctx.fillText(

food,

radius-20,

8

);





ctx.restore();






});





}




window.drawWheel=drawWheel;


drawWheel();









// ===============================
// SPIN
// ===============================



const spinBtn =

document.getElementById(

"spinBtn"

);




if(spinBtn){


spinBtn.onclick=

spinWheel;


}










function spinWheel(){



if(spinning)

return;




spinning=true;





clickSound.currentTime=0;

clickSound.play();






currentIndex=

Math.floor(

Math.random()*foods.length

);







// เสียงติ๊ก


tickTimer=setInterval(()=>{


tickSound.currentTime=0;

tickSound.play();


},150);










const sliceAngle=

360/foods.length;







const extra=

360*7;





const target =

extra+

(360-

(currentIndex*sliceAngle));







rotation+=target;








canvas.style.transition=

"transform 5s cubic-bezier(.17,.67,.24,1)";





canvas.style.transform=

`rotate(${rotation}deg)`;









setTimeout(()=>{



clearInterval(tickTimer);



spinning=false;




winSound.currentTime=0;

winSound.play();





let result={


food:

foods[currentIndex],



drink:

drinks[

Math.floor(

Math.random()*drinks.length

)

],




dessert:

desserts[

Math.floor(

Math.random()*desserts.length

)

]

};





showResult(result);



createConfetti();





},5000);





}









// ===============================
// RESULT
// ===============================



function showResult(data){





document.getElementById(

"foodResult"

).innerHTML=

data.food;





document.getElementById(

"drinkResult"

).innerHTML=

data.drink;





document.getElementById(

"dessertResult"

).innerHTML=

data.dessert;







window.currentDinnerSet=data;






// History


if(typeof saveDinnerHistory==="function"){


saveDinnerHistory(data);


}




}









// ===============================
// CONFETTI 🎉
// ===============================



function createConfetti(){



for(let i=0;i<30;i++){



let item=document.createElement("div");



item.innerHTML=

["❤️","✨","🎉","⭐"][

Math.floor(

Math.random()*4

)

];



item.style.position="fixed";


item.style.left=

Math.random()*100+"%";



item.style.top="-20px";



item.style.fontSize="30px";


item.style.zIndex="9999";


item.style.animation=

"heartUp 2s forwards";





document.body.appendChild(item);




setTimeout(()=>{


item.remove();


},2000);




}



}






}
