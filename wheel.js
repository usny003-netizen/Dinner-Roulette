/* =================================
 Dinner Roulette V11 ❤️
 Wheel Spin System 🎡
================================= */


const canvas = document.getElementById("wheel");


if(canvas){


const ctx = canvas.getContext("2d");



// =============================
// FOOD DATABASE
// =============================


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





let wheelFoods=[...foods];


let currentMode="ฉัน";


let spinning=false;


let rotation=0;


let currentFood=null;





const clickSound =
new Audio("click.mp3");


const winSound =
new Audio("win.mp3");







// =============================
// COLOR THEME
// =============================


let colors=[

"#ffc8dd",
"#ffe5ec"

];





function setWheelColor(mode){


if(mode==="ฉัน"){


colors=[

"#ffb6d9",
"#ffd6e7"

];


}



else if(mode==="แฟน"){


colors=[

"#bde0fe",
"#cdb4ff"

];


}



else{


colors=[

"#ffadad",
"#ffd6a5",
"#caffbf",
"#bde0fe"

];


}



drawWheel();


}








// =============================
// DRAW
// =============================


function drawWheel(){


const center =
canvas.width/2;


const radius=center;



ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);




if(wheelFoods.length===0)

return;




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



ctx.fillStyle=

colors[index % colors.length];



ctx.fill();




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


ctx.font="17px Tahoma";



ctx.fillText(

food.name,

radius-20,

8

);



ctx.restore();



});


}









// =============================
// CATEGORY
// =============================


window.changeCategory=function(category){


if(category==="all"){


wheelFoods=[...foods];


}

else{


wheelFoods=

foods.filter(

item=>

item.category===category

);


}



drawWheel();


}









// =============================
// AVOID SYSTEM
// =============================


function getAvoid(){


return JSON.parse(

localStorage.getItem(
"avoidList"

)

)||[];


}







function getAvailable(){


let avoid=getAvoid();



return wheelFoods.filter(

food=>

!avoid.includes(food.name)

);


}









// =============================
// MODE BUTTON
// =============================


document.querySelectorAll(".mode")

.forEach(btn=>{


btn.addEventListener(

"click",

()=>{


document

.querySelectorAll(".mode")

.forEach(b=>

b.classList.remove("active")

);



btn.classList.add("active");



currentMode=

btn.dataset.mode;



setWheelColor(

currentMode

);



let name=

document.getElementById(

"partnerName"

).value;



let message=

document.getElementById(

"chooserMessage"

);




if(currentMode==="แฟน"){


message.innerHTML=

`❤️ วันนี้ ${name} เลือกให้`;

}


else if(currentMode==="สุ่ม"){


message.innerHTML=

"🎲 วันนี้ให้โชคชะตาเลือก";

}


else{


message.innerHTML=

"🌸 วันนี้ฉันเลือกให้";

}


}


);



});









// =============================
// SPIN
// =============================


function spinWheel(){



if(spinning)

return;



let available=

getAvailable();




if(available.length===0){


alert(

"🚫 ไม่มีเมนูให้สุ่มแล้ว"

);


return;


}



spinning=true;



clickSound.currentTime=0;

clickSound.play();





currentFood=

available[

Math.floor(

Math.random()*available.length

)

];






let index=

wheelFoods.indexOf(

currentFood

);





let slice=

360/wheelFoods.length;





let stop=

360*6+

(360-(index*slice+slice/2));






rotation+=stop;





canvas.style.transition=

"transform 5s cubic-bezier(.17,.67,.24,1)";



canvas.style.transform=

`rotate(${rotation}deg)`;







setTimeout(()=>{


spinning=false;


winSound.play();


showResult();



},5000);



}






window.spinWheel=

spinWheel;









// =============================
// RESULT
// =============================


function showResult(){



if(!currentFood)

return;




const result=

document.getElementById(
"foodResult"
);



if(result){


result.innerHTML=

currentFood.name;


}






// HISTORY

if(typeof saveHistory==="function"){


saveHistory({

food:currentFood.name,

drink:"🥤 น้ำหวาน",

dessert:"🍰 ของหวาน",

mode:currentMode

});


}






// SHARE CARD


if(typeof updateShareCard==="function"){


updateShareCard({

food:currentFood.name,

drink:"🥤 น้ำหวาน",

dessert:"🍰 ของหวาน"

});


}





// MISSION

if(typeof completeSpinMission==="function"){


completeSpinMission();


}





// EFFECT

if(typeof winEffect==="function"){


winEffect();


}





}








// START


drawWheel();


setWheelColor("ฉัน");



}
