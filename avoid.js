/* =================================
 Dinner Roulette V13 ❤️
 Smart Avoid Food System 🚫💕
================================= */



let avoidFoods =

JSON.parse(

localStorage.getItem(
"avoidList"

)

)||[];







// ===============================
// GET LIST
// ===============================


function getAvoidList(){


return avoidFoods;


}


window.getAvoidList =
getAvoidList;









// ===============================
// CHECK
// ===============================


function isAvoid(food){



return avoidFoods.includes(food);



}


window.isAvoid =
isAvoid;









// ===============================
// ADD
// ===============================


function addAvoid(food){



if(!food || food==="-")

return;





if(isAvoid(food)){


showAvoidMessage(
"🚫 เมนูนี้ไม่เลือกอยู่แล้ว"
);


return;


}





avoidFoods.push(food);



saveAvoid();



renderAvoid();



showAvoidMessage(

`🚫 ${food} ถูกซ่อนไว้`

);





refreshWheel();



}



window.addAvoid =
addAvoid;









// ===============================
// SAVE
// ===============================


function saveAvoid(){



localStorage.setItem(

"avoidList",

JSON.stringify(
avoidFoods

)

);


}









// ===============================
// REMOVE
// ===============================


function removeAvoid(index){



avoidFoods.splice(

index,

1

);



saveAvoid();



renderAvoid();



refreshWheel();



}



window.removeAvoid =
removeAvoid;









// ===============================
// RESET
// ===============================


function resetAvoid(){



avoidFoods=[];



localStorage.removeItem(

"avoidList"

);



renderAvoid();



refreshWheel();



showAvoidMessage(
"❤️ คืนเมนูทั้งหมดแล้ว"
);



}



window.resetAvoid =
resetAvoid;









// ===============================
// REFRESH WHEEL
// ===============================


function refreshWheel(){



if(typeof changeCategory==="function"){



const active=

document.querySelector(
".category.active"
);



if(active){



changeCategory(

active.dataset.category || "all"

);



}

else{


changeCategory("all");


}



}




}



window.refreshWheel =
refreshWheel;









// ===============================
// DISPLAY
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

❤️ ยังไม่มีเมนูที่ไม่กิน

</li>

`;



return;


}






avoidFoods.forEach(

(food,index)=>{



const li=

document.createElement(
"li"
);




li.innerHTML=

`

<div class="avoid-item">


🚫 ${food}



<button onclick="removeAvoid(${index})">

❤️ เอากลับ

</button>



</div>

`;





list.appendChild(li);



});



}









// ===============================
// TOAST
// ===============================


function showAvoidMessage(text){



const old=

document.querySelector(
".avoid-toast"
);



if(old)

old.remove();






const toast=

document.createElement(
"div"
);



toast.className=
"avoid-toast";



toast.innerHTML=text;




document.body.appendChild(
toast
);






setTimeout(()=>{


toast.remove();


},2200);



}



window.showAvoidMessage =
showAvoidMessage;









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderAvoid();



const resetBtn=

document.getElementById(
"resetAvoidBtn"
);



if(resetBtn){



resetBtn.onclick=

resetAvoid;



}



}

);
