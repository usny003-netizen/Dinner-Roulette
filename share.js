/* =================================
 Dinner Roulette Chompu V19 ❤️
 Share System FINAL
================================= */


// ===============================
// UPDATE SHARE CARD
// ===============================

function updateShareCard(data){


if(!data) return;



const food =
document.getElementById("shareFood");


const drink =
document.getElementById("shareDrink");


const dessert =
document.getElementById("shareDessert");


const date =
document.getElementById("shareDate");



if(food)

food.innerHTML =
"🍜 " + data.food;



if(drink)

drink.innerHTML =
data.drink;



if(dessert)

dessert.innerHTML =
data.dessert;



if(date)

date.innerHTML =
"📅 " +
new Date()
.toLocaleDateString("th-TH");



}



window.updateShareCard =
updateShareCard;







// ===============================
// SAVE IMAGE 📸
// ===============================


function saveShareImage(){


const card =
document.getElementById("shareCard");



if(!card){


alert(
"ไม่พบ Share Card"
);


return;


}



if(typeof html2canvas === "undefined"){


alert(
"html2canvas ยังไม่โหลด"
);


return;


}



html2canvas(card,{

scale:3,

backgroundColor:"#ffffff"

})

.then(canvas=>{


const link =
document.createElement("a");



link.download =
"Dinner-Roulette-Chompu.png";



link.href =
canvas.toDataURL(
"image/png"
);



link.click();



console.log(
"📸 SAVE IMAGE SUCCESS"
);



if(typeof completeShareMission==="function"){


completeShareMission();


}



})


.catch(err=>{


console.error(
"Save Image Error:",
err
);


});



}



window.saveShareImage =
saveShareImage;









// ===============================
// SHARE TO CHOMPU 💕
// ===============================


function shareToChompu(){



const food =
document.getElementById("shareFood")
?.innerText
||
"วันนี้ยังไม่ได้เลือกเมนู";



const text =

`
❤️ Dinner Roulette

${food}

กินด้วยกันนะ Chompu 💕

`;



if(navigator.share){


navigator.share({

title:
"Dinner Roulette",

text:text


});



}

else if(navigator.clipboard){


navigator.clipboard.writeText(text);


alert(
"📋 คัดลอกข้อความแล้ว"
);


}



if(typeof completeShareMission==="function"){


completeShareMission();


}



}



window.shareToChompu =
shareToChompu;
