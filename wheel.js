/* =================================
   Dinner Roulette V4.1 ❤️
   Wheel + Avoid + Full Set 🎡
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
"🍵 ชาไทย",
"🥤 น้ำอัดลม",
"☕ กาแฟ",
"🍓 น้ำผลไม้"

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


const clickSound = new Audio(
"click.mp3"
);


const winSound = new Audio(
"win.mp3"
);


const tickSound = new Audio(
"tick.mp3"
);







// ===============================
// VARIABLE
// ===============================


let spinning = false;

let rotation = 0;

let currentFood = "";









// ===============================
// DRAW WHEEL
// ===============================


function drawWheel(){


const mode = window.chooseMode || "ฉัน";



let colors;



if(mode === "แฟน"){


colors=[

"#bde0fe",

"#caf0f8"

];


}

else if(mode === "สุ่ม"){


colors=[

"#e0c3fc",

"#fbc2eb"

];


}

else{


colors=[

"#ffd1e5",

"#fff0f6"

];


}





const center = canvas.width / 2;

const radius = center;


const slice =

(Math.PI * 2) / foods.length;





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

index * slice,

(index+1)*slice

);



ctx.fillStyle =

colors[index%2];



ctx.fill();






ctx.save();



ctx.translate(

center,

center

);



ctx.rotate(

index * slice + slice/2

);



ctx.textAlign="right";


ctx.font="18px Arial";


ctx.fillStyle="#555";



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
// CHECK AVOID
// ===============================


function getAvailableFoods(){



return foods.filter(food=>{



if(typeof isAvoid === "function"){


return !isAvoid(food);


}



return true;



});



}








function randomFood(){



let list =

getAvailableFoods();





if(list.length === 0){



alert(

"ไม่มีเมนูเหลือแล้ว ❤️ ล้างเมนูไม่เอาก่อนได้เลย"

);



return foods[

Math.floor(

Math.random()*foods.length

)

];



}





return list[

Math.floor(

Math.random()*list.length

)

];



}









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



spinning = true;






clickSound.currentTime = 0;

clickSound.play();






currentFood = randomFood();






let index =

foods.indexOf(currentFood);






let sliceAngle =

360 / foods.length;







let target =

360*7 +

(360 - index*sliceAngle);








rotation += target;







canvas.style.transition =

"transform 5s cubic-bezier(.17,.67,.24,1)";





canvas.style.transform =

`rotate(${rotation}deg)`;









let tick = setInterval(()=>{


tickSound.currentTime=0;

tickSound.play();


},180);








setTimeout(()=>{



clearInterval(tick);



spinning=false;




winSound.currentTime=0;

winSound.play();





let dinnerSet = {


food: currentFood,



drink:

drinks[

Math.floor(

Math.random()*drinks.length

)

],




dessert:

desserts[

Math.floor(

Math.random()*desserts.length

)

]



};






showResult(dinnerSet);






createWinEffect();






},5000);





}









// ===============================
// SHOW RESULT
// ===============================


function showResult(data){



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






if(typeof saveDinnerHistory === "function"){


saveDinnerHistory(data);


}




}









// ===============================
// WIN EFFECT ❤️
// ===============================


function createWinEffect(){



for(let i=0;i<20;i++){



let item=document.createElement("div");


item.className="heart";


item.innerHTML=

["❤️","✨","⭐","🎉"][

Math.floor(

Math.random()*4

)

];



item.style.left=

Math.random()*100+"%";



document.body.appendChild(item);




setTimeout(()=>{


item.remove();


},2000);



}



}






}
