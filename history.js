/* =================================
 Dinner Roulette V15 ❤️
 Couple Memory Timeline 📜💕
================================= */



let historyFoods =

JSON.parse(

localStorage.getItem(
"dinnerHistory"
)

)||[];








// ===============================
// SAVE HISTORY 📜
// ===============================


function saveHistory(data){



if(!data || !data.food)

return;





const now = new Date();





const record={


food:data.food,


drink:data.drink || "🥤 น้ำหวาน",


dessert:data.dessert || "🍰 ของหวาน",


mode:data.mode || "สุ่ม",



date:

now.toLocaleDateString(
"th-TH"
),



time:

now.toLocaleTimeString(
"th-TH",

{

hour:"2-digit",

minute:"2-digit"

}

)


};






historyFoods.unshift(record);





// เก็บล่าสุด 30 ครั้ง


if(historyFoods.length>30){


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



window.saveHistory=

saveHistory;









// ===============================
// RENDER TIMELINE 📜
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

<li class="empty-history">

❤️ ยังไม่มีความทรงจำ

</li>

`;



return;


}









historyFoods.forEach(

(item,index)=>{



let chooser="";





if(item.mode==="แฟน"){


chooser="💕 Chompu เลือกให้";


}

else if(item.mode==="ฉัน"){


chooser="🌸 ฉันเลือก";


}

else{


chooser="🎲 หัวใจเลือก";


}








const li=

document.createElement(
"li"
);



li.className=

"timeline-item";







li.innerHTML=

`

<div class="timeline-content">


<h3>

❤️ ${item.food}

</h3>



<p>

🥤 ${item.drink}

</p>



<p>

🍰 ${item.dessert}

</p>



<p>

${chooser}

</p>



<span>

📅 ${item.date}

⏰ ${item.time}

</span>



<button onclick="removeHistory(${index})">

🗑️ ลบ

</button>



</div>


`;







list.appendChild(li);





});



}









// ===============================
// REMOVE ONE
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





if(typeof showToast==="function"){


showToast(

"🗑️ ลบความทรงจำแล้ว"

);


}



}



window.removeHistory=

removeHistory;









// ===============================
// CLEAR ALL
// ===============================


function clearHistory(){



if(!confirm(

"ล้างความทรงจำทั้งหมดไหม ❤️"

))

return;





historyFoods=[];



localStorage.removeItem(

"dinnerHistory"

);





renderHistory();



if(typeof showToast==="function"){


showToast(

"🧹 ล้าง Timeline แล้ว"

);


}



}



window.clearHistory=

clearHistory;









// ===============================
// GET HISTORY
// ===============================


function getHistory(){



return historyFoods;



}



window.getHistory=

getHistory;









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderHistory();


});
