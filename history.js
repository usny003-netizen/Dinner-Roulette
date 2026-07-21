/* =================================
 Dinner Roulette V13 ❤️
 Couple Timeline History System 📜💕
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





const now = new Date();




const record={


food:data.food,


drink:data.drink || "🥤 น้ำหวาน",


dessert:data.drink || data.dessert || "🍰 ของหวาน",


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






historyFoods.unshift(
record
);





// เก็บ 20 รายการล่าสุด

if(historyFoods.length>20){

historyFoods.pop();

}




localStorage.setItem(

"dinnerHistory",

JSON.stringify(historyFoods)

);



renderHistory();



}



window.saveHistory =
saveHistory;









// ===============================
// RENDER TIMELINE
// ===============================


function renderHistory(){



const list =

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



let chooser;



if(item.mode==="แฟน"){


chooser="💕 Chompu เลือก";


}

else if(item.mode==="ฉัน"){


chooser="🌸 ฉันเลือก";


}

else{


chooser="🎲 หัวใจเลือก";


}





let li=

document.createElement(
"li"
);



li.className=

"timeline-item";





li.innerHTML=

`

<div class="timeline-dot">

❤️

</div>


<div class="timeline-content">


<h3>

${item.food}

</h3>


<p>

🥤 ${item.drink}

</p>


<p>

🍰 ${item.dartess || item.dessert}

</p>


<p>

${chooser}

</p>


<span>

📅 ${item.date}

&nbsp;

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
// DELETE
// ===============================


function removeHistory(index){



historyFoods.splice(

index,

1

);




localStorage.setItem(

"dinnerHistory",

JSON.stringify(historyFoods)

);



renderHistory();



}



window.removeHistory =
removeHistory;









// ===============================
// CLEAR
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


}

);
