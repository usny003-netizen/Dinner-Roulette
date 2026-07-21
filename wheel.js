/* =================================
 Dinner Roulette V16 ❤️
 Perfect Couple Wheel System 🎡💕
================================= */


const canvas = document.getElementById("wheel");


if(canvas){


const ctx = canvas.getContext("2d");


// ===============================
// FOOD DATABASE
// ===============================


const foods=[

{name:"🥘 หมูกระทะ",category:"grill"},
{name:"🍲 ชาบู",category:"grill"},
{name:"🐷 หมูย่างจิ้มแจ่ว",category:"thai"},
{name:"🍛 ข้าวกะเพรา",category:"thai"},
{name:"🍣 ซูชิ",category:"japan"},
{name:"🍜 ราเมง",category:"japan"},
{name:"🍕 พิซซ่า",category:"fast"},
{name:"🍔 เบอร์เกอร์",category:"fast"},
{name:"🍜 ก๋วยเตี๋ยว",category:"noodle"},
{name:"🥩 ปิ้งย่าง",category:"grill"}

];



// ===============================
// VARIABLE
// ===============================


let wheelFoods=[...foods];

let currentFood=null;

let currentMode="ฉัน";

let spinning=false;

let rotation=0;



// ===============================
// SOUND
// ===============================


const clickSound =
new Audio("click.mp3");


const tickSound =
new Audio("tick.mp3");


const winSound =
new Audio("win.mp3");





// ===============================
// COLOR
// ===============================


let colors=[

"#ffafcc",
"#ffc8dd",
"#ffd6e7"

];



function setColorMode(mode){


if(mode==="แฟน"){

colors=[
"#a2d2ff",
"#bde0fe",
"#cdb4ff"
];

}

else if(mode==="สุ่ม"){

colors=[
"#ffd6a5",
"#caffbf",
"#bde0fe",
"#ffc8dd"
];

}

else{

colors=[
"#ffafcc",
"#ffc8dd",
"#ffd6e7"
];

}


drawWheel();

}







// ===============================
// DRAW WHEEL
// ===============================


function drawWheel(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



if(wheelFoods.length===0)
return;



const center =
canvas.width/2;


const radius=center;


const slice =
(Math.PI*2) / wheelFoods.length;



wheelFoods.forEach((food,index)=>{


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



ctx.fillStyle =
colors[index % colors.length];


ctx.fill();



ctx.strokeStyle="#fff";

ctx.lineWidth=3;

ctx.stroke();




// TEXT

ctx.save();


ctx.translate(
center,
center
);


ctx.rotate(
index*slice + slice/2
);



ctx.textAlign="right";

ctx.fillStyle="#555";

ctx.font="16px Tahoma";


ctx.fillText(

food.name,

radius-20,

5

);



ctx.restore();



});




// CENTER

ctx.beginPath();


ctx.arc(
center,
center,
35,
0,
Math.PI*2
);



ctx.fillStyle="#fff";

ctx.fill();



ctx.font="28px Arial";

ctx.textAlign="center";

ctx.textBaseline="middle";


ctx.fillText(
"❤️",
center,
center
);


}









// ===============================
// CATEGORY
// ===============================


window.changeCategory=function(category){


if(category==="all"){

wheelFoods=[...foods];

}

else{

wheelFoods =
foods.filter(
f=>f.category===category
);

}



applyAvoid();

drawWheel();


};









// ===============================
// AVOID
// ===============================


function getAvoid(){


return JSON.parse(

localStorage.getItem(
"avoidList"
)

)||[];

}



function applyAvoid(){


let avoid=getAvoid();


wheelFoods =
wheelFoods.filter(

food=>

!avoid.includes(food.name)

);


}









// ===============================
// MODE BUTTON
// ===============================


document.querySelectorAll(".mode")

.forEach(btn=>{


btn.onclick=function(){


document.querySelectorAll(".mode")

.forEach(b=>

b.classList.remove("active")

);



btn.classList.add("active");



currentMode =
btn.dataset.mode;



setColorMode(currentMode);



let name =
document.getElementById("partnerName")
?.value || "Chompu";


let msg =
document.getElementById("chooserMessage");



if(msg){


msg.innerHTML =

currentMode==="แฟน"

?

`💕 วันนี้ ${name} เลือกให้`

:

currentMode==="สุ่ม"

?

"🎲 ให้หัวใจเลือก"

:

"🌸 วันนี้ฉันเลือกให้";

}



};



});









// ===============================
// SPIN FIXED 🎡
// ===============================


function spinWheel(){


if(spinning)
return;



applyAvoid();



if(wheelFoods.length===0){


alert(
"🚫 ไม่มีเมนูให้สุ่ม"
);


return;

}



spinning=true;



clickSound.play();





// SMART RANDOM

if(typeof smartRandom==="function"){

currentFood =
smartRandom(wheelFoods);

}

else{


currentFood =

wheelFoods[

Math.floor(
Math.random()*wheelFoods.length
)

];


}




let index =
wheelFoods.indexOf(currentFood);



let slice =
360 / wheelFoods.length;



/*
  Canvas:
  เริ่ม 0° ทางขวา
  Pointer อยู่บน = 270°
*/


let finalAngle =

270 -

(
index*slice
+
slice/2
);



rotation =

360*8 + finalAngle;



canvas.style.transition =

"transform 6s cubic-bezier(.17,.67,.24,1)";



canvas.style.transform =

`rotate(${rotation}deg)`;





tickSound.loop=true;

tickSound.play();



let status =
document.getElementById("statusMessage");

if(status)

status.innerHTML =
"🎡 กำลังเลือกเมนูให้ Chompu ❤️";






setTimeout(()=>{


tickSound.pause();

tickSound.currentTime=0;


winSound.play();


spinning=false;


showResult();



},6000);



}



window.spinWheel=spinWheel;









// ===============================
// RESULT
// ===============================


function showResult(){


if(!currentFood)
return;



document.getElementById(
"foodResult"
).innerText=currentFood.name;



document.getElementById(
"drinkResult"
).innerText="🥤 น้ำหวาน";


document.getElementById(
"dessertResult"
).innerText="🍰 ของหวาน";





if(typeof saveHistory==="function"){


saveHistory({

food:currentFood.name,

drink:"🥤 น้ำหวาน",

dessert:"🍰 ของหวาน",

mode:currentMode

});


}





if(typeof updateShareCard==="function"){


updateShareCard({

food:currentFood.name,

drink:"🥤 น้ำหวาน",

dessert:"🍰 ของหวาน"

});


}




if(typeof completeSpinMission==="function"){

completeSpinMission();

}



if(typeof winEffect==="function"){

winEffect();

}



}







// INIT

drawWheel();

setColorMode("ฉัน");


}
