/* =================================
 Dinner Roulette Chompu V18 ❤️
 Perfect Pointer Wheel Engine
 Part 1/4
================================= */


const canvas = document.getElementById("wheel");


if(canvas){


const ctx = canvas.getContext("2d");



// ===============================
// FOOD DATABASE 🍽️
// ===============================


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




// ===============================
// VARIABLE
// ===============================


let wheelFoods = [...foods];


let currentFood = null;


let spinning = false;


let rotation = 0;


window.currentMode = "ฉัน";





// ===============================
// COLORS 🎨
// ===============================


const colors = [

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

index * slice +

slice/2

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






// CENTER ❤️


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
// INIT
// ===============================


drawWheel();


// ===============================
// MODE SYSTEM 👫
// ===============================


function updateModeColor(){


const mode = window.currentMode;


let box = document.querySelectorAll(".mode");



box.forEach(btn=>{


btn.classList.remove("active");


});





const active =

document.querySelector(

`.mode[data-mode="${mode}"]`

);



if(active){

active.classList.add("active");

}




drawWheel();


}




// ===============================
// MODE BUTTON CLICK
// ===============================


document.querySelectorAll(".mode")

.forEach(btn=>{


btn.onclick=function(){



// เอา active ออกจากทุกปุ่มก่อน

document.querySelectorAll(".mode")

.forEach(b=>{

b.classList.remove("active");

});




// ใส่ active เฉพาะปุ่มที่กด

this.classList.add("active");




// จำโหมด

window.currentMode =

this.dataset.mode;



const name =

document.getElementById(
"partnerName"
)?.value || "Chompu";




const message =

document.getElementById(
"chooserMessage"
);




if(message){


if(window.currentMode==="ฉัน"){


message.innerHTML =

"🌸 วันนี้ฉันเลือกให้";


}


else if(window.currentMode==="แฟน"){


message.innerHTML =

`💕 วันนี้ ${name} เลือกให้`;


}


else{


message.innerHTML =

"🎲 ให้หัวใจเลือก";


}



}



updateModeColor();



};



});







// ===============================
// CATEGORY SYSTEM 🍽️
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
// AVOID SYSTEM 🚫
// ===============================


function getAvoid(){



return JSON.parse(

localStorage.getItem(
"avoidList"

)

)

||[];

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
// INIT MODE
// ===============================


updateModeColor();}
// ===============================
// SPIN ENGINE 🎡
// POINTER FIX VERSION
// ===============================


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

document.getElementById("spinBtn");



if(spinBtn)

spinBtn.disabled=true;





// ===============================
// SELECT FOOD
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







// ===============================
// CALCULATE POINTER 🎯
// ===============================


const index =

wheelFoods.indexOf(currentFood);



const slice =

360 /

wheelFoods.length;



// หาจุดกลางของช่องอาหาร

const foodCenter =

(index * slice)

+

(slice / 2);



// Pointer อยู่ด้านบน 270 องศา

const target =

270 - foodCenter;



// หมุนเพิ่ม 8 รอบ

rotation +=

(360 * 8)

+

target;





// ป้องกันองศาสูงเกิน

rotation =

rotation % 360 +

360 * 8;






canvas.style.transition =

"transform 6s cubic-bezier(.17,.67,.24,1)";




canvas.style.transform =

`rotate(${rotation}deg)`;







// ===============================
// MESSAGE
// ===============================


const status =

document.getElementById(
"statusMessage"
);



if(status){


if(window.currentMode==="ฉัน"){


status.innerHTML=

"🌸 กำลังเลือกเมนูให้ Chompu ❤️";


}

else if(window.currentMode==="แฟน"){


status.innerHTML=

"💕 Chompu กำลังเลือกอาหาร";


}

else{


status.innerHTML=

"🎲 หัวใจกำลังตัดสินใจ";


}



}








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






window.spinWheel = spinWheel;
// ===============================
// SHOW RESULT 🍽️
// ===============================


function showResult(){



if(!currentFood)

return;





// FOOD

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


const main =

document.getElementById(
"mainMessage"
);



if(main){



if(window.currentMode==="ฉัน"){


main.innerHTML =

`
🌸 วันนี้ฉันเลือกให้

<br>

${currentFood.name}
`;



}

else if(window.currentMode==="แฟน"){


main.innerHTML =

`
💕 Chompu เลือกให้

<br>

${currentFood.name}
`;



}

else{


main.innerHTML =

`
🎲 หัวใจเลือกให้

<br>

${currentFood.name}
`;



}



}






// EFFECT

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
// INITIAL DRAW
// ===============================


drawWheel();

updateModeColor();





}
