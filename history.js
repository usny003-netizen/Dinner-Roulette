/* =================================
 Dinner Roulette V12 ❤️
 Couple History System 📜💕
================================= */



let historyFoods =

JSON.parse(

localStorage.getItem(
"dinnerHistory"

)

)||[];







// ===============================
// SAVE HISTORY
// ===============================


function saveHistory(data){



if(!data || !data.food)

return;





const record={



food:data.food,


drink:data.drink || "🥤 น้ำหวาน",


dessert:data.dessert || "🍰 ของหวาน",


mode:data.mode || "สุ่ม",



date:

new Date()

.toLocaleDateString(
"th-TH"
),



time:

new Date()

.toLocaleTimeString(
"th-TH",

{

hour:"2-digit",

minute:"2-digit"

}

)



};






historyFoods.unshift(
record
);






// จำกัด 20 รายการล่าสุด


if(historyFoods.length>20){


historyFoods.pop();


}






localStorage.setItem(

"dinnerHistory",

JSON.stringify(
historyFoods

)

);





renderHistory();



}





window.saveHistory =
saveHistory;









// ===============================
// DISPLAY
// ===============================


function renderHistory(){



const list=

document.getElementById(
"historyList"
);



if(!list)

return;





list.innerHTML="";







if(historyFoods.length===0){



list.innerHTML=

`

<li>
ยังไม่มีประวัติ ❤️
</li>

`;



return;


}







historyFoods.forEach(

(item,index)=>{



let li=

document.createElement(
"li"
);







let chooser="";



if(item.mode==="แฟน"){


chooser=
"💕 Chompu เลือก";


}

else if(item.mode==="ฉัน"){


chooser=
"🌸 ฉันเลือก";


}

else{


chooser=
"🎲 สุ่มเลือก";


}








li.innerHTML=

`

<div>

❤️ ${item.food}


<br>

🥤 ${item.drink}


<br>

🍰 ${item.dartess || item.dessert}


<br>


${chooser}


<br>


📅 ${item.date}

 ⏰ ${item.time}


</div>



<button onclick="removeHistory(${index})">

🗑️ ลบ

</button>

`;





list.appendChild(
li
);



});






}









// ===============================
// DELETE
// ===============================


function removeHistory(index){



historyFoods.splice(

index,

1

);



localStorage.setItem(

"dinnerHistory",

JSON.stringify(
historyFoods

)

);



renderHistory();


}



window.removeHistory =
removeHistory;









// ===============================
// CLEAR ALL
// ===============================


function clearHistory(){



historyFoods=[];



localStorage.removeItem(
"dinnerHistory"
);



renderHistory();



}




window.clearHistory =
clearHistory;









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderHistory();


});
