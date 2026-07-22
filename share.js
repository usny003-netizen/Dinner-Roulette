/* =================================
 Dinner Roulette Chompu V20 ❤️
 Share System FINAL
================================= */


function updateShareCard(data){

if(!data) return;


document.getElementById("shareFood").innerHTML =
"🍜 " + data.food;


document.getElementById("shareDrink").innerHTML =
data.drink;


document.getElementById("shareDessert").innerHTML =
data.dessert;


document.getElementById("shareDate").innerHTML =
"📅 " + new Date().toLocaleDateString("th-TH");


}


window.updateShareCard = updateShareCard;





document.addEventListener("DOMContentLoaded",()=>{


// ==========================
// SAVE IMAGE
// ==========================

const saveBtn =
document.getElementById("saveImageBtn");


if(saveBtn){


saveBtn.onclick=function(){


const card =
document.getElementById("shareCard");


if(!card){

alert("ไม่พบ Share Card");

return;

}



if(typeof html2canvas==="undefined"){

alert("html2canvas โหลดไม่สำเร็จ");

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
canvas.toDataURL("image/png");


link.click();



if(typeof completeShareMission==="function"){

completeShareMission();

}



});


};


}





// ==========================
// SHARE BUTTON
// ==========================


const shareBtn =
document.getElementById("shareBtn");


if(shareBtn){


shareBtn.onclick=function(){


let text =

`
❤️ Dinner Roulette

${document.getElementById("shareFood").innerText}

กินด้วยกันนะ Chompu 💕

`;



if(navigator.share){


navigator.share({

title:"Dinner Roulette",

text:text

});


}else{


navigator.clipboard.writeText(text);


alert("📋 คัดลอกแล้ว");


}



};


}



});
