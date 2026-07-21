/* =================================
 Dinner Roulette Chompu V17 ❤️
 Couple Share Card FIX 📸💕
================================= */



// ===============================
// UPDATE SHARE CARD
// ===============================


function updateShareCard(data){


if(!data)
return;




const food =
document.getElementById(
"shareFood"
);


const drink =
document.getElementById(
"shareDrink"
);


const dessert =
document.getElementById(
"shareDessert"
);


const date =
document.getElementById(
"shareDate"
);




if(food){

food.innerHTML =

data.food || "🍜 -";

}




if(drink){

drink.innerHTML =

data.drink || "🥤 -";

}




if(dessert){

dessert.innerHTML =

data.dessert || "🍰 -";

}




if(date){

date.innerHTML =

"📅 "+

new Date()

.toLocaleDateString(
"th-TH",
{
year:"numeric",
month:"long",
day:"numeric"
}

);

}



}



window.updateShareCard =
updateShareCard;









// ===============================
// SAVE IMAGE 📸
// ===============================


function saveShareImage(){



const card =

document.getElementById(
"shareCard"
);



if(!card){

if(typeof showToast==="function")

showToast(
"❌ ไม่พบ Share Card"
);


return;

}





if(typeof html2canvas==="undefined"){


showToast(
"❌ ระบบสร้างรูปยังไม่พร้อม"
);


return;


}





html2canvas(card,{

scale:2,

useCORS:true,

backgroundColor:null


})

.then(canvas=>{



const link=

document.createElement(
"a"
);



link.download=

"Dinner-Roulette-Chompu.png";



link.href=

canvas.toDataURL(
"image/png"
);



link.click();





if(typeof completeShareMission==="function"){


completeShareMission();


}




if(typeof showToast==="function"){


showToast(
"📸 บันทึกรูปแล้ว ❤️"
);


}



})

.catch(()=>{


showToast(
"❌ สร้างรูปไม่สำเร็จ"
);


});



}



window.saveShareImage =
saveShareImage;









// ===============================
// SHARE TO CHOMPU 💕
// ===============================


function shareToChompu(){



const food=

document.getElementById(
"shareFood"
)?.innerText

||

"🍜 -";



const drink=

document.getElementById(
"shareDrink"
)?.innerText

||

"🥤 -";



const dessert=

document.getElementById(
"shareDessert"
)?.innerText

||

"🍰 -";







const text=

`
❤️ Dinner Roulette Chompu


🍽️ วันนี้กิน

${food}

${drink}

${dessert}


💕 กินด้วยกันนะ ❤️
`;







if(navigator.share){



navigator.share({

title:
"Dinner Roulette ❤️",

text:text


})

.then(()=>{


completeShare();


})

.catch(()=>{});



}

else{



if(navigator.clipboard){


navigator.clipboard.writeText(
text
);


}



completeShare();



}





}








function completeShare(){



if(typeof completeShareMission==="function"){


completeShareMission();


}



if(typeof showToast==="function"){


showToast(
"📤 แชร์ให้ Chompu แล้ว ❤️"
);


}



}





window.shareToChompu =
shareToChompu;









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{





const saveBtn=

document.getElementById(
"saveImageBtn"
);



if(saveBtn){



saveBtn.onclick=

saveShareImage;


}







updateShareCard({

food:"🍜 -",

drink:"🥤 -",

dessert:"🍰 -"


});



});
