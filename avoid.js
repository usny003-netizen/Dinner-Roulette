/* =================================
 Dinner Roulette Chompu V17 ❤️
 Avoid Food System FINAL 🚫
================================= */



let avoidFoods =

JSON.parse(

localStorage.getItem(
"avoidList"
)

)

||[];





// ===============================
// ADD AVOID 🚫
// ===============================


function addAvoid(food){


if(!food || food==="-")


return;



// กันซ้ำ

if(
avoidFoods.includes(food)
){


if(typeof showToast==="function"){


showToast(
"🚫 เมนูนี้อยู่ในรายการไม่กินแล้ว"
);


}


return;


}





avoidFoods.push(food);





localStorage.setItem(

"avoidList",

JSON.stringify(
avoidFoods
)

);





renderAvoid();





if(typeof showToast==="function"){


showToast(
`🚫 ไม่กิน ${food}`
);


}



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
// CLEAR ALL
// ===============================


function clearAvoid(){



avoidFoods=[];



localStorage.removeItem(

"avoidList"

);



renderAvoid();



if(typeof showToast==="function"){


showToast(
"🔄 ล้างรายการไม่กินแล้ว"
);


}



}



window.clearAvoid =
clearAvoid;









// ===============================
// GET AVOID
// ===============================


function getAvoidFoods(){


return avoidFoods;


}



window.getAvoidFoods =
getAvoidFoods;









// ===============================
// CHECK
// ===============================


function isAvoid(food){


return avoidFoods.includes(food);


}



window.isAvoid =
isAvoid;









// ===============================
// RENDER 🚫
// ===============================


function renderAvoid(){



const list =

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

❤️ ยังไม่มีรายการ

</li>

`;



return;


}






avoidFoods.forEach(

(food,index)=>{



const li =

document.createElement(
"li"
);



li.innerHTML=

`

<span>

🚫 ${food}

</span>


<button onclick="removeAvoid(${index})">

❌

</button>


`;



list.appendChild(li);



});



}









// ===============================
// INPUT ADD SYSTEM
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{



renderAvoid();





const resetBtn =

document.getElementById(
"resetAvoidBtn"
);



if(resetBtn){



resetBtn.onclick=()=>{


clearAvoid();


};


}



});








