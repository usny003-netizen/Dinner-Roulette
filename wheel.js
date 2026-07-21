/* =================================
   Dinner Roulette V2 ❤️
   wheel.js 🎡
================================= */



const canvas =

document.getElementById("wheel");



if(canvas){



const ctx =

canvas.getContext("2d");






// ===============================
// MENU DATA 🍽️
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

"🍱 อาหารญี่ปุ่น",


];





const drinks = [


"🧋 ชานมไข่มุก",

"🥤 ชาไทย",

"☕ กาแฟ",

"🍵 ชาเขียว",

"🥛 นมสด",

"🍹 น้ำผลไม้"


];





const desserts = [


"🍰 เค้ก",

"🍧 บิงซู",

"🍨 ไอศกรีม",

"🍮 พุดดิ้ง",

"🍩 โดนัท",

"🍫 ช็อกโกแลต"


];






// ส่งข้อมูลให้ไฟล์อื่น

window.foodList = foods;







// ===============================
// SOUND 🔊
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
// WHEEL
// ===============================



let spinning=false;


let rotation=0;



let wheelMode="normal";






function drawWheel(){



const center =

canvas.width/2;



const radius = center;



const slice =

(Math.PI*2)/foods.length;





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






// สีวงล้อ


ctx.fillStyle =

index%2===0

?

"#ffd1e5"

:

"#fff2b8";





ctx.fill();






// ตัวหนังสือ


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

ctx.font="18px Arial";



ctx.fillText(

food,

radius-20,

8

);




ctx.restore();




});



}



drawWheel();










// ===============================
// SPIN BUTTON 🎡
// ===============================



const spinBtn =

document.getElementById("spinBtn");





if(spinBtn){



spinBtn.addEventListener(

"click",

spinWheel

);



}







function spinWheel(){



if(spinning)

return;



spinning=true;




// เสียงคลิก

clickSound.currentTime=0;

clickSound.play();






const random =


Math.floor(

Math.random()*foods.length

);






const food =

foods[random];






const rotate =


360*6 +

(360-(random*(360/foods.length)));







rotation += rotate;





canvas.style.transition =

"transform 5s cubic-bezier(.17,.67,.24,1)";




canvas.style.transform =

`rotate(${rotation}deg)`;








setTimeout(()=>{


spinning=false;



winSound.currentTime=0;

winSound.play();




showDinner(food);



},5000);



}










// ===============================
// CREATE FULL SET 🍽️
// ===============================



function randomItem(arr){


return arr[

Math.floor(

Math.random()*arr.length

)

];


}







function showDinner(food){



const dinner = {



food:food,


drink:

randomItem(drinks),


dessert:

randomItem(desserts)



};






// ส่งออก

window.currentDinnerSet = dinner;



window.currentFood = food;








// แสดงผล


document.getElementById(

"foodResult"

).innerHTML =

dinner.food;





document.getElementById(

"drinkResult"

).innerHTML =

dinner.drink;






document.getElementById(

"dessertResult"

).innerHTML =

dinner.dessert;








const status =

document.getElementById(

"statusMessage"

);





if(status){


status.innerHTML =


"🎉 ได้เมนูแล้ว ขอให้อร่อยนะ ❤️";


}






// เอฟเฟกต์

if(typeof createHearts==="function"){


createHearts();


}




}






}
