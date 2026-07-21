/* =================================
 Dinner Roulette Chompu V19 ❤️
 Avoid Food System 🚫
 PART 3.3
================================= */


let avoidList =

JSON.parse(
localStorage.getItem("avoidList")
)
||
[];





function addAvoid(food){


if(!food)
return;



if(!avoidList.includes(food)){


avoidList.push(food);



localStorage.setItem(
"avoidList",
JSON.stringify(avoidList)
);



renderAvoid();



}



}



window.addAvoid=
addAvoid;







function renderAvoid(){


const list =
document.getElementById(
"avoidList"
);



if(!list)
return;



list.innerHTML="";



if(avoidList.length===0){


list.innerHTML=
`
<li>
ยังไม่มีรายการ
</li>
`;

return;


}




avoidList.forEach(
(item,index)=>{


const li =
document.createElement("li");



li.innerHTML=
`
🚫 ${item}

<button onclick="removeAvoid(${index})">
🗑️
</button>
`;



list.appendChild(li);



});



}



function removeAvoid(index){


avoidList.splice(index,1);



localStorage.setItem(
"avoidList",
JSON.stringify(avoidList)
);



renderAvoid();



}



function resetAvoid(){


avoidList=[];



localStorage.removeItem(
"avoidList"
);



renderAvoid();



}



window.removeAvoid=
removeAvoid;


window.resetAvoid=
resetAvoid;



document.addEventListener(
"DOMContentLoaded",
renderAvoid
);
