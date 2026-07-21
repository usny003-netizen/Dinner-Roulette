/* =================================
 Dinner Roulette V12 ❤️
 Couple Love Wheel 🎡💕
================================= */


const canvas =
document.getElementById("wheel");



if(canvas){


const ctx =
canvas.getContext("2d");





// ===============================
// FOOD DATA 🍽️
// ===============================


const foods=[


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






// SOUND

const clickSound=
new Audio("click.mp3");


const tickSound=
new Audio("tick.mp3");


const winSound=
new Audio("win.mp3");









// ===============================
// COLOR THEME 💕
// ===============================


let themeColors=[

"#ffb6d9",

"#ffd6e7",

"#ffc8dd"

];





function changeWheelTheme(mode){



if(mode==="แฟน"){



themeColors=[

"#bde0fe",

"#cdb4ff",

"#a2d2ff"

];



}



else if(mode==="สุ่ม"){



themeColors=[

"#ffd6a5",

"#caffbf",

"#bde0fe",

"#ffc8dd"

];



}



else{



themeColors=[

"#ffafcc",

"#ffc8dd",

"#ffd6e7"

];


}




drawWheel();



}









// ===============================
// DRAW WHEEL
// ===============================


function drawWheel(){



const center=
canvas.width/2;



const radius=center;



ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);





let slice=

Math.PI*2 /

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

index*slice,

(index+1)*slice

);



ctx.fillStyle=

themeColors[

index %

themeColors.length

];



ctx.fill();




// เส้นขอบ


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



ctx.font=
"16px Tahoma";



ctx.fillText(

food.name,

radius-25,

5

);




ctx.restore();



});






// ❤️ กลางวง


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


window.changeCategory=function(cat){



if(cat==="all"){


wheelFoods=[...foods];


}

else{


wheelFoods=

foods.filter(

f=>

f.category===cat

);


}





filterAvoid();


drawWheel();



}









// ===============================
// AVOID FILTER
// ===============================


function filterAvoid(){



let avoid=

JSON.parse(

localStorage.getItem(
"avoidList"

)

)||[];




wheelFoods=

wheelFoods.filter(

f=>

!avoid.includes(f.name)

);



}









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

`💕 วันนี้ ${name} เลือกให้`;


}

else if(currentMode==="สุ่ม"){


msg.innerHTML=

"🎲 ให้หัวใจเป็นคนเลือก";


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

wheelFoods;



if(available.length===0){


alert(

"🚫 ไม่มีเมนูให้สุ่ม"

);


return;


}



spinning=true;




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





let degree=

360 /

wheelFoods.length;






let target=

360*8 +

(360-(index*degree+degree/2));





rotation+=target;





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

"🎡 กำลังเลือกให้ Chompu... ❤️";









setTimeout(()=>{



tickSound.pause();


tickSound.currentTime=0;



winSound.play();



spinning=false;



showResult();




},6000);




}





window.spinWheel=

spinWheel;









// ===============================
// RESULT
// ===============================


function showResult(){



let food=

document.getElementById(

"foodResult"

);



if(food)

food.innerText=

currentFood.name;







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


changeWheelTheme("ฉัน");



}
