/* =================================
 Dinner Roulette V13 ❤️
 Avoid Food System 🚫💕
================================= */


let avoidFoods = JSON.parse(
localStorage.getItem("avoidList")
)||[];




// ===============================
// GET
// ===============================

function getAvoidList(){

return avoidFoods;

}

window.getAvoidList = getAvoidList;




// ===============================
// CHECK
// ===============================

function isAvoid(food){

return avoidFoods.includes(food);

}

window.isAvoid = isAvoid;





// ===============================
// ADD
// ===============================

function addAvoid(food){


if(!food || food==="-")

return;



if(isAvoid(food)){


showAvoidToast(
"🚫 เมนูนี้อยู่ในรายการแล้ว"
);


return;

}



avoidFoods.push(food);


saveAvoid();


renderAvoid();



showAvoidToast(
`🚫 ไม่เลือก ${food}`
);



refreshWheel();


}


window.addAvoid = addAvoid;







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


const food =
avoidFoods[index];


avoidFoods.splice(
index,
1
);



saveAvoid();


renderAvoid();


refreshWheel();



showAvoidToast(
`❤️ ${food} กลับมาแล้ว`
);


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



showAvoidToast(
"❤️ คืนเมนูทั้งหมดแล้ว"
);



}


window.resetAvoid =
resetAvoid;







// ===============================
// UPDATE WHEEL
// ===============================


function refreshWheel(){



if(typeof changeCategory==="function"){



let active =
document.querySelector(
".category.active"
);



changeCategory(

active?.dataset.category || "all"

);


}



}








// ===============================
// DISPLAY
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



list.innerHTML=`

<li class="empty-avoid">

❤️ ยังไม่มีเมนูที่ไม่กิน

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



li.className=
"avoid-card";



li.innerHTML=`

<div class="avoid-food">

🚫 ${food}

</div>


<button onclick="removeAvoid(${index})">

❤️ เอากลับ

</button>

`;



list.appendChild(li);


});



}








// ===============================
// TOAST
// ===============================


function showAvoidToast(text){



const old =
document.querySelector(
".avoid-toast"
);


if(old)

old.remove();





const toast =
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


},2000);



}


window.showAvoidToast =
showAvoidToast;








// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderAvoid();



const btn =
document.getElementById(
"resetAvoidBtn"
);



if(btn){

btn.onclick =
resetAvoid;

}



}

);
