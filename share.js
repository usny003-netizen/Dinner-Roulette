/* =================================
 Dinner Roulette Chompu V19 ❤️
 Share System
 PART 4.3
================================= */


function updateShareCard(data){


if(!data)
return;



document.getElementById(
"shareFood"
).innerHTML=
"🍜 "+data.food;



document.getElementById(
"shareDrink"
).innerHTML=
data.drink;



document.getElementById(
"shareDessert"
).innerHTML=
data.dessert;



document.getElementById(
"shareDate"
).innerHTML=
"📅 "+
new Date()
.toLocaleDateString("th-TH");



}



window.updateShareCard=
updateShareCard;







function shareToChompu(){


let text=

`
❤️ Dinner Roulette

วันนี้กิน

${
document.getElementById("shareFood")
.innerText
}

กินด้วยกันนะ 💕

`;




if(navigator.share){


navigator.share({

title:"Dinner Roulette",

text:text

});



}
else{


navigator.clipboard.writeText(text);



alert(
"📋 คัดลอกแล้ว"
);


}




completeShareMission();



}



window.shareToChompu=
shareToChompu;
