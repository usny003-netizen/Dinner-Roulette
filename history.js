/* =================================
 Dinner Roulette V10 ❤️
 History System 📜
================================= */


let historyData =

JSON.parse(

localStorage.getItem(
"dinnerHistory"
)

)||[];







// =============================
// SAVE HISTORY
// =============================


function saveHistory(data){


if(!data || !data.food)

return;



let historyItem={


food:data.food,


drink:data.drink || "🥤 น้ำเปล่า",


dessert:data.dessert || "🍰 ของหวาน",


mode:data.mode || "ฉัน",


date:new Date()

.toLocaleString(
"th-TH"
)


};





historyData.unshift(

historyItem

);





// จำกัด 30 รายการล่าสุด

if(historyData.length>30){


historyData.pop();


}







localStorage.setItem(

"dinnerHistory",

JSON.stringify(
historyData

)

);





renderHistory();



}









// =============================
// SHOW HISTORY
// =============================


function renderHistory(){



const list =

document.getElementById(
"historyList"
);




if(!list)

return;






list.innerHTML="";





if(historyData.length===0){



list.innerHTML=

`

<li>
ยังไม่มีประวัติ ❤️
</li>

`;

return;


}







historyData.forEach(

(item,index)=>{


let li=

document.createElement(
"li"
);




li.innerHTML=


`

<div>

🍜 ${item.food}

<br>

🥤 ${item.drink}

<br>

🍰 ${item.dartess || item.dessert}

<br>

👤 ${item.mode}

<br>

🕒 ${item.date}

</div>


<button 

class="deleteHistory"

data-index="${index}">

🗑️ ลบ

</button>


`;





list.appendChild(li);



});





bindHistoryDelete();



}









// =============================
// DELETE ITEM
// =============================


function bindHistoryDelete(){



document

.querySelectorAll(
".deleteHistory"
)

.forEach(btn=>{



btn.onclick=()=>{


let index=

btn.dataset.index;



historyData.splice(

index,

1

);





localStorage.setItem(

"dinnerHistory",

JSON.stringify(
historyData

)

);





renderHistory();



};



});


}









// =============================
// CLEAR ALL
// =============================


function clearHistory(){



historyData=[];



localStorage.removeItem(

"dinnerHistory"

);



renderHistory();



}









// =============================
// GET HISTORY
// =============================


function getHistory(){


return historyData;


}









// =============================
// AUTO LOAD
// =============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderHistory();



});






// เปิดใช้ภายนอก

window.saveHistory =
saveHistory;


window.getHistory =
getHistory;


window.clearHistory =
clearHistory;
