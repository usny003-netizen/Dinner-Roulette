/* =================================
 Dinner Roulette Chompu V21 ❤️
 Wheel Engine CLEAN FINAL
 PART 1/4
================================= */


const canvas = document.getElementById("wheel");


if(canvas){


const ctx = canvas.getContext("2d");



// =================================
// FOOD DATABASE 🍽️
// =================================


const foods = [

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



// =================================
// GLOBAL SYSTEM
// =================================


let wheelFoods = [...foods];


let rotation = 0;


let spinning = false;

// ===============================
// SOUND SYSTEM 🔊
// ===============================

const tickSound = new Audio("tick.mp3");

tickSound.volume = 0.35;
tickSound.preload = "auto";


const winSound = new Audio("win.mp3");

winSound.volume = 0.7;
winSound.preload = "auto";


window.currentFood = null;


window.currentMode = "ฉัน";



// =================================
// COLORS
// =================================


const colors = [

"#ffafcc",
"#ffc8dd",
"#ffd6e7",
"#ffe5ec",
"#ffd1dc"

];



// =================================
// DRAW WHEEL 🎡
// =================================


function drawWheel(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



if(wheelFoods.length===0){

return;

}



const center =
canvas.width / 2;



const radius =
canvas.width / 2;



const slice =
(Math.PI * 2) /
wheelFoods.length;




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

index * slice,

(index + 1) * slice

);



ctx.fillStyle =
colors[index % colors.length];



ctx.fill();



ctx.strokeStyle =
"#ffffff";


ctx.lineWidth = 3;


ctx.stroke();



// TEXT

ctx.save();


ctx.translate(
center,
center
);



ctx.rotate(
index * slice + slice / 2
);



ctx.textAlign =
"right";


ctx.textBaseline =
"middle";


ctx.fillStyle =
"#555";


ctx.font =
"15px Tahoma";



ctx.fillText(

food.name,

radius - 20,

0

);



ctx.restore();



});



// CENTER HEART ❤️


ctx.beginPath();


ctx.arc(

center,

center,

38,

0,

Math.PI * 2

);



ctx.fillStyle =
"#ffffff";


ctx.fill();



ctx.font =
"30px Arial";


ctx.textAlign =
"center";


ctx.textBaseline =
"middle";



ctx.fillText(

"❤️",

center,

center

);



}



window.drawWheel = drawWheel;



drawWheel();


/* =================================
 CATEGORY SYSTEM 🍽️
 PART 2/4
================================= */


// =================================
// CHANGE CATEGORY
// =================================


window.changeCategory = function(category){



if(category === "all"){


wheelFoods = [...foods];


}

else{


wheelFoods = foods.filter(food=>{


return food.category === category;


});


}



// วาดวงล้อใหม่

drawWheel();



};




// =================================
// RESET WHEEL
// =================================


function resetWheel(){


wheelFoods = [...foods];


drawWheel();


}



window.resetWheel = resetWheel;





// =================================
// AVOID SYSTEM CONNECT 🚫
// =================================


function applyAvoid(){



const avoidList =

JSON.parse(

localStorage.getItem("avoidList")

)

|| [];



wheelFoods = wheelFoods.filter(food=>{


return !avoidList.includes(food.name);


});



drawWheel();



}



window.applyAvoid = applyAvoid;





// =================================
// RESET AVOID BUTTON
// =================================


const resetAvoidBtn =

document.getElementById(
"resetAvoidBtn"
);



if(resetAvoidBtn){



resetAvoidBtn.onclick = ()=>{


localStorage.removeItem(
"avoidList"
);



wheelFoods = [...foods];


drawWheel();



if(typeof showToast === "function"){


showToast(
"🔄 ล้างรายการไม่กินแล้ว"
);


}



};


}
/* =================================
 SPIN ENGINE 🎡
 PART 3/4
================================= */



function spinWheel(){


if(spinning)

return;



if(wheelFoods.length === 0){


alert(
"🚫 ไม่มีเมนูให้สุ่ม"
);


return;


}



spinning = true;



const spinBtn =
document.getElementById(
"spinBtn"
);



if(spinBtn)

spinBtn.disabled = true;





// ===============================
// RANDOM RESULT
// ===============================


const index =

Math.floor(

Math.random() *

wheelFoods.length

);




window.currentFood =

wheelFoods[index];






// ===============================
// ROTATE
// ===============================


const slice =

360 /

wheelFoods.length;



const centerAngle =

(index * slice)

+

(slice / 2);



const pointer = 270;



const target =

pointer -

centerAngle;



rotation +=

(360 * 8)

+

target;




canvas.style.transition =

"transform 6s cubic-bezier(.17,.67,.24,1)";



canvas.style.transform =

`rotate(${rotation}deg)`;





const status =

document.getElementById(
"statusMessage"
);



if(status){


status.innerHTML =

"🎡 กำลังเลือกเมนูให้ Chompu ❤️";


}



// เสียงหมุน 🎵

tickSound.currentTime = 0;

tickSound.play()
.catch(()=>{});







setTimeout(()=>{


finishSpin();


},6000);



}




window.spinWheel = spinWheel;





// =================================
// FINISH
// =================================


function finishSpin(){



spinning = false;



const spinBtn =

document.getElementById(
"spinBtn"
);



if(spinBtn)

spinBtn.disabled = false;





showResult();



}





// =================================
// SHOW RESULT 🍽️
// =================================


function showResult(){



const food =

window.currentFood;



if(!food)

return;






const foodBox =

document.getElementById(
"foodResult"
);



const drinkBox =

document.getElementById(
"drinkResult"
);



const dessertBox =

document.getElementById(
"dessertResult"
);




if(foodBox)

foodBox.innerHTML =
food.name;



if(drinkBox)

drinkBox.innerHTML =
food.drink;



if(dessertBox)

dessertBox.innerHTML =
food.dessert;






const message =

document.getElementById(
"mainMessage"
);



if(message){


message.innerHTML =

`
❤️ วันนี้เลือกได้แล้ว
<br>
${food.name}
`;



}




// SHARE CONNECT

if(typeof updateShareCard === "function"){


updateShareCard({

food:food.name,

drink:food.drink,

dessert:food.dessert

});


}





// HISTORY CONNECT

if(typeof saveHistory === "function"){


saveHistory({

food:food.name,

drink:food.drink,

dessert:food.dessert,

mode:window.currentMode

});


}





// EFFECT

if(typeof winEffect === "function"){


winEffect();


}
 
 // WIN SOUND 🔊

const winSound =
new Audio("win.mp3");

winSound.volume = 0.7;

winSound.play()
.catch(()=>{});





// MISSION

if(typeof completeSpinMission === "function"){


completeSpinMission();


}





}


/* =================================
 AUTO SPIN + CONNECT
 PART 4/4
================================= */



// =================================
// AUTO SPIN 💖
// =================================


let autoRunning = false;



const autoBtn =

document.getElementById(
"autoBtn"
);



if(autoBtn){



autoBtn.onclick = ()=>{



if(autoRunning)

return;



autoRunning = true;



autoBtn.disabled = true;


autoBtn.innerHTML =

"🎡 กำลังสุ่ม...";





let count = 0;



const timer = setInterval(()=>{



spinWheel();



count++;





if(count >= 3){



clearInterval(timer);



autoRunning = false;



autoBtn.disabled = false;



autoBtn.innerHTML =

"💖 สุ่มจนกว่าจะถูกใจ";



}



},6500);





};



}





// =================================
// EXPORT SYSTEM ❤️
// =================================


// ให้ไฟล์อื่นเรียกได้


window.getFoods = function(){


return foods;


};




window.getWheelFoods = function(){


return wheelFoods;


};





console.log(

"🎡 Wheel Engine V21 Ready ❤️"

);



}
// END CANVAS CHECK
