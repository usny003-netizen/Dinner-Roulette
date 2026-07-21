/* =================================
 Dinner Roulette V10 ❤️
 Avoid System 🚫
================================= */


let avoidFoods =

JSON.parse(

localStorage.getItem(
"avoidList"
)

)||[];






// ===============================
// ADD AVOID
// ===============================


function addAvoid(food){


if(!food)

return;




// กันซ้ำ

if(

avoidFoods.includes(food)

)

return;





avoidFoods.push(food);





localStorage.setItem(

"avoidList",

JSON.stringify(
avoidFoods

)

);





renderAvoid();



}





window.addAvoid =
addAvoid;









// ===============================
// REMOVE AVOID
// ===============================


function removeAvoid(index){



avoidFoods.splice(

index,

1

);





localStorage.setItem(

"avoidList",

JSON.stringify(
avoidFoods

)

);





renderAvoid();


}








window.removeAvoid =
removeAvoid;









// ===============================
// RENDER LIST
// ===============================


function renderAvoid(){



const list=

document.getElementById(
"avoidList"
);



if(!list)

return;





list.innerHTML="";






if(avoidFoods.length===0){



list.innerHTML=

`

<li>
ยังไม่มีรายการ 🚫
</li>

`;

return;


}







avoidFoods.forEach(

(food,index)=>{


let li=

document.createElement(
"li"
);




li.innerHTML=

`

<span>

🚫 ${food}

</span>



<button

class="deleteAvoid"

onclick="removeAvoid(${index})">

🗑️ ลบ

</button>

`;




list.appendChild(li);



});



}









// ===============================
// CLEAR ALL
// ===============================


const resetBtn=

document.getElementById(
"resetAvoidBtn"
);



if(resetBtn){



resetBtn.onclick=()=>{



avoidFoods=[];



localStorage.removeItem(
"avoidList"
);



renderAvoid();



};

}









// ===============================
// GET AVOID
// ===============================


function getAvoidList(){


return avoidFoods;


}



window.getAvoidList=
getAvoidList;









// ===============================
// LOAD
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderAvoid();



});
