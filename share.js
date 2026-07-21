/* =================================
 Dinner Roulette V15 ❤️
 Couple Share Card System 📸💕
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


food.innerHTML=

"🍜 "+

(data.food || "-");


}



if(drink){


drink.innerHTML=

data.drink ||

"🥤 น้ำหวาน";


}



if(dessert){


dessert.innerHTML=

data.dessert ||

"🍰 ของหวาน";


}






if(date){


date.innerHTML=

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



window.updateShareCard=

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


showToast(
"❌ ไม่พบ Share Card"
);


return;


}






if(typeof html2canvas==="undefined"){



showToast(
"❌ ไม่พบระบบสร้างรูป"
);



return;


}





html2canvas(card,

{

scale:2,

backgroundColor:null


})

.then(canvas=>{



const link=

document.createElement("a");



link.download=

"Dinner-Roulette-Chompu.png";



link.href=

canvas.toDataURL(
"image/png"
);



link.click();




showToast(

"📸 บันทึกรูปแล้ว ❤️"

);



});



}



window.saveShareImage=

saveShareImage;









// ===============================
// SHARE TO CHOMPU 💕
// ===============================


function shareToChompu(){



const food=

document.getElementById(
"shareFood"
)?.innerText ||

"🍜 -";





const text=

`

❤️ Dinner Roulette


วันนี้ Chompu เลือกให้ 💕


${food}


กินด้วยกันนะ ❤️


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



navigator.clipboard.writeText(text);



showToast(

"📋 คัดลอกข้อความแล้ว ❤️"

);



}





if(typeof completeShareMission==="function"){



completeShareMission();



}





}



window.shareToChompu=

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


saveBtn.onclick=()=>{


saveShareImage();


};


}






const shareBtn=

document.getElementById(
"shareBtn"
);



if(shareBtn){


shareBtn.onclick=()=>{


shareToChompu();


};


}







updateShareCard({

food:"ยังไม่มีเมนู",

drink:"🥤 น้ำหวาน",

dessert:"🍰 ของหวาน"


});



});
