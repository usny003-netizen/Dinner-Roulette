/* =================================
 Dinner Roulette Chompu V19 ❤️
 Wheel Engine CLEAN
 PART 1
================================= */


const canvas = document.getElementById("wheel");


if(canvas){


const ctx = canvas.getContext("2d");


// ===============================
// FOOD DATA
// ===============================


const foods=[

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
}

];



// ===============================
// VARIABLE
// ===============================


let wheelFoods=[...foods];

let currentFood=null;

let rotation=0;

let spinning=false;


window.currentMode="ฉัน";




// ===============================
// DRAW
// ===============================


function drawWheel(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



let center=canvas.width/2;

let radius=center;

let slice=
(Math.PI*2)
/wheelFoods.length;



wheelFoods.forEach((food,i)=>{


ctx.beginPath();


ctx.moveTo(
center,
center
);


ctx.arc(
center,
center,
radius,
i*slice,
(i+1)*slice
);



ctx.fillStyle=
[
"#ffafcc",
"#ffc8dd",
"#ffd6e7",
"#ffe5ec"
][i%4];



ctx.fill();


ctx.strokeStyle="#fff";

ctx.stroke();



// TEXT

ctx.save();


ctx.translate(
center,
center
);


ctx.rotate(
i*slice+slice/2
);


ctx.textAlign="right";

ctx.font="15px Tahoma";

ctx.fillStyle="#555";


ctx.fillText(
food.name,
radius-15,
5
);


ctx.restore();



});



// CENTER

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
// SPIN
// ===============================


function spinWheel(){


if(spinning)
return;



spinning=true;



let index=
Math.floor(
Math.random()*wheelFoods.length
);



currentFood=
wheelFoods[index];



let slice=
360/wheelFoods.length;



let foodAngle=
index*slice+(slice/2);



let target=
270-foodAngle;



rotation +=
360*8+target;



canvas.style.transition=
"transform 5s cubic-bezier(.17,.67,.24,1)";


canvas.style.transform=
`rotate(${rotation}deg)`;



setTimeout(()=>{


spinning=false;


showResult();



},5000);



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
).innerHTML=
currentFood.name;



document.getElementById(
"drinkResult"
).innerHTML=
currentFood.drink;



document.getElementById(
"dessertResult"
).innerHTML=
currentFood.dessert;



document.getElementById(
"mainMessage"
).innerHTML=
`
❤️ วันนี้เลือกได้แล้ว
<br>
${currentFood.name}
`;



}





// START

drawWheel();



console.log(
"❤️ Wheel V19 Ready"
);



}
