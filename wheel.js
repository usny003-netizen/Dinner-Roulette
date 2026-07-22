/* =========================================
 Dinner Roulette Chompu V19 ❤️
 Wheel Engine FINAL
 Single File Version
========================================= */


document.addEventListener("DOMContentLoaded",()=>{


const canvas = document.getElementById("wheel");


if(!canvas){

console.warn("ไม่พบ canvas wheel");

return;

}



const ctx = canvas.getContext("2d");



// =========================================
// FOOD DATABASE 🍽️
// =========================================


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




// =========================================
// VARIABLES
// =========================================


let wheelFoods = [...foods];


let currentFood = null;


let spinning = false;


let rotation = 0;


window.currentMode = "ฉัน";




// =========================================
// COLORS 🎨
// =========================================


const colors=[

"#ffafcc",
"#ffc8dd",
"#ffd6e7",
"#ffe5ec",
"#ffd1dc"

];




// =========================================
// DRAW WHEEL 🎡
// =========================================


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



const center = canvas.width / 2;


const radius = canvas.width / 2;


const slice =

(Math.PI * 2) / wheelFoods.length;





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

index * slice,

(index+1)*slice

);



ctx.fillStyle = colors[index % colors.length];


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


ctx.textBaseline="middle";


ctx.fillStyle="#555";


ctx.font="16px Tahoma";


ctx.fillText(

food.name,

radius-25,

0

);



ctx.restore();



});




// CENTER ❤️


ctx.beginPath();


ctx.arc(

center,

center,

38,

0,

Math.PI*2

);


ctx.fillStyle="#fff";


ctx.fill();



ctx.font="30px Arial";


ctx.textAlign="center";


ctx.textBaseline="middle";


ctx.fillText(

"❤️",

center,

center

);



}

// =========================================
// EXPORT DRAW
// =========================================

window.drawWheel = drawWheel;



// =========================================
// AVOID SYSTEM 🚫
// =========================================


function getAvoidList(){


return JSON.parse(

localStorage.getItem("avoidList")

)

||[];

}





function applyAvoid(){


const avoid = getAvoidList();



wheelFoods = wheelFoods.filter(food=>{


return !avoid.includes(food.name);


});



drawWheel();



}



window.applyAvoid = applyAvoid;







// =========================================
// CATEGORY SYSTEM 🍽️
// =========================================


window.changeCategory=function(category){



if(category==="all"){


wheelFoods=[...foods];


}

else{


wheelFoods = foods.filter(food=>{


return food.category===category;


});


}



applyAvoid();



};







// =========================================
// RESET AVOID
// =========================================


const resetAvoidBtn =

document.getElementById(
"resetAvoidBtn"
);



if(resetAvoidBtn){



resetAvoidBtn.onclick=function(){



localStorage.removeItem(
"avoidList"
);



wheelFoods=[...foods];


drawWheel();



};



}






// =========================================
// SPIN ENGINE 🎡
// =========================================


function spinWheel(){



if(spinning)

return;



applyAvoid();



if(wheelFoods.length===0){


alert("🚫 ไม่มีเมนูให้สุ่ม");


return;


}



spinning=true;




const spinBtn =

document.getElementById(
"spinBtn"
);



if(spinBtn)

spinBtn.disabled=true;







// RANDOM RESULT

if(typeof smartRandom==="function"){


currentFood = smartRandom(wheelFoods);


}

else{


currentFood =

wheelFoods[

Math.floor(

Math.random()*wheelFoods.length

)

];


}






const index =

wheelFoods.indexOf(currentFood);





const slice =

360 / wheelFoods.length;




const foodCenter =

(index * slice)

+

(slice/2);





// pointer ด้านบน

const pointer = 270;



const target =

pointer-foodCenter;



rotation +=

(360*8)+target;






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





window.spinWheel = spinWheel;




// =========================================
// FINISH SPIN 🎉
// =========================================


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







// =========================================
// SHOW RESULT 🍽️
// =========================================


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

food.innerHTML=currentFood.name;



if(drink)

drink.innerHTML=currentFood.drink;



if(dessert)

dessert.innerHTML=currentFood.dessert;








const message =

document.getElementById(
"mainMessage"
);



if(message){


message.innerHTML=

`

❤️ วันนี้เลือกได้แล้ว

<br>

${currentFood.name}

`;



}






// SHARE

if(typeof updateShareCard==="function"){


updateShareCard({

food:currentFood.name,

drink:currentFood.drink,

dessert:currentFood.dessert

});


}







// HISTORY

if(typeof saveHistory==="function"){


saveHistory({

food:currentFood.name,

drink:currentFood.drink,

dessert:currentFood.dessert,

mode:window.currentMode

});


}







// EFFECT

if(typeof winEffect==="function"){


winEffect();


}



}







// =========================================
// AUTO SPIN 💖
// =========================================


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




const timer=setInterval(()=>{



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






// =========================================
// INITIAL
// =========================================


drawWheel();





});
// END DOM CONTENT LOADED
