/* =================================
 Dinner Roulette Chompu V18 ❤️
 Perfect Pointer Wheel Engine
 PART 1/4
================================= */


const canvas =
document.getElementById("wheel");


if(canvas){


const ctx =
canvas.getContext("2d");



// ===============================
// FOOD DATABASE 🍽️
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


window.currentMode="ฉัน";





// ===============================
// COLOR
// ===============================


const colors=[

"#ffafcc",
"#ffc8dd",
"#ffd6e7",
"#ffe5ec"

];




// ===============================
// DRAW WHEEL 🎡
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


const radius =
canvas.width/2;



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
// MODE SYSTEM 👫
// ===============================


function updateMode(){


document.querySelectorAll(".mode")

.forEach(btn=>{


btn.classList.remove("active");


});



const active =

document.querySelector(

`.mode[data-mode="${window.currentMode}"]`

);



if(active)

active.classList.add("active");



}




document.querySelectorAll(".mode")

.forEach(btn=>{


btn.onclick=function(){



document.querySelectorAll(".mode")

.forEach(b=>{

b.classList.remove("active");

});



this.classList.add("active");



window.currentMode =

this.dataset.mode;




const name =

document.getElementById(
"partnerName"
)?.value || "Chompu";




const msg =

document.getElementById(
"chooserMessage"
);



if(msg){



if(window.currentMode==="ฉัน"){


msg.innerHTML =
"🌸 วันนี้ฉันเลือกให้";


}


else if(window.currentMode==="แฟน"){


msg.innerHTML =
`💕 วันนี้ ${name} เลือกให้`;


}


else{


msg.innerHTML =
"🎲 ให้หัวใจเลือก";


}



}



};

});








// ===============================
// CATEGORY 🍽️
// ===============================


window.changeCategory=function(category){



if(category==="all"){


wheelFoods=[...foods];


}

else{


wheelFoods =

foods.filter(food=>


food.category===category

);


}



applyAvoid();


drawWheel();



};









// ===============================
// AVOID 🚫
// ===============================


function getAvoid(){


return JSON.parse(

localStorage.getItem(
"avoidList"
)

)||[];


}





function applyAvoid(){



const avoid = getAvoid();



wheelFoods =

wheelFoods.filter(food=>


!avoid.includes(food.name)


);



}



window.applyAvoid = applyAvoid;









// ===============================
// SPIN ENGINE 🎡
// POINTER FIX
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




const btn =

document.getElementById(
"spinBtn"
);



if(btn)

btn.disabled=true;






// ===============================
// RANDOM FOOD
// ===============================


if(typeof smartRandom==="function"){


currentFood =

smartRandom(wheelFoods);


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







const index =

wheelFoods.indexOf(
currentFood
);





const slice =

360 /

wheelFoods.length;





// จุดกลางช่องอาหาร

const foodAngle =

(index * slice)

+

(slice/2);





// Pointer อยู่ด้านบน

const pointerAngle = 270;





const target =

pointerAngle - foodAngle;







// หมุน 8 รอบ

rotation +=

360*8 + target;







canvas.style.transition =

"transform 6s cubic-bezier(.17,.67,.24,1)";



canvas.style.transform =

`rotate(${rotation}deg)`;







const status =

document.getElementById(
"statusMessage"
);



if(status){


status.innerHTML=

"🎡 กำลังเลือกเมนูให้ Chompu ❤️";


}





setTimeout(()=>{


finishSpin();


},6000);



}



window.spinWheel = spinWheel;// ===============================
// FINISH SPIN 🎉
// ===============================


function finishSpin(){



spinning=false;



const btn =

document.getElementById(
"spinBtn"
);



if(btn)

btn.disabled=false;





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





const food =

document.getElementById(
"foodResult"
);



const drink =

document.getElementById(
"drinkResult"
);



const dessert =

document.getElementById(
"dessertResult"
);






if(food)

food.innerHTML =

currentFood.name;





if(drink)

drink.innerHTML =

currentFood.drink;





if(dessert)

dessert.innerHTML =

currentFood.dessert;










// ===============================
// SHARE CARD 📸
// ===============================


if(typeof updateShareCard==="function"){



updateShareCard({


food:

currentFood.name,


drink:

currentFood.drink,


dessert:

currentFood.dessert



});



}










// ===============================
// HISTORY 📜
// ===============================


if(typeof saveHistory==="function"){



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









// ===============================
// MESSAGE ❤️
// ===============================


const message =

document.getElementById(
"mainMessage"
);




if(message){



if(window.currentMode==="ฉัน"){



message.innerHTML=

`

🌸 วันนี้ฉันเลือกให้

<br>

${currentFood.name}

`;



}



else if(window.currentMode==="แฟน"){



message.innerHTML=

`

💕 Chompu เลือกให้

<br>

${currentFood.name}

`;



}



else{



message.innerHTML=

`

🎲 หัวใจเลือกให้

<br>

${currentFood.name}

`;



}



}









// ===============================
// WIN EFFECT 🎉
// ===============================


if(typeof winEffect==="function"){


winEffect();


}





}
// ===============================
// AUTO RANDOM 💖
// ===============================


let autoRunning=false;



const autoBtn =

document.getElementById(
"autoBtn"
);




if(autoBtn){



autoBtn.onclick=function(){



if(autoRunning)

return;



autoRunning=true;



autoBtn.disabled=true;



autoBtn.innerHTML=

"🎡 กำลังสุ่ม...";





let count=0;



let timer =

setInterval(()=>{



spinWheel();



count++;





if(count>=3){



clearInterval(timer);



autoRunning=false;



autoBtn.disabled=false;



autoBtn.innerHTML=

"💖 สุ่มจนกว่าจะถูกใจ";



}



},6500);





};



}









// ===============================
// INIT 🎡
// ===============================


drawWheel();


updateMode();






// ===============================
// EXPORT
// ===============================


window.spinWheel =
spinWheel;





}
