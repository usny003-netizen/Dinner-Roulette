/* =================================
 Dinner Roulette Chompu V20 ❤️
 Share System FINAL
================================= */


// ================================
// UPDATE SHARE CARD
// ================================

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
data.food ?
data.dessert :
"-";



if(date)

date.innerHTML =
"📅 "+
new Date()
.toLocaleDateString("th-TH");



}


window.updateShareCard =
updateShareCard;







// ================================
// SAVE IMAGE 📸
// ================================


const saveImageBtn =
document.getElementById(
"saveImageBtn"
);



if(saveImageBtn){


saveImageBtn.onclick=function(){



const card =
document.getElementById(
"shareCard"
);



if(!card){

alert(
"ไม่พบ Share Card"
);

return;

}




if(typeof html2canvas==="undefined"){


alert(
"โหลดระบบรูปไม่สำเร็จ"
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



if(typeof completeShareMission==="function"){

completeShareMission();

}



});



};


}







// ================================
// SHARE CHOMPU
// ================================


function shareToChompu(){



const food =
document.getElementById(
"shareFood"
)?.innerText
||"-";



const text =

`
❤️ Dinner Roulette

วันนี้กิน

${food}

กินด้วยกันนะ Chompu 💕

`;




if(navigator.share){



navigator.share({

title:
"Dinner Roulette ❤️",

text:text


})

.catch(()=>{});



}

else{


navigator.clipboard
.writeText(text);



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






// ================================
// AUTO CONNECT BUTTON
// ================================


const shareBtn =
document.getElementById(
"shareBtn"
);



if(shareBtn){


shareBtn.onclick=function(){


shareToChompu();


};


}
