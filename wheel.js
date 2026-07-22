/* =================================
 Dinner Roulette Chompu V20 ❤️
 Wheel Engine FINAL FIX
 1/6
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

window.currentFood = null;

let rotation = 0;

let spinning = false;

window.currentMode = "ฉัน";




// ===============================
// COLOR
// ===============================


const colors=[

"#ffafcc",
"#ffc8dd",
"#ffd6e7",
"#ffe5ec",
"#ffd1dc"

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



const center = canvas.width / 2;

const radius = canvas.width / 2;


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

ctx.textBaseline="middle";

ctx.fillStyle="#555";

ctx.font="15px Tahoma";


ctx.fillText(
food.name,
radius-20,
0
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



window.drawWheel = drawWheel;



drawWheel();





// ===============================
// CATEGORY
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


drawWheel();


};






// ===============================
// SPIN 🎡
// ===============================


function spinWheel(){


if(spinning)
return;



if(wheelFoods.length===0){

alert("🚫 ไม่มีเมนู");

return;

}



spinning=true;



const index =
Math.floor(
Math.random()*wheelFoods.length
);



window.currentFood =
wheelFoods[index];



const slice =
360 / wheelFoods.length;


const target =
360*8 -
(index*slice) -
(slice/2);



rotation += target;



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
"🎡 กำลังเลือกให้ Chompu ❤️";

}



setTimeout(()=>{

finishSpin();

},6000);



}



window.spinWheel = spinWheel;





// ===============================
// FINISH
// ===============================


function finishSpin(){


spinning=false;


showResult();


}




// ===============================
// RESULT
// ===============================


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





const msg =
document.getElementById(
"mainMessage"
);



if(msg){

msg.innerHTML =
`
❤️ วันนี้เลือกได้แล้ว
<br>
${food.name}
`;

}





// SHARE CONNECT

if(typeof updateShareCard==="function"){


updateShareCard({

food:food.name,

drink:food.drink,

dessert:food.dessert

});


}





// HISTORY CONNECT

if(typeof saveHistory==="function"){


saveHistory({

food:food.name,

drink:food.drink,

dessert:food.dessert,

mode:window.currentMode

});


}




if(typeof winEffect==="function"){

winEffect();

}



}



}
