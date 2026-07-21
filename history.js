/* =================================
   Dinner Roulette V2 ❤️
   history.js 📜
================================= */



let historyData =

JSON.parse(

localStorage.getItem("history")

)

|| [];





const historyList =

document.getElementById(

"historyList"

);







// ===============================
// แสดงประวัติ 📜
// ===============================


function showHistory(){



if(!historyList)

return;





historyList.innerHTML="";







if(historyData.length===0){



historyList.innerHTML =


`
<li>
ยังไม่มีประวัติ 📜
</li>
`;



return;


}







historyData.forEach((item)=>{



const li =

document.createElement("li");





li.innerHTML =



`
❤️ ${item.food}

<br>

🥤 ${item.drink}

<br>

🍰 ${item.dessert}

<br>

<small>

📅 ${item.date}

</small>

`;





historyList.appendChild(li);




});




}









// ===============================
// บันทึกประวัติ
// ===============================



function saveHistory(dinner){



if(!dinner)

return;






const newHistory = {



food:dinner.food,


drink:dinner.drink,


dessert:dinner.bessert || dinner.dessert,



date:

new Date()

.toLocaleString(

"th-TH"

)


};







historyData.unshift(

newHistory

);






// เก็บแค่ 10 รายการ


if(historyData.length>10){



historyData.pop();



}






localStorage.setItem(

"history",

JSON.stringify(historyData)

);






showHistory();



}









// ===============================
// รับค่าจาก wheel.js
// ===============================



window.saveDinnerHistory =

saveHistory;






// โหลดตอนเปิดเว็บ

showHistory();
