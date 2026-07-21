/* =================================
 Dinner Roulette Chompu V17 ❤️
 Perfect Couple Wheel Engine FINAL
================================= */


const canvas =
document.getElementById("wheel");


if(canvas){


const ctx =
canvas.getContext("2d");


// ===============================
// FOOD DATABASE
// ===============================


const foods=[


{
name:"🥘 หมูกระทะ",
category:"grill",
drink:"🥤 ชาเย็น",
dessert:"🍰 บิงซู"
},


{
name:"🍲 ชาบู",
category:"grill",
drink:"🥤 น้ำอัดลม",
dessert:"🍨 ไอศกรีม"
},


{
name:"🐷 หมูย่างจิ้มแจ่ว",
category:"thai",
drink:"🥤 น้ำเก๊กฮวย",
dessert:"🍉 แตงโม"
},


{
name:"🍛 ข้าวกะเพรา",
category:"thai",
drink:"🥤 น้ำเปล่า",
dessert:"🍌 กล้วยทอด"
},


{
name:"🍣 ซูชิ",
category:"japan",
drink:"🍵 ชาเขียว",
dessert:"🍡 โมจิ"
},


{
name:"🍜 ราเมง",
category:"japan",
drink:"🥤 ชามะนาว",
dessert:"🍮 พุดดิ้ง"
},


{
name:"🍕 พิซซ่า",
category:"fast",
drink:"🥤 โค้ก",
dessert:"🍪 คุกกี้"
},


{
name:"🍔 เบอร์เกอร์",
category:"fast",
drink:"🥤 น้ำอัดลม",
dessert:"🍦 ไอศกรีม"
},


{
name:"🍜 ก๋วยเตี๋ยว",
category:"noodle",
drink:"🥤 น้ำกระเจี๊ยบ",
dessert:"🍌 กล้วยทอด"
},


{
name:"🥩 ปิ้งย่าง",
category:"grill",
drink:"🥤 ชาเย็น",
dessert:"🍰 เค้ก"
}


];




// ===============================
// VARIABLE
// ===============================


let wheelFoods=[...foods];


let currentFood=null;


let spinning=false;


let rotation=0;




// ===============================
// COLORS
// ===============================


const normalColor=[

"#ffafcc",
"#ffc8dd",
"#ffd6e7",
"#ffe5ec"

];


const coupleColor=[

"#a2d2ff",
"#bde0fe",
"#cdb4ff",
"#ffc8dd"

];


const randomColor=[

"#ffd6a5",
"#caffbf",
"#bde0fe",
"#ffc8dd"

];



let colors =
normalColor;



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



if(!wheelFoods.length)
return;



const center =
canvas.width/2;


const radius =
canvas.width/2;



const slice =
(Math.PI*2)
/wheelFoods.length;



wheelFoods.forEach(
(food,index)=>{


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

colors[
index % colors.length
];



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





// CENTER HEART


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
// CATEGORY SYSTEM
// ===============================


window.changeCategory=function(category){



if(category==="all"){


wheelFoods=[...foods];


}

else{


wheelFoods =

foods.filter(

food=>

food.category===category

);


}



applyAvoid();


drawWheel();



};



// ===============================
// AVOID SYSTEM
// ===============================


function getAvoid(){


return JSON.parse(

localStorage.getItem(
"avoidList"
)

)
||
[];


}



function applyAvoid(){



const avoid=getAvoid();



wheelFoods =

wheelFoods.filter(

food=>

!avoid.includes(food.name)

);



}
// ===============================
// MODE COLOR SYSTEM
// ===============================


function updateModeColor(){


let mode =
window.currentMode || "ฉัน";



if(mode==="แฟน"){


colors = coupleColor;


}


else if(mode==="สุ่ม"){


colors = randomColor;


}


else{


colors = normalColor;


}



drawWheel();


}




// ===============================
// SPIN ENGINE 🎡
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



const spinBtn =
document.getElementById(
"spinBtn"
);



if(spinBtn)

spinBtn.disabled=true;




// ===============================
// SELECT FOOD
// ===============================



let mode =
window.currentMode || "ฉัน";



if(
typeof smartRandom==="function"
){



currentFood =

smartRandom(
wheelFoods
);



}

else{



currentFood =

wheelFoods[

Math.floor(

Math.random()

*

wheelFoods.length

)

];



}





let index =

wheelFoods.indexOf(
currentFood
);



let slice =

360 /

wheelFoods.length;



let stopAngle =

270 -

(
index * slice
+
slice/2
);





rotation =

360 * 8

+

stopAngle;



canvas.style.transition =

"transform 6s cubic-bezier(.17,.67,.24,1)";



canvas.style.transform =

`rotate(${rotation}deg)`;






// STATUS


const status =

document.getElementById(
"statusMessage"
);



if(status){



if(mode==="ฉัน"){


status.innerHTML =
"🌸 กำลังเลือกเมนูให้ Chompu";


}


else if(mode==="แฟน"){


status.innerHTML =
"💕 Chompu กำลังเลือก";


}


else{


status.innerHTML =
"🎲 ให้โชคชะตาเลือก";


}



}





// SOUND


try{


const click =
new Audio(
"click.mp3"
);


click.play();


}catch(e){}






setTimeout(()=>{


finishSpin();


},6000);





}



// ===============================
// FINISH SPIN
// ===============================


function finishSpin(){



spinning=false;



const spinBtn =
document.getElementById(
"spinBtn"
);



if(spinBtn)

spinBtn.disabled=false;





showResult();





if(typeof completeSpinMission==="function"){


completeSpinMission();


}




if(typeof createHeart==="function"){


createHeart();


}





}



// ===============================
// SHOW RESULT 🍽️
// ===============================


function showResult(){



if(!currentFood)
return;




document.getElementById(
"foodResult"
).innerHTML =

currentFood.name;




document.getElementById(
"drinkResult"
).innerHTML =

currentFood.drink;




document.getElementById(
"dessertResult"
).innerHTML =

currentFood.dessert;





// SHARE CARD


const shareFood =

document.getElementById(
"shareFood"
);



const shareDrink =

document.getElementById(
"shareDrink"
);



const shareDessert =

document.getElementById(
"shareDessert"
);




if(shareFood)

shareFood.innerHTML =
currentFood.name;



if(shareDrink)

shareDrink.innerHTML =
currentFood.drink;



if(shareDessert)

shareDessert.innerHTML =
currentFood.dessert;







// HISTORY


if(
typeof saveHistory==="function"
){


saveHistory({

food:
currentFood.name,

drink:
currentFood.drink,

dessert:
currentFood.dessert,

mode:
window.currentMode

});


}







// MESSAGE


const mainMessage =

document.getElementById(
"mainMessage"
);



let mode =
window.currentMode || "ฉัน";



if(mainMessage){



if(mode==="ฉัน"){


mainMessage.innerHTML =

`
🌸 วันนี้ฉันเลือกให้
<br>
${currentFood.name}
`;



}


else if(mode==="แฟน"){


mainMessage.innerHTML =

`
💕 Chompu เลือกให้
<br>
${currentFood.name}
`;



}


else{


mainMessage.innerHTML =

`
🎲 โชคชะตาเลือกให้
<br>
${currentFood.name}
`;



}


}





// WIN EFFECT


if(typeof winEffect==="function"){


winEffect();


}




}







// ===============================
// AUTO RANDOM
// ===============================


const autoBtn =

document.getElementById(
"autoBtn"
);



if(autoBtn){


autoBtn.onclick=()=>{


let count=0;



let timer=setInterval(()=>{


spinWheel();



count++;



if(count>=3){


clearInterval(timer);


}



},6500);



};



}





// ===============================
// EXPORT
// ===============================


window.spinWheel =
spinWheel;




// INIT


updateModeColor();


drawWheel();



}
