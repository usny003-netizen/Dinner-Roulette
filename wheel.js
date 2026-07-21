/* =================================
   Dinner Roulette V2.5 ❤️
   wheel.js 🎡
================================= */


const canvas = document.getElementById("wheel");


if(canvas){


const ctx = canvas.getContext("2d");



// ===============================
// MENU DATA
// ===============================


const foods = [

"🥘 หมูกระทะ",
"🍲 ชาบู",
"🐷 หมูย่างจิ้มแจ่ว",
"🍗 ไก่ทอด",
"🍜 ก๋วยเตี๋ยว",
"🍣 ซูชิ",
"🥩 ปิ้งย่าง",
"🍕 พิซซ่า",
"🍔 เบอร์เกอร์",
"🍱 อาหารญี่ปุ่น"

];



const drinks = [

"🧋 ชานมไข่มุก",
"🥤 น้ำอัดลม",
"🍵 ชาไทย",
"☕ กาแฟ",
"🍓 น้ำสตรอว์เบอร์รี"

];



const desserts = [

"🍰 เค้ก",
"🍧 บิงซู",
"🍨 ไอศกรีม",
"🍮 พุดดิ้ง",
"🍪 คุกกี้"

];






// ===============================
// SOUND
// ===============================


const clickSound =

new Audio(
"sounds/click.mp3"
);



const winSound =

new Audio(
"sounds/win.mp3"
);





// ===============================
// VARIABLE
// ===============================


let spinning=false;


let rotation=0;


let currentFood="";





// ===============================
// DRAW WHEEL
// ===============================



function drawWheel(){



let mode =

window.chooseMode || "ฉัน";




let colors;





if(mode==="แฟน"){



colors=[

"#a8dcff",

"#d7f3ff"

];


}

else if(mode==="สุ่ม"){



colors=[

"#d8b4fe",

"#f0abfc"

];


}

else{


colors=[

"#ffd1e5",

"#fff0f6"

];


}







const center =

canvas.width/2;



const radius=center;



const slice =

(Math.PI*2)

/

foods.length;







ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);








foods.forEach((food,index)=>{





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

colors[index%2];



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


ctx.font="18px Arial";



ctx.fillText(

food,

radius-20,

8

);





ctx.restore();





});



}







window.drawWheel = drawWheel;



drawWheel();









// ===============================
// SPIN BUTTON
// ===============================



const spinBtn =

document.getElementById(

"spinBtn"

);





if(spinBtn){


spinBtn.onclick = spinWheel;


}









function spinWheel(){



if(spinning)

return;



spinning=true;




clickSound.currentTime=0;

clickSound.play();







let index =

Math.floor(

Math.random()*foods.length

);





currentFood=

foods[index];








let drink =

drinks[

Math.floor(

Math.random()*drinks.length

)

];





let dessert =

desserts[

Math.floor(

Math.random()*desserts.length

)

];







let sliceAngle =

360 / foods.length;







let finalRotation =


360*6 +

(360-(index*sliceAngle));








rotation += finalRotation;






canvas.style.transition =

"transform 5s cubic-bezier(.17,.67,.24,1)";





canvas.style.transform =

`rotate(${rotation}deg)`;










setTimeout(()=>{



spinning=false;



winSound.currentTime=0;

winSound.play();




showDinner({

food:currentFood,

drink:drink,

dessert:dessert

});





createWinEffect();




},5000);






}









// ===============================
// SHOW RESULT
// ===============================



function showDinner(data){



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

food.innerHTML=data.food;



if(drink)

drink.innerHTML=data.drink;



if(dessert)

dessert.innerHTML=data.dessert;







window.currentDinnerSet=data;






// บันทึก History


if(typeof saveDinnerHistory==="function"){


saveDinnerHistory(data);


}





}









// ===============================
// WIN EFFECT 🎉
// ===============================



function createWinEffect(){



for(let i=0;i<25;i++){



let star=document.createElement("div");



star.innerHTML="✨";



star.style.position="fixed";


star.style.left=

Math.random()*100+"%";


star.style.top=

Math.random()*100+"%";



star.style.fontSize="30px";


star.style.zIndex="999";



star.style.animation=

"heartUp 2s forwards";




document.body.appendChild(star);




setTimeout(()=>{


star.remove();


},2000);




}



}



}
