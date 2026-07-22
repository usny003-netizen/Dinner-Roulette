/* =========================================
   Dinner Roulette Chompu V19 ❤️
   Perfect Pointer Wheel Engine
   PART 1A
========================================= */


const canvas = document.getElementById("wheel");


if(canvas){


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
// VARIABLES 🎡
// =========================================


let wheelFoods = [...foods];


let currentFood = null;


let spinning = false;


let rotation = 0;


// ใช้ร่วมกับ script.js

window.currentMode = "ฉัน";




// =========================================
// COLORS 🎨
// =========================================


const colors = [

"#ffafcc",
"#ffc8dd",
"#ffd6e7",
"#ffe5ec",
"#ffd1dc",
"#ffc2d1"

];




// =========================================
// BASIC FUNCTION
// =========================================


function getCenter(){

return canvas.width / 2;

}



function getRadius(){

return canvas.width / 2;

}



function getSlice(){

return (

Math.PI * 2

)

/

wheelFoods.length;

}
/* =========================================
   PART 1B
   DRAW WHEEL SYSTEM 🎡
========================================= */



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





const center = getCenter();


const radius = getRadius();


const slice = getSlice();





wheelFoods.forEach((food,index)=>{





// ===============================
// DRAW SLICE
// ===============================


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





ctx.strokeStyle="#ffffff";


ctx.lineWidth=3;


ctx.stroke();






// ===============================
// TEXT
// ===============================


ctx.save();





ctx.translate(

center,

center

);





ctx.rotate(

index * slice + slice / 2

);





ctx.textAlign="right";


ctx.textBaseline="middle";


ctx.fillStyle="#555";



ctx.font="16px Tahoma";





ctx.fillText(

food.name,

radius - 25,

0

);





ctx.restore();





});








// ===============================
// CENTER ❤️
// ===============================


ctx.beginPath();



ctx.arc(

center,

center,

38,

0,

Math.PI * 2

);





ctx.fillStyle="#ffffff";


ctx.fill();





ctx.strokeStyle="#ffafcc";


ctx.lineWidth=4;


ctx.stroke();





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
// REFRESH WHEEL
// =========================================


function refreshWheel(){


drawWheel();


}





window.refreshWheel = refreshWheel;
/* =========================================
   PART 1C
   MODE + CATEGORY SYSTEM 👫🍽️
========================================= */



// =========================================
// MODE SYSTEM
// =========================================


function updateModeUI(){



document.querySelectorAll(".mode")

.forEach(btn=>{


btn.classList.remove("active");


});





const active =

document.querySelector(

`.mode[data-mode="${window.currentMode}"]`

);




if(active){

active.classList.add("active");

}



}





// =========================================
// MODE BUTTON
// =========================================


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



};

});








// =========================================
// CATEGORY SYSTEM 🍽️
// =========================================


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





if(typeof applyAvoid==="function"){


applyAvoid();


}





drawWheel();



};







// =========================================
// GET CURRENT FOODS
// =========================================


function getWheelFoods(){


return wheelFoods;


}




window.getWheelFoods =

getWheelFoods;





// =========================================
// RESET CATEGORY
// =========================================


function resetWheel(){



wheelFoods=[...foods];



if(typeof applyAvoid==="function"){


applyAvoid();


}



drawWheel();



}




window.resetWheel =

resetWheel;





// =========================================
// INIT
// =========================================


updateModeUI();


drawWheel();
/* =========================================
   PART 2
   SMART + AVOID SYSTEM 🧠🚫
========================================= */



// =========================================
// GET AVOID LIST
// =========================================


function getAvoidList(){


return JSON.parse(

localStorage.getItem(
"avoidList"
)

)

||[];


}




window.getAvoidList =

getAvoidList;





// =========================================
// APPLY AVOID
// =========================================


function applyAvoid(){



const avoid = getAvoidList();





wheelFoods =

foods.filter(food=>{



return !avoid.includes(
food.name
);



});






drawWheel();



}





window.applyAvoid =

applyAvoid;







// =========================================
// REMOVE ONE FOOD
// =========================================


function removeFood(foodName){



wheelFoods =

wheelFoods.filter(food=>


food.name !== foodName


);




drawWheel();



}





window.removeFood =

removeFood;







// =========================================
// SMART RANDOM 🧠
// =========================================


function smartRandom(list){



if(!list || list.length===0){


return null;


}





// ถ้ามี favorite ใช้โอกาสเพิ่ม

let favorites =

JSON.parse(

localStorage.getItem(
"favoriteFoods"

)

)

||[];







let favoritePool =

list.filter(food=>


favorites.some(item=>

item.food===food.name

)


);








if(

favoritePool.length>0 &&

Math.random()<0.4

){



return favoritePool[

Math.floor(

Math.random()

*

favoritePool.length

)

];



}







return list[

Math.floor(

Math.random()

*

list.length

)

];





}





window.smartRandom =

smartRandom;








// =========================================
// SHUFFLE FOOD
// =========================================


function shuffleFoods(){



wheelFoods.sort(()=>


Math.random()-0.5


);



drawWheel();



}




window.shuffleFoods =

shuffleFoods;








// =========================================
// CHECK EMPTY
// =========================================


function checkWheelEmpty(){



if(wheelFoods.length===0){



alert(

"🚫 ไม่มีเมนูที่เลือกได้"

);



return true;


}



return false;



}




window.checkWheelEmpty =

checkWheelEmpty;







// =========================================
// INIT AVOID
// =========================================


applyAvoid();
/* =========================================
   PART 3
   PERFECT POINTER SPIN ENGINE 🎡🎯
========================================= */



// =========================================
// SPIN FUNCTION
// =========================================


function spinWheel(){



if(spinning)

return;




if(checkWheelEmpty && checkWheelEmpty()){

return;

}




spinning = true;





const btn =

document.getElementById(
"spinBtn"
);




if(btn)

btn.disabled = true;








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







const index =

wheelFoods.indexOf(
currentFood
);







// ===============================
// POINTER CALCULATION 🎯
// ===============================


const sliceDegree =

360 /

wheelFoods.length;







// จุดกลางของช่อง

const foodCenter =

(index * sliceDegree)

+

(sliceDegree / 2);







// Pointer อยู่ 270 องศา

const pointer = 270;







const targetAngle =

pointer - foodCenter;








// เพิ่มรอบหมุน

rotation +=

(360 * 8)

+

targetAngle;







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



status.innerHTML =

"🎡 กำลังเลือกเมนูให้ Chompu ❤️";



}









setTimeout(()=>{


finishSpin();


},6000);





}








window.spinWheel = spinWheel;







// =========================================
// FINISH SPIN
// =========================================


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

food.innerHTML=

currentFood.name;





if(drink)

drink.innerHTML=

currentFood.drink;





if(dessert)

dessert.innerHTML=

currentFood.dessert;









// UPDATE SHARE


if(typeof updateShareCard==="function"){


updateShareCard({


food:currentFood.name,

drink:currentFood.drink,

dessert:currentFood.dessert


});


}









// SAVE HISTORY


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

/* =========================================
   PART 4
   FINAL CONTROL SYSTEM ❤️
========================================= */



// =========================================
// AUTO SPIN 💖
// =========================================


let autoRunning = false;



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



let timer=setInterval(()=>{



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
// REROLL 🚫
// =========================================


const rerollBtn =

document.getElementById(
"rerollBtn"
);




if(rerollBtn){



rerollBtn.onclick=function(){





if(!currentFood)

return;






// เพิ่มเข้า avoid

let avoid =

JSON.parse(

localStorage.getItem(
"avoidList"

)

)

||[];







if(!avoid.includes(currentFood.name)){



avoid.push(
currentFood.name
);



localStorage.setItem(

"avoidList",

JSON.stringify(
avoid

)

);



}





applyAvoid();





spinWheel();




};





}










// =========================================
// LIKE 👍
// =========================================


const likeBtn =

document.getElementById(
"likeBtn"
);





if(likeBtn){



likeBtn.onclick=function(){



if(!currentFood)

return;






if(typeof saveLikeFood==="function"){


saveLikeFood(
currentFood.name
);


}






if(typeof completeLikeMission==="function"){


completeLikeMission();


}






if(typeof createHeart==="function"){


createHeart();


}



};



}










// =========================================
// FAVORITE ⭐
// =========================================


const favoriteBtn =

document.getElementById(
"favoriteBtn"
);




if(favoriteBtn){



favoriteBtn.onclick=function(){



if(!currentFood)

return;








if(typeof saveFavorite==="function"){



saveFavorite({


food:currentFood.name,

drink:currentFood.drink,

dessert:currentFood.dessert


});



}



};




}








// =========================================
// EXPORT
// =========================================


window.spinWheel =

spinWheel;



window.drawWheel =

drawWheel;



window.showResult =

showResult;



window.applyAvoid =

applyAvoid;







// =========================================
// FINAL INIT
// =========================================


drawWheel();



updateModeUI();



