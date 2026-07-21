/* =================================
 Dinner Roulette Chompu V19 ❤️
 History Timeline 📜
 PART 3.2
================================= */


let dinnerHistory =

JSON.parse(
localStorage.getItem("dinnerHistory")
)
||
[];




// SAVE HISTORY

function saveHistory(data){


if(!data || !data.food)
return;



dinnerHistory.unshift({

food:data.food,

drink:data.drink,

dessert:data.dessert,

mode:data.mode,

date:
new Date()
.toLocaleDateString("th-TH")

});



localStorage.setItem(
"dinnerHistory",
JSON.stringify(dinnerHistory)
);



renderHistory();



}



window.saveHistory=
saveHistory;





function renderHistory(){


const list =
document.getElementById(
"historyList"
);



if(!list)
return;



list.innerHTML="";



if(dinnerHistory.length===0){


list.innerHTML=
`
<li>
❤️ ยังไม่มีความทรงจำ
</li>
`;

return;

}




dinnerHistory.forEach(
(item,index)=>{


const li =
document.createElement("li");



li.innerHTML=
`
❤️ ${item.food}

<br>
🥤 ${item.drink}

<br>
🍰 ${item.dessert}

<br>
📅 ${item.date}


<button onclick="removeHistory(${index})">
🗑️
</button>

`;



list.appendChild(li);



});



}




function removeHistory(index){


dinnerHistory.splice(index,1);



localStorage.setItem(
"dinnerHistory",
JSON.stringify(dinnerHistory)
);



renderHistory();



}



function clearHistory(){


dinnerHistory=[];



localStorage.removeItem(
"dinnerHistory"
);



renderHistory();



}



window.clearHistory=
clearHistory;


window.removeHistory=
removeHistory;




document.addEventListener(
"DOMContentLoaded",
renderHistory
);
