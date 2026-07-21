/* =================================
 Dinner Roulette V10 ❤️
 Wheel System 🎡
================================= */


const canvas = document.getElementById("wheel");


if(canvas){


const ctx = canvas.getContext("2d");





// =========================
// MENU DATA
// =========================


const foods = [


{
name:"🥘 หมูกระทะ",
category:"grill"
},


{
name:"🍲 ชาบู",
category:"grill"
},


{
name:"🐷 หมูย่างจิ้มแจ่ว",
category:"thai"
},


{
name:"🍗 ไก่ทอด",
category:"fast"
},


{
name:"🍜 ก๋วยเตี๋ยว",
category:"noodle"
},


{
name:"🍣 ซูชิ",
category:"japan"
},


{
name:"🥩 ปิ้งย่าง",
category:"grill"
},


{
name:"🍕 พิซซ่า",
category:"fast"
},


{
name:"🍔 เบอร์เกอร์",
category:"fast"
},


{
name:"🍱 อาหารญี่ปุ่น",
category:"japan"
}



];





let currentFoods=[...foods];


let spinning=false;


let currentMode="ฉัน";


let currentRotation=0;


let currentResult="";





// เสียง

const clickSound =
new Audio("click.mp3");


const winSound =
new Audio("win.mp3");







// =========================
// COLORS
// =========================


let wheelColors=[

"#ffd1e5",
"#fff0b8"

];





function changeWheelTheme(mode){



if(mode==="ฉัน"){


wheelColors=[

"#ffb6d9",
"#ffe1ef"

];


}



else if(mode==="แฟน"){


wheelColors=[

"#cdb4ff",
"#bde0fe"

];


}



else{


wheelColors=[

"#ffcad4",
"#caffbf",
"#bde0fe",
"#ffc8dd"

];


}



drawWheel();



}








// =========================
// DRAW WHEEL
// =========================



function drawWheel(){



const center =
canvas.width/2;


const radius=center;


const slice=

(Math.PI*2)/currentFoods.length;



ctx.clearRect(

0,
0,
canvas.width,
canvas.height

);





currentFoods.forEach((food,index)=>{


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

wheelColors[index %
wheelColors.length];



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

food.name,

radius-20,

8

);



ctx.restore();



});



}








// =========================
// FILTER CATEGORY
// =========================


window.changeCategory=function(category){



if(category==="all"){


currentFoods=[...foods];


}

else{


currentFoods=

foods.filter(

food=>

food.category===category

);


}



drawWheel();


}









// =========================
// AVOID FILTER
// =========================


function getAvailableFoods(){



let avoid=

JSON.parse(

localStorage.getItem(
"avoidList"

)

)||[];





return currentFoods.filter(

food=>

!avoid.includes(food.name)

);


}









// =========================
// MODE BUTTON
// =========================


document.querySelectorAll(".mode")

.forEach(btn=>{


btn.onclick=()=>{


document.querySelectorAll(".mode")

.forEach(b=>

b.classList.remove("active")

);



btn.classList.add("active");



currentMode=

btn.dataset.mode;




changeWheelTheme(

currentMode

);



let name=

document.getElementById(
"partnerName"
).value;



let msg=

document.getElementById(
"chooserMessage"
);




if(currentMode==="แฟน"){


msg.innerHTML=

`💕

วันนี้ ${name}

เลือกให้`;

}


else if(currentMode==="สุ่ม"){


msg.innerHTML=

"🎲 วันนี้โชคชะตาเลือกให้";


}


else{


msg.innerHTML=

"🌸 วันนี้ฉันเลือกให้";


}



};



});









// =========================
// SPIN BUTTON
// =========================


const spinBtn=

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



let available=

getAvailableFoods();



if(available.length===0){


alert(

"ไม่มีเมนูให้สุ่มแล้ว ❤️"

);


return;


}





spinning=true;



clickSound.currentTime=0;

clickSound.play();




let result=

available[

Math.floor(

Math.random()*available.length

)

];





currentResult=result;





let index=

currentFoods.indexOf(result);




let angle=

360/currentFoods.length;




let rotate=

360*6+

(360-index*angle);



currentRotation+=rotate;




canvas.style.transform=

`rotate(${currentRotation}deg)`;




canvas.style.transition=

"transform 5s cubic-bezier(.17,.67,.24,1)";







setTimeout(()=>{


spinning=false;



winSound.play();



showResult(result);




},5000);






}









// =========================
// RESULT
// =========================


function showResult(food){



document.getElementById(

"foodResult"

).innerHTML=

food.name;





// share card

if(typeof updateShareCard==="function"){


updateShareCard({

food:food.name,

drink:"🥤 น้ำหวาน",

dessert:"🍰 ของหวาน"

});


}







// mission


if(typeof completeSpinMission==="function"){


completeSpinMission();


}






// effect


if(typeof winEffect==="function"){


winEffect();


}







}









// เริ่มต้น


drawWheel();


changeWheelTheme("ฉัน");



}
