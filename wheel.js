/* =================================
 Dinner Roulette Chompu V17 ❤️
 Perfect Couple Wheel Engine FIX
================================= */


const canvas =
document.getElementById("wheel");


if(canvas){


const ctx =
canvas.getContext("2d");



// ===============================
// FOOD DATABASE
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


let wheelFoods=[...foods];


let currentFood=null;


let spinning=false;


let rotation=0;



// สำคัญ
window.currentMode="ฉัน";




// ===============================
// COLOR
// ===============================


const colorsMode={


ฉัน:[

"#ffafcc",
"#ffc8dd",
"#ffd6e7",
"#ffe5ec"

],


แฟน:[

"#a2d2ff",
"#bde0fe",
"#cdb4ff",
"#ffc8dd"

],


สุ่ม:[

"#ffd6a5",
"#caffbf",
"#bde0fe",
"#ffc8dd"

]


};



let colors =
colorsMode.ฉัน;



// ===============================
// MODE SYSTEM FIX ❤️
// ===============================


function setupMode(){



const buttons =

document.querySelectorAll(
".mode"
);





buttons.forEach(btn=>{



btn.onclick=()=>{



buttons.forEach(b=>{


b.classList.remove(
"active"
);


});





btn.classList.add(
"active"
);





window.currentMode =

btn.dataset.mode;




updateColor();




updateChooserText();




};



});



}




function updateChooserText(){



const msg=

document.getElementById(
"chooserMessage"
);



if(!msg)
return;



let name=

document.getElementById(
"partnerName"
)?.value

||

"Chompu";





if(window.currentMode==="ฉัน"){



msg.innerHTML=
"🌸 วันนี้ฉันเลือกให้";


}


else if(window.currentMode==="แฟน"){



msg.innerHTML=
`💕 วันนี้ ${name} เลือกให้`;


}


else{



msg.innerHTML=
"🎲 ให้หัวใจเลือก";


}



}




function updateColor(){



colors=

colorsMode[

window.currentMode

]

|| colorsMode.ฉัน;



drawWheel();


}

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




const center =
canvas.width/2;



const radius =
canvas.width/2;



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



ctx.fillStyle =

colors[

index %

colors.length

];



ctx.fill();




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


ctx.font="16px Tahoma";



ctx.fillText(

food.name,

radius-20,

5

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







// ===============================
// CATEGORY SYSTEM 🍽️
// ===============================


window.changeCategory=function(category){



if(category==="all"){


wheelFoods=[...foods];


}

else{


wheelFoods =

foods.filter(

food=>

food.category===category

);


}




applyAvoid();


drawWheel();



};









// ===============================
// AVOID SYSTEM 🚫
// ===============================


function getAvoid(){


return JSON.parse(

localStorage.getItem(
"avoidList"
)

)

||[];

}





function applyAvoid(){



const avoid =

getAvoid();




wheelFoods =

wheelFoods.filter(

food=>

!avoid.includes(
food.name
)

);



}









// ===============================
// RESET CATEGORY AFTER AVOID
// ===============================


function reloadWheel(){



wheelFoods=[...foods];


applyAvoid();


drawWheel();



}



window.reloadWheel =
reloadWheel;









// ===============================
// PARTNER NAME UPDATE
// ===============================


const partnerInput =

document.getElementById(
"partnerName"
);



if(partnerInput){



partnerInput.oninput=()=>{


if(window.currentMode==="แฟน"){



updateChooserText();



}


};



}

// ===============================
// SPIN ENGINE 🎡
// ===============================


function spinWheel(){



if(spinning)

return;




applyAvoid();





if(wheelFoods.length===0){


alert(
"🚫 ไม่มีเมนูให้สุ่ม"
);


return;


}






spinning=true;





const spinBtn=

document.getElementById(
"spinBtn"
);



if(spinBtn)

spinBtn.disabled=true;








// ===============================
// SELECT FOOD
// ===============================


if(typeof smartRandom==="function"){



currentFood =

smartRandom(
wheelFoods
);



}

else{



currentFood=

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





const slice =

360 /

wheelFoods.length;





const stop =

270 -

(

index *

slice

+

slice/2

);







rotation +=

360*8

+

stop;









canvas.style.transition =

"transform 6s cubic-bezier(.17,.67,.24,1)";



canvas.style.transform =

`rotate(${rotation}deg)`;









const status =

document.getElementById(
"statusMessage"
);



if(status){



if(window.currentMode==="ฉัน"){


status.innerHTML=
"🌸 กำลังเลือกให้ Chompu";


}

else if(window.currentMode==="แฟน"){


status.innerHTML=
"💕 Chompu กำลังเลือก";


}

else{


status.innerHTML=
"🎲 หัวใจเป็นคนเลือก";


}



}








setTimeout(()=>{


finishSpin();


},6000);



}









// ===============================
// FINISH
// ===============================


function finishSpin(){



spinning=false;




const spinBtn=

document.getElementById(
"spinBtn"
);



if(spinBtn)

spinBtn.disabled=false;






showResult();





if(typeof completeSpinMission==="function"){


completeSpinMission();


}







if(typeof createHeart==="function"){


createHeart();


}




}









// ===============================
// RESULT 🍽️
// ===============================


function showResult(){



if(!currentFood)

return;






const food=

document.getElementById(
"foodResult"
);



const drink=

document.getElementById(
"drinkResult"
);



const dessert=

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








// SHARE CARD


const shareFood=

document.getElementById(
"shareFood"
);



const shareDrink=

document.getElementById(
"shareDrink"
);



const shareDessert=

document.getElementById(
"shareDessert"
);






if(shareFood)

shareFood.innerHTML=

currentFood.name;



if(shareDrink)

shareDrink.innerHTML=

currentFood.drink;



if(shareDessert)

shareDessert.innerHTML=

currentFood.dessert;









// HISTORY


if(typeof saveHistory==="function"){



saveHistory({

food:currentFood.name,

drink:currentFood.drink,

dessert:currentFood.dessert,

mode:window.currentMode

});



}









// MESSAGE


const main =

document.getElementById(
"mainMessage"
);



if(main){



if(window.currentMode==="ฉัน"){



main.innerHTML=

`
🌸 วันนี้ฉันเลือกให้
<br>
${currentFood.name}
`;



}

else if(window.currentMode==="แฟน"){



main.innerHTML=

`
💕 Chompu เลือกให้
<br>
${currentFood.name}
`;



}

else{



main.innerHTML=

`
🎲 หัวใจเลือกให้
<br>
${currentFood.name}
`;



}



}








if(typeof winEffect==="function"){


winEffect();


}




}









// ===============================
// EXPORT
// ===============================


window.spinWheel=

spinWheel;









// ===============================
// INIT
// ===============================


setupMode();


updateColor();


drawWheel();



}
