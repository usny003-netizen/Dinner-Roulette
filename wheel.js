/* =================================
   Dinner Roulette V4 ❤️
   Wheel + Avoid System 🎡🚫
================================= */


const canvas = document.getElementById("wheel");


if(canvas){


const ctx = canvas.getContext("2d");



// ===============================
// FOOD DATA
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



const winSound =

new Audio(
"sounds/win.mp3"
);



const tickSound =

new Audio(
"sounds/tick.mp3"
);








let spinning=false;

let rotation=0;

let currentFood="";









// ===============================
// DRAW WHEEL
// ===============================


function drawWheel(){



let mode =

window.chooseMode || "ฉัน";



let colors;



if(mode==="แฟน"){


colors=[

"#bde0fe",

"#caf0f8"

];


}

else if(mode==="สุ่ม"){


colors=[

"#e0c3fc",

"#fbc2eb"

];


}

else{


colors=[

"#ffd1e5",

"#fff0f6"

];


}







let center=

canvas.width/2;



let radius=center;



let slice=

(Math.PI*2)/foods.length;




ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);






foods.forEach((food,index)=>{



ctx.beginPath();


ctx.moveTo(

center,

center

);



ctx.arc(

center,

center,

radius,

index*slice,

(index+1)*slice

);




ctx.fillStyle=

colors[index%2];



ctx.fill();





ctx.save();



ctx.translate(

center,

center

);



ctx.rotate(

index*slice+slice/2

);



ctx.textAlign="right";


ctx.font="18px Arial";


ctx.fillStyle="#555";



ctx.fillText(

food,

radius-20,

8

);



ctx.restore();



});



}




window.drawWheel = drawWheel;



drawWheel();









// ===============================
// RANDOM FOOD
// เช็ก Avoid
// ===============================


function getRandomFood(){



let available = foods.filter(food=>{


if(typeof isAvoid==="function"){


return !isAvoid(food);


}


return true;



});





// ถ้าไม่เหลือเมนู

if(available.length===0){



if(typeof resetAvoidBtn !== "undefined"){


alert(

"หมดแล้วทุกเมนู ❤️ ล้างรายการไม่เอาได้เลย"

);


}



return foods[

Math.floor(

Math.random()*foods.length

)

];



}





return available[

Math.floor(

Math.random()*available.length

)

];



}









// ===============================
// SPIN
// ===============================


const spinBtn =

document.getElementById(
"spinBtn"
);





if(spinBtn){


spinBtn.onclick = spinWheel;


}








function spinWheel(){



if(spinning)

return;



spinning=true;




clickSound.currentTime=0;

clickSound.play();






currentFood =

getRandomFood();







let index=

foods.indexOf(

currentFood

);







let sliceAngle=

360 / foods.length;






let target =

360*7 +

(360-(index*sliceAngle));








rotation += target;







canvas.style.transition=

"transform 5s cubic-bezier(.17,.67,.24,1)";





canvas.style.transform=

`rotate(${rotation}deg)`;









let tick =

setInterval(()=>{


tickSound.currentTime=0;

tickSound.play();


},180);







setTimeout(()=>{



clearInterval(tick);



spinning=false;



winSound.currentTime=0;

winSound.play();






let result={



food:currentFood,



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





},5000);



}









// ===============================
// SHOW RESULT
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

data.drink;



window.currentDinnerSet=data;






if(typeof saveDinnerHistory==="function"){


saveDinnerHistory(data);


}




}



}
