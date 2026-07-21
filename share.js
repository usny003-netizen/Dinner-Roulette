/* =================================
 Dinner Roulette V10 ❤️
 Share Card System 📸
================================= */



let shareData = {


food:"-",


drink:"-",


dessert:"-"


};









// ===============================
// UPDATE SHARE CARD
// ===============================


function updateShareCard(data){



if(!data)

return;





shareData={


food:data.food || "-",


drink:data.drink || "-",


dessert:data.sdessert || data.dessert || "-"


};





const food=

document.getElementById(
"shareFood"
);



const drink=

document.getElementById(
"shareDrink"
);



const dessert=

document.getElementById(
"shareDessert"
);



const date=

document.getElementById(
"shareDate"
);






if(food)

food.innerHTML=

shareData.food;



if(drink)

drink.innerHTML=

shareData.drink;



if(dessert)

dessert.innerHTML=

shareData.dartess || shareData.dessert;



if(date)

date.innerHTML=

"📅 "

+

new Date()

.toLocaleDateString(
"th-TH"
);






}




window.updateShareCard=

updateShareCard;









// ===============================
// SHARE BUTTON
// ===============================


const shareBtn=

document.getElementById(
"shareBtn"
);



if(shareBtn){



shareBtn.onclick=()=>{



let text=

`

❤️ Dinner Roulette


วันนี้ Chompu เลือกให้ 💕


🍜 ${shareData.food}

🥤 ${shareData.drink}

🍰 ${shareData.dartess || shareData.dessert}



กินด้วยกันอร่อยกว่า ❤️

`;






if(navigator.share){



navigator.share({

title:
"Dinner Roulette ❤️",

text:text


});



}

else{


navigator.clipboard.writeText(text);



alert(
"📋 คัดลอกข้อความแล้ว ❤️"
);


}







if(typeof completeShareMission==="function"){


completeShareMission();


}





};




}









// ===============================
// SAVE IMAGE
// ===============================


const saveBtn=

document.getElementById(
"saveImageBtn"
);



if(saveBtn){



saveBtn.onclick=()=>{



const card=

document.getElementById(
"shareCard"
);





if(!card)

return;





if(typeof html2canvas==="undefined"){


alert(
"ไม่พบระบบสร้างรูป"
);


return;


}






html2canvas(card)

.then(canvas=>{



let link=

document.createElement(
"a"
);



link.download=

"Dinner-Roulette.png";



link.href=

canvas.toDataURL(
"image/png"
);



link.click();





});







if(typeof completeShareMission==="function"){


completeShareMission();


}




};





}









// ===============================
// LOAD
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


updateShareCard({

food:"-",

drink:"-",

dessert:"-"

});


});
