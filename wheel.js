/* =================================
 Dinner Roulette V15 ❤️
 Smart Couple Wheel System 🎡💕
================================= */


const canvas = document.getElementById("wheel");


if(canvas){


const ctx = canvas.getContext("2d");



// ===============================
// FOOD DATABASE 🍽️
// ===============================


const foods = [

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





let wheelFoods=[...foods];

let currentFood=null;

let currentMode="ฉัน";

let rotation=0;

let spinning=false;





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
// COLOR 💕
// ===============================


let colors=[

"#ffafcc",
"#ffc8dd",
"#ffd6e7"

];





function setWheelTheme(mode){


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
"#bde0fe"

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
// SMART WEIGHT
// ===============================


function getSmartWeight(food){


if(typeof smartScore==="function"){


return smartScore(food.name);


}


return 0;


}







// ===============================
// AVAILABLE FOOD
// ===============================


function getAvailableFood(){



let avoid =

JSON.parse(

localStorage.getItem("avoidList")

)||[];




return wheelFoods.filter(food =>

!avoid.includes(food.name)

);



}








// ===============================
// SMART RANDOM
// ===============================


function smartRandom(list){



let pool=[];



list.forEach(food=>{


let score=getSmartWeight(food);



let amount=1+score;



for(let i=0;i<amount;i++){


pool.push(food);


}


});



return pool[

Math.floor(

Math.random()*pool.length

)

];



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




let center=

canvas.width/2;



let radius=center;



let slice=

Math.PI*2 /

wheelFoods.length;




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



ctx.fillStyle=

colors[index%colors.length];



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

index*slice+slice/2

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




// center ❤️


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


wheelFoods=

foods.filter(food=>

food.category===category

);


}



drawWheel();


};










// ===============================
// MODE
// ===============================


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



setWheelTheme(currentMode);




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

`💕 วันนี้ ${name} เลือกให้`;

}

else if(currentMode==="สุ่ม"){


msg.innerHTML=

"🎲 ให้หัวใจเลือก";

}

else{


msg.innerHTML=

"🌸 วันนี้ฉันเลือกให้";

}



};



});









// ===============================
// SPIN
// ===============================


function spinWheel(){



if(spinning)

return;



let available=

getAvailableFood();




if(available.length===0){


alert(

"🚫 ไม่มีเมนูให้สุ่มแล้ว"

);


return;


}



spinning=true;



clickSound.play();



currentFood=

smartRandom(available);




let index=

wheelFoods.findIndex(

f=>

f.name===currentFood.name

);



let degree=

360/wheelFoods.length;




let target=

360*8 -

(index*degree+degree/2);



rotation += target;



canvas.style.transition=

"transform 6s cubic-bezier(.17,.67,.24,1)";


canvas.style.transform=

`rotate(${rotation}deg)`;





tickSound.loop=true;

tickSound.play();




let status=

document.getElementById(

"statusMessage"

);


if(status)

status.innerHTML=

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

).innerText=

currentFood.name;



document.getElementById(

"drinkResult"

).innerText=

"🥤 น้ำหวาน";



document.getElementById(

"dessertResult"

).innerText=

"🍰 ของหวาน";







let main=

document.getElementById(

"mainMessage"

);



if(main){


main.innerHTML=

`

🎉 วันนี้กิน

<br>

${currentFood.name}

<br>

💕 กินด้วยกันอร่อยกว่า

`;


}





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








// START

drawWheel();

setWheelTheme("ฉัน");



}
